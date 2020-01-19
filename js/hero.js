//Declare Hero object
function Hero(){
    
    this.x                  = 50;
    this.y                  = 50;
    this.spritesheet        = 'assets/gfx/characters/male.png';
    
    this.frameWidth         = 32;
    this.frameHeight        = 32;
    this.endFrame           = 5;
    
    this.frameRate          = 1;
    
    this.vikingWalk         = undefined;
    this.vikingWalkConfig   = undefined;
    this.sprite             = undefined;
}

//Allow the walk animation to be loaded from the spritesheet
Hero.prototype.loadWalk = function(context){
    
    context.load.spritesheet('vikingWalk', this.spritesheet, { frameWidth:                                 this.frameWidth, frameHeight: this.frameHeight, endFrame: this.endFrame });
    
}

//Alllow the walk animation to be configured
Hero.prototype.configWalk = function(context){
    
    this.vikingWalkConfig = {
                            key: 'shuffle',
                            frames: context.anims.generateFrameNumbers('vikingWalk', { start: 0, end: 5, first: 5 }),
                            frameRate: 1
                        };
    
    context.anims.create(this.vikingWalkConfig);
}

//Allow the sprite to be added to the scene along with the animation
Hero.prototype.controlSprite = function(context){
    
    this.sprite = context.add.sprite(this.x, this.y, 'vikingWalk');
    this.sprite.anims.play('shuffle');
    
}