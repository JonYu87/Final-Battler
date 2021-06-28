class Boss {
  constructor(props) {
    (this.x = 100),
      (this.y = 150),
      (this.width = 240),
      (this.height = 256),
      (this.hp = 3000),
      (this.mp = 9999),
      (this.dmg = 50);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.x = 100;
  }

  attack() {
    this.x = 200;
    let hitChance = Math.round(Math.random() * 10);
    if (hitChance >= 3) {
      let dmg = Math.random(Math.random() * 10) + this.dmg;
    }
    setTimeout(this.reset, 700);
  }
}

export default Boss;
