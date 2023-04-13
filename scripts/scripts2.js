//boton switch

let switchB = document.getElementById("switchB");
let switchContainer = document.getElementById("switch");
let info = document.getElementById("info");


switchB.addEventListener("click", function () {
  //Recuperamos el valor de boton Switch 
  let switchValue = document.getElementById("switchB").value;

  if (switchValue == "eso") {
    switchB.style.backgroundImage = 'url("../img/icons/fp.png")';
    // switchB.style.transition = "background-image 2s ease";

    info.innerHTML = "Ciclos";
    switchValue = document.getElementById("switchB").value="fp";
  }else{
    switchB.style.backgroundImage = 'url("../img/icons/eso.png")';
    // switchB.style.transition = "background-image 1s ease";

    info.innerHTML = "Secundaria";
    switchValue = document.getElementById("switchB").value="eso";
  }

});