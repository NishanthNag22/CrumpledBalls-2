const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinImg;

function preload(){
	dustbinImg=loadImage("images/dustbin.png")
}

function setup() {
	createCanvas(1365, 650);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	ground=new Ground(680,635,1370,15);
	paper=new Paper(50,500,70);
	dustbin1=new Dustbin(1165,615,225,20);
	dustbin2=new Dustbin(1060,503,20,200);
	dustbin3=new Dustbin(1270,503,20,200);
}

function draw() {
  background(200);
  Engine.update(engine)

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  image(dustbinImg,1065,380,200,225)
  paper.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1215,y:-1200})
	}
}