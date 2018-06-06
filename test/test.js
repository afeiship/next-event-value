var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-refresh-timer');

// describe('next/refreshTimer', function () {

// it('nx.refreshTimer', function () {
var total = 0;
var res = nx.refreshTimer(function () {
  total++;
  console.log(total);
}, 3000, true);


  // });

// });
