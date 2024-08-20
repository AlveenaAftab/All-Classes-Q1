//10TH AND 11TH WEEK:
//Type Alias
type data = {
  name: string;
  Age:number;
  Role:string;
} 
//defining datatype in an object called type Alias
// //so inthis i have describe its data type as well and for defining datatype we use type key first and wroite type name in
// //object key to tell it that we use type above,its benefit is if we write wrong value it will give error like string on number

let MY_BIO:data= {
  name :'affan',
  Age : 23,
  Role: 'teacher'
}

//Nested object:object ke ander object, nestedloop:loop ke ander loop
//example

type daata = {
     name: string,
     Age:number,
     Role:string,
     Son_Data?:{                      //if you don;t have a son you can use ? it become optional and if you now want to open 
    //sondata unfdefined comes,also add ? in console 
      name:string,
      Age:number,
      Role:string
     } 
    }
  let Mi_BIO:daata= {
     name :'aftab',
     Age : 55,
     Role: 'property dealer',
     Son_Data:{                             
         name:'Alveena',
       Age:21,
       Role:'student'
      }

  };
console.log(Mi_BIO);


//if you want to use only son data so write my bio first b/c son data is store inside my bio so first write mybio.then sondata
//if you want that you use name of son data so first write mybio.sondata then .name
    //also add dat types of nested object like in this we us an object ke ander object

//PART 2 :
type T_type ={
  name:string, 
  Exp:number,

};
type S_type ={
  name :string,
  Rollnumber:number,
};

// //1st Mehtod 
let Teacher:T_type = {
  name :"Alveena",
  Exp :4,

}


let Student:S_type= {
  name :"AbdulHadi",
  Rollnumber: 4,

};
console.log(Teacher);

// //2ND METHOD:         //& called intersection
// //for combining two
let Both:T_type & S_type= {
  name :"Alveena",
  Exp:23,
  Rollnumber:45673,
}
// //this is known as type intersection ,two objects combine and impliment it


// //Type literals:when you want to save a specific word to store we use type literals method

let Apple_Colours : string = "yellow";
// //after type literal use
 let Apple_Colour : 'red' = 'red';


// //for example an apple is in red color if you write purple it will give no error but if in place of string you write red
// //and in yellow you write red again is called type literals method only to use a specific value.same for age and other
// //create example of traffic light red yellow and green 

let Traffic_light :'red' |'green'|'yellow' = "red"; 

// //here | use when we have to add more than one words to store called type Union.
// //for example:you have written 18 in wording but it give serror now you use union type through which whether you add
// //datatype string or number it will not give error.
let Age :number |string = 'twenty one';
