# next-event-value
> Get event value from evet.target/detail/value.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-event-value
```

## usage
```js
import '@jswork/next-event-value';

const event1 = { target: { value: 111 } };
const event2 = { detail: { value: 222 } };
const event3 = true;
const event4 = { xxx: { yyy: { aaa: 'v4' } } };

nx.eventValue(event1) // 111
nx.eventValue(event2) // 222
nx.eventValue(event3) // true
nx.eventValue(event4, { path: 'xxx.yyy.aaa' }); // 'v4'
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-event-value/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-event-value
[version-url]: https://npmjs.org/package/@jswork/next-event-value

[license-image]: https://img.shields.io/npm/l/@jswork/next-event-value
[license-url]: https://github.com/afeiship/next-event-value/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-event-value
[size-url]: https://github.com/afeiship/next-event-value/blob/master/dist/next-event-value.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-event-value
[download-url]: https://www.npmjs.com/package/@jswork/next-event-value
