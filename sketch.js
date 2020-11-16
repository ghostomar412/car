var database,form,gameState=0;
var playerCount=0;
var player;
var allPlayers;
var car1,car2,car3,car4
var carz=[]
var icar1,icar2,icar3,icar4
var track,groundIMG
var bg,congrats
function preload(){
track=loadImage("track.jpg");
groundIMG=loadImage("ground.png");
icar1=loadImage("car1.png");
icar2=loadImage("car2.png");
icar3=loadImage("car3.png");
icar4=loadImage("car4.png");
bg= loadImage("racingCar.gif")
congrats=loadImage("images.png")
}
function setup(){
    createCanvas(displayWidth-200,displayHeight-200);
    database=firebase.database();
game=new Game();
game.getState();
game.start()
}

function draw(){
    background("white");
    if (gameState===0){
        background(bg)
    }
    if(playerCount===4){
        game.update(1);
        
    }
    if(gameState===1){
        clear();
        game.play();
    }
    if (gameState===2){
        game.end();
        background(congrats)
    }
}