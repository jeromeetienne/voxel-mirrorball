// __dirname is the current working directory, we pass it in to
// the textures module and receive back the path from here to where
// the textures are located
var textures	= require('painterly-textures')(__dirname)
var game	= require('voxel-hello-world')({
	texturePath	: textures,
	chunkDistance	: 1
})


// init a tquery world
var world	= require('voxel-tquery').initWorld(game);
// create a mirror ball
var mirrorBall	= require('./voxel-mirrorball.js').create();

mirrorBall.addTo(world)
	.position(2,2.1,1)
	.scaleBy(3)

var object	= tQuery.createTorusKnot().addTo(world)
	.positionY(4)
world.loop().hook(function(delta, now){
	var angle	= 0.2 * now * Math.PI * 2;
	object	.positionX(Math.cos(angle) * 2 + 2)
		.positionZ(Math.sin(angle) * 2 + 1)
		.rotationY(0.5 * now * Math.PI*2)
})