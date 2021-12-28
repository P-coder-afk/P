class Player
{
    constructor() {
		this.x = 99;
		this.y=589;
		this.spt=createSprite(this.x,this.y, 100,50);
		this.spt.addAnimation("mariostandright",mariostandrightAnimation);
		this.spt.addAnimation("mariostandleft",mariostandleftAnimation);
		this.spt.addAnimation("marioright",mariorightAnimation);
		this.spt.addAnimation("marioleft",marioleftAnimation);
		this.spt.addAnimation("shootingright",shootingAnimationr);
		this.spt.addAnimation("shootingleft",shootingAnimationl);
		this.spt.addAnimation("jumping",mariojumpAnimation);
		this.spt.scale=0.9;
		this.spt.setCollider("rectangle",0,0,90,30);
	}




	jump()
	{ 
		this.spt.velocityY=-10;
		this.spt.changeAnimation("jumping",mariojumpAnimation);
    }
       		

	

	
	
	

	
	

	
	
		
    
	
}





















