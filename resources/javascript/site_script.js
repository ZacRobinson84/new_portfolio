window.onload = myInit;

//Click eventlisteners

document.getElementById("portfolioButton").addEventListener("click", () => {
  addClass("portfolioButton", "portfolio-button");
});

document.getElementById("menuIcon").addEventListener("click", () => {
  addClass("dropMenuBackground", "drop-menu-background");
});

document
  .getElementById("dropMenuBackground")
  .addEventListener("animationend", () => {
    addClass("dropMenu", "drop-menu");
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

// generate a series of styled divs for background intro animation
function createDivs(divClass, divID, rotateRoll) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      let randNumY = getRandNum(0, 1100);
      let randDelay = getRandNum(0, 1000);
      let randDuration = getRandNum(300, 1000);
      let randRotate = getRandNum(0, rotateRoll);
      const newDiv = document.createElement("div");
      newDiv.className = divClass;
      newDiv.id = divID;

      newDiv.style.backgroundColor = getRandRGB();
      newDiv.style.top = randNumY.toString().concat("px");
      newDiv.style.animationDuration = randDuration.toString().concat("ms");
      newDiv.style.animationDelay = randDelay.toString().concat("ms");
      newDiv.style.transform = "rotate(" + randRotate + "deg)";
      document.getElementById("tester").appendChild(newDiv);
    }, getRandNum(0, 3000));
  }
}

// divide the background intro divs into left and right starting positions
function addElement() {
  createDivs("banana", "left", 8);
  createDivs("banana", "right", -8);
}

// Add new class to an element
function addClass(elementId, elementClass) {
  x = document.getElementById(elementId);
  if (x.className === elementClass) {
    x.className += " active";
  } else {
    x.className = elementClass;
  }
}

function animateDivs(divId) {
  document.getElementById(divId).className += " animated";
}

function removeDivs(divId) {
  document.getElementById(divId).className += " removed";
}
