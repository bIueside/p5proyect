
var f1 = false;
var f2 = false;
var f3 = false;
var f4 = false;
var f5 = false;
var f6 = false;
var f7 = false;
var f8 = false;

function preload (){
    fuente1 = loadFont("font/Chicha.ttf");
  }


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
   
    textSize(50);
  }
  
  function draw() {

    background("black"); 

    stroke("white");
    strokeWeight(2);
    line(900,300, 940, 300);
    line(950,300, 990, 300);
    line(1000,300, 1040, 300);
    line(1090,300, 1050, 300);
    line(1170,300, 1210, 300);
    line(900,400, 940, 400);
    line(950,400, 990, 400);
    line(1000,400, 1040, 400);
    line(1050,400, 1090, 400);
    line(1100,400, 1140, 400);
    line(1150,400, 1190, 400);
    line(1200,400, 1240, 400);
  
    

    stroke("white");
    strokeWeight(0);
    
    rect(400, 300, 5, 5);
    rect(390, 290, 5, 5);
    rect(380, 280, 5, 5);
    rect(370, 280, 5, 5);
    rect(360, 280, 5, 5);
    rect(350, 290, 5, 5);
    rect(340, 300, 5, 5);
    rect(340, 310, 5, 5);
    rect(340, 320, 5, 5);
    rect(350, 330, 5, 5);
    rect(360, 340, 5, 5);
    rect(370, 350, 5, 5);
    rect(380, 360, 5, 5);
    rect(390, 370, 5, 5);
    rect(400, 380, 5, 5);
    rect(410, 390, 5, 5);
    rect(420, 380, 5, 5);
    rect(430, 370, 5, 5);
    rect(440, 360, 5, 5);
    rect(450, 350, 5, 5);
    rect(460, 340, 5, 5);
    rect(470, 330, 5, 5);
    rect(480, 320, 5, 5);
    rect(480, 310, 5, 5);
    rect(480, 300, 5, 5);
    rect(470, 290, 5, 5);
    rect(460, 280, 5, 5);
    rect(450, 280, 5, 5);
    rect(440, 280, 5, 5);
    rect(430, 290, 5, 5);
    rect(420, 300, 5, 5);
    rect(410, 310, 5, 5);

    rect(640, 320, 5, 5);
    rect(645, 310, 5, 5);
    rect(650, 300, 5, 5);
    rect(655, 290, 5, 5);
    rect(660, 280, 5, 5);
    rect(665, 270, 5, 5);
    rect(670, 260, 5, 5);
    rect(675, 250, 5, 5);
    rect(680, 240, 5, 5);
    rect(685, 230, 5, 5);
    rect(675, 225, 5, 5);
    rect(670, 235, 5, 5);
    rect(665, 245, 5, 5);
    rect(660, 255, 5, 5);
    rect(655, 265, 5, 5);
    rect(650, 275, 5, 5);
    rect(645, 285, 5, 5);
    rect(640, 295, 5, 5);
    rect(635, 305, 5, 5);
    rect(630, 315, 5, 5);
    rect(625, 325, 5, 5);
    rect(620, 335, 5, 5);
    rect(615, 345, 5, 5);
    rect(610, 355, 5, 5);
    rect(605, 365, 5, 5);
    rect(600, 375, 5, 5);
    rect(590, 370, 5, 5);
    rect(580, 365, 5, 5);
    rect(575, 375, 5, 5);
    rect(570, 385, 5, 5);
    rect(565, 395, 5, 5);
    rect(560, 405, 5, 5);
    rect(555, 415, 5, 5);
    rect(550, 425, 5, 5);
    rect(635, 330, 5, 5);
    rect(630, 340, 5, 5);
    rect(625, 350, 5, 5);
    rect(620, 360, 5, 5);
    rect(615, 370, 5, 5);
    rect(610, 380, 5, 5);
    rect(620, 385, 5, 5);
    rect(630, 390, 5, 5);
    rect(625, 400, 5, 5);
    rect(620, 410, 5, 5);
    rect(615, 420, 5, 5);
    rect(610, 430, 5, 5);
    rect(605, 440, 5, 5);
    rect(600, 450, 5, 5);
    rect(590, 455, 5, 5);
    rect(580, 460, 5, 5);
    rect(570, 455, 5, 5);
    rect(560, 450, 5, 5);
    rect(550, 445, 5, 5);
    rect(550, 435, 5, 5);

    
    if (f1 == true) {
        fill(247, 60, 161);
        textFont(fuente1);
        text("A", 905, 290);
        fill(249, 66, 17);
        textFont(fuente1);
        text("A", 1105, 390);
        fill(48, 206, 46);
        textFont(fuente1);
        text("A", 1005, 390);
      }

    if (f2 == true) {
        fill(48, 206, 46);
        textFont(fuente1);
        text("M", 950, 290);
      }
    
    if (f3 == true){
            fill(211, 243, 46);
            textFont(fuente1);
            text("O", 1000, 290);
            fill(249, 66, 17);
            textFont(fuente1);
            text("O", 1200, 390);
        }

    if (f4 == true){
            fill(249, 66, 17);
            textFont(fuente1);
            text("R", 1050, 290);
            fill(211, 243, 46);
            textFont(fuente1);
            text("R", 950, 390);
        }

    if (f5 == true){
            fill(247, 60, 161);
            textFont(fuente1);
            text("Y", 1175, 290);
        }

    if (f6 == true){
            fill(48, 206, 46);
            textFont(fuente1);
            text("T", 905, 390);
        }

    if (f7 == true){
        fill(247, 60, 161);
        textFont(fuente1);
            text("B", 1055, 390);
        }
    
    if (f8 == true){
        fill(211, 243, 46);
        textFont(fuente1);
            text("J", 1160, 390);
        }



    }

function keyPressed() {
        if (key == 'a' || key == 'A') {
          f1 = !f1;  
        }

        if (key == 'm' || key == 'M') {
          f2 = !f2;
        }
      
        if (key == 'o' || key == 'O') {
          f3 = !f3;
        }

          if (key == 'r' || key == 'R') {
          f4 = !f4;
        }

        if (key == 'y' || key == 'Y') {
            f5 = !f5;  
          }
  
        if (key == 't' || key == 'T') {
            f6 = !f6;
          }
        
        if (key == 'j' || key == 'J') {
            f8 = !f8;
          }
  
        if (key == 'b' || key == 'B') {
            f7 = !f7;
          }
  



      }
        
    
  

  
  