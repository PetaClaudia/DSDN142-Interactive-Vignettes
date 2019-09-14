var x = 100,
  y = 100,
  angle1 = 0,
  angle2 = 90,
  segLength = 50;
  let noiseScale=0.02;
  var chip = 70;
  var chipX = 1280/3;
  var chipY = 100;
  var starsX = [];
  var starsY = [];
  var starsY2 = [];
  var starSize = [2, 5, 7];
  var startX = 0;
  var startY = 0;
  var cutting = false;
  var manX = 1280/2;
  var manY = -200;
  var manY2 = 600;
  var manSize = 100;
  var size = 1;
  var beam = false;
  var abd = false;
  var inUFO = false;
  var pressedOn = false;
  var buttonX = 780;
  var buttonY = 445;
  var sx = 780;
  var sy = 445;
  var ex = 200;
  var ey = 300;
  var slider_pos = 0;
  var cut_start_x, cut_start_y;
  var cut_end_x, cut_end_y;
  var is_cut, is_cutting;
  var knifeOn = true;
  var chipInserted = false;
  var slider1 = new Slider(780, 445, 300, 200);
  var stitchesX = [200, 250, 300];
  var stitchesY = [100, 100, 100];
  var stitchesShow = [true, true, true];

function setup_vignettes(vignettes){
  vignettes.scale_to_screen(true);
  vignettes.load_image("hand", "png");
  vignettes.load_sound("ComputerSciFi2", "wav");
  vignettes.load_sound("UFOLanding2", "wav");
  vignettes.load_sound("Strange_Days2", "wav");
  vignettes.load_sound("RippingHeadOff", "wav");
  vignettes.load_sound("CloseDoor", "wav");
//background(50);
  var i = 0;
  while(i<50){
    starsX[i] = random(width);
    starsY[i] = random(height/2);
    starsY2[i] = random(height/4);
    i++;
  }
}

function setup_scenes(){
  var scene1         = new Scene(scene1_draw);
  scene1.click       = scene1_click;
  scene1.key_pressed = scene1_keypress;
  scene1.mouse_released = scene1_mouserelease;
  scene1.mouse_pressed = scene1_mousepress;

  var scene2         = new Scene(scene2_draw);
  scene2.click       = scene2_click;
  scene2.key_pressed = scene2_keypress;
  scene2.mouse_pressed = scene2_mousePressed;
  scene2.mouse_released = scene2_mouseReleased;

  var scene3         = new Scene(scene3_draw);
  scene3.click       = scene3_click;
  scene3.key_pressed = scene3_keypress;
}



