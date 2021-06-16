class Hero{
  constructor(x,y,r){
  
  var options={
  isStatic:false,
  restitution:0,
  friction:1,
  density:0.2
  
  }
  this.x=x;
  this.y=y;
  this.r=r;
  this.image=loadImage("Superhero-01.png");
  this.body=Bodies.circle(this.x,this.y,this.r/2,options);
  World.add(world,this.body);
  }  
  display(){
  
      var posm=this.body.position;
      push();
      translate(posm.x,posm.y);
     imageMode(CENTER);
      image(this.image,0,0,this.r,this.r);
     pop();
      }   
  }