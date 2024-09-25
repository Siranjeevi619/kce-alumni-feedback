import Swal from "sweetalert2";

const handleInfoForm = (e) => {
  e.preventDefault();

  const alumniName = document.getElementById("alumniName");
  const alumniNameInput = alumniName.value;

  const namePattern = /^[a-zA-Z\s]+$/;
  if (namePattern.test(alumniNameInput)) {
    alumniName.classList.add("is-invalid");
    return;
  } else {
    alumniName.classList.remove("is-invalid");
  }

  const mobileNumber = document.getElementById("contactNumber");
  const mobileNumberInput = mobileNumber.value;

  const mobileNumberPattern = /^\d{10}$/;
  if (mobileNumberPattern.test(mobileNumberInput)) {
    phoneNumberInput.classList.add("is-invalid");
  } else {
    phoneNumberInput.classList.remove("is-invalid");
  }

  const salary = document.getElementById("salary");
  const salaryInput = salary.value;
  if (salaryInput > 100000000) {
    salary.classList.add("is-invalid");
  } else {
    salary.classList.remove("is-invalid");
  }

  // const otherHighestDegree = document.getElementById("otherHighestDegreeInput");
  // otherHighestDegree.addEventListener("change", () => {
  //   if (otherHighestDegree.length > 3) {
  //     otherHighestDegree.classList.add("is-valid");
  //     otherHighestDegree.classList.remove("is-invalid");
  //   } else {
  //     otherHighestDegree.classList.add("is-valid");
  //   }
  // });

  const rollNo = document.getElementById.value;
  const department = document.getElementById.value;
  const batch = document.getElementById.value;
  const radios = document.getElementsByName("passingYear");
  let radioCheck = false;
  for (const radio of radios) {
    if (radio.checked) {
      radioCheck = true;
    }
  }

  const user = {
    name: alumniNameInput,
    phone: mobileNumberInput,
    salary: salaryInput,
    rollNumber: rollNo,
  };

  const hightestUserDegree = document.getElementById("highestDegree5");
  hightestUserDegree.addEventListener("select", () => {
    const otherHighestUserDegree =
      document.getElementById("otherHighestDegree");
    otherHighestUserDegree.remove("d-none");
  });
};

// const aim_radio = document.querySelectorAll('input[name="highestDegreeEarn"]');
// aim_radio.forEach((radio) => {
//     console.log("jhdjdvf");
//   radio.addEventListener("change", (event) => {
//     console.log("event triggered");
//     if (document.getElementById("others").checked) {
//       document.getElementById("otherHighestDegree").classList.remove("d-none");
//       console.log("remove");
//     } else {
//       document.getElementById("otherHighestDegree").classList.add("d-none");
//       console.log("add");
//     }
//   });
// });

// const areaOfWork = document.getElementById("primaryJob");
// areaOfWork.forEach((work) => {
//   work.addEventListener("change", () => {
//     if (document.getElementById("primaryJob").value === "") {
//       document.getElementById("areaOfWorkInput").classList.remove("d-none");
//     } else {
//       document.getElementById("areaOfWorkInput").classList.add("d-none");
//     }
//   });
// });
