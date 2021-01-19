var ground,dustbin,dustbin1,dustbin2,dustbin3,paper,dustbinImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 dustbinImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2, 650, width, 10);
	 World.add(world, ground);

	dustbin1 = new Dustbin(600, 640, 150, 20);
	World.add(world, dustbin1);
	
	dustbin2 = new Dustbin(670, 570, 20, 150);
	World.add(world, dustbin2);
	
	dustbin3 = new Dustbin(530, 570, 20, 150);
	World.add(world, dustbin3);

	dustbin=createSprite(600,570);
	dustbin.addImage("dustbin",dustbinImg);
	dustbin.scale=0.5

	paper = new Paper(100,640,30);
	paper.debug=true;
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  ground.display();
  paper.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:145,y:-145});
	   
	 }
   }

