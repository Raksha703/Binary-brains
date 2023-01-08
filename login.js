let btn = document.querySelector(".role-button");

const check1 = document.querySelector(".student");
const check2 = document.querySelector(".mentor");


btn.addEventListener("click", redirectFunction);
   function redirectFunction() {
      if(check1.checked == true && check2.checked == false)
      {
         location = "student/student.html";
      }
      else if(check1.checked == false && check2.checked == false)
      {
         alert("Please select your role.");
      }
      else if(check1.checked == true && check2.checked == true)
      {
         alert("Please select only one role.");
      }
      else if(check1.checked == false && check2.checked == true)
      {
         location = "student/mentor/index.html";
      }
   }


