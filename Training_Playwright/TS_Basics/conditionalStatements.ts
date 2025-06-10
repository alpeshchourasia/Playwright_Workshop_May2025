let myCurrentAge = 0;
if (myCurrentAge >= 18)
    console.log("You are an Adult");
else
    console.log("You are a minor");

let myMarks = 69;

if (myMarks >= 90)
    console.log("You have got A Grade");
else if (myMarks < 90 && myMarks >=80)
    console.log("You have got a B Grade");
else if (myMarks < 80 && myMarks >=70)
    console.log("You have got a C Grade");
else
    console.log("You have got a D Grade");

//Nested If Else
let myMarks1 = 71;
if (myMarks1 > 60)
{
    console.log("You Passed");
    if(myMarks1 > 70)
        console.log("You have got A Grade");
}
else
    console.log("You Failed");

