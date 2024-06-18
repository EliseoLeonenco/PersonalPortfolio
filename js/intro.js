export function setUpIntroButtons() {
  const contactMeButton = document.getElementById("contactDetails-btn");
  const scrollDownButton = document.getElementById("scrollDown");

  contactMeButton.addEventListener("click", () => {
    document
      .getElementById("contact-Section")
      .scrollIntoView({ behavior: "smooth" });
  });

  scrollDownButton.addEventListener("click", () => {
    document
      .getElementById("project-container")
      .scrollIntoView({ behavior: "smooth" });
  });
}
