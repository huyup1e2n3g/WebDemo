"use strict";

const Button = document.querySelector(".button");
const InputAngle = document.getElementById("angle");
const InputDistance = document.getElementById("distance");
const InputVelocity = document.getElementById("velocity");
let angle;
let distance;
let velocity;

const DisplacementE = document.querySelector(".Displacement");
const VelocityE = document.querySelector(".Velocity");

let displacementX, displacementZ;
let velocityX, velocityZ;
let sinAngle, cosAngle;

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("button").click();
  }
});

Button.addEventListener("click", function (e) {
  e.preventDefault();
  angle = InputAngle.value;
  distance = InputDistance.value;
  velocity = InputVelocity.value;
  sinAngle = Math.sin((Math.PI * angle) / 180);
  cosAngle = Math.cos((Math.PI * angle) / 180);
  displacementX = distance * sinAngle * -1;
  displacementZ = distance * cosAngle;
  DisplacementE.textContent = `(${displacementX.toFixed(
    2
  )}, 0, ${displacementZ.toFixed(2)})`;

  velocityX = velocity * sinAngle;
  velocityZ = velocity * cosAngle * -1;

  VelocityE.textContent = `(${velocityX.toFixed(2)}, 0, ${velocityZ.toFixed(
    2
  )})`;
});
