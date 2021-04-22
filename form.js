class Form{
    constructor(){
        this.title=createElement("h1")
        this.input=createInput("NAME")
        this.button=createButton("START")
        this.greeting=createElement("h2")
        this.Reset=createButton("RESTART")
    }
    hide(){
        this.title.hide()
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        this.title.position(width/2-50,0)
        this.Reset.position(width-100,20)
        this.title.html("CAR RACING")
        this.input.position(width/2-40,height/2-80)
        this.button.position(width/2+30,height/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            this.greeting.position(width/2-70,height/4)
            this.greeting.html("Hello "+player.name)
            playerCount++
            player.index=playerCount
            player.updateCount(playerCount)
            player.updateInfo()
        })
        this.Reset.mousePressed(()=>{
            game.updateState(0)
            player.updateCount(0)
            Player.updateCarsAtEnd(0)
        })    
    }
}