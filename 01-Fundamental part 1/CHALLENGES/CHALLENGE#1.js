let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

if ((markHigherBMI = BMIMark > BMIJohn)) {
  console.log(markHigherBMI);
}

let a = 20;
let b = "20";

if (typeof a == typeof b) {
  console.log("");
}
