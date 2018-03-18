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