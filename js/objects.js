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

function createPlayBottom()
{
    var planeGeometry = new THREE.PlaneGeometry( 10, 20, 10, 10 );
    var planeMaterial = new THREE.MeshLambertMaterial({color:0x4BD121});
    var plane = new THREE.Mesh( planeGeometry, planeMaterial );
    scene.add(plane);
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

function createBoundaries(){
    var leftWall = new THREE.BoxGeometry( 50, 1, 1 );
    var wallMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff});
    var wall1 = new THREE.Mesh( leftWall, wallMaterial );
    wall1.position.y = -15;
    scene.add( wall1 );

    var edges1 = new THREE.EdgesHelper( wall1, 0x5555555 );
    scene.add( edges1 );

    var rightWall = new THREE.BoxGeometry( 50, 1, 1 );
    var wall2 = new THREE.Mesh( rightWall, wallMaterial );
    wall2.position.y = 15;
    scene.add( wall2 );

    var edges2 = new THREE.EdgesHelper( wall2, 0x555555 );
    scene.add( edges2 );
}
