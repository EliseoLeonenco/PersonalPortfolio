export function setUpContactButtons() {
  const githubProfile = document.getElementById("github-profile");
  const linkedinProfile = document.getElementById("linkedin-profile");
  const emailLink = document.getElementById("email-profile");
  const githubURL = "https://github.com/EliseoLeonenco";
  const linkedinURL = "https://www.linkedin.com/in/eliseo-leonenco/";
  const email = "eliseoleonenco02@gmail.com";
  const popup = document.getElementById("copied-popup");

  githubProfile.addEventListener("click", () => {
    window.open(githubURL);
  });

  linkedinProfile.addEventListener("click", () => {
    window.open(linkedinURL);
  });
  
  emailLink.addEventListener("click", () => {
    popup.classList.add("emailAnim");
    navigator.clipboard.writeText(email);
    setTimeout(() => {
      popup.classList.remove("emailAnim");
    }, 1500);
  });
}
