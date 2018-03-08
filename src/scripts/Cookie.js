var Cookie = (function () {
	var __private = {
		cookieName: false,
		cookieOptions: {
			path: "/",
			domain: window.location.hostname,
			expires: false,
			// secure: false
		},
		cookieValue: false,
		cookueMatches: false,
		
		set(cookie, options) {
			if(cookie && typeof cookie === "string") this.cookieName = cookie;
			else throw new Error("Cookie name is not valid");

			if(options && options.hasOwnProperty("cookieOptions")) this.cookieOptions = options.cookieOptions;
			if(options && options.hasOwnProperty("cookieValue"))   this.cookieValue   = options.cookieValue;

			if(!this.cookieOptions.expires) {
				let cookieDate = new Date;
				cookieDate.setDate(cookieDate.getDate() + 100);

				this.cookieOptions.expires = cookieDate.toUTCString();
			}
		},

		setCookie(name, value, options) {
			name    = name    || this.cookieName;
			value   = value   || this.cookieValue;
			options = options || this.cookieOptions;
		
			var expires = options.expires;
		
			if(typeof expires == "number" && expires) {
				var d = new Date();
				d.setTime(d.getTime() + expires * 1000);
				expires = options.expires = d;
			}
			if(expires && expires.toUTCString) {
				options.expires = expires.toUTCString();
			}
		
			value = encodeURIComponent(value);

			var updatedCookie = name + "=" + value;
		
			for(var propName in options) {
				updatedCookie += "; " + propName;

				var propValue = options[propName];

				if(propValue !== true) {
					updatedCookie += "=" + propValue;
				}
			}

			document.cookie = updatedCookie;
		},

		getCookie(name) {
			this.cookueMatches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
			
			// return matches ? decodeURIComponent(matches[1]) : undefined;
		},

		deleteCookie(name) {
			this.setCookie(name, "", {
				expires: -1
			});
		}
	};

	return {
		set(cookie, options) {
			__private.set(cookie, options);
			__private.setCookie();
		},

		get(cookie) {
			__private.getCookie(cookie);

			return __private.cookueMatches ? decodeURIComponent(__private.cookueMatches[1]) : undefined;
		},

		delete(cookie) {
			__private.deleteCookie(cookie);
		}
	};
})();

export { Cookie };