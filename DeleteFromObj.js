var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

console.log("before!!!!!!!!");

for (var val in student) console.log(student[val]);

delete student.rollno;

console.log("after!!!!!!!!!!");

for (var val in student) console.log(student[val]);
