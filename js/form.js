class Form{
constructor (){
    this.title=createElement('h2');
    this.input=createInput('NickName');
    this.button=createButton('Play Now');
    this.greetings=createElement('h1');
}
display(){
    this.title.html("Racing Roads");
    this.title.position(130,100);
    this.input.position(130,200);
    this.button.position(130,250);
    
    this.button.mousePressed(()=>{

        this.title.hide();
        this.input.hide();
        this.button.hide();

        player.name = this.input.value();
    playerCount+=1;
    player.update(playerCount);
    player.index=playerCount;
    player.updateName()
    this.greetings.html("Greetings Fellow Racers Prepare TO BE CRUSHED OR CRUSH SOMEONE");
    this.greetings.position(130,100);
    });
}
hide(){
    this.title.hide();
    this.input.hide();
    this.button.hide(); 
    this.greetings.hide();
}
win(){
var reset=createButton('reset')
reset.position(100,50);
    reset.mousePressed(()=>{
        player.update(0)
game.update(0)
var playerref=database.ref('players');
playerref.remove();
player.updateCars(0)
greetings2.hide();
    })
    var greetings2=createElement('h2')
    if(player.rank===1){
greetings2.html("Congrats   Rank: "+player.name+"  "+ player.rank+"st")}
else if (player.rank===2){
    greetings2.html("Congrats   Rank: "+player.name+"  "+ player.rank+"nd")}
    else if (player.rank===3){
        greetings2.html("Congrats   Rank: "+player.name+"  "+ player.rank+"rd")}
        else if (player.rank===4){
            greetings2.html("Congrats   Rank: "+player.name+"  "+ player.rank+"th")}
greetings2.position(130,100)
}
}