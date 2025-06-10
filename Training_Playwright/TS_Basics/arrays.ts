
let arrFruits:string[] = ["Apple","Banana","Jamun"];
console.log(arrFruits);

console.log("PUSH");
arrFruits.push("Papaya","PineApple");
console.log(arrFruits);

console.log("POP");
arrFruits.pop();
console.log(arrFruits);

console.log("UNSHIFT");
arrFruits.unshift("PineApple");
console.log(arrFruits);

console.log("SHIFT");
arrFruits.shift();
console.log(arrFruits);

console.log("SLICE");
let arrCitrusFruits = arrFruits.slice(0,2)
console.log(arrCitrusFruits);

console.log("MAP");
let arrNums:number[] = new Array(10,20,30);
console.log(arrNums);
let arrMulti = arrNums.map(num => num*2);
console.log(arrMulti);

console.log("FILTER");
let arrGreaterThenTen = arrNums.filter(num => num>10);
console.log(arrGreaterThenTen);

console.log("SPLICE");
arrNums.splice(1,2,5);
console.log(arrNums);


