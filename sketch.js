const Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;


var particles  = []
var plinkos = []
var divisions = []
var divisionHeight = 300;
var engine,world;
var ground;
var score;
var particle;
var gameState = "play";
var line;
function setup() {
createCanvas(480,800);
engine =Engine .create();
world = engine.world;
ground = new Ground(width/2,height,width,20)


for(var k =0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}

for(var j =15; j <=width; j = j + 50) {
    plinkos.push(new Plinko(j,75));
}

for(var j =40; j <=width-10; j = j + 50) {
  plinkos.push(new Plinko(j,175));
}

for(var j =15; j <=width; j = j + 50) {
  plinkos.push(new Plinko(j,275));
}

for(var j =40; j <=width-10; j = j + 50) {
  plinkos.push(new Plinko(j,375));
}

score = 0;

var line = createSprite(240,430,480,5)
line.shapeColor = "red"
}

function draw() {
background("black");
textSize(20)  
text("Score : "+score,20,30);

Engine.update(engine);
ground.display();

for(var i = 0; i <plinkos.length; i++ ){
    plinkos[i].display();
}

if(frameCount % 60 === 0 ){
   particles.push(new Particle(random(width/2-100,width/2+100),10,10));
   score++;
   
}

for(var j = 0; j <particles.length; j++){
    particles[j].display();
}

for(var k = 0; k <divisions.length; k++){
  divisions[k].display();
}
if(particle != null)
{

   if(particle.body.position.y>760)
    { 
       if(particle.body.position.x<300)
       {
         score = score + 500;
         particle = null;
         if( count<=5 )gameState = "end";
         textSize(40);
         fill("yellow")
         text("Game is Over",100,320);
         
       }

    }
}
if(gameState = "end")
  {
  
  
  }

  drawSprites();
}
function mouseDragged(){

if(gameState !== "end")
   {
     count++;
     particle = new Particle(mouseX,10,10,10)
     
   }
}
