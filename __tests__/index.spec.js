(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.eventValue diff e.target/detail/value', function () {
      const event1 = { target: { value: 111 } };
      const event2 = { detail: { value: 222 } };
      const event3 = true;

      expect(nx.eventValue(event1)).toBe(111);
      expect(nx.eventValue(event2)).toBe(222);
      expect(nx.eventValue(event3)).toBe(true);
    });

    test('nx.eventValue with customzie', function () {
      const event4 = { xxx: { yyy: { aaa: 'v4' } } };
      expect(nx.eventValue(event4, { path: 'xxx.yyy.aaa' })).toBe('v4');
    });

    test('get empty/null value', () => {
      const event1 = { target: { value: null } };
      const event2 = { target: { value: '' } };
      const event3 = { target: { value: undefined } };
      const event4 = 'only event'
      expect(nx.eventValue(event1)).toBe(null);
      expect(nx.eventValue(event2)).toBe('');
      expect(nx.eventValue(event3)).toEqual(event3);
      expect(nx.eventValue(event4)).toBe('only event');
    });
  });
})();
