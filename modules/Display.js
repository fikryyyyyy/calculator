export default class Display {
  constructor() {
    this.currentOperandTextElement = document.getElementById("display");
  }

  getCurrentOperand() {
    return this.currentOperandTextElement.innerText;
  }

  setCurrentOperand(value) {
    this.currentOperandTextElement.innerText = value;
  }
}
