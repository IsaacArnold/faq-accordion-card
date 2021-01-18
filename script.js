/* ====================================
Global Variables
=====================================*/
const chevron = document.querySelectorAll("#chevron");

chevron.forEach((arrow) =>
  arrow.addEventListener("click", (e) => {
    if (e.target === arrow) {
      console.log("Success");
    }
  })
);
