(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.refreshTimer = function (inRequest, inResponse, inInterval) {
    var interval = inInterval || 1e4;
    var timer = global.setInterval(function () {
      inRequest().then(function (response) {
        inResponse(response);
      });
    }, interval);
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
