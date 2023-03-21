const reactionNum = document.querySelector(".reaction-number");
const memoryNum = document.querySelector(".memory-number");
const verbalNum = document.querySelector(".verbal-number");
const visualNum = document.querySelector(".visual-number");
const totalScore = document.querySelector(".total-score");

//The empty array to store the incoming scores:
let scoreArray = []

//Pulling the scores in from json file:
const getScore = async function populate() {
  const requestURL = 'https://stacy-riley.github.io/data/data.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const scoreData = await response.json();

  //This is the newly imported object:
  // console.log(scoreData)


//This is taking the newly imported object and grabing the score
//then pushing it into an empty array named scoreArray:
//val here is each object in the scoreData array and we
// are getting at the number stored in the score key.
Object.values(scoreData).forEach(val => scoreArray.push(val.score));

//This is the array of just the numbers:
// console.log(scoreArray)

//Apply the scores to the HTML elements:
if(scoreArray !== null){
  reactionNum.innerText = scoreArray[0];
  memoryNum.innerText = scoreArray[1];
  verbalNum.innerText = scoreArray[2];
  visualNum.innerText = scoreArray[3];
  totalScore.innerText = Math.floor((
    scoreArray[0] + 
    scoreArray[1] +
    scoreArray[2] +
    scoreArray[3]) / 4);
  }
}


// This begins the program:
getScore()

