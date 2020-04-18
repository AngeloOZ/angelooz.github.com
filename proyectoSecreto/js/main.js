let bg = document.querySelector('#bg')
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    bg.style.backgroundSize = 0 + value*3+"px";
})
