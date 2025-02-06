document.addEventListener("DOMContentLoaded", function () {
  const contentBox = document.querySelector(".content-info-box");
  const toggleButton = document.querySelector(".toggle-button");

  toggleButton.addEventListener("click", function () {
    contentBox.classList.toggle("expanded");
    toggleButton.classList.toggle("rotated");
  });
});