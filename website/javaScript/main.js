$(function(){
    var header = document.getElementById('header')
    var headroom = new Headroom(header)

    headroom.init()

});
let header = document.getElementById('header')

let boton = document.getElementById("icono")

let enlaces = document.getElementById("enlaces")

let contador = 0;

boton.addEventListener("click", function(){
    if(contador == 0){
        //setTimeout(function(){header.className = ('header2')},500)
        enlaces.className = ('enlaces dos')
        contador = 1
        header.className = ('header2')
    }else{
        enlaces.classList.remove('dos')
        enlaces.className = ('enlaces uno')
        contador = 0
        header.classList.remove('header2')
    }
})
window.addEventListener('resize',function(){
        if(screen.width > 750){
            contador = 0;
            enlaces.classList.remove('dos')
            header.classList.remove('header2')   
            enlaces.className = ('enlaces uno')
        } 
})
window.addEventListener('scroll',function(){
        contador = 0;
        enlaces.classList.remove('dos')
        header.classList.remove('header2')   
        enlaces.className = ('enlaces uno')
})
