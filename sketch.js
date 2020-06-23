const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box;
var boxes;
var ground, wall1, wall2;

var engine, world, body;
function setup() {
  //create the canvas
  createCanvas(400,400);
  
  //setup
  engine = Engine.create();
  world = engine.world;

  //create the boxes
  boxes = [];

  //create the floor
  ground = new Ground(200, 390, 400, 30);
  wall1 = new Ground(0, 200, 30, 400);
  wall2 = new Ground(400, 200, 30, 400);
}

function draw() {
  //set the background
  background(50,50,55);  

  //update the engine
  Engine.update(engine);
  
  ground.display();
  wall1.display();
  wall2.display();

  for(var x = 0; x < boxes.length; x++){
    boxes[x].display();
  }
}

function mousePressed(){
  box = new Box(mouseX, mouseY, random(10, 60), random(10, 60));
  boxes.push(box);
}