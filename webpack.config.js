const path = require("path");

const objWebPackConfig = {
	entry: "./src/sketch.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "sketchBundle.js"
	}
};

module.exports = objWebPackConfig;