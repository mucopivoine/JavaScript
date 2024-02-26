 // Today I will start with variables and data types;
// 1.Numeric variables
// 2.String variables
// 3.Boolean variables
// 4.Array variables

var age=18;//Number type variable
 var myName = "Sylvie";//String variables
 const isSheAGirl = true; //Boolean variables
 console.log("My name is " + myName + "and am " + age +" years old");
 console.log(`My name is ${myName} and am ${age} years old`);

// var Fname = Kalisa;
// var Lname = Nelly;
// var salary = 200000;
// var address

const array = ["string",12,false];
const myfavfood =[`chicken`,`rice`,`maize`,`beans`,`chips`];
console.log(array);
console.log(myfavfood);

// var declaration & var definition
// var x; 
// var y = "shecancode";

// understanding the differnce between "let" , "var" and "const"
// let is a block scope
// var a function-scoped variable(older way of declaring a variable)
 function myLastName(){
     let me = "kelly";
     console.log (me);
 }
// myLastName();

// objects creation

// front-end-class{
//    team1:{
//   e; member:10;
//    gender:Female;
//    single:true;
//    }
//    team2:{
//     member:10;
//     gender:Female;
//     single:true;
//    }

// primitive data types
// Eg:number ,string ,boolean ,null ,underfined
// to get undefined is when a variable is not given a value
// undefined
let nm ;
console.log(typeof nm);
// NaN (interchanged variables with values)
let str = "solange";
let years = 12;
console.log(str - years);
