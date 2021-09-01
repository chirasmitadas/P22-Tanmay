class Rope{
	//constructor(body1,body2,pointA,pointB){
    constructor(body1,body2,/*pointA*/pointB){
		this.pointB=pointB;
		var option={
			bodyA:body1, 
			bodyB:body2,
			pointB:this.pointB
		
		}
		console.log(option)
		this.body=Constraint.create(option);
		World.add(world,this.body);
	}
	display(){
			var pointA=this.body.bodyA.position;
			var pointB=this.body.bodyB.position	;
			var pointC = this.pointB;
			strokeWeight(2);
			line(pointA.x,pointA.y,pointB.x+pointC.x,pointB.y+pointC.y);	
	}

}
