//Global vars
var controls;
var hero;

//Levels/Scenes
var field       = new Field(this);
var facility    = new Facility(this);
var street      = new Street(this);

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'gameContainer',
    scene: [ field.scene, facility.scene, street.scene ]
};

var game = new Phaser.Game(config);