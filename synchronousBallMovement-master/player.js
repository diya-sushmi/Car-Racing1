class player {

    constructor(){


    }

    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value",function(data){
            playerCount=data.val()
            })
        
    }
    updateCount(count){                                            
        database.ref('/').update({                         
            playerCount:count
        })
    
    }

    updateName(name){
    var playerIndex="player"+ playerCount;
    databse.ref(playerIndex).set({
        name:name
    })


    }
}



