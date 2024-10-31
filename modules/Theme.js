export default class Theme {
  constructor() {
    this.darkTheme = true; // default theme
    this.setTheme();
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    this.setTheme();
  }

  setTheme() {
    if (this.darkTheme) {
      // Mengatur warna untuk tema gelap
      document.body.style.backgroundColor = "#333";
      document.querySelector(".calculator").style.backgroundColor = "#222";
      document.querySelector(".display").style.backgroundColor = "#444";
    } else {
      // Mengatur warna untuk tema terang
      document.body.style.backgroundColor = "#fff";
      document.querySelector(".calculator").style.backgroundColor = "#f9f9f9";
      document.querySelector(".display").style.backgroundColor = "#ddd";
    }
  }
}
