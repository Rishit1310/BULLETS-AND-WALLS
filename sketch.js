var bullet,wall,speed,weight,thickness;

function setup() {

speed=random(225,320)
weight=random(30,50)
thickness=random(22,83)
bullet=createSprite(50,200,40,10)
wall=createSprite(1300,200,thickness,height/2)
  bullet.shapeColor=("white")
  wall.shapeColor=("white")
  bullet.velocityX=speed;
}
function draw() {

  createCanvas(1600,400)
  background("black");
 
   
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){

    bullet.velocityX=0;
 
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
 
 if(damage>10){
  wall.shapeColor=("red")
 }
 
 if(damage<10){
  wall.shapeColor=("green")
 }
  }


  drawSprites();
}