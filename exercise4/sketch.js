var system;
var speed = 0.4;
var r = 5;

function setup() {
  createCanvas(windowWidth,windowHeight);
  system = new ParticleSystem(createVector(width/2, 100));

}

function draw() {
  background(51);
  
  var hr = hour();
  var mr = minute();
  var sr = second();

  if (hr < 10) hr = "0" + hr;
  if (mr < 10) mr = "0" + mr;
  if (sr < 10) sr = "0" + sr;
 
  system.addParticle();
  system.run();

  push();
  noStroke();
  fill(0,200,255);
  ellipse(width / 6, 40, r, r);

  fill(0,255,200);
  ellipse(width / 2, 40, r, r);

  fill(0,255,255);
  ellipse(width / 6 * 5, 40, r, r);
  pop();

  if(r >= 20) speed = -0.4;
  else if (r <= 5) speed = 0.4;
  r +=speed;
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.07);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  
  var h = hour();
  var m = minute();
  var s = second();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  

  //stroke(200, this.lifespan);
  //strokeWeight(2);
  fill(0,200,255, this.lifespan);
  textSize(40);
  textAlign(CENTER);
  text(h, this.position.x - width / 3, this.position.y);
  fill(0,255,200, this.lifespan);
  text(m, this.position.x, this.position.y);
  fill(0,255,255, this.lifespan);
  text(s, this.position.x + width / 3, this.position.y);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
