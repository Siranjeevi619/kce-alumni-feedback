// function validate(event){
//   event.preventDefault();
//   let flag = false;
//   let count = 0;
//   let qn=['Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8','Q9','Q10','Q11','Q12','Q13','Q14'];
//   let err=["err1","err2","err3","err4","err5","err6","err7","err8","err9","err10","err11","err12","err13","err14"];
//   for(i=0;i<qn.length;i++){
//       if(isRadioChecked(qn[i])==false)
//       {
//           document.getElementById(err[i]).style.color="red";
//           flag=true;
//           count++;
//       }
//       else
//       {
//           document.getElementById(err[i]).style.color="black";
//       }
//       if(count=1){
//           document.getElementById(err[i]).scrollIntoView();
//       }
//   }

  
//   if(flag){
//     event.preventDefault();
//   }
// }
// function isRadioChecked (radioName){
//   var radioList=document.getElementsByName(radioName);
//   for(var i=0; i<radioList.length;i++){
//       if(radioList[i].checked){
//           return true;
//       }
//   }
//   return false;
// }
















// const ratingInputs = document.querySelectorAll('input[name="rating"]');
// const ratingValueDisplay = document.getElementById("rating-value");

// ratingInputs.forEach((input) => {
//   input.addEventListener("change", function () {
//     ratingValueDisplay.textContent = ` ${this.value}`;
//   });
// });
