var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground;
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
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wallSprite1 = createSprite(425, groundSprite.y, 200, 10)
	wallSprite1.shapeColor = "red"
	

	wallSprite2 = createSprite(wallSprite1.x-((425/4)-1), groundSprite.y-20, 10, 50)
	wallSprite2.shapeColor = "red"

	wallSprite3 = createSprite(wallSprite1.x+(425/4)-0.55, groundSprite.y-20, 10, 50)
	wallSprite3.shapeColor = "red"

	
	

	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	wallBody1 = Bodies.rectangle(425+(425/4)-0.55, groundSprite.y-20, 20, 50 , {isStatic:true} );
	World.add(world, wallBody1);
	fill("red")
	stroke("red")
	


	wallBody2 = Bodies.rectangle(425+(425/4)-0.55, groundSprite.y-20, width, 50 , {isStatic:true} );
	World.add(world, wallBody2);
	fill("red")
	stroke("red")

	wallBody3 = Bodies.rectangle(425+(425/4)-0.55, groundSprite.y-20, width, 50 , {isStatic:true} );
	World.add(world, wallBody3);
	fill("red")
	stroke("red")


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  wallBody1.display()
  wallBody2.display()
  wallBody3.display()
  keyPressed()
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false)
	if(packageBody.isTouching(ground, packageBody)){
	Matter.Body.setStatic(packageBody, true)	
	}
    
  }
}



