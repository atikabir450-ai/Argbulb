const switchButton = document.querySelector(".switch-button");
const bulbTop = document.querySelector(".bulb-top");
const bulbBottom = document.querySelector(".bulb-bottom");

let isOn = false;

switchButton.addEventListener("click", () => {
  isOn = !isOn;

  if (isOn) {
    switchButton.classList.add("on");
    bulbTop.classList.add("bulb-on");
    bulbBottom.classList.add("bulb-on");
  } else {
    switchButton.classList.remove("on");
    bulbTop.classList.remove("bulb-on");
    bulbBottom.classList.remove("bulb-on");
  }
});
