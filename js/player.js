class Player{
constructor(){
this.name=null;
this.index=0;
this.distance=0;
this.rank=null;
}
getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
        playerCount = data.val()
    })
}
update(count){
    database.ref('/').update({
        playerCount : count
    })
    
}

updateName(){
    var playerIndex ="players/player"+this.index
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
    })
}
static getPlayerInfo(){
    var playerInfoRef=database.ref('players');
    playerInfoRef.on("value",(data)=>{
        allPlayers=data.val()
         })
}
getCars(){
database.ref('end').on("value",(data)=>{
this.rank=data.val()
})

}
updateCars(rank){
    database.ref('/').update({
        end:rank
    })
}



}