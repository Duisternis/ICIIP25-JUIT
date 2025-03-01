window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".new_navbar_header");
  if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
          scrollToTopBtn.classList.add("show");
      } else {
          scrollToTopBtn.classList.remove("show");
      }
  });

  scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});


async function loadNavbar() {
    const response = await fetch('./components/navbar.html');
    const navbarHTML = await response.text();
    document.getElementById('navbar-container').innerHTML = navbarHTML;
}
async function loadFooter() {
  const response = await fetch('./components/footer.html');
  const footerHTML = await response.text();
  console.log(footerHTML)
  document.getElementById('footer-container').innerHTML = footerHTML;
}

loadNavbar();
loadFooter();

