document.body.onload = addElement;

function getRandNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createDivs(divName, rotateRoll) {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      let randNumY = getRandNum(0, 2000);
      let randDelay = getRandNum(0, 1500);
      let randDuration = getRandNum(500, 1000);
      let randRotate = getRandNum(0, rotateRoll);
      const newDiv = document.createElement("div");
      newDiv.className = divName;

      newDiv.style.top = randNumY.toString().concat("px");
      newDiv.style.animationDuration = randDuration.toString().concat("ms");
      newDiv.style.animationDelay = randDelay.toString().concat("ms");
      newDiv.style.transform = "rotate(" + randRotate + "deg)";
      document.body.appendChild(newDiv);
    }, getRandNum(0, 2000));
  }
}

function addElement() {
  createDivs("banana", 11);
  createDivs("orange", -11);
}
