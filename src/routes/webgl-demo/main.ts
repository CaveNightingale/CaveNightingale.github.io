
/**
 * The main function of the WebGL demo, run after a few initialization
 * @param gl The WebGLRenderingContext
 */
function main(gl: WebGLRenderingContext) {
	gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
	gl.clear(gl.COLOR_BUFFER_BIT); // Clear everything
	
}

export default main;