class Block{
  constructor(x,y,width,height){
    var options={
    restitution:0.4,
    density:1.0

    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  }
display(){
  var poss = this.body.position;
  var angle = this.body.angle;
  push();
  translate(poss.x,poss.y)
  rotate(angle)
rectMode(CENTER)
strokeWeight(4)
stroke(0)
fill("cyan");
  rect(0,0,this.width,this.height);
  pop();
}

}