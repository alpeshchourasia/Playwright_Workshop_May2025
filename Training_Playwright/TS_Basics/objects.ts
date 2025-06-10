
let person1 = {
    name1:"Alpesh",
    age1:20,
    isEmployed1:true
}

//console.log(`PersonName = ${person1.name1}, Age = ${person1.age1}, Employed = ${person1.isEmployed1}`);

let person2:{
    name2:string,
    age2:number,
    isEmployed2:boolean
};

person2 = {name2:"Mahesh",age2:25,isEmployed2:true}
//console.log(`PersonName = ${person2.name2}, Age = ${person2.age2}, Employed = ${person2.isEmployed2}`);

type personDetails = {
    nameN:string,
    ageN:number,
    isEmployedN:boolean,
    cityN?:string
}

let alpesh:personDetails = {
    nameN:"Alpesh",
    ageN:5,
    isEmployedN:true,
    cityN:"Mumbai"
}
console.log(alpesh.nameN);
console.log(alpesh.ageN);
console.log(alpesh.isEmployedN);
console.log(alpesh.cityN);

let mahesh:personDetails = {
    nameN:"Mahesh",
    ageN:15,
    isEmployedN:true,
    cityN:"Pune"
}
console.log(mahesh.nameN);
console.log(mahesh.ageN);
console.log(mahesh.isEmployedN);
console.log(mahesh.cityN);
