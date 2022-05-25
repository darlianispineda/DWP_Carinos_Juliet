//agregar titulos,descripciones y productos
//const producto = ["img/img1.png", "img/img2.png", "img/img3.jpeg", "img/img1.png", "img/img2.png", "img/img3.jpeg"]
class producto{
    
    constructor(titulo,descripcion,imagenes){
        this.titulo=titulo;
        this.descripcion= descripcion;
        this.imagenes=imagenes;
            
        
    };
};


const tazas = new producto("Tazas de cerámica", "Hermosas tazas en distintos diseños para todos los gustos",
                ["img/img1.png", "img/img2.png", "img/img3.jpeg", "img/img1.png", "img/img2.png", "img/img3.jpeg"]);
const jarrones = new producto("Jarrones de cerámica", "Hermosos jarrones en distintos diseños para todos los gustos",
                ["img/img2.png", "img/img1.png", "img/img3.jpeg", "img/img1.png", "img/img2.png", "img/img3.jpeg"]);

let arrProductos= [tazas,jarrones];


//************************************************************************************************************* */
let productos = document.getElementsByClassName("card");
let cerrar = document.getElementById("cerrar");
let slider_img_pro = document.querySelector(".slider_img_pro");
let interval2;
let anterior=0;
const indicadores = document.getElementsByClassName("indicador");
let cont2 = 0;


for (let i = 0; i < productos.length; i++) {

    productos[i].addEventListener("click", function () {

        document.getElementById("productos").classList.add("aparecer");

        //Script de titulo y descripcion
        document.getElementById("titulo").innerText=arrProductos[i].titulo;
        document.getElementById("descripcion").innerText=arrProductos[i].descripcion;


        //Script del slider automático
        slider_img_pro.src = arrProductos[i].imagenes[cont2];
        interval2 = setInterval(function () {
            slidesProductos();
        }, intervalo);

        function timer2() {
            slidesProductos()
            clearInterval(interval2);
            interval2 = setInterval(function () {
                slidesProductos();

            },intervalo);
        };

        function slidesProductos () {
            indicadores[anterior].classList.remove("indicador_actual");
            indicadores[cont2].classList.add("indicador_actual");
            slider_img_pro.src = arrProductos[i].imagenes[cont2];
            anterior=cont2;
            cont2++;

            if (cont2 == arrProductos[i].imagenes.length) {
                cont2 = 0;
            }
        };


        //Mostrar la cantidad de miniaturas de a cuerdo a la cantidad de fotos
        for (let j = 0; j < arrProductos[i].imagenes.length; j++) {

            indicadores[j].style.display = "block";
            indicadores[j].style.backgroundImage = "url(" + arrProductos[i].imagenes[j] + ")";

        };

        //Click en una miniatura
        for (let j = 0; j < arrProductos[i].imagenes.length; j++) {
            indicadores[j].addEventListener("click", function () {
                cont2=j;
                timer2();

            });

        };

    });

};

cerrar.onclick = () => {
    document.getElementById("productos").classList.remove("aparecer");
    indicadores[anterior].classList.remove("indicador_actual");
    indicadores[0].classList.add("indicador_actual");
    clearInterval(interval2); //detener slider de productos
    cont2=0;
    anterior=0;
    


    for (let j = 0; j < 10; j++) {

        indicadores[j].style.display = "none";
        
    };
}




