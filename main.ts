//1ST WEEK
//ENVIIROMENTAL SETUP:download ts.\,github,node.js,vs code

import { log } from "console";

//2ND WEEK:crete hellow wrold
//slides
//1)hellow world program
// console.log("hellow world");
// console.log(34);

//3RD WEEK:variables
//2)variables
// //1)Declare
// let man ;

// //2)Initialize
// let person = "Alveeena";
// console.log(person);

//let: (Declare one time and initialize multiple time)
// let Queen = "Alveena";
// Queen = "Aniqa";
// Queen = "Areeba";
// Queen = "Aatera";
// console.log(Queen);
//queen name multiple times intialize but delcare one time means let keywords written one time if again writeen with
// 2nd queen then error

//const :(Declare one time and Initialize one time)
//const king = "Ousaf";

//if i write king again it will give error b/c king is constant cannot redeclare
///if write const king again it will also not initialize again

//var:(Declare multiple times and Initialize multiple times)It will no show error ,it is not used b/c when
//doing a large project it will not give error
// var king = "Alveena";
// var king = "ghazi";
// var queen = "Aftab";
// console.log(king);
// console.log(queen);

//legal & Illegal Mehtod :
//illegal method you cannot use any special charachter after keyword(let,const,var) before varible 
//cannot use number,@,#(special charachter)only two use _(underscore),$.
//legal method :you can you these all character(numbers,$,_) after variable except special character

//Declar a variable named favouriteColor and assigns it a vlaue blue

// let favorite_Color ="blue";

// // //change the value of favoriteColor to "green"
// favorite_Color = "green";   //b/c in let we can intialize multiple time
// console.log(favorite_Color);

//three things to remember while using varibles 1.camelCase(words in combined form,1st wordin small and 2nd word
// first digit must be capital like camelCase) 2.snake_case(in this _ is present between two words,all words lowercase)
// 3.PascalCase(both words first letter capital)

//legal (_,$)
//illegal (special character,numbers)

//3)strong typing in typescript:(strongly typed syntax)//it means when you are storing variables in a data type you can 
//simply store is callled strong typing in TS for e.g 
//let userName: string ="Miss Alveena Aftab";
//userName= 25; //error comes becuase not define data types and 


//Data tpes: string(for textual data),numbers(intergers and floating_point numbers,numerical values),boolean(true,false)
//any(variable that can hold any type of data)
// let userName:string= "Alveena Aftab";

// let myage:number= 21;

// let isstudent:boolean=true;

// let random_age:any= 34;

//4)Comments in code: use for programme clarification ,grren in color or other may be. easy for understanding,compiler
//do not read it

//5)type Inference: (typescript it self automatically predict this feature known as type inference)
// let a="americs";
// let b= 23;
// let c=true;

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
// const num1 = 20 ;
// const num2 = 10 ;
// console.log("The Answer Of SUM is:",num1+num2);
// console.log("The Answer Of SUBSTRACTION is:",num1-num2);
// console.log("The Answer Of DIVISION is:",num1/num2);
// console.log("The Answer Of MULTIPLICATION is:",num1*num2);


//4TH WEEK && 5TH WEEK:
//Additional data types:(1...undefined:represents a variable but not assigned a value or not initialized,
//one of JS primitve typethat TS adopts)(2..Unknown:type is not known,similar to any data type)(3...Biglnt:unlimited
//intergers store)(4..Symbol:when storing special character for e.g:$,@)(5..null:absence of an object different from
//undefined in sence that not in iundefine you forgt to sotre something and after sometime you store material in it but 
//here intentinally not initialize and has no vlaue)

//Two methods:These methods are used when you have to combined two or more than two datatype and print and these two
//methods are differnet but results same.

//Template Literals:
//let Myname = "Alveena";
//console.log("My name is:",Myname);
//or
// let Myname = "Alveena";
// console.log(`My name is:${Myname}`); 

//backticks and ${} for value store use when we have to combine two same or 
//different datatype b/c (alveena) and (my name is) both are strings.
//${} are use to construct a single string(the string myname is concatenated with value of Myname variable using `${}` 
//place holder)while above 1st code two separate strings form.

//Template Literals
//let person = "shazia";
//let person2 = "My name is";
//console.log(`${person2} ${person}`);

//String concatenation method: 
// let person3 = "Alveena";
// let person4 = "Aftab";

// console.log(person3+' '+ person4); //+use for combination of both,then we will add ' ' for space b/w two
//  //we can you both methods

