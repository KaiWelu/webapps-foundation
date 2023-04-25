const title = document.querySelector("title");
const lightSwitch = document.querySelector("button");
const background = document.querySelector("body");
// this adds a eventlistener to the button
lightSwitch.addEventListener("click", function (event) {
  console.log("registered click on light-switch");

  // this toggles the light switch on and off
  lightSwitch.classList.toggle("light-switch-off");

  //this changes the title content
  if (title.textContent === "Good Morning") {
    title.textContent = "Good Night";
  } else {
    title.textContent = "Good Morning";
  }

  //this changes the background color
  background.classList.toggle("dark-body");
});
