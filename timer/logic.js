var daysEl = document.querySelector("[data-value='days']");
var hoursEl = document.querySelector("[data-value='hours']");
var minsEl = document.querySelector("[data-value='mins']");
var secsEl = document.querySelector("[data-value='secs']");

new countDownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 24, 2022'),
});
