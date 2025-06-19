// Auto-redirect after 4 seconds
setTimeout(() => {
  window.location.href = 'countdown.html';
}, 4000);

// Floating background icons
const floatingIcons = document.getElementById("floatingIcons");

// Use only heart emojis in different colors
const iconTypes = ['💗', '💖', '💜', '💙', '💛'];

for (let i = 0; i < 25; i++) {
  const span = document.createElement('span');
  span.textContent = iconTypes[i % iconTypes.length];
  span.style.position = 'absolute';
  span.style.left = Math.random() * 100 + "vw";
  span.style.top = Math.random() * 100 + "vh";
  span.style.fontSize = (Math.random() * 16 + 18) + "px";
  span.style.opacity = 0.5 + Math.random() * 0.4;
  span.style.animation = `float ${4 + Math.random() * 6}s linear infinite`;
  floatingIcons.appendChild(span);
}
