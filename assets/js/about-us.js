console.log("about-us.js cargado correctamente");

const buttons = document.querySelectorAll(".button-num");
const visionText = document.getElementById("vision-p");

const visionSteps = {
  1: "Nuestra primera idea fue crear un pequeño grupo de amigas compartiendo cultura.",
  2: "Empezamos a investigar tradiciones peruanas para inspirarnos.",
  3: "Descubrimos la importancia de la música andina y quisimos incluirla.",
  4: "Pensamos en un logo que reflejara comunidad y unión.",
  5: "Decidimos que queríamos una página web para difundirlo.",
  6: "Buscamos colores que representaran el Perú: rojo, blanco y tonos de la tierra.",
  7: "Nos organizamos en roles: diseño, contenido y desarrollo.",
  8: "Agregamos la sección de 'Quiénes somos' para personalizar el proyecto.",
  9: "Empezamos a recibir retroalimentación de amigos y profesoras.",
  10: "¡Nació Ayllu, como un espacio para unir y celebrar la cultura peruana!",
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const num = button.dataset.num;
    visionText.textContent = visionSteps[num];
    visionText.style.color = "white";
  });
});
