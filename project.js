// var projects = [
//   {
//     id: "project1", 
//     title: "Prokect 2 Headed Snake", 
//     imageUrl: "../main/2snake.jpg", 
//     description: "This is the best project",
//     githubUrl: "https://github.com/Coreylutrick/Coreylutrick.github.io"
//     },
//     {
//       id: "project2", 
//       title: "Project Turtle on the Moon", 
//       imageUrl: "../main/space-turtle.jpg", 
//       description: "This is the best project",
//       githubUrl: "https://github.com/Coreylutrick/Coreylutrick.github.io"
//     },
//     {
//       id: "project3", 
//       title: "Project Footwear", 
//       imageUrl: "../main/pigBoots.jpg", 
//       description: "This is the best project",
//       githubUrl: "https://github.com/Coreylutrick/Coreylutrick.github.io"
//     },
//     {
//       id: "project4", 
//       title: "Project Spaghetti", 
//       imageUrl: "../main/spag.jpg", 
//       description: "This is the best project",
//       githubUrl: "https://github.com/Coreylutrick/Coreylutrick.github.io"
//     },
//     {
//       id: "project5", 
//       title: "Project Saliva", 
//       imageUrl: "../main/tungboy.jpg", 
//       description: "This is the best project",
//       githubUrl: "https://github.com/Coreylutrick/Coreylutrick.github.io"
//     },
//     {
//       id: "project6", 
//       title: "Project Doom", 
//       imageUrl: "../main/doom.jpg", 
//       description: "This is the best project",
//       githubUrl: "https://github.com/Coreylutrick/Coreylutrick.github.io"
//     }
// ];

function printToDom(stringToPrint, divId)
{
    var divElement = document.getElementById(divId);
    divElement.innerHTML += stringToPrint;
}

function buildDomString(project)
{
    var domString = ""
      for (var i = 0; i < project.length; i++)
    {
      domString += `<div class='projects'>`;
      domString +=  `<h1> ${project[i].title} </h1>`
      domString +=  `<img src= ${project[i].imageUrl}>`
      domString +=  `<p> ${project[i].description} </p>`
      domString +=  `<p><a href=${project[i].githubUrl}> Click here to see the project</a></p>`
      domString += `</div>`;
    } 
    printToDom(domString, "prjct");  
}

function executeThisCodeIfXHRFails() {
  console.log("something broke");
}

function executeThisCodeAfterFileLoaded() {
  const data = JSON.parse(this.responseText);
  buildDomString(data.projects);
}

const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "/db/projects.json");
  myRequest.send();
};

startApplication();


