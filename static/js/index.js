let slides = document.querySelectorAll(".slide");

let count = 0;
const nextSlide = () => {
  if (count === slides.length - 1) {
    count = 0;
  } else {
    count += 1;
  }

  changeSlide();
};

function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[count].classList.add("active");
}

setInterval(() => nextSlide(), 5000);
