let btn = document.querySelector(".button");

const check1 = document.querySelector(".known");
const check2 = document.querySelector(".unknown");


btn.addEventListener("click", redirectFunction2);
   function redirectFunction2() {
      if(check1.checked == true && check2.checked == false)
      {
         location = "known.html";
      }
      else if(check1.checked == false && check2.checked == false)
      {
         alert("Please select one option to move forward.");
      }
      else if(check1.checked == true && check2.checked == true)
      {
         alert("Please select only one option.");
      }
      else if(check1.checked == false && check2.checked == true)
      {
         location = "chatbot.html";
      }

   }


