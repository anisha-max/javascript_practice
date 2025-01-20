// filter 
let arr = [1, 2, 3, 4, 5]

arr.forEach((item) => { return item })
// foreach never returns value 


//as foreach never returns value so this is used , cetian conditions can be given
const my_num = arr.filter((num ) => num < 4)
//console.log(my_num )


//map
//arr.map((num , index)=> console.log(num , index))


const arr_reduce = arr.reduce((accumulator , currentValue)=> {
    return accumulator - currentValue
})
const arr_reduce1 = arr.reduce((accumulator , currentValue)=> {
    return accumulator + currentValue
})

// accumulator can be given or if not then 0 is assumed (it is actually the value of the operation that is present in the scope  ), current value is the value that is processed in the loop
console.log(arr_reduce)
console.log(arr_reduce1)