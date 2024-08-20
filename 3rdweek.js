//3RD WEEK:variables:A memory in which we store data,work as container,contain alphabet,numeric digit.contain name & value
//2)variables:
// //1)Declare
// let man ;
// let women ;
// //2)Initialize
// let person:string = "Alveena";
// console.log(person);
//here, let delcare kr rha h ke ye aek variable h ,person name h ,and alveena value h ,string data type h
//Declarations: if type is present but no value is undefined for example: var message:string
//declare its value but no type .the variable will set to data type of assigned value for e.g var person= "Alveena"
//console.log(person)---- print Alveena
//declare neither its type nor value in this type of variable will be undefined or any.e.g var person console.log(person)
//let: (Declare one time and initialize multiple time)
let Queen = "Alveena";
Queen = "Aniqa";
Queen = "Areeba";
Queen = "Aatera";
console.log(Queen);
//queen name multiple times intialize but delcare one time means let keywords written one time if again writyen with
// 2nd queen then error
//const :(Declare one time and Initialize one time)
//const king = "Ousaf";
//if i write king again it will give error b/c king is constant cannot redeclare
///if write const king again it will also not initialize again
//var:(Declare multiple times and Initialize multiple times)It will no show error ,it is not used b/c when
//doing a large project it will not give error
var king = "Alveena";
var king = "ghazi";
var queen = "Aftab";
console.log(king);
console.log(queen);
//legal & Illegal Method :
//illegal method you cannot use any special charachter after keyword(let,const,var) before variable 
//cannot use number,@,#(special charachter)only two use _(underscore),$.
//legal method :you can you these all character(numbers,$,_) after variable except special character
//Declar a variable named favouriteColor and assigns it a value blue
let favorite_Color = "blue";
console.log(favorite_Color);
// // //change the value of favoriteColor to "green"
favorite_Color = "green"; //b/c in let we can intialize multiple time
console.log(favorite_Color);
//three things to remember while using variables 1.camelCase(words in combined form,1st wordin small and 2nd word
// first digit must be capital like camelCase) 2.snake_case(in this _ is present between two words,all words lowercase)
// 3.PascalCase(both words first letter capital)
//legal (_,$)
//illegal (special character,numbers)
//3)strong typing in typescript:(strongly typed syntax)//it means when you are storing variables in a data type you can 
//simply store is called strong typing in TS for e.g 
//let userName: string ="Miss Alveena Aftab";
//userName= 25; //error comes becuase not define data types and 
//Data tpes: string(for textual data),numbers(intergers and floating_point numbers,numerical values),boolean(true,false)
//any(variable that can hold any type of data)
let userName = "Alveena Aftab";
let myage = 21;
let isstudent = true;
let random_age = 34;
//4)Comments in code: use for programme clarification ,grren in color or other may be. easy for understanding,compiler
//do not read it
//5)type Inference: (typescript it self automatically predict this feature known as type inference)
let a = "americs";
let b = 23;
let c = true;
console.log(a, b, c);
//without a type declaring a variable the compiler will determine type of variable on basis of value assigned to it.
//6) variable advance(const and let)
//7)Errors
//TypeError: TypeError occur when there is mismatched between expected datatype and actual datatpye :
//const num: number = 'hellow' ; //error b/c string ana chahye tha.
//AssignmentError: string different datatypes in a same variable :
//let x: number = 10;
//x = 'hello';   //error b/c it must be a number 
//syntaxError: This error occurs when the syntax of your typescript code is incorrect
//let b : number = 10:  or //lett bhi syntax error
//Simple Calculator
const num1 = 20;
const num2 = 10;
console.log("The Answer Of SUM is:", num1 + num2);
console.log("The Answer Of SUBSTRACTION is:", num1 - num2);
console.log("The Answer Of DIVISION is:", num1 / num2);
console.log("The Answer Of MULTIPLICATION is:", num1 * num2);
export {};
