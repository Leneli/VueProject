function Animate(options) {
	// options - the object, which includes:
	// - the duration of the animation (duration)
	// - time function (timing(timeFraction)), which at the current straps computes the state of the animation, and 
	// - the function describing the rendering and animation (draw)

	var start = performance.now();

	requestAnimationFrame(function animate(time) {
		// timeFraction from 0 to 1
		var timeFraction = (time - start) / options.duration;
		if (timeFraction > 1) timeFraction = 1;

		// the current state of the animation
		var progress = timeFraction;

		// the function describing the animation
		options.draw(progress);

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	});
}

export { Animate };