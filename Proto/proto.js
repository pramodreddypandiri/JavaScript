// let myHeroes = ["thor" , "spiderman"];

// let heroPower = {
//     thor : "hammer",
//     spiderman : "sling",
//     getSpiderPower : function () {
//         console.log(`Spider man power is ${this.spiderman}`);
//     }
// }
// Object.prototype.pramod = function () {
//     return "Pramod is awesome"
// }
//console.log(heroPower.pramod());
//console.log(myHeroes.pramod());
//  Array.prototype.heyArray = function () {
//     console.log(`total no of ele are ${this.length}`);
//  }
// myHeroes.heyArray(); 
const User = {
    name : "pramod",
    email : "pramod@gmail.com"

}
const Teacher = {
    makeVideos : true
}
const TeachingSupport = {
    isAvailale : false,
}
//Teacher.__proto__ = User;
Object.setPrototypeOf(Teacher, User);
Object.setPrototypeOf(TeachingSupport,Teacher);
