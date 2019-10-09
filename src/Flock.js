//@ts-check
'use strict'

class Flock
{
	constructor()
	{
		this.boids = [];
	
	}
	run() 
	{
		for (let i = 0; i < this.boids.length; i++) 
		{
			// Passing the entire list of boids to each boid individually
			this.boids[i].run(this.boids);
		}
	}
	
	addBoid(boid) 
	{
		this.boids.push(boid);
	}
}
	
export default Flock;