"use strict";
const submissions = [
  { name: "Jane", score: 95, date: `2020-01-24`, passed: true },
  { name: "Joe", score: 77, date: `2018-05-14`, passed: true },
  { name: "Jack", score: 59, date: `2019-07-05`, passed: false },
  { name: "Jill", score: 88, date: `2020-04-22`, passed: true },
];

function addSubmission(array, newName, newScore, newDate) {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
  };
  if (newSubmission.score >= 60) {
    newSubmission.passed = true;
  } else {
    newSubmission.passed = false;
  }
  array.push(newSubmission);
  console.log(array);
}
addSubmission(submissions, "Aaron", 61, `2001-05-16`);
addSubmission(submissions, "Jared", 40, `2010-02-21`);

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}
deleteSubmissionByIndex(submissions, 2);
console.log(submissions);

function deleteSubmissionByName(array, name) {
  let indexOfObject = array.findIndex((object) => {
    return object.name === name;
  });
  array.splice(indexOfObject, 1);
}
deleteSubmissionByName(submissions, "Jack");
console.log(submissions);

function editSubmission(array, index, score) {
  let newScore = (array[index].score = score);
  if (newScore >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
}
editSubmission(submissions, 0, 89);
console.log(submissions);

function findSubmissionByName(array, name) {
  name = array.find((object) => {
    return object.name === name;
  });
  console.log(name);
}
findSubmissionByName(submissions, "Jack");

function findLowestScore(array) {
  let results = array.forEach(function (item, index) {
    const prev = array[index - 1];
    if (array[index.score] > prev) {
      console.log(item.score);
    } else {
      console.log(prev.score);
    }
  });
  console.log(results);
}
findLowestScore(submissions);

function findAverageScore(array) {
  let sum = 0;
  for (let submission of submissions) {
    sum += submission.score;
  }
  let avg = sum / array.length;
  console.log(avg);
}
findAverageScore(submissions);

function filterPassing(array) {
  const results = array.filter((passing) => {
    return passing.passed === true;
  });
  console.log(results);
}
filterPassing(submissions);

function filter90AndAbove(array) {
  const results = array.filter((aboveNinety) => {
    return aboveNinety.score <= 90;
  });
  console.log(results);
}
filter90AndAbove(submissions);
