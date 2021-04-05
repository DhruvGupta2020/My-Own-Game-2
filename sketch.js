var database;
var Gamestate;
var PlayerCount;
var bird1image,bird2image;
function preload(){
    bird1image = loadImage("images/YellowBird.png");
    bird2image = loadImage("images/BlueBird.png");

  }
  
function setup(){
    createCanvas(500,500);
    database = firebase.database();

   
}

function draw(){
    background("white");
 
    drawSprites();
}

