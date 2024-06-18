import { body } from "../main.js";

let style;
export function setUpNavBar() {
  const navBar = document.getElementById("navBar");
  const homeButton = document.getElementById("home-btn");
  const aboutButton = document.getElementById("about-btn");
  const projectsButton = document.getElementById("projects-btn");
  const contactButton = document.getElementById("contact-btn");
  const burgerButton = document.getElementById("burgerButton");
  const burgerClose = document.getElementById("burgerClose");

  homeButton.addEventListener("click", () => {
    document.getElementById("introPage").scrollIntoView({ behavior: "smooth" });
    navBar.style.width = style;
    body.style.overflow = "auto";
  });

  aboutButton.addEventListener("click", () => {
    document.getElementById("skills-container").scrollIntoView({ behavior: "smooth" });
    navBar.style.width = style;
    body.style.overflow = "auto";
  });

  projectsButton.addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    navBar.style.width = style;
    body.style.overflow = "auto";
  });

  contactButton.addEventListener("click", () => {
    document
      .getElementById("contact-Section")
      .scrollIntoView({ behavior: "smooth" });
    navBar.style.width = style;
    body.style.overflow = "auto";
  });

  burgerButton.addEventListener("click", () => {
    navBar.style.width = "100%";
    body.style.overflow = "hidden";
  });

  burgerClose.addEventListener("click", () => {
    navBar.style.width = "0%";
    body.style.overflow = "auto";
  });
}

export function checkMediaQuery(mediaQuery) {
  if (!mediaQuery.matches) {
    window.onresize = (e) => {
      navBar.style.width = "0%";
      style = "0%";
    };

    navBar.style.width = "0%";
    style = "0%";
  } else if (mediaQuery.matches) {
    window.onresize = (e) => {
      navBar.style.width = "100%";
      style = "100%";
    };
    
    navBar.style.width = "100%";
    style = "100%";
  }
}
