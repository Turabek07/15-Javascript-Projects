const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const modalBtn = document.querySelector(".modal-btn");

modalBtn.addEventListener("click", function () {
    modal.classList.add("open-modal");
})
closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
})