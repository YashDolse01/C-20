var path;
var Runner,gameover;
var coin,bomb,energydrink;
var coinGroup,bombGroup,energydrinkGroup;
var Score=0;
var time=10;

function preload(){
pathImage=loadImage("path.png");

RunnerImage=loadAnimation("Runner-1.png","Runner-2.png")

coinImg=loadImage("coin.png");

bombImg=loadImage("bomb.png");

EnergyDImg=loadImage("energyDrink.png");

gameover=loadImage("gameover.png");

}

function setup(){
  createCanvas(600,800);
  

path=createSprite(200,500);
path.addImage("path",pathImage);
path.y= path.height/5;
path.velocityY=4;
path.scale=1.2;

Runner=createSprite(200,500)
Runner.addAnimation("Runner",RunnerImage);
Runner.scale=0.1;
Runner.setCollider('circle',0,0,350);

invisibleboundary=createSprite(400,400,20,800);
invisibleboundary.visible=false;
invisibleboundary2=createSprite(10,50,25,1500);
invisibleboundary2.visible=false;

coinGroup= createGroup();
bombGroup=createGroup();
energydrinkGroup=createGroup();



}

function draw(){

  

  push();
    fill("red")
    textSize(30); 
    stroke("blue");
    text("COIN: "+ Score,100,200);
  pop();

  if(path.y>700){
    path.y=height/2;
  }



  if(keyDown(RIGHT_ARROW)){

    Runner.x=Runner.x+8;
    }
    if(keyDown(LEFT_ARROW)){
    
    Runner.x=Runner.x-8;
    }

   Runner.collide(invisibleboundary);
   Runner.collide(invisibleboundary2);

if(Runner.isTouching(coinGroup)){

coinGroup.destroyEach();
Score=Score+1;
}

if(Runner.isTouching(energydrinkGroup)){

  energydrinkGroup.destroyEach();
  
  }

  if(Runner.isTouching(bombGroup)){

    bombGroup.destroyEach();
    Runner.x=200
    Runner.velocityY=0;
    Runner.addImage(pathImage);
    path.velocityY=0;
    bomb.velocityY=0;
    coin.velocityY=0;
    energydrink.velocityY=0;
    

    }




drawcoin();
 drawbomb();   
drawEnergyD();

drawSprites();
}

function drawcoin(){

 
  if (World.frameCount % 200 == 0) {
    var coin = createSprite(Math.round(random(50, 350),40, 10, 10));
  coin.addImage(coinImg);
    coin.scale=0.54;
    coin.velocityY = 3;
    coin.lifetime = 250;
    coinGroup.add(coin);

    }
}

function drawbomb(){

  if (World.frameCount % 200 == 0) {
    var bomb = createSprite(Math.round(random(50, 250),40, 10, 10));
  bomb.addImage(bombImg);
    bomb.scale=0.1;
    bomb.velocityY = 3;
    bomb.lifetime = 550;
    bombGroup.add(bomb);
    }
  }

function drawEnergyD(){

  if (World.frameCount % 250 == 0) {
    var energydrink = createSprite (Math.round(random(50,280),50,10,10)); 
     energydrink.addImage(EnergyDImg);
    energydrink.scale=0.1;
    energydrink.velocityY = 3;
    energydrink.lifetime = 550;
    energydrinkGroup.add(energydrink);
    }
  }