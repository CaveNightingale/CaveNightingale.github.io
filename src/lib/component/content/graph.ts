import * as math from "mathjs"

interface Vertex {
	x: number;
	y: number;
	label?: string;
	class?: string;
}

interface Edge {
	u: Vertex;
	v: Vertex;
	label?: string;
	control?: number;
}

function toXY(num: any): [number, number] {
	if (typeof num === "number") {
		return [num, 0];
	} else if (typeof num.re === "number" && typeof num.im === "number") {
		return [num.re, num.im];
	} else if (typeof num[0] === "number" && typeof num[1] === "number") {
		return [num[0], num[1]];
	} else {
		throw new Error("Not a valid complex number representation for point");
	}
}

function evaluate(str: string, width: number, height: number): [Vertex[], Edge[]] {
	console.log(str, width, height);
	let vertices: Vertex[] = [];
	let edges: Edge[] = [];
	function vertex(scope: Record<string, any>, pos: any, label: any, className: any) {
		let [x, y] = toXY(pos);
		let v = { x, y, label: label?.toString(), class: className };
		vertices.push(v);
		if (scope[label] === undefined) {
			scope[label] = v; 
		}
		return v;
	}
	function edge(scope: Record<string, any>, u: Vertex, v: Vertex, label: any, control: any) {
		if (control !== undefined && typeof control !== "number") {
			throw new Error("Control point must be a number");
		}
		let e = { u, v, label: label?.toString(), control: control };
		edges.push(e);
		if (label !== "" && scope[label] === undefined) {
			scope[label] = e; 
		}
		return e;
	}
	let scope: Record<string, any> = { width, height };
	scope.vertex = (pos: any, label: any, className: any) => vertex(scope, pos, label, className);
	scope.node = scope.vertex;
	scope.edge = (u: Vertex, v: Vertex, label: any, control: any) => edge(scope, u, v, label, control);
	math.evaluate(str, scope);
	return [vertices, edges];
}

export { evaluate };