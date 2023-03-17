const reactionNum = document.querySelector(".reaction-number");
const memoryNum = document.querySelector(".memory-number");
const verbalNum = document.querySelector(".verbal-number");
const visualNum = document.querySelector(".visual-number");

//Function to capture api of data:
const getData = async function(){
  const res = await fetch("https://stacy-riley.github.io/data/data.json");
  const score = await res.text();
  // const wordArray = words.split("\n");
 console.log(score) 
}

getData()

