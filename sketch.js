// deaclaring ship, ship_floating, sea and seaImg; 
var ship, ship_floating;
var sea, seaImg;

function preload(){
  //  loading sea and shipImg;
  seaImg = loadImage("sea.png");
  ship_floating = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  // creating canvas;
  createCanvas(1500,900);
  // creating sprites and adding seaImg;
  sea = createSprite(200,200,400,400);
  sea.addImage (seaImg);
  ship = createSprite(200,250);
  // adding animation to the ship;
  ship.addAnimation("floating", ship_floating);

}


function draw(){
  //set background color 
  background("blue");

  // setting scale for ship;
  ship.scale = 0.5;
  ship_floating.x = 2;
  // setting velocity for sea;
  sea.velocityX = -2;

  // using if condition to make the scale of sea image same as canvas;
 if(sea.x < 0) {
   sea.x = sea.width/2;
   
 }

//  drawing the sprites;
 drawSprites();
  
}