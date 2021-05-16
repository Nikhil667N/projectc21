class Car{
   constructor(speed){
        this.x = random([100,210,320,440,550,660,770,880,990,1100,1210]);
        this.y = height-random([150,250,350,950,1050,1150,1750,1850,1950]);
        this.spt = createSprite(this.x,this.y);
        this.spt.shapeColor = "blue";
        this.spt.scale=0.5;
        for(var i=0;i<6;i++){
            var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
            if(i%2===0)
            {
            var road=createSprite(683,height-150-(i*400),grassHeight,width,300,)
            road.shapeColour="black";
            
             }
               bottomGrass1.shapeColour = "grey";
             }
            
        if(this.y==height-250 || this.y==height-1050 || this.y==height-1850)
        {
            speed=-speed;
        }
        this.spt.velocityX = speed;
    }
   
}


