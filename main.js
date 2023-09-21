function mainkan() {
  document.getElementById("isi").style.display = "block";
  var audio = document.getElementById("audio");
  audio.play();

  var x = document.getElementById("gas");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const toggleModal = () => document.body.classList.toggle("open");
n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = "( " + d + "-" + m + "-" + y + " )";

var tolak = document.getElementById("tolak");
tolak.addEventListener("click", change);
function change() {
  tolak.style.display = "none";
}





