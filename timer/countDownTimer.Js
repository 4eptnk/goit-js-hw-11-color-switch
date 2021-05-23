class countDownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalTimer = null;
    this.timer();
  }

  timer() {
    this.intervalTimer = setInterval(() => {
      var time = this.targetDate - new Date();

      if (time < 0) {
        clearInterval(this.intervalTimer);
        return;
      }

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      daysEl.textContent = days;
      hoursEl.textContent = hours;
      minsEl.textContent = mins;
      secsEl.textContent = secs;
    }, 1000);
  }
}
