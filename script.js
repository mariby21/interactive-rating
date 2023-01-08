const page1 = document.querySelector(".page-rating");
const page2 = document.querySelector(".thank-you");
const ratingBtns = document.querySelectorAll(".btn-js");
const submitBtn = document.querySelector(".submit-btn");
const selectRating = document.querySelector(".selected");

document.addEventListener("DOMContentLoaded", () => {
  ratingBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let currRating = btn.getAttribute("data-value");
      selectRating.innerHTML = `You selected ${currRating} out of 5`;
    });
  });

  submitBtn.addEventListener("click", () => {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
  });
});
