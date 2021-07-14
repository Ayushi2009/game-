class baseClass{
    constructor(x, y ,w,h) {
var options={
    isStatic:true,
    restitution:0.3,
    friction:0.5,
    density:1.2
    

}
this.body = Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body)


    }
display(){

    var pos =this.body.position;
    push()
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    pop()
}




}