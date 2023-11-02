const toggleBtn = document.querySelector(".toggle_btn");
const toggleIcon = document.querySelector(".toggle_btn i");
const dropDwon = document.querySelector(".dropdown");

toggleBtn.onclick = function () {
  dropDwon.classList.toggle("open");
  const isOpen = dropDwon.classList.contains("open");

  toggleIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
