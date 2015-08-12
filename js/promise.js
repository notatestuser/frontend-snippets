'use strict';

(function() {

function delay(t) {
    function wait(fulfill) {
        setTimeout(function() {
            console.log('Resolving after', t);
            fulfill(t);
        }, t);
    }
    return new Prom(wait);
}

})();
