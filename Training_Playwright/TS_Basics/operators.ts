//Arithmetic Operators
let a = 10;
let b = 5;
let sum = a+b;
let sub = a-b;
let multi = a*b;
let quotient = a/b;
let remainder = a%b;
console.log("Arithmetic Operators");
console.log(`Sum=${sum}, Sub=${sub}, Multiple=${multi}, Quotient=${quotient}, Remainder=${remainder}`);

//comparison operators
console.log("comparison Operators");
let x = 20;
let y = 10;

let isEqual = x===y;
console.log(isEqual);
let isLooseEqual = x==y;
console.log(isLooseEqual);

let isNotEqual = x!==y;
console.log(isNotEqual);
let isLooseNotEqual = x!=y;
console.log(isNotEqual);

let isGreater = x>y;
console.log(isGreater);
let isGreaterOrEqual = x>=y;
console.log(isGreaterOrEqual)
let isLess = x<y;
console.log(isLess);
let isLessOrEqual = x<=y;
console.log(isLessOrEqual);

//Logical Operators
console.log("Logical Operators");
let condition1 = true;
let condition2 = false;
let andResult = condition1 && condition2;
console.log(andResult);
let orResult = condition1 || condition2;
console.log(orResult);
let notEqual = !condition1;
console.log(notEqual);

//Assignmet Operators
console.log("Assignmet Operators");
let numa = 5;
console.log(numa);
numa +=4;
console.log(numa);
numa -=4;
console.log(numa);
numa *=4;
console.log(numa);
numa /=5;
console.log(numa);
numa %=4;
console.log(numa);

//Ternary Operators
let age = 15
let canVote = (age>=18) ? "Yes": "No";
console.log(canVote);