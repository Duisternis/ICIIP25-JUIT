var lp = document.querySelector(".left-pointer");
var rp = document.querySelector(".right-pointer");
var mItems = document.querySelector(".menu-item");


setTimeout(() => {
  document.querySelector('.typing-text').style.borderRight = 'none';
}, 2000); 

function scrollToEnd() {
  document.getElementById("news").scrollIntoView({ behavior: "smooth" });
}

lp.addEventListener('click', function() {
  var sc = mItems.offsetWidth - 60;
  var pos = mItems.scrollLeft - sc;
  mItems.scrollTo({
    left: pos,
    behavior: 'smooth'
  });
});

rp.addEventListener('click', function() {
  var sc = mItems.offsetWidth - 60;
  var pos = mItems.scrollLeft + sc;
  mItems.scrollTo({
    left: pos,
    behavior: 'smooth'
  });
});

var scrollLeftPrev = 0;

mItems.addEventListener('scroll', function() {
  var newScrollLeft = mItems.scrollLeft;
  var width = mItems.offsetWidth;
  var scrollWidth = mItems.scrollWidth;
  var offset = 8;
  
  console.log(scrollWidth - newScrollLeft - width);
  
  if (scrollWidth - newScrollLeft - width < offset) {
    console.log('right end');
    document.querySelector(".right-pointer").classList.add("dis");
  } else {
    document.querySelector(".right-pointer").classList.remove("dis");
  }
  
  if (mItems.scrollLeft === 0) {
    document.querySelector(".left-pointer").classList.add("dis");
  } else {
    document.querySelector(".left-pointer").classList.remove("dis");
  }
  
  scrollLeftPrev = newScrollLeft;
});

const slider1 = document.querySelector('.menu-item');
let isDown = false;
let startX;
let scrollLeft;

slider1.addEventListener('mousedown', function(e) {
  isDown = true;
  slider1.classList.add('active');
  startX = e.pageX - slider1.offsetLeft;
  scrollLeft = slider1.scrollLeft;
});

slider1.addEventListener('mouseleave', function() {
  isDown = false;
  slider1.classList.remove('active');
});

slider1.addEventListener('mouseup', function() {
  isDown = false;
  slider1.classList.remove('active');
});

slider1.addEventListener('mousemove', function(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider1.offsetLeft;
  const walk = (x - startX) * 3; 
  slider1.scrollLeft = scrollLeft - walk;
});
