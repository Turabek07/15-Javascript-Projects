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
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".dealine");
const items = document.querySelectorAll(".deadline-format h4");
let futureDate = new Date(2023, 6, 2, 11, 30, 0);
//  console.log(futureDate)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
let mins = futureDate.getMinutes();
let month = futureDate.getMonth()
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `give away ends on ${weekday}, ${date}th ${month} ${year} ${hours}:${mins}am`

//future time in ms

const futureTime = futureDate.getTime()

function getRemainingTime() {
  const today = new Date().getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = t / oneDay;
  days = Math.floor(days)
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //set values array

  const values = [days,hours,minutes,seconds]
}