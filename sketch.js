var fixedRect, movingRect, rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
rect1 = createSprite(300,100,50,50);
rect2 = createSprite(400,100,50,50);

movingRect.velocityY = -5;
fixedRect.velocityY = +5;

}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

if(isTouching(movingRect,rect1)) {
  movingRect.shapeColor = "blue";
  rect1.shapeColor = "blue";
}else {
  movingRect.shapeColor = "green";
  rect1.shapeColor = "green";
}
 bounceOff(movingRect,fixedRect);
drawSprites();
}

