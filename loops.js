// for(let i=0; i<10;i++){
//     console.log(i);
// }
const myStates=['a','b','c','d','e','f'];
// for (let i=0; i<myStates.length;i++){
//     if (typeof myStates[i] !== "string") break;
//     console.log(myStates[i]);
// }
// i=0;
// while(i<myStates.length){
//     i++;
//     console.log(myStates[i]);
//     i++;
// }
//forEach is method on array takes call back function
myStates.forEach((s) => (console.log(s+"i")));
//forOf for arrays
const otts=["youtube","facebook","instagram","netflix","amazon"];
for(const o of otts){
    console.log(o);
}
//forIn for objects