// Smooth reveal animation
const revealElements = document.querySelectorAll(
  ".section-title, .work-category, .contact"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(40px)";
  element.style.transition = "opacity 0.8s ease, transform 0.8s ease";

  observer.observe(element);
});

// Play button effect
const playButton = document.querySelector(".play-btn");

playButton.addEventListener("click", () => {
  alert("ضع هنا رابط أو ملف الفيديو الخاص بالـ Showreel 🎬");
});