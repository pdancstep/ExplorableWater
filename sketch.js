function preload() {
	frame1 = loadImage('H200000.png')
	frame2 = loadImage('H200007.png')
	frame3 = loadImage('H200015.png')
	frame4 = loadImage('H200020.png')
	frame5 = loadImage('H200029.png')
	

	bg = loadImage('Background.jpg')

}


var currentFrame = 1

var dropH = 200
var dropDragging = false

var percent

var boilingAlpha = 0
var freezingAlpha = 0
var tempRescale

var myAtoms = []

function setup() {
  createCanvas(windowWidth, windowHeight)

  for(i=0;i<250;i++){
  	myAtoms.push(new MakeAtom())
  }

}





function draw() {

	window.scrollTo(0, 0);

	image(bg,0,0,width,height)

	percent = map(dropH,50,width-50,0,1)
	boilingAlpha = map(dropH,width-90,width-50,0,255)
	freezingAlpha = map(dropH,90,50,0,255)


	for(i=0;i<myAtoms.length;i++){
		myAtoms[i].update()
		myAtoms[i].display()

	}







	//lower rectangle
	noStroke()
	fill(32,33,63)
	rect(0,height-100,width,100)

	//horizontal scale
	stroke(255)
	strokeWeight(4)
	line(15,height-15,width-15,height-15)
	noStroke()
	fill(255)

	//arrowheads
	beginShape()
    	vertex(5,height-15)
    	vertex(20,height-25)
    	vertex(20,height-5)
    endShape(CLOSE)

   	beginShape()
    	vertex(width-5,height-15)
    	vertex(width-20,height-25)
    	vertex(width-20,height-5)
    endShape(CLOSE)

    stroke(255)
    //hashes
    for(i=1;i<7;i++){
    	line((20+(width-20)/8)*i,height-20,(20+(width-20)/8)*i,height-10)
    }

	noStroke()
	fill(255*percent,0,255*(1-percent))
	//ellipse(200,dropH,25,25)

	push()

		translate(dropH,height-60)

		beginShape()
    	vertex(0,0)
    	vertex(-25,30)
    	vertex(-25,60)
    	vertex(25,60)
    	vertex(25,30)
    	endShape(CLOSE)

    pop()

    //temperature readout
    textAlign(CENTER)
  	textSize(30)
	text(nfc(percent*100,0)+"°C",dropH,height-70)


    //textbox for BOILING
    stroke(255,0,0,boilingAlpha)
    fill(32,33,63,boilingAlpha)
    rect(10,height-200,width-20,90,10)

    fill(255,boilingAlpha)
    noStroke()
    textAlign(LEFT)
    textSize(20)
    text("BOILING POINT:\nAny faster and these molecules will fly apart into steam.", 20, height-195, width-25,90)

    //textbox for FREEZING
    stroke(0,0,255,freezingAlpha)
    fill(32,33,63,freezingAlpha)
    rect(10,height-200,width-20,90,10)

    fill(255,freezingAlpha)
    noStroke()
    textAlign(LEFT)
    textSize(20)
    text("FREEZING POINT:\nAny slower and these molecules will stick together, forming ice.", 20, height-195, width-25,90)


	if(dropDragging){
		if(mouseX>50&&mouseX<(width-50)) {
			dropH = mouseX
		}
	}





}


function touchStarted() {



  if(mouseX>(dropH-25)&&mouseX<(dropH+25)&&mouseY>(height-60)){
  	dropDragging=true
  }




}

function touchMoved() {
	return false
}

function touchEnded() {

  	dropDragging = false


}