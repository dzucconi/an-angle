import { Vector } from "./lib/vector";

const root = document.querySelector("#root");

const context = new AudioContext();

const x = new Vector({ context, angle: 0 });
const y = new Vector({ context, angle: 0 });
const z = new Vector({ context, angle: 0 });

const offset = 100;

const handleOrientation = (event: DeviceOrientationEvent) => {
  const { alpha, beta, gamma } = event;

  root.innerHTML = [alpha, beta, gamma].join(", ");

  x.rotate(alpha + offset);
  y.rotate(beta + offset);
  z.rotate(gamma + offset);
};

root.addEventListener("click", () => {
  x.on();
  y.on();
  z.on();

  root.innerHTML = "playing";

  window.addEventListener("deviceorientation", handleOrientation, true);
});
