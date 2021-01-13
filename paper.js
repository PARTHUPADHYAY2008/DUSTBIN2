class paper {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':0,
          'friction':0.2,
          'density':1.0
      }
      this.paper = loadImage("paper.png")
      this.x=x
    this.y=y
    this.r=r
      this.body = Bodies.circle(this.x, this.y, this.r/2 , options);
    
      
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
    
      push();
      translate(pos.x, pos.y);
    
      imageMode(CENTER);
      fill(255);
      image( this.paper , 0, 0, this.r, this.r);
      pop();
    }
  };