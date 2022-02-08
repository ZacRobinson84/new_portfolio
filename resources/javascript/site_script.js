document.body.onload = addElement;

function addElement() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      let randNumY = Math.floor(Math.random() * 1000);

      let randDelay = Math.floor(Math.random() * 5000);
      let randDuration = Math.floor(Math.random() * 5000);
      const newDiv = document.createElement("div");
      newDiv.className = "banana";
      const newContent = document.createTextNode("TESTER TESTER TESTER");
      newDiv.appendChild(newContent);

      newDiv.style.top = randNumY.toString().concat("px");

      newDiv.style.animationDelay = randDelay.toString().concat("ms");
      newDiv.style.animationDuration = randDuration.toString().concat("ms");

      document.body.appendChild(newDiv);
    }, Math.floor(Math.random() * 5000));
  }
}
