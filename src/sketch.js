'use strict'

import * as p5 from '../p5-dependencies/p5.js';
import Flock from "./Flock";
import Boid from "./Boid";

let fnP5Callback = (sk) => {    
	const width = window.innerWidth - 30;
	const height = window.innerHeight - 30;

	let flock = new Flock();
	
	sk.setup = () => {
		sk.createCanvas(width, height);
	
		// Add an initial set of boids into the system
		for (let i = 0; i < 100; i++) 
		{
			let boid = new Boid(
				sk.random(width),
				sk.random(height), 
				sk, 
				width, 
				height
			);

			flock.addBoid(boid);
		}
	}

	sk.draw = () => {
		sk.background(31);
		flock.run();
	}
	
	// Add a new boid into the System
	// sk.mouseDragged() 
	// {
	// 	flock.addBoid(new Boid(mouseX, mouseY));
	// }
}

const P5 = new p5(fnP5Callback);

