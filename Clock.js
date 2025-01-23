const time = document.querySelector('#time')

function clock(){
    const date = new Date().toLocaleTimeString()
    time.innerHTML = date
    
}
setInterval(clock,1000)