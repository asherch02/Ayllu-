// Contador de visitas
let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);
console.log("Has visitado esta página " + visitCount + " veces.");

document.addEventListener("DOMContentLoaded", function () {
  // Frases motivadoras del banner
  let phrases = [
    "Nuestra historia puede ser tu inspiración",
    "El Perú es diversidad y unión",
    "Las raíces construyen el futuro",
    "La cultura es un puente entre generaciones",
  ];
  function changeBannerPhrase() {
    let bannerPhrase = document.getElementById("banner-phrase");
    if (bannerPhrase) {
      let randomIndex = Math.floor(Math.random() * phrases.length);
      bannerPhrase.textContent = phrases[randomIndex];
    }
  }
  //Cambiar la frase cada segundo
  setInterval(changeBannerPhrase, 1000);
});
