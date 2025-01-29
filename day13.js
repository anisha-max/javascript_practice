//Promise let the other code work while async await is when other is not supposed to work and these statment are to consume promise
// then catch v/s async await 


// const promise1 = new Promise(function (resolve, reject) {
//     console.log("promise ")
//     resolve()
// })

// promise1.then(
//     function () {
//         console.log("promise fullfilled")
//     }
// )

// const promise2 = new Promise(function (resolve, reject) {
//     console.log("promise2")
//     let error = true
//     if (!error) {
//         resolve({ user: "anisha", post: "junior dev." })
//     } else {
//         reject("Error , sorry")
//     }

// })
// .then(function (user) {
//     console.log(user)
//     return user.post
// }).then(function(post){
//     console.log(post)
// }).catch(function (error) {
//     console.log(error)
// }).finally(
// function(){
//     console.log("resolved or rejected")
// })

// async function usepromise2() {
//     try {
//         let response = await promise2
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }

// }

// usepromise2()


//fetch is used then a network request is made to webbrowser that is resolved or reject even error like 404 are resolve not rejected and then this response goes to private arrays either onfullfilled or onrejected and this puts value to Data a private varible that further puts value in response

const url = "https://catfact.ninja/fact?max_length=140"
fetch(url)
.then((response) => {
    if(!response.ok){
        throw new Error("not fetched")
    }else{
        return response.json()
    }
})
.then((object_res) => {
    console.log(object_res)
}).catch(() => {
    console.log("error")
});

// async function cat() {
//     try{
//         let data = await fetch("https://catfact.ninja/fact?max_length=140")
//         let cat_data = await data.json()
//         console.log(cat_data)
//     }catch{
//         console.log("reeorrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
//     }
// } 

// cat()


