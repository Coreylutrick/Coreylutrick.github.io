
const printToDom = (stringToPrint, divId) =>
{
    var divElement = document.getElementById(divId);
    divElement.innerHTML += stringToPrint;
}

const buildDomString = (blogs) =>
{
    var domString = ""
      for (var i = 0; i < blogs.length; i++)
    {
      domString += `<div class='blg'>`;
      domString +=  `<h2>${blogs[i].title}</h2>`;
      domString +=  `<p>${blogs[i].info}</p>`;
      domString += `</div>`;
    }
    printToDom(domString, "blogs");  
};

function executeThisCodeIfXHRFails() {
  console.log("something broke");
}

function executeThisCodeAfterFileLoaded() {
  const data = JSON.parse(this.responseText);
  buildDomString(data.blogs);
}

const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "/db/blogs.json");
  myRequest.send();
};

startApplication();