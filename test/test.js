var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-refresh-timer');

// describe('next/refreshTimer', function () {

// it('nx.refreshTimer', function () {
var total = 0;
var res = nx.refreshTimer(function () {
  total++;
  console.log('add!');
  return new Promise((resolve) => {
    resolve(total);
  })
}, (resp) => {
  console.log(resp);
  if (total === 3) {
    console.log('destroyed!');
    res.destroy();
  }
}, 3000);


  // });

// });
