import "./styles/index.scss";
import Player from "./utils/player"
import Boss from "./utils/boss"
window.attack = attack

const battleMenu = document.getElementById("battleMenu")
const attackBtnContainer = document.getElementById("attackBtnContainer")
const attackBtn = document.getElementById("attackBtnContainer")
const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

const boss = new Boss();

const player = new Player();

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


function resetPlayer() {
  player.x = 700;
}
//attack 
function attack() {
  player.x = 600;
  console.log("player has attacked")
  setTimeout(resetPlayer, 700);
  console.log("player has moved back")
};


