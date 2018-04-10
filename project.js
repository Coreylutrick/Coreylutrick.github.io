
const printToDom = (stringToPrint, divId) =>
{
    var divElement = document.getElementById(divId);
    divElement.innerHTML += stringToPrint;
}

const buildDomString = (project) =>
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


