
function greet() {
    console.log("Hello, Students!");
}
greet();

//Function with Parameters
function greetWithName(namep:string) {
    console.log("Hello,"+namep);
}
greetWithName("Alkesh");
greetWithName("Ramesh");

//Function with Return Value
function sump(ap:number,bp:number){
    return ap+bp;
}
console.log("Sum is "+sump(2,3));

//Function with default parameter value & optional paramter
function greetWithDefault(named:string="Guest",age?:number){
    if(age){
        console.log(`Hello ${named}, you are ${age} old`);
    }
    else{
        console.log(`Hello ${named}`);
    }
}

greetWithDefault();
greetWithDefault("Alpesh");
greetWithDefault("Alpesh",39);

//ArrowFunction
console.log("Arrow Functions Output");
const greetArrow = (name:string) => {
    console.log("Hello "+name);
}
greetArrow("Alpesh");

const sumArrow = (a:number,b:number):number => a+b;
console.log(sumArrow(21,23));

type mathOperations = (num1:number,num2:number) => number;
const add:mathOperations = (a,b) => a+b;
const subtract:mathOperations = (a,b) => a-b;
const multiply:mathOperations = (a,b) => a*b;
const divide:mathOperations = (a,b) => a/b;

console.log("Add = "+add(1,1));
console.log("Subtract = "+subtract(1,1));
console.log("Multiply = "+multiply(2,5));
console.log("Divide = "+divide(100,50));

