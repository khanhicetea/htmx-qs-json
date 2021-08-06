var qsParse = require('qs/lib/parse')

var pluginOnEvent = function (name, evt) {
    if (name === "htmx:configRequest") {
        evt.detail.headers['Content-Type'] = "application/json";
    }
}

var pluginEncodeParameters = function(xhr, parameters, elt) {
    xhr.overrideMimeType('text/json');

    // Transform orginal parameters to query string
    var queryString = Object.keys(parameters).map(function(key) {
        // EncodeURI value
        return key+"="+encodeURIComponent(parameters[key])
    }).join("&")
    // Transform query string to JSON
    var jsonData = qsParse(queryString)

    return (JSON.stringify(jsonData));
}

htmx.defineExtension('qs-json', {
    onEvent: pluginOnEvent,
    encodeParameters : pluginEncodeParameters
});