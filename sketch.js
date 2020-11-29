var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ground,packageBody,helicopterBody;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
var canvas = createCanvas(800, 600);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2,50, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("grey")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 , 10,10 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	
	helicopterBody = Bodies.rectangle(20,20,13,15);
	World.add(world,helicopterBody);
	//Create a Ground
	ground = Bodies.rectangle(width/2,height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 box1 = new Box(240,490,20,150);
	 box2 = new Box(400,550,300,20);
	 box3 = new Box(560,490,20,150);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
//Engine.update(engine);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,width,10);

box1.display();
box2.display();
box3.display();

  drawSprites();
 
}

function keyPressed() {
	
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	if (keyCode === LEFT_ARROW) {  
	   helicopterSprite.x=helicopterSprite.x-20;    
	   translation={x:-20,y:0}
	   Matter.Body.translate(packageBody, translation)
   
   
	 } else if (keyCode === RIGHT_ARROW) {
	   helicopterSprite.x=helicopterSprite.x+20;
	   translation={x:20,y:0}
	   Matter.Body.translate(packageBody, translation)
	 }
   

	else if (keyCode === DOWN_ARROW) {
	   Matter.Body.setStatic(packageBody,false);
	   
	 }   


	}
