export function setUpProjects() {
  fetch("./files/data.json")
    .then((response) => response.json())
    .then((data) => uploadProjects(data))
    .catch((error) => {
      console.error("Error:", error);
    });
}

const cardContainer = document.getElementById("container-cards");

function uploadProjects(data) {
  data.forEach((element) => {
    const projectCard = createProject(element);
    cardContainer.appendChild(projectCard);
  });
}

function createProject(element) {
  const projectCard = document.createElement("div");
  const projectImage = document.createElement("img");
  const projectDesc = createProjectDesc(element);

  projectCard.className = "project-card";
  projectImage.className = "projectImage";
  projectImage.alt = element.alt;
  projectImage.src = element.img;

  projectCard.appendChild(projectImage);
  projectCard.appendChild(projectDesc);

  return projectCard;
}

function createProjectDesc(element) {

  //description
  const projectDesc = document.createElement("div");
  projectDesc.className = "project-desc";

  //description left side
  const projectDescLeft = document.createElement("div");
  projectDescLeft.className = "project-desc-left";

  //description right side
  const projectDescRight = document.createElement("div");
  projectDescRight.className = "project-desc-right";

  //title and description
  const title = document.createElement("h2");
  title.innerText = element.title;
  const desc = document.createElement("p");
  desc.innerText = element.description;

  //github button
  const githubButton = document.createElement("button");
  githubButton.className = "github-button";
  githubButton.addEventListener("click", function () {
    window.open(element.url);
  });

  //button image
  const buttonImg = document.createElement("img");
  buttonImg.src = "./img/github-white.png";
  buttonImg.alt = "github logo";

  githubButton.appendChild(buttonImg);
  projectDescLeft.appendChild(title);
  projectDescLeft.appendChild(desc);
  projectDescRight.appendChild(githubButton);
  projectDesc.appendChild(projectDescLeft);
  projectDesc.appendChild(projectDescRight);

  return projectDesc;
}
