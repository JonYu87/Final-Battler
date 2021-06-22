import "./styles/index.scss";

const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

const background = new Image();
background.src = "background.gif";

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
}

animate();
