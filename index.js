const display = document.querySelector(".menu-btn")

const sideBar = document.getElementById("side-bar")


const gerrit = document.getElementById("gerrit")

gerrit.addEventListener("click", function(){
    sideBar.classList.toggle("show")
    gerrit.classList.toggle("close")
})


display.addEventListener("click", function(){
    sideBar.classList.toggle("show")
   
})
/* window.addEventListener("clcik", removeNav) */




/* function removeNav(e){
    if(e.target == sideBar){
        sideBar.style.width = "0"
    }
} */