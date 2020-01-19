function Controls(){
    
    
}

Controls.prototype.handleClick = function(context, sceneName){
    
    context.input.once('pointerdown', function(){
        
        context.scene.start(sceneName);
    }, context);
}