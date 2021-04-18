var bgImg;
var hotAirBallon,hotAirBallonImg;
var database,positions;

function preload(){
  hotAirBallonImg=loadAnimation("balloon1.png","balloon2.png","balloon3.png");
  bgImg=loadImage("cityimage.png");
}
function setup() {
  createCanvas(1300,550);

  database=firebase.database();

  hotAirBallon = createSprite(400, 200, 50, 50);
  hotAirBallon.addAnimation("ground",hotAirBallonImg);
  hotAirBallon.scale=0.5;

  var hotAirBallonposition=database.ref('hotAirBallon/height');
  hotAirBallonposition.on("value",showError)
}

function draw() {
  background(bgImg); 
  if(keyDown(LEFT_ARROW)){
    hotAirBallon.x = hotAirBallon.x -10;
}
else if(keyDown(RIGHT_ARROW)){
  hotAirBallon.x = hotAirBallon.x +10;
}
else if(keyDown(UP_ARROW)){
  hotAirBallon.y = hotAirBallon.y -10;
}
else if(keyDown(DOWN_ARROW)){
    hotAirBallon.y = hotAirBallon.y +10;

} 
stroke(0)
textSize(20)
text("Use the the arrow keys to move",10,30)
  drawSprites();
}
function updateHeight(x,y){
database.ref('hotAirBallon/height').set({
  'x' : height.x + x ,
  'y' : height.y + y
})
}

function showError(){
console.log("error");
}