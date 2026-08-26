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
});
