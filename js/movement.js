/**
 * Created by raphael on 8/31/17.
 */

var xDir = 0.2;
var yDir = 0.4;

function ballMovement(){
    ball.position.x += xDir;
    ball.position.y += yDir;

    if(ball.position.x < -24){
        xDir = 0.2;

        if(Math.abs(playerPaddle.position.y - ball.position.y) <=5){
            yDir = -yDir + 0.5;
            playSound('assets/music/sounds/basshit.mp3');
        } else{
            //playerScore += playerScore;
            ball.position.x = ball.position.y = 0;
        }

    }
    else if( ball.position.x > 24 )
    {
        xDir = -0.2;
        //four.play();

        if(Math.abs(cpuPaddle.position.y - ball.position.y) <=5){
            yDir = -yDir + 0.5;
            playSound('assets/music/sounds/basshit.mp3');
        } else{
            //cpuScore += cpuScore;
            ball.position.x = ball.position.y = 0;
        }
    }

    if( ball.position.y < -14 && yDir < 0 )
    {
        yDir = 0.4;

        // if( Math.abs( paddle2.position.x - ball.position.x ) <= 2 )
        // {
        //     xDir = -xDir;
        //     //one.play();
        // }
        // else
        // {
        //     ball.position.x = ball.position.y = 0;
        //     //explode.play();
        // }
    }
    else if( ball.position.y > 14 && yDir > 0 )
    {
        yDir = -0.4;

        // if( Math.abs( paddle1.position.x - ball.position.x ) <= 2 )
        // {
        //     xDir = -xDir;
        //     two.play();
        // }
        // else
        // {
        //     ball.position.x = ball.position.y = 0;
        //     explode.play();
        // }
    }
}

var mx = 0; my = 0;
function userPaddleMovement(){
    mx = e.clientX;
    my = e.clientY;
}

function cpuPaddleMovement(){
    cpuPaddle.position.y = ball.position.y;
}

var mx = 0, my = 0;
function mouseMoveHandler(e)
{
    mx = e.clientX;
    my = e.clientY;
}

function mouseDownHandler(e)
{
}

function mouseUpHandler(e)
{
}
