import Swal from "sweetalert2";


const handleInfoForm = (e) => {
  e.preventDefault();
  const radiobtn = document.getElementsByName("passingYear");
  let isChecked = false;

  for (let i = 0; i < radiobtn.length; i++) {
    if (radiobtn[i].checked) {
      isChecked = true;
      break;
    }
  }


  

  const salary = document.getElementById("salary");
  const salaryInput = salary.value;
  if (salaryInput > 100000000) {
    salary.classList.add("is-invalid");
  } else {
    salary.classList.remove("is-invalid");
  }

  const invalidFeedbacks = document.querySelectorAll(".invalid-feedback");
  invalidFeedbacks.forEach((feedback) => {
    feedback.style.display = "none";
  });

  // Check for work experience selection
  const workExperience = document.querySelector(
    'input[name="workExperience"]:checked'
  );
  if (!workExperience) {
    document.querySelector(".invalid-feedback").style.display = "block";
    return;
  }

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
    departmentName: department,
    batchNumber: batch,
  };

  console.log(user);
  const hightestUserDegree = document.getElementById("highestDegree5");
  hightestUserDegree.addEventListener("select", () => {
    const otherHighestUserDegree =
      document.getElementById("otherHighestDegree");
    otherHighestUserDegree.remove("d-none");
  });
};
