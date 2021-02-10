const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16;
var polygon, ground;
var ground2;
var block101,block102,block103,block104,block105,block106,block107,block108,block109;
var slingshot;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,300,300,20);
    
    //first layer
    block1 = new Block(500,280);
    block2 = new Block(515,280);
    block3 = new Block(545,280);
    block4 = new Block(560,280);
    block5 = new Block(485,280);
    block6 = new Block(470,280);
    block7 = new Block(455,280);

    //second layer
    block8 = new Block(500,260);
    block9 = new Block(485,260);
    block10 = new Block(470,260);
    block11 = new Block(515,260);
    block12 = new Block(545,260);

    //third layer
    block13 = new Block(515,240);
    block14 = new Block(500,240);
    block15 = new Block(485,240);

    //fourth layer
    block16 = new Block(500,220);
    
    //2nd pyramid
    ground2 = new Ground(800,200,200,20);

    block101 = new Block(800,180);
    block102 = new Block(815,180);
    block103 = new Block(830,180);
    block104 = new Block(785,180);
    block105 = new Block(770,180);

    block106 = new Block(800,160);
    block107 = new Block(785,160);
    block108 = new Block(815,160);

    block109 = new Block(800,140);

    polygon = new Polygon(100,100);

    slingshot = new SlingShot(polygon.body,{x:100,y:100});
}
function draw(){
    background("maroon");
    Engine.update(engine);

    fill("grey");
    ground.display();

    fill("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("skyblue");
    block13.display();
    block14.display();
    block15.display();

    fill("brown");
    block16.display();

    //displaying the second layer
    fill("grey");
    ground2.display();

    fill("blue");
    block101.display();
    block102.display();
    block103.display();
    block104.display();
    block105.display();

    fill("skyblue");
    block106.display();
    block107.display();
    block108.display();

    fill("brown");
    block109.display();

    polygon.display();

    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}