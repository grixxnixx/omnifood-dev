const navOpenBtn = document.querySelector(".main-mobile-nav");

navOpenBtn.addEventListener("click", (e) => {
  document.querySelector(".header").classList.toggle("nav-open");
});
