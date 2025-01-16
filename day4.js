//closure is a function that can access variables from its parent function, even after the parent function has finished executing

function parents(){
    parent = "abc"
    function child(){
        child = "child" 
        console.log(parent + " " + child)
    }
    child()
}

parents()

//Hosting where the calling of functions and variables can be present
fun("hi")
function fun(user){
    console.log(user)
}

// vari("bi")   can't be accessed here 
let vari = function vari(user){
    console.log(user)
}
vari("bi")