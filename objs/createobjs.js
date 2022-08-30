var User=function(firstName,courseCount){
    this.firstName=firstName;
    this.courseCount=courseCount;
    this.getCourseCount=function(){
        console.log(`you have ${this.courseCount} courses in total in your learnings`);
    };
};
User.prototype.getFirstName=function(){
    console.log(`your first name is :${this.firstName}`);
}
var pramod= new User("pramod",3);
User.prototype.getFirstName=function(){
    
    return this.firstName;
}
pramod.getFirstName();

//console.log(pramod);
var pragathi= new User("prlika",3);
pragathi.getCourseCount();
if(pragathi.hasOwnProperty("firstName")){
    console.log(pragathi.getFirstName());
}


//console.log(pragathi);
// let x=User.getPrototypeOf(pragathi);
// console.log(x);
const vijaya={
    firstName:"viajya",
    lastName:"pandiri",
    role:"admin",
    courseCount:3,
    getInfo:function(){
        console.log(`
        first name is ${this.firstName}
        Last name is ${this.lastName}
        his role is ${this.role}
        is studying ${this.courseCount}

        
        `);
    }

}
const gopi={
    firstName:"gopi",
    lastName:"pandiri",
    role:"sub-admin",
    courseCount:5,


};
//vijaya.getInfo()
//getInfo() method  is not defined in  gopi object but, we can borrow it from other object.
vijaya.getInfo.bind(gopi)();
//bind gives you referance of method from other object
vijaya.getInfo.call(gopi);
//call() gives you method of other object