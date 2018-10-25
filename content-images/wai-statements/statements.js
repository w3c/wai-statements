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

    var _formState = new Map();
    _formState.set('changed', false);

    // Do initial form data storage (defaultvalues)
    function _init() {
      _today();
      updateConformanceMeaning();

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

    function _getFormGroup(groupName) {

      if (groupName) {
        return _formElement.elements[groupName];
      }
      return false;
    }

    function _getGroupValue(groupName) {
      var group = _getFormGroup(groupName) || [];
      var checkedMembers = Array.prototype.filter.call(group, function getChecked(member) {
        var isText = member.type === 'text';

        return member.checked || (isText && member.value);
      });

      if (checkedMembers.length > 0) {
        return checkedMembers.map(function returnValue(member) {
          return member.value;
        });
      }

      return [];
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
        inputValue = _getGroupValue(inputName) || [];

        if (inputValue.length > 0) {
          _formData.set(inputName, inputValue);
        }

      } else if (inputName && inputType === 'radio') {
        inputValue = _getGroupValue(inputName)[0] || '';

        if (inputValue.length > 0) {
          _formData.set(inputName, inputValue);
        }

      } else {
        // Single string values
        inputValue = input.value || '';
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

  /**
   * Saver module to save data as file
   * @return {object} saver methods
   */
  var saver = (function() {
    'use strict';

    var DEFAULTS = {
      MIMETYPE: 'text/plain',
      ENCODING: 'utf-8',
      FILENAME: 'accessibility-statement',
      XMLNS: 'http://www.w3.org/1999/xhtml',
    };

    var MIME_TYPES = {
      // csv: 'text/csv',
      // tsv: 'text/tab-separated-values',
      json: 'application/json',
      text: 'text/plain',
      html: 'text/html',
    };

    function _saveAs(data, mime) {

      switch (mime) {
        case 'html':
          _saveAsHtml(data);
          break;

        default:
          _saveAsText(data);
      }
    }

    function _saveData(data, params) {
      params = params || {};

      var mime = MIME_TYPES[params.mime] || params.mime || DEFAULTS.MIMETYPE;

      // Create file
      var blob = _createBlob(data, mime, DEFAULTS.ENCODING);
      var blobUrl = _createBlobURL(blob);
      var date = new Date();
      var dateString = [
        date.getFullYear(),
        date.getMonth().toString().length === 1 ? '0' + date.getMonth() : date.getMonth(),
        date.getDate().toString().length === 1 ? '0' + date.getDate() : date.getDate(),
      ].join('-');
      var filename = DEFAULTS.FILENAME
        + '_' + dateString
        + '.' + params.mime;

      // Saving the blob
      _saveResource(
        blobUrl,
        {
          filename: filename,
          revoke: params.revoke || true
        }
      );
    }

    function _createBlob(data, mime, encoding) {
      var mimetype = MIME_TYPES[mime] || mime || DEFAULTS.MIMETYPE;
      encoding = encoding || DEFAULTS.ENCODING;

      return new Blob(
        [data],
        {type: mimetype + ';charset=' + encoding}
      );
    }

    function _createBlobURL(blob) {
      var oURL = URL.createObjectURL(blob);
      return oURL;
    };

    function _saveResource(href, params) {
      var a = document.createElementNS(DEFAULTS.XMLNS, 'a');
      a.href = href;
      a.setAttribute('download', params.filename || '');

      // Add, click and remove
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      a = null;

      setTimeout(function() {
        URL.revokeObjectURL(href);
      }, 0);
    }

    function _saveAsText() {

    }

    function _saveAsHtml(data) {
      var mime = 'html';
      var header = '<!DOCTYPE html>\n';

      _saveData(
        header + data,
        {
          mime: mime,
        },
      );
    };


    return {
      saveAs: _saveAs,
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
    _enableStatementActions();

    // Set button-backtotop href
    Array.prototype.forEach.call(document.querySelectorAll('a[href="#top"]'), function setTopHref(el) {
      el.addEventListener('click', function handleBackToTopClick(event) {
        el.setAttribute('href', '#' + _getCurrentPage() + '-top');
      })
    })
  }

  function _enableStatementActions() {
    var actionButtonGroups = document.querySelectorAll('.statement-actions');

    Array.prototype.forEach.call(actionButtonGroups, function addClickListener(buttonGroup) {
      buttonGroup.addEventListener('click', function handleButtonGroupClick(event) {
        var target = event.target;
        var action = target.dataset.action;

        if (target.nodeName === "BUTTON" && action) {
          switch (action) {
            case 'preview_save_as_html':
              _savePreviewAs('html');
              break;

            case 'preview_save_as_json':
              _savePreviewAs('json');
              break;

            default:
              break;
          }
          event.stopPropagation();
        }
      });
    });
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
    var statementPreview = document.querySelector('#accstatement .page.preview');
    var conditionals;
    var i;

    // remove unmet conditionals
    conditionals = statementPreview.querySelectorAll('.conditional');
    for(i = 0; i < conditionals.length; i += 1) {
      (function(elm) {
        var negate = 'negate' in elm.dataset;
        var dataList = elm.dataset.if.split(',').map(function trimString(string) {
          return string.trim();
        });
        var dataListValues = dataList.filter(function withValue(key) {
          var data = getData(key);

          return data !== undefined && data !== '';
        });
        var conditionMet = dataListValues.length > 0;

        if(negate) {
          conditionMet = !conditionMet;
        }

        if(conditionMet) {
          elm.removeAttribute('hidden');
        } else {
          elm.setAttribute('hidden', '');
        }
      }(conditionals[i]));
    }

    // Print formdata into printables: [data-print]
    _printFormInput();

    // statement: limitations & alternatives
    (function() {
      var limitations = document.querySelectorAll('#accstmnt_issues fieldset:not(.proto)');
      var block = statementPreview.querySelector('#statement-limitations-block');
      var list = statementPreview.querySelector('#statement-limitations');
      var html = '';

      for(i = 0; i < limitations.length; i += 1) {
        (function(row) {
          var element = row.querySelector('input[name=element]').value;
          var description = row.querySelector('input[name=description]').value;
          var reason = row.querySelector('input[name=reason]').value;
          var us = row.querySelector('input[name=us]').value;
          var you = row.querySelector('input[name=you]').value;

          if(element || description || reason || us || you) {
            html += '\t<li><strong>'+element+'</strong>'+': '+description+' because '+reason+'. '+us+'. '+you+'.</li>\n';
          }

        }(limitations[i]));
      }

      if(html) {
        list.innerHTML = '\n' + html;
        block.removeAttribute('hidden');
      } else {
        block.setAttribute('hidden', '');
      }
    }());

  };

  function _savePreviewAs(filetype) {
    var saver = saver || null;

    saver.saveAs(data, filetype);
  }

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

  function _savePreviewAs(filetype) {

    if (filetype) {
      switch (filetype) {
        case 'html':
          // Prepare statement data
          var generatedStatementMarkup = _getGeneratedStatement();
          // Then use save function with data
          saver.saveAs(generatedStatementMarkup, filetype);
          break;
        default:

      }
    }
  }

  function _getGeneratedStatement() {
    var generatedStatement = document.getElementById('statement_generated').cloneNode(true);
    var hiddenElements = generatedStatement.querySelectorAll('[hidden]');

    // Remove all hidden nodes
    Array.prototype.forEach.call(hiddenElements, function remove(hidden) {
      hidden.parentNode.removeChild(hidden);
    });

    // Replace div with div.children
    Array.prototype.forEach.call(generatedStatement.querySelectorAll('div:nth-child(n)'), function expandDivChildren(child) {
      var nodeName = child.nodeName;
      var fragment = document.createDocumentFragment();

      if (nodeName === 'DIV') {
        Array.prototype.forEach.call(child.children, function appendToFragment(childChild) {
          var element = document.createElement(childChild.nodeName);
          element.innerHTML = childChild.innerHTML;
          fragment.appendChild(element);
        });

        generatedStatement.insertBefore(fragment, child);
        generatedStatement.removeChild(child);
      }
    });

    return Array.prototype.map.call(generatedStatement.children, function getCleanHTML(child) {
      var childChildren = child.children || false;

      function _cleanHtml(element) {
        element.classList.remove('conditional');

        if (element.classList.length === 0) {
          element.removeAttribute('class');
        }
      }

      _cleanHtml(child);

      if (childChildren) {
        Array.prototype.forEach.call(childChildren, function cleanHTML(childChild) {
          _cleanHtml(childChild);
        });
      }

      return child.outerHTML
        .replace(/( data-if=")[^\"]*\"/g, '')
        .replace(/( data-print=")[^\"]*\"/g, '')
        .replace(/( data-printdefault=")[^\"]*\"/g, '')
        .replace(/ {4,}/g, '\t')
        .replace(/ {2,}/g, '');
    }).join('\n')
      .replace(/\t(<\/)/g, '</')
      .replace(/\t\n/g, '');
  }

  function _addLine() {
    var buttons = document.querySelectorAll('#accstatement button.add-line');

    Array.prototype.forEach.call(buttons, function addClickListener(button) {
      button.addEventListener('click', function(event) {
        var parent = event.target.parentNode;
        var lines = parent.querySelectorAll('.line');
        var proto = parent.querySelector('.proto');
        var newLine = proto.cloneNode(true);

        newLine.classList.remove('proto');
        newLine.classList.add('line');
        newLine.innerHTML = newLine.innerHTML.replace(/\[n\]/g, lines.length + 1);

        proto.parentNode.insertBefore(newLine, proto);

        newLine.querySelector('input, textarea').focus();
      });
    });
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
