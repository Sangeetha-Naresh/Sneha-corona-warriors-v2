var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player1_img, player2_img;
var player1score =0;
var player2score =0;
var bullet;
var flag=0;

var hospimg;

function preload()
{
  //back_img = loadImage("images/jungle.jpg");

  back_img = loadImage("images/bg2.jpg");
  hospimg = loadImage("images/hopitalbg.jpg");

  player1_img = loadImage("images/doc1.png");
  player2_img = loadImage("images/doc2.png");

  fruit1_img = loadImage("images/c1.png");
  fruit2_img = loadImage("images/c2.png");
  fruit3_img = loadImage("images/c3.png");
  fruit4_img = loadImage("images/c1.png");
  fruit5_img = loadImage("images/c4deadly.png");


  fruitGroup = new Group();
}


function setup()
 {
  createCanvas(1350, 640);

  console.log(windowWidth);
  console.log(windowHeight);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
  
}

function draw()
{

  background(back_img);
  
   if (playerCount === 2) 
   {
      background(hospimg);
     game.update(1);
   }
   if (gameState === 1)
  {
     clear(); 
     game.play();
   }

   
  
}