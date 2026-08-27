document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeButton = document.getElementById("closeLightbox");

  // أي صورة في الموقع ما عدا صورة الـLightbox نفسها
  const images = document.querySelectorAll("img:not(#lightboxImage)");

  images.forEach((image) => {
    image.style.cursor = "pointer";

    image.onclick = function () {
      lightboxImage.src = this.src;
      lightbox.style.display = "flex";
    };
  });

  closeButton.onclick = function () {
    lightbox.style.display = "none";
  };
});/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
  ".work-category, .social-card, .three-d-card, .project, .contact"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
/* ================= PRELOADER + PAGE INTRO ================= */

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loading");
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.classList.add("hide");

    document.body.classList.remove("loading");
    document.body.classList.add("loaded");

  }, 1800);
});
