const boton = document.getElementById("boton");
const extraInfo = document.getElementById("extraInfo");

boton.addEventListener("click", function() {
  if (extraInfo.style.display === "none") {
    extraInfo.style.display = "block";
    boton.style.backgroundColor= "#0f0";
  } else {
    extraInfo.style.display = "none";
    boton.style.backgroundColor= "#f00";
  }
});