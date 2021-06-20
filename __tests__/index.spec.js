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
  });
})();
