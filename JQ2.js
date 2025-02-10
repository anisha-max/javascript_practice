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
// let bar = document.querySelector(".bar")
// let ul = document.querySelector("ul")

// function hor_bar() {
//     bar.classList.add("my_hor_nav")
//     bar.classList.remove("my_ver_nav")
//     toogler.classList.remove("width")
//     ul.classList.add("d-flex")
// }

// function ver_bar() {
//     bar.classList.add("my_ver_nav")
//     bar.classList.remove("my_hor_nav")
//     toogler.classList.add("width")
//     ul.classList.remove("d-flex")
// }

// window.addEventListener("resize", () => {
//     let width = screen.width
//     if (width > 768) {
//         ver_bar()
//     }
//     else {
//         hor_bar()
//     }
// })


// let toogler = document.querySelector(".toggle")
// toogler.addEventListener("click", () => {
//     if (bar.classList.contains("my_hor_nav")) {
//         ver_bar()
//     }
//     else {
//         hor_bar()
//     }
// })


// ************************************MY MODAL************************************//
// let btn = document.querySelector(".my_btn")
// let close = document.querySelector(".close")
// let modal = document.querySelector(".my_modal")
// let i = 0

// close.addEventListener("click" , (a)=>{
//     modal.classList.add("d-none")
//     i=0
// })

// btn.addEventListener("click", () => {
//     console.log("enter")
//     if (!(i == 0)) {
//         modal.classList.add("d-none")
//         i = 0
//     } else {
//         modal.classList.remove("d-none")
//         i = 1
//         console.log("if")
//     }
// })

// ************************************ACCORDIAN************************************

// let btn = document.getElementsByTagName("button")
// let acc_data = document.getElementsByClassName("acc_data")
// let arr = Array.from(btn)
// let acc_data_arr = Array.from(acc_data)
// let acc_choice = document.getElementsByClassName("acc")
// let arr_choice = Array.from(acc_choice)

// function open_acc(index){
//     acc_data_arr[index].classList.toggle("d-none")
// }

// arr.forEach((btn, index) => {
//     btn.addEventListener("click", (e) => {
//         e.stopPropagation();
//         open_acc(index)
//     } ,false)
// })

// arr_choice.forEach((acc_d , index)=>{
//     acc_d.addEventListener("click", () => {
//         open_acc(index)
//     })
// })


let menu = document.getElementById("menu")[0]
let url = "https://picsum.photos/v2/list"
let obj_res

 // Create <img> element


async function await_function() {
    try {
        let response = await fetch(url)
        if (!response.ok) {
            console.log(error)
        } else {
            obj_res = await response.json()
            my_data(obj_res)
        }
    } catch (error) {
        console.log(error)
    }
}

await_function()



function my_data(data) {
    let img = document.createElement("div");
    data.map(element => {
   console.log(element)
    });
}
