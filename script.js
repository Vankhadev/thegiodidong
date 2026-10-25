const adressbtn = document.querySelector("#adress-form")
const adressclose = document.querySelector("#adress-close")

adressbtn.addEventListener("click", function(){
    document.querySelector(".adress-form").style.display = "flex"
})
adressclose.addEventListener("click", function(){
    document.querySelector(".adress-form").style.display = "none"
})

// slider------------------
const rightbtn = document.querySelector(".fa-chevron-right")
const leftbtn = document.querySelector(".fa-chevron-left")
const imgmuber = document.querySelectorAll(".slider-content-left-top img")
let index = 0
rightbtn.addEventListener ("click", function(){
    index = index+1
    if(index>imgmuber.length-1){
        index=0
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
leftbtn.addEventListener ("click", function(){
     index = index-1
    if(index<=0){
        index=imgmuber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})

//slider1 -------------
const imgmuberli = document.querySelectorAll(".slider-content-left-button li")

// console.log (imgactive)
imgmuberli.forEach(function(image,index){
    image.addEventListener("click", function(){
        romoreactive ()
        document.querySelector(".slider-content-left-top").style.right = index *100+"%"
        image.classList.add("active")
    })
})

function romoreactive (){
    let imgactive = document.querySelector(".active")
    imgactive.classList.remove("active")
}

//========slider2 =========
function imgAuto () {
    index = index + 1
     
    if(index>imgmuber.length-1){
        index=0
    }
    romoreactive ()
    document.querySelector(".slider-content-left-top").style.right = index *100+"%" 
    imgmuberli[index].classList.add("active")
    // console.log(index)
}
setInterval(imgAuto,5000)