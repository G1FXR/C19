var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300,300,50,50)
  ghost.addImage("ghost",ghostImg)
  ghost.scale = 0.45
  doorsGroup = new Group ()
  climbersGroup = new Group ()
  invisibleBlockGroup = new Group ()
}

function draw() {
  background(200);
  if(gameState=== "play"){



  
  if(tower.y > 400){
      tower.y = 300
    }
 drawSprites()  
 
 if(keyDown("left_arrow")){
  ghost.x = ghost.x - 3.5



 }
 if(keyDown("right_arrow")){
  ghost.x = ghost.x + 3.5



 }
 if(keyDown("space")){
  ghost.velocityY = -2.35
 }

 if(climbersGroup.isTouching(ghost)){

ghost.velocityY = 0
 }
if(invisibleBlockGroup.isTouching(ghost)||ghost.y > 600){

ghost.destroy()
gameState = "end"
}
 ghost.velocityY = ghost.velocityY + 0.5
 spawnDoors()
}
if(gameState=== "end"){
  text("Gameover",300,300)
}
}
function spawnDoors() 
  {
    if(frameCount % 258 == 0){
      var door = createSprite(250,350,30,30)
      door.addImage("door",doorImg)
      door.velocityY = 1
     
       var climber = createSprite(250,400,30,30)
      climber.addImage("climber",climberImg)
       climber.velocityY = 1
      door.x = Math.round(random(200,400))
      climber.x = door.x

      var invisibleBlock = createSprite(250,430)
      invisibleBlock.width = climber.width 
      invisibleBlock.height = 2
      invisibleBlock.debug = true
      invisibleBlock.velocityY = 1
      invisibleBlock.x = door.x
      doorsGroup.add (door)
      climbersGroup.add (climber)
      invisibleBlockGroup.add (invisibleBlock)
      
      ghost.depth = door.depth 
      ghost.depth += 1
    }
  

}
