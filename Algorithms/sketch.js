var Mrect, Frect;

function setup(){
createCanvas(400,400);
Mrect= createSprite(400,400,20,20)
Mrect.shapeColor="green";
Frect= createSprite(0,0,20,20)
Frect.shapeColor="green";
Mrect.velocityX=-1;
Frect.velocityX=1;
Mrect.velocityY=-1;
Frect.velocityY=1;
}

function draw(){
  background(0);

  if(Frect.x-Mrect.x<Frect.width/2+Mrect.width/2
    && Mrect.x-Frect.x<Mrect.width/2+Frect.width/2
    ){
      Mrect.velocityX=Mrect.velocityX*(-1);
      Frect.velocityX=Frect.velocityX*(-1);
  }
  if(Frect.y-Mrect.y<Frect.height/2+Mrect.height/2
    && Mrect.y-Frect.y<Mrect.height/2+Frect.height/2){
      Mrect.velocityY=Mrect.velocityY*(-1);
      Frect.velocityY=Frect.velocityY*(-1);
    }
  drawSprites();
}

