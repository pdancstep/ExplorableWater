function MakeAtom() {
  this.x = random(0,width);
  this.y = random(0,height);

  this.vx = random(-7,7)
  this.vy = random(-7,7)

  this.vantage = floor(random(5))

  this.tossUp
  this.totalVelocity

  this.update = function(){

    this.tossUp = random()
    if(this.tossUp<.3){
      this.vx += random(-7,7)
      this.vy += random(-7,7)
    
      this.totalVelocity = sqrt((this.vx*this.vx)+(this.vy*this.vy))

      if(this.totalVelocity>10){
        this.vx *= 10/this.totalVelocity
        this.vy *= 10/this.totalVelocity
      }

    }

    


    this.x += (this.vx*(percent+.1))
    this.y += (this.vy*(percent+.1))
    if(this.x<-50||this.x>(width+50)){
      this.vx *= -1
    }
    if(this.y<-50||this.y>(height+50)){
      this.vy *= -1
    }

  }

  this.display = function(){
    if(this.vantage>=0&&this.vantage<1){
      image(frame1,this.x,this.y,30,30)
    }else if(this.vantage>=1&&this.vantage<2){
      image(frame2,this.x,this.y,30,30)
    }else if(this.vantage>=2&&this.vantage<3){
      image(frame3,this.x,this.y,30,30)
    }else if(this.vantage>=3&&this.vantage<4){
      image(frame4,this.x,this.y,30,30)
    }else if(this.vantage>=4&&this.vantage<5){
      image(frame5,this.x,this.y,30,30)
    }

  }

}

