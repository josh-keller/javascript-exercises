let bar = Object.create({});
let baz = Object.create(bar);
let foo = Object.create(baz);

console.log(bar.isPrototypeOf(foo)); // true
console.log(Object.getPrototypeOf(foo) === bar); // false


function Wow(name) {
  this.name = name;
}

Wow.prototype.isWow = function isWow() {
  return true;
};

let wow1 = new Wow('wow1');
let wow2 = new wow1.constructor('wow2');
console.log(wow1.isWow());
console.log(wow1.name);
console.log(wow2.isWow());
console.log(wow2.name);
console.log(wow1 instanceof Wow);
console.log(wow2 instanceof Wow);
