window.onload = () => {
  var decrBtn = document.getElementById("decr");
  decrBtn.onclick = decrFunc;
  var resetBtn = document.getElementById("reset");
  resetBtn.onclick = resetFunc;
  var incrBtn = document.getElementById("incr");
  incrBtn.onclick = incrFunc;
};

var Count = 11;
var countLine = "<h1>" + Count + "</h1>";
document.getElementById("CountBox").innerHTML = countLine;

var decrFunc = () => {
  if(Count== 0) return alert("Cannot Decrease anymore");
  console.log("Decrement Clicked");
  Count--;
  var countLine = "<h1>" + Count + "</h1>";
  document.getElementById("CountBox").innerHTML = countLine;
};

var resetFunc = () => {
 
  console.log("Reset Clicked");
  Count = 0;
    var countLine = "<h1>" + Count + "</h1>";

  document.getElementById("CountBox").innerHTML = countLine;
  console.log(Count);
};

var incrFunc = () => {
  console.log("Increment Clicked");
  Count++;
  var countLine = "<h1>" + Count + "</h1>";
  document.getElementById("CountBox").innerHTML = countLine;
  console.log(Count);
};
