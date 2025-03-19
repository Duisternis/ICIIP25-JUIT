document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
      window.scrollTo({
          top: window.innerHeight/1.3,
          behavior: "smooth"
      });
  }, 600); 
});