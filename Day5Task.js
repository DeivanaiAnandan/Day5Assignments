Task 1:
--------
var json = [{
    "name" : "John", 
    "age"   : 25,
    "gender" : "male"
    },
{
    "name" : "Ronald", 
    "age"   : 35,
    "gender" : "male"
}];

//for loop
--------------
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.name, obj.age, obj.gender );
     }
//for Each
json.forEach(function(obj) { 
console.log(obj.age); 
});

//for In
-----------------
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].name);
  //console.log(json[key].gender);
 
}
}
//for Of
let text = "";
for (let x of json[key].gender) {
 text += x; 
}
 console.log(text);

Task 2	:
------------
let resume={
    "basics":{
        "name": "A.Deivanai",
        "email": "devanand@gmail.com",
        "phone": 9998887770,
        "degree": "B.E",
        "address": "Guindy",
        "city": "Chennai",
    },
    "education":[{
        "institution": "MEC",
        "department": "Computer Science",
    }],
    "skills":[{
        "name": "HTML, CSS, JS",
        "level": "Intermediate",
    }],
    "languages": [{
        "language": "Tamil,English",
      }]
}
console.log(resume);

Task 3:
--------
JavaScript: window, document and screen
In JavaScript, window, document, and screen are distinct objects that represent different aspects of a web browser and its environment.

Window Object
The window object represents the browser window and serves as the global object in client-side JavaScript. It encapsulates the entire browser window, including tabs, frames, and iframes. The window object provides access to various properties and methods related to the browser environment, such as opening new windows, resizing, scrolling, and interacting with the browser's history.

Document Object
The document object represents the current web page displayed in the browser window. It provides access to the HTML content of the page and allows you to manipulate the structure, content, and styling using the Document Object Model (DOM). Through the document object, you can access elements, modify their attributes and content, and respond to user interactions.

Screen Object
The screen object represents the user's screen dimensions and display properties. It provides information about the user's monitor, such as screen width, height, color depth, and pixel density. The screen object is useful for creating responsive designs and adapting content to different screen sizes.

Window VS. Document VS. Screen
The window object represents the browser window itself and provides methods for interacting with the browser's environment.
The document object represents the current web page's content and structure, allowing manipulation using the DOM.
The screen object provides information about the user's screen dimensions and display properties.