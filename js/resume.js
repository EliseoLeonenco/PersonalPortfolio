export function loadResume() {

  const resumeContent = document.getElementById("collapsable-btn");
  const resumebutton = document.getElementById("resume-btn");

  resumebutton.addEventListener("click", () => {
    if (resumeContent.style.display === "block") {
      resumeContent.style.display = "none";
    } else {
      resumeContent.style.display = "block";
      document.getElementById("resume-btn");
    }
  });
}
