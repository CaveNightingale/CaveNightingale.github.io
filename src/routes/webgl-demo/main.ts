import vertexSrc from './vertex.glsl?raw';
import fragmentSrc from './fragment.glsl?raw';
import { mat4 } from 'gl-matrix';

interface Environment {
	error: (msg: string) => void;
};

/**
 * This is kind of global state, since we only have one WebGL context
 * Make life easier by not passing it around
 */
let gl: WebGLRenderingContext & { canvas: HTMLCanvasElement };
let env: Environment;
let shaderProgram: WebGLProgram;
let buffers: {
	position: WebGLBuffer;
};
let attribLocations: {
	vertexPosition: number;
};
let uniformLocations: {
	projectionMatrix: WebGLUniformLocation;
	modelViewMatrix: WebGLUniformLocation;
};

/**
 * The main function of the WebGL demo, run after a few initialization
 * @param gl The WebGLRenderingContext
 * @param env The environment
 */
function main(_gl: WebGLRenderingContext & { canvas: HTMLCanvasElement }, _env: Environment) {
	gl = _gl;
	env = _env;

	const _shaderProgram = initShaderProgram();
	if (!_shaderProgram) {
		return;
	}
	shaderProgram = _shaderProgram;

	attribLocations = {
		vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
	};

	uniformLocations = {
		projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix')!,
		modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix')!,
	};

	initBuffers();
	drawScene();
}

/**
 * Draws the scene
 */
function drawScene() {
	gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
	gl.clearDepth(1.0); // Clear everything
	gl.enable(gl.DEPTH_TEST); // Enable depth testing
	gl.depthFunc(gl.LEQUAL); // Near things obscure far things

	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


	const fieldOfView = (90 * Math.PI) / 180; // in radians
	const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
	const zFar = 100.0;
	const zNear = 0.1;
	const projectionMatrix = mat4.create();

	mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

	const modelViewMatrix = mat4.create();

	mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, 0.0, -6.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [2.0, 2.0, 2.0]);

	const numComponents = 2; // pull out 2 values per iteration
	const type = gl.FLOAT; // the data in the buffer is 32bit floats
	const normalize = false; // don't normalize
	const stride = 0; // how many bytes to get from one set of values to the next

	const offset = 0;
	gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
	gl.vertexAttribPointer(
		attribLocations.vertexPosition,
		numComponents,
		type,
		normalize,
		stride,
		offset
	);

	gl.enableVertexAttribArray(attribLocations.vertexPosition);

	gl.useProgram(shaderProgram);

	gl.uniformMatrix4fv(uniformLocations.projectionMatrix, false, projectionMatrix);
	gl.uniformMatrix4fv(uniformLocations.modelViewMatrix, false, modelViewMatrix);

	const vertexCount = 4;
	gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
}

/**
 * Creates a buffer
 * @returns Buffer
 */
function initBuffers() {
	const positionBuffer = gl.createBuffer();
	if (!positionBuffer) {
		env.error('Failed to create buffer');
		return null;
	}

	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

	const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

	buffers = {
		position: positionBuffer,
	};
}

/**
 * Initializes the shader program
 */
function initShaderProgram(): WebGLProgram | null {
	const vertexShader = loadShader(gl.VERTEX_SHADER, vertexSrc);
	const fragmentShader = loadShader(gl.FRAGMENT_SHADER, fragmentSrc);
	if (!vertexShader || !fragmentShader) {
		return null;
	}

	const shaderProgram = gl.createProgram();
	if (!shaderProgram) {
		env.error('Failed to create shader program');
		return null;
	}
	gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);
	gl.linkProgram(shaderProgram);

	const success = gl.getProgramParameter(shaderProgram, gl.LINK_STATUS);
	if (!success) {
		env.error('Failed to link shader program: ' + gl.getProgramInfoLog(shaderProgram));
		gl.deleteProgram(shaderProgram);
		return null;
	}
	return shaderProgram;
}

/**
 * Loads a shader from source
 * @param type Type of shader, either gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
 * @param source Source code of the shader
 * @returns the shader
 */
function loadShader(type: number, source: string) {
	const shader = gl.createShader(type);
	if (!shader) {
		env.error('Failed to create shader');
		return null;
	}

	gl.shaderSource(shader, source);
	gl.compileShader(shader);

	const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	if (!success) {
		env.error('Failed to compile shader: ' + gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
		return null;
	}

	return shader;
}

export default main;