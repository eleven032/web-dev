var player_1_score = document.getElementById("play_1");
var player_2_score = document.getElementById("play_2");
var count = document.getElementById("count");
var bt1 = document.getElementById("bt_1");
var bt2 = document.getElementById("bt_2");
var reset = document.getElementById("re");
var numInput = document.querySelector("input");

var num_1 = 0;
var num_2 = 0;
var max = 5;
var over = false;

bt1.addEventListener("click", function() {
  if (!over) {
    num_1 += 1;
    if (num_1 === max) {
      over = true;
      document.getElementById("play_1").classList.toggle("winner");
    }
    document.getElementById("play_1").textContent = num_1;
  }
});

bt2.addEventListener("click", function() {
  if (!over) {
    num_2 += 1;
    if (num_2 === max) {
      over = true;
      document.getElementById("play_2").classList.toggle("winner");
    }
    document.getElementById("play_2").textContent = num_2;
  }
});

reset.addEventListener("click", function() {
  refresh();
});

function refresh() {
  num_1 = 0;
  num_2 = 0;
  over = false;
  player_1_score.textContent = num_1;
  player_2_score.textContent = num_2;
  player_1_score.classList.remove("winner");
  player_2_score.classList.remove("winner");
}

numInput.addEventListener("change", function() {
  max=Number(this.value);
  count.textContent = max;
  reset();
});
