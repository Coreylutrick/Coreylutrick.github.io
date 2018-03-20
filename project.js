var projects = [
  {
    id: "project1", 
    title: "Prokect 2 Headed Snake", 
    imageUrl: "../main/2snake.jpg", 
    description: "This is the best project",
    githubUrl: "https://github.com/Coreylutrick/Coreylutrick.github.io"
    },
    {
      id: "project2", 
      title: "Project Turtle on the Moon", 
      imageUrl: "../main/space-turtle.jpg", 
      description: "This is the best project",
      githubUrl: "https://github.com/Coreylutrick/Coreylutrick.github.io"
    },
    {
      id: "project3", 
      title: "Project Footwear", 
      imageUrl: "../main/pigBoots.jpg", 
      description: "This is the best project",
      githubUrl: "https://github.com/Coreylutrick/Coreylutrick.github.io"
    },
    {
      id: "project4", 
      title: "Project Spaghetti", 
      imageUrl: "../main/spag.jpg", 
      description: "This is the best project",
      githubUrl: "https://github.com/Coreylutrick/Coreylutrick.github.io"
    },
    {
      id: "project5", 
      title: "Project Saliva", 
      imageUrl: "../main/tungboy.jpg", 
      description: "This is the best project",
      githubUrl: "https://github.com/Coreylutrick/Coreylutrick.github.io"
    },
    {
      id: "project6", 
      title: "Project Doom", 
      imageUrl: "../main/doom.jpg", 
      description: "This is the best project",
      githubUrl: "https://github.com/Coreylutrick/Coreylutrick.github.io"
    }
];

function printToDom(stringToPrint, divId)
{
    var divElement = document.getElementById(divId);
    divElement.innerHTML += stringToPrint;
}

function domStringMaker(projectArray)
{
    var output = ""
      for (var idx = 0; idx < projectArray.length; idx++)
    {
      output = "<div class='projects'>" + "<h1>" + projects[idx].title + "</h1>" + "<img src='" + projects[idx].imageUrl + "'>" + "<p>" + projects[idx].description + "</p>" + "<p>" + "<a href='" + projects[idx].githubUrl + "'>" + "CLick here to see the project" + "</a>" + "</p>" + "</div>";
      
      printToDom(output, "prjct");
    }   
}

domStringMaker(projects);


