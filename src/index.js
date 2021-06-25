import "./styles/index.scss";
import Player from "./utils/player";
import Boss from "./utils/boss";
window.attack = attack;

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
bossSprite.src = "./src/utils/assets/boss.gif";

const background = new Image();
background.src = "./src/utils/assets/background.gif";

const playerSprite = new Image();
playerSprite.src = "./src/utils/assets/cecil.gif";

const attackAudio = new Audio();
attackAudio.src = "./src/utils/assets/attack.mp3";

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
  let hitChance = Math.round(Math.random() * 10);
  if (hitChance >= 3) {
    let dmg = Math.round(Math.random() * 10) + player.dmg;
    //append div?
    boss.hp -= dmg;
    let text = document.createElement("div");
    let body = document.querySelector("body");
    text.classList.add("dmg-text");
    text.append(
      `You dealt ${dmg} dmg to the boss, the boss now has ${boss.hp} hp! `
    );
    body.append(text);
    setTimeout(() => {
      text.remove();
    }, 2000);
  }
  setTimeout(resetPlayer, 700);
  setTimeout(() => {
    boss.attack();
  }, 2000);
}
