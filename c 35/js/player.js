class Player{
    constructor(){
  
    }
    //read the playerCOunt
    readCount(){
      //referring
  var playerCountRef = database.ref('playerCount')
  
  //listening -->.on()
  playerCountRef.on("value",function(data){
  
    //store the listened info inside the playerCount
    playerCount = data.val()
  })
    }
  
    //update the playerCount
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      })
    }
  
    //update the name of player
    update(name){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        //after completing the form
        name:name
      })
    }
  }
  
  //name:" "
  //playerCount: 0