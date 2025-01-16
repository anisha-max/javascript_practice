/* primitvie datatype -> call by value copy is given 
non primitive -> call by reference (pointer to that address)
*/

// non primitive  array , object and functions

let arr = ["array" , "type"]
console.log(typeof(arr))
// for array it returns "OBJECT"

let obj = {
    name : "anisha",
    age : 98
}
console.log(typeof(obj) , "\n")
// for OBJECT it returns "OBJECT"

let fun = function(){
    console.log(2+3)
}
console.log(typeof(fun))
// for function it returns "function"
// in js functions can be inside variables



// ************************** string interpulation ***************************

let name = "anisha"
let school = "shm" 
console.log(`her name is ${name} and her school is ${school}`)


//************ parmeter of string ***************

/*let sentence = " anisha-is-a-good-girl"
better way ->
*/

let sentence = new String(" anisha-is-a-good-girl")
console.log(sentence.split("-"))
console.log(sentence.trim())
console.log(sentence.charAt(3))
console.log(sentence.indexOf("i"))
console.log(sentence.toUpperCase())
console.log(sentence.slice(3,-1))
console.log(sentence.substring(3))
console.log(sentence.includes("f"))
console.log(sentence.replace("-" ,"*"))
console.log(sentence.replaceAll("-" ,"*"))
console.log(sentence.repeat(2))
console.log(sentence.charCodeAt(7))//retunrs value from 0 to 65535 representing UTF-16 codes
/*
sentence.anchor("anisha")
sentence.codePointAt(5) gives unicode representation of it
*/

const areEqualInLowerCase = (str1, str2) =>
    str1.toLowerCase() === str2.toLowerCase();
console.log(areEqualInLowerCase(name , school))

let a= new Number(10)
console.log(a.toString())
console.log("\n")
console.log(a.toFixed(2)) // set the number visible after decimal
