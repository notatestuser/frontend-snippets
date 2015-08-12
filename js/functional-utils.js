'use strict';

(function(){

function find(list, testFn) {
    var foundItem;¬
    var ret = list.some(function(item) {¬
        foundItem = item;¬
        return testFn(item);¬
    });¬
    return ret && foundItem;¬
}

function negate(predicate) {
    return ! predicate.apply(this, arguments);
}

})();

