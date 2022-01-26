function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  //circle
  var r, g, b;
  for (
    var circle = 300;
    circle > 10;
    circle -= 20, r = random(255), g = random(255), b = random(255)
  ) {
    fill(r, g, b);
    noStroke();
    ellipse((width / 4) * 3, (height / 4) * 3, circle, circle);
  }

  // square vertical
  for (
    var vertical = width / 2;
    vertical < width;
    vertical += 10, r = random(255), g = random(255), b = random(255)
  ) {
    fill(r, g, b);
    noStroke();
    rect(vertical, 0, 10, height / 2);
  }

  for (var x = 0; x < width / 2; x = x + 90) {
    rect(x, 0, 45, height);
  }

  // borders
  stroke(0);
  strokeWeight(10);
  line(width / 2, 0, width / 2, height);
  line(width / 2, height / 2, width, height / 2);
  noFill();
  rect(5, 5, width - 10, height - 10);
}
