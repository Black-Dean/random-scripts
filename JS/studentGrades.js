var students, maxMark, averageMark = 0, i = 0, total = 0, gradeTotal = 0; // Declare variables
const studentArray = []; // Create Arrays
const letterGrade = [];
const studentGrade = [];

students = parseInt(prompt("How many students are there? ")); // Get inputs
maxMark = parseInt(prompt("What is the max mark someone can get? "));

while (i < students) {
  studentArray.push(parseInt(prompt("Please input Student" + i + " grade. ")));
  studentGrade.push(studentArray[i] / maxMark * 100) // Calcluates percentage

  total = total + studentArray[i];
  gradeTotal = gradeTotal + studentGrade[i]

  if (studentGrade[i] < 50) { // Set letterGrades
    letterGrade.push("F")
    } else if (studentGrade[i] >= 50 && studentGrade[i] < 60) {
    letterGrade.push("C")
    } else if (studentGrade[i] >= 60 && studentGrade[i] < 70) {
    letterGrade.push("B")
    } else if (studentGrade[i] >= 70) {
    letterGrade.push("A")
    }
  i++;
}
i = 0
alert("") // Create blank space
alert("")
while (i < students) {
  alert("Student" + i + " percentage is " + studentGrade[i] + "% and letter grade is " + letterGrade[i]) // Output all info
  i++;
}

if (i => students) {
  averageMark = total / students;
  gradeTotal = gradeTotal / students;
  alert("The average class mark was " + averageMark + " and the average percentage was " + gradeTotal + "%.") // Outputs average
}
