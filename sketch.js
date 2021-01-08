var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const phyEngine = Matter.Engine;
const phyWorld = Matter.World;
const phyBodies = Matter.Bodies;
const phyBody = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = phyEngine.create();
	world = engine.world;

	starBody = phyBodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	phyWorld.add(world, starBody);
	
	phyEngine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470 ){
	phyBody.setStatic(starBody,true);
  }

  fairyMovement();
  
  drawSprites();

}


