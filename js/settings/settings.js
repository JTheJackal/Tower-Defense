function Settings(){
    
    this.difficulty                 = "normal";
    
    //Enemy settings
    this.enemyCountMultiplier       = 1;
    this.enemyHealthMultiplier      = 1;
    this.enemySpeedMultiplier       = 1;
    
    //Tower settings
    this.towerStrengthMultiplier    = 1;
    this.towerSpeedMultiplier       = 1;
    
    //Hero settings
    this.heroHealthMultiplier       = 1;
    this.heroSpeedMultiplier        = 1;
    this.heroStrengthMultiplier     = 1;
}

//Setters

Settings.prototype.setDifficulty = function(tempDifficulty){
    
    this.difficulty = tempDifficulty;
    
    switch(this.difficulty){
            
            case "easy":
            
                //Enemy settings
                this.enemyCountMultiplier       = 0.75;
                this.enemyHealthMultiplier      = 0.75;
                this.enemySpeedMultiplier       = 0.75;

                //Hero settings
                this.heroHealthMultiplier       = 1.5;
                this.heroSpeedMultiplier        = 1.5;
                this.heroStrengthMultiplier     = 1.5;

                break;
            
            case "normal":
            
                //Enemy settings
                this.enemyCountMultiplier       = 1;
                this.enemyHealthMultiplier      = 1;
                this.enemySpeedMultiplier       = 1;

                //Tower settings
                this.towerStrengthMultiplier    = 1;
                this.towerSpeedMultiplier       = 1;

                //Hero settings
                this.heroHealthMultiplier       = 1;
                this.heroSpeedMultiplier        = 1;
                this.heroStrengthMultiplier     = 1;
                break;
            
            case "hard":
            
                //Enemy settings
                this.enemyCountMultiplier       = 2;
                this.enemyHealthMultiplier      = 1.5;
                this.enemySpeedMultiplier       = 1.5;

                break;
    }
}