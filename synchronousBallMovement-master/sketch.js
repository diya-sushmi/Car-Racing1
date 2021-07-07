var database;
var gameState = 0
var playerCount
var game1,form1,player1


function setup(){
createCanvas(400,400)

database = firebase.database()
game1 = new game()
game1.getState()
game1.start()

}

function draw(){
    
}