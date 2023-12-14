/**
 * Describes a point like object, in 2D space.
 */
interface PointLike {
	0: number;
	1: number;
}

/**
 * An immutable point class.
 * Represents a point in 2D space.
 */
class Point extends Array implements PointLike {
	0: number;
	1: number;

	/**
	 * Creates a new point.
	 * @param x The x coordinate.
	 * @param y The y coordinate.
	 */
	constructor(x: number, y: number) {
		super();
		this[0] = x;
		this[1] = y;
		Object.freeze(this);
	}

	/**
	 * Creates a new point from an array.
	 * If the array is already a point, it is returned.
	 * @param point The array.
	 */
	static from(point: any): Point {
		return point instanceof Point ? point : new Point(point[0], point[1]);
	}

	equals(point: PointLike): boolean {
		return this[0] === point[0] && this[1] === point[1];
	}

	toString(): string {
		return `(${this[0]}, ${this[1]})`;
	}

	/**
	 * The x coordinate.
	 */
	get x(): number {
		return this[0];
	}

	/**
	 * The y coordinate.
	 */
	get y(): number {
		return this[1];
	}

	/**
	 * The euclidean distance to the origin.
	 */
	get euclidean(): number {
		return Math.sqrt(this[0] * this[0] + this[1] * this[1]);
	}

	/**
	 * The manhattan distance to the origin.
	 */
	get manhattan(): number {
		return Math.abs(this[0]) + Math.abs(this[1]);
	}

	/**
	 * Add a point to this point.
	 * @param point The right hand side point.
	 * @returns A new point.
	 */
	add(point: PointLike): Point {
		return new Point(this[0] + point[0], this[1] + point[1]);
	}

	/**
	 * Subtract a point from this point.
	 * @param point The right hand side point.
	 * @returns A new point.
	 */
	sub(point: PointLike): Point {
		return new Point(this[0] - point[0], this[1] - point[1]);
	}

	/**
	 * Multiply this point by a scalar.
	 * @param scalar The scalar.
	 * @returns A new point.
	 */
	mul(scalar: number): Point {
		return new Point(this[0] * scalar, this[1] * scalar);
	}

	/**
	 * Divide this point by a scalar.
	 * @param scalar The scalar.
	 * @returns A new point.
	 */
	div(scalar: number): Point {
		return new Point(this[0] / scalar, this[1] / scalar);
	}

	/**
	 * The dot product of this point and another point.
	 * @param point The right hand side point.
	 * @returns The dot product.
	 */
	dot(point: PointLike): number {
		return this[0] * point[0] + this[1] * point[1];
	}

	/**
	 * The cross product of this point and another point.
	 * @param point The right hand side point.
	 * @returns The cross product.
	 */
	cross(point: PointLike): number {
		return this[0] * point[1] - this[1] * point[0];
	}
}

/**
 * Normalizes a set of points. Make them centered at the (0.5, 0.5) and scale them to fit in the unit square.
 * @param points input points.
 * @returns normalized points.
 */
function normalizePoints(points: PointLike[]): Point[] {
	const maxX = Math.max(...points.map(p => p[0])), minX = Math.min(...points.map(p => p[0]));
	const maxY = Math.max(...points.map(p => p[1])), minY = Math.min(...points.map(p => p[1]));
	const centerX = (maxX + minX) / 2, centerY = (maxY + minY) / 2;
	const scale = Math.max(maxX - minX, maxY - minY);
	return points.map(p => Point.from(p).sub(Point.from([centerX, centerY])).div(scale).add(Point.from([0.5, 0.5])));
}

/**
 * Performs gradient descent on a function.
 * @param gradient The gradient function.
 * @param initial The initial point.
 * @param learningRate The learning rate.
 * @param momentum The momentum.
 * @param epoch The number of iterations.
 * @param show The function to show the current point.
 * @returns The final point.
 */
