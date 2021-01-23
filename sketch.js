const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var box;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  
  box = Bodies.rectangle(100,200,50,50);
  World.add(myWorld,box);
  console.log(box);
  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,380,400,20,options);
  World.add(myWorld,ground); 
  var options = {
    restitution:2
  }
  ball = Bodies.circle(300,200,50,options);
  World.add(myWorld,ball); 
}

function draw() {
  background("blue");
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(box.position.x,box.position.y,50,50)
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50)
  rect (200,200,50,50)  
  drawSprites();

}