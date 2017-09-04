/**
 * Created by raphael on 9/3/17.
 */

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
