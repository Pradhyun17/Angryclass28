class Slingshot{
   
    constructor(bodyA,pointB){

var options = {
    stiffness:0.03,
    length:10,
    bodyA:bodyA,
    pointB:pointB
}
this.pointB=pointB
this.Slingshot=Constraint.create(options)
World.add(world,this.Slingshot)
    }
    fly(){
        this.Slingshot.bodyA=null
    }
    display(){
        if(this.Slingshot.bodyA){
            push();
            strokeWeight(7)
            var pointA=this.Slingshot.bodyA.position;
            var pointB=this.pointB
            line(pointA.x,pointA.y,
                pointB.x,pointB.y)
          pop();
        }

    }
}