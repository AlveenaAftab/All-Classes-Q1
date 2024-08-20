//Functions: A function is a block of code designed to perform a particular task.
//Basic function:first call function
//function contain name use rounf brackets(in which parameter:type present) and
// {function body for particular task} and () called 
//paranthesis and also you have to call function you this write name here is printer and use empty() for calling function
function print() {
    console.log("Alveena");
}
print(); //()used to call function //no result b/c you have to call function so write name what you provide here is print
//other types of function
function sums(num1 = 10, num2 = 5) {
    let y = num1 + num2; //(contain variables)
    console.log(y);
}
sums();
export {};
//or declare and intialize in same body
// function sums (){let num1 :number = 12;
//   let num2 :number = 12;
//   let y=num1+num2;
//   console.log(y);
// }
// sums();
//()paranthesis we define variables and also define datatype
//in last ()empty we can write values or leave them empty
//  function sums ( num1 ,num2 ){          //we can write saparate num1 and num2 or also in ()
//   let y = num1+num2 ; //(contain variables)
//   console.log(y);
// }
//    sums(2,5); 
//these values in () called function parameters and function calling in last function calling (2,5) are arguments
//Advance function
// function Bio(Name:string ="Alveena" , Age:number = 21 , Profession:string = "Microbiologist"){
//   console.log((`My name is ${Name}`));
//   console.log((`My age is ${Age}`));
//   console.log((`I am a ${Profession}`));
// }
// Bio(); //in these we store valuse when we havenot store in above paranthsis
//or
// function Bio(Name , Age , Profession){
//   console.log((`My name is ${Name}`));
//   console.log((`My age is ${Age}`));
//   console.log((`I am a ${Profession}`));
// }
// Bio("Alveena",21,"Microbiologist"); //store in accornding to above sequence
//i want answer to return not to console(print)
//for e.g
//Return function in return function we do not use print command
// function sum(num1, num2){
//    let y =num1+num2
//   return y;
// }
// console.log(sum(2,3)); //you can also wrote sum in a variable and then console 
//Arrow Function:for arrow function we do not write function key,you can use let,const,var.and after function name parathesis
//comes but in this case paranthesis do not comes and we write (=) then define (parameters) and use =>  
// let sum=(num1, num2)=>{
//     let y =num1+num2
//    return y;                 //marzi h return use kre ya console
//  }
//  console.log(sum(2,3));
//written function,basic fiunction,return function advance function,paranthesis,parameters
//slide 199
//Variable Scope: is how you can use a variable in a program called variable scope
//two types of variable scope
//global variable :A variable that can be stored in any place is global variable
// let person = "Alveena";
// if (true){
// console.log(person)
// }
// console.log(person);  //print person name two times b/c we have written two console commands
//Local variable
// if (true){
//   let person = "Alveena";
//   console.log(person)      
// };
//now as written variable in a boundary now we cannot write outside of boundary,means it can only be written in a 
//specific boundary called local variable
//example
// let globalVar = "Accessible everywhere";
// function showexample() {
//   let localVar = "Accessible only inside this function";
//   console.log(globalVar);   //Work
// }
// console.log(localVar); //Error :localVar is nor defined b/c local only inside boundary and global everywhere
//Hoisting
//console.log(Age);
//var Age=18;
//if const and let long error and in var its give undefined b/c compiler reads and observe that value given but not 
//define and that's why give undefined and in let and const it reads in sequence thats why hoisting concept is in 
//var and that effect is it reads the all var and shift its value to top and read it but doo not store its value and gives
//undefine like here it take var Age but will not take =18 and give undefine
//print undefined compiler check how many times you use var reads and put its declaration on top  
//Object:To store a long informatin in a single form we use objects for object we use {}
// let My_Data = {
//   My_Name : "Alveena",  //My_Name is key ,"Alveena" is its value
//   My_Age : 123,
//   My_life : "Good"
// }
// console.log(My_Data);
//if want to use specific only one value use that key value name
//console is also is an object and . we use to use any one command like .log we use for print
//Modules
