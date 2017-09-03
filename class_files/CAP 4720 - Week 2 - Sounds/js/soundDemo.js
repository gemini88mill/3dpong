	var renderer;
	var scene;
	var camera;
	
	function init()
	{
		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera(
		// frustum vertical view         aspect ratio							 frustum near plane     frustum far plane
			45,                          window.innerWidth / window.innerHeight, 0.1,                   1000 );

		setupRenderer();
		setupCamera();
		
		// Main code here.
		loadSounds();
		
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
		camera.position.y = 0;
		camera.position.z = 13;
		camera.lookAt( scene.position );
	}
	
	function render()
	{
		
		if( Key.isDown( Key._1 ) )
		{
			one.play();
		}
		if( Key.isDown( Key._2 ) )
		{
			two.play();
		}
		if( Key.isDown( Key._3 ) )
		{
			three.play();
		}
		if( Key.isDown( Key._4 ) )
		{
			four.play();
		}
		if( Key.isDown( Key._5 ) )
		{
			five.play();
		}
		
		// Request animation frame
		requestAnimationFrame( render );
		
		// Call render()
		renderer.render( scene, camera );
	}

	var explode, one, two, three, four, five;
	function loadSounds()
	{
		explode = new Audio("sounds/Explosion.mp3");
		one = new Audio("sounds/1.mp3");
		two = new Audio("sounds/2.mp3");
		three = new Audio("sounds/3.mp3");
		four = new Audio("sounds/4.mp3");
		five = new Audio("sounds/5.mp3");
	}

	window.onload = init;

