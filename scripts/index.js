var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');


window.onload = function(){
    player.init();
    console.log('ahhhhh');
    animateCanvas();
}

var player = {
    body: [],
    init: function () {
        this.body.push(new this.PaddleSize(2,2));
    },
    PaddleSize: function (_x, _y) {
        return {
            x: _x,
            y: _y
        }
    },
    move: function () {
        switch(this.direction){
            case 'up':
                this.body[0].y+1
                break;
            case 'down':
                this.body[0].y-1
                break;
        }
    },
    drawPaddle: function () {
        ctx.beginPath();
        ctx.rect(this.body[0].x,this.body[0].y, 15, 100);
        ctx.fillStyle = '#000000';
        ctx.fill();
    }
    
}

function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    player.drawPaddle();
}

var frameCounter = 0;
var moveOnFrameCount = 6;
function animateCanvas() {
    if (frameCounter >= moveOnFrameCount) {

    }else {
        frameCounter++
    }
    draw();
    window.requestAnimationFrame(animateCanvas);
}
