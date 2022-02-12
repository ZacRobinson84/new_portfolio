window.addEventListener("load", myInit);

function myInit() {
  setTranslation();
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

// drop-menu functions
function dropMenu() {
  x = document.getElementById("dropMenu");
  if (x.className === "drop-menu") {
    x.className += " active";
  } else {
    x.className = "drop-menu";
  }
}

// Set animation translation on cover-box divs //
function setTranslation() {
  setTimeout(() => {
    let root = document.documentElement;
    let slideBox1 = document.getElementById("hi").offsetWidth + 3;
    let slideBox2 = document.getElementById("imzac").offsetWidth + 3;
    let slideBox3 = document.getElementById("robinson").offsetWidth + 3;
    root.style.setProperty("--x-axis-move-slidebox1", slideBox1 + "px");
    root.style.setProperty("--x-axis-move-slidebox2", slideBox2 + "px");
    root.style.setProperty("--x-axis-move-slidebox3", slideBox3 + "px");
  }, 200);
}
