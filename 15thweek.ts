//15TH WEEK CLASS : part 1
//different datatype also have methods 
//number method
let a = 23; 
//now remember when using array method we always write array name then . then arraymethod list show similarly here
//we will write datatype name then.then its method name like
console.log(a.toFixed(2)) ; //tofixed will add number to your given num like we have write 55 if in () i write 2 it will print 
                            //55.00 increase two digit

// //string method
let name = "alveena";
console.log(name.toUpperCase(),name.toLowerCase()); //similar method some as in array

//now it i want in my name alveena just i want to convert my v to uppercase first i will write variable name then i will
//tell indexingposition then . toUpperCase() as in array whole word was counted as indexing no here it will count letter
 let myname = "aniqa";  //+ use for concatenation 
 console.log(myname[0].toUpperCase()+ myname.slice(1).toLowerCase())
// error comes b/c in first it will convert to uppercase just to
//N as it is in 1 indexing position so it will print Naniqa 
//.lowercase means it will also convert to lowercase like first 0 no
// will be uppercase then slice will cpy all other material
//and to lowercase change all other to small letters
//i also added slice method to copy my element
//print aNiqa and also copy 

//Math Random number:
let a = Math.random() //it is a mothd thats why we add ()to call and .
console.log(a*10); //so it generate only number bewteen 1-10

let b =Math.random()*100 //we can write in both ways like a*number or writing no in mathrandom after()
console.log(b); //print in decimal form,if you want your number not to be points 
 
//now apply number methods tofixed in mathrandom number
 let b =Math.random()*100
 console.log(b.toFixed()); //here tofixed use for decimal removal where as above we use for decimal number b/c here in ()
//we have not written any number so it will remove decimal number

//Narrowing in typescript : convert multiple datatype in single datatype
let a = true;
typeof a ;
console.log(typeof a); //typeof use to know the datattype it is a variable use to know datatype
//print boolean if i write no it will print number if i write name it will give string
//example
let c: number | string ; //here i define two datatype
c = 5 ;
console.log(typeof c); //here it will give no b/c we have written number below


let G = Math.random();
// //here we can also log to see which number math arandom is giving
 console.log(G);

 let q = G > 0.6 ? "Alveena" : 100 ;
// //now if we want to see what is stored in q we will use console here
console.log(q); //from this you know what is stored and from above console you will see random number generated

// //herewe have  used terniery operators are short form of if else 
// //if else statement use for narrowing
if (typeof q == "string"){
     console.log(typeof q);
     
}
else {
     console.log(typeof q);
var str =1;
var str2:number = <number> <any> str
console.log(typeof (str2));

var rti = 2;
var rti2:number|string = 23;
rti2 = "Alvera";
console.log(rti2);

var we:string|boolean|any= 34;
console.log(typeof (we));

var numb=2;
console.log("value of numb"," ", "my lucky number", " ", + numb)
numb=23;
console.log(numb);


             













































































