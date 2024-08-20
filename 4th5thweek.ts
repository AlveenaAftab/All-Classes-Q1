//4TH WEEK && 5TH WEEK:
//Additional data types:(1...undefined:represents a variable but not assigned a value or not initialized,
//one of JS primitve typethat TS adopts)(2..Unknown:type is not known,similar to any data type)(3...Biglnt:unlimited
//intergers store)(4..Symbol:when storing special character for e.g:$,@)(5..null:absence of an object different from
//undefined in sence that not in undefine you forgot to store something and after sometime you store material in it but 
//here intentinally not initialize and has no vlaue)

//fundamental datatype :number,boolean,any,string

//Advanced datatype :biglnt,null,undefined,unknown,tuple,union,intersection,literals type alias
//(used for variable,function parameter,return type)
//undefined,null :A variable has no value,unknown :a var has a value but don;t know type it is,biglnt :a whole no that can be very large
//tuple :a collection of values,like list but a fixed length and specific type
//union : a var can be one of several types,like a number or a string
//intersection :an object combine multiple objects into one
//literals : a specific value like a specific string or number.
//type alias :a shortcut name for a type,like a nickname.

//Two methods:These methods are used when you have to combined two or more than two datatype and print and these two
//methods are different but results same.

//Template Literals:
let Myname = "Alveena";
console.log("My name is:",Myname);
or
let Myname = "Alveena";
console.log(`My name is:${Myname}`); 

//backticks and ${} for value store use when we have to combine two same or 
//different datatype b/c (alveena) and (my name is) both are strings.
//${} are use to construct a single string(the string myname is concatenated with value of Myname variable using `${}` 
//place holder)while above 1st code two separate strings form.

//Template Literals
let person = "shazia";
let person2 = "My name is";
console.log(`${person2} ${person}`);

//String concatenation method: 
let person3 = "Alveena";
let person4 = "Aftab";

console.log(person3+' '+ person4); //+use for combination of both,then we will add ' ' for space b/w two
//  //we can you both methods

let firstname = "Aniqa";
let lastname = "Tanzeel";
let fullName = `${firstname} ${lastname}`;
console.log(fullName);

//OPERATORS:
//Operators:to manipulate data used on var,values 5 different types and their further multiple classification

// 1) Arithmetic operators: e.g: used in calculator as well (+,-,/,*)
// i.e :(+, -, /, *, %, **)     
//% :is module is a;so known as reminder e.g 5 apple 2 i have 2 my sister modulus 1
// ** : is Exponential ,means power e.g 2*2*2 we can write 2^3 means 2 power 3

let banana = 5;
console.log(banana%2); //print 1

let apple = 5**2;
console.log(apple); //print 25

let mango = 5+2;  //7
console.log(mango);

let grapes = 5*2;  //10
console.log(grapes);

let pineapple = 5/2; //2.5
console.log(pineapple);

const orange = 5-2;  //3
console.log(orange);

//2) Unary operators: i.e
// -) Increment (++i or i++)   Before variable ++ called prefix , After varialbe ++ called postfix
// -) Decrement (--i or i--)   Similarly before -- called prefix  ,-- after postfix

//i++ means increase 1 number in this vairable, i++ or i = i+1 both are same
//similarly in -- means decrease 1 number

let banana1 = 5;
banana1++; //6
console.log(banana1); //6

let banana1 = 5;
banana1--; //4
console.log(banana1); //4

let x: number = 10;
let y: number = 5;
let sum: number = x++;
console.log(sum);
//if x++ 10
//if ++x 11
//if x-- 10
//if --x 9


//we can write both prefix and postmethod no difference just in one we add -- or ++ before and in postfix we add in last

let a = 2;
let b = 3;
console.log(a++,b--,++a,--b); // print 2,3,3,1

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

let a = 5;
let b = 6;
//console.log(a++,b--,a++,b--); //5,6,6,5
console.log(++a,a--,--b,++b,++a,--b); //6,6,5,6,6,5

