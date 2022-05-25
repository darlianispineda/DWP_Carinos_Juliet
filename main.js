//Menú hamburguesa
const hamburguesa = document.getElementById("hamburguesa");
let abierto = false;

function cambiar() {
    if (abierto == false) {
        document.getElementById("nav").classList.add('nav_enlaces2');
        abierto = true;
    } else {
        document.getElementById("nav").classList.remove('nav_enlaces2');
        abierto = false;
    }
};

hamburguesa.addEventListener("click", () => {
    cambiar();

});


window.addEventListener("resize", () => {
    if (abierto == true) {
        cambiar();
    }
});

//***********************************************************************************/
/********************************************************************************* */

//slider
const imagenes= ["img/img1.png","img/img2.png","img/img3.jpeg"]
let slider_img= document.querySelector(".slider_img");
const intervalo=4000;
let cont=0;



//Script del slider automático
var interval=setInterval(function(){
    slides();
},intervalo);

function timer() {
     clearInterval(interval);
    
    
    interval = setInterval(function () {
        slides();
        
    }, intervalo);
};

function slides(){
    
    slider_img.src= imagenes[cont];
    cont++;

    if (cont==imagenes.length ){
        
        cont=0;
    }
};

//script
let slider_prev= document.getElementById("slider_prev");
let slider_next=document.getElementById("slider_next");


slider_prev.addEventListener("click", function(){
    
    cont=cont-1;    
    
    if (cont<0 ){
        cont=imagenes.length-1;
    };
    
    slider_img.src= imagenes[cont];
    timer();
    
    
});

slider_next.addEventListener("click", function(){
    slides();
    timer();
    
});




