const user=["pramod",3,"admin"];
// var role=user[2];
// var name=user[0];
// var courseCount=user[1]

//
//var [name ,count,role]=user;
// console.log(role);
myUser={
    nam:"pramod",
    courseCount:5,
    role:"admin",
}
//keys in object should match with deStructuring object
const {nam,courseCount,role}=myUser;
console.log(courseCount);
