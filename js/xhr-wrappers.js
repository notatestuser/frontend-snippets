'use strict';

(function(){

function requestJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.open('GET', url, true);
    xhr.send(null);
}

function postJSON(url, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}

// example GET request
requestJSON('/some/funky/endpoint',
    function(list) {
        doSomethingFn();
    });

})();

