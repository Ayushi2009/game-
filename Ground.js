class Ground{
  constructor(x,y,width,height) {
        var options = {
            isStatic: true,
            restitution:0.3,
            friction:0.5,
            density:1.2 
        }
        this.Ground = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.Ground);
      }
      display(){
        var pos =this.Ground.position;
        push()
        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y, this.width, this.height);
        pop()
      }
    }


