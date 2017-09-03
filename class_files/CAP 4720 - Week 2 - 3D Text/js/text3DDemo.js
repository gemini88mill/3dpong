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
		createAndAddSpotlight();
	
		// Main code here.
		updateScore();
		
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
		
		if( Key.isDown( Key.A ) )
		{
			if( scoreValue > 0 )
			{
				scoreValue--;
				updateScore();
			}
		}
		if( Key.isDown( Key.D ) )
		{
			scoreValue++;
			updateScore();
		}
	
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
	
	var scoreObject = null;
	var scoreValue = 0;
	function updateScore()
	{
		if( scoreObject != null )
		{
			scene.remove( scoreObject );
		}
		
		var scoreString = "" + scoreValue;
		
		var scoreObjectGeometry = new THREE.TextGeometry( scoreString,
		{
			size: 2,
			height: 0.4,
			curveSegments: 10,
			bevelEnabled: false
		});
		
		var scoreObjectMaterial = new THREE.MeshLambertMaterial({color:0xFF0022});
		
		scoreObject = new THREE.Mesh( scoreObjectGeometry, scoreObjectMaterial );
		scoreObject.position.x = 0;
		scoreObject.position.y = 0;
		scoreObject.position.z = 0;
		scoreObject.rotation.x = 25 * Math.PI / 180;
		scene.add( scoreObject );
	}
	
	window.onload = init;

