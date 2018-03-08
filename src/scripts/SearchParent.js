var SearchParent = (function() {
	var __private = {
		parent: false,

		searchElementByClassName(el, className) {
			if(el !== null && el instanceof HTMLElement && el !== undefined && el !== document.body) {
				if(el.classList.contains(className)) return el;
				else return this.searchElementByClassName(el.parentElement, className);
			} else return false;
		},

		searchElementByTagName(el, tagName) {
			if(el !== null && el instanceof HTMLElement && el !== undefined && el !== document.body) {
				if(el.tagName === tagName) return el;
				else return this.searchElementByTagName(el.parentElement, tagName);
			} else return false;
		},

		searchElementByID(el, ID) {
			var parent = document.getElementById(ID);
			var tag = el.tagName;
			var elems;
			var isParent = false;

			if(parent) elems = [...parent.getElementsByTagName(tag)];

			elems.forEach(element => {
				if(element === el) isParent = true;
			});

			return isParent;
		}
	};

	return {
		byClassName(el, param) {
			return __private.searchElementByClassName(el, param);
		},

		byTagName(el, param) {
			return __private.searchElementByTagName(el, param);
		},

		byID(el, param) {
			return __private.searchElementByID(el, param);
		}
	};
})();

export { SearchParent };