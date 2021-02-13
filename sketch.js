var player
function setup() {
  createCanvas(400,400);
  crop=createSprite(200,200,10,10)
  crop2=createSprite(200,180,10,10)
  crop3=createSprite(200,160,10,10)
  player=createSprite(400, 200, 50, 50);
  edge1=createSprite(0,400,10,10);
  edge2=createSprite(200,400,400,10);
  edge3=createSprite(400,200,10,400)
  
}

function draw() {
  background(0,255,122);  
  player.depth=player.depth+1
  player.shapeColor="black"
  crop.shapeColor="yellow"
  crop2.shapeColor="yellow"
  crop3.shapeColor="yellow"
  if(keyDown("UP_ARROW")){
    player.y=player.y-5
  }
  if(keyDown("DOWN_ARROW")){
    player.y=player.y+5
  }
  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+5
  }
  if(keyDown("LEFT_ARROW")){
    player.x=player.x-5
  }
  drawSprites();
}

