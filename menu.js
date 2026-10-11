window.onload = function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
  });

  document.querySelectorAll(".closeMenu").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.style.display = "none";
    });
  });
};