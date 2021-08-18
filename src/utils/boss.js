import Player from "./player";
import loseGameOver from "../index";
import winGameOver from "../index";

class Boss {
  constructor(props) {
    (this.x = 100),
      (this.y = 150),
      (this.width = 240),
      (this.height = 256),
      (this.hp = 100),
      (this.mp = 9999),
      (this.dmg = 11);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.x = 100;
  }

  attack(player) {
    this.x = 200;
    let hitChance = Math.round(Math.random() * 10);
    if (hitChance >= 3) {
      let dmg = Math.round(Math.random() * 10) + this.dmg;
      player.hp -= dmg;
      if (player.hp <= 0) {
        player.hp = 0;
      }
      let text = document.createElement("div");
      let body = document.querySelector(".game-container");
      text.classList.add("boss-dmg-text");
      text.append(
        `Recursion dealt ${dmg} to you, you have ${player.hp} hp remaining!`
      );
      body.append(text);
      setTimeout(() => {
        text.remove();
      }, 2000);
    } else {
      let text = document.createElement("div");
      let body = document.querySelector(".game-container");
      text.classList.add("boss-miss-text");
      text.append(`Recursion missed! You have ${player.hp} hp remaining!`);
      body.append(text);
      setTimeout(() => {
        text.remove();
      }, 2000);
    }
    setTimeout(this.reset, 700);
  }
}

export default Boss;
