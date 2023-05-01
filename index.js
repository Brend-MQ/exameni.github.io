const id_tbn_a = document.getElementById("btn-a")
const container = document.querySelector("#container-r")
let val=false
var x = window.matchMedia("(max-width: 1000px)")
const carouselExampleIndicators = document.getElementById
("carouselExampleIndicators")

const $aside = document.getElementById("aside")
const header = document.querySelector("header")
let nc=false


id_tbn_a.addEventListener("click",e=>{
    e.preventDefault()
    if(val!=true){
        container.setAttribute("class","show")
        id_tbn_a.innerHTML =`<a href="#"><i class="bi bi-x-lg"></i></a>`
      
        val=true
    }else{
        id_tbn_a.innerHTML =`<a href="#">          <i class="bi bi-three-dots"></i></a>`
        
        container.setAttribute("class","show2")
        val=false
    }
})
function mediaScreen(x,w){
    const header = document.querySelector("header")
    if(!x.matches){
        container.setAttribute("class","container-r")
        container.style=""
        id_tbn_a.innerHTML =`<a href="#">          <i class="bi bi-three-dots"></i></a>`
        nc=false
    }
    else{
        console.log(nc)
        nc=true
    }
        document.querySelector(".main").style=`margin-left:50px;margin-right:10px;width:${w-60}px`
    carouselExampleIndicators.style.width=`${w-60}px`
    document.querySelector("#img").style=`width:${w-100}px`
}

window.addEventListener("resize",e=>{
    mediaScreen(x,document.querySelector("header").clientWidth)
   
})

window.addEventListener("scroll",e=>{

    if( window.scrollY >= 100){
        $aside.style.top = "0"
        $aside.style.transition = "0.3s"
        container.style=`poition:fixed;top:0px;`
    }
    else{
        console.log(nc)
      if(nc){
        container.style=`poition:fixed;top:${header.clientHeight}px;`
        console.log("asdf")
    }
        $aside.style.top=`${header.clientHeight}px`
    }

})
