/**
 * Created by raphael on 8/25/17.
 */

var renderer;
var scene;
var camera;

function init()
{
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        // frustum vertical view         aspect ratio							 frustum near plane     frustum far plane
        75,                          window.innerWidth / window.innerHeight, 0.1,                   1000 );

    setupRenderer();
    setupCamera();

    // Main code here.




    // Output to the stream
    document.body.appendChild( renderer.domElement );

    // Call render
    render();
}

function setupRenderer()
{
    renderer = new THREE.WebGLRenderer();
    //						color     alpha
    renderer.setClearColor( 0x000000, 1.0 );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMapEnabled = true;
}

function setupCamera()
{
    camera.position.x = 0;
    camera.position.y = -30;
    camera.position.z = 25;
    camera.lookAt( scene.position );
}

function render()
{
    //ballMovement();


    // Request animation frame
    requestAnimationFrame( render );

    ballMovement();
    cpuPaddleMovement();
    playerPaddle.position.y = ( mx / window.innerWidth ) * 25 - 13;


    // Call render()
    renderer.render( scene, camera );
}


window.onload = init();