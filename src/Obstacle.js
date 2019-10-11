//@ts-check
'use strict'

class Obstacle
{
	constructor(x, y, sk, radius = 40)
	{
		this.position = sk.createVector(x, y);
		this.radius = radius;
		this.sk = sk;
	}

	step()
	{
		this.show();
	}

	show()
	{
		this.sk.fill(127);
		this.sk.circle(this.position.x, this.position.y, this.radius);
	}
}

export default Obstacle;