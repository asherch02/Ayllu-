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
  //Fundadoras -> añadimos el rol de cada una :3
  function Founder() {
    this.name = this.name;
    this.role = this.role;
    this.getDisplay = function () {
      return this.name + " - " + this.role;
    };
  }
  let founders = [
    new Founder("Dasha Espinoza", "Diseñadora"),
    new Founder("Mariana Briceño", "Gestora cultural"),
    new Founder("Yadira Luna", "Desarrolladora"),
  ];
  let foundersList = document.getElementById("founders-list");
  if (foundersList) {
    foundersList.innerHTML = "";
    for (let i = 0; i < founders.length; i++) {
      let li = document.createElement("li");
      li.textContent = founders[i].getDisplay();
      foundersList.appendChild(li);
    }
  }
  // Botones "Ver más" en actividades
  let seeMoreBtns = document.querySelectorAll(".btn-see-more");
  if (seeMoreBtns) {
    for (let i = 0; i < seeMoreBtns.length; i++) {
      seeMoreBtns[i].addEventListener("click", function () {
        let infoId = this.getAttribute("aria-controls");
        let info = document.getElementById(infoId);
        if (!info) return;
        let expanded = this.getAttribute("aria-expanded") === "true";
        if (!expanded) {
          info.classList.remove("visually-hidden");
          this.setAttribute("aria-expanded", "true");
          this.textContent = "Ver menos";
          info.setAttribute("aria-live", "polite");
          info.setAttribute("tabindex", "0");
          info.focus();
        } else {
          info.classList.add("visually-hidden");
          this.setAttribute("aria-expanded", "false");
          this.textContent = "Ver más";
          info.removeAttribute("aria-live");
          info.removeAttribute("tabindex");
        }
      });
    }
  }

  //Carrusel de testimonios
  let testimonials = [
    "“Ayllu me permitió reconectar con mis raíces y aprender recetas que mi abuela preparaba.” – Rosa, participante",
    "“Las actividades de muralismo fueron una experiencia única para mi comunidad.” – Juan, voluntario",
    "“Aprendí a valorar la diversidad cultural de Perú gracias a los talleres.” – Lucía, estudiante",
  ];
  let testimonialIndex = 0;
  let testimonialContent = document.getElementById("testimonial-content");
  let prevTestimonial = document.getElementById("prev-testimonial");
  let nextTestimonial = document.getElementById("next-testimonial");
  function showTestimonial(idx) {
    if (testimonialContent) {
      testimonialContent.textContent = testimonials[idx];
    }
  }
  showTestimonial(testimonialIndex);
  if (prevTestimonial) {
    prevTestimonial.addEventListener("click", function () {
      testimonialIndex =
        (testimonialIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(testimonialIndex);
    });
  }
  if (nextTestimonial) {
    nextTestimonial.addEventListener("click", function () {
      testimonialIndex = (testimonialIndex + 1) % testimonials.length;
      showTestimonial(testimonialIndex);
    });
  }
});
