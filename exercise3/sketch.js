function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
//    canvas.style('z-index', '-1');
//    background(175);
    
    
}

function mousePressed() {
    
    clear(); 
    
}



function draw() {
if (mouseIsPressed) {
line(pmouseX, pmouseY, mouseX, mouseY  );
        
    
    }
    
    
    
}