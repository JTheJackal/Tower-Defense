function Enemy(context, levelName, tiling){
    
    this.enemyType  = 1;
    this.x                  = 1230;
    this.y                  = 700;
    this.spritesheet        = 'assets/gfx/characters/male.png';
    
    this.moveSpeed          = 50;
    
    this.frameWidth         = 32;
    this.frameHeight        = 32;
    this.endFrame           = 5;
    
    this.frameRate          = 1;
    
    this.vikingWalk         = undefined;
    this.enemyWalkConfig   = undefined;
    this.sprite             = undefined;
    
    context.load.spritesheet('enemyWalk', this.spritesheet, { frameWidth:                                 this.frameWidth, frameHeight: this.frameHeight, endFrame: this.endFrame });
    
    
    this.enemyWalkConfig   = {
                            key: 'enemyWalking',
                            frames: context.anims.generateFrameNumbers('enemyWalk', { start: 0, end: 5, first: 5 }),
                            frameRate: 1
                        };
    
    context.anims.create(this.enemyWalkConfig);
    
    this.sprite = context.physics.add.sprite(this.x, this.y, 'enemyWalk');
    this.sprite.depth = 2;
    //this.sprite = context.add.sprite(this.x, this.y, 'vikingWalk');
    //this.sprite.anims.play('enemyWalk');
}