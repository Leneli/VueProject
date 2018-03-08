var StopHover = (function() {
	var HOVERtimer;

	var __private = {
		body: document.body,
		noHoverClass: "disable-hover",

		init() {
			window.addEventListener("scroll", function () {
				clearTimeout(HOVERtimer);

				__private.stop();
			
				HOVERtimer = setTimeout(function () {
					__private.body.classList.remove(__private.noHoverClass);
				}, 100);
			}, false);
		},

		stop() {
			if(!__private.body.classList.contains(__private.noHoverClass)) {
				__private.body.classList.add(__private.noHoverClass);
			}
		}
	};

	return {
		init() {
			__private.init();
		},

		stop() {
			__private.stop();
		}
	};
})();

export { StopHover };