// let firstname = "Aniqa";
// let lastname = "Tanzeel";
// let fullName = `${firstname} ${lastname}`;
// console.log(fullName);

//Modules:
//Operators: 5 different types and thir further multiple classification

// 1) Arithmetic operators: e.g: used in calculator as well (+,-,/,*)
// i.e :(+, -, /, *, %, **)     
//% :is module is a;so known as reminder e.g 5 apple 2 i have 2 my sister modulus 1
// ** : is Exponential ,means power e.g 2*2*2 we can write 2^3 means 2 power 3

// let banana = 5;
// console.log(banana%2); //print 1

// let apple = 5**2;
// console.log(apple); //print 25

// let mango = 5+2;  //7
// console.log(mango);

// let grapes = 5*2;  //10
// console.log(grapes);

// let pineapple = 5/2; //2.5
// console.log(pineapple);

// const orange = 5-2;  //3
// console.log(orange);

//2) Unary operators: i.e
// -) Increment (++i or i++)   Before variable ++ called prefix , After varialbe ++ called postfix
// -) Decrement (--i or i--)   Similarly before -- called prefix  ,-- after postfix

//i++ means increase 1 number in this vairable, i++ or i = i+1 both are same
//similarly in -- means decrease 1 number

// let banana1 = 5;
// banana1++; //6
// console.log(banana1); //6

// let banana1 = 5;
// banana1--; //4
// console.log(banana1); //4

//we can write both prefix and postmethod no difference just in one we add -- or ++ before and in postfix we add in last
// let a = 2;
// let b = 3;
// console.log(a++,b--,++a,--b); // print 2,3,3,1

//Why they return in normal when we were writing a++ or ++a they were giving same results then why in this question it 
//remains same
//In most cases, a++ and ++a produce the same result, but there's a subtle difference in how they behave.
//a++ (post-increment): 1. Returns the current value of a. 2. Increments a by 1. ++a (pre-increment):1. Increments a by 1.
//2. Returns the new value of a. //In most cases, the difference is not noticeable, and they seem to produce the same
// result. However, in the context of the console.log statement, the order of operations matters.
//In console.log(a++, b--, ++a, --b), the arguments are evaluated from left to right: 1. a++ returns the current value of 
//a (2) and increments a to 3.
//2. b-- returns the current value of b (3) and decrements b to 2.
//3. ++a increments a to 4 and returns the new value (4).
//4. --b decrements b to 1 and returns the new value (1).
//So, the output is 2 3 4 1, which might seem unexpected at first.
//If you were to write console.log(++a, --b, a++, b--) instead, the output would be 3 2 4 1, which might be more in line
//with your initial expectation.Keep in mind that the order of operations and the return values of increment and decrement 
//operators can lead to subtle differences in behavior, especially in complex expressions.//



//3) Assignment operators:
// i.e : (=, -=, +=, *=, /=, ...)
//= :use when we have to store data in variables
// -= :
// let d = 10 ;
// d += 2 ;
// console.log(d);
  // print 10+2 = 12 d = d+1 means it will add value in assigned variable when 1st write a value in varialbe 
//then writing += with that variable and write value that you want to add.
//d += 2 or d = d+2 both are same and if -=(contract form) then it will minus or b = b-2(open form) ,if *= it will multiply
//or can also do by b =b*2, if /= then divide or b = b/2 same and 

//4) Comparison operators:
// i.e : (==, ===, <, >, =<, >=, !=)

//== : is equal to, it will compare both value and datatype if you use different data type it will say false string,numbers
//and if both are same then it will print true
// let A = 10;
// let B = 11 ;
// console.log(A == B); //print false b/c 10 and 11 not equal (== use for comparison it will give true if both values same.

//=== : is strict equal to, it will compare both value and datatype and if both are same then it will print true
// let C = 10 ;
// let D = 10 ;
// console.log(C === D); //True b/c 10 and 10 are equal

// let E = '10' ;
// Let F = 10 ;
// console.log(E == F); //false b/c different data type one string one number

//let G = 10 ;
//let H = 11 ;
//console.log(G > H); //false b/c G is smaller than H <= smaller than or equals to

// let L = 11 ;
// let M = 10 ;
// console.log(L < M); //false b/c L is greter than M

// let N = 10 ;  //>= greater than or eqal to
// let O = 10 ;
// console.log(N >= O); //true b/c I is greater than J .if any one condition is true asnwer will be true e.g either  N is 
// //grether than O or N is equal to O


// let I = 11 ;
// let J = 10 ;
// console.log(I <= J); //False

