function Pathfinder(levelName, tiling){
    
    this.acceptableTiles    = [8];
    this.easystar           = new EasyStar.js();
    this.grid               = importTilemap(levelName);
    this.tiling             = tiling;
    
    this.startX             = 19;
    this.startY             = 9;
    
    this.endX               = 2;
    this.endY               = 1;
    
    this.easystar.setGrid(this.grid);
    this.easystar.setAcceptableTiles(this.acceptableTiles);
}

Pathfinder.prototype.changeStart    = function(x, y){
    
    this.startX = x;
    this.startY = y;
}

Pathfinder.prototype.changeEnd      = function(x, y){
    
    this.endX   = x;
    this.endY   = y;
}

Pathfinder.prototype.changeGrid     = function(context, bgTiling, repath, tile){
    
    this.grid[tile.y][tile.x] = 37;
}

Pathfinder.prototype.findNewPath    = function(context, bgTiling, repath, tile){
    
    if(repath){
        
        //console.log("repath");
        
        var tempMap = bgTiling.grid;
        
        tempMap[tile.y][tile.x] = 37;
        
        this.easystar.removeAllAdditionalPointCosts();
        this.easystar.setGrid(tempMap);
        this.easystar.disableDiagonals();
        this.easystar.setAcceptableTiles(this.acceptableTiles);
        //this.easystar.avoidAdditionalPoint(tile.x, tile.y);
    }
    
    
        
        //Wipe all tiles to prepare for new path
        for(let i = 0; i < bgTiling.pathMap.layer.data.length; i++){
            for(let j = 0; j < bgTiling.pathMap.layer.data[i].length; j++){

                bgTiling.pathMap.replaceByIndex(bgTiling.pathMap.layer.data[i][j].index, 8, bgTiling.pathMap.layer.data[i][j].x, bgTiling.pathMap.layer.data[i][j].y, 1, 1);
            }
        }
        
        //if(repath != true){
            this.easystar.findPath(this.startX, this.startY, this.endX, this.endY, function(path){


                var i = 0;
                context.time.addEvent({
                    delay: 5,
                    callback: function(){

                        //console.log("callback 2");
                        //console.log(path.length);
                        
                        //console.log(path);

                        if(i < path.length){
                            
                            //console.log("i is > length");
                            //Loop through possibles
                            for(let j = 0; j < bgTiling.pathMap.layer.data.length; j++){
                                for(let k = 0; k < bgTiling.pathMap.layer.data[j].length; k++){

                                    if(bgTiling.pathMap.layer.data[j][k].x == path[i].x && bgTiling.pathMap.layer.data[j][k].y == path[i].y){

                                        //Draw the path
                                        bgTiling.pathMap.replaceByIndex(8, 38, path[i].x, path[i].y, 1, 1);
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
        

        this.easystar.calculate();
        //}
    
}