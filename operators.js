//+ - / * ** %
let val1=34;
let val2=55;
console.log(val1+val2);
console.log(val1*val2);
console.log(val1/val2);
console.log(val1-val2);
console.log(val1**val2);
console.log(val1%val2);
console.log(typeof (val1+val2));
console.log(typeof (val1*val2));
console.log(typeof (val1/val2));
console.log(typeof (val1-val2));
console.log(typeof (val1**val2));
console.log(typeof (val1%val2));
let mrp= 1999;
let dprice= 999;
console.log(`The MRP of items is ${mrp}`);
let discPrice=((mrp-dprice)/mrp * 100);
console.log(`The discounted price is ${dprice}`);
let rounded = Math.round(discPrice);
console.log(`the disounted percentage is ${rounded}`);

