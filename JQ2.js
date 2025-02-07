//************************************COLOR FLICKER***************************************//
// let body = document.querySelector("body")

// document.querySelector("button").addEventListener("click" , ()=>{
//     let color= "#"
// let hex = "0123456789ABCDEF"
//     for (let i=1 ; i<=6 ; i++){
//         color += hex[Math.floor(Math.random()*16)]
//     }
//     body.style.backgroundColor= color
// })


//************************************COUNTER***************************************//

// let num = document.querySelector(".num")
// let i = 0
// num.innerHTML = i

// document.querySelector("button").addEventListener("click" , ()=>{
//     i++
//     num.innerHTML = i
// })


//************************************Review carousel***************************************//

// let name = document.querySelector(".name")
// let pic = document.querySelector(".pic")
// let mydata
// const url = "https://picsum.photos/v2/list"

// async function fetchData() {
//     try {
//         let response = await fetch(url);
//         if (!response.ok) {
//             throw new Error("not fetched");
//         }
//         mydata = await response.json();
//         console.log(mydata);
//         review(random, mydata)
//         return mydata;
//     } catch (error) {
//         console.error(error);
//     }

// }




//FOR RANDOM GENERATION

// function review(fetch_data) {
//     let random = Math.floor(Math.random() * 30)
//     name.innerHTML = fetch_data[random].author
//     pic.setAttribute("src", fetch_data[random].download_url)
// }

// document.querySelector("button").addEventListener("click", () => {
//     review(mydata);
// })




// Carousel
// let random = 0
// window.addEventListener("load", fetchData())

// function review(random, fetch_data) {
//     name.innerHTML = fetch_data[random].author
//     pic.setAttribute("src", fetch_data[random].download_url)
// }

// document.querySelector(".prev").addEventListener("click", () => {
//     if (random == 0) {
//         random = 0
//     } else {
//         random -= 1

//     }
//     review(random, mydata);
// })

// document.querySelector(".next").addEventListener("click", () => {
//     random += 1
//     review(random, mydata);
// })



//************************************Responsive Navigation Bar***************************************//
let bar = document.querySelector(".bar")

let toogler = document.querySelector(".toggle")
toogler.addEventListener("click", () => {
    if (bar.classList.contains("my_hor_nav") ) {
        bar.classList.add("my_ver_nav")
        bar.classList.remove("my_hor_nav")
        // console.log("click")
    }
    else if(bar.classList.contains("my_ver_nav") ){
        bar.classList.add("my_hor_nav")
        bar.classList.remove("my_ver_nav")
    }
    else{
        console.log(bar.classList)
    }
})