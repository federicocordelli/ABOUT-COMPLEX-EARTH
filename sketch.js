var karma = 0;
var txt = "I";
var i = 200;
let mySound;
let txtScroll;
var about = 0;
let scroll = 0;
var o1 = 0;
var o2 = 0;
var scrall = 0;
var colorText1 = '#a96e60';
var colorText2 = '#f56c63';








function preload() {

 soundFormats('mp3');
mySound = loadSound('addons/theshepherd_audio');

  titleFont = loadFont('addons/Daubenton.otf');
  corpusFont = loadFont('addons/Ortica-Light.otf');
  intlMed = loadFont('addons/SuisseIntl-Medium.otf');
  intlReg = loadFont('addons/SuisseIntl-Regular.otf');
  intlBol = loadFont('addons/SuisseIntl-Bold.otf');
  druk = loadFont('addons/DrukCond-Super.ttf');

cover = loadImage("addons/cover+titolo.png");
titus = loadImage("addons/titus.png");
susy = loadImage("addons/susy.png");





}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(displayWidth, displayHeight, WEBGL);
  noSmooth();




  //Button To START
  buttonST = createButton('HOME');
  buttonST.position(50, height-150);
  buttonST.mouseClicked(starty);
  buttonST.addClass('button');

  buttonMY = createButton('MYCENAE');
  buttonMY.position(50, (height-100));
  buttonMY.mouseClicked(starty1);
  buttonMY.addClass('button');

  buttonAB = createButton('ABOUT');
  buttonAB.position(50, (height-50));
  buttonAB.mouseClicked(starty2);
  buttonAB.addClass('button');




}

function draw() {
  var paragraphTextSize = (width/70);
  background('#443c33');
  console.log(scroll);



// image(cover, (width/2),(height/2), windowWidth, (windowWidth/16)*9);
push();
fill(colorText1);
textAlign(LEFT);
textSize(paragraphTextSize);
textFont(intlMed);
text("The storyline you are going to dive in \ninvolves two timesets, that we called, \nfor our own convenience,\nT1 (dystopian present on Earth) and T2 (Mycenae).\nIt’s 2033, and Earth is about to collapse \ndue to an invasive species of ants farmed \nby some visionary investors in order \nto initially contrast climate emergencies derived \nfrom intensive farming (cattle, poultry, etc.).", width/12,200);
pop();

push();
fill(colorText1);
textAlign(LEFT);
textSize(paragraphTextSize);
textFont(intlMed);
text("Susy Duval is an ex-astrophisic who has worked \nfor the Aeneas project. She was left on Earth, \nand now she's a lone survivor. \n\nTitus Van Houten lost his daughter and his wife\nduring the famine,\nand now he's trying to restart\na new life with his community.\n\nWhat will happen when these two characters will meet?", ((width/12)*7),200);
pop();

imageMode(CORNERS);
image(susy, (width-564)-(scrall*1.2),height-677,(width-200)-(scrall*1.2),height);
image(titus, (width-631.7)-(scrall*0.8),height-680.3,(width-200)-(scrall*0.8),height);


push();
noStroke();
fill("#232105");
rectMode(CORNERS);
rect(width,0,(windowWidth/2)+scrall,windowHeight);
pop();


push();
fill(colorText1);
textAlign(LEFT);
textSize(paragraphTextSize);
textFont(intlMed);
text("T1 shows the experience of mankind on a dying Earth, \nwhere entomophagy was thought \nto be the salvation for humanity.\nIn particular, we follow the adventures \nof two main characters, \nSusy Duval and Titan van Houten, \nwhose lives intertwined because of the secret \nspace mission (known as Aeneas) that was meant \nto save a part of humanity in case \nof any upcoming Apocalypse.", ((width/12)*7)+(scrall*1.2),200);
pop();


push();
fill(colorText2);
textAlign(LEFT);
textSize(paragraphTextSize);
textFont(intlBol);
text("THE AENEAS PROJECT", ((width/12)*7)-(scrall*0.3),height-50);
pop();


if (scroll>0 && scroll<windowHeight) {
scrall= scroll;
} else if (scroll <= 0 && about ===0) {

scrall = 0;
scroll=0;
}
 if (scroll >= windowHeight) {
   about=0;
   scrall= windowHeight;
   scroll = windowHeight;

}

}




function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  //resizeCanvas(displayWidth, displayHeight, WEBGL);

  return false;
}


function starty() {
  window.open("https://federicocordelli.github.io/HOME-COMPLEX/","_self");
}

function starty1() {
  window.open("https://federicocordelli.github.io/ABOUT-COMPLEX-MYCENAE/","_self");
}

function starty2() {
  window.open("https://federicocordelli.github.io/ABOUT-COMPLEX/","_self");
}




function mouseWheel(event) {
  print(event.delta);

  //move the square according to the vertical scroll amount
  txtScroll += event.delta;
  scroll += event.delta;

  //uncomment to block page scrolling
  //return false;
}
