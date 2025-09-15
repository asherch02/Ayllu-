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
  setInterval(changeBannerPhrase, 5000);

  // Fundadoras
  function Founder(name, role) {
    this.name = name;
    this.role = role;
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

  // Carrusel de testimonios
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

  // Eventos próximos: botón "Ver más"
  let eventBtns = document.querySelectorAll(".btn-event-details");
  if (eventBtns) {
    eventBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        let detailsId = btn.getAttribute("aria-controls");
        let details = document.getElementById(detailsId);
        if (!details) return;
        let expanded = btn.getAttribute("aria-expanded") === "true";
        if (!expanded) {
          details.classList.remove("visually-hidden");
          btn.setAttribute("aria-expanded", "true");
          btn.textContent = "Ver menos";
          details.setAttribute("aria-live", "polite");
          details.setAttribute("tabindex", "0");
          details.focus();
        } else {
          details.classList.add("visually-hidden");
          btn.setAttribute("aria-expanded", "false");
          btn.textContent = "Ver más";
          details.removeAttribute("aria-live");
          details.removeAttribute("tabindex");
        }
      });
    });
  }

  // Botón para ir arriba
  let goTopBtn = document.getElementById("go-top-btn");
  if (goTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        goTopBtn.classList.remove("visually-hidden");
      } else {
        goTopBtn.classList.add("visually-hidden");
      }
    });
    goTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
