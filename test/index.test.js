const assert = require('assert');
const Spinner = require('./spinner').Spinner;
describe('/test/index.test.js', () => {
  it('base', async () => {
    const spin = new Spinner({
      text: '测试',
    });
    console.log('1');
    spin.start();
    console.log('2');
    await new Promise((resolve) => {
      setTimeout(resolve, 10000);
    });
    console.log('3');
    spin.text = '测试2';
    console.log('4');
    await new Promise((resolve) => {
      setTimeout(resolve, 10000);
    });
    console.log('5');
    spin.stop();
    assert(true);
  });
});
