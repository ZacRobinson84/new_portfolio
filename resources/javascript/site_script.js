document.body.onload = addElement;

function getRandNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandRGB() {
  let a = getRandNum(0, 255).toString();
  let b = getRandNum(0, 255).toString();
  let c = getRandNum(0, 255).toString();
  let rgbValue = `rgb(${a}, ${b}, ${c})`;
  return rgbValue;
}

function createDivs(divClass, divID, rotateRoll) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      let randNumY = getRandNum(25, 1100);
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

function addElement() {
  createDivs("banana", "left", 8);
  createDivs("banana", "right", -8);
}
