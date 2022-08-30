// function sumOne(a,b){
//     return a+b;
// }
// var myA=[5,8,4,7,6];
// console.log(sumOne(...myA));//spread operator(kind of unpack)
// function sumAny(...args){
//     let total=0;
//     for(const arg of args){
//         total+=arg
//     }
//     return total
// }
//(rest operator)args convert multiple values in to array and pass them to function
// console.log(sumAny(4,2,4,4,5));


// function sumTwo(a,b,...args){
//     let pro=a*b;
//     let total=0;
//     for(const arg of args){
//         total+=arg
//     }
//     return [pro ,total]
// }
// console.log(sumTwo(4,2,4,4,5));
// importing classes from other js files
const User = require("./ mod.js");
const pramod=new User("pragathi","pragathih@gmail.com");
console.log(pramod.getInfo());
pramod.enrollCourse("react")
pramod.enrollCourse("Angular")
console.log(pramod.getCourseList());
console.log(pramod.courseList[0]);
let courses=pramod.getCourseList();
courses.forEach((c) => {
    console.log(c);
});
