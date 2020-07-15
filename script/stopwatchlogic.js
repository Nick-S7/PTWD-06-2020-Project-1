class Chronometer {
    constructor() {
      // ... your code goes here
      this.currentTime = 0;
      this.intervalId = 0;
    }
    startClick(callback) {
      // ... your code goes here
      this.intervalId = setInterval(() => this.currentTime += 1, 10); //made interval every 10 milliseconds to match up with the two digit clock format
    }
    getMinutes() {
      // ... your code goes here
      return this.twoDigitsNumber(Math.floor(this.currentTime / (60 * 100)));
    }
    getSeconds() {
      // ... your code goes here
      return this.twoDigitsNumber(Math.floor((this.currentTime / 100) % 60));
    }
    twoDigitsNumber() {
      // ... your code goes here
    }
    getMilliseconds() {
      let time = (this.currentTime / 100) % 1;
      return this.twoDigitsNumber(Math.floor(time.toFixed(2) * 100)); //used Math.floor and toFixed to correct rounding errors
    }
    twoDigitsNumber(getTime) {
      return getTime.toString().length === 2 ? getTime.toString() : '0' + getTime.toString();
    }
    stopClick() {
      // ... your code goes here
      clearInterval(this.intervalId);
    }
    resetClick() {
      // ... your code goes here
      this.currentTime = 0;
    }

  }