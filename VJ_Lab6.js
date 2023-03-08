/*
Name - VJ
Title - Lab 6 / Assignment 3 Challenge 1
Description - Sketch to bounce a ball off the edges
*/

let x;
let speedX;

function setup() {
  createCanvas(400, 400);

  // Variables for declaring the x coodrinate and speed in x-direction of the ball
  x = 10;
  speedX = 2;
}

function draw() {
  background(220);

  x = x + speedX;
  drawSprite(x, height / 4);

  // if the ball touches the left side or the right side then change the direction
  if (x > 190 || x < 0) {
    speedX = speedX * -1;
  }

  // console.log("The value of x is: " + x);
  // console.log("The value of speedX is : " + speedX);
}

// Function to draw the sprite.
function drawSprite(x, y) {
  push();
  translate(x, y);
  fill("red");
  ellipse(x, y, 50);
  pop();
}

function keyPressed() {}
