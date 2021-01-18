/* ====================================
Global Variables
=====================================*/
// const chevron = document.querySelectorAll("#chevron");
const answerP = document.querySelectorAll(".answer");
const questionWrapper = document.querySelectorAll(".question-wrapper");

console.log(questionWrapper);

questionWrapper.forEach((question) => {
  let chevron = question.querySelector("#chevron");
  let answer = question.querySelector(".answer");
  let questionDiv = question.querySelector(".question");

  questionDiv.addEventListener("click", () => {
    answer.classList.toggle("hide");
    questionDiv.querySelector(".question p").classList.toggle("bold");
  });
});
