// new keyword is present to make a new instace of an object it collects all prototypes and make a new instace to give 
// if a new prototype property of function is added it only gets when new keyword is used



// all the types string , number , array and functions in js are object 


const mystr = "    kjdkjd          "
//lets add a new function truelength

String.prototype.truelength = function(){
    console.log(this)
    console.log(this.trim().length)
}

mystr.truelength()

// if we define a prototype property in objectt it goes to all beacuse in js everythink is object 

const user = {
    username : "anisha" ,
    post : "jr. dev"

}

Object.prototype.digit = 5

// console.log(user.digit)

// as string is object lets access
// console.log(mystr.digit)




//***************************************************PROTOTYPE """""INHERITANCE"""""**************************************************//

// done by __proto__ and in morden way by setProtypeOf

const Grandparents = {
    age : 60,
    fun : "nature" 
}

const parent = {
    entertainment : "tv",
    __proto__ : Grandparents
}

const child = {
    habit : "phone"
}

// child.__proto__ = parent



//other way more used
Object.setPrototypeOf(child , parent )  




console.log(child.age)