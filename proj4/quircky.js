const student={
    age:20,
    name:{
        firstName:"pramod",
        lastName:"reddy"
    },

}
student.age=30;
console.log(student);
//we declared student as a const type variable
//but in the above line it worked
// we can freeze object from changing
Object.freeze(student);
student.age=40;
console.log(student);
// here age did not change bcoz obj is freezed
//but may be objects inside student obj can be changed