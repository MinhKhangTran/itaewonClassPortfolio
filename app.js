const navbar = document.querySelector(".navbar");
const closeBtn = document.querySelector(".close-btn");
const wine = document.querySelector(".wine");

wine.addEventListener("click", () => {
  navbar.classList.add("show");
  wine.style.display = "none";
});
closeBtn.addEventListener("click", () => {
  navbar.classList.remove("show");
  wine.style.display = "block";
});
