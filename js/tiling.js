function Tiling(level){
    
    this.level          = level;
    this.tileSize       = 64;
    this.csvMap         = undefined;
    this.map            = undefined;
    this.tileset        = undefined;
    this.layer          = undefined;
    this.grid           = importTilemap(level);
    
    //The map, tiles and layer for the enemy path
    this.pathMap        = undefined;
    this.pathTileset    = undefined;
    this.pathLayer      = undefined;
}

Tiling.prototype.loadTiles = function(context){
    
    let tilesPath   = undefined;
    let overlayPath = undefined;
    let csvPath     = undefined;
    
    //Determine which level the game is on and load the correct files accordingly.
    switch(this.level){
            
        case 'facility':
            
            tilesPath   = 'assets/gfx/tilesets/mixed_64x64.png';
            overlayPath = 'assets/gfx/tilesets/mixed_overlay_64x64.png';
            csvPath     = 'assets/tilemaps/field.csv';
            break;
    }
    
    context.load.image('tiles', tilesPath);
    context.load.image('overlay', overlayPath);
    context.load.tilemapCSV('map', csvPath);
    this.csvMap = context.load.tilemapCSV('map', csvPath);
}

Tiling.prototype.makeMap = function(context){
    
    this.map            = context.make.tilemap({ key: 'map', tileWidth: this.tileSize, tileHeight: this.tileSize });
    
    this.tileset        = this.map.addTilesetImage('tiles');
    
    this.layer          = this.map.createDynamicLayer(0, this.tileset, 0, 0);
    
    this.pathMap        = context.make.tilemap({ key: 'map', tileWidth: this.tileSize, tileHeight: this.tileSize });
    
    this.pathTileset    = this.pathMap.addTilesetImage('overlay');
    
    this.pathLayer      = this.pathMap.createDynamicLayer(0, this.pathTileset, 0, 0);
}

