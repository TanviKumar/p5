var file;

function setup() {
  createCanvas(400, 400);
}

function preload() {
	file = loadJSON('../data/citylots.json');
}