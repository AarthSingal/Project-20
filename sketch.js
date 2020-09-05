var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1350,400);
  
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,20);
  car.shapeColor = "white";
  car.velocityX = speed;

  wall = createSprite(1200,200,60,200);
  wall.shapeColor = "blue";
}

function draw() {
  background("black"); 

  drawSprites();

  if(wall.x - car.x < car.width/2 + wall.width/2 ){
    car.collide(wall);
    
    deformation = ((((0.5*weight)*speed)*speed)/22500)
    console.log(deformation);

    if(deformation <= 100){
      car.shapeColor = color(0,255,0);
      console.log("problem");
    }
    if (deformation > 100 && deformation < 180){
      car.shapeColor = color(230,230,0);
    }if (deformation >= 180) {
      car.shapeColor = color(255,0,0);
    }
  }

}