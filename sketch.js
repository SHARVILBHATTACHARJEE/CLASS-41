var db;
var form,game,player;
var playerCount
var gameState=0
var all;
var car1,car2,car3,car4,cars


function preload(){
    c1=loadImage("car1.png")
    c2=loadImage("car2.png")
    c3=loadImage("car3.png")
    c4=loadImage("car4.png")
    t1=loadImage("track.jpg")
}
function setup(){
    createCanvas(displayWidth-30,displayHeight-40);
    db=firebase.database()
    game=new Game()
    game.getState()
    game.start()
   
}

function draw(){
   if(playerCount===4){
       game.updateState(1)
   }
   if(gameState===1){
       clear()
       game.play()
   }
   if(gameState===2){
game.end()
   }
}

