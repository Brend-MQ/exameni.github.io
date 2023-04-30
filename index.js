const id_tbn_a = document.getElementById("btn-a")
const container = document.querySelector("#container-r")
let val=false
var x = window.matchMedia("(max-width: 1000px)")
const carouselExampleIndicators = document.getElementById("carouselExampleIndicators")
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

    if(!x.matches){
        container.setAttribute("class","container-r")
        container.style=""
        id_tbn_a.innerHTML =`<a href="#">          <i class="bi bi-three-dots"></i></a>`
    }
        document.querySelector(".main").style=`margin-left:50px;margin-right:10px;width:${w-60}px`
    carouselExampleIndicators.style.width=`${w-60}px`
    document.querySelector("#img").style=`width:${w-100}px`
}

window.addEventListener("resize",e=>{
    mediaScreen(x,document.querySelector("header").clientWidth)
   
})

