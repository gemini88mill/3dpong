/**
 * Created by raphael on 8/31/17.
 */

function createPaddles(){
    var geometry = new THREE.BoxGeometry( 1, 5, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh(geometry, material);
    return cube;
}

function createBall(){
    var geometry = new THREE.SphereGeometry( 1, 32, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    var sphere = new THREE.Mesh( geometry, material );

    return sphere;
}


function createFieldBorderView() {
    var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(-25, 15, 0));
    geometry.vertices.push(new THREE.Vector3(25, 15, 0));
    geometry.vertices.push(new THREE.Vector3(25, -15, 0));
    geometry.vertices.push(new THREE.Vector3(-25, -15, 0));
    geometry.vertices.push(new THREE.Vector3(-25, -15, 0));
    geometry.vertices.push(new THREE.Vector3(-25, 15, 0));

    var line = new THREE.Line(geometry, material);
    return line;
}

function createStyleLines() {
    var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(0, 15, 0));
    geometry.vertices.push(new THREE.Vector3(0, -15, 0));
    geometry.vertices.push(new THREE.Vector3(25, -15, 0));
    geometry.vertices.push(new THREE.Vector3(25, -10, 0));
    geometry.vertices.push(new THREE.Vector3(20, -10, 0));
    geometry.vertices.push(new THREE.Vector3(20, 10, 0));
    geometry.vertices.push(new THREE.Vector3(25, 10, 0));
    geometry.vertices.push(new THREE.Vector3(25, 15, 0));
    geometry.vertices.push(new THREE.Vector3(-25, 15, 0));
    geometry.vertices.push(new THREE.Vector3(-25, 10, 0));
    geometry.vertices.push(new THREE.Vector3(-20, 10, 0));
    geometry.vertices.push(new THREE.Vector3(-20, -10, 0));
    geometry.vertices.push(new THREE.Vector3(-25, -10, 0));
    var line = new THREE.Line(geometry, material);
    return line;
}

function createTitleText(){
    //// Start of TextGeometry
    var loader = new THREE.FontLoader();
    loader.load( 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_bold.typeface.js', function ( font ) {
        var textGeo = new THREE.TextGeometry( "THREE.JS", {
            font: font,
            size: 20, // font size
            height: 10, // how much extrusion (how thick / deep are the letters)
            curveSegments: 12,
            bevelThickness: 1,
            bevelSize: 1,
            bevelEnabled: true
        });
        textGeo.computeBoundingBox();
        var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000, specular: 0xffffff } );
        var mesh = new THREE.Mesh( textGeo, textMaterial );
        mesh.position.x = -75;
        mesh.position.y = 0;
        mesh.position.z = -200;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add( mesh );
    });
// End TextGeometry


}

// function createBoundaries(){
//     var leftWall = new THREE.BoxGeometry( 50, 1, 1 );
//     var wallMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff});
//     var wall1 = new THREE.Mesh( leftWall, wallMaterial );
//     wall1.position.y = -15;
//     scene.add( wall1 );
//
//     var edges1 = new THREE.EdgesHelper( wall1, 0x5555555 );
//     scene.add( edges1 );
//
//     var rightWall = new THREE.BoxGeometry( 50, 1, 1 );
//     var wall2 = new THREE.Mesh( rightWall, wallMaterial );
//     wall2.position.y = 15;
//     scene.add( wall2 );
//
//     var edges2 = new THREE.EdgesHelper( wall2, 0x555555 );
//     scene.add( edges2 );
// }
