import "./styles/index.scss";

const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

const boss = {
  x: 0,
  y: 0,
  width: 240,
  height: 256,
  frameX: 0,
  frameY: 0,
};

const bossSprite = new Image();
bossSprite.src = "boss.gif"

const background = new Image();
background.src = "background.gif";

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(bossSprite, 100, 100, boss.width, boss.height);
  requestAnimationFrame(animate);
}

animate();
