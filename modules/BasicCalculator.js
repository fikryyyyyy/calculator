export default class BasicCalculator {
  constructor() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  appendNumber(number) {
    if (this.currentOperand === "0") {
      this.currentOperand = number;
    } else {
      this.currentOperand += number;
    }
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand + " " + operation; // Simpan operand dan operasi
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "×":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = ""; // Bersihkan operand sebelumnya setelah perhitungan
  }

  getDisplayValue() {
    return this.currentOperand;
  }

  getPreviousDisplay() {
    return this.previousOperand; // Kembalikan operand sebelumnya
  }
}
