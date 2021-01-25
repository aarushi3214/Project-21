var canvas;
var music;
var block1,block2,block3,block5;
var box,edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1=createSprite (300,590,80,20); 
    block1.shapeColor="green";
    block2=createSprite (500,590,80,20);
    block2.shapeColor="red"
    block3=createSprite (700,590,80,20);
    block3.shapeColor="yellow";
    block4=createSprite (100,590,80,20);
    block4.shapeColor="blue";
    //create box sprite and give velocity
     box=createSprite(random(20,750),150,20,20);
     box.shapeColor="white";
     box.velocityX=4;
     box.velocityY=9;
     }

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges=createEdgeSprites();
     
     box.bounceOff(edges);
     if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shatpeColor="green";
        music.play();
     }
     if(block2.isTouching(box)){
        box.shapeColor="red";
        box.velocityX=0; 
        box.velocityY=0; 
        music.stop();
     }
     if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor="yellow";
        music.play();
     }
     if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor="blue";
        music.play();
     }
   
   
    drawSprites();
}
