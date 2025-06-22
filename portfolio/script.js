var typed = new Typed("#element", {
        strings: [" Web Developer."],
        typeSpeed: 50,
      });
      const themeToggle = document.getElementById("theme-toggle");
      const body = document.body;
      themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-theme");
        themeToggle.textContent = body.classList.contains("light-theme")
          ? "🌞"
          : "🌙";
      });