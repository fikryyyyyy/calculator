export default class ButtonHandler {
  constructor(display) {
    this.display = display;
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = "";
  }

  appendToDisplay(value) {
    if (this.display.getCurrentOperand() === "0" && !isNaN(value)) {
      this.display.setCurrentOperand(value);
    } else {
      this.display.setCurrentOperand(this.display.getCurrentOperand() + value);
    }
  }

  calculate() {
    let current = this.display.getCurrentOperand();
    try {
      // Mengganti simbol yang sesuai untuk eval
      current = current.replace("÷", "/").replace("×", "*");
      const result = eval(current);
      this.display.setCurrentOperand(result);
    } catch (error) {
      this.display.setCurrentOperand("Error");
    }
  }

  clear() {
    this.display.setCurrentOperand("0");
  }

  toggleSign() {
    const current = this.display.getCurrentOperand();
    if (current !== "0") {
      this.display.setCurrentOperand(String(-parseFloat(current)));
    }
  }

  percent() {
    const current = this.display.getCurrentOperand();
    this.display.setCurrentOperand(String(parseFloat(current) / 100));
  }
}
