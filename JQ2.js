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

// ************************************ACCORDIAN************************************//

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





// ************************************MENU AND SEARCHABLE***********************************//

// let search_box = document.getElementById("search")
// let body = document.getElementsByTagName("body")[0]
// let menu = document.getElementById("menu")
// let url = "https://picsum.photos/v2/list"
// let obj_res = []
// let my_arr

// // Create <img> element


// async function get_data() {
//     try {
//         let response = await fetch(url)
//         if (!response.ok) {
//             console.log(error)
//         } else {
//             obj_res = await response.json()
//             show_data(obj_res)
//             console.log(obj_res)

//         }
//     } catch (error) {
//         [console.log(error)]
//     }
// }



// function show_data(data) {
//     data.forEach(({ author, download_url }) => {
//         let child = document.createElement("div")
//         child.classList.add("col-lg-4" , "col-md-6","col-12" )
//         child.innerHTML = `
//             <p>${author}</p>
//             <img src= ${download_url} class="w-50"/> 
//          `
//         menu.appendChild(child)
//     });
// }


// function filter_data() {
//     let value = search_box.value.trim().toLowerCase();
//     if (value == "") {
//         show_data(obj_res)
//     } else {
//         my_arr = obj_res.filter(({author}) => author.toLowerCase().includes(value));
//         console.log(my_arr)
//         menu.innerHTML = ""
//         show_data(my_arr)
//     }
// }

// search_box.addEventListener("input", filter_data)
// // search_box.addEventListener("click", filter_data)    for btn search


// get_data()




//************************************ Video background ***************************************//

// let video = document.getElementById("video")
// let play_pause = document.getElementById("play_pause")


// play_pause.addEventListener("click" , ()=>{
//     if(video.paused){
//         video.play()
//         play_pause.innerText = "Pause"
//     }else{
//         video.pause()
//          play_pause.innerText = "Play"
//     }
// }

// )


//************************************ Navigation bar on scroll ***************************************//
// let nav = document.getElementById("nav")
// let warn = document.getElementById("warn")
// let position = warn.getBoundingClientRect()

// window.addEventListener("scroll" , ()=>{
// if(window.scrollY >130 ){
//     console.log("stuck")
//     nav.classList.add("position-sticky" ,  "top-0")

// }else{
//     console.log("move")

//     nav.classList.remove("position-sticky")

// }

// })

//************************************ Countdown clock ***************************************//
// let Countdown = document.querySelector(".clock")
// let a = 59
// let b = 59
// let c = 24
// let d = 7
// let my_interval

// function clock() {
//     my_interval = setInterval(() => {
//         a -= 1
//         if (a == 0) {
//             a = 59
//             b -= 1
//         }
//         if (b == 0) {
//             b = 59
//             c -= 1
//         }

//         if (c == 0) {
//             c = 24
//             d -= 1
//         }
//         Countdown.innerHTML = `${d} : ${c} : ${b} : ${a} `
//         console.log(d + ":" + c + ":" + b + ":" + a)
//     }, 1000)

// }
// if (d == 0) {
//  clearInterval(my_interval)
// }


// clock()

//************************************ Lorem ipsim ***************************************//
// let data
// let my_para = document.querySelector("#para")
// let number = document.querySelector("#number")
// let btn = document.querySelector("#btn")
// async function lorem() {
//     try {
//         let response = await fetch("https://official-joke-api.appspot.com/random_joke")
//         data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console(error)
//     }
// }

// function paragraph(mydata , num){
//     my_para.innerHTML = mydata.setup.repeat(`${num}`)
//     console.log(mydata.setup.repeat(`${num}`))

// }
// let num = parseInt(number.value)
// btn.addEventListener("click" , (e)=>{
//     e.preventDefault()
//     paragraph(data , 5)
// }
// )


// lorem()


//************************************ Grocery list ***************************************//

let grocery = document.querySelector("#grocery")
let list = document.querySelector("#list")
let add_btn = document.querySelector("#btn")
let default_text = document.querySelector(".default_text")
let list_item = document.querySelector(".list_item")
let my_list = []

add_btn.addEventListener("click", (e) => {
    e.preventDefault()
    let my_grocery = grocery.value.trim()
    grocery.value = ""
    my_list.push(my_grocery)
    list_fill(my_grocery , parseInt(my_list.length))
})


function list_fill(my_grocery , num) {
    if (my_grocery !== "") {
        let li = document.createElement("li")
        li.textContent = `${my_grocery}`
        if (default_text.classList.contains("d-none")) {

        }
        else {
            default_text.classList.add("d-none")
        }
        list.append(li)
    }
    else {
        alert("plz enter value")
    }

}

