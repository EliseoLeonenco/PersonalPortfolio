import { Effect } from "./effect.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let previousTime;
const background = new Effect(canvas);

export function animateBackground(currentTime) {
  const delta = currentTime - previousTime;
  previousTime = currentTime;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.update(delta);
  background.draw(ctx);
  requestAnimationFrame(animateBackground);
}
