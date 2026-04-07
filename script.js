let btn = document.getElementById("btn")
let bg = document.getElementById("bg")
let isDarkModeOn = false

btn.addEventListener("click", ()=>{

    if (isDarkModeOn) {
        isDarkModeOn = false
    }else{
        isDarkModeOn = true
    }

    isDarkModeOn ? btn.innerText="Dark Mode" : btn.innerText = "Light Mode"
    isDarkModeOn ? bg.style.backgroundColor = "black" : bg.style.backgroundColor = "white" 
    
    isDarkModeOn ? btn.style.backgroundColor = "white" : btn.style.backgroundColor = "black"
    isDarkModeOn ? btn.style.color = "black" : btn.style.color = "white"
})