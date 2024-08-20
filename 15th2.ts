//abstract provide partial implementation and interface provide no implementation
abstract class Animal {  //void means it doesn;t return any type,not used for objects on its own,both bastract and 
                           //concrete method,abract declared not define,concrete fully defined
    makeSound():void {
    abstract method 
    console.log("The dog barks:");
    }
}
class Dog extends Animal {
    makeSound(): void {
        console.log("The dog barks loudly:");
    }
}
const dog =new Dog ();
dog.makeSound();
dog.move();

//type alias : creating new name for an existing type
type stringornumber = string |number 
//this defines by giving type giving exixting name to varaible 

//INTERFACE :provide blueprint for a class,define only method 

interface user1 {  //only define object type ,not use =,only for object datatype,interface keyword
    name:string,
    Exp:number,
    address:{
        city :string,
        country:string
    },

};

let User:user1 = {
    name:"Alveena",
    Exp:5,
    address:{
        city :"Karachi",
        country:"Pakistan"
    },
};
console.log(User.address.country);

//both difference
//type
type user2 = {     //first difference use =,here type keyword use ,it measures type alias
    name:string,
    Exp:number,
    address:{
        city :string,
        country:string
    },

};

let Usere:user1 = {
    name:"Alveena",
    Exp:5,
    address:{
        city :"Karachi",
        country:"Pakistan"
    },
};
console.log(User.address.country);

//interface can be merged types cannot.

//how do you define mapped type : type Newtype = {[K in keyof Existingtype]: NewType [K]}

//arrow function donot have their own context , arrow function do not return value 
//role of complier: transpile ts code to js
//union types = type1 |type 2

//polymorphism ability to process differently based on their data type

//use a modular code structure 

//type checking ensures correctness :linking enforces style//mapped types in tsv :types thst transfrom properties of an
//existing type

//write a ts function tor everse a tring :use string methods
//unit testing means individual components while integration testing tests how component work together 

//type assertion means tell the ts to trust your type delcartions

//use module imports and exports

//function modification :where you combine mutilpe function to create a new function//

//use a build tool like webpack


//popular use ESlint and Prettier

//use them in type definition

//use pre_commit hooks and CI/CD




//currying : transforming a function with multiple arguments into a series of functions with single arguments.
//type  of numm :object

//interface person { nmaw :string , age:number}














//structure typing in typescript :
interface Deal_1{
 Food:string
};
interface Deal_2{
    Food:string,
    Drink:string
};

let Alveena_Table: Deal_1 = {
    Food:"Biryani"
};

let Ali_Table:Deal_2 = {
    Food:"Biryani",
    Drink:"Cola"
}
console.log(Alveena_Table);

let min_req_Alveena:Deal_1 = Alveena_Table

let min_req_Ali:Deal_2 = Ali_Table //this concept called structural typing in ts.


//abstract classes :provide partial implementation of a class ,have both abstract and concrete method

//how do you define a generic function?
function functionName<T>(param:T) : T {}
////this define a generic function name that take prarmeter T and return value of type T

//how deifne a function in ts:
//function functionName ()retrun type {}
//const functionName = () : Type => {}

//inhertance : A mechanism to inherit features from another class
//how do you define a curried function?
//use a function that return another function ,use a function that takes multiple arguments
































//stale object --- can be assigned in any object have extra property,this obj can be assigned in any object no error comes
//fresh object---newly made object ,no extra property


//inquirer is a pakage use for cli based project

import inquirer from "inquirer"

let answers = await inquirer.prompt([{ //b/c when make object use {} and also contain key:value
     name:"age",
     type:"number",
     message:"Enter your age:"
}])
console.log("InshahAllah,,in" + (60 - answers.age) + " years you will be 60 years old.");


//chalk provide coloring in terminal
//without inquirer how it works
import chalk from "chalk";
console.log(chalk.green("hellow, ") + chalk.blue("world"));
console.log(chalk.red.bold("This is an Error message!"));


//ecmascipt modules not user friendly but inquirer make user friendly
//third part modules .go to google.go to aspect.go to console.write prompt.what is your name .give answer


//functions:
function toUpperCase(Str:string){
    return `${Str}`.toUpperCase(); //return always contain parameter
}
let inputstring:string = "Alveena Aftab";
let upperCaseString:string = toUpperCase(inputstring);
console.log(toUpperCase);

//ES6 template literals comes
//return -parameter
function greet (name:string) {
    return `Hellow,${name}` ;
}
//function call
console.log(greet("Alveena Aftab"));

//02 types of parameter
//optional parameter
//default parameter

//map method
//filter method


