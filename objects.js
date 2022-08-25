var user={firstName:'ppr',
    latName:'p',
    role:"admin",
    loginCount:32,
    facebookSignin:true,
    courseList:[],
    buyCourse:function(courseName){
        this.courseList.push(courseName);//methods inside a object
        //this represents referance of a current object


    },
    getCourseCount:function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    getInfo:function(){
        return `${this.firstName} has role ${this.role} with ${this.loginCount} he bought ${this.getCourseCount()} which are ${this.courseList}`
    }
};
console.log(user.loginCount);
console.log(user["latName"]);
user.latName="r";
console.log(user["latName"]);
console.log(user.facebookSignin);

user.buyCourse("JAVASCRIPT");
user.buyCourse("react");
console.log(user.getCourseCount());
console.log(user.courseList);
console.log(user.getInfo());