var spacecraft,bullet,villain,back,fire;
var spacecraftimg,bulletimg,villainimg;
var villainGroup;
var score=0;

function preload()
{
spacecraftimg=loadImage("spacecraft.jpg")
bulletimg=loadImage("bullet.png")
villainimg=loadImage("villain.jpg")
back=loadImage("spacebg.jpg")
fire=loadImage("blast.png")

}

function setup()
{
createCanvas(1000,600)

spacecraft=createSprite(100,300)
spacecraft.addImage(spacecraftimg)
spacecraft.scale=0.2

villainGroup=createGroup()

bulletGroup=createGroup()

rectangle1=createSprite(500,5,1000,10)
rectangle1.visible=false
rectangle2=createSprite(500,600,1000,10)
rectangle2.visible=false



}

function draw()
{
background("white")

text("score="+score,500,20)

spacecraft.collide(rectangle1)
spacecraft.collide(rectangle2)

if(keyDown("space")){
    bullet=createSprite(220,300)
    bullet.addImage(bulletimg)
    bullet.scale=0.1
    bullet.velocityX=3;
    bullet.y=spacecraft.y  
    bulletGroup.add(bullet)
}

if(keyDown(UP_ARROW)){
    spacecraft.y=spacecraft.y-3;
}
if(keyDown(DOWN_ARROW)){
   spacecraft.y=spacecraft.y+3;
}
if(bulletGroup.isTouching(villainGroup)){
 
 bulletGroup.destroyEach()
 villain.addImage(fire)
 villainGroup.destroyEach()
 score=score+1
}

gunda();
drawSprites();
}



function gunda()
{
if(frameCount%360===0){
    villain=createSprite(1080,300)
    villain.addImage(villainimg)
    villain.scale=0.2
    villain.velocityX=-3;
    villain.y=Math.round(random(50,550))
    villainGroup.add(villain)
}

}