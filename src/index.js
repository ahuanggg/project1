"use strict";
const canvasWidth = 700, canvasHeight = 600;
let ctx;

window.onload = init;

//user controlling slides and buttons for values




let n = 50;
let c = 7;
let color, gColor, rColor, bColor, x, y, x2, y2, a, r, aDegrees;
let count = 0;
let size = 500; 
let divergence = 100;
let preset = 1;

function init(){
    ctx = canvas.getContext("2d");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.fillRect(0,0,canvasWidth,canvasHeight,);
    canvas.onclick = canvasClicked;
    loop();
    setup();
    
}

function setup() {
    document.querySelector('#sizeSlider').onchange = function(e){
        size = e.target.value;
    };
    document.querySelector('#sizeSlider').oninput = function(e){
        document.querySelector('#sizeOutput').innerHTML = e.target.value;
    };

    document.querySelector('#nSlider').onchange = function(e){
        n = e.target.value;
    };
    document.querySelector('#nSlider').oninput = function(e){
        document.querySelector('#nOutput').innerHTML = e.target.value;
    };

    document.querySelector('#cSlider').onchange = function(e){
        c = e.target.value;
    };
    document.querySelector('#cSlider').oninput = function(e){
        document.querySelector('#cOutput').innerHTML = e.target.value;
    };

    document.querySelector('#dValue').onchange = function(e){
        divergence = e.target.value;
        console.log(divergence);
    };

    document.querySelector('#colorVal').onchange = function(e){
        preset = e.target.value;
        console.log(document.querySelector('#colorVal').value);
    };
    
}

function loop(){

    setTimeout(loop,1000/12);
    ctx.save();
    ctx.fillStyle = 'black';
    ctx.globalAlpha = 1/12;
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
    ctx.restore();

}

function firework(x,y){

    a = n * ah6595LIB.dtr(divergence);
    r = c * Math.sqrt(n);

    x2 = r * Math.cos(a) + x;
    y2 = r * Math.sin(a) + y;  

    if (preset == 1){
        // independence day
        aDegrees = (n * divergence) % 251;
        if (aDegrees < 83) {
            rColor = 250;
            gColor = 250;
            bColor = 250;
        }
        else if( aDegrees > 83 && aDegrees < 166){
            rColor = 250;
            gColor = 0;
            bColor = 0;
        }
        else{
            rColor = 0;
            gColor = 0;
            bColor = 250;
        }
        color = `rgb(${rColor},${gColor},${bColor})`;
    }

    if (preset == 2){
        // christmas
        aDegrees = (n * divergence) % 251;
        if (aDegrees < 125) {
            rColor = 0;
            gColor = 250;
            bColor = 0;
        }
        else {
            rColor = 250;
            gColor = 0;
            bColor = 0;
        }
        color = `rgb(${rColor},${gColor},${bColor})`;
    }

    if (preset == 3){
        // rainbow color
        aDegrees = (n * divergence) % 361;
        color = `hsl(${aDegrees},100%,50%)`;
    }

    if (preset == 4){
        // halloween
        aDegrees = (n * divergence) % 256;
        if (aDegrees < 125) {
            rColor = 50;
            gColor = 50;
            bColor = 50;
        }
        else {
            rColor = 250;
            gColor = 70;
            bColor = 0;
        }
        color = `rgb(${rColor},${gColor},${bColor})`;
    }

    if (preset == 5){
        // new years
        rColor = Math.random() * (250 - 100) + 100;
        gColor = Math.random() * (250 - 100) + 100;
        bColor = Math.random() * (250 - 100) + 100;
        color = `rgb(${rColor},${gColor},${bColor})`;
    }

    if (preset == 6){
        //valinetines pink and redish
        aDegrees = (n * divergence) % 256;
        color = `rgb(${aDegrees},0,${aDegrees})`;
    }

    if (preset == 7){
            // straight green shades
        aDegrees = (n * divergence) % 256;
        color = `rgb(0,${aDegrees},0)`;
    }

    if (preset == 8){
        // straight red
        aDegrees = (n * divergence) % 256;
        color = `rgb(${aDegrees},0,0)`;
    }

    if (preset == 9){
            //thanksgiving
        aDegrees = (n * divergence) % 256;
        if (aDegrees < 125) {
            rColor = 100;
            gColor = 60;
            bColor = 0;
        }
        else {
            rColor = 250;
            gColor = 70;
            bColor = 0;
        }
        color = `rgb(${rColor},${gColor},${bColor})`;
    }

    ah6595LIB.drawCircle(ctx,x2,y2,3,color);
    n++;
    
}

function canvasClicked(e){
    let rect = e.target.getBoundingClientRect();
    let mouseX = e.clientX - rect.x;
    let mouseY = e.clientY - rect.y;
    x = mouseX;
    y = mouseY;
    console.log(mouseX,mouseY);
    //n = ah6595LIB.getRandomInt(3,nMax);
    //c = ah6595LIB.getRandomInt(3,cMax);
    //divergence = ah6595LIB.getRandomInt(10,dMax);
    //good numbers n = 3 c = 5 d = 10;
    // n changes the starting position kinda 100 is limit 
    // c is the disperceness of the dots 15 is limit
    // d is the design 1000, 750, 500, 250, 100, 50, 25, 10 is normal
    // n = 3;
    // c = 8;
    
    n = document.querySelector('#nSlider').value;
        console.log(n);

    for (let i = 0; i < size ; i++){
        firework(x,y);
    }
}

