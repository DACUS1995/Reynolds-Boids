/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sketch.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./p5-dependencies/p5.js":
/*!*******************************!*\
  !*** ./p5-dependencies/p5.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./src/Boid.js":
/*!*********************!*\
  !*** ./src/Boid.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//@ts-check\r\n\r\n\r\nclass Boid\r\n{\r\n\tconstructor(x, y, sk, width, height)\r\n\t{\r\n\t\tthis.sk = sk;\r\n\t\tthis.acceleration = this.sk.createVector(0, 0);\r\n\t\tthis.velocity = this.sk.createVector(this.sk.random(-1, 1), this.sk.random(-1, 1));\r\n\t\tthis.position = this.sk.createVector(x, y);\r\n\t\tthis.r = 3.0;\r\n\t\tthis.maxspeed = 3;    // Maximum speed\r\n\t\tthis.maxforce = 0.05; // Maximum steering force\r\n\r\n\t\tthis.width = width;\r\n\t\tthis.height = height;\r\n\t}\r\n\r\n\r\n\trun(boids)\r\n\t{\r\n\t\tthis.flock(boids);\r\n\t\tthis.borders();\r\n\t\tthis.update(); \r\n\t\tthis.render();\r\n\t}\r\n\r\n\r\n\tapplyForce(force)\r\n\t{\r\n\t\tthis.acceleration.add(force);\r\n\t}\r\n\r\n\r\n\t// We accumulate a new acceleration each time based on three rules\r\n\tflock(boids)\r\n\t{\r\n\t\tlet sep = this.separate(boids);   // Separation\r\n\t\tlet ali = this.align(boids);      // Alignment\r\n\t\tlet coh = this.cohesion(boids);   // Cohesion\r\n\t\t// Arbitrarily weight these forces\r\n\t\tsep.mult(1.0);\r\n\t\tali.mult(1.0);\r\n\t\tcoh.mult(1.0);\r\n\t\t// Add the force vectors to acceleration\r\n\t\tthis.applyForce(sep);\r\n\t\tthis.applyForce(ali);\r\n\t\tthis.applyForce(coh);\r\n\t}\r\n\r\n\r\n\tupdate()\r\n\t{\r\n\t\t// Update velocity\r\n\t\tthis.velocity.add(this.acceleration);\r\n\t\t// Limit speed\r\n\t\tthis.velocity.limit(this.maxspeed);\r\n\t\tthis.position.add(this.velocity);\r\n\t\t// Reset accelertion to 0 each cycle\r\n\t\tthis.acceleration.mult(0);\r\n\t}\r\n\r\n\r\n\t// A method that calculates and applies a steering force towards a target\r\n\t// STEER = DESIRED MINUS VELOCITY\r\n\tseek(target)\r\n\t{\r\n\t\tlet desired = p5.Vector.sub(target,this.position);  // A vector pointing from the location to the target\r\n\t\t// Normalize desired and scale to maximum speed\r\n\t\tdesired.normalize();\r\n\t\tdesired.mult(this.maxspeed);\r\n\t\t// Steering = Desired minus Velocity\r\n\t\tlet steer = p5.Vector.sub(desired,this.velocity);\r\n\t\tsteer.limit(this.maxforce);  // Limit to maximum steering force\r\n\t\treturn steer;\r\n\t}\r\n\r\n\r\n\trender()\r\n\t{\r\n\t\t// Draw a triangle rotated in the direction of velocity\r\n\t\tlet theta = this.velocity.heading() + this.sk.radians(90);\r\n\t\tthis.sk.fill(127);\r\n\t\tthis.sk.stroke(200);\r\n\t\tthis.sk.push();\r\n\t\tthis.sk.translate(this.position.x, this.position.y);\r\n\t\tthis.sk.rotate(theta);\r\n\t\tthis.sk.beginShape();\r\n\t\tthis.sk.vertex(0, -this.r * 2);\r\n\t\tthis.sk.vertex(-this.r, this.r * 2);\r\n\t\tthis.sk.vertex(this.r, this.r * 2);\r\n\t\tthis.sk.endShape(this.sk.CLOSE);\r\n\t\tthis.sk.pop();\r\n\t}\r\n\r\n\r\n\tborders()\r\n\t{\r\n\t\tif (this.position.x < -this.r)  this.position.x = this.width + this.r;\r\n\t\tif (this.position.y < -this.r)  this.position.y = this.height + this.r;\r\n\t\tif (this.position.x > this.width + this.r) this.position.x = -this.r;\r\n\t\tif (this.position.y > this.height + this.r) this.position.y = -this.r;\r\n\t}\r\n\r\n\r\n\t// Separation\r\n\t// Method checks for nearby boids and steers away\r\n\tseparate(boids)\r\n\t{\r\n\t\tlet desiredseparation = 25.0;\r\n\t\tlet steer = this.sk.createVector(0, 0);\r\n\t\tlet count = 0;\r\n\t\t// For every boid in the system, check if it's too close\r\n\t\tfor (let i = 0; i < boids.length; i++) \r\n\t\t{\r\n\t\t\tlet d = p5.Vector.dist(this.position, boids[i].position);\r\n\t\t\t // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)\r\n\t\t\tif (\r\n\t\t\t\t(d > 0)\r\n\t\t\t\t&& (d < desiredseparation)\r\n\t\t\t) \r\n\t\t\t{\r\n\t\t\t\t// Calculate vector pointing away from neighbor\r\n\t\t\t\tlet diff = p5.Vector.sub(this.position, boids[i].position);\r\n\t\t\t\tdiff.normalize();\r\n\t\t\t\tdiff.div(d);        // Weight by distance\r\n\t\t\t\tsteer.add(diff);\r\n\t\t\t\tcount++;            // Keep track of how many\r\n\t\t\t}\r\n\t\t}\r\n\t\t// Average -- divide by how many\r\n\t\tif (count > 0) \r\n\t\t{\r\n\t\t\tsteer.div(count);\r\n\t\t}\r\n\t\r\n\t\t// As long as the vector is greater than 0\r\n\t\tif (steer.mag() > 0) \r\n\t\t{\r\n\t\t\t// Implement Reynolds: Steering = Desired - Velocity\r\n\t\t\tsteer.normalize();\r\n\t\t\tsteer.mult(this.maxspeed);\r\n\t\t\tsteer.sub(this.velocity);\r\n\t\t\tsteer.limit(this.maxforce);\r\n\t\t}\r\n\t\r\n\t\treturn steer;\r\n\t}\r\n\r\n\r\n\t// Alignment\r\n\t// For every nearby boid in the system, calculate the average velocity\r\n\talign(boids)\r\n\t{\r\n\t\tlet neighbordist = 50;\r\n\t\tlet sum = this.sk.createVector(0,0);\r\n\t\tlet count = 0;\r\n\t\tfor (let i = 0; i < boids.length; i++) \r\n\t\t{\r\n\t\t\tlet d = p5.Vector.dist(this.position,boids[i].position);\r\n\t\r\n\t\t\tif (\r\n\t\t\t\t(d > 0) \r\n\t\t\t\t&& (d < neighbordist)\r\n\t\t\t) \r\n\t\t\t{\r\n\t\t\t\tsum.add(boids[i].velocity);\r\n\t\t\t\tcount++;\r\n\t\t\t}\r\n\t\t}\r\n\t\r\n\t\tif (count > 0) \r\n\t\t{\r\n\t\t\tsum.div(count);\r\n\t\t\tsum.normalize();\r\n\t\t\tsum.mult(this.maxspeed);\r\n\t\t\tlet steer = p5.Vector.sub(sum, this.velocity);\r\n\t\t\tsteer.limit(this.maxforce);\r\n\t\r\n\t\t\treturn steer;\r\n\t\t} \r\n\t\telse \r\n\t\t{\r\n\t\t\treturn this.sk.createVector(0, 0);\r\n\t\t}\r\n\t}\r\n\r\n\r\n\t// Cohesion\r\n\t// For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location\r\n\tcohesion(boids)\r\n\t{\r\n\t\tlet neighbordist = 50;\r\n\t\tlet sum = this.sk.createVector(0, 0);   // Start with empty vector to accumulate all locations\r\n\t\tlet count = 0;\r\n\t\tfor (let i = 0; i < boids.length; i++) \r\n\t\t{\r\n\t\t\tlet d = p5.Vector.dist(this.position,boids[i].position);\r\n\t\r\n\t\t\tif ((d > 0) && (d < neighbordist)) \r\n\t\t\t{\r\n\t\t\t\tsum.add(boids[i].position); // Add location\r\n\t\t\t\tcount++;\r\n\t\t\t}\r\n\t\t}\r\n\t\tif (count > 0) \r\n\t\t{\r\n\t\t\tsum.div(count);\r\n\t\t\treturn this.seek(sum);  // Steer towards the location\r\n\t\t} \r\n\t\telse \r\n\t\t{\r\n\t\t\treturn this.sk.createVector(0, 0);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Boid);\n\n//# sourceURL=webpack:///./src/Boid.js?");

/***/ }),

