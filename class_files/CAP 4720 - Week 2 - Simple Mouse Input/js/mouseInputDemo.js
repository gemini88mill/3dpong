	var renderer;
	var scene;
	var camera;
	var cube;
	
	function init()
	{
		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera(
		// frustum vertical view         aspect ratio							 frustum near plane     frustum far plane
			45,                          window.innerWidth / window.innerHeight, 0.1,                   1000 );

		setupRenderer();
		setupCamera();
		
		// Main code here.
		createAndAddSpotlight();
		createAndAddCube();



		
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
		camera.position.y = 10;
		camera.position.z = 10;
		camera.lookAt( scene.position );
	}
	
	function render()
	{
		cube.position.x = ( mx / window.innerWidth ) * 25 - 13;
		
		
		// Request animation frame
		requestAnimationFrame( render );
		
		// Call render()
		renderer.render( scene, camera );
	}
	
	function createAndAddSpotlight()
	{
		var spotLight;

        spotLight = new THREE.SpotLight( 0xffffff );
        spotLight.position.set( 10, 20, 20 );
        spotLight.shadowCameraNear = 20;
        spotLight.shadowCameraFar = 50;
        spotLight.castShadow = true;
        scene.add(spotLight);
	}
	
	function createAndAddCube()
	{
        var cubeGeometry = new THREE.BoxGeometry(6, 4, 6);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 'red'});
        cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.castShadow = true;
        scene.add(cube);
	}
	
	window.onload = init;

	// Mouse code below
	
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
	