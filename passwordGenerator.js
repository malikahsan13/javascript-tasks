class Password {
  constructor() {
    console.log("Welcome to Password Generator");
    this.pass = "";
  }
  generatePassword(len) {
    let capitalAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallAlphabets = "abcdefghijklmnopqrstuvwxyz";
    let digits = "0123456789";
    let specialChars = `~!@#$%^&*()_+[]{}|:;"'<>?,.`;
    if (len < 3) {
      return "Password Length Should be greater than 3 characters";
    } else {
      let i = 0;
      while (i < len) {
        this.pass +=
          capitalAlphabets[Math.floor(Math.random() * capitalAlphabets.length)];
        this.pass +=
          smallAlphabets[Math.floor(Math.random() * smallAlphabets.length)];
        this.pass += digits[Math.floor(Math.random() * digits.length)];
        this.pass +=
          specialChars[Math.floor(Math.random() * specialChars.length)];
        i++;
      }
      this.pass = this.pass.substring(0, len);
      return this.pass;
    }
  }
}

let passgen = new Password();
console.log(passgen.generatePassword(7));
