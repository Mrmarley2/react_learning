/* As you can see, this is a normal JavaScript file. In this example, we use the React 
and ReactDOM library to create and render the React element in the browser. You will 
notice how we use a mix of JavaScript and JSX (and HTML) in this file to create elements. 
Additionally, we also styled the React element by using React-Bootstrap and our own 
custom stylesheet. */

import React from 'react';
import ReactDOM from 'react-dom/client';
/* The 2 import statements above allow us to access the React library. You will need these 
statements every time you create a React element or component. */

import Card from 'react-bootstrap/Card';
/* The import statement above imports the code needed to work with the React-Bootstrap Card
Component. Notice the naming convention we use above: Whenever you use or create a Component 
always capitalise the first letter of the name of the component! 
For the statement above to work, you will have had to install React-Bootstrap using NPM.
See React-Bootstrap installation instructions here:
https://react-bootstrap.github.io/getting-started/introduction/
See more information about the React-Bootstrap Card component here:
https://react-bootstrap.github.io/components/cards/ */

import './css/custom.css';
/* To apply the rules in a CSS file is simple! Simply import the file as shown above */

/* Below we create a JavaScript object named 'courseInfo' */
const courseInfo = { 
  "title": "Introduction to React.js", 
  "topics": ["React Elements", "Virtual DOM", "JSX"] 
};

/* Then we access the topics array in the ‘courseInfo’ object we created above.  We loop 
through this array using the map() method. We will use this map() method often when building 
React apps. If you need a refresher on how the map() method works, see here: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Notice in line 40 how we use JSX to mix HTML markup and JavaScript. Because 'topic' is in 
curly braces {}, it is treated as an enclosed JavaScript expression. The code below 
returns <li> elements for each of the values in the 'topics' array in the 'courseInfo' object. */
const listItems = courseInfo.topics.map((topic, index) => {
  return <li key={index}>{topic}</li>
});

/* Below we create an element. Remember that React element we create can only return one 
element. However, that element can contain many child elements. Notice that the element 
that we create below includes the Card component that we import above from React-Bootstrap.
Besides using NPM to install React-Bootstrap and importing the Card component as we did in 
line 12, we also need to link to the React-Bootstrap stylesheet to use the component properly.
Notice how we link to this stylesheet in line 55. You can find the link to the React-Bootstrap
stylesheet here: https://react-bootstrap.github.io/getting-started/introduction/ 

Also, notice how we include the 'listItems' element we created above in the element below.
Remember to wrap any enclosed JavaScript expressions in curly braces {} */
const element = (
	<div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
		<header>
      <h1>Welcome to the {courseInfo.title} task!</h1>
		</header>
		<Card bg="dark" style={{ width: "30rem" }}>
  		<Card.Img variant="top" src="https://www.hyperiondev.com/static/images/logo.png" className="logo" />
  		<Card.Body>
    		<Card.Title style={{ color: "rgb(193,154,79)" }}>These are some of the topics covered in this task:</Card.Title>
    		<Card.Text>
      		<ul>{listItems}</ul>
    		</Card.Text>
  		</Card.Body>
		</Card>
	</div>
);

/* The last steps are to render the element we have created. Note that the element we created
gets appended to the <div> element that can be found in public/index.html. */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {element}
  </React.StrictMode>
);