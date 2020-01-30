function Controls(){
    
}

Controls.prototype.handleClick = function(context, sceneName){
    
    context.input.once('pointerdown', function(){
        
        context.scene.start(sceneName);
    }, context);
}

Controls.prototype.tileClick = function(context, tiling, easystar){
    
    var tiling = tiling;
    
    context.input.on('pointerup', function () {
        
        /*
        var worldPoint = context.input.activePointer.positionToCamera(context.cameras.main);
        var tile = tiling.map.getTileAtWorldXY(worldPoint.x, worldPoint.y);
        tiling.map.replaceByIndex(tile.index, 37, tile.x, tile.y, 1, 1);
        
        console.log("tiling:");
        console.log(tiling);
        
        var tempMap = tiling.grid;
        
        
        console.log("old path");
        console.log(tempMap);
        
        console.log(tile.y, tile.x);
        tempMap[tile.y][tile.x] = 37;
        
        console.log("new path");
        console.log(tempMap);
        
        easystar.setGrid(tempMap);
        easystar.setAcceptableTiles([8]);
        
        
        //Wipe all tiles to prepare for new path
        for(let i = 0; i < tiling.pathMap.layer.data.length; i++){
            for(let j = 0; j < tiling.pathMap.layer.data[i].length; j++){
                
                tiling.pathMap.replaceByIndex(tiling.pathMap.layer.data[i][j].index, 8, tiling.pathMap.layer.data[i][j].x, tiling.pathMap.layer.data[i][j].y, 1, 1);
            }
        }
        

        easystar.findPath(1, 1, 18, 6, function(path){

            var i = 0;
            this.time.addEvent({
                delay: 5,
                callback: function(){

                    if(i < path.length){


                        //Loop through possibles
                        for(let j = 0; j < tiling.pathMap.layer.data.length; j++){
                            for(let k = 0; k < tiling.pathMap.layer.data[j].length; k++){

                                //console.log(tiling.map.layer.data[j][k]);

                                if(tiling.pathMap.layer.data[j][k].x == path[i].x && tiling.pathMap.layer.data[j][k].y == path[i].y){

                                    //Draw the path
                                    tiling.pathMap.replaceByIndex(8, 38, path[i].x, path[i].y, 1, 1);
                                }
                            }
                        }

                        i++;
                    }
                    else{

                    }
                },
                callbackScope: this,
                loop: true
            });
        }.bind(context));



        easystar.calculate();
        */
        
        var worldPoint = context.input.activePointer.positionToCamera(context.cameras.main);
        var tile = tiling.map.getTileAtWorldXY(worldPoint.x, worldPoint.y);
        tiling.map.replaceByIndex(tile.index, 37, tile.x, tile.y, 1, 1);
        
        pathfinder.findNewPath(this, tiling, true, tile);
        
        

    }, context);
}

Controls.prototype.handleMovement = function(context){
    
    context.input.keyboard.on('keydown-UP', function (event) {

        hero.move("up");

    });
    
    context.input.keyboard.on('keyup-UP', function (event) {

        hero.move("stop");

    });
    
    context.input.keyboard.on('keydown-DOWN', function (event) {

        hero.move("down");

    });
    
    context.input.keyboard.on('keyup-DOWN', function (event) {

        hero.move("stop");

    });
    
    context.input.keyboard.on('keydown-RIGHT', function (event) {

        hero.move("right");

    });
    
    context.input.keyboard.on('keyup-RIGHT', function (event) {

        hero.move("stop");

    });
    
    context.input.keyboard.on('keydown-LEFT', function (event) {

        hero.move("left");

    });
    
    context.input.keyboard.on('keyup-LEFT', function (event) {

        hero.move("stop");

    });
}