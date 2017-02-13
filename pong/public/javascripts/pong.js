var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
var keys =[]

window.onload = function(){
    player1.init();
    player2.init();
    animateCanvas();

    document.body.addEventListener('keydown', function (event) {
        keys[event.keyCode] = true;
        console.log(keys);
        console.log(event)
    });
    document.body.addEventListener('keyup', function (event) {
        keys[event.keyCode] = false;
    });
}

var player1 = {
    body: [],
    init: function () {
        this.body.push(new this.Paddle(0,0));
    },
    Paddle: function (_x, _y) {
        return {
            x: _x,
            y: _y
        }
    },

    drawPaddle: function () {
        ctx.beginPath();
        ctx.rect(this.body[0].x,this.body[0].y, 15, 100);
        ctx.fillStyle = '#000000';
        ctx.fill();
    }

};
var player2 = {
    body: [],
    init: function () {
        this.body.push(new this.Paddle(785,0));
    },
    Paddle: function (_x,_y) {
        return{
            x: _x,
            y: _y
        }
    },
    drawPaddle: function () {
        ctx.beginPath();
        ctx.rect(this.body[0].x,this.body[0].y, 15, 100);
        ctx.fillStyle = '#000000';
        ctx.fill();
    }
}
var ball = {
    body: [],
    CreateBall: function (_x, _y) {
        return{
            x: _x,
            y: _y
        }
    },
    init: function () {

    }
};

function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    player1.drawPaddle();
    player2.drawPaddle();
}


function animateCanvas() {
    console.log('framerate')
        if(keys[38]){
            player1.body[0].y -= 3.5;
        }else if(keys[40]){
            player1.body[0].y += 3.5;
        }
        if(player1.body[0].y >= 500){
            player1.body[0].y = 500;
        }else if(player1.body[0].y <= 0){
            player1.body[0].y = 0;
        }
    draw();
    requestAnimationFrame(animateCanvas);
}

