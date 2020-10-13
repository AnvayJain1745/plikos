const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 var yellowLine;
var play = 1;
var start = 2;
var end = 0;
var gameState =2

var particles= null;
var plinkos = [];
var divisions = [];
var turn = 0;
var divisionHeight=300;
var score =0;
var count =0
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  yellowLine=createSprite(400,470,800,10);
  yellowLine.shapeColor="yellow"

   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));   }

   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
     plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
     plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
     plinkos.push(new Plinko(j,375));
   }
}
 


function draw() {
  background("white");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 ground.display();
  text("score : " + score,80,20);
  text("50           40          30          20           10          10          20          30          40           50",30,500)

   for (var i = 0; i < plinkos.length; i=i+1) {
     
     plinkos[i].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  if(particles!==null){

    particles.display();
    
    if(particles.body.position.y>760){
    
      if(particles.body.position.x<800 && particles.body.position.x>720){
        score=score+50;
        particles=null;
        if(count>4) gameState=end;
      }
    
      else if(particles.body.position.x<720 && particles.body.position.x>640){
        score=score+40;
        particles=null;
        if(count===4) gameState=end;
      }
    
      else if(particles.body.position.x<640 && particles.body.position.x>560){
        score=score+30;
        particles=null;
        if(count===4) gameState=end;
      }
    
      else if(particles.body.position.x<560 && particles.body.position.x>480){
        score=score+20;
        particles=null;
        if(count===4) gameState=end;
      }
    
      else if(particles.body.position.x<480 && particles.body.position.x>400){
        score=score+10;
        particles=null;
        if(count===4) gameState=end;
      }
    
      else if(particles.body.position.x<400 && particles.body.position.x>320){
        score=score+10;
        particles=null;
        if(count===4) gameState=end;
      }
    
      else if(particles.body.position.x<320 && particles.body.position.x>240){
        score=score+20;
        particles=null;
        if(count===4) gameState=end;
      }
    
      else if(particles.body.position.x<240 && particles.body.position.x>160){
        score=score+30;
        particles=null;
        if(count===4) gameState=end;
      }
    
      else if(particles.body.position.x<160 && particles.body.position.x>80){
        score=score+40;
        particles=null;
        if(count===4) gameState=end;
      }
    
       else if(particles.body.position.x<80 && particles.body.position.x>0){
        score=score+50;
        particles=null;
        if(count===4) gameState=end;
      }
    }
     }
      
     if(count===4){
       console.log(count);
       fill("black")
       textSize(30)
       text("game over",200,250)
     }
   
   drawSprites()
}

function mouseClicked(){

  
    if(gameState!==end){
      particles=new Particle(mouseX,10,10)
  console.log(particles)
    
  }
}