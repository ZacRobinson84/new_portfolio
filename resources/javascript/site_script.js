window.onload = myInit;

//Click eventlisteners

document.getElementById("portfolioButton").addEventListener("click", () => {
  addClass("portfolioButton", "portfolio-button");
});

document.getElementById("menuIcon").addEventListener("click", () => {
  //Set elements to active or revert
  addClass("dropMenuBackground");
  addClass("dropMenu");
  addClass("menuIcon");
  addClass("navbar");
  randomWaveColors();
});

//Remove element eventlisteners
document.getElementById("water1").addEventListener("animationend", () => {
  removeDivs("waterContainer");
});

//Animation eventlisteners
document.getElementById("navbar").addEventListener("animationend", () => {
  animateDivs("menuIcon");
});

function myInit() {
  addElement();
  randomWaveColors();
}

// create a random number between a certain range
function getRandNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// create a random rgb color string

function getRandRGB() {
  let a = getRandNum(0, 255).toString();
  let b = getRandNum(0, 255).toString();
  let c = getRandNum(0, 255).toString();
  let rgbValue = `rgb(${a}, ${b}, ${c})`;
  return rgbValue;
}

function getDarkRGB() {
  let a = getRandNum(0, 175).toString();
  let b = getRandNum(0, 175).toString();
  let c = getRandNum(0, 175).toString();
  let rgbValue = `rgb(${a}, ${b}, ${c})`;
  return rgbValue;
}

// generate a series of styled divs for background intro animation
function createDivs(
  divClass,
  divID,
  divAmount,
  rotateRoll,
  targetId,
  yMax,
  delay,
  durationLow,
  durationHigh,
  divColor,
  creationDelay
) {
  for (let i = 0; i < divAmount; i++) {
    setTimeout(() => {
      let randNumY = getRandNum(0, yMax);
      let randDelay = getRandNum(0, delay);
      let randDuration = getRandNum(durationLow, durationHigh);
      let randRotate = getRandNum(0, rotateRoll);
      const newDiv = document.createElement("div");
      newDiv.className = divClass;
      newDiv.id = divID;

      newDiv.style.backgroundColor = divColor();
      newDiv.style.top = randNumY.toString().concat("px");
      newDiv.style.animationDuration = randDuration.toString().concat("ms");
      newDiv.style.animationDelay = randDelay.toString().concat("ms");
      newDiv.style.transform = "rotate(" + randRotate + "deg)";
      document.getElementById(targetId).appendChild(newDiv);
    }, getRandNum(0, creationDelay));
  }
}

// divide the background intro divs into left and right starting positions
function addElement() {
  createDivs(
    "banana",
    "left",
    10,
    8,
    "tester",
    1100,
    1000,
    300,
    1000,
    getRandRGB,
    3000
  );
  createDivs(
    "banana",
    "right",
    10,
    -8,
    "tester",
    1100,
    1000,
    300,
    1000,
    getRandRGB,
    3000
  );
}

// Add new class to an element
function addClass(elementId) {
  x = document.getElementById(elementId);
  if (!x.classList.contains("active") && !x.classList.contains("revert")) {
    x.classList.add("active");
  } else if (x.classList.contains("active")) {
    x.classList.add("revert");
    x.classList.remove("active");
  } else if (x.classList.contains("revert")) {
    x.classList.add("active");
    x.classList.remove("revert");
  }
}

function animateDivs(divId) {
  document.getElementById(divId).className += " animated";
}

function removeDivs(divId) {
  document.getElementById(divId).className += " removed";
}

function randomWaveColors() {
  //get a random color for each dropMenuBackground element
  let root = document.documentElement;
  root.style.setProperty("--random-rgb1", getDarkRGB());
  root.style.setProperty("--random-rgb2", getDarkRGB());
}
