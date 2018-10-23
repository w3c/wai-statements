/**
 * ACCESSIBILITY STATEMENT GENERATOR
 * ---
 * [description]
 * ---
 */
(function() {
  'use strict';

  /**
   * statementForm module
   * ---
   * Helper module to read and write formdata
   * ---
   * @return {module} Module methods object; see method for description
   */
  var statementForm = (function() {
    'use strict';

    var _formData = new Map();

    var _formElement = document.forms.create_accessibility_statement_form;

    var _formState = new Map()
      .set('changed', false);

    // Do initial form data storage (defaultvalues)
    function _init() {
      _today();

      Array.prototype.forEach.call(_formElement.elements, function setinitialData(item) {
        var nodeName = item.nodeName;
        var isProto = item.parentNode && item.parentNode.classList.contains('proto');

        if (['INPUT', 'TEXTAREA'].indexOf(nodeName) !== -1 && !isProto) {
          _setFormData(item);
        }
      });
    }

    function _getData(identifier) {
      var data = {};

      if (identifier && typeof identifier === 'string') {
        return _formData.get(identifier);

      } else if (!identifier) {
        _formData.forEach(function returnData(value, key, map) {
          data[key] = value;
        });

        return data;
      }
    }

    function _today() {
      var dateToday = new Date();
      var day = dateToday.getDate();
      var month = dateToday.getMonth() + 1;
      var year = dateToday.getFullYear();
      var dateTodayString = ''
        + day + '-'
        + month + '-'
        + year;
      var dates = document.querySelectorAll('#accstatement input.today');
      var i;

      for(i = 0; i < dates.length; i += 1) {
        try {
          dates[i].valueAsDate = dateToday;
        } catch (e) {
          dates[i].value = dateTodayString;
        }
      }
    }

    /**
     * Transform input values into correct key value pairs
     * Set single string value or array of string values to key
     * @param       {HtmlFormElement} input
     */
    function _setFormData(input) {
      var inputName = input.name || undefined;
      var inputType = input.type || 'text';
      var inputValue;

      if (inputName && inputType !== 'radio') {
        inputValue = [];

        _formElement.elements[inputName].forEach(function pushValue(item) {
          if (
            (item.type === 'checkbox' && item.checked)
            || (item.type !== 'checkbox' && item.value)
          ) {
            inputValue.push(item.value);
          }
        });

        if (inputValue.length > 0) {
          _formData.set(inputName, inputValue);
        }

      } else if (inputName && inputType === 'radio') {
        inputValue = _formElement.elements[inputName].value;

        if (inputValue.length > 0) {
          _formData.set(inputName, inputValue);
        }

      } else if (input.value) {
        // Single string values
        inputValue = input.value;
        _formData.set(input.id, inputValue);
      }

    }

    // Custom form data manipulation
    function updateConformanceMeaning() {
      var conformanceGroup = _formElement.elements.accstmnt_conformance;
      var activeConformance = Array.prototype.filter.call(conformanceGroup, function getChecked(item) {
        return item.checked;
      })[0];
      var meaningInput = _formElement.elements.accstmnt_conformance_meaning;
      var meaningElement = activeConformance.parentNode.querySelector('.meaning');
      var meaningValue = meaningElement && meaningElement.innerText || '';

      if (meaningInput.value !== meaningValue) {
        meaningInput.value = meaningValue;
        _setFormData(meaningInput);
      }
    }

    /**
     * EXECUTE AREA
     */
    // Initiate statementForm
    _init();

    _formElement.addEventListener('change', function handleFormChange(event) {
      var formChanged = _formState.get('changed');
      var target = event.target;
      var allowedInputs = [
        'INPUT',
        'TEXTAREA',
      ];

      // Store formdata for changed input
      if (allowedInputs.indexOf(target.nodeName) !== -1 && target.id) {
        _setFormData(target);
      }

      if (!formChanged) {
        _formState.set('changed', true);
      }

      // Custom form manipulation
      if (target.name && target.name === 'accstmnt_conformance') {
        updateConformanceMeaning();
      }
    });

    return {
      data: {
        get: _getData,
        set: _formData.set,
      },
      elelment: _formElement,
      state: _formState,
    };
  }());

  var ROUTES = [
    'create',
    'preview',
  ];

  function _init() {
    window.onhashchange = _showPage;
    window.onbeforeunload = function warnOnLeave(event) {
      var formChanged = statementForm.state.get('changed');

      if (formChanged) {
        return window.confirm();
      }
    }

    _setPage();
    _checkBoxGroups();
    _addLine();

    document.getElementById('accstmnt_btn_preview').addEventListener('click', function() {
      location.hash = 'preview';
    });

    // Set button-backtotop href
    Array.prototype.forEach.call(document.querySelectorAll('a[href="#top"]'), function setTopHref(el) {
      el.addEventListener('click', function handleBackToTopClick(event) {
        el.setAttribute('href', '#' + _getCurrentPage() + '-top');
      })
    })
  }

  /**
   * Return current active page
   * @return      {string} Current page hash
   */
  function _getCurrentPage() {
    return Array.prototype.filter.call(ROUTES, function(route) {
      var hash = window.location.hash;

      return hash.indexOf(route) !== -1;
    })[0];
  }

  // Set initial app route hash
  function _setPage() {
    if(ROUTES.indexOf(location.hash.substring(1)) < 0) {
      window.location.hash = 'create';
    } else {
      _showPage();
    }
  }

  function _showPage() {
    var i;
    var pages = document.querySelectorAll('#accstatement .page');
    var currentPage = _getCurrentPage();
    var backToTop = document.querySelectorAll('a.button-backtotop');

    // Set back to top anchor href
    Array.prototype.forEach.call(backToTop, function setHref(el) {
      el.setAttribute('href', '#' + _getCurrentPage() + '-top');
    })

    if(currentPage === 'preview') {
      _showPreview();
    }

    // hide all pages
    for(i = 0; i < pages.length; i += 1) {
      pages[i].setAttribute('hidden', '');
    }

    // show current page
    document.querySelector('#accstatement .page.' + currentPage).removeAttribute('hidden');

    window.scrollTo(0, 0);
  }

  function _showPreview() {
    var getData = statementForm.data.get;
    var proto = document.querySelector('#accstatement .page.preview .proto');
    var result = document.querySelector('#accstatement .page.preview .result');
    var inputs = document.querySelectorAll('#accstatement .page.create input, #accstatement .page.create textarea');
    var conditionals;
    var i;

    result.innerHTML = proto.innerHTML;

    // remove unmet conditionals
    conditionals = result.querySelectorAll('.conditional');
    for(i = 0; i < conditionals.length; i += 1) {
      (function(elm) {
        var negate = 'negate' in elm.dataset;
        var targetData = elm.dataset.if;
        var dataKey = targetData || undefined;
        var dataValue = dataKey && getData(dataKey) || false;


        if(negate) {
          dataValue = !dataValue;
        }

        if(!dataValue) {
          elm.setAttribute('hidden', '');
        } else {
          elm.removeAttribute('hidden');
        }
      }(conditionals[i]));
    }

    // Print formdata into printables: [data-print]
    _printFormInput();

    // statement: limitations & alternatives
    (function() {
      var limitations = document.querySelectorAll('#accstmnt_issues fieldset:not(.proto)');
      var block = result.querySelector('#statement-limitations-block');
      var list = result.querySelector('#statement-limitations');
      var html = '';

      for(i = 0; i < limitations.length; i += 1) {
        (function(row) {
          var element = row.querySelector('input[name=element]').value;
          var description = row.querySelector('input[name=description]').value;
          var reason = row.querySelector('input[name=reason]').value;
          var us = row.querySelector('input[name=us]').value;
          var you = row.querySelector('input[name=you]').value;

          if(element || description || reason || us || you) {
            html += '<li><strong>'+element+'</strong>'+': '+description+' because '+reason+'. '+us+'. '+you+'.</li>';
          }

        }(limitations[i]));
      }

      if(html) {
        list.innerHTML = html;
      } else {
        block.setAttribute('hidden', '');
      }
    }());

  };

  function _printFormInput() {
    var getData = statementForm.data.get;
    var printCollection = document.querySelectorAll('[data-print]');

    Array.prototype.forEach.call(printCollection, function printInput(item) {
      var nodeName = item.nodeName;
      var target = item.dataset.print;
      var printDefault = item.dataset.printdefault || '(no input)';
      var printData = getData(target) || printDefault;
      var dataList = Array.isArray(printData);

      if (dataList && nodeName === 'UL' || nodeName === 'OL') {
        item.innerHTML = printData
          .map(function wrapInLi(item) {
            return '<li>' + item + '</li>'
          })
          .join('');

      } else {

        switch (nodeName) {
          case 'A':
            var hrefPrefix = item.getAttribute('href');

            item.setAttribute('href', hrefPrefix + printData);
            item.innerText = printData;
            break;

          default:
            item.innerText = printData;
        }
      }
    })

  }

  function _addLine() {
    var i;
    var buttons = document.querySelectorAll('#accstatement button.add-line');

    for(i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener('click', function() {
        var parent = this.parentNode;
        var proto = parent.querySelector('.proto');
        var lines = parent.querySelectorAll('.line');
        var newLine = document.createElement('template');

        newLine.innerHTML = proto.outerHTML;
        newLine = newLine.content.firstChild;
        newLine.classList.remove('proto');
        newLine.classList.add('line');
        newLine.innerHTML = newLine.innerHTML.split('[n]').join(lines.length + 1);

        proto.parentNode.insertBefore(newLine, proto);
        newLine.querySelector('input, textarea').focus();
      });
    }
  }

  function _checkBoxGroups() {
    var i, j;
    var inputs = document.querySelectorAll('#accstatement .radio-group input');

    // Set checked to false on radiogroup inputs... why?!
    for(i = 0; i < inputs.length; i += 1) {
      inputs[i].addEventListener('click', function() {
        for(j = 0; j < inputs.length; j += 1) {
          if(this.name === inputs[j].name
          && this.id !== inputs[j].id) {
            inputs[j].checked = false;
          }
        }
      });
    }
  };

  _init();
}());