function scene1_draw(){
  background(50);
  stroke(200);
  fill(50);

  //stars
  var i = 0;
  while(i<starsX.length){
    for (var j = 0; j<starSize.length; j++){
      strokeWeight(random(starSize[j]));
    }
    point(starsX[i], starsY[i]);
    i++;
  }

strokeWeight(15);
  //roof
  beginShape();
  vertex(600, 430);
  vertex(835, 200);
  vertex(1070, 430);
  endShape();

  //house
  beginShape();
  vertex(700, 362);
  vertex(700, height-7.5);
  vertex(970, height-7.5);
  vertex(970, 362);
  endShape();

  //window
  fill(206, 193, 80);
  rect(740, 400, 80, 90, 10);

  //trees
  //1
  stroke(107, 103, 98);
  line(200, 380, 200, height);
  //branches top to bottom
  stroke(115, 186, 113);
  line(200, 380, 170, 410);
  line(200, 380, 230, 410);
  line(200, 420, 160, 460);
  line(200, 420, 240, 460);
  line(200, 460, 150, 510);
  line(200, 460, 250, 510);
  line(200, 500, 140, 560);
  line(200, 500, 260, 560);
  line(200, 540, 130, 610);
  line(200, 540, 270, 610);
  //2
  stroke(107, 103, 98);
  line(400, 460, 400, height);
  //branches top to bottom
  stroke(115, 186, 113);
  line(400, 460, 370, 490);
  line(400, 460, 430, 490);
  line(400, 500, 360, 540);
  line(400, 500, 440, 540);
  line(400, 540, 350, 590);
  line(400, 540, 450, 590);
  //3
  stroke(107, 103, 98);
  line(1180, 380, 1180, height);
  //branches top to bottom
  stroke(115, 186, 113);
  line(1180, 380, 1150, 410);
  line(1180, 380, 1210, 410);
  line(1180, 420, 1140, 460);
  line(1180, 420, 1220, 460);
  line(1180, 460, 1130, 510);
  line(1180, 460, 1230, 510);
  line(1180, 500, 1120, 560);
  line(1180, 500, 1240, 560);
  line(1180, 540, 1110, 610);
  line(1180, 540, 1250, 610);

  dx = x+(mouseX - x)*5;
  dy = y+(mouseY - y)*5;
  angle1 = atan2(dy, dx);
  x = 300;
  y = 200;

  if(mouseIsPressed && mouseX<820 && mouseX>740 && mouseY<490 &&mouseY>400){
    abd = true;
  }
  if (abd == true && inUFO == false){
    angle1 = 25;
    vignettes.play_sound("ComputerSciFi2", true);
    if (mouseX<x){
    }
    else{
      if(inUFO == false){
      slider1.update();
      slider1.draw();
      }
      else{}
      }

  }

  vignettes.play_sound("Strange_Days2", true);
  ufo(x, y, angle1);

}
function ufo(x, y, a) {
  push();
  fill(50);
  translate(x, y);
  rotate(a-90);
  stroke(255, 193, 124);
  ellipse(0, 0, 300, 70);
  arc(0, -40, 100, 60, 180, 0);
  if(inUFO == false){
    //beam
    fill(255, 247, 168, 60);
    stroke(255, 247, 168);
    triangle(0, 10, -300, 1300, 200, 1300);
    pop();
}
}

function Slider(sx, sy, ex, ey){

  this.pressedOn = false;
  this.buttonX = sx;
  this.buttonY = sy;
  this.sx = sx;
  this.sy = sy;
  this.ex = ex;
  this.ey = ey;

  this.update = function(){

    if(this.pressedOn == true){
      /*
      var m = (this.ey-this.sy)/(this.ex-this.sx);
      var pm = (-1/(m+0.0));

      var xIntercept = ((-m*mouseX)+mouseY+(pm*this.sx)-this.sy)/(pm-m+0.0);
      var yIntercept = m*(xIntercept - mouseX)+mouseY;

      this.buttonX = xIntercept;
      this.buttonY = yIntercept;
*/
      var ds = dist(mouseX, mouseY, this.sx, this.sy);

      var slider_pos = ds / dist(this.sx, this.sy, this.ex, this.ey);

      if(mouseY < min(this.sy, this.ey)){
        if(sy < ey){
          slider_pos = 0;
        }else{
          slider_pos = 1;
        }
      }
      if(mouseY > max(this.sy, this.ey)){
        if(sy < ey){
          slider_pos = 1;
        }else{
          slider_pos = 0;
        }
      }

      this.buttonX = lerp(this.sx, this.ex, slider_pos);
      this.buttonY = lerp(this.sy, this.ey, slider_pos);

    }

  }

  this.draw = function(){
    if (dist(mouseX, mouseY, x, y)<30){
      inUFO = true;
    }

    push();
    translate(this.buttonX, this.buttonY);
    rotate(-70);
    //translate(200, 60);
    scale(0.5)

    stroke(200);
    strokeWeight(manSize/6.66666667);
    ellipseMode (CENTER);
    fill(200);
    //head
      ellipse (0,0-manSize+manSize/10,manSize/2-manSize/10,manSize/2);

      //body
      ellipse(0,0,manSize/2,manSize+manSize/10);

      line (-manSize/4,-manSize/2+manSize/20,-manSize/2,+manSize/2.5); //left arm
      line (+manSize/4,-manSize/2+manSize/20,+manSize/2,+manSize/2.5); //right arm
      line (-manSize/5,+manSize/2.5,-manSize/5,+manSize+manSize/5); //left leg
      line (-manSize/10,+manSize+manSize/10+manSize/20,-manSize/5,+manSize+manSize/5); //left foot
      line (+manSize/5,+manSize/2.5,+manSize/5,+manSize+manSize/5); //right leg
      line (+manSize/5,+manSize+manSize/5,+manSize/3,+manSize+manSize/10+manSize/20); //right foot
      pop();

  }

  this.pressed = function(){
    console.log("HURRAY DUDE GOT CLICKED");
    if(mouseX > this.buttonX - 40 && mouseX < this.buttonX + 40 &&
      mouseY > this.buttonY - 45 && mouseY < this.buttonY + 45){
      this.pressedOn = true;
    }
  }

  this.released = function(){
     this.pressedOn = false;
       console.log("HURRAY DUDE GOT UN-CLICKED");
  }

}

