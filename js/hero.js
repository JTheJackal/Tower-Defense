//Declare Hero object
function Hero(){
    
    this.x                  = 50;
    this.y                  = 50;
    this.spritesheet        = 'assets/gfx/characters/male.png';
    
    this.moveSpeed          = 50;
    
    this.frameWidth         = 32;
    this.frameHeight        = 32;
    this.endFrame           = 5;
    
    this.frameRate          = 1;
    
    this.vikingWalk         = undefined;
    this.vikingWalkConfig   = undefined;
    this.sprite             = undefined;
}

//Move the player
Hero.prototype.move         = function(direction){
    
    
    switch(direction){
            
        case "up":
            
            this.sprite.setVelocityY(this.moveSpeed * -1);
            break;
            
        case "down":
            
            this.sprite.setVelocityY(this.moveSpeed);
            break;
            
        case "left":
            
            this.sprite.setVelocityX(this.moveSpeed * -1);
            break;
            
        case "right":
            
            this.sprite.setVelocityX(this.moveSpeed);
            break;
            
        case "stop":
            
            this.sprite.setVelocityX(0);
            this.sprite.setVelocityY(0);
            break;
    }
}

//Allow the walk animation to be loaded from the spritesheet
Hero.prototype.loadWalk     = function(context){
    
    context.load.spritesheet('vikingWalk', this.spritesheet, { frameWidth:                                 this.frameWidth, frameHeight: this.frameHeight, endFrame: this.endFrame });
    
}

//Alllow the walk animation to be configured
Hero.prototype.configWalk   = function(context){
    
    this.vikingWalkConfig   = {
                            key: 'shuffle',
                            frames: context.anims.generateFrameNumbers('vikingWalk', { start: 0, end: 5, first: 5 }),
                            frameRate: 1
                        };
    
    context.anims.create(this.vikingWalkConfig);
}

//Allow the sprite to be added to the scene along with the animation
Hero.prototype.controlSprite = function(context){
    
    this.sprite = context.physics.add.sprite(this.x, this.y, 'vikingWalk');
    //this.sprite = context.add.sprite(this.x, this.y, 'vikingWalk');
    this.sprite.anims.play('shuffle');
    
}