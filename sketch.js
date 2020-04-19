const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pendulum;
var link;
var topBar;

function preload(){
  
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  pendulum=new Pendulum(400,200);
  link=new Chain(pendulum.body,{x:400,y:0});
  topBar=new Bar(400,0,600,10);

}

function draw() {
  background(240);  
  Engine.update(engine);

  link.display();
  pendulum.display();
  topBar.display();

  console.log(frameCount);
    
  drawSprites();

  textSize(30);
  text("Drag and Leave the Pendulum",183,100);
}
function mouseDragged(){
  Matter.Body.setPosition(pendulum.body,{x:mouseX,y:200});
}