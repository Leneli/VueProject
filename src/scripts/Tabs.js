var Tabs = (function() {
	var __private = {
		dataAttr: "data-tab-body-id",
		noneClass: "d_none",
		activeClass: "active",
		startTabIndex: 0,
		tabBodies: [],

		set(args) {
			this.tabs = document.getElementsByClassName(args.tabClass);

			if(args.dataAttr) 		this.dataAttr = args.dataAttr;
			if(args.noneClass) 		this.noneClass = args.noneClass;
			if(args.activeClass) 	this.activeClass = args.activeClass;

			if(this.tabs.length > 1) {
				__private.searchBodies();

				if(args.hasOwnProperty("startTabIndex") && args.startTabIndex !== false) {
					this.start(args.startTabIndex);
				}
			}
		},

		searchBodies() {
			for(let i = 0; i < this.tabs.length; i++) {
				let t = this.tabs[i];
				let ID = false;

				if(t instanceof HTMLElement && t.getAttribute(this.dataAttr)) {
					ID = t.getAttribute(this.dataAttr);

					if(document.getElementById(ID)) this.tabBodies.push(document.getElementById(ID));
				}
			}

			if(this.tabBodies.length === this.tabs.length) this.listener();
			else throw new Error("The number of tabs corresponds to the number of containers");
		},

		start(index) {
			var startTab = this.tabs[index];
			var startBody = document.getElementById(startTab.getAttribute(this.dataAttr));

			this.tab(startTab);
			this.tabBody(startBody);
		},

		listener() {
			for(let i = 0; i < this.tabs.length; i++) {
				let t = this.tabs[i];
				
				t.addEventListener("click", function(event) {
					event = event || window.event;
					event.preventDefault();

					var tab = this;
					var body = document.getElementById(tab.getAttribute(__private.dataAttr));
					
					if(!tab.classList.contains(__private.activeClass)) {
						__private.tab(tab);
						__private.tabBody(body);
					}
				});
			}
		},

		tab(activeEl) {
			for(let i = 0; i < __private.tabs.length; i++) {
				let el = __private.tabs[i];

				if(el !== activeEl) el.classList.remove(__private.activeClass);
			}

			activeEl.classList.add(__private.activeClass);
		},

		tabBody(activeEl) {
			for(let i = 0; i < __private.tabBodies.length; i++) {
				let el = __private.tabBodies[i];

				if(el !== activeEl) el.classList.add(__private.noneClass);
			}

			activeEl.classList.remove(__private.noneClass);
		}
	};

	return {
		init(args) {
			__private.set(args);
		}
	};
})();

export { Tabs };