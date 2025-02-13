async function loadNavbar() {
    const response = await fetch('./components/navbar.html');
    const navbarHTML = await response.text();
    document.getElementById('navbar-container').innerHTML = navbarHTML;
}
loadNavbar();

