// select the password field
const passwordField = document.querySelector("#passwordOne");
console.log(passwordField);

// select the button
const passwordButton = document.querySelector("#showButton");
console.log(passwordButton);

//add an event listener for clicks to change the button text and makes the password visible/invisible
passwordButton.addEventListener("click", () => {
  if (passwordButton.textContent === "Show Password") {
    passwordButton.textContent = "Hide Password";
    passwordField.setAttribute("type", "text");
  } else {
    passwordButton.textContent = "Show Password";
    passwordField.setAttribute("type", "password");
  }
});
