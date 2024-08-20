//7TH AND 8TH WEEK:
//6) Conditional Ternary Operators //we can impliment short wasy of else if statements

 let person1 = "Alveena"; //1st we write a condition in ternary operators

 person1==="Alveena"?console.log("You are Alveena"):console.log("you are not Alveena");

 //? Question mark represents (if) like if your condition is true then 
//: colon represent else

 let person = "Alveena"; //1st we write a condition in ternary operators

 person==="Ali"?console.log("You are Alveena"):console.log("you are not Alveena");

//Condion ? Message : Message
//? ---If
//: ---Else
//These both working criteria same but in one long form use and in 2nd short form use and mostly used is ifelse
//example
let isHungry = true;
let snack = isHungry ? "apple" : "water";
console.log(`You should have some ${snack}.`);


let IamHungry = false;
let eat = IamHungry ? "apple" : "water";
 console.log(`You should have some ${eat}.`);




//Switch statement:
 let Devices = "Tube_light"; //switch contain (key){case value: break; default break;} in key we store expression in this 
// //case expression is devices And {} contains body means which material you want to match ,cases means condition

switch (Devices) {
  case "Fans":
    console.log("fans is turn on");
    break; //if case is true then body turns on
 case "Light":
  console.log("Light is turn on");
  break;//these are caese that i have created 
 case "Charger": 
 console.log("Charger is turn on");
 break;
 case "Tube_light":
  console.log("Tube_light is turn on");
} 
    
//in this i have created a varible and stored tubelight in it and for using switch statement i have write switch.
//switch contain key (variable name/expression) and {} that contains cases so i have write 4 cases  
//now in last i have created tube_light case when compiler read 1st case and compare as it doesn't match it will give false
//in result and then read 2nd then 3rd as compiler reads 4th one as it matches then it will print 4th 
//let understand i have 4 switches charger,fan,light,tubelight i want compiler to switch on tubelight switch i give him 
//4 cases compiler will read that cases and compare with my varialbe ,as it read my variable is switch no 4 it will on it.

//now we can also breaks for e.g if my variable is present in 1st case compiler will print it without further reading 
//other cases 
let Device = "Fans";
switch (Device) {
  case "Fans":
     console.log("fans is turn on"); //if case is true then body turns on
     break;
     
  case "Light":
     console.log("Light is turn on"); //these are caese that i have created 
     break;

  case "Charger":
     console.log("Charger is turn on");
     break;

  case "Tube_light":
     console.log("Tube_light is turn on");
     break;
}  
//in this my variable fan is present in 1st case and i added breaks so compiler will read my first case and print it 
//if in switch statement you do not use break it will print all true and false statement like if 3rd is true then it also
//print all other cases presnet below 3rd
//if your case doesn;t contaion data stored in variable then nothing comes
//one solution is also present for this if no one case matching the variable then you add default,cpomiler will read it
 let devise = "AC";

switch (devise) {
  case "Fans":
    console.log("fans is turn on"); //if case is true then body turns on
 case "Light":
    console.log("Light is turn on"); //these are caese that i have created 
 case "Charger":
    console.log("Charger is turn on");
 case "Tube_light":
    console.log("Tube_light is turn on");
 default:
    console.log("wrong input");
}
// //print worng input
// //Assignment
let Days = "Sunday";

switch (Days){
  case "Monday":
    console.log("Wrong Answer");
    break;

  case "Tuesday":
    console.log("Wrong Answer");
    break;
    
  case "Wednesday":
    console.log("Wrong Answer");
    break;  
  
  case "Sunday":
    console.log("Correct Answer");
    break;

  case "Thursday":
    console.log("Wrong Answer");
    break;

  case "Friday":
    console.log("Wrong Answer");
    break; 
  
  case "Saturday":
    console.log("Wrong Answer");
    break;

  }

//A simple game where the user guessess if a number is high,low or equal to a target number
let guess :number = 7;
let target :number = 5;
if (target > guess){
  console.log("your guess is too low");
  }
else if(target <guess) {
  console.log("your guess is too high");
  }
else{
  console.log("you guess correctly!");
}


//Friend Checker Game:a game to check if somone is a friend based on their name.
let isFriend:string = "Aatera";
if (isFriend === "Aatera" || isFriend === "Aliza"){
  console.log(`${isFriend} is your friend.`);
}  else{
  console.log(`&{isFriend} is not your friend.`);
}

//example
import inquirer from "inquirer";
let isFriend = await inquirer.prompt([{
    name : "name",
    type : "string",
    message :"Enter your firend Name:"
}])
if (isFriend.name === "Aatera" || isFriend.name === "Aliza"){
  console.log(`${isFriend.name} is your friend.`);
}  else{
  console.log(`${isFriend.name} is not your friend.`);
}


//Rock paper scissors game: A simple implementation of Rock,Paper,Scissors game
let player1 :string = "Rock"
let player2 :string = "Scissors"
if (player1 === player2){
  console.log("Its a tie");
}else if ((player1 === "Rock" && player2 === "Scissors") ||
  (player1 === "Scissors" && player2 === "Paper") ||
  (player1 === "Paper" && player2 === "Rock")) {
    console.log("player 1 wins!");
}else{
    console.log("No one wins!");
}
 


//Homework: Create a Calculator using condition statement.operators,teplate literals,inquirer,and chowk.
//Calculator button= +,-,/,*,**,%
//cli based calculator
//#! /usr/bin/env node---use for npm upload ,here node is use to run ,this line is known as SHABANG
//this pakage start from npm init that was pakage.json we have to add binafter typemodule write bin:filename.js,
//include this line and add bin and file name for npm upload then for pushing npm login then npm publish .
//npm is used to manage and install packages
//npx calculator link add to see if your calculator is working 

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstnumber" },
    { message: "Enter your second number", type: "number", name: "secondnumber" },
    {
      message: "select one of the operators to perform action",
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
  ]);
  
  console.log(answer);
  // conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
   } else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
} 
else {
    console.log("please select valid operator")
}

console.log("THE END.....");
//version=1.0.1
//1 is for major release
//1 is for minor release
//1 is for adding functionality,small fixes

//if changes made in files and again upload on git then first wrtie git add .,git commit -m "",till this point git dont know
//about any changes git push origin main

//for gitdesktop..download for windows go to github create repostory and go to blue dot and click on open with 
//github desktop clone it and then save it in afolder then open that folder in vscode