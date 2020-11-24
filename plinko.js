class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic: false,
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = 10;

        World.add(world,this.body);
    }

    display(){
        
    }
}