function scene1_click(){
  console.log("scene1 clicked!");
}

function scene1_mousepress(){
  slider1.pressed();
}


function scene1_mouserelease(){
  slider1.released();

}

function scene1_keypress(){
  console.log("scene1 key pressed!");
}



function scene2_draw(){
  background(50);
  strokeWeight(10);
  stroke(200);
  //arm
  vignettes.draw_image("hand", width/2, height/2);

  if(chipInserted == false){
  //chip
  stroke(255, 193, 124);
  fill(50);
  rectMode(CENTER);
  rect(chipX, chipY, chip, chip, 10);
  line(chipX-(chip/3)+5, chipY, chipX-chip/3+5, chipY+chip/2);
  line(chipX, chipY, chipX, chipY+chip/2);
  line(chipX+(chip/3)-5, chipY, chipX+chip/3-5, chipY+chip/2);
  strokeWeight(15);
  point(chipX-chip/3+5, chipY);
  point(chipX, chipY);
  point(chipX+chip/3-5,chipY);
}
  if(knifeOn == false && mouseIsPressed && mouseX<chipX+35 && mouseX>chipX-35 && mouseY<chipY+35 && mouseY>chipY-35){
    chipX = chipX + (mouseX - chipX);
    chipY = chipY + (mouseY - chipY);
  }
  if (knifeOn == false && !mouseIsPressed && dist(chipX, chipY, cut_start_x+(cut_end_x-cut_start_x)/2, cut_start_y) < 100){
    chipInserted = true;
  }

  //cut
  if(is_cutting){
    vignettes.play_sound("RippingHeadOff", true);
    stroke(200, 0, 0);
    line(cut_start_x, cut_start_y, mouseX, cut_start_y);
  }
  else if(is_cut){
    fill(50);
    noStroke();
    rectMode(CORNER);
    rect(cut_start_x, cut_start_y, cut_end_x-cut_start_x, chip);
    strokeWeight(15);
    stroke(200, 0, 0);
    line(cut_start_x, cut_start_y, cut_end_x, cut_start_y);

  }
  //stitches
  for (var i =0; i< stitchesX.length; i++){
    if (stitchesShow[i] == true){
      stroke(200);
      strokeWeight(20 );
      noFill();
      bezier(stitchesX[i]-5, stitchesY[i]+25, stitchesX[i]+8, stitchesY[i]+15, stitchesX[i]+8, stitchesY[i]-15, stitchesX[i]-5, stitchesY[i]-25);
      if(chipInserted && mouseIsPressed && mouseX<stitchesX[i]+5 && mouseX>stitchesX[i]-5 && mouseY<stitchesY[i]+25 && mouseY>stitchesY[i]-25){
        stitchesX[i] = mouseX;
        stitchesY[i] = mouseY;
      }
      if (!mouseIsPressed && dist(stitchesX[i], stitchesY[i], cut_start_x+(cut_end_x-cut_start_x)/2, cut_start_y) < 100){
        stitchesX[i] = cut_start_x+(cut_end_x-cut_start_x)/4+(cut_end_x-cut_start_x)/4*i;
        stitchesY[i] = cut_start_y;
      }
    }
  }
  if(knifeOn){
    //knife
    push();
    x = x+(mouseX-x)/20;
    y = y+(mouseY-y)/20;

    stroke(209);
    fill(50);
    push();
    translate(x, y);
    rotate(-45);
    translate(-x,-y);
    beginShape();
    vertex(x, y);
    vertex(x+100, y-30);
    vertex(x+700, y-30);
    vertex(x+700, y+40);
    vertex(x+450, y+20);
    vertex(x+450, y+90);
    endShape(CLOSE);
    translate(0,0);
    pop();
    pop();
  }
}
function scene2_mousePressed(){
  if(mouseX<width/2 && mouseX>0 && mouseY<400 && mouseY>height/2-50){
    if(cut_start_x == null && cut_start_y == null){
      is_cut = false;
      is_cutting = true;
      cut_start_x = mouseX;
      cut_start_y = mouseY;
    }
  }
}

