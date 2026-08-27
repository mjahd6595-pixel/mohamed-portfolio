document.addEventListener("DOMContentLoaded", () => {
  /* ================= LIGHTBOX ================= */

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeButton = document.getElementById("closeLightbox");

  const images = document.querySelectorAll("img:not(#lightboxImage)");

  images.forEach((image) => {
    image.style.cursor = "pointer";

    image.addEventListener("click", () => {
      lightboxImage.src = image.src;
      lightbox.style.display = "flex";
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }


  /* ================= SCROLL REVEAL ================= */

  const revealElements = document.querySelectorAll(
    ".work-category, .social-card, .three-d-card, .project, .contact"
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  const revealOnScroll = () => {
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < window.innerHeight - 80) {
        element.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);

  revealOnScroll();


  /* ================= PAGE LOADING ================= */

  document.body.classList.add("loading");
});


/* ================= PRELOADER ================= */

window.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    if (preloader) {
      preloader.classList.add("hide");
    }

    document.body.classList.remove("loading");
    document.body.classList.add("loaded");

  }, 1500);
});
