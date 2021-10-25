var Inputs = document.querySelectorAll(".form");
var btn = document.querySelector("button");

function getUserDOB() {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    var date = new Date();
    var userYear = date.getFullYear();
    var userMonth = date.getMonth();
    var date = new Date();
    var userDay = date.getDate();
  
    var userYearDOB = Inputs[0].value;
    var userMonthDOB = Inputs[1].value;
    var userDayDOB = Inputs[2].value;
    var oldAge = 100;
  
    var userYearAge = userYear - userYearDOB + oldAge;
    var userMonthAge = userMonth - userMonthDOB + oldAge;
    var userDayAge = userDay - userDayDOB + oldAge;
  
    document.querySelector("#result").innerHTML = `You will be ${+userYearAge} years, ${+userMonthAge} months, and ${+userDayAge} days old in 100 years to come.`;
  });
}

setTimeout(getUserDOB, 5000);