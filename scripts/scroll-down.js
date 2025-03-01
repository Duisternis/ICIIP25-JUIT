document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
      window.scrollTo({
          top: window.innerHeight/2,
          behavior: "smooth"
      });
  }, 600); 
});