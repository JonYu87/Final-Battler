import "./styles/index.scss";
import Player from "./utils/player"
import Boss from "./utils/boss"
window.attack = attack

// const battleMenu = document.getElementById("battleMenu")
// const attackBtnContainer = document.getElementById("attackBtnContainer")
// const attackBtn = document.getElementById("attackBtnContainer")
const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

const boss = new Boss();

const player = new Player();

const bossSprite = new Image();
bossSprite.src = "./src/utils/assets/boss.gif"

const background = new Image();
background.src = "./src/utils/assets/background.gif";

const playerSprite = new Image();
playerSprite.src = "./src/utils/assets/cecil.gif"

const attackAudio = new Audio();
attackAudio.src = "./src/utils/assets/attack.mp3"

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
  attackAudio.play();
  setTimeout(resetPlayer, 700);
};


