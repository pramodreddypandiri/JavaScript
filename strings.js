//single==doule quotes
//strings are immutale
let dollar="$"
let love=""
console.log(dollar.length)
console.log(love.length)
//escape sequence
//\n,\u
let myString="Hello, Pramod"
console.log(myString.substring(1,4));
myString.slice(1,4)
myString.indexOf("i",5)
myString.lastIndexOf("e")
myString.startsWith("+91")
myString.endsWith("@gmail.com")
myString.includes("test")
myString.toLowerCase()
myString.toUpperCase()
myString.normalize()
console.log("HDFC46655".padStart(12,"0"))
let score=100
let greeting=`\
${dollar} is at value of ${score} \u2719
`
console.log(greeting);
