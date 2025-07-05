const container = document.getElementById("slideshow");
let index = 0;

function autoSlide() {
  const slides = document.querySelectorAll(".slide");
  index = (index + 1) % slides.length;
  container.scrollTo({
    left: index * window.innerWidth,
    behavior: "smooth"
  });
}

setInterval(autoSlide, 5000); // Auto-slide every 5 seconds
// Stardust Generator
const starContainer = document.getElementById('stardust');
const numberOfStars = 1000;

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Random position
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;

  // Random animation delay and size
  star.style.animationDelay = `${Math.random() * 5}s`;
  star.style.width = star.style.height = `${1 + Math.random() * 3}px`;

  starContainer.appendChild(star);
}
