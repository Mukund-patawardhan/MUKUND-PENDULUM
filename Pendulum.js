class Pendulum{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 70;
        this.height = 70;
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position;
        ellipse(pos.x,pos.y,this.width);
      }
}