// let Q = 2 ;  //!= not equals to
// let R = 1 ;
// console.log(Q != R); // true b/c Q is lerger than R

//Home Work: 2 (Calculator)
//Create Addition,Substraction,Multiplication,Division,Modulus and BMI Calculator using inquirer.
//BMI is body mass 

// let number1 = 5;
// let number2 = 2;
// let weightInkg = 50;
// let heightInmeter = 1.3;
// let BMI = weightInkg / (heightInmeter*heightInmeter)//or can write heightInmeter by **  and this is BMI formula its constant
// console.log(`My BMI is : ${BMI}`);
// console.log(`The Modulus is : ${number1%number2}`); //modulus show remaing
// console.log(`The Exponential of 5 is : ${number1**2}`); //Exponentail means power

//in this BMI we have to calulate our body mass and also we have to use exponentail and modulus to check their function

//6TH WEEK:
// 5)logical operators or Logical Gate:(Slide 138)
//i.e : { AND(&&), OR(||), NOT(!) }
//AND (&&)
//let num1 =  10;
//let num2 = 20 ;

//console.log(num1==num2 && num1<num2); //in && if both codition are true then it gives true like 10 is not qual to 20
//in 1st condition and in 2nd condition num1 10 is smaller than num2 20 but still it gives false b/c both condition are 
//not true and in && if both are true than you get true in results other wise false.

//OR (||)
// let num3 =  10;
// let num4 = 20 ;

// console.log(num3==num4 || num3<num4); //in OR if any one one statement is truee it will give true

 // != 
// let num5 =  10;
// let num6 = 20 ;

//console.log(num5!=num6 && num5<num6); //here it gives true b/c != means not equal to so num5 is not equal to num6 
//and 2nd condition is also tru so it gives true 

//NOT(!)/Invertor:
// let num7 = 10;
// let num8 = 20;

// console.log(!(num7<num8)); //before ! our output was true but as we put ! it becomes false so it invert the value

// let num9 = 10;
// let num10 = 20;

// console.log(!(num9 == num10)); //before ! our output was false but as we put ! it becomes true so it invert the value

// let num11 = 10;
// let num12 = 10;

// console.log(!(num11 != num12)); //before ! our output was true but as we put ! it becomes false so it invert the value

//Logic Statements :
// i.e : (If , Else If, Else)  //If means (Agr) and ELse (nahi to) and Else if means (or agr)

//IF , ELSE:
// let numA = 10;
// let numB = 20;
// if (numA === numB){

//   console.log("Both are Equal"); //if 10=20 then print both are equal
// }
// else {
//   console.log("Both are Different"); // else print both are different
// };
//if using single condition use If E lse and if multiple conditions use then use Else If
//else condition execute only when all conditions are true or all conditions all false
//And here only condition we have given and that is true that is why else is executed 

//ELSE IF:
// let numC = 10;
// let numD = 20;
// if (numC != numD){

//   console.log("Both are Not Equal"); //if more than one condition than use else if
// }
// else if(numC < numD){
//   console.log("numC is greater than numD"); // in this both are true 
// }
// else {
//   console.log("Both are Equal");
// };

//if only one condition not use (else if) only use (if and else) if more than one condition than use all three

//if all provided conditions are true then Else body will not execute or if anyone is true then else is also not executed

//if your program 1st condition means(if) condition is true then compiler see 1st condition is true it will print its body
//then it will not go to 2nd or 3rd condition it will directly pritn first condtion if 1st is true

//if your program 1st condition means(if) condition is false then compiler see move to 2nd condition if it is true
//then it will print its body.

//if all are false then  it will print Else condition

//Slide work:
// let isRaining =  true;
// if (isRaining) {
//   console.log("Wear a Raincoat.");
// }
// else{
//   console.log("Wear Sunglasses");
// }

// let yesRaining =  false;
// if (yesRaining) {
//   console.log("Wear a Raincoat.");
// }
// else{
//   console.log("Wear Sunglasses");
// }

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
// import w from "./first.js";

// console.log(w); //jis bhi file me add kre g must add import filenme from ./file name 

//let make a calculator of addition and substraction function for module understanding

// import num1 from "./first.js";
// import num2 from "./second.js";

// console.log(num1 + num2);
// console.log(num1 - num2);

//7TH AND 8TH WEEK:
//6) Conditional Ternary Operators //we can impliment short wasy of else if statements

// let person = "Alveena"; //1st we write a condition in ternary operators

// person==="Alveena"?console.log("You are Alveena"):console.log("you are not Alveena");

 //? Question mark represents (if) like if your condition is true then 