//after ++ means value remain same when in next coming before ++ it increase by 2

//3) Assignment operators:
// i.e : (=, -=, +=, *=, /=, ...)
//= :use when we have to store data in variables
// -= :
let d = 10 ;
d += 2 ;
console.log(d);
  // print 10+2 = 12 d = d+1 means it will add value in assigned variable when 1st write a value in varialbe 
//then writing += with that variable and write value that you want to add.
//d += 2 or d = d+2 both are same and if -=(contract form) then it will minus or b = b-2(open form) ,if *= it will multiply
//or can also do by b =b*2, if /= then divide or b = b/2 same and 

//4) Comparison operators:
// i.e : (==, ===, <, >, =<, >=, !=)

//== : is equal to, it will compare both value and datatype if you use different data type it will say false string,numbers
//and if both are same then it will print true
let A = 10;
let B = 11 ;
console.log(A == B); //print false b/c 10 and 11 not equal (== use for comparison it will give true if both values same.

//=== : is strict equal to, it will compare both value and datatype and if both are same then it will print true
let C = 10 ;
let D = 10 ;
console.log(C === D); //True b/c 10 and 10 are equal

let E = '10' ;
Let F = 10 ;
console.log(E == F); //false b/c different data type one string one number

let G = 10 ;
let H = 11 ;
console.log(G > H); //false b/c G is smaller than H <= smaller than or equals to

let L = 11 ;
let M = 10 ;
console.log(L < M); //false b/c L is greter than M

let N = 10 ;  //>= greater than or eqal to
let O = 10 ;
console.log(N >= O); //true b/c I is greater than J .if any one condition is true asnwer will be true e.g either  N is 
// //grether than O or N is equal to O


let I = 11 ;
let J = 10 ;
console.log(I <= J); //False

let Q = 2 ;  //!= not equals to
let R = 1 ;
console.log(Q != R); // true b/c Q is lerger than R

let x=10;
let y=5;
x += y // 10+5= 15, 
y += x //15+5 = 20,
console.log(y);

let z = 12;
let q = 10;
z -= q // 12-10 = 2
q -= z // 2-10 = -8

//string operators
var msg :string = "hellow" +"world"
console.log(msg);

//cases 
let message :string ="I am learning typecscript";

//lowerCase 
let lowercaseName:string = message.toLowerCase();
console.log(lowercaseName);


//upperCase
let uppercaseName:string = message.toUpperCase();
console.log(uppercaseName);

///TitleCase
//step 01
let words:string[]= message.split(" ");
console.log(words);

//step 02
let titlecaseName :string[] = ""

//step 03
for (let i = 0; i < words.length; i++) {
  titlecaseName +=words[i].charAt(0).toUpperCase()
  +words[i].slice(1).toLowerCase() + " "
}

console.log(titlecaseName);
//slice
let sentence1:string = "this is split example"
let words1:string[] =sentence1.split("");
console.log(words1);


//splice
const str:string = "Hellow, world";
const sliced:string =str.slice(0,5)
console.log(sliced);


//charAt
let str1 :string = "Hellow World";
const charAtindex:string = str1.charAt(2);
console.log(charAtindex);

//Home Work: 2 (Calculator)
//Create Addition,Substraction,Multiplication,Division,Modulus and BMI Calculator using inquirer.
//BMI is body mass 

let number1 = 5;
let number2 = 2;
let weightInkg = 50;
let heightInmeter = 1.3;
let BMI = weightInkg / (heightInmeter*heightInmeter)//or can write heightInmeter by **  and this is BMI formula its constant
console.log(`My BMI is : ${BMI}`);
console.log(`The Modulus is : ${number1%number2}`); //modulus show remaing
console.log(`The Exponential of 5 is : ${number1**2}`); //Exponentail means power

//in this BMI we have to calulate our body mass and also we have to use exponentail and modulus to check their function



