var question = [
    {
      question: "Html Stands For _____________________",
      options: [
        "Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language",
      ],
      correctAns: "Hypertext markup language",
    },
    {
      question: "Css Stands For _______________________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "Js Stands For _______________________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "Dom Stands For _______________________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "Ram Stands For _______________________",
      options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
      correctAns: "Random Acccess Memory",
    },
    {
      question: "Rom Stands For _______________________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ];

 var currentQuestionNo = document.getElementById("currentQuestionNo");
 var totalQuestionNo = document.getElementById("totalQuestionNo");
 var questionDisplay = document.getElementById("questionDisplay")
 var optionDisplay = document.getElementById("optionDisplay")
 var Marks = document.getElementById("marks")
 var Percantage = document.getElementById("Percantage")
 var Status = document.getElementById("status")
 var displayResult = document.getElementById("displayResult")

currentIndex = 0;
marks = 0;
  function initRend() {
    totalQuestionNo.innerHTML = question.length;
    currentQuestionNo.innerHTML = currentIndex + 1;
    questionDisplay.innerHTML = question[currentIndex].question;
    optionDisplay.innerHTML = "";
    for(var i =0; i < question[currentIndex].options.length; i++ ) {
        optionDisplay.innerHTML += ` <div class="col-md-6"> <button  class="w-75 bg-warning" 
        onclick="result('${question[currentIndex].options[i]}', '${question[currentIndex].correctAns}')"> ${question[currentIndex].options[i]} </button> </div>`;
    }
  }

  initRend()

function result(a, b) {
  if(a == b) {
    marks++;  
    if(currentIndex + 1 == question.length) {
      displayResult.style.display = "flex";
      let per = (marks/question.length)*100;
      Marks.innerHTML = marks;
      Percantage.innerHTML = per;
      if(per < 50) {
        Status.innerHTML = "fail"
      }else {
        Status.innerHTML = "pass"
      }
    }
  }else {
    currentIndex++
    initRend();
  } 
  
}

