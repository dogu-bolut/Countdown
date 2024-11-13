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

const birth = new Date(2000,2,16,8,0,0);
let yearCounter = 2025;

const counter= document.querySelector('.counter');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
let birthdaytext = document.querySelector('.information-text');

let futureDate = new Date(yearCounter, 2, 16, 8, 0, 0);

function getRemainingTime() { // 1s = 1000ms, 1m = 60s, 1h = 60m, 1d = 24h
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  const month = months[futureDate.getMonth()];
  const date = futureDate.getDate();
  const weekday = weekdays[futureDate.getDay()];
  
  counter.textContent = `Birthday at ${weekday}, ${date} ${month} ${year} 0${hours}:0${minutes}am`;

  const futureTime = futureDate.getTime();
  
  const today = new Date().getTime();
  const t = futureTime - today;

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  // calculate all values
  let days = Math.floor(t / oneDay);
  let hourscalc = Math.floor(t % oneDay / oneHour);
  let minutescalc = Math.floor(t % oneHour / oneMinute);
  let seconds = Math.floor(t % oneMinute / oneSecond);
  console.log(`${days}:${hourscalc}:${minutescalc}:${seconds}`);

  // set values array
  const values = [days, hourscalc, minutescalc, seconds];

  function format(item) {
    if (item < 10) {
      return item = `0${item}`;
    }
    return item;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  birthdaytext.innerHTML = `<p>Counter of my ${futureDate.getFullYear() - birth.getFullYear()}th birthday. I hope I will be have a good year until my birthday.
        Life is good, and I love coding :D</p>`
  if (t <= 0) {
    yearCounter += 1;
    futureDate.setFullYear(yearCounter);
  //deadline.innerHTML = `<h1 class="expired">Hello there, unfortunately this birthday is past!</h1>`
}
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();