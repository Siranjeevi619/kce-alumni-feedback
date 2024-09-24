const ratingInputs = document.querySelectorAll('input[name="rating"]');
const ratingValueDisplay = document.getElementById("rating-value");

ratingInputs.forEach((input) => {
  input.addEventListener("change", function () {
    ratingValueDisplay.textContent = ` ${this.value}`;
  });
});
