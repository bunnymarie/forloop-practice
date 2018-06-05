//Front end
var countTo = parseInt(prompt("Pick a max number"));
var countBy = parseInt(prompt("Pick a number for steps"));
//Back end
var multipleCount = countBy;
var invalNum = 0;
if (isNaN(countTo) || isNaN(countBy)){
  alert("NaN");
} else {
  for (i = 0; countBy <= countTo; countBy += multipleCount) {
    if (countTo <= 0 || countBy <= 0 || countTo <= multipleCount) {
      invalNum = 1;
      break;
    }
    i += 1
    alert(countBy);
  }
  if (invalNum === 1){
    alert("Invalid answer")
  } else {
    alert("The number to count by " + multipleCount + " takes " + i + " steps, which is its multiple  of " + countTo);
  }
}
