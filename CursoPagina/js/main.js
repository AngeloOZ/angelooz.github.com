
  AOS.init();
// programacion para menu Scroll

let ubicacionPrincipal = window.pageYOffset

window.addEventListener("scroll", function(){    
    
    let desplazamientoActual = window.pageYOffset
    
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual
})

// Programming of menu responsive

let enlacesHeader = document.querySelectorAll(".enlaces")[0];
let band = true

document.querySelectorAll(".hamburger")[0].addEventListener("click", function(){

    if(band){
        document.querySelectorAll(".hamburger")[0].style.color = "#fff"
        band = false
    }else{
        document.querySelectorAll(".hamburger")[0].style.color = "#000"
        band = true
    }
    enlacesHeader.classList.toggle("menuDos")
})