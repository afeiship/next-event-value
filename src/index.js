import nx from '@jswork/next';

const defaults = { path: 'target.value' };

nx.eventValue = function (inEvent, inOptions) {
  var options = nx.mix(null, defaults, inOptions);
  return nx.get(inEvent, options.path, nx.get(inEvent, 'detail.value', inEvent));
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = nx.eventValue;
}

export default nx.eventValue;
