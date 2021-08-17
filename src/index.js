import "./styles/index.scss";
import Player from "./utils/player";
import Boss from "./utils/boss";
window.attack = attack;
window.togglePlay = togglePlay;
window.togglePlaySecond = togglePlaySecond;
window.togglePlayThird = togglePlayThird;

// const battleMenu = document.getElementById("battleMenu")
// const attackBtnContainer = document.getElementById("attackBtnContainer")
// const attackBtn = document.getElementById("attackBtnContainer")

const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

const boss = new Boss();

const player = new Player();

const deadFrog = {
  x: 700,
  y: 300,
  width: 50,
  height: 28,
};

const deadTerra = {
  x: 700,
  y: 380,
  width: 48,
  height: 32,
};

let battleTheme = document.getElementById("theme-music-1");
battleTheme.volume = 0.1;
let fightOn = document.getElementById("theme-music-2");
fightOn.volume = 0.1;
let jenovaAbsolute = document.getElementById("theme-music-3");
jenovaAbsolute.volume = 0.1;

function togglePlay() {
  if (battleTheme.paused) {
    battleTheme.play();
    fightOn.currentTime = 0;
    fightOn.pause();
    jenovaAbsolute.currentTime = 0;
    jenovaAbsolute.pause();
  } else {
    battleTheme.currentTime = 0;
    battleTheme.pause();
  }
}
function togglePlaySecond() {
  if (fightOn.paused) {
    fightOn.play();
    battleTheme.currentTime = 0;
    battleTheme.pause();
    jenovaAbsolute.currentTime = 0;
    jenovaAbsolute.pause();
  } else {
    fightOn.currentTime = 0;
    fightOn.pause();
  }
}
function togglePlayThird() {
  if (jenovaAbsolute.paused) {
    jenovaAbsolute.play();
    battleTheme.currentTime = 0;
    battleTheme.pause();
    fightOn.currentTime = 0;
    fightOn.pause();
  } else {
    jenovaAbsolute.currentTime = 0;
    jenovaAbsolute.pause();
  }
}

const bossSprite = new Image();
bossSprite.src = "./src/utils/assets/boss.gif";

const background = new Image();
background.src = "./src/utils/assets/background.gif";

const playerSprite = new Image();
playerSprite.src = "./src/utils/assets/Crono.gif";

const deadSprite1 = new Image();
deadSprite1.src = "./src/utils/assets/Frog.gif";

const deadSprite2 = new Image();
deadSprite2.src = "./src/utils/assets/Terra.gif";

const attackAudio = new Audio();
attackAudio.src = "./src/utils/assets/attack.mp3";

const bossAttAudio = new Audio();
bossAttAudio.src = "./src/utils/assets/boss.mp3";

document.addEventListener("DOMContentLoaded", (event) => {
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(bossSprite, boss.x, boss.y, boss.width, boss.height);
    ctx.drawImage(
      playerSprite,
      player.x,
      player.y,
      player.width,
      player.height
    );
    ctx.drawImage(
      deadSprite1,
      deadFrog.x,
      deadFrog.y,
      deadFrog.width,
      deadFrog.height
    );
    ctx.drawImage(
      deadSprite2,
      deadTerra.x,
      deadTerra.y,
      deadTerra.width,
      deadTerra.height
    );
    requestAnimationFrame(animate);
  }

  animate();
});

function resetPlayer() {
  player.x = 700;
}
//attack
function attack() {
  player.x = 600;
  attackAudio.play();
  let hitChance = Math.round(Math.random() * 10);
  if (hitChance >= 4) {
    let dmg = Math.round(Math.random() * 10) + player.dmg;
    //append div?
    boss.hp -= dmg;
    if (boss.hp < 0) {
      boss.hp = 0;
    }
    let text = document.createElement("div");
    let body = document.querySelector("body");
    text.classList.add("dmg-text");
    text.append(
      `You dealt ${dmg} dmg to Recursion, Recursion now has ${boss.hp} hp! `
    );
    body.append(text);
    setTimeout(() => {
      text.remove();
    }, 2000);
  } else {
    let text = document.createElement("div");
    let body = document.querySelector("body");
    text.classList.add("miss-text");
    text.append(
      `You missed! You dealt 0 dmg to the boss, the boss now has ${boss.hp} hp! `
    );
    body.append(text);
    setTimeout(() => {
      text.remove();
    }, 2000);
  }
  setTimeout(resetPlayer, 700);
  setTimeout(() => {
    boss.attack(player);
    bossAttAudio.play();
  }, 2000);
}

function gameOver(){
  if (player.hp <= 0) {
    alert("You died!");
  }
}
