const students = [
  { name: "Jane", attendance: 88, score: 72 },
  { name: "Aman", attendance: 79, score: 68 },
  { name: "Priya", attendance: 92, score: 90 },
  { name: "Rahul", attendance: 85, score: 60 },
  { name: "Sara", attendance: 95, score: 55 },
];

let eligibleCount = 0;

console.log(85 == "85");
console.log(85 === "85");

for (let i = 0; i < students.length; i++) {
  console.log(
    students[i].name +
      "'s attendance type is " +
      typeof students[i].attendance
  );

  if (students[i].attendance >= 85 && students[i].score >= 65) {
    console.log(
      students[i].name +
        " is ELIGIBLE for the Internship Certificate."
    );
    eligibleCount++;
  } else {
    console.log(
      students[i].name +
        " is NOT ELIGIBLE — attendance or score below requirement."
    );
  }

  if (students[i].score % 2 == 0) {
    console.log(students[i].name + "'s score is EVEN.");
  } else {
    console.log(students[i].name + "'s score is ODD.");
  }

  console.log( );
}

console.log("Total Eligible Students: " + eligibleCount);