//: colon represent else

// let person = "Alveena"; //1st we write a condition in ternary operators

// person==="Ali"?console.log("You are Alveena"):console.log("you are not Alveena");

//Condion ? Message : Message
//? ---If
//: ---Else
//These both working criteria same but in one long form use and in 2nd short form use and mostly used is ifelse
//example
// let isHungry = true;
// let snack = isHungry ? "apple" : "water";
// console.log(`You should have some ${snack}.`);


// let IamHungry = false;
// let eat = IamHungry ? "apple" : "water";
// console.log(`You should have some ${eat}.`);




//Switch statement:
// let Devices = "Tube_light"; //switch contain (key){case value: break; default break;} in key we store expression in this 
// //case expression is devices And {} contains body means which material you want to match ,cases means condition

// switch (Devices) {
//   case "Fans":
//     console.log("fans is turn on"); //if case is true then body turns on
//  case "Light":
//   console.log("Light is turn on"); //these are caese that i have created 
//  case "Charger":
//   console.log("Charger is turn on");
//  case "Tube_light":
//   console.log("Tube_light is turn on");
// } 
    
//in this i have created a varible and stored tubelight in it and for using switch statement i have wrtie switch.
//switch contain key (variable name/expression) and {} that contains cases so i have write 4 cases  
//now in las ti have creted tube_light case when compiler read 1st case and compare as it doesn't match it will give false
//in result nad then read 2nd then 3rd as compiler reads 4th one as it matches then it will print 4th 
//let understand i have 4 switches charger,fan,light,tubelight i want compiler to switch on tubelight switch i give him 
//4 cases compiler will read that cases and compare with my varialbe ,as it read my variable is switch no 4 it will on it.

//now we can also breaks for e.g if my variable is present in 1st case compiler will print it without further reading 
//other cases 
// let Device = "Fans";
// switch (Device) {
//   case "Fans":
//      console.log("fans is turn on"); //if case is true then body turns on
//      break;
     
//   case "Light":
//      console.log("Light is turn on"); //these are caese that i have created 
//      break;

//   case "Charger":
//      console.log("Charger is turn on");
//      break;

//   case "Tube_light":
//      console.log("Tube_light is turn on");
//      break;
// }  
//in this my variable fan is present in 1st case and i added breaks so compiler will read my first case and print it 
//if in switch statement you do not use break it will print all true and false statement like if 3rd is true then it also
//print all other cases presnet below 3rd
//if your case doesn;t contaion data stored in variable then nothing comes
//one solution is also present for this if no one case matching the variable then you add default,cpomiler will read it
// let devise = "AC";

// switch (devise) {
//   case "Fans":
//     console.log("fans is turn on"); //if case is true then body turns on
//  case "Light":
//     console.log("Light is turn on"); //these are caese that i have created 
//  case "Charger":
//     console.log("Charger is turn on");
//  case "Tube_light":
//     console.log("Tube_light is turn on");
//  default:
//     console.log("wrong input");
// }
// //print worng input
// //Assignment
// let Days = "Sunday";

// switch (Days){
//   case "Monday":
//     console.log("Wrong Answer");
//     break;

//   case "Tuesday":
//     console.log("Wrong Answer");
//     break;
    
//   case "Wednesday":
//     console.log("Wrong Answer");
//     break;  
  
//   case "Sunday":
//     console.log("Correct Answer");
//     break;

//   case "Thursday":
//     console.log("Wrong Answer");
//     break;

//   case "Friday":
//     console.log("Wrong Answer");
//     break; 
  
//   case "Saturday":
//     console.log("Wrong Answer");
//     break;

//   }

//A simple game where the user guessess if a number is high,low or equal to a target number
// let guess :number = 7;
// let target :number = 5;
// if (target > guess){
//   console.log("your guess is too low");
//   }
// else if(target <guess) {
//   console.log("your guess is too high");
//   }
// else{
//   console.log("you guess correctly!");
// }


//Friend Checker Game:a game to check if somone is a friend based on their name.
// let isFriend:string = "Aatera";
// if (isFriend === "Aatera" || isFriend === "Aliza"){
//   console.log(`${isFriend} is your friend.`);
// }  else{
//   console.log(`&{isFriend} is not your friend.`);
// }

