# light-cli-spinner

A simple light weight spinner for node cli.

---

## Installation

This package is available on [npm](http://npmjs.com) as `light-cli-spinner`.

``` sh
npm install light-cli-spinner
```

## Example usage

````javascript
const Spinner = require('light-cli-spinner').Spinner;

const spin = new Spinner({
  text: 'Please wait...',
  spinners: ['⠋', '⠙', '⠹', '⠼', '⠴', '⠦', '⠧', '⠏']
});
spin.start();

spin.text = 'Processing...';

spin.stop();
````

## APIs

```
const obj = new Spinner({
  text: 'Please wait...',
  spinners: ['⠋', '⠙', '⠹', '⠼', '⠴', '⠦', '⠧', '⠏']
});
```

Create a new Spinner object.


**`obj.start()`**

Starts the spinner.


**`obj.stop()`**

Stops the spinner.


**`obj.text`**

Changing the spinner text content.

