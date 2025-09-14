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
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("nav-links").classList.remove("show");
}

function toggleDropdown(event) {
  event.preventDefault(); 
  const li = event.currentTarget.parentElement;
  const dropdown = li.querySelector(".dropdown-menu");
  dropdown.classList.toggle("show");
}

document.addEventListener("click", function (e) {
  const dropdowns = document.querySelectorAll(".dropdown-menu");
  dropdowns.forEach((menu) => {
    if (!menu.contains(e.target) && !menu.previousElementSibling.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
});
