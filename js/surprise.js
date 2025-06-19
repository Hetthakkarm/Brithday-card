function openCard() {
  document.getElementById("birthdayMessage").classList.remove("hidden");
}

function flipCard() {
  document.getElementById("cardInner").classList.toggle("flip");
}

window.onload = () => {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let pieces = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 6 + 4,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    velocity: Math.random() * 3 + 2
  }));

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of pieces) {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.radius, p.radius);
      p.y += p.velocity;
      if (p.y > canvas.height) p.y = 0;
    }
    requestAnimationFrame(draw);
  };
  draw();
};

// Auto play background music on load
window.addEventListener("load", () => {
  const music = document.getElementById("bgMusic");
  music.play().catch((e) => {
    document.addEventListener("click", () => music.play(), { once: true });
  });
});
