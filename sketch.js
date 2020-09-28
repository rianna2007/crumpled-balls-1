const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paperball,leftDustbin,bottomDustBin,rightDustbin;

function setup() 
{
  createCanvas(1300,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(550,475,1500,10);
  paperball = new Paper(50,460,20); 
  leftDustbin = new Dustbin(975,425,20,90);	
  bottomDustbin = new Dustbin(1055,460,140,20);
  rightDustbin = new Dustbin(1125,425,20,90);

}

function draw() 
{
  Engine.update(engine);	
  rectMode(CENTER);
  background("black");

  ground.display();
  paperball.display();
  leftDustbin.display();
  bottomDustbin.display();
  rightDustbin.display();

  drawSprites();
}

function keyPressed()
{
  if(keyCode == UP_ARROW)
  {
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});
  }
}

