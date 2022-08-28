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
pramod.getFirstName();

//console.log(pramod);
var pragathi= new User("pragathi",3);
pragathi.getCourseCount();
pragathi.getFirstName();

//console.log(pragathi);