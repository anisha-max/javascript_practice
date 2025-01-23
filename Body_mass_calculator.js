

const form = document.querySelector('form')


form.addEventListener('submit' ,(e)=>{
    e.preventDefault()
    const msg = document.querySelector('#msg')
    const height = document.querySelector("#Inputheight")
    const weight = document.querySelector("#InputWieght")
    const height_num = parseInt(height.value)
    const weight_num = parseInt(weight.value)
    if( height_num <= 0 || isNaN(height_num) || weight_num<= 0 || isNaN(weight_num) === NaN){
        msg.innerHTML = "plese enter valid"
    }else{
        const bmi = (weight_num / ((height_num*height_num/10000))).toFixed(2)
        msg.innerHTML = `your BMI is ${bmi}`
        console.log(bmi)
     
    }
})

