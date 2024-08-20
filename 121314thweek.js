//12th,13th and 14th WEEK CLASS:
//                     "Method of Array" :
//why we use array method :if we want to store more items ,asort in acending and decending order,to add,and to remove.
// let Names = ['Alveena', 'Aftab'];
export {};
// 1) POP :Use for remove array element.It will always remove array last element.always remove from last
// console.log(Names.pop())
// console.log(Names);
//for this always write your name given in array like here it is Names and add . and array method name and console array met
//hod name it will remove aftab and print only alveena and if you want that remove also appera in cmd then add console 
//before method name also.if you want to remove all then use console twice b/c here twice item written in array print []
//empty array
// let Names = ['Alveena', 'Aftab','Hania'];
// Names.pop()
// Names.pop()
// Names.pop()
// console.log(Names);  //print remove all elememt
// 2) PUSH :exactly oposite to pop ,some similar some different like in pop it removes the element from last here it adds element in last.
// let Names = ['alveena','furqan']
// Names.push("aftab")     //in pop we dont write anything in () but in push we will write element that we have to add alsi
// //add "" and console
// console.log(Names);
//print aftab in starting
// 3) UNSHIFT :it also add element but it add always at first position
// let Names = ['aniqa','tanzeel']
// Names.unshift('faiqa');
// console.log(Names);
// 4) SHIFT :oposite to unshift it will remove first element
//  let Names = ['aniqa','tanzeel']
//  console.log(Names.shift()); //here we dont have to write any thing b/c it will remove
//  console.log(Names); //like in pop it reome from satrt it will reomve from start
//and now if we want to see which element is removing write  console.log befor test.shift()
//print aniqa then tanzeel
// 5) Slice :its basic function is to copy array 
// let Names = ['amara','waseema']
// console.log(Names.slice().reverse())
//  //now if i want my array to reverse i will add .reverse() then it will reverse the array and copy also if you wanted to see
//  //original array write console.log(Names.slice)
//  console.log(Names.slice());
// 6) Splice :use alone all these four function (pop, push, shift ,unshift)then question is how?
//first we will see how we will remove specific element using using splice
// let Names = ['saiqa','hania','muneeza','rubaisha']
// Names.splice(1,1) //here now i want to remove hania i will add position no as position no starts from 0 and nowi will add
// //,  an will tell the no till where i want to remove elements.so here i just want to remove hania so i will add 1,1
// console.log(Names); //print : saiqa,muneeza,rubaisha now if i want also muneeza o remove so i will write 1, to its posiion no
// let Names = ['saiqa','hania','muneeza','rubaisha']
// Names.splice(1,2)
// console.log(Names); //print:saiqa,rubaisha
//now we will see how we will add no of elements or specific element for adding elements using splice we have two methods
//1st methos is adding in replacement for e.g i want add saiqa and add ali in this place and 2nd method is that element that 
//present must be there and regardless that we will add new element.
//1St mwethod here i want to add sajida in saiqa place we will write indexing position of saiqa that is 1, and again postion 
// where you want to add new element ali so 1,1,"ali"
// let Names = ['saiqa','hania',]
// Names.splice(1,0,"ali") //here if i write 0 it will indicate that no element should remove like if we write 1,0,ali
// console.log(Names);
//if you write 2 it will add new elent in 3=2nd indexing position
// 7) Lenght : this method tell your array length like 'alveena','aniqa' two no of length 
// let Names = ['Alveena','Aniqa','Areeba','Saiqa']
// console.log(Names.length); //print 4
//Tuple :
//like in template literals when we want store specific word or string in datatype we use it.similarly if we want to store
//specific word or string we will use Tuple method
// let Names: "yellow" = "yellow" ; //example of type literals and here if i write blue in value ir will give error
// //tuple
//  let Marks : [number] = [79080909] //here if i write name it will give error,if write number no error ,now if i want a
//  //specific number to be stored i will write that in name means [number] position
//  let numberis : [45] = [45] //now i want that the value must be 45 then i have written 45 in name place so if i write anu
//  //other number it will give error
// //or
// let Resultof : [string] = ["Alveena"]
// let names : ["Alveena"] = ["Alveena"]
// //or
// let Markof : [number,string,boolean] = [13,"Alveena",true]//arragement must be same
// let Mynumber : [any] = [4849084829]
// //when we want to store specific number or data type we use tuple method
// let heynum : string = "02345" ;
