var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

console.log(getObjLen(student));

function getObjLen (obj) {
  var len=0;
 for (var val in obj) {
  len++;
} 
return len;
}
