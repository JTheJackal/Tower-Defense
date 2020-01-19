function Street(){
    
    this.scene = new Phaser.Class({
        
        Extends: Phaser.Scene,
        
        initialize:
        
        function Street (){
            
            Phaser.Scene.call(this, { key: 'street' });
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
            controls.handleClick(this, 'field');
        }
    })
}