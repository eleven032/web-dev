var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(0, 255, 255)"
];

var squares = document.querySelectorAll(".square");
var pickColor = colors[3];
var color = document.getElementById("color");
color.textContent = pickColor;
var messageDisplay = document.querySelector("#message");

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function() {
    var curr = this.style.backgroundColor;
    console.log(curr);
    console.log(pickColor);
    if (curr === pickColor) {
      messageDisplay.textContent = "Correct!";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Wrong!";
    }
  });
}
