// import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11";
// import Swal from "sweetalert2";

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

const handleSubmit = (e) => {
  e.preventDefault();

  Swal.fire({
    title: "Submission Received!",
    text: "Thank you for submitting your feedback.",
    icon: "success",
    timer: 5000,
    showConfirmButton: false,
  });
};

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
