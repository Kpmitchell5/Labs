"use strict";
const submissions = [
  { name: "Jane", score: 95, date: `2020-01-24`, passed: true },
  { name: "Joe", score: 77, date: `2018-05-14`, passed: true },
  { name: "Jack", score: 59, date: `2019-07-05`, passed: false },
  { name: "Jill", score: 88, date: `2020-04-22`, passed: true },
];

// function addSubmission(array, newName, newScore, newDate) {
//   // check to see if they passed or failed
//   // create an object with the name, score, newDate and whether or not they passed
//   // push to my submissions array
//   let newSubmission = {
//     name: newName,
//     score: newScore,
//     date: newDate,
//   };
//   newSubmission.score >= 60
//     ? (newSubmission.passed = true)
//     : (newSubmission.passed = false);
//   array.push(newSubmission);
//   console.log(array);
// }
// addSubmission(submissions, "Aaron", 61, `2001-05-16`);
// addSubmission(submissions, "Jared", 40, `2010-02-21`);

// function deleteSubmissionByIndex(array, index){
//   array.splice(index, 1);
// };
// deleteSubmissionByIndex(submissions, 1);
// console.log(submissions);

// function deleteSubmissionByName(array, name) {
//   let nameIndex = (element) => element.name === name;
//   array.splice(array.findIndex(nameIndex));
// }
// deleteSubmissionByName(submissions, "Jill");
// console.log(submissions);

// function deleteSubmissionByName(array, name) {
//   let indexOfObject = array.findIndex((object) => {
//     return object.name === name;
//   });
//   array.splice(indexOfObject, 1);
// }
// deleteSubmissionByName(submissions, "Jack");
// console.log(submissions);

// function editSubmission(array, index, score) {
//   let newScore = (array[index].score = score);
//   newScore >= 60 ? (array[index].passed = true) : (array[index].passed = false);
//   return array;
// }
// editSubmission(submissions, 2, 80);
// console.log(submissions);

// function editSubmission(array, index, score) {
//   let newScore = (array[index].score = score);
//   if (newScore >= 60) {
//     array[index].score = true;
//     return array;
//   } else {
//     array[index].passed = false;
//     return array;
//   }
// }
// editSubmission(submissions, 1, 40);

// function findSubmissionByName(array, name) {
//   name = array.find((object) => {
//     return object.name === name;
//   });
//   console.log(name);
// }
// findSubmissionByName(submissions, "Joe");

function findLowestScore(array) {
  const results = array.forEach(function (item, index) {
    const prev = array[index - 1];
    if (array[index.score] < prev.score) {
      console.log(results);
    } else {
      console.log(item.score);
    }
  });
  console.log(results);
}
findLowestScore(submissions);

// function findAverageScore(array) {
//   let sum = 0;
//   for (let submission of submissions) {
//     sum += submission.score;
//   }
//   let avg = sum / array.length;
//   console.log(avg);
// }
// findAverageScore(submissions);

// function filterPassing(array) {
//   const results = array.filter((passing) => {
//     return passing.passed === true;
//   });
//   console.log(results);
// }
// filterPassing(submissions);

// function filter90AndAbove(array) {
//   const results = array.filter((aboveNinety) => {
//     return aboveNinety.score <= 90;
//   });
//   console.log(results);
// }
// filter90AndAbove(submissions);
