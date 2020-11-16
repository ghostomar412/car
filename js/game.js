class Game{
constructor(){
}
getState(){
    var gameStateRef = database.ref('gamestate');
    gameStateRef.on("value",(data)=>{
        gameState = data.val()
    })


}
update(state){
    database.ref('/').update({
        gamestate : state
    })
    
}

start(){

    if(gameState === 0){
        form = new Form();
        form.display();
        player = new Player();
        player.getCount();
        car1=createSprite(100,200);
        car2=createSprite(200,200);
        car3=createSprite(300,200);
        car4=createSprite(400,200);
carz=[car1,car2,car3,car4]

car1.addImage(icar1)
car2.addImage(icar2)
car3.addImage(icar3)
car4.addImage(icar4)
    }

}
play(){
    form.hide();
    Player.getPlayerInfo();
player.getCars();
    if (allPlayers!==undefined){
        background(groundIMG);
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
      //  var displayPosition=130;
    //    for(var p in allPlayers){
     /*   if (p==="player"+player.index){
            fill("red")
        }
        else {
            fill("black")
        }
        displayPosition+=20;
        textSize(20)
        text(allPlayers[p].name + " : "+allPlayers[p].distance, 120 ,displayPosition);
        }*/
        var index=0;
        var x=225;
        var y;
for(var p in allPlayers){
    index=index+1;
    x=x+225;
    y=displayHeight-allPlayers[p].distance;
    carz[index-1].x=x;
    carz[index-1].y=y;
    if (index===player.index){
        fill('red')
        ellipse(x,y,60,60)
        camera.position.x=displayWidth/2
        camera.position.y=carz[index-1].y
    }
}
    }

    if (keyIsDown(UP_ARROW)&&player.index !== null){
        player.distance+=20;
        player.updateName();
    }
    if (player.distance>4380){gameState=2;
    player.rank+=1;
player.updateCars(player.rank)}
drawSprites();

}
end(){
   form.win()
    console.log("rank:"+player.rank)
}
}
