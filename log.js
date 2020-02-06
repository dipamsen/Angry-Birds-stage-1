class Log {
  constructor(x, y,h,a) {
    var options = {
        'restitution':0.8,
        'friction':10,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 10,h, options);
    this.width = 10;
    this.height = h;
    Matter.Body.setAngle(this.body,a);
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    stroke("red");
    strokeWeight(3);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
