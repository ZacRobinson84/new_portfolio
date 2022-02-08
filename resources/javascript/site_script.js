document.body.onload = addElement;

function addElement() {
  for (let i = 0; i < 30; i++) {
    let randNumY = Math.floor(Math.random() * 3000);
    let randDelay = Math.floor(Math.random() * 3000);
    let randDuration = Math.floor(Math.random() * 1000);
    const newDiv = document.createElement("div");
    newDiv.className = "banana";

    newDiv.style.top = randNumY.toString().concat("px");
    newDiv.style.animationDuration = randDuration.toString().concat("ms");
    newDiv.style.animationDelay = randDelay.toString().concat("ms");

    document.body.appendChild(newDiv);
  }
}
