const slider = document.querySelector(".slider");
const images = ["../img/on.png", "../img/off.png"];  //Cambiar fotos del array para Slider
let currentIndex = 0;
let paused = false;
let intervalId;

const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    // Removemos la clase "activo" de todos los botones
    botones.forEach(b => b.parentNode.classList.remove("activo"));
    // Agregamos la clase "activo" al botón correspondiente
    boton.parentNode.classList.add("activo");
  });
});

// Evento para cerrar el menú al hacer clic en otro lugar de la página
document.addEventListener("click", (event) => {
  // Si el clic fue fuera del menú, removemos la clase "activo" de todos los botones
  if (!event.target.closest("nav")) {
    botones.forEach(b => b.parentNode.classList.remove("activo"));
  }
});

// Cargar la siguiente imagen en el slider
slider.style.backgroundImage = `url(${images[currentIndex]})`; //Cargar la imagen PROMOCION

setInterval(loadNextImage, 120000);

function loadNextImage() {
  // Cargar la siguiente imagen en el slider
  slider.style.backgroundImage = `url(${images[currentIndex]})`;
  // Incrementar el índice de la imagen actual
  currentIndex++;
  // Reiniciar el índice si llegamos al final del arreglo
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

}



// Cargar la primera imagen
// loadNextImage();


//Funciones para los botones de las imagenes por años
let radioContainer = document.getElementById("radio");
let radio = document.getElementById("radioE");

function getImg(imgValue) {
  //LLamamos a la funcion para recuperar el path que corresponde
  let relativePath=getPath();
  let fullPathImg=relativePath+imgValue+".png";

  //Colocamos el path para que se cargue en el Slider
  slider.style.backgroundImage= `url(${fullPathImg})`;

  // Cargamos la cancion correspondiente
  let pathRadio = "audio/";
  let fullPathRadio;

  if (imgValue >= 1970 && imgValue <= 1979) {
    fullPathRadio = pathRadio + "1970/" + imgValue + ".mp3";

  } else if (imgValue >= 1980 && imgValue <= 1989) {
    fullPathRadio = pathRadio + "1980/" + imgValue + ".mp3";


  } else if (imgValue >= 1990 && imgValue <= 1999) {
    fullPathRadio = pathRadio + "1990/" + imgValue + ".mp3";


  } else if (imgValue >= 2000 && imgValue <= 2009) {
    fullPathRadio = pathRadio + "2000/" + imgValue + ".mp3";


  } else if (imgValue >= 2010 && imgValue <= 2019) {
    fullPathRadio = pathRadio + "2010/" + imgValue + ".mp3";


  } else if (imgValue >= 2020 && imgValue <= 2029) {
    fullPathRadio = pathRadio + "2020/" + imgValue + ".mp3";


  }

  //Cargamos el SRC del audio
  radio.src = fullPathRadio;
  radio.play();

  //Aqui modificamos los estilos para que salga la radio
  radioContainer.style.right = "25px";

  setTimeout(function(){
    radio.pause();
    radioContainer.style.right = "-85px";

  }, 120000);

  

}


// --------------------------------
const pathImgEso = "../img/eso/";
const pathImgFp = "../img/fp/";

let switchBotton = document.getElementById("switchB");

function getPath() {
  //Recuperamos el valor que tiene el boton
  sValue = document.getElementById("switchB").value;
  let fullPath ="";

  if (sValue == "eso") {
    //Establecemos la imagen con la nueva ruta
    fullPath = pathImgEso;

  }

  if (sValue == "fp") {
    //Establecemos la imagen con la nueva ruta
    fullPath = pathImgFp;

  }
  return fullPath;
}

