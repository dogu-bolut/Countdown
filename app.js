const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const futureDate = new Date(2024, 2, 16, 8, 0, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];


giveaway.textContent = `Birthday at ${weekday}, ${date} ${month} ${year} 0${hours}:0${minutes}am`;

const futureTime = futureDate.getTime();

function getRemainingTime() { // 1s = 1000ms, 1m = 60s, 1h = 60m, 1d = 24h
  const today = new Date().getTime();
  const t = futureTime - today;

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  // calculate all values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor(t % oneDay / oneHour);
  let minutes = Math.floor(t % oneHour / oneMinute);
  let seconds = Math.floor(t % oneMinute / oneSecond);
  console.log(`${days}:${hours}:${minutes}:${seconds}`);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return item = `0${item}`;
    }
    return item;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h1 class="expired">Hello there, unfortunately this birthday is past!</h1>`
  }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();