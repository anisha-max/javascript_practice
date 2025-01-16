// dates and time 

let firstdate = new Date()

console.log(firstdate)
console.log(firstdate.toString())
console.log(firstdate.toLocaleString())
console.log(firstdate.toJSON())
console.log(firstdate.toLocaleDateString())

let secdate = new Date(2023,0,5,3,5,17)
console.log(secdate.toLocaleString())
console.log(firstdate.getDate())
// month starts from 0 in js but when defined statically starts from 0 
// console.log(firstdate.getMonth()) 

// for time comparision
console.log(firstdate.getTime())
console.log(Date.now())
// for sec comparision 
console.log(Math.floor(Date.now()/1000))



// ***************ARRAY*********************
let myarr = new Array(2,3,4,5,7,8)

let arr1 = myarr.slice(1,3)
console.log(myarr)//slice do not take last index and has shallow copy (no refence to real)

let arr2 = new Array(myarr.splice(1,3))
console.log(myarr)//splice take last index and has deep copy ( refence to real)

// console.log(myarr.shift())//delete element from the start
// console.log(myarr)

myarr.unshift(0,4,5)//add element from the start
//console.log(myarr)

//concinates all elements and shallow copy
//console.log(myarr.join())
//console.log(typeof(myarr.join()))

let unflat = new Array(1 ,2 , 3 ,4 ,[2, 8, 5] , [6 ,4 , (4 ,0)] )
let flat = unflat.flat() //to concate all arrays in array also has parmeter till depth(nested array)  
//console.log(flat)

let a = new Array(1 ,2 ,3 ,4)
let b = new Array(5, 6 ,7 ,8)
let c = a.concat(b) //only one array can be joined
console.log(c)

let d = [...a , ...b , ...flat] // ... spread operator use as much you want
console.log(d)


console.log(Array.from("hitesh") ) //to make array from any other datatype (from)
console.log(Array.from({name : "anisha" ,
    class : 1 
})) //empty array because no array can be made without specifing key or values 

let ele1 = "abc"
let ele2 = "def"
let ele3 = "ghi"

console.log(Array.of(ele1 , ele2 ,ele3))



//*************** OBJECT *******************

//object can be singleton (refrence and instance is only one like in database ) by constructor 
//object.create(object name that already exists) and object class

let my_symbol = "key1"
//object literals 
let obj = {
    name : "hey",
    year: 123,
    arr: [1,2,3],
    great : function() {
        console.log(1+2)
    },
    obj : {
        name: "kol"
    },
    [my_symbol] : "key1",//symbol syntax but needs to be defined first
    "key": 2 

}

//access object keys 2 type
console.log(obj.obj)//1
console.log(obj[my_symbol])//2 special for symbol ans string as key 
console.log(obj["key"])

// defining new element of object 
obj.place = "bh"
console.log(obj)
console.log(obj.place)

Object.freeze(obj) // can't change anything now
obj.place = "ertyuio"
console.log("\n")
console.log(obj.place)


//singleton
//let obj1 = new Object( name : "a" , key : "6") can not be defined this way 

let obj1 = new Object()
obj1.age = 5
obj1.name = "a"

let obj2 = {
    place : "kerla",
}

let obj3 ={ ...obj1 , ...obj2}

console.log(obj3)

// for array of values and keys or both 
let keys = Object.keys(obj1)
console.log(keys)

let values = Object.values(obj1)
console.log(values)

let entries = Object.entries(obj1)
console.log(entries)


console.log(obj.hasOwnProperty("islogged"))


// ********* object desrtucturing ********************
let object4 = {
    work_instrusctor : "me",
    firm : "just study"
}

console.log(object4.work_instrusctor) //but destructuring is 
const {work_instrusctor : w_i} = object4
console.log("\n")
console.log(w_i)



//************ functions **********************

function hello() {
    console.log("hello")
}

// hello <= reference
// hello() <= execution

