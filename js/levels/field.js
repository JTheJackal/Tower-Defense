function Field(){
    
    
    this.scene = new Phaser.Class({
        
        Extends: Phaser.Scene,
        
        initialize:
        
        function Field (){
            
            Phaser.Scene.call(this, { key: 'field' });
        },
        
        preload: function(){
            
            this.load.image('fieldBG', 'js/gfx/sand_template.jpg');
            //this.load.tilemap('map', 'assets/tilemaps/field.csv', null, Phaser.Tilemap.CSV);
            
            controls    = new Controls();
            hero        = new Hero();
            
            hero.loadWalk(this);
        },
        
        create: function(){
            
            this.mazeGraphics   = this.add.graphics();
            this.moves          = [];
            this.maze           = [];
            this.tilesWide      = 20;
            this.tilesHigh      = 11;
            let posX            = 1;
            let posY            = 1;
            //let layer           = undefined;
            
            //  Because we're loading CSV map data we have to specify the tile size here or we can't render it
            //map = game.add.tilemap('map', 64, 64);

            //  Create our layer
            //layer = map.createLayer(0);
            
            //  Resize the world
            //layer.resizeWorld();
            
            for(let i = 0; i < this.tilesWide; i++){
                
                this.maze[i] = [];
                
                for(let j = 0; j < this.tilesHigh; j ++){
                    
                    this.maze[i][j] = 1;
                }
            }
            
            //Change grid locations to inaccessible
            this.maze[posX][posY] = 0;
            this.moves.push(posY + posY * this.tilesWide);
            
            //Figure out the grid
            while(this.moves.length){
                
                let possibleDirections = "";
                
                if(posX+2 > 0 && posX + 2 < this.tilesHigh - 1 && this.maze[posX + 2][posY] == 1){
                    
                    possibleDirections += "S";
                }
                
                if(posX-2 > 0 && posX - 2 < this.tilesHigh - 1 && this.maze[posX - 2][posY] == 1){
                    possibleDirections += "N";
                }
                
                if(posY-2 > 0 && posY - 2 < this.tilesWide - 1 && this.maze[posX][posY - 2] == 1){
                    possibleDirections += "W";
                }
                
                if(posY+2 > 0 && posY + 2 < this.tilesWide - 1 && this.maze[posX][posY + 2] == 1){
                    possibleDirections += "E";
                }
                
                if(possibleDirections){
                    
                    var move = Phaser.Math.Between(0, possibleDirections.length - 1);
                    
                    switch (possibleDirections[move]){
                            
                        case "N":
                            this.maze[posX - 2][posY] = 0;
                            this.maze[posX - 1][posY] = 0;
                            posX -= 2;
                            break;
                            
                        case "S":
                            this.maze[posX + 2][posY] = 0;
                            this.maze[posX + 1][posY] = 0;
                            posX += 2;
                            break;
                            
                        case "W":
                            this.maze[posX][posY - 2] = 0;
                            this.maze[posX][posY - 1] = 0;
                            posY -= 2;
                            break;
                            
                        case "E":
                            this.maze[posX][posY + 2] = 0;
                            this.maze[posX][posY + 1] = 0;
                            posY += 2;
                            break;
                    }
                    
                    this.moves.push(posY + posX * this.tilesWide);
                }else{
                    
                    let back = this.moves.pop();
                    posX = Math.floor(back / this.tilesWide);
                    posY = back % this.tilesWide;
                }
            }
            
            
            console.log(this.maze);
            
            //this.add.image(640, 360, 'fieldBG');
            
            hero.configWalk(this);
            hero.controlSprite(this);
            
            //Load the controls
            controls.handleMovement(this);
            controls.handleClick(this, 'facility');
            

                this.mazeGraphics.fillStyle(0x555555);
            
                for(var i = 0; i < this.tilesHigh; i++){
                    for(var j = 0; j < this.tilesWide; j++){
                        if(this.maze[i][j] == 1){
                            
                            this.mazeGraphics.fillRect(j * 64, i * 64, 64, 64);
                        }
                    }
                }
            
            var easystar = new EasyStar.js();
            easystar.setGrid(this.maze);
            easystar.setAcceptableTiles([0]);
            
            console.log("TILES LENGTH");
            console.log(this.tilesWide);
            console.log(this.maze);
            
            easystar.findPath(1, 1, 9, 1, function(path){
                
                var i = 0;
                this.time.addEvent({
                    delay: 5,
                    callback: function(){
                        if(i < path.length){
                            this.mazeGraphics.fillStyle(0x660000);
                            this.mazeGraphics.fillRect(path[i].x * 64 + 1, path[i].y * 64 + 1, 64 - 2, 64 - 2);
                            i++;
                        }
                        else{
                            //this.scene.start("PlayGame");
                        }
                    },
                    callbackScope: this,
                    loop: true
                });
            }.bind(this));
            
            
            easystar.calculate();
            
        },
        
        update: function (){
            
        }
    })
}