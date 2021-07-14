class Dustbin extends baseClass {
  constructor(x, y ,w,h) {
 super(x,y,w,h)
    this.image=loadImage("sprites/dustbingreen.png")
  }
  display(){
    super.display();
    fill("red")
  }
}