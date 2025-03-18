
// const slider = document.querySelector(".sliderImgae")
// console.log(slider)

// const imagesSrc = ["aapdev.jpg", "main2.jpeg", "secondMain.jpg"]
// let currentIndex = 0
// function showSlide(index){
//     slider.src= imagesSrc[index]
// }

// function prevSlide(){
//      currentIndex = (currentIndex -1 +imagesSrc.length ) % imagesSrc.length
//     showSlide(currentIndex)
// }
// function nextSlide(){
//      currentIndex = (currentIndex + 1 +imagesSrc.length ) % imagesSrc.length
//     showSlide(currentIndex)
// }


// setInterval(nextSlide , 5000)

const sliderImgae = document.querySelectorAll(".sliderImgae")
const slider = document.querySelector(".slider")
const totalSlide = sliderImgae.length
let currentIndex = 0

function moveSlide(step){
    currentIndex += step
    if(currentIndex >= totalSlide){
        currentIndex =0 
    }else if(currentIndex <0){
        currentIndex = totalSlide-1
    }
console.log(currentIndex)
const slideWidth = sliderImgae[0].clientWidth;
slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

}


