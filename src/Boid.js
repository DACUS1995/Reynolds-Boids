//@ts-check
'use strict'

class Boid
{
	constructor(x, y, sk, width, height, velocity = null)
	{
		this.sk = sk;
		this.maxspeed = 2;
		this.velocity = velocity ? velocity : this.sk.createVector(this.sk.random(-1, 1), this.sk.random(-1, 1));
		this.position = this.sk.createVector(x, y);
		this.length = 3.0;

		this.width = width;
		this.height = height;
	}


	step(boids, obstacles)
	{
		this.update_velocity_rules(boids);
		this.handle_borders();
		this.handle_obstacles(obstacles);
		this.update_position(); 
		this.show();
	}


	handle_obstacles(obstacles)
	{
		for(let obstacle of obstacles)
		{
			if(p5.Vector.dist(obstacle.position, this.position) < (obstacle.radius + this.length))
			{
				this.velocity.sub(p5.Vector.sub(obstacle.position, this.position));
			}
		}
	}


	update_velocity_rules(boids)
	{
		let v1 = this.velocity_matching(boids);
		let v2 = this.collision_avoidance(boids);
		let v3 = this.flock_centering(boids);

		this.velocity.add(v1).add(v2).add(v3);
	}
	
	
	update_position()
	{
		this.velocity.normalize().mult(this.maxspeed);
		this.position.add(this.velocity);
	}


	handle_borders()
	{
		if (this.position.x > this.width) this.velocity.x = -this.velocity.x;
		if (this.position.y > this.height) this.velocity.y = -this.velocity.y;
		if (this.position.x < 0) this.velocity.x = -this.velocity.x;
		if (this.position.y < 0) this.velocity.y = -this.velocity.y;
	}


	collision_avoidance(boids)
	{
		let distance_treshold = 20;
		let new_velocity = this.sk.createVector(0, 0);

		// For every boid in the population, check the distance
		for (let i = 0; i < boids.length; i++) 
		{
			let distance = p5.Vector.dist(this.position, boids[i].position);

			if (
				distance > 0
				&& distance < distance_treshold
			) 
			{
				new_velocity.sub(p5.Vector.sub(boids[i].position, this.position));
			}
		}
		
		return new_velocity;
	}


	velocity_matching(boids)
	{
		let distance_treshold = 50;
		let new_velocity = this.sk.createVector(0,0);

		let count = 0;
		for (let i = 0; i < boids.length; i++) 
		{
			let distance = p5.Vector.dist(this.position, boids[i].position);
	
			if (
				distance > 0 
				&& distance < distance_treshold
			) 
			{
				new_velocity.add(boids[i].velocity);
				count++;
			}
		}
	
		if(count > 0)
		{
			new_velocity.div(count);
			return new_velocity.sub(this.velocity).div(10);
		}
		else 
		{
			return this.sk.createVector(0, 0);
		}
	}


	flock_centering(boids)
	{
		let distance_treshold = 100;
		let center = this.sk.createVector(0, 0);
		let count = 0;

		for (let i = 0; i < boids.length; i++) 
		{
			let distance = p5.Vector.dist(this.position, boids[i].position);
	
			if (
				distance > 0 
				&& distance < distance_treshold
			) 
			{
				center.add(boids[i].position);
				count++;
			}
		}

		if (count > 0) 
		{
			center.div(count);
			center.sub(this.position).div(50);
			return center
		} 
		else 
		{
			return this.sk.createVector(0, 0);
		}
	}

	show()
	{
		// Draw a triangle rotated in the direction of velocity
		let theta = this.velocity.heading() + this.sk.radians(90);
		this.sk.fill(127);
		this.sk.stroke(200);
		this.sk.push();
		this.sk.translate(this.position.x, this.position.y);
		this.sk.rotate(theta);
		this.sk.beginShape();
		this.sk.vertex(0, -this.length * 2);
		this.sk.vertex(-this.length, this.length * 2);
		this.sk.vertex(this.length, this.length * 2);
		this.sk.endShape(this.sk.CLOSE);
		this.sk.pop();
	}
}

export default Boid;