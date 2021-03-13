class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        this.image=loadImage('images/paper.png')
        World.add(world,this.body);
    }
    display(){
       fill("blue")
       var angle=this.body.angle
       push();
       var pos=this.body.position;
       translate(angle);
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,this.r);
       pop();
    }
}