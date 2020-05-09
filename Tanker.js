class Tanker {
  constructor(x, y, radius) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);

    };

    display(){
      var pos =this.body.position;
      strokeWeight= 7; 
      stroke("black")
      fill("green")
      circle(pos.x, pos.y, this.radius);
      pop();
  }
    };
