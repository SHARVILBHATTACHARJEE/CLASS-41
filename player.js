class Player {
    constructor(){
        this.index=null
        this.name=null
        this.distance=0
        this.rank=null
    }

    //read the playerCount value from database
    getCount(){
        db.ref("playerCount").on("value",function (data) {
            playerCount = data.val()
        })
    }

    //writing the playerCount value to the database
    updateCount(count){
        db.ref("/").update({
            playerCount:count
        })
    }

    //writing the player name and distance in database
    updateInfo(){
        db.ref("players/player"+this.index).set({
            name:this.name,
            distance:this.distance
        })
    }
    
    //reads all the players information at a time
    static getPlayersInfo(){
        db.ref("players").on("value",(data)=>{
            all=data.val()
        })
    }
    
    //read cars at end value from database
    getCarsAtEnd(){
        db.ref("carsAtEnd").on("value",function (data) {
             this.rank= data.val()
        })
    }

    //writing the carsatend value to the database
   static updateCarsAtEnd(count){
        db.ref("/").update({
            carsAtEnd:count
        })
    }

}