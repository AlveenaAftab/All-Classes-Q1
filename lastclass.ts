// //function :
//function expect number 
function add (a:number, b:number): number {
    return a + b 
}

//expect string 
function greet (name :string): string {
    return `Hellow ${name}` ;
}

//expect boolean 
function poweroutage(light :boolean) :void {
    if (light) {
        console.log("There is light");
    }
 else
   {
    console.log("Power outage");
   }
}

//expect array
function customFind(arr: string[],element :string) :boolean | void {
    for (let i =0; i< arr.length; i++)}
if (arr[i]=== element) {
    return true;
}

//expect object
function logPersonName(person: TPerson) :void {
    console.log(person.name);
    
}
type TPerson = {
    name :string ,
    age : number ,
};

//function callback : A step in a recipe that says to perform another specific recipe now.
//function its name (parenthesis contain parameter and type){body}
//for callback function in parameter we expect a function
//func type will be => void it is a type Aias it says i am going to be a function ,this function also do not return
//till now in parameter we expect num,string,boolean but here we expect another function here it is func and type must be
//given here it will be void it saying that i am going to be a function that expect 0 parameter and also do not return anything
//and invoke function func() --when executing we have to invoke function



                                           //till now in pram it was datatype but here it is func
function parentfunction(func : () => void ){ //here parameter is itself a function
   console.log("Im the parent function");  //1 ye execute hoa
 func();   //child function 
}
function childfunction (){
    console.log("I am a child function");
}
parentfunction(childfunction); //here pass kiya hoa function is callback function


//we have two method of passing function 
//one is right away to tell function in parameter and 2nd method is to separate define function and log

//if you pass function inside a function call callback function


function amifunction(fun : () => void){ //func name and its type is ()=>void
    console.log("I am mama");
    fun()
    }
    function merafunction() { //so structure should be same
        console.log("i am bacha");
    }
amifunction(merafunction); //here you dont have write () means not invoke
//two property one passed function ,second invoke is not in control its in hand of parent function
//nested func is different from it in that in nested func ke under func and in callback you expect func in parameter of
//function  

//concurrency :MultiTasking
//multiple tasking :concurrency (allow us to manage multiple task at once)->callback,promises ,Async+Await==> Await -->
//event loop +web/Node APis
//through multitasking we can achieve differnt task at a time,through these 3 strategies we can achieve multitasking

//we use three strategies and behind the seen it uses event loop and node apis

//callbacks : itself donot support concurrency but if in function we passed it it will take callback support and 
//acheive concurrency

console.log("one");

//settimerout asyn.ts file setTimeout is fix made by js not made by me
setTimeout(function (){
    console.log("Hellow,World!");  //it give hellow,world output after 2 seconds
    
},2000); //2 second b/c in mili seconds 2*1000=2sec
console.log("two");

// now here first one is print then two will print then after 2sec completion heelow world print 
// here we passed a parameter that is callback function then time in milli seconds

// or
console.log(one);

function welcome(){
    console.log('hellow,world');
    
}
settimerout(welcome ,2000);
console.log("two");

function Washing(callback){
   console.log("Washing started ... ");
   setTimeout(() => {
    console.log("Washing done!");
    callback();
   },5000)                               //here we use arrow function
}
function soaking(callback){
    console.log("soaking started ... ");
    setTimeout(() => {
    console.log("Soaking done!");
    callback();
   },3000)
    
}
function drying(){
    console.log("drying started ... ");
    setTimeout(() => {
    console.log("Drying done!");
   },2000)
    
}
console.log("folding laundry");

//now we will invoke the function means callalso pass pramameter
Washing(() => {      //through process of arrowfunction ,passed a function ,now here in dry b/c no value pass above so no arrow func usage
    soaking(() => {
        drying();
    })
})
console.log("making biryani");

//setTimeout ...used for delay acheive


//now how can we acheive concurrency using promises
//Promises : itself a functinality made by js to acheive concurrency,capitall P, //output promise
let promise = new Promise((resolve,reject) => {
resolve("Sucsess");
});
promise.then((value) => {
    console.log(value);
})


//a variable of promise then invoke /call promise then use callback function then log
//this callback function has two parameter one is called resolve 2nd is called rejected,itself functionality
//if my promise if broken call rejected 
//if completed then resolve 

//promises has some states :1)pending 2)fullfilled -(then()) 3)reject(catch()).
//first parameter will always will be resolve 2nd will be reject,these both are functions
//promise contain some methods ,promise is an object ,that have methods first method is .then then expect a callback
//here we can pass a function that locked our value

//when promise resolve .then() method execute when it resole then we use .catch
let promises = new Promise((resolve,reject) => {
    resolve("failure");
    });
    promises.catch((error) => {
        console.log(error);
    })


//if time
const returnMoney = new Promise((resolve,reject) => {
    setTimeout (()=> {
        resolve('moneyreturned'); //on bases of this the output executed
    }, 3000);
    });

    returnMoney.then((value) => {
    console.log(value);
    })
    .catch(() => {
        console.log("sorry , iam unable to return money");
        
    })
    //one more method can use
    .finally(() => {
        console.log("ainda paise nai donga");
        
    })

//why done :to acheive concurrency




//this below called callback hell
function washing() {
    console.log('washingdone');
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve("Wahingdone");
        }, 5000);
    });
    
}
function soaking() {
    console.log('soakingdone');
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve("Soakingdone");
        }, 3000);
    });
}

function drying(){
    console.log('dryingdone');
    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            resolve ("drying done")
        });

    })
    
}

washing()
.then((value) => {
    console.log("value");
    return soaking ();
});

.then((value) => {
    console.log("value");
    return drying();
})
//how can we execute promises based question?

//async :now we see throgy async and await

async function washingAsync() {
    console.log('washing done');
    await new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Wahingdone");
        }, 5000);
    });
}


//await : means intezar krna,only allowed iasync 



























//loops :
//while loop :jb tk condition nai horhe bar bar check kr rhe
let bus =5; //bus 5min me arhi,iski body if else ki trah hogi
while (bus > 0){         //condition if bus means 5>0 then console bus arrive in 5 min,and loop must be end
    console.log(`bus arrive ${bus} mints`);
    bus-- //it is necessary to add -- otherwise it will continously run,here bus-- mean run loop till 0
} //bus arrive 5 mints then 4 then 3 then 2then 1



//Do while loop :
let buss = 5 ;
do{
    console.log("bus arrive");
    buss--;
}while (buss > 0);



//For loop :
for ( let i =0; i < 5; i++){
    console.log(`watering plant ${i + 1}`);
}













































































