/* ====================================
Global Variables
=====================================*/
const questionWrapper = document.querySelectorAll(".question-wrapper");

// Event listener concept from Mehdi Aoussiad blog article: https://medium.com/javascript-in-plain-english/building-an-accordion-with-vanilla-javascript-8440ab8f07ff
// Cycles each question wrapper -> variables are then relative to each wrapper, rather than an iterable list, it's just a single element.
questionWrapper.forEach((question) => {
  let chevron = question.querySelector("#chevron");
  let answer = question.querySelector(".answer");
  let questionDiv = question.querySelector(".question");
  // Listens to the question div of the parent wrapper so that only the clicked question text or chevron activates handler.
  questionDiv.addEventListener("click", () => {
    answer.classList.toggle("hide");
    questionDiv.querySelector(".question p").classList.toggle("bold");
    chevron.classList.toggle("rotate-down");
  });
});
