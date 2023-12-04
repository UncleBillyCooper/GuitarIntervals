const btn = document.querySelector(".btn");
const step = document.querySelector(".stepNum");
const guitarString = document.querySelector(".stringNum");
const Interval = document.querySelector(".currentInterval");

let curNum = 0;
console.log(curNum);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const fstArr = [
  "секунда большая",
  "терция малая",
  "кварта",
  "квинта",
  "секста малая",
  "септима малая",
  "октава",
];

const scdArr = [
  "секунда малая",
  "терция малая",
  "кварта",
  "тритон",
  "секста малая",
  "септима малая",
  "октава",
];

const trdArr = [
  "секунда большая",
  "терция большая",
  "кварта",
  "квинта",
  "секста большая",
  "септима большая",
  "октава",
];

const frtArr = [
  "секунда большая",
  "терция малая",
  "кварта",
  "квинта",
  "секста большая",
  "септима малая",
  "октава",
];

const fivArr = [
  "терция малая",
  "кварта",
  "квинта",
  "секста малая",
  "септима малая",
  "октава",
];

const sixArr = [
  "секунда большая",
  "терция большая",
  "тритон",
  "квинта",
  "секста большая",
  "септима большая",
  "октава",
];

const sevArr = [
  "секунда большая",
  "терция большая",
  "кварта",
  "квинта",
  "септима малая",
  "октава",
];

function checkStep(num) {
  if (num === 1) {
    Interval.textContent = fstArr[getRandomInt(0, 6)];
  } else if (num === 2) {
    Interval.textContent = scdArr[getRandomInt(0, 6)];
  } else if (num === 3) {
    Interval.textContent = trdArr[getRandomInt(0, 6)];
  } else if (num === 4) {
    Interval.textContent = frtArr[getRandomInt(0, 6)];
  } else if (num === 5) {
    Interval.textContent = fivArr[getRandomInt(0, 5)];
  } else if (num === 6) {
    Interval.textContent = sixArr[getRandomInt(0, 6)];
  } else if (num === 7) {
    Interval.textContent = sevArr[getRandomInt(0, 5)];
  }
}

async function mainFnc() {
  curNum = getRandomInt(1, 7);
  step.textContent = curNum;
  guitarString.textContent = getRandomInt(5, 6);
  await console.log(curNum);
  await checkStep(curNum);
}

btn.addEventListener("click", function () {
  mainFnc();
});
