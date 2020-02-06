class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.2,
        'friction':10,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("blue");
    stroke("black");
    strokeWeight(3);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
