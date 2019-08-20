//DOM document es para buscar dentro del documento
/*
let tabla = document.querySelector("a")
console.log(tabla);

let links = document.querySelectorAll("a");

links.forEach(function(link){
  console.log(link);
});

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
  td.addEventListener('click',function(){
    console.log(this);
  })
});*/

let close = document.querySelectorAll(".close");

close.forEach(function(closes){
  //Agregar Eventos click a cada elemento encontrado
  closes.addEventListener('click',function(ev){
    ev.preventDefault();

    let content = document.querySelector(".content");
    //Quitar clases que ya addEventListener
    content.classList.remove("bounceInDown");
    content.classList.remove("animate");

    //Agregar clases para su salida
    content.classList.add("fadeOutUp");
    content.classList.add("animate");

    //Timer para esperear X tiempo para ejercutar el codigo setTimeout 1 vez
    //setInterval lo ejecuta despues de X tiempo repite constantemente
    setTimeout(function(){
      location.href = "../index.html";
    },700);

    return false;
  });
});
