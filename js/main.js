function importTilemap(levelName){
    
    let csvFilePath = undefined;
    let csvData     = undefined;
    
    switch(levelName){
            
        case "facility":
            
            csvFilePath = 'assets/tilemaps/field.csv';
            break;
    }
    
    jQuery.ajax({
        url: csvFilePath,
        async: false,
        success: function (csvd) {
            csvData = jQuery.csv.toArrays(csvd);
        },
        dataType: "text"
    });
    
    if(csvData != null && csvData != undefined){
        
        //Convert all array entries from strings to integers so they can be used properly as a tilemap
        for(let i = 0; i < csvData.length; i++){
            for(let j = 0; j < csvData[i].length; j++){
                
                csvData[i][j] = parseInt(csvData[i][j]);
            }
        }
    
        return csvData;
    }else{
        
        console.log("Unable to collect CSV from the given file");
        return false;
    }
}