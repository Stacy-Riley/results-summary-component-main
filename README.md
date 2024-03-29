# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview
This challenge was to replicate an app that displayed user's test scores. It needed to have a responsive mobil view and a desktop view.  Also, it had to be able to pull in data from an api and display that data within the HTML elements.

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Pull in data from an api and display the data within the HTML elements

### Links

- Solution URL: (https://github.com/Stacy-Riley/results-summary-component-main)
- Live Site URL: (https://stacy-riley.github.io/results-summary-component-main/)

## My process
I began with the mobil design then added code to adjust the design to the desktop viewport.  Once the app was complete with HTML and CSS, I added the JavaScript functions to request the data from the api and then applied it to the proper HTML fields to display it.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned
This CSS code snippet is using background:linear-gradient() property to transition the coloring displayed in the element that holds the main score, in the class name of '.result-circle'.

```css
.result-circle {
  background: linear-gradient(
    #4D21C9 0%, 
    rgba(37, 33, 201, 0) 100%,
    rgba(37, 33, 201, 0) 100%);
}
```
This JS code snippet is using the operation Object.values() on the newly created array of objects from the json api named 'scoreData'. The 'val' is representing each individual object in the scoreData array and we are getting at the number stored in the objects key named 'score' by using 'val.score' and pushing it to an empty array named 'scoreArray'.  This leaves us with only an array of scores and nothing else.

```js
Object.values(scoreData).forEach(val => scoreArray.push(val.score));
```
Another thing that I learned while working on this project was to put my json data file in a repo on GitHub so that I can use the gh-page link to access the data for the app. 

```js
const getScore = async function populate() {
  const requestURL = 'https://stacy-riley.github.io/data/data.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const scoreData = await response.json();
```

### Continued development

I would like to practice more with getting values from objects and looping through objects in general. Also, I would like to work with more data from api files.

### Useful resources

- [Resource 1](https://flexiple.com/javascript/loop-through-object-javascript/) - This helped me learn more about how to access the value stored within a key of an object. I really liked this code and will use it going forward.

- [Resource 2](https://victorscholz.medium.com/hosting-a-json-api-on-github-pages-47b402f72603#:~:text=GitHub%20Pages%20is%20an%20excellent,there%20are%20limitations%20to%20that.) 
- This resource helped me learn that it was possible to use gh-pages to store the json data file needed to pull in the scores needed for this app.

## Author

- Website - [Stacy Riley](https://www.createdbystacy.com)
- Frontend Mentor - [@Stacy-Riley](https://www.frontendmentor.io/profile/Stacy-Riley)
- Twitter - [@askstacyriley](https://twitter.com/AskStacyRiley)
