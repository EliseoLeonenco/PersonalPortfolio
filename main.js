import { animateBackground } from "./js/background.js";
import { setUpContactButtons } from "./js/contacts.js";
import { setUpIntroButtons } from "./js/intro.js";
import { checkMediaQuery, setUpNavBar } from "./js/navbar.js";
import { setUpProjects } from "./js/projects.js";
import { loadResume } from "./js/resume.js";
export const body = document.querySelector("body");

const mediaQuery = window.matchMedia(" (min-width: 700px)");
window.addEventListener("resize", () => checkMediaQuery(mediaQuery));
checkMediaQuery(mediaQuery);

animateBackground();
setUpNavBar();
loadResume();
setUpProjects();
setUpIntroButtons();
setUpContactButtons();