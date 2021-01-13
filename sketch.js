
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinimage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,20);
	dustbin1 = new dustbin(800,660,200,50)
	dustbin2 = new dustbin(690,640,20,100)
    dustbin3 = new dustbin(900,640,20,100)
    paper1 = new paper(200,450,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  paper1.display()
  image(dustbinimage , 675 , 590 , 240 , 100 )
  drawSprites();
 
}
 function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:40,y:-90})
}

 }


