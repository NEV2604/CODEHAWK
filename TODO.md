# TODO
- [ ] Update `day4.html` to correctly include `script.js` and (optionally) `index.css`.
- [ ] Fix `script.js` to be valid JavaScript (remove TypeScript type annotation `: string`).
- [ ] Add simple `console.log` so it’s clear the script runs.
- [ ] User can open `day4.html` in browser to verify no console errors.
Setup: Create index.html and script.js as separate files, linked with <script src="script.js" defer></script>. All code goes in script.js — nothing inline.
Build a program that processes 5 students and decides who is eligible for the Internship Certificate, using this data:

const students = [
  { name: "Jane", attendance: 88, score: 72 },
  { name: "Aman", attendance: 79, score: 68 },
  { name: "Priya", attendance: 92, score: 90 },
  { name: "Rahul", attendance: 85, score: 60 },
  { name: "Sara", attendance: 95, score: 55 },
];


Requirements — your code must:

Declare students with the correct keyword (const, since this array itself won't be reassigned) — and explain in a code comment why const is correct here even though you'll be reading values out of it.
Use a loop to go through all 5 students (for or while — your choice).
For each student, use comparison and logical operators to check eligibility against the program's real rule: attendance >= 85 && score >= 65.
Use an if/else conditional to log one of two messages per student:

"Jane is ELIGIBLE for the Internship Certificate."
"Aman is NOT ELIGIBLE — attendance or score below requirement."


Use the modulus operator (%) to also log whether each student's score is even or odd (unrelated to eligibility — just to practice %).
Use typeof at least once to check and log the data type of attendance.
Add one deliberate === vs == demonstration: log console.log(85 == "85") and console.log(85 === "85") with a comment explaining why they differ.
At the end, use a let variable (not const) to count and log the total number of eligible students — this is the one value in the whole program that legitimately needs to change, so it's the correct place to use let.

// var, let, const

// var name = "Rajesh";

// let name = "Suresh";

// const name = "Ramesh";

// if (true) {
//   var x = "Full Stack Class";
// }

// console.log(x);

// if (true) {
//   let y;
//   y = "Full Stack Class";
//   console.log(y);
//   y = "React";
// }

// console.log(y);

// const z = "JavaScript";

// Data Types

// const name = "Rajesh";
// const age = 25;
// const isEnrolled = true;
// let score;
// const nothing = null;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isEnrolled);
// console.log(typeof score);
// console.log(typeof nothing);

// Arithmetic Operators
// console.log(10 + 5);
// console.log(10 / 5);
// console.log(10 % 3);

// Comparison Operators

// ==. ===, !=, !==

// console.log(5 == "5");

// console.log(5 === "5");

// console.log(5 != "5");

// console.log(5 !== "5");

// Logical Operators

// && ||

// console.log(true && false);

// console.log(true || false);

//  equal to 80% attendance or sumbited the projected

// Conditional Statements

let marks = 54;
// console.log(marks);
// if (marks >= 90) {
//   console.log("Distinction");
// } else if (marks >= 75) {
//   console.log("Merit");
// } else if (marks >= 60) {
//   console.log("Pass");
// } else {
//   console.log("Less than 90");
// }

// Ternary Operator

// conidition ? true : false;

// const status = marks >= 60 ? "PASS" : "FAIL";
// console.log(status);

// for, while

for (let i = 1; i <= 5; i++) {
  console.log("Class Number : ");
}
