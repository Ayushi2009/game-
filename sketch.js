
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

 paper=new  Paper(200,600,20)
ground=new Ground(400,680,800,10)
dustbin1= new Dustbin(550,625,20,100)
dustbin2= new Dustbin(610,665,100,20)
dustbin3= new Dustbin(670,625,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  paper.display()
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50})



}




}

