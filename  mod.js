class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    courseList=[];
    //create a private variable by putting a # before 
    //#courseList=[]
    getInfo(){
        return {name:this.name,email:this.email};

    }
    enrollCourse(name){
        this.courseList.push(name);
    }
    getCourseList(){
        return this.courseList;
    }
    // static login(){}==> if yo use static key word before function name then it can't be inherited by child clases
    login(){
        return "yo are logged in";
    }

}
//exporting this file, we can import in any other file and use this file classes in other file(here: spreadAndRest.js) 
module.exports=User;
//inheritance
class SubAdmin extends User{
    constructor(name,email){
        super(name,email)
    }
    getAdminInfo(){
        return "yu are subAdmin"
    }
}
const pragathi=new SubAdmin();
console.log(pragathi.getInfo());
console.log(pragathi.login());
console.log(pragathi.getAdminInfo());