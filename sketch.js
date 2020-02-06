const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1,log2,log3,log4;
var box3,box4,pig2,box5;
var bird;
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    pig1 = new Pig(600,380);
    pig2 = new Pig(600,280);
    box1 = new Box(500,380,80,60);
    box2 = new Box(700,380,80,60);
    box3 = new Box(500,280,80,60);
    box4 = new Box(700,280,80,60);
    box5 = new Box(600,180,80,60);
    ground = new Ground(400,390,800,20);
    log1 = new Log(600,300,300,PI/2);
    log2 = new Log(600,200,300,PI/2);
    log3 = new Log(540,80,150,PI*50/180);
    log4 = new Log(660,80,150,-PI*50/180);
    bird = new Bird(50,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}