let name_prompt = prompt("Enter your name: ");
let surname = prompt("Enter your surname");
var salary = parseInt(prompt("Enter a salary", "0"));
let bonus = 500 + salary;
console.log(`Name:${name_prompt}`);
console.log(`SurName:${surname}`);
console.log(`Bonus:R${bonus}`);