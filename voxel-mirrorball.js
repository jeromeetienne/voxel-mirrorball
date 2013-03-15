/**
 * create a mirror ball
 * 
 * @param  {Object} 	opts 	the options
 * @return {tQuery.Mesh}	mesh of the sphere
 */
exports.create	= function(opts){
	// handle default arguments
	opts	= tQuery.extend(opts, {
		world	: tQuery.world
	})
	
	var cubeCamera	= new THREE.CubeCamera( 0.001, 1000, 256 );
	// to avoid flickering on the border of the sphere
	cubeCamera.renderTarget.minFilter = THREE.LinearMipMapLinearFilter;

	var sphere	= tQuery.createSphere()
		.add(cubeCamera)
		.setBasicMaterial()
			.envMap(cubeCamera.renderTarget)
			.color(0xFFD700)
			.back()

// TODO likely a good idea to put a LOD here
// like thus it is render only when visible close

	var tRenderer	= opts.world.tRenderer()
	var tScene	= opts.world.tScene()
	var callback	= opts.world.loop().hook(function(){
		sphere.visible(false)	// *cough*

		cubeCamera.updateCubeMap( tRenderer, tScene );

		sphere.visible(true)	// *cough*
	});
	
	// sphere.on('destroy', function(){
	// 	this.detach();
	// 	world.loop().unhook(callback)
	// })
	
	return sphere;
};
