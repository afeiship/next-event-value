# next-refresh-timer
> A timer focus on refresh

## install:
```bash
npm install -S afeiship/next-refresh-timer --registry=https://registry.npm.taobao.org
```

## usage:
```js
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
```
