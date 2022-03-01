var paperImg;

var paperBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

var options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2

}

function preload(){
	paperImg = loadImage("Images/paper.png");
}



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	paperBody = createSprite(300, 630);
	paperBody.addImage(paperImg);
	paperBody.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();


  drawSprites();

}

function KeyPressed(){
if(Keycode === UP_ARROW){
	Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x:130, y:-145})
}

}

