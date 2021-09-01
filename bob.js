class Bob{
    constructor(x,y,r){
        var option={
            restitution:1,
            isStatic:false,
            friction:1,
            density:0.8
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,option);
        World.add(world,this.body);
    }
    display(){
        var bobpos=this.body.position;
       // push()
        //translate(bobpos.x,bobpos.y);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(bobpos.x,bobpos.y,this.r,this.r)
        //pop()
    }
}