
const slider = document.querySelector(".sliderImgae")
console.log(slider)

const imagesSrc = ["aapdev.jpg", "main2.jpeg", "secondMain.jpg"]
let currentIndex = 0
function showSlide(index){
    slider.src= imagesSrc[index]
}

function prevSlide(){
     currentIndex = (currentIndex -1 +imagesSrc.length ) % imagesSrc.length
    showSlide(currentIndex)
}
function nextSlide(){
     currentIndex = (currentIndex + 1 +imagesSrc.length ) % imagesSrc.length
    showSlide(currentIndex)
}


setInterval(nextSlide , 5000)