var saver = (function() {
  'use strict';

  function _saveAs(data, mime) {
    console.log('Save data ', data);
    console.log('as ', mime);
  }

  return {
    saveAs: _saveAs,
  };
}());

function Saver() {
  var _saver;

  // Properties
  this.defaultFilename = 'accessibility-statement-draft';
  this.defaultEncoding = 'utf-8';
  this.xmlns = 'http://www.w3.org/1999/xhtml';
  this.mimeShortcuts = {
    // csv: 'text/csv',
    // tsv: 'text/tab-separated-values',
    // json: 'application/json',
    // txt: 'text/plain',
    html: 'text/html',
  };
  this.defaultMime = 'text/html';

  // METHODS

  /**
   * Create a file blob
   * @param  {<array|string>}   data
   * @param  {string}           mime
   * @param  {string}           encoding
   * @return {Blob}
   */
  this.createBlob = function(data, mime, encoding) {
    mime = this.mimeShortcuts[mime] || mime || this.defaultMime;
    return new Blob(
      [data],
      {type: mime + ';charset=' + encoding || this.defaultEncoding}
    );
  };

  this.blobURL = function(blob) {
    var oURL = URL.createObjectURL(blob);
    return oURL;
  };

  this.saveResource = function(href, params) {
    var a = document.createElementNS(this.xmlns, 'a');
    a.href = href;

    a.setAttribute('download', params.filename || '');

    // Firefox needs the link attached to the page's DOM
    if ('document' in _root)
      document.body.appendChild(a);

    a.click();

    if ('document' in _root)
      document.body.removeChild(a);
    a = null;

    // Revoking the object URL if we want to
    if (params.revoke)
      setTimeout(function() {
        URL.revokeObjectURL(href);
      });
  };

  // Main interface
  this.saveData = function(data, params) {
    params = params || {};

    // Creating the blob
    var blob = this.createBlob(data, params.mime, params.encoding);

    // Saving the blob
    this.saveResource(
      this.blobURL(blob),
      {
        filename: params.filename || this.defaultFilename,
        revoke: params.revoke || true
      }
    );
  };
}
var artoo = {};
artoo.saveJson = function(data, params) {
  params = filenamePolymorphism(params);

  // Enforcing json
  if (typeof data !== 'string') {
    if (params.pretty || params.indent)
      data = JSON.stringify(data, undefined, params.indent || 2);
    else
      data = JSON.stringify(data);
  }
  else {
    if (params.pretty || params.indent)
      data = JSON.stringify(JSON.parse(data), undefined, params.indent || 2);
  }

  // Extending params
  artoo.save(
    data,
    helpers.extend(params, {filename: 'data.json', mime: 'json'})
  );
};

artoo.savePrettyJson = function(data, params) {
  params = filenamePolymorphism(params);
  artoo.saveJson(data, helpers.extend(params, {pretty: true}));
};

artoo.saveXml = function(data, params) {
  params = filenamePolymorphism(params);

  var s = (helpers.isSelector(data) && selectorOuterHTML(data)) ||
          (helpers.isDocument(data) && data.documentElement.outerHTML) ||
          data,
      type = params.type || 'xml',
      header = '';

  // Determining doctype
  if (type === 'html' && helpers.isDocument(data)) {
    var dt = data.doctype;

    if (dt)
      header = '<!DOCTYPE ' + (dt.name || 'html') +
               (dt.publicId ? ' PUBLIC "' + dt.publicId + '"' : '') +
               (dt.systemId ? ' "' + dt.systemId + '"' : '') + '>\n';
  }
  else if (type === 'xml' || type === 'svg') {
    if (!~s.search(/<\?xml/))
      header = '<?xml version="1.0" encoding="' +
               (params.encoding || 'utf-8') +
               '" standalone="yes"?>\n';
  }

  if (type === 'svg') {
    header += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ' +
              '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n';
  }

  artoo.save(
    header + s,
    helpers.extend(
      params,
      {mime: 'html', filename: 'document.xml'})
  );
};

artoo.saveHtml = function(data, params) {
  artoo.saveXml(
    data,
    helpers.extend(
      filenamePolymorphism(params),
      {filename: 'document.html', type: 'html'}
    )
  );
};
