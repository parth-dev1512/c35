class Form
{
    constructor()
    {
        
    }

    display()
    {
        //element inside var title
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(130,10);


        var greeting = createElement('h2')
        

        var input = createInput('Name');
        input.position(130,160);


        var button = createButton('Play');
        button.position(250,200);

        button.mousePressed(function() 
        {
            input.hide();
            button.hide();

            var name=input.value();
            playerCount+=1;

            player.updateCount(playerCount);
            player.update(name);
            
            greeting.html("Hello"+name)
            greeting.position(130,160);
            
        })
        

    }
}