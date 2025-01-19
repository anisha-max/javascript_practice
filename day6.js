//truthy => 1 , true , [] , {} ," " , "0" ,"false"  , function(){}
//falsy => 0 , -0 ,  false , "" , BigInt , Null , undefined , NaN

//for not letting array give true value when empty 
//if(array_name.length === 0){}

//for not letting object give true value when empty 
let myobject={}
//if (Object.keys(myobject).length ===0 ) {}



// LOOPS
//"for of "
//works on map(same as object but have unique keys , no duplicate gets inserted) , array  ,  string but not on "OBJECT"

let map = new Map()
map.set( "IN", "Rupee")
map.set( "us", "Dollar")
map.set("Thiland" , "Bhat")

for (const key of map) {
    console.log(key)
}

//for key value seprated
for (const [key , value] of map) {
    console.log(key , "=>" , value) 
}


console.log("\n sting")
let greeting ="Hello user"
for (const greet of greeting) {
    console.log(greet)
}


console.log("\n array")
let arr =[1 , 2 ,3 ,4 ,5]
for (const key of arr) {
    console.log(key)
}

let myobj = {
    "name": "anisha",
    "class": 5
}

// for  (const key of myobj ){
//     console.log(key)
// } //does not work



//For in loop works on OBJECT  , array  ,  string but not on "map"

let map1 = new Map()
map1.set( "IN", "Rupee")
map1.set( "us", "Dollar")
map1.set("Thiland" , "Bhat")

for (const key in map1) {
    console.log(key)
}

//for key value seprated
for (const [key , value] in map1) {
    console.log(key , "=>" , value) 
} //no output because its is not iteratable


console.log("\n string")
let greeting1 ="Hello user"
for (const greet in greeting1) {
    console.log(greet)
}


console.log("\n array")
let arr1 =[1 , 2 ,3 ,4 ,5]
for (const key in arr1) {
    console.log(key)
}

let myobj1 = {
    "name": "anisha",
    "class": 5
}

for  (const key in myobj1 ){
    console.log(key)
} 
for  (const key in myobj1 ){
    console.log( `${myobj[key]}`)
} //does not work



//FOR EACH
// syntax   =>   arrayname.foreach((function){})
let arr3 =[1 , 2 ,3 ,4 ,5 , 6,7,8,9]
// arr3.forEach((element) => {
//     console.log(element)
// });

arr3.forEach(function(item){
    console.log(item);
});

function print_item(item){
    console.log(item);
}

arr.forEach(print_item)



let arr4 = [
    {
        "name": "anisha",
        "class": 5
    },
    {
        "name": "java",
        "class": 4
    },
    {
        "name": "python",
        "class": 6
    }
]

arr4.forEach((item) => {
    console.log(item.name)
})
