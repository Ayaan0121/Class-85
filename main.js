//canvas variable
canvas = document.getElementById("myCanvas");
//ctx variable
ctx=canvas.getContext("2d");
//rove size
roverWidth=100;
roverHeight=100;
//back ground image
marsIamge=["Mars_1.jpg","Mars_2.jpg","Mars_3.jpg","Mars_4.jpg","Mars_5.jpg"];
randomNum=Math.floor(Math.random() * 5);
console.log(randomNum);
bg_image= marsIamge[randomNum];
//rover image
rover_image="rover.png";
//position of rover
roverY=10;
roverX=10;
//function add
function add() {
    bg= new Image();
    bg.onload=uploadBackground;
    bg.src=bg_image;
    //for rover
    ro= new Image();
    ro.onload=uploadRover;
    ro.src=rover_image;
}
//define upload bg 
function uploadBackground() {
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}
//define upload ro
function uploadRover() {
    ctx.drawImage(ro,roverX,roverY,roverWidth,roverHeight);
}
//key down
window.addEventListener("keydown",myKeydown);
//key down fun
function myKeydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
 //up
    if (keyPressed=='38') {
        up();
        console.log("up");
        }

//down
if (keyPressed=='40') {
    down();
    console.log("down");
}

//left
if (keyPressed=='37') {
    left();
    console.log("left");
}

//right
if (keyPressed=='39') {
    right();
    console.log("right");
}
                    }

//up fun
function up() {
    if (roverY>=0) {
        roverY-=10;
        uploadBackground();
        uploadRover();

    }
}

//down fun
function down() {
    if (roverY<=600) {
        roverY+=10;
        uploadBackground();
        uploadRover();

    }
}

//left fun
function left() {
    if (roverX >= 0) {
        roverX-=10;
        uploadBackground();
        uploadRover();

    }
}

//right fun
function right() {
    if (roverX <= 800) {
        roverX+=10;
        uploadBackground();
        uploadRover();

    }
}