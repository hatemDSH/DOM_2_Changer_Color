Checkpoint : Interactive Color Changer

This is an overall description on what you will create:

The HTML file sets up a simple webpage with a heading, a colored box, and a button.
The CSS file contains basic styling for the elements.
The JavaScript file defines functionality for changing the color of the box when the button is clicked.
The getRandomColor() function generates a random hexadecimal color code.
When the button is clicked, the getRandomColor() function is called, and the background color of the box (colorBox) is changed to the generated color.
Now Follow please the instructions below:


Instructions

 
HTML Setup:
Create a new HTML file.
Set up the basic structure of an HTML document with the <!DOCTYPE html> declaration, <html>, <head>, and <body> tags.
Add a title to the document, such as "Color Changer".
Create the Interface:
Inside the body tag, create a <div> element with a class name of "container".
Inside the container, add an <h1> element with the text "Color Changer".
Create another <div> element with an id of "color-box". This will represent the box whose color will change.
Add a <button> element with an id of "change-color-btn". The button should have the text "Change Color".
Styling with CSS:
Create a CSS file and link it to your HTML document using the <link> tag.
Style the container class to center its content horizontally and give it some top margin for spacing.
Style the color-box id with a fixed width and height, and set a default background color.
Style the change-color-btn id to make it visually appealing and easily clickable.
JavaScript for Interactivity:
Create a JavaScript file and link it to your HTML document using the <script> tag.
Write JavaScript code to wait for the DOM content to be loaded using DOMContentLoaded event.
Inside the event handler, select the color-box and change-color-btn elements using document.getElementById().
Implement a function, let's call it getRandomColor(), which generates a random color. You may use hexadecimal or RGB values.
Add an event listener to the change-color-btn element. When clicked, the event listener should trigger a function that changes the background color of the color-box to a random color generated by the getRandomColor() function.
Testing:
Open your HTML file in a web browser.
Click the "Change Color" button and observe the color of the box change dynamically.