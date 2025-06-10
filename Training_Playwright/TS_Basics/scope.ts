
//Global Variables
var globalVar = "Global Var";
let globalLet = "Global Let";
const globalConst = "Global Constant";

function scopeCheck(){
    //Function Variables
    var funcVar = "Function Var";
    let funcLet = "Function Let";
    const funcConst = "Function Constant";

    if(true){
        //Block Variables
        var blockVar = "Block Variable";
        let blockLet = "Block Let";
        const blockConst = "Block Constant";
        
        console.log("Inside Block");
        console.log(globalVar);
        console.log(globalLet);
        console.log(globalConst);
        console.log(funcVar);
        console.log(funcLet);
        console.log(funcConst);
        console.log(blockVar);
        console.log(blockLet);
        console.log(blockConst);
    }

        console.log("Outside Block & Inside Function");
        console.log(globalVar);
        console.log(globalLet);
        console.log(globalConst);
        console.log(funcVar);
        console.log(funcLet);
        console.log(funcConst);
        console.log(blockVar); //Accessible outside block
        //console.log(blockLet); //Not Accessible
        //console.log(blockConst); //Not Accessible
}

        console.log("Outside Block & Outside Function");
        console.log(globalVar);
        console.log(globalLet);
        console.log(globalConst);
        //console.log(funcVar); //Not Accessible
        //console.log(funcLet); //Not Accessible
        //console.log(funcConst); //Not Accessible
        //console.log(blockVar); //Not Accessible
        //console.log(blockLet); //Not Accessible
        //console.log(blockConst); //Not Accessible