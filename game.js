class Game {
    constructor(){

    }

    //read the gameState value from database
    getState(){
        db.ref("gameState").on("value",function (data) {
            gameState = data.val()
        })
    }

    //writing the gameState value to the database
    updateState(state){
        db.ref("/").update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            player=new Player()
            var playerCountRef=await db.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val()
                player.getCount()
            }
            form=new Form()
            form.display()
        }
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        car3=createSprite(500,200)
        car4=createSprite(700,200)
        car1.addImage(c1)
        car2.addImage(c2)
        car3.addImage(c3)
        car4.addImage(c4)
        cars=[car1,car2,car3,car4]
    }
//!== not equal to
    play(){
        form.hide()
        Player.getPlayersInfo()
        if(all!==undefined){
            background("red")
            image(t1,0,-height*4,width,height*5)
            var index=0
            var x=175
            var y
            for(var i in all){
                index++
                x+=200
                y=height-all[i].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if(index===player.index){
                    fill("blue")
                    ellipse(x,y,60)
                    camera.position.x=width/2
                    camera.position.y=cars[index-1].y
                }
            }
        }
        if(keyDown("UP_ARROW")&&player.index!==null){
            player.distance+=10
            player.updateInfo()
        }
        player.getCarsAtEnd()
        if(player.distance>3480){
            gameState=2
            player.rank++
            Player.updateCarsAtEnd(player.rank)
        }
        drawSprites()
      }
  end(){
      console.log("GAME OVER")
      console.log(player.rank)
  }    
}
    