class Spinner {
    constructor(config) {
        this.index = 0;
        const { spinners, text, timeout } = config || {};
        this.spinners = spinners.split('') || ['⠋', '⠙', '⠹', '⠼', '⠴', '⠦', '⠧', '⠏'];
        this.timeout = timeout || 100;
        this.text = text || '';
    }
    start() {
        this.index = 0;
        clearTimeout(this.timeHandler);
        this.doing();
    }
    stop() {
        clearTimeout(this.timeHandler);
        this.clearLine();
    }
    // https://en.wikipedia.org/wiki/ANSI_escape_code
    clearLine() {
        const clearChar = '\u001b[2K'; // use 'CSI n K' erase in line : \x01[nK
        process.stdout.write(clearChar);
        const moveCursor = `\u001b[${(this.message || '').length + 1}D`; // use 'CSI n D' cursor back : \x01[nD
        process.stdout.write(moveCursor);
    }
    output(message) {
        this.message = message;
        process.stdout.write(message);
    }
    doing() {
        const message = `${this.spinners[this.index++]} ${this.text || ''}`;
        this.clearLine();
        this.output(message);
        if (this.index >= this.spinners.length) {
            this.index = 0;
        }
        this.timeHandler = setTimeout(() => {
            this.doing();
        }, this.timeout);
    }
  }
  
  exports.Spinner = Spinner;