function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log(`Здрасти, баце! Аз съм ${this.name}.`)
}

let pesho = new Person("Pesho");

pesho.sayHi(); // Здрасти, баце! Аз съм Pesho.
Person.prototype.sayHi(); // Здрасти, баце! Аз съм undefined.
