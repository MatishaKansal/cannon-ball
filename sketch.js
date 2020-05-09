
var ground;
var tanker;
var shootingball
// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    tanker = new Tanker(120, 339, 100);
    //  the shooting ball and the bubble balls.

}

function draw() {
    background(255);
    Engine.update(engine);
    ground.display();
    tanker.display();
    shootingball.display();
}


function keyReleased() {
    
    // Call the shoot method for the cannon.
}