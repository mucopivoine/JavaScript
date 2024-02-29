// differnce btn bracket notation and  dot nottation when accessing properties
/*dot notation is useful when you know the property ahead of time you simply use Object.mykey
 
bracket notation is useful when you want to dynamically access a property.Ex:getKey() ,"my" + "key",
*/
// create object student with properties age, name ,grade,isaboy
 let student1 = {
    age:19 ,
    name:"pivoine" ,
    grade:2 ,
    isABoy :false ,
};
console.log("I am " + student1.name +" and am" + student1.age + "years old");
// create a constructor function with properties name ,age
function person(){
    person.name = "pivoine";
    person.age = "19";
}
// for in
 let student2 = {
    age:19 ,
    name: "pivoine" ,
    grade:2 ,
    isABoy :false ,
};
for(let key in student2){
    console.log( 'key:',key  );
}
// return string

let student3 = {
    age:19 ,
    name: "pivoine" ,
    grade:2 ,
    isABoy :false ,
};
let asString = Object.keys(student3);
console.log(asString);


