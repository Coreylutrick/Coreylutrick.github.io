var blogs = 
[
  {
    title: "Blog1",
    info: "So far i feel like i have learned quite a bit in only the few days we have had in class. The main thing is that between html and css there are multiple ways to do things. Before i started the treehouse classes and our actual class i was under the impression that coding was a right and wrong sort of thing. I'm pleasantly surprised to find that you can do things however you see fit. With html only I was happy to know that most of it is very basic and you mainly just need to remember the structure of a page and what child elements belong t other elements. The main thing Ive noticed for myself is that i need to pay attention to my spelling and syntax(dont forget brackets!). With css i was super relieved when Zoe had expressed that its impossible to remember all css rules. Its comforting to know that im not the only person who may have to look up ho to change the font of all h3s on the page for instance. I do really enjoy the fact that css is very straight forward, or atleast in my opinion. When i look at a stylesheet i feel that i roughly know exactly what the different entries are changing on the page. Most of all though, i love that github is alot easier then i had imagined. My only struggle to being was making directories and then forgetting to enter them causing me to make repositories in the wrong directories. Now though it is second nature to use the pwd command to make sure im in the right area before making any changes. I also feel that at this point i have a good grasp on creating branches as well as just navigating git bash."
  },
  {
    title: "Blog2",
    info: "This week we started Java Script. It was definitely scary at first but also exciting. Scary because there are so many things to keep track of and remember, but exciting because i can actually make code that does something now. We mostly focused on arrays this week and how to loop through them and pull or manipulate the data in whatever way we wanted. I found the array challenges that we did to be challenging but also rewarding. What i struggled with most was finding the proper array method for what i was wanting to do. Once i figured out what did what i had an easier time of it. there were a few that were intersting to me, one was a challenge where we let beggers take turns collecting money(our data). It was interesting to me because in order to have them collect in the way we wanted we had to include an internal counter for our function that we wrote so the code would know exactly who had collected and make sure the proper beggar would go next until there was nothing left to collect. All in all i feel pretty confident about arrays but i know this is just the surface of java script, but im excited to get deeper into it."
  },
  {
    title: "Blog 3",
    info: "Wow. I was right about arrays only scratching the surface of java script. This week we dived into objects and functions. Not only that, we also got into arrays of objects that were manipulated by functions. This got way more in depth then arrays did but I feel like I grasped this alot easier. Functions make going through data so much easier. I had used a couple last week but only what i had learned myself so my understanding of them wasnt as strong. Now that i know the power of what they can do alot of the tasks i had last week now look very easy. Also the structure of objects makes it easier for me. I find that being able to call certain keys or all keys(or values) makes things easier. I now also like that i can easily make a function that will insert the finished product of what i want to do with the data right into the html without hard coding it. I do think though that depending on what you are doing building up a string in a js file can get pretty crazy if you aren't keeping your code clean and organized. One thing I did notice this weeek is that I organize my brackets and other syntax elements differently then most of my class mates. I put all of my brackets on their own line so i can clearly see if i am missing one. All I have to do is follow that specific indentation down and see if my brackets are closed. I know this makes my code longer but for me it has minimized my syntax errors, or made them easier to fix if i have one."
  },
  {
    title: "Blog 4",
    info: "This week was very interesting for me. We are finally making things that do something. We have started getting into event listeners which is giving us the ability to give our projects some interactability. These have been pretty straight forward so far, they are similar to functions in the way that i just have to look up different methods to make them do what I want. We also started learning ES6 for java script. I enjoy this way of writing functions just because it seems more straightforward and clean when i look at the code. We also went over what needs to be in a readme to make it serve its purpose. Until now we had just been naming them but now I see alot more goes into to actually provide the user or whoever is looking at your code with valuable information."
  }
]

function printToDom(stringToPrint, divId)
{
    var divElement = document.getElementById(divId);
    divElement.innerHTML += stringToPrint;
}

function domStringMaker(blogArray)
{
    var output = ""
      for (var idx = 0; idx < blogArray.length; idx++)
    {
      output = "<div id='blg'>" + "<h1>" + blogs[idx].title + "</h1>" + "<p>" + blogs[idx].info + "</p>" + "</div";
      
      printToDom(output, "blogs");
    }   
}

domStringMaker(blogs);