async function gradientDescentWithMomentum(
	gradient: (x: number[]) => number[],
	initial: number[],
	learningRate: number,
	momentum: number,
	epoch: number,
	show: (x: number[]) => Promise<void> = async () => { },
): Promise<number[]> {
	let point = initial;
	let velocity = new Array(point.length).fill(0);
	for (let i = 0; i < epoch; i++) {
		const grad = gradient(point);
		velocity = velocity.map((v, i) => momentum * v - learningRate * grad[i]);
		point = point.map((p, i) => p + velocity[i]);
		if ((i & 1023) === 0) {
			await show(point);
		}
	}
	return point;
}

/**
 * Solve a local minimum problem randomly.
 * @param dimension The dimension of the problem.
 * @param original The original function.
 * @param gradient The gradient function.
 * @param attempts The number of attempts.
 * @param epoch The number of iterations each attempt.
 * @returns The best point.
 */
async function randomizedSolve(
	dimension: number,
	original: (x: number[]) => number,
	gradient: (x: number[]) => number[],
	attempts: number,
	epoch: number,
	show: (x: number[]) => Promise<void> = async () => { },
): Promise<number[]> {
	const FIRST_LEARNING_RATE = 0.1, SECOND_LEARNING_RATE = 0.01;
	const MOMENTUM = 0.9;
	let best = new Array(dimension).fill(0), bestValue = Infinity;
	for (let i = 0; i < attempts; i++) {
		const initial = new Array(dimension).fill(0).map(() => Math.random());
		let point = await gradientDescentWithMomentum(gradient, initial, FIRST_LEARNING_RATE, MOMENTUM, epoch, show);
		point = await gradientDescentWithMomentum(gradient, point, SECOND_LEARNING_RATE, MOMENTUM, epoch, show);
		const value = original(point);
		if (value < bestValue) {
			bestValue = value;
			best = point;
		}
	}
	return best;
}

/**
 * A graph.
 */
class Graph {
	/**
	 * The number of nodes.
	 */
	public readonly size: number;

	/**
	 * Edges.
	 */
	public readonly edges: [number, number][];

	/**
	 * Adjacency matrix.
	 */
	adjacency: boolean[][];

	/**
	 * Create a graph.
	 * @param size The number of nodes.
	 * @param edges The edges.
	 */
	public constructor(size: number, edges: [number, number][]) {
		this.size = size;
		this.edges = edges;
		this.adjacency = new Array(size).fill(false).map(() => new Array(size).fill(false));
		for (const [u, v] of edges) {
			this.adjacency[u][v] = this.adjacency[v][u] = true;
		}
	}

	/**
	 * Loss function of a arrangement painted on a plane.
	 */
	public loss(x: number[]): number {
		const points = [];
		for (let i = 0; i < this.size; i++) {
			points.push(Point.from([x[i * 2], x[i * 2 + 1]]));
		}
		let sum = 0;
		for (let i = 0; i < this.size; i++) {
			for (let j = i + 1; j < this.size; j++) {
				const lWeight = this.adjacency[i][j] ? 1 : 0.02;
				const l = points[i].sub(points[j]).euclidean;
				// Even the points are not connected, they should not be drawn at a same place, so the latter term does not need to be weighted.
				sum += lWeight * l + 1 / l;
			}
		}
		return sum;
	}

	/**
	 * Gradient function of the loss function.
	 */
	public gradientLoss(x: number[]): number[] {
		const points = [];
		for (let i = 0; i < this.size; i++) {
			points.push(Point.from([x[i * 2], x[i * 2 + 1]]));
		}
		const gradient = new Array(this.size * 2).fill(0);
		for (let i = 0; i < this.size; i++) {
			for (let j = i + 1; j < this.size; j++) {
				const lWeight = this.adjacency[i][j] ? 1 : 0.02;
				const l = points[i].sub(points[j]).euclidean;
				const dyOverDl = lWeight - 1 / (l * l);
				gradient[i * 2] += dyOverDl * (points[i].x - points[j].x) / l;
				gradient[j * 2] += dyOverDl * (points[j].x - points[i].x) / l;
				gradient[i * 2 + 1] += dyOverDl * (points[i].y - points[j].y) / l;
				gradient[j * 2 + 1] += dyOverDl * (points[j].y - points[i].y) / l;
			}
		}
		return gradient;
	}
}

export {
	Point,
	Graph,
	normalizePoints,
	randomizedSolve,
};