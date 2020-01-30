function Facility(){
    
    this.scene = new Phaser.Class({
        
        Extends: Phaser.Scene,
        
        initialize:
        
        function Facility (){
            
            Phaser.Scene.call(this, { key: 'facility' });
        },
        
        preload: function(){
      
            tiling      = new Tiling('facility');
            controls    = new Controls();
            hero        = new Hero();
            
            
            
            tiling.loadTiles(this);
            hero.loadWalk(this);
            
            pathfinder  = new Pathfinder('facility', tiling);
            
            enemies[0]  = new Enemy(this, "facility", tiling);
            
        },
        
        create: function(){
            
            //Load the controls
            //controls.handleMovement(this);
            //controls.handleClick(this, 'field');
            
            //Pathfinding and new path
            var easystar = new EasyStar.js();
            
            tiling.makeMap(this);
            
            //console.log(tiling);
            
            controls.tileClick(this, tiling, easystar);
              
            hero.configWalk(this);
            hero.controlSprite(this);
            
            pathfinder.findNewPath(this, tiling);
            
            /*
            //Get the CSV for this level and store it as a multi-dimensional array
            tempMap = importTilemap('facility');
            
            
            easystar.setGrid(tempMap);
            easystar.setAcceptableTiles([8]);
        
            
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
            }.bind(this));
                                        
            
            
            easystar.calculate();
            */
        },
        
        update: function(time, delta){
            
            
            //controls.update(delta);

            
            //if (this.input.manager.activePointer.isDown){
                
                /*
                var worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);
                var tile = map.getTileAtWorldXY(worldPoint.x, worldPoint.y);

                // This will replace all instances of the selected tile with a plant (tile id = 38).
                map.replaceByIndex(tile.index, 38);

                // You can also replace within a specific region (tileX, tileY, width, height):
                // map.replaceByIndex(tile.index, 38, 5, 5, 15, 15);
                */
                
                //console.log("CLICKED");
            //}
        }
    })
}