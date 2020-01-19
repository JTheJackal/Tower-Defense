function Facility(){
    
    this.scene = new Phaser.Class({
        
        Extends: Phaser.Scene,
        
        initialize:
        
        function Facility (){
            
            Phaser.Scene.call(this, { key: 'facility' });
        },
        
        preload: function(){
            
            controls    = new Controls();
            hero        = new Hero();
            
            hero.loadWalk(this);
        },
        
        create: function(){
            
            hero.configWalk(this);
            hero.controlSprite(this);
            
            //Load the controls
            controls.handleClick(this, 'street');
        }
    })
}