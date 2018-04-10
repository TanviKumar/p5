p5.prototype.getRandomColor = function() {
	var letters = '0123456789ABCDEF';
	var colorValue = '#';
	for (var i = 0; i < 6; i++) {
		colorValue += letters[Math.floor(Math.random() * 16)];
	}
	return colorValue;
}

p5.prototype.getHSL = function(c) {
	var h = hue(c); var s = saturation(c); var l = lightness(c);
	push();
	colorMode(HSL);
	var colorHSL = color(h,s,l);
	pop();
	return colorHSL;
}

p5.prototype.getHSB = function(c) {
	var h = hue(c); var s = saturation(c); var b = brightness(c);
	push();
	colorMode(HSB);
	var colorHSB = color(h,s,b);
	pop();
	return colorHSB;
}

p5.prototype.getRGB = function(c) {
	var r = red(c); 
	var g = green(c);
	var b = blue(c);
	push();
	colorMode(RGB);
	var colorRGB = color(r, g, b);
	pop();
	return colorRGB;
	
}

p5.Color.prototype.addScalar = function(r, g, b, a) {
	
}

p5.Color.prototype.multiplyScalar = function(a1, a2, a3) {

}

p5.prototype.addColors = function(c1, c2) {
	var r1 = red(c1);
	var r2 = red(c2);
	var g1 = green(c1);
	var g2 = green(c2);
	var b1 = blue(c1);
	var b2 = blue(c2);
}

p5.prototype.multiplyColors = function(c1, c2) {
	var r1 = red(c1);
	var r2 = red(c2);
	var g1 = green(c1);
	var g2 = green(c2);
	var b1 = blue(c1);
	var b2 = blue(c2);
}

p5.prototype.getHues = function(c1) {

}

p5.prototype.getNColors = function(c1, c2, n) {

}

p5.prototype.