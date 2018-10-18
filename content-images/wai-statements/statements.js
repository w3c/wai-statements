var page = {
  init: function() {
    window.onhashchange = page.showPage;
    page.setPage();
    page.checkBoxGroups();
    page.addLine();
    page.today();

    document.getElementById('accstmnt_btn_preview').addEventListener('click', function() {
      location.hash = 'preview';
    });

    // Set button-backtotop href
    Array.prototype.forEach.call(document.querySelectorAll('a[href="#top"]'), function setTopHref(el) {
      el.addEventListener('click', function handleBackToTopClick(event) {
        el.setAttribute('href', '#' + page.getCurrentPage() + '-top');
      })
    })
  },
  routes: [
    'create',
    'preview',
  ],
  getCurrentPage: function getCurrentPage() {
    return Array.prototype.filter.call(page.routes, function(route) {
      var hash = window.location.hash;

      return hash.indexOf(route) !== -1;
    })[0];
  },
  setPage: function() {
    if(page.routes.indexOf(location.hash.substring(1)) < 0) {
      location.hash = 'create';
    } else {
      page.showPage();
    }
  },
  showPage: function() {
    var i;
    var pages = document.querySelectorAll('#accstatement .page');
    var currentPage = page.getCurrentPage();
    var backToTop = document.querySelectorAll('a.button-backtotop');

    // Set back to top anchor href
    Array.prototype.forEach.call(backToTop, function setHref(el) {
      el.setAttribute('href', '#' + page.getCurrentPage() + '-top');
    })

    if(currentPage === 'preview') {
      page.showPreview();
    }

    // hide all pages
    for(i = 0; i < pages.length; i += 1) {
      pages[i].setAttribute('hidden', '');
    }

    // show current page
    document.querySelector('#accstatement .page.'+currentPage).removeAttribute('hidden');

    window.scrollTo(0, 0);
  },
  checkBoxGroups: function() {
    var i, j;
    var inputs = document.querySelectorAll('#accstatement .radio-group input');

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
  },
  addLine: function() {
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
  },
  showPreview: function() {
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
        var input = document.getElementById(elm.dataset.if);
        var value = (['radio', 'checkbox'].indexOf(input.getAttribute('type')) < 0) ? input.value : input.checked;

        if('negate' in elm.dataset) {
          value = !value;
        }

        if(!value) {
          elm.setAttribute('hidden', '');
        } else {
          elm.removeAttribute('hidden');
        }
      }(conditionals[i]));
    }

    // replace all text inputs
    for(i = 0; i < inputs.length; i += 1) {
      result.innerHTML = result.innerHTML.split('['+inputs[i].id+']').join(inputs[i].value);
    }

    // statement: measures
    (function() {
      var block = result.querySelector('#statement-measures-block');
      var list = result.querySelector('#statement-measures');
      var inputPredefined = document.querySelectorAll('#accstatement .page.create #effort-list input:checked');
      var inputOther = document.querySelectorAll('#accstatement .page.create #accstmnt_orginfo_othermeasures :not(.proto) > input');
      var html = '';

      // add from predefined
      for(i = 0; i < inputPredefined.length; i += 1) {
        if(inputPredefined[i].labels[0].innerText.length) {
          html += '<li>'+inputPredefined[i].labels[0].innerText+'</li>';
        }
      }

      // add from other
      for(i = 0; i < inputOther.length; i += 1) {
        if(inputOther[i].value.length) {
          html += '<li>'+inputOther[i].value+'</li>';
        }
      }

      if(html) {
        list.innerHTML = html;
      } else {
        block.setAttribute('hidden', '');
      }
    }());

    // statement: conformance status
    (function() {
      var standardAppliedInput = document.querySelector('#accstatement #standard-applied input:checked');
      var standardAppliedOtherInput = document.querySelector('#accstatement #standard-applied #accstmnt_standard_other_name');
      var standardApplied = standardAppliedInput && standardAppliedInput.labels[0].innerText === 'Other'
        ? standardAppliedOtherInput.value
        : standardAppliedInput.labels[0].innerText;
      var statusInput = document.querySelector('#accstatement #conformance-status input:checked');
      var status = statusInput.labels[0].querySelector('.status');
      var meaning = statusInput.labels[0].querySelector('.meaning');
      var block = result.querySelector('#statement-conformance');
      var html = block.innerHTML;
      var additions = result.querySelector('#statement-additions');

      if(standardApplied && status) {
        html = html.replace('[accstmnt_standard_applied]', standardApplied);
        html = html.split('[conformance_status]').join(status.innerText);
        html = html.replace('[conformance_meaning]', meaning.innerText);
        block.innerHTML = html;
      } else {
        block.setAttribute('hidden', '');
        additions.setAttribute('hidden', '');
      }
    }());

    // statement: feedback
    (function() {
      var items = document.querySelectorAll('#accstatement #form-feedback input:not(#accstmnt_contact_responsetime)');
      var list = result.querySelector('#statement-feedback');
      var html = '';

      for(i = 0; i < items.length; i += 1) {
        if(items[i].value) {
          html += '<li>'+items[i].labels[0].innerText+': ';
          if(items[i].getAttribute('type') === 'email') {
            html += '<a href="mailto:'+items[i].value+'">'+items[i].value+'</a>';
          } else if(items[i].getAttribute('type') === 'url') {
            html += '<a href="'+items[i].value+'">'+items[i].value+'</a>';
          } else {
            html += items[i].value;
          }
          html += '</li>';
        }
      }

      list.innerHTML = html;
    }());

    // statement: technologies for conformance
    (function() {
      var parent = result.querySelector('#statement-conftech');
      var relied_techs = document.querySelectorAll('#accstatement #tech_relied input:checked');
      var list = result.querySelector('#statement-tech');
      var html = '';

      Array.prototype.forEach.call(relied_techs, function(tech) {
        var isOtherTech = tech.name === 'accstmnt_tech_other';
        var techValue = tech.labels[0].innerText;

        if (isOtherTech) {
          techValue = tech.parentNode.querySelector('[type="checkbox"] ~ [type="text"]').value;
        }

        html += '<li>'+techValue+'</li>';
      });

      if(html.length) {
        list.innerHTML = html;
      } else {
        parent.setAttribute('hidden', '');
      }
    }());

    // statement: assistive technologies
    (function() {
      var parent = result.querySelector('#statement-asstech');
      var compatible = result.querySelector('#statement-asstech-compatible-block');
      var incompatible = result.querySelector('#statement-asstech-incompatible-block');
      var compList = result.querySelector('#statement-asstech-compatible');
      var incompList = result.querySelector('#statement-asstech-incompatible');
      var inputCompatible = document.querySelectorAll('#accstatement #compatible_tech input');
      var inputIncompatible = document.querySelectorAll('#accstatement #incompatible_tech input');
      var compHtml = '';
      var incompHtml = '';

      for(i = 0; i < inputCompatible.length; i += 1) {
        if(inputCompatible[i].value) {
          compHtml += '<li>'+inputCompatible[i].value+'</li>';
        }
      }

      for(i = 0; i < inputIncompatible.length; i += 1) {
        if(inputIncompatible[i].value) {
          incompHtml += '<li>'+inputIncompatible[i].value+'</li>';
        }
      }

      if(compHtml || incompHtml) {
        if(compHtml) {
          compList.innerHTML = compHtml;
        } else {
          compatible.setAttribute('hidden', '');
        }

        if(incompHtml) {
          incompList.innerHTML = incompHtml;
        } else {
          incompatible.setAttribute('hidden', '');
        }
      } else {
        parent.setAttribute('hidden', '');
      }
    }());

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

    // statement: approval
    (function() {
      if(!document.getElementById('accstmnt_orginfo_approved_name').value
      && !document.getElementById('accstmnt_orginfo_approved_function').value) {
        result.querySelector('#statement-approval-block').setAttribute('hidden', '');
      }
    }());


  },
  today: function() {
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
};

(function (fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}(page.init));
