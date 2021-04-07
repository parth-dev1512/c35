var database;
var gameState;
var playerCount;
var form,game,player;

function setup()
{
    createCanvas(400,400);
    database=firebase.database();
    game =new Game();
    game.readState();
    game.wait();
  
}
function draw()
{

}