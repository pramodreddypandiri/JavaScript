const uno=()=>{
    return ("i am one");
};
// const dos=async()=>{
//     setTimeout(() => {
//         return "i am two"

//     },5000);
    

// }
const dos=()=>{
    // promise will resolve if we have good response from database otherwise it will e rejected
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             resolve("i am two")
        },3000);
    })
}
const tres=()=>{
    return ("i am three");
}
// async will wait for all calls to be done 
const callMe=async()=>{
    let valOne=uno();
    console.log(valOne);
    // await keyword will lets us wait for call to be completed
    let valTwo= await dos();
    console.log(valTwo);

    let valThree=tres();
    console.log(valThree);

}
callMe();