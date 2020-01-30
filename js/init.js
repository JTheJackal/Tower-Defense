//Global vars
var controls;
var hero;
var tiling;
var enemies = [];

//Levels/Scenes
var settings    = new Settings();
var field       = new Field(this);
var facility    = new Facility(this);
var street      = new Street(this);

var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    parent: 'gameContainer',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [ facility.scene, field.scene, street.scene ]
};

var game = new Phaser.Game(config);