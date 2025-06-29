const targetDate = new Date("2025-07-06T00:00:00").getTime();
function updateCountdown() {
      const now = new Date().getTime();
      const gap = targetDate - now;
      if (gap <= 0) {
      // Countdown complete, redirect to birthday.html
      window.location.href = "birthday.html";
      return;
    }

      const second = 1000,
            minute = 60 * second,
            hour = 60 * minute,
            day = 24 * hour;

      document.getElementById("days").textContent = Math.floor(gap / day);
      document.getElementById("hours").textContent = Math.floor((gap % day) / hour);
      document.getElementById("minutes").textContent = Math.floor((gap % hour) / minute);
      document.getElementById("seconds").textContent = Math.floor((gap % minute) / second);
}
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Floating Hearts
const floatingIcons = document.getElementById("floatingIcons");
    const icons = ['💖', '💜', '💛', '💘', '💗'];
    for (let i = 0; i < 25; i++) {
      const span = document.createElement('span');
      span.textContent = icons[i % icons.length];
      span.style.left = Math.random() * 100 + "vw";
      span.style.top = Math.random() * 100 + "vh";
      span.style.fontSize = (Math.random() * 14 + 18) + "px";
      span.style.animationDuration = (5 + Math.random() * 3) + "s";
      floatingIcons.appendChild(span);
}
