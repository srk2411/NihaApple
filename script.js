// Smooth Scroll Functionality
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80, // Adjust for sticky navbar
      behavior: "smooth",
    });
  }
}

// Highlight Active Section in Navbar
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // Adjust for sticky navbar
    if (window.scrollY >= sectionTop) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
});

// Add 'active' styling to navbar links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").replace("#", "");
    scrollToSection(targetId);
  });
});

// Dynamic Year for Footer
document.querySelector(".footer p").innerHTML = `&copy; ${new Date().getFullYear()} NihaApple. All rights reserved.`;
