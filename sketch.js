var canvas;
var music;
var s1,s2,s3,s4,movingSprite,fixSprite1,fixSprite2,fixSprite3,fixSprite4



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     fixSprite1= createSprite(100,580,200,30)
     fixSprite2=createSprite(295,580,200,30)
     fixSprite3=createSprite(515,580,200,30)
     fixSprite4=createSprite(740,580,200,30)
      
     fixSprite1.shapeColor="pink"
     fixSprite2.shapeColor="red"
     fixSprite3.shapeColor="yellow"
     fixSprite4.shapeColor="skyblue"

     
    //create box sprite and give velocity
    movingSprite=createSprite(118,300,40,20)
    
    movingSprite=createSprite(random(10,750),300,20,20)
    movingSprite.shapeColor="white"
    movingSprite.velocity.X=3;
    movingSprite.velocity.Y=3;

    
 
  
 
}




function draw() {
    background(rgb(169,169,169));
    //create edgeSprite


    if(movingSprite.x<0){
    music.stop()
    movingSprite.velocityX=3;
    }else if(movingSprite.x>800){
        music.stop()
        movingSprite.velocityX=-3;
    }
    if(movingSprite.isTouching(fixSprite4)){
        music.play()
        movingSprite.shapeColor="yellow";
        movingSprite.bounceOff(fixSprite4)
        
      }
      
      else if(movingSprite.isTouching(fixSprite3)){
        music.stop()
        movingSprite.shapeColor="blue";
        movingSprite.bounceOff(fixSprite3)
       
      }
        
      else if(movingSprite.isTouching(fixSprite2)){
        music.stop()
        movingSprite.shapeColor="green";
        movingSprite.bounceOff(fixSprite2)
        movingSprite.velocityX=0;
        movingSprite.velocityY=0;
      }
      
      else if(movingSprite.isTouching(fixSprite1)){
        music.stop()
        movingSprite.shapeColor="red";
        movingSprite.bounceOff(fixSprite1)
      }
    
      if (movingSprite.y<0){
        music.stop()
        movingSprite.velocityY=3
      }
    //add condition to check if box touching surface and make it box
    drawSprites();
      
    }