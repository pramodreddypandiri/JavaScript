// function sayHello(){
//     console.log("Hello There,Sunny");
// }
// sayHello(); //calling a function
// sayHello; //referancing a function
// console.log("pramod")

// function namastey(name){
//     return `Hi there ${name}`
// }
// var greet= namastey("pramod")
// console.log(greet)
var getUserRole=function (name,role){
      switch(role){
        case "admin":
            return `${name} is admin with all access`
            
        case "subadmin":
            return `${name} is sub-admin with access to create `    
        case "testprep":
            return `${name} is a test prep`
        case "user":
            return `${name} is a user to consume content`
        default:
            `${name} is a trail user`           
      }

}
console.log(getUserRole("pramod","user"));
// global context of js
sayHello();
function sayHello(){
    console.log("hiii");
}
var myName="pramod"
if (myName===myName){
    console.log("true");
}
//global context of js
var num=2;
function sayMe(){
    console.log();

}
// execution context 
// 1 variable object
// 2. scope chain
// 3. this
// funnctions declarations are scanned and made available
// variable decl are scanned and made undefined
//code hoisting


// this key word
console.log(this);
// Array
var countries = ["india","USA","Russia","Japan","France"]
var states=new Array("rag","delhi","assam")
console.log(states[0]);
console.log(states[1]);
console.log(states[2]);
console.log(states.length);
console.log(states.length);
states.unshift("AP")
console.log(states)
states.shift();
console.log(states)
countries.unshift("UK");
console.log(countries)
console.log(Array.from("pramod"))



var isEven= (element) => {
   return  element%2==0;
}
console.log(isEven(2))
var result=[2,3,4,5].every(isEven);
console.log(result);