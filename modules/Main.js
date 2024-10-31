import Display from "./Display.js";
import ButtonHandler from "./ButtonHandler.js";
import Theme from "./Theme.js";

const display = new Display();
const buttonHandler = new ButtonHandler(display);
const themeToggle = new Theme();

// Menambahkan event listener untuk setiap tombol
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (button.id === "clear-button") {
      buttonHandler.clear();
    } else if (button.id === "equals-button") {
      buttonHandler.calculate();
    } else if (button.id === "toggle-sign-button") {
      buttonHandler.toggleSign();
    } else if (button.id === "percent-button") {
      buttonHandler.percent();
    } else if (button.id === "sqrt-button") {
      buttonHandler.appendToDisplay("Math.sqrt(");
    } else if (button.id === "pi-button") {
      buttonHandler.appendToDisplay(Math.PI);
    } else if (button.id === "e-button") {
      buttonHandler.appendToDisplay(Math.E);
    } else if (
      button.id === "open-paren-button" ||
      button.id === "close-paren-button"
    ) {
      buttonHandler.appendToDisplay(value);
    } else {
      buttonHandler.appendToDisplay(value);
    }
  });
});

const themeToggleButton = document.getElementById("theme-toggle");
themeToggleButton.addEventListener("click", () => {
  themeToggle.toggleTheme();
});
