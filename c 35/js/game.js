class Game
{
    constructor()
    {
        
    }

    //read gameSate

    readState()
    {
        var gameStateRef = database.ref('gameState')

        gameStateRef.on("value",function(data)
        {
            gameState = data.val()
            
        })
    }

    //update the state

    update(state)
    {
        database.ref('/').update({
            gameState: state
        })
    }

    wait()
    {
        player = new Player();

        player.readCount();

        form = new Form();
        form.display();

        
    }
}