
var monkey ,monkey_running;
var ground,ground_moving;

var banana,banana_Img,bananasGroup;
var obstacle,obstacleImg,obstaclesGroup;

var survivalTime = 0;

var score;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
 
  ground_moving = loadAnimation("Ground1.jpg");
  
  banana_Img = loadImage("banana.png");
  
  obstacle_Img = loadImage("obstacle.png");
  
}



function setup() {

  createCanvas(600, 300);
  
  
  monkey = createSprite(80,215,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(100,380,300,20);
  ground.addAnimation("moving",ground_moving);
  ground.velocityX = -10;
  ground.x = ground.width/2;
  
  banana = createSprite(300,80,20,20);
  banana.addAnimation("moving",banana_Img);
  banana.scale = 0.1;
  banana.velocityX = -5;
  bananaGroup = createGroup();
  
  obstacle = createSprite(200,270,300,20);
  obstacle.addAnimation("moving",obstacle_Img);
  obstacle.scale = 0.1;
  obstacle.velocityX = -5;
  obstaclesGroup = createGroup();
}


function draw() {
 
  background("green");
  
  if(bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach();
   }
  
  
  stroke("yellow");
  textSize = (50);
  fill = ("yellow");
  survivalTime= Math.round(frameCount/frameRate(30));
  text("survivalTime: "+ survivalTime,500,50);
   
  if(keyDown("space")&& monkey.y >= 150) {
        monkey.velocityY = -12;
  }
 monkey.velocityY = monkey.velocityY + 0.8;
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
   }
   
  
  if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        bananaGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        bananaGroup.setLifetimeEach(-1);
    
    
    }
  
  
  monkey.collide(ground)
   spawnbananas();
   spawnobstacles();
   drawSprites();
 
}




function spawnbananas() {
 
  if (frameCount % 60 === 0) {
    banana = createSprite(500,50,20,20);
    banana.y = Math.round(random(10,150));
    banana.addImage(banana_Img);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 150;
    
    banana.lifetime = 134;
    
    bananaGroup.add(banana)
    
    }
}
  


 function spawnobstacles() {
 
  if (frameCount % 60 === 0) {
    obstacle = createSprite(550,270,300,20);
    obstacle.X = Math.round(random(1,6));
    obstacle.addImage(obstacle_Img);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifetime = 150;
    
    
     obstaclesGroup.add(obstacle);
    
    
    }
}




