const prompt = require("prompt-sync")({sigint:true});
//1
// const personAccount = {
//     firstName : "pramod",
//     lastName  : "reddy",
//     income : 30000,
//     expenses : 20000,
//     accountInfo : () => {
//         `${firstName} ${lastName}`;
//     },
//     totalIncome : () => {
//         return this.income

//     },
//     totalExpenses : () => {
//         return this.expenses

//     },
//     addIncome : (amount) => {
//         this.income += amount;


//     },
//     addExpense : (amount) => {
//         this.expenses += amount;
//     },
//     accountBalance : () => {
//         return this.income - this.expenses;
//     }


// }



//2
// const users = [
//     {
//         _id: 'ab12ex',
//         username: 'Alex',
//         email: 'alex@alex.com',
//         password: '123123',
//         createdAt:'08/01/2020 9:00 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'fg12cy',
//         username: 'Asab',
//         email: 'asab@asab.com',
//         password: '123456',
//         createdAt:'08/01/2020 9:30 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'zwf8md',
//         username: 'Brook',
//         email: 'brook@brook.com',
//         password: '123111',
//         createdAt:'08/01/2020 9:45 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'eefamr',
//         username: 'Martha',
//         email: 'martha@martha.com',
//         password: '123222',
//         createdAt:'08/01/2020 9:50 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'ghderc',
//         username: 'Thomas',
//         email: 'thomas@thomas.com',
//         password: '123333',
//         createdAt:'08/01/2020 10:00 AM',
//         isLoggedIn: false
//     }
// ];

// class User {
//     constructor(users){
//         this.users = users;
//         // this._id = id;
//         // this.username = username;
//         // this.email = email;
//         // this.password = password;
//         // this.createdAt = date;
//         // isLoggedIn = false;
//     }
//     signIn(username , password) {
//         let loggedIn = false;
//         let userNameMatch = false;
//         let passwordMatch = false
//         this.users.forEach((user) => {
            
//             if (user.username === username ){
//                 userNameMatch = true;
//                 if (user.password === password){
//                     passwordMatch = true;
//                     user.isLoggedIn = true;
//                     //console.log(`${user.username} has loggen in`);
                    
//                 }
//                 else{
//                     //console.log("Password Incorrect");;
//                 }
//             }


//         })
//         if (userNameMatch && passwordMatch){
//             loggedIn = true;
//             return loggedIn;
//         }
//         else if (userNameMatch){
//             return "please check credentials"
//         }
//         else{
//             return "you are a new user,please SignUp";
//         }
        
        
//     }
//     signUp(){
        
//         const now = new Date()
//          const newMember = {};
//          newMember.id = prompt("Enter user id : ");
//          newMember.username = prompt("enter user name  : ");
//          newMember.email = prompt("Enter Email : ");
//          newMember.password = prompt("set password : ");
//          newMember.createdAt = now.getDate().toLocaleString();
//          newMember.isLoggedIn = false;
//         let existedUser = this.signIn(newMember.username , newMember.password);
//         if (existedUser === true){
//             console.log("you are already a user");
//         }
//         else{
//             this.users.push(newMember)
//         } 
//     }
// }
// const newUser = new User(users);
// console.log(newUser.signIn('Asab','123456'));
// newUser.signUp();
// console.log(users);
//3,4

// const products = [
//     {
//       _id: 'eedfcf',
//       name: 'mobile phone',
//       description: 'Huawei Honor',
//       price: 200,
//       ratings: [
//         { userId: 'fg12cy', rate: 5 },
//         { userId: 'zwf8md', rate: 3 }
//       ],
//       likes: []
//     },
//     {
//       _id: 'aegfal',
//       name: 'Laptop',
//       description: 'MacPro: System Darwin',
//       price: 2500,
//       ratings: [],
//       likes: ['fg12cy']
//     },
//     {
//       _id: 'hedfcg',
//       name: 'TV',
//       description: 'Smart TV:Procaster',
//       price: 400,
//       ratings: [{ userId: 'fg12cy', rate: 5 }],
//       likes: ['fg12cy']
//     }
// ];
// //console.log(products);
// class Product {
//     constructor(products){
//         this.products = products;
//     }
//     rateProduct(id , userid , rating) {
//         let rated  = false;
//         this.products.forEach(product => {
//             if (product._id === id) {
//                 rated  = true;
//                 const newRate = {}
//                 newRate.userId = userid;
//                 newRate.rate = rating;
//                 //console.log(newRate);
//                 product.ratings.push(newRate)
//                 //console.log(product.ratings);
//             }
//         })
//         if (rated) return "Successflly rated"
//         return "Product does not exist"
//     };
//     averageRating(id){
//         let totalSum = 0;
//         let average ;
//         let Rlen;
//         this.products.forEach( product => {
//             if (product._id === id){
//                 Rlen = product.ratings.length;
                
