'use strict'

import * as p5 from '../p5-dependencies/p5.js';
import Population from "./Population";
import Boid from "./Boid";
import Obstacle from './Obstacle.js';

let fnP5Callback = (sk) => {    
	const width = window.innerWidth - 30;
	const height = window.innerHeight - 30;

	let population = new Population();
	
	sk.setup = () => {
		sk.createCanvas(width, height);
	
			// let boid = new Boid(
			// 	300,
			// 	500, 
			// 	sk, 
			// 	width, 
			// 	height,
			// 	sk.createVector(5, 0)
			// );

			// population.addBoid(boid);

			// boid = new Boid(
			// 	900,
			// 	500,
			// 	sk, 
			// 	width, 
			// 	height,
			// 	sk.createVector(-5, 0)
			// );

			// population.addBoid(boid);

		// Creating Boids
		for (let i = 0; i < 100; i++) 
		{
			let boid = new Boid(
				sk.random(width),
				sk.random(height), 
				sk, 
				width, 
				height
			);

			population.addBoid(boid);
		}
	}

	sk.draw = () => {
		sk.background('rgba(0,255,0, 0.25)');
		population.step();
	}
	
	sk.mouseClicked = () => {
		console.log("New obstacle added");
		population.addObstacle(
			new Obstacle(sk.mouseX, sk.mouseY, sk)
		);
	}
}

const P5 = new p5(fnP5Callback);

