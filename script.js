const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let current = 0;
let autoSlide;
const intervalTime = 4000;

slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    goToSlide(i);
    resetAutoSlide();
  });
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dots span");

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  document.querySelector(".slides").style.transform = `translateX(-${
    index * 100
  }%)`;
}

function goToSlide(index) {
  current = index;
  showSlide(current);
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, intervalTime);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// Start
showSlide(current);
startAutoSlide();

// -------------------------------------------------------------------
   




 const loginButton=document.getElementById('logginButton')
const errorMsg=document.getElementById('errorMsg')


 loginButton.addEventListener('click',function () {
  const emailInput=document.getElementById('email').value.trim()
const password=document.getElementById('password').value.trim()

  const correctEmail='unknown@gmail.com'
const   correctPassword='123456'
  
if(emailInput===correctEmail && password===correctPassword){
  window.location.href='./payments.html'
}else{
errorMsg.textContent='mail incorrect'
}


 })

