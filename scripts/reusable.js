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

