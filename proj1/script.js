let demo = document.getElementById("demo")      // target
let bgc = document.getElementById("bgc")

function morning(){
    demo.innerHTML = "<h1>Good Morning</h1>"
    bgc.style.background = "#9cf7fc"
    bgc.style.color = "blue"
}
function afternoon(){
    demo.innerHTML = "<h1>Good Afternoon</h1>"
    bgc.style.background = "#f9f0b9"
    bgc.style.color = "black"
}
function evening(){
    demo.innerHTML = "<h1>Good Evening</h1>"
    bgc.style.background = "#dec53a"
    bgc.style.color = "#383211"
}
function night(){
    demo.innerHTML = "<h1>Good Night</h1>"
    bgc.style.background = "#2e5e61"
    bgc.style.color = "white"
}