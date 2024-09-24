function handleRatingChange(questionNumber) {
  const ratingInputs = document.querySelectorAll(
    `input[name="rating${questionNumber}"]`
  );
  const ratingValueDisplay = document.getElementById(
    `rating${questionNumber}-value`
  );

  ratingInputs.forEach((input) => {
    input.addEventListener("change", function () {
      ratingValueDisplay.textContent = ` ${this.value}`;
    });
  });
}

handleRatingChange(1);
handleRatingChange(2);
handleRatingChange(3);
