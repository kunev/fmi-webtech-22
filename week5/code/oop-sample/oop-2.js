function Person1(name) {
  this.name = name;

  this.sayHi = function() {
    console.log(`Здрасти, баце! Аз съм ${this.name}.`)
  }
}