//example
// import inquirer from "inquirer";
// let isFriend = await inquirer.prompt([{
//     name : "name",
//     type : "string",
//     message :"Enter your firend Name:"
// }])
// if (isFriend.name === "Aatera" || isFriend.name === "Aliza"){
//   console.log(`${isFriend.name} is your friend.`);
// }  else{
//   console.log(`${isFriend.name} is not your friend.`);
// }
//Rock paper scissors game: A simple implementation of Rock,Paper,Scissors game
// let player1 :string = "Rock"
// let player2 :string = "Scissors"
// if (player1 === player2){
//   console.log("Its a tie");
// }else if ((player1 === "Rock" && player2 === "Scissors") ||
//   (player1 === "Scissors" && player2 === "Paper") ||
//   (player1 === "Paper" && player2 === "Rock")) {
//     console.log("player 1 wins!");
// }else{
//     console.log("No one wins!");
// }
 
//Homework: Create a Calculator using condition statement.operators,teplate literals,inquirer,and chowk.
//Calculator button= +,-,/,*,**,%

//Functions: A function is a block of code designed to perform a particular task.

//Basic function:first call function
//function contain name use rounf brackets(in which parameter:type present) and {function body for particular task} and () called 
//paranthesis and also you have to call function you this write name here is printer and use empty() for calling function
// function print() {    
//   console.log("Alveena");
// }
// printer(); //no esult b/c you have to call function so wrte name hat you provide here is printer

//other types of function
// function sums ( num1 :number = 10,num2 :number = 5 ){          //we can write saparate num1 and num2 or also in ()
//   let y = num1 + num2 ; //(contain variables)
//   console.log(y);
// }
// sums();

//or

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
  
//Anvance function
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
//    return y;                 //marzi h reyurn use kre ya console
//  }
//  console.log(sum(2,3));

//written function,basic fi=unction,return function advance function,paranthesis,parameters

//slide 199
//Variable Scope: is how you can use a variable in a program called variable scope
//two types of variable scope
//global variable :A varable that can be stored in any place is global variable
// let person = "Alveena";

// if (true){
//   console.log(person)
  
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

//10TH AND 11TH WEEK:
//Type Alias
// type data = {
//   name: string;
//   Age:number;
//   Role:string;
// } //defining datatype in an object called type Alias
// //so inthis i have describe its data type as well and for defining datatype we use type key first and wroite type name in
// //object key to tell it that we use type above,its benefit is if we write wrong value it will give error like string on number

// let MY_BIO:data= {
//   name :'affan',
//   Age : 23,
//   Role: 'teacher'
// }

//Nested object:object ke ander object, nestedloop:loop ke ander loop
//example

// type data = {
//      name: string,
//      Age:number,
//      Role:string,
//      Son_Data?:{                      //if you don;t have a son you can use ? it become optional and if you now want to open 
//     //sondata unfdefined comes,also add ? in console 
//       name:string,
//       Age:number,
//       Role:string
//      } 
//     }
//   let MY_BIO:data= {
//      name :'aftab',
//      Age : 55,
//      Role: 'property dealer',
//      Son_Data:{                             
//          name:'Alveena',
//        Age:21,
//        Role:'student'
//       }

//   };
// console.log(MY_BIO);


//if you want to use only son data so write my bio first b/c son data is store inside my bio so first write mybio.then sondata
//if you want that you use name of son data so first write mybio.sondata then .name
    //also add dat types of nested object like in this we us an object ke ander object

//PART 2 :
// type T_type ={
//   name:string, 
//   Exp:number,

// };
// type S_type ={
//   name :string,
//   Rollnumber:number,
// };

// //1st Mehtod 
// let Teacher:T_type = {
//   name :"Alveena",
//   Exp :4,

// }


// let Student:S_type= {
//   name :"AbdulHadi",
//   Rollnumber: 4,

// };
// console.log(Teacher);

// //2ND METHOD:         //& called intersection
// //for combining two
// let Both:T_type & S_type= {
//   name :"Alveeba",
//   Exp:23,
//   Rollnumber:45673,
// }
// //this is known as type intersection ,two objects combine and impliment it


// //Type literals:when you want to save a specific word to store we use type literals method

// // let Apple_Colour : string = "yellow";
// // //after type literal use
// // let Apple_Colour : 'red' = 'red';

// //for example an apple is in red color if you write purple it will give no error but if in place of string you write red
// //and in yellow you write red again is called type literals method only to use a specific value.same for age and other
// //create example of traffic light red yellow and green 

// //let Traffic_light :'red' |'green'|'yellow' = "red" 

// //here | use when we have to add more than one words to store called type Union.
// //for example:you have written 18 in wording but it give serror now you use union type through which whether you add
// //datatype string or number it will not give error.

// let Age :number |string = 'twenty one';















































































































































//Template Literals:



























































