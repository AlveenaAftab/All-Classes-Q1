//6TH WEEK:
// 5)logical operators or Logical Gate:(Slide 138)
//i.e : { AND(&&), OR(||), NOT(!) }
//AND (&&)
let num1 =  10;
let num2 = 20 ;

console.log(num1==num2 && num1<num2);
//in && if both codition are true then it gives true like 10 is not equal to 20
//in 1st condition and in 2nd condition num1 10 is smaller than num2 20 but still it gives false b/c both condition are 
//not true and in && if both are true than you get true in results other wise false.

//OR (||)
let num3 =  10;
let num4 = 20 ;

console.log(num3==num4 || num3<num4); //in OR if any one one statement is truee it will give true

 // != 
let num5 =  10;
let num6 = 20 ;

console.log(num5!=num6 && num5<num6); //here it gives true b/c != means not equal to so num5 is not equal to num6 
//and 2nd condition is also tru so it gives true 

//NOT(!)/Invertor:
let num7 = 10;
let num8 = 20;

console.log(!(num7<num8)); //before ! our output was true but as we put ! it becomes false so it invert the value

let num9 = 10;
let num10 = 20;

console.log(!(num9 == num10)); //before ! our output was false but as we put ! it becomes true so it invert the value

let num11 = 10;
let num12 = 10;

console.log(!(num11 != num12)); //before ! our output was true but as we put ! it becomes false so it invert the value

//Logic Statements :
// i.e : (If , Else If, Else)  //If means (Agr) and ELse (nahi to) and Else if means (or agr)

//IF , ELSE:
let numA = 10;
let numB = 20;
if (numA === numB){

  console.log("Both are Equal"); //if 10=20 then print both are equal
}
else {
  console.log("Both are Different"); // else print both are different
};
//if using single condition use If E lse and if multiple conditions use then use Else If
//else condition execute only when all conditions are true or all conditions all false
//And here only condition we have given and that is true that is why else is executed 

//ELSE IF:
let numC = 10;
let numD = 20;
if (numC != numD){

  console.log("Both are Not Equal"); //if more than one condition than use else if
}
else if(numC < numD){
  console.log("numC is smaller than numD"); // in this both are true 
}
else {
  console.log("Both are Equal");
};

//if only one condition not use (else if) only use (if and else) if more than one condition than use all three

//if all provided conditions are true then Else body will not execute or if anyone is true then else is also not executed

//if your program 1st condition means(if) condition is true then compiler see 1st condition is true it will print its body
//then it will not go to 2nd or 3rd condition it will directly print first condition if 1st is true

//if your program 1st condition means(if) condition is false then compiler see move to 2nd condition if it is true
//then it will print its body.

//if all are false then  it will print Else condition

//Slide work:
let isRaining =  true;
if (isRaining) {
  console.log("Wear a Raincoat.");
}
else{
  console.log("Wear Sunglasses");
}

let yesRaining =  false;
if (yesRaining) {
  console.log("Wear a Raincoat.");
}
else{
  console.log("Wear Sunglasses");
}

//modules: Basics of modules,exporting and importing modules between different files.for e.g :in one box all of your family
//member clothes present so its difficult to take out cloths of your and if you put cloth of every member in separate box
//then it would be easy similarly in programming modules place your programme in well discipline.
//other benefit is that you can use same classes same variables in different files and can acess them in multiple files

//exporting and importing are module function
//for modules you have to create tsconfig file tsc --init target: ES2022, module:nodeNext, modulesResolution :nodeNext.
//also create package.json file npm init -y add "types" :"modules",
//npm install inquirer --->command for inquirer installation
//also create package-lock.json file npm i @types/node -D for packages install

//Two method 1.Automatic and 2.Manual
import w from "./first.js";

 console.log(w); //jis bhi file me add kre g must add import filenme from ./file name 

//let make a calculator of addition and substraction function for module understanding

import num1 from "./first.js";
import num2 from "./second.js";

console.log(num1 + num2);
console.log(num1 - num2);