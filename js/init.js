function Hero(){
    
    this.x                  = 0;
    this.y                  = 0;
    this.spritesheet        = 'assets/gfx/characters/male.png';
    
    this.frameWidth         = 32;
    this.frameHeight        = 32;
    this.endFrame           = 5;
    
    this.frameRate          = 1;
    
    this.vikingWalk         = undefined;
    this.vikingWalkConfig   = undefined;
    

    
/*
    this.config         = {key: 'shuffle',
                          frames: this.anims.generateFrameNumbers('vikingWalk', {start: 0, end: 5, first: 5}), frameRate: this.frameRate};
                          */
    
}

Hero.prototype.loadWalk = function(context){
    
    context.load.spritesheet('vikingWalk', this.spritesheet, { frameWidth:                                 this.frameWidth, frameHeight: this.frameHeight, endFrame: this.endFrame });
    
}

Hero.prototype.configWalk = function(context){
    
    this.vikingWalkConfig = {
                            key: 'shuffle',
                            frames: context.anims.generateFrameNumbers('vikingWalk', { start: 0, end: 5, first: 5 }),
                            frameRate: 1
                        };
}

//Global vars
var hero;

var SceneA = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneA ()
    {
        Phaser.Scene.call(this, { key: 'sceneA' });
    },

    preload: function ()
    {
        
        //  An array of sprite sheets.
        //  The URLs are automatically created based on the path and key (see documentation for details)
        //this.load.spritesheet('vikingWalk', 'assets/gfx/characters/male.png', { frameWidth: 32, frameHeight: 32, endFrame: 5 });
        hero = new Hero();
        
        hero.loadWalk(this);
    },

    create: function ()
    {
        
        hero.configWalk(this);
        
        this.anims.create(hero.vikingWalkConfig);

        var boom = this.add.sprite(400, 300, 'vikingWalk');

        boom.anims.play('shuffle');

        this.input.once('pointerdown', function () {

            console.log('From SceneA to SceneB');

            this.scene.start('sceneB');

        }, this);
    }

});

var SceneB = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneB ()
    {
        Phaser.Scene.call(this, { key: 'sceneB' });
    },

    preload: function ()
    {
        this.load.setPath('./assets/gfx/characters');
        
        //  An array of sprite sheets.
        //  The URLs are automatically created based on the path and key (see documentation for details)
        this.load.spritesheet([
            { key: 'viking1', frameConfig: { frameWidth: 64, frameHeight: 64, endFrame: 23 } }
        ]);
        
    },

    create: function ()
    {
        this.add.sprite(400, 300, 'face').setAlpha(0.2);
        
        var config = {
            key: 'viking1Animation',
            frames: this.anims.generateFrameNumbers('viking1', { start: 0, end: 23, first: 23 }),
            frameRate: 20,
            repeat: -1
        };

        this.anims.create(config);

        this.add.sprite(400, 300, 'viking1').play('viking1Animation');

        this.input.once('pointerdown', function () {

            console.log('From SceneB to SceneC');

            this.scene.start('sceneC');

        }, this);
    }

});

var SceneC = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneC ()
    {
        Phaser.Scene.call(this, { key: 'sceneC' });
    },

    preload: function ()
    {
        this.load.setPath('./assets/gfx/characters');
        
        //  An array of sprite sheets.
        //  The URLs are automatically created based on the path and key (see documentation for details)
        this.load.spritesheet([
            { key: 'viking1', frameConfig: { frameWidth: 64, frameHeight: 64, endFrame: 23 } }
        ]);
        
    },

    create: function ()
    {
        this.add.sprite(400, 300, 'face').setAlpha(0.2);
        
        var config = {
            key: 'viking1Animation',
            frames: this.anims.generateFrameNumbers('viking1', { start: 0, end: 23, first: 23 }),
            frameRate: 20,
            repeat: -1
        };

        this.anims.create(config);

        this.add.sprite(400, 300, 'viking1').play('viking1Animation');

        this.input.once('pointerdown', function () {

            console.log('From SceneC to SceneA');

            this.scene.start('sceneA');

        }, this);
    }

});

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'gameContainer',
    scene: [ SceneA, SceneB, SceneC ]
};

var game = new Phaser.Game(config);