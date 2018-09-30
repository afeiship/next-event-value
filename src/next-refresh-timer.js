(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.refreshTimer = function (inCallback, inInterval, isImmediateExecute) {
    var interval = inInterval || 1e4;
    var timer = global.setInterval(function () {
      inCallback();
    }, interval);
    isImmediateExecute && inCallback();
    return {
      destroy: function () {
        global.clearInterval(timer);
      }
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.refreshTimer;
  }

}());
