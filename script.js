document.addEventListener("DOMContentLoaded", function () {
  const splashScreen = document.querySelector(".splash-screen");
  const mainContent = document.querySelector(".main-content");

  splashScreen.addEventListener("click", function () {
    splashScreen.classList.add("is-leaving");
    mainContent.classList.add("active");
  });
});

function updateCountdown() {
  const eventDate = new Date("2026-09-24T15:00:00+00:00").getTime();
  const now = new Date().getTime();

  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Событие уже прошло!";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days} : ${hours} : ${minutes} : ${seconds}`;
}

const interval = setInterval(updateCountdown, 1000);

updateCountdown();

const sparklesContainer = document.getElementById("cursor-sparkles");
let sparklesCount = 0;
const maxSparkles = 15;

const colors = ["#FFD700", "#FFC107", "#FFA000", "#FF8C00", "#FF6B00"];

document.addEventListener("mousemove", (event) => {
  if (sparklesCount >= maxSparkles) return;

  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  const size = Math.random() * 2 + 2;
  sparkle.style.width = size + "px";
  sparkle.style.height = size + "px";

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  sparkle.style.background = randomColor;

  sparkle.style.borderRadius = Math.random() > 0.5 ? "50%" : "30%";

  const angle = Math.random() * Math.PI * 2;
  const distance = Math.min(60, Math.random() * 120);

  sparkle.style.left = event.clientX + distance * Math.cos(angle) + "px";
  sparkle.style.top = event.clientY + distance * Math.sin(angle) + "px";

  sparklesContainer.appendChild(sparkle);
  sparklesCount++;

  sparkle.addEventListener("animationend", () => {
    if (sparkle.parentNode) {
      sparkle.remove();
      sparklesCount--;
    }
  });

  setTimeout(() => {
    if (sparkle.parentNode) {
      sparkle.remove();
      sparklesCount--;
    }
  }, 800);
});

document.addEventListener("DOMContentLoaded", function () {
  const mapButton = document.getElementById("open-maps-btn");

  if (mapButton) {
    const lat = 56.194082;
    const lon = 37.286353;

    const routeText = `Мое местоположение~${lat},${lon}`;

    const yandexMapsUrl = `https://yandex.ru/maps/?mode=routes&rtext=${encodeURIComponent(routeText)}&rtt=auto`;

    mapButton.href = yandexMapsUrl;

    console.log("Кнопка готова! Ссылка:", yandexMapsUrl);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("playSound");
  const audio = document.getElementById("myAudio");

  if (!button || !audio) {
    console.error("Один из элементов не найден!");
    return;
  }

  audio.volume = 0.1;

  let isPlaying = false;

  button.addEventListener("click", function () {
    if (!isPlaying) {
      audio.play();
      isPlaying = true;
    } else {
      audio.pause();
      audio.currentTime = 0;
      isPlaying = false;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "-100px 0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, observerOptions);

  const targets = document.querySelectorAll(".scroll-reveal");

  targets.forEach((target) => {
    observer.observe(target);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guestForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      const successMsg = document.getElementById("form-success");
      const btn = document.querySelector(".submit-btn");

      if (successMsg) {
        successMsg.classList.add("visible");
        successMsg.style.display = "block";

        successMsg.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      if (btn) {
        btn.textContent = "Отправляется...";
        btn.style.opacity = "0.7";
        btn.style.cursor = "not-allowed";
      }
    });
  }
});
