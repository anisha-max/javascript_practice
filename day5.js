//IIFE run in the start only not after another function
(function hello(){ //NAMED IIFE
    console.log("hello");
})(); // seicoln for IIFE to end 

(()=> {
    console.log(`hello`);
   })(); //un named IIFE

   //IIFE with parameter passing 
   (( name) => {
    console.log(`hello ${name}`);
   })("anisha");



//this keyword
//"talks about current context i.e. the object running at current movment "
const user = {
    name: "anisha",
    class: 5,
    welmsg: function() {
        console.log(`${this.name}, welcome`);
        //here use of this will refer to the name of the object runing
        console.log(this)
    }

}

user.welmsg()
user.name = "kanak"
user.welmsg()// as the object changed context changed
console.log(this)//no global context "in browser window object is global context"

//this in arrow function is not used 
const myfun1 = function() {
    console.log(this)
}

const myfun2 = () => {
    console.log(this) //this in arrow function is not used 
//The this keyword is not used in arrow functions because they don't have their own binding for this. Instead, they inherit the this context from the parent scope. This is called "lexical scoping".


}

myfun1()
myfun2()

//implicite return
const myfun3 = (n1 ,n2)=> (n1 + n2)//no return statment required 
const myfun4 = () => ({unsername : "anisha"})//for object

console.log(myfun3(4 , 6))
console.log(myfun4())

//IIFE (imediatly invoked funtion expression
// here we have 2 parentheses  1. for function defination  2. for exection and parameter passing)


//when a code program is exectuted    Global exection phase or global environmentis created where the progral is kept in global environment and is located by "this"
// PHASE 1 "memory creation phase" => memory is created undefined is aasignes to variables , defination is assigned to functions
// PHASE 2 "exectution phase" => values in variables and program is executed for results , every time a funtion is created it again creates its global env. ,mcp , ep


//Control Flow statment
// if (condition) {
    
// } else {
    
// }

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//terinary operator
10<9 ? console.log("yes") : console.log("no");

// NULLISH OPERATOR(??) prevents null and undefined 
let a ;
console.log(a = 5 ?? 10)
console.log(a = null ?? 10)
console.log(a = undefined ?? 10)
console.log(a = null ?? null)//first is null so second value assigned 
console.log(a = null ?? null??10)

//truthy
//falsy