export class Particle {
  constructor(effect) {
    this.effect = effect;
    this.speed = Math.floor(Math.random() * 2);
    this.y = Math.floor(Math.random() * 5);
    this.x = Math.floor(Math.random() * 10);
    this.width = Math.random() * 1;
    this.height = Math.random() * 1;
    this.speedY = Math.random() * 2;
    this.speedX = Math.random() * 2;
    this.path = [{ x: this.x, y: this.y }];
    this.max = Math.floor(Math.random() * 100);
    this.angle = 0;
    this.timer = this.max * 2;
    this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    this.size = Math.random() * 5;
  }
  update(delta) {
    this.timer--;
    if (this.timer >= 1) {
      let x = Math.floor(this.x / this.effect.cellSize);
      let y = Math.floor(this.y / this.effect.cellSize);
      let index = y * this.effect.cols + x;
      this.angle = this.effect.flow[index];
      this.speedX = Math.cos(this.angle) * this.speed;
      this.speedY = Math.sin(this.angle) * this.speed;
      this.x += this.speedX * delta * this.speed;
      this.y += this.speedY * delta * this.speed;
      this.path.push({ x: this.x, y: this.y });

      if (this.path.length > this.max) {
        this.path.shift();
      } 
    } else if (this.path.length > 1) {
      this.path.shift();
    } else {
      this.reset();
    }
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fill();
    ctx.moveTo(this.path[0].x, this.path[0].y);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size;

    for (let i = 0; i < this.path.length; i++) {
      ctx.lineTo(this.path[i].x, this.path[i].y);
    }

    ctx.stroke();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.path = [{ x: this.x, y: this.y }];
    this.timer = this.max * 2;
  }
}


