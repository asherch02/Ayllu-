/* Saludo */
document.addEventListener("DOMContentLoaded", () => {
  const saludo = document.getElementById("saludo");
  const hora = new Date().getHours();
  let mensaje = "";

  if (hora < 12) {
    mensaje = "¡Buenos días! Bienvinid@ a Ayllu";
  } else if (hora < 18) {
    mensaje = "¡Buenas tardes! Bienvenid@ a Ayllu";
  } else {
    mensaje = "¡Buenas noches! Bienvenid@ a Ayllu";
  }

  saludo.textContent = mensaje;
  setTimeout(() => {
    saludo.style.opacity = "0";
  }, 8000);
});