//                 product.ratings.forEach(rating => {
//                     //console.log(rating.rate);
//                     totalSum = totalSum + parseInt(rating.rate)

//                 })

//             }
//         });
//         //console.log(totalSum);
//         //console.log(Rlen);
//         average = totalSum / Rlen;
//         return average;

//     };
//     likeProduct(id,userid){
//         let liked = true;
//         this.products.forEach( product => {
//             if (product._id === id){
//                 for (let like of product.likes) {
//                     if (like === userid) {
//                         let index = product.likes.indexOf(like)
//                          product.likes.splice(index , 1);
//                         liked = false;
//                     }
//                 }
//                 if (liked){
//                     product.likes.push(userid)
//                 }
                
//             }
//         })
        
//         return liked
               


//     }

// };

// const newRating =  new Product(products);
// //console.log(newRating.rateProduct('aegfal','pramod',5));

// //console.log(newRating.averageRating('hedfcg'));

// console.log(newRating.likeProduct('hedfcg','12cvfhvhcy'));
// console.log(products);


//Explain the difference between forEach, map, filter, and reduce.
//forEach is a higher order function which looks like a loop,forEachimplemnts give call back fuction to each elemet in array.
//filter():
// filter() is a higher order function ,it creates a shallow copy of array and stores accrding to result of call ack function
// map() , a higher order fnction,create new array with call back function inplementation  on every element
// reduce() modifies the orignal array, it will reduce the orgial array to single value/elemnet array.
// function callBack(n){
//     if (n%2===0) {
//         return true
//     }
//     else{
//         return false
//     }
    
// }
// function mapCall(ele){
//     return ele*10;

// }
// const myArr = [1,2,3,4];
// console.log(myArr.map(ele => mapCall(ele)));
//const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Ice Land'];
// console.log(countries.map((country) => country.toUpperCase() ));
// console.log(countries.map((country) => country.length ));
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,12]
// console.log(numbers.map((number) => number*number));
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: '' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
//   ];
//console.log(products.map((prod) => (prod.product = prod.price)));
// console.log(countries.filter( (country) => {
    
//            return  country.startsWith("D");
            
// }));
// console.log(products.filter((prod) => {
//        return prod.price !='';
// }));
// console.log(typeof (countries) );
// function getStringLists( arr){
//     let newArr = arr.filter((ele) => typeof ele === 'string');
//     return newArr;
// }
// let arr = [1,"2",3,"4","ac"];
// console.log(getStringLists(arr));
// console.log(numbers.reduce((a,b)=> {
//     return a+b
// }));
// console.log(countries.reduce((a,b) => {
//          return a+" , "+b
// }) + "  are north European countries");

// some() returns true if atleast one element's call back returns true  and stop 
// every() returns false if atleast one element's call back returns true and stop
//const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.every((name) => {
//     return name.length > 7
// }));
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Ice Land'];
// console.log(countries.findIndex((country) => {
//     return country === 'Russia' ;
// }));
// const newSet = new Set(countries);
// console.log(newSet);
// console.log(newSet);
// for (let index = 0; index <= 10; index++) {
//     newSet.add(index);
    
// }
// console.log(newSet);
// newSet.delete(10);
// console.log(newSet);
// newSet.clear();
// console.log(newSet);
// const newMap = new Map();
// countries.forEach(country => {
//     newMap.set(country , country.length);
// });
// console.log(newMap);
// const constants = [2.72, 3.14, 9.81, 37, 100];
// let e, pi,gravity,humanBodyTemp,waterBoilingTemp;
// [e,pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// console.log([e,pi, gravity, humanBodyTemp, waterBoilingTemp]);
const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let { b: { c: d } } = obj; // d is re-assignable
console.log(a);
console.log(b);