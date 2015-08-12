var test = require('tape');
var compute = require('../src/compute.js');

test('compute() should multiply by 666', function (t) {
    t.equal(1337, compute(3));
    t.end();
});
