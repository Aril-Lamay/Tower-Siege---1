class Block{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,30,40,options);
        World.add(world, this.body);
    } 
    display(){
        var pos =this.body.position;
        stroke("black");
        strokeWeight("2");
        rectMode(CENTER);
        rect(pos.x, pos.y, 30, 40);
    }                                                                                 
}