//CALL and THIS inside function's function 

//we have call stack and context of function if a function is inside a function is called then the this in it refers to global context not to the function it exists in so to make it refer to the parent function we use call and this to tell the parent function to use the child's functions this 

// SO BASICALLY CALL IS USED TO "PASS THE CURENT CONTEXT TO THE FUNCTION " EVEN WHEN THE FUNCTION CONTEXT IS  NOT IN THE CALL stack

const User = function (username){
    this.username = username
   
}

// const Setuser = function(username , password){
//     this.password = password
//     User(username) // username is not being setted because curent function context is no longer in the call stack
 
// }

//so we will use call and this 

const Setuser = function(username , password){
    this.password = password
    User.call(this , username) 
}


const myuser = new Setuser( "anisha " , "123") //without new undefined new instance is not created so nothing is being setted
// console.log(myuser)




//******************************************* CLASS ***************************************//
class school{
    days = 365
    constructor(name , state){
        this.name = name
        this.state = state
    }

    name(){
        console.log(this.days)
    }

}

class teacher extends school{
    constructor(name , state ,post){  // call super 
        super(name) //name is gettong setted without call and this
        this.state = state
        this.post = post
    }
}

// const myschool = new school("abc" , "efg")
// console.log(myschool.state)


const teacher1 = new teacher("ac public" , "bombay" ,"principal")
console.log(teacher1.name)

//******************************************* STATIC KEYWORD ******************************************//

class fun{
     static  gamer = "just gaming"
     game(){
        console.log("playing")
    }
}

class funny extends fun{
    fun = "play"
}

const player1 = new funny
console.log(player1.fun)
console.log(player1.game())
console.log(player1.gamer)