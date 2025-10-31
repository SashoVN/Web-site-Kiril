// Меню в началната страница
const track = document.querySelector('.slider-track'); 
const slides = document.querySelectorAll('.slider-slide');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
let currentIndex = 0;
let autoSlideInterval = null;

function updateSliderPosition() {
  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// При натискане назад
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSliderPosition();
});

// При натискане напред
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition();
});

// Автоматично превъртане на всеки 5 секунди
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSliderPosition();
  }, 5000);
}

// Спиране при hover (по желание)
track.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
track.addEventListener('mouseleave', startAutoSlide);

// Стартиране
updateSliderPosition();
startAutoSlide();

// Меню в началната страница


// Слайшоу на началната страница
const images = [
  "/img/test.png",
];

let currentIndex1 = 0;
const imgElement = document.getElementById("slideshow");

function changeImage() {
  imgElement.style.opacity = 0;

  setTimeout(() => {
    currentIndex1 = (currentIndex1 + 1) % images.length;
    imgElement.src = images[currentIndex1];
    imgElement.style.opacity = 1;
  }, 500);
}

//setInterval(changeImage, 5000); // сменя на всеки 5 секунди
// Слайшоу на началната страница