/**
 * Created by raphael on 8/31/17.
 */

var xDir = 0.2;
var yDir = 0.4;

function ballMovement(){
    ball.position.x += xDir;
    ball.position.y += yDir;

    if(ball.position.x < -25){
        xDir = 0.2;
    }
    else if( ball.position.x > 25 )
    {
        xDir = -0.2;
        //four.play();
    }

    if( ball.position.y < -15 && yDir < 0 )
    {
        yDir = 0.4;

        if( Math.abs( paddle2.position.x - ball.position.x ) <= 2 )
        {
            xDir = -xDir;
            //one.play();
        }
        else
        {
            ball.position.x = ball.position.y = 0;
            //explode.play();
        }
    }
    else if( ball.position.y > 15 && yDir > 0 )
    {
        yDir = -0.4;

        if( Math.abs( paddle1.position.x - ball.position.x ) <= 2 )
        {
            xDir = -xDir;
            two.play();
        }
        else
        {
            ball.position.x = ball.position.y = 0;
            explode.play();
        }
    }
}

var mx = 0; my = 0;
function userPaddleMovement(){
    mx = e.clientX;
    my = e.clientY;
}

function cpuPaddleMovement(){
    cpuPaddle.position.y += yDir;
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
