//@ts-check
'use strict'

class Population
{
	constructor()
	{
		this._boids = [];
		this._obstacles = [];
	
	}
	step() 
	{
		for (let boid of this._boids) 
		{
			boid.step(this._boids, this._obstacles);
		}

		for (let obstacle of this._obstacles) 
		{
			obstacle.step();
		}
	}
	
	addBoid(boid) 
	{
		this._boids.push(boid);
	}

	addObstacle(obstacle)
	{
		this._obstacles.push(obstacle);
	}
}
	
export default Population;