/***/ "./src/Flock.js":
/*!**********************!*\
  !*** ./src/Flock.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//@ts-check\r\n\r\n\r\nclass Flock\r\n{\r\n\tconstructor()\r\n\t{\r\n\t\tthis.boids = [];\r\n\t\r\n\t}\r\n\trun() \r\n\t{\r\n\t\tfor (let i = 0; i < this.boids.length; i++) \r\n\t\t{\r\n\t\t\t// Passing the entire list of boids to each boid individually\r\n\t\t\tthis.boids[i].run(this.boids);\r\n\t\t}\r\n\t}\r\n\t\r\n\taddBoid(boid) \r\n\t{\r\n\t\tthis.boids.push(boid);\r\n\t}\r\n}\r\n\t\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flock);\n\n//# sourceURL=webpack:///./src/Flock.js?");

/***/ }),

/***/ "./src/sketch.js":
/*!***********************!*\
  !*** ./src/sketch.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _p5_dependencies_p5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../p5-dependencies/p5.js */ \"./p5-dependencies/p5.js\");\n/* harmony import */ var _p5_dependencies_p5_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_p5_dependencies_p5_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Flock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Flock */ \"./src/Flock.js\");\n/* harmony import */ var _Boid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Boid */ \"./src/Boid.js\");\n\n\n\n\n\n\nlet fnP5Callback = (sk) => {    \n\tconst width = window.innerWidth - 30;\n\tconst height = window.innerHeight - 30;\n\n\tlet flock = new _Flock__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\t\n\tsk.setup = () => {\n\t\tsk.createCanvas(width, height);\n\t\n\t\t// Add an initial set of boids into the system\n\t\tfor (let i = 0; i < 100; i++) \n\t\t{\n\t\t\tlet boid = new _Boid__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n\t\t\t\tsk.random(width),\n\t\t\t\tsk.random(height), \n\t\t\t\tsk, \n\t\t\t\twidth, \n\t\t\t\theight\n\t\t\t);\n\n\t\t\tflock.addBoid(boid);\n\t\t}\n\t}\n\n\tsk.draw = () => {\n\t\tsk.background(31);\n\t\tflock.run();\n\t}\n\t\n\t// Add a new boid into the System\n\t// sk.mouseDragged() \n\t// {\n\t// \tflock.addBoid(new Boid(mouseX, mouseY));\n\t// }\n}\n\nconst P5 = new _p5_dependencies_p5_js__WEBPACK_IMPORTED_MODULE_0__(fnP5Callback);\n\n\n\n//# sourceURL=webpack:///./src/sketch.js?");

/***/ })

/******/ });