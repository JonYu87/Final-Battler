import "./styles/index.scss";

const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

const boss = {
  x: 100,
  y: 150,
  width: 240,
  height: 256,
  hp: 3000,
  mp: 9999
};

const player = {
  x: 700,
  y: 200,
  width: 32,
  height: 48,
  hp: 999,
  mp: 999
};

const bossSprite = new Image();
bossSprite.src = "boss.gif"

const background = new Image();
background.src = "background.gif";

const playerSprite = new Image();
playerSprite.src = "cecil.gif"

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(bossSprite, boss.x, boss.y, boss.width, boss.height);
  ctx.drawImage(playerSprite, player.x, player.y, player.width, player.height);
  requestAnimationFrame(animate);
}

animate();