function scene2_mouseReleased(){
  if(mouseX<width/2 && mouseX>0 && mouseY<400 && mouseY>height/2-50){
    if(cut_end_x == null && cut_end_y == null){
      is_cut = true;
      is_cutting = false;
      cut_end_x = mouseX;
      cut_end_y = mouseY;
      knifeOn =false;
    }
  }
}

function cut(x, y){
}

function scene2_click(){
  console.log("scene2 clicked!", mouseX, mouseY);
}

function scene2_keypress(){
  console.log("scene2 key pressed!");
}

function scene3_draw(){
  background(50);
  stroke(200);
  //stars
  var i = 0;
  while(i<starsX.length){
    for (var j = 0; j<starSize.length; j++){
      strokeWeight(random(starSize[j]));
    }
    point(starsX[i], starsY2[i]);
    i++;
  }

  strokeWeight(15);
  //ground
  stroke(115, 186, 113);
  line(0, height/3, width, height/3)

  //path
  stroke(137, 120, 103);
  noFill();
  bezier(width/3, height, width/2, height-350, width/2+100, height-100, width-200, height/3);
  bezier(width-width/4, height, width/2, height-200, width/2+400, height-100, width-150, height/3);

  //house
  push();
    fill(50);
    translate(850, 20);
    scale(0.3);
    strokeWeight(15);
    //roof
    beginShape();
    vertex(600, 430);
    vertex(835, 200);
    vertex(1070, 430);
    endShape();

    //house
    beginShape();
    vertex(700, 362);
    vertex(700, height-7.5);
    vertex(970, height-7.5);
    vertex(970, 362);
    endShape();

    //window
    fill(206, 193, 80);
    rect(740, 400, 80, 90, 10);

    //trees
    //1
    stroke(107, 103, 98);
    line(200, 380, 200, height);
    //branches top to bottom
    stroke(115, 186, 113);
    line(200, 380, 170, 410);
    line(200, 380, 230, 410);
    line(200, 420, 160, 460);
    line(200, 420, 240, 460);
    line(200, 460, 150, 510);
    line(200, 460, 250, 510);
    line(200, 500, 140, 560);
    line(200, 500, 260, 560);
    line(200, 540, 130, 610);
    line(200, 540, 270, 610);
    //2
    stroke(107, 103, 98);
    line(400, 460, 400, height);
    //branches top to bottom
    stroke(115, 186, 113);
    line(400, 460, 370, 490);
    line(400, 460, 430, 490);
    line(400, 500, 360, 540);
    line(400, 500, 440, 540);
    line(400, 540, 350, 590);
    line(400, 540, 450, 590);
    //3
    stroke(107, 103, 98);
    line(1180, 380, 1180, height);
    //branches top to bottom
    stroke(115, 186, 113);
    line(1180, 380, 1150, 410);
    line(1180, 380, 1210, 410);
    line(1180, 420, 1140, 460);
    line(1180, 420, 1220, 460);
    line(1180, 460, 1130, 510);
    line(1180, 460, 1230, 510);
    line(1180, 500, 1120, 560);
    line(1180, 500, 1240, 560);
    line(1180, 540, 1110, 610);
    line(1180, 540, 1250, 610);

    push();
      translate(-2500, 0);
      stroke(107, 103, 98);
      line(200, 380, 200, height);
      //branches top to bottom
      stroke(115, 186, 113);
      line(200, 380, 170, 410);
      line(200, 380, 230, 410);
      line(200, 420, 160, 460);
      line(200, 420, 240, 460);
      line(200, 460, 150, 510);
      line(200, 460, 250, 510);
      line(200, 500, 140, 560);
      line(200, 500, 260, 560);
      line(200, 540, 130, 610);
      line(200, 540, 270, 610);
      //2
      translate(-500, 0);
      stroke(107, 103, 98);
      line(400, 460, 400, height);
      //branches top to bottom
      stroke(115, 186, 113);
      line(400, 460, 370, 490);
      line(400, 460, 430, 490);
      line(400, 500, 360, 540);
      line(400, 500, 440, 540);
      line(400, 540, 350, 590);
      line(400, 540, 450, 590);
    pop();
  pop();


  if (manY+120<height){
    vignettes.play_sound("ComputerSciFi2", true);
    vignettes.play_sound("Strange_Days2", true);
    manY = manY +(mouseY-manY)/100;
    stroke(200);
    ellipseMode (CENTER);
    fill(200);
    //head
    ellipse (manX,manY-90,40,50);

    //body
    ellipse(manX,manY,50,110);

    line (manX-25,manY-45,manX-50,manY+40); //left arm
    line (manX+25,manY-45,manX+50,manY+40); //right arm
    line (manX-20,manY+40,manX-20,manY+120); //left leg
    line (manX-10,manY+130,manX-20,manY+120); //left foot
    line (manX+20,manY+40,manX+20,manY+120); //right leg
    line (manX+20,manY+120,manX+30,manY+130); //right foot

    //beam
    fill(255, 247, 168, 60);
    stroke(255, 247, 168);
    triangle(width/2, -400, width/2-200, height+15, width/2+200, height+15);
  } //if <height
  else if(manY2+35>height/3){
    stroke(200);
    strokeWeight(manSize/6.66666667);
    ellipseMode (CENTER);
    fill(200);
    //if(manY+20>height/3){
    //head
      ellipse (manX,manY2-manSize+manSize/10,manSize/2-manSize/10,manSize/2);

      //body
      ellipse(manX,manY2,manSize/2,manSize+manSize/10);

      line (manX-manSize/4,manY2-manSize/2+manSize/20,manX-manSize/2,manY2+manSize/2.5); //left arm
      line (manX+manSize/4,manY2-manSize/2+manSize/20,manX+manSize/2,manY2+manSize/2.5); //right arm
      line (manX-manSize/5,manY2+manSize/2.5,manX-manSize/5,manY2+manSize+manSize/5); //left leg
      line (manX-manSize/10,manY2+manSize+manSize/10+manSize/20,manX-manSize/5,manY2+manSize+manSize/5); //left foot
      line (manX+manSize/5,manY2+manSize/2.5,manX+manSize/5,manY2+manSize+manSize/5); //right leg
      line (manX+manSize/5,manY2+manSize+manSize/5,manX+manSize/3,manY2+manSize+manSize/10+manSize/20); //right foot

      if(keyIsPressed){
        if(keyCode == 38){
          manY2 = manY2- 3;
          manX = manX+3.6;
          manSize = manSize-0.6;
        } //if keycode
        if(keyCode == 40){
          if(manY2+120<height){
            manY2 = manY2+3;
            manX = manX-3.6;
            manSize = manSize+0.6;
          } //if <height
        } //if keycode
      } //if keyIsPressed
      if(manY2+35<height/3+5){
        vignettes.play_sound("CloseDoor", true);
      }
    //} // if >height/3
  } //else if
  else{
    vignettes.play_sound("Strange_Days2", true);
    manSize = 0;
    x = x+(mouseX-x)/50;
    y = y+(mouseY-y)/20;
    //ufo

    scale(0.5);
    fill(50);
    push()
    translate(x, y);
    stroke(255, 193, 124);
    ellipse(0, 0, 300, 70);
    arc(0, -40, 100, 60, 180, 0);
    pop();
    if(y>height/3){
      y=height/3;
    }

    if(keyIsPressed && keyCode == 66){
      vignettes.play_sound("ComputerSciFi2", true);
      fill(255, 247, 168, 60);
      stroke(255, 247, 168);
      triangle(x, y, x-100, height/3*2, x+100, height/3*2);
    }
  }
} //function

function scene3_click(){
  console.log("scene3 clicked!");
}

function scene3_keypress(){
  console.log("scene3 key pressed!");
}
