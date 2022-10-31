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
//  name = array.findIndex(name => name === name);
//   array.splice(name, 1)
// }
// deleteSubmissionByName(submissions, 'Jill');
// console.log(submissions)


// function editSubmission(array, index, score) {}
// function findSubmissionByName(array, name){}
// function findLowestScore(array){}
// function findAverageScore(array){
//   for (let submission of submissions)
//   score / score.length * score.length
// };
// function filterPassing(array){
//   if(passing === true){
//     array.filter(passed => passed === true)
//     return
//   }
// }
// function filter90AndAbove(array){}