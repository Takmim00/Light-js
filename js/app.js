const sunBtn = document.getElementById("sunBtn");
const moonBtn = document.getElementById("moonBtn");
const lightImg = document.querySelector(".lightImg");

sunBtn.addEventListener("click", () => {
  sunBtn.classList.add("active");
  moonBtn.classList.remove("active");
  lightImg.src = "./assets/pic_bulbon.gif";
});

moonBtn.addEventListener("click", () => {
  moonBtn.classList.add("active");
  sunBtn.classList.remove("active");
  lightImg.src = "./assets/pic_bulboff.gif";
});
