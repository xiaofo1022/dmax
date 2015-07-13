(function(a) {
	var b = new Array,
		c = new Array,
		d = function() {},
		e = 0;
	var f = {
		splashVPos: "35%",
		loaderVPos: "75%",
		splashID: "#jpreContent",
		showSplash: true,
		showPercentage: true,
		autoClose: true,
		closeBtnText: "Start!",
		onetimeLoad: false,
		debugMode: false,
		splashFunction: function() {}
	};
	var g = function() {
			if (f.onetimeLoad) {
				var a = document.cookie.split("; ");
				for (var b = 0, c; c = a[b] && a[b].split("="); b++) {
					if (c.shift() === "jpreLoader") {
						return c.join("=")
					}
				}
				return false
			} else {
				return false
			}
		};
	var h = function(a) {
			if (f.onetimeLoad) {
				var b = new Date;
				b.setDate(b.getDate() + a);
				var c = a == null ? "" : "expires=" + b.toUTCString();
				document.cookie = "jpreLoader=loaded; " + c
			}
		};
	var i = function() {
			jOverlay = a("<div></div>").attr("id", "jpreOverlay").css({
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: 9999999
			}).appendTo("body");
			if (f.showSplash) {
				jContent = a("<div></div>").attr("id", "jpreSlide").appendTo(jOverlay);
				var b = a(window).width() - a(jContent).width();
				a(jContent).css({
					position: "absolute",
					top: f.splashVPos,
					left: Math.round(50 / a(window).width() * b) + "%"
				});
				a(jContent).html(a(f.splashID).wrap("<div/>").parent().html());
				a(f.splashID).remove();
				f.splashFunction()
			}
			jLoader = a("<div></div>").attr("id", "jpreLoader").appendTo(jOverlay);
			var c = a(window).width() - a(jLoader).width();
			a(jLoader).css({
				position: "absolute",
				top: f.loaderVPos,
				left: Math.round(50 / a(window).width() * c) + "%"
			});
			jBar = a("<div></div>").attr("id", "jpreBar").css({
				width: "0%",
				height: "100%"
			}).appendTo(jLoader);
			if (f.showPercentage) {
				jPer = a("<div></div>").attr("id", "jprePercentage").css({
					position: "relative",
					height: "100%"
				}).appendTo(jLoader).html("Loading...")
			}
			if (!f.autoclose) {
				jButton = a("<div></div>").attr("id", "jpreButton").on("click", function() {
					n()
				}).css({
					position: "relative",
					height: "100%"
				}).appendTo(jLoader).text(f.closeBtnText).hide()
			}
		};
	var j = function(c) {
			a(c).find("*:not(script)").each(function() {
				var c = "";
				if (a(this).css("background-image").indexOf("none") == -1 && a(this).css("background-image").indexOf("-gradient") == -1) {
					c = a(this).css("background-image");
					if (c.indexOf("url") != -1) {
						var d = c.match(/url\((.*?)\)/);
						c = d[1].replace(/\"/g, "")
					}
				} else if (a(this).get(0).nodeName.toLowerCase() == "img" && typeof a(this).attr("src") != "undefined") {
					c = a(this).attr("src")
				}
				if (c.length > 0) {
					b.push(c)
				}
			})
		};
	var k = function() {
			for (var a = 0; a < b.length; a++) {
				if (l(b[a]));
			}
		};
	var l = function(b) {
			var d = new Image;
			a(d).load(function() {
				m()
			}).error(function() {
				c.push(a(this).attr("src"));
				m()
			}).attr("src", b)
		};
	var m = function() {
			e++;
			var c = Math.round(e / b.length * 100);
			a(jBar).stop().animate({
				width: c + "%"
			}, 500, "linear");
			if (f.showPercentage) {
				a(jPer).text(c + "%")
			}
			if (e >= b.length) {
				e = b.length;
				h();
				if (f.showPercentage) {
					a(jPer).text("100%")
				}
				if (f.debugMode) {
					var d = o()
				}
				a(jBar).stop().animate({
					width: "100%"
				}, 500, "linear", function() {
					if (f.autoClose) n();
					else a(jButton).fadeIn(1e3)
				})
			}
		};
	var n = function() {
			a(jOverlay).fadeOut(800, function() {
				a(jOverlay).remove();
				d()
			})
		};
	var o = function() {
			if (c.length > 0) {
				var a = "ERROR - IMAGE FILES MISSING!!!\n\r";
				a += c.length + " image files cound not be found. \n\r";
				a += "Please check your image paths and filenames:\n\r";
				for (var b = 0; b < c.length; b++) {
					a += "- " + c[b] + "\n\r"
				}
				return true
			} else {
				return false
			}
		};
	a.fn.jpreLoader = function(b, c) {
		if (b) {
			a.extend(f, b)
		}
		if (typeof c == "function") {
			d = c
		}
		a("body").css({
			display: "block"
		});
		return this.each(function() {
			if (!g()) {
				i();
				j(this);
				k()
			} else {
				a(f.splashID).remove();
				d()
			}
		})
	}
})(jQuery);
(function(e, t) {
	"use strict";
	var n = e.History = e.History || {},
		r = e.jQuery;
	if (typeof n.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
	n.Adapter = {
		bind: function(e, t, n) {
			r(e).bind(t, n)
		},
		trigger: function(e, t, n) {
			r(e).trigger(t, n)
		},
		extractEventData: function(e, n, r) {
			var i = n && n.originalEvent && n.originalEvent[e] || r && r[e] || t;
			return i
		},
		onDomLoad: function(e) {
			r(e)
		}
	}, typeof n.init != "undefined" && n.init()
})(window), function(e, t) {
	"use strict";
	var n = e.console || t,
		r = e.document,
		i = e.navigator,
		s = !1,
		o = e.setTimeout,
		u = e.clearTimeout,
		a = e.setInterval,
		f = e.clearInterval,
		l = e.JSON,
		c = e.alert,
		h = e.History = e.History || {},
		p = e.history;
	try {
		s = e.sessionStorage, s.setItem("TEST", "1"), s.removeItem("TEST")
	} catch (d) {
		s = !1
	}
	l.stringify = l.stringify || l.encode, l.parse = l.parse || l.decode;
	if (typeof h.init != "undefined") throw new Error("History.js Core has already been loaded...");
	h.init = function(e) {
		return typeof h.Adapter == "undefined" ? !1 : (typeof h.initCore != "undefined" && h.initCore(), typeof h.initHtml4 != "undefined" && h.initHtml4(), !0)
	}, h.initCore = function(d) {
		if (typeof h.initCore.initialized != "undefined") return !1;
		h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || r.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function() {
			var e, t = h.intervalList;
			if (typeof t != "undefined" && t !== null) {
				for (e = 0; e < t.length; e++) f(t[e]);
				h.intervalList = null
			}
		}, h.debug = function() {
			(h.options.debug || !1) && h.log.apply(h, arguments)
		}, h.log = function() {
			var e = typeof n != "undefined" && typeof n.log != "undefined" && typeof n.log.apply != "undefined",
				t = r.getElementById("log"),
				i, s, o, u, a;
			e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), typeof n.debug != "undefined" ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n";
			for (s = 1, o = arguments.length; s < o; ++s) {
				a = arguments[s];
				if (typeof a == "object" && typeof l != "undefined") try {
					a = l.stringify(a)
				} catch (f) {}
				i += "\n" + a + "\n"
			}
			return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i), !0
		}, h.getInternetExplorerMajorVersion = function() {
			var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion.cached != "undefined" ? h.getInternetExplorerMajorVersion.cached : function() {
					var e = 3,
						t = r.createElement("div"),
						n = t.getElementsByTagName("i");
					while ((t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0]);
					return e > 4 ? e : !1
				}();
			return e
		}, h.isInternetExplorer = function() {
			var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached != "undefined" ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
			return e
		}, h.options.html4Mode ? h.emulated = {
			pushState: !0,
			hashChange: !0
		} : h.emulated = {
			pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),
			hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
		}, h.enabled = !h.emulated.pushState, h.bugs = {
			setHash: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
			safariPoll: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
			ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
			hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
		}, h.isEmptyObject = function(e) {
			for (var t in e) if (e.hasOwnProperty(t)) return !1;
			return !0
		}, h.cloneObject = function(e) {
			var t, n;
			return e ? (t = l.stringify(e), n = l.parse(t)) : n = {}, n
		}, h.getRootUrl = function() {
			var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
			if (r.location.port || !1) e += ":" + r.location.port;
			return e += "/", e
		}, h.getBaseHref = function() {
			var e = r.getElementsByTagName("base"),
				t = null,
				n = "";
			return e.length === 1 && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
		}, h.getBaseUrl = function() {
			var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
			return e
		}, h.getPageUrl = function() {
			var e = h.getState(!1, !1),
				t = (e || {}).url || h.getLocationHref(),
				n;
			return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function(e, t, n) {
				return /\./.test(e) ? e : e + "/"
			}), n
		}, h.getBasePageUrl = function() {
			var e = h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(e, t, n) {
				return /[^\/]$/.test(e) ? "" : e
			}).replace(/\/+$/, "") + "/";
			return e
		}, h.getFullUrl = function(e, t) {
			var n = e,
				r = e.substring(0, 1);
			return t = typeof t == "undefined" ? !0 : t, /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() + e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl().replace(/#.*/, "") + e : r === "?" ? n = h.getPageUrl().replace(/[\?#].*/, "") + e : t ? n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
		}, h.getShortUrl = function(e) {
			var t = e,
				n = h.getBaseUrl(),
				r = h.getRootUrl();
			return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), t
		}, h.getLocationHref = function(e) {
			return e = e || r, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : e.URL.indexOf("#") == -1 && e.location.href.indexOf("#") != -1 ? e.location.href : e.URL || e.location.href
		}, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function() {
			h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
		}, h.getState = function(e, t) {
			typeof e == "undefined" && (e = !0), typeof t == "undefined" && (t = !0);
			var n = h.getLastSavedState();
			return !n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n
		}, h.getIdByState = function(e) {
			var t = h.extractId(e.url),
				n;
			if (!t) {
				n = h.getStateString(e);
				if (typeof h.stateToId[n] != "undefined") t = h.stateToId[n];
				else if (typeof h.store.stateToId[n] != "undefined") t = h.store.stateToId[n];
				else {
					for (;;) {
						t = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
						if (typeof h.idToState[t] == "undefined" && typeof h.store.idToState[t] == "undefined") break
					}
					h.stateToId[n] = t, h.idToState[t] = e
				}
			}
			return t
		}, h.normalizeState = function(e) {
			var t, n;
			if (!e || typeof e != "object") e = {};
			if (typeof e.normalized != "undefined") return e;
			if (!e.data || typeof e.data != "object") e.data = {};
			return t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref()), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data), (t.title || n) && h.options.disableSuid !== !0 && (t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t
		}, h.createStateObject = function(e, t, n) {
			var r = {
				data: e,
				title: t,
				url: n
			};
			return r = h.normalizeState(r), r
		}, h.getStateById = function(e) {
			e = String(e);
			var n = h.idToState[e] || h.store.idToState[e] || t;
			return n
		}, h.getStateString = function(e) {
			var t, n, r;
			return t = h.normalizeState(e), n = {
				data: t.data,
				title: e.title,
				url: e.url
			}, r = l.stringify(n), r
		}, h.getStateId = function(e) {
			var t, n;
			return t = h.normalizeState(e), n = t.id, n
		}, h.getHashByState = function(e) {
			var t, n;
			return t = h.normalizeState(e), n = t.hash, n
		}, h.extractId = function(e) {
			var t, n, r, i;
			return e.indexOf("#") != -1 ? i = e.split("#")[0] : i = e, n = /(.*)\&_suid=([0-9]+)$/.exec(i), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1
		}, h.isTraditionalAnchor = function(e) {
			var t = !/[\/\?\.]/.test(e);
			return t
		}, h.extractState = function(e, t) {
			var n = null,
				r, i;
			return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))), n
		}, h.getIdByUrl = function(e) {
			var n = h.urlToId[e] || h.store.urlToId[e] || t;
			return n
		}, h.getLastSavedState = function() {
			return h.savedStates[h.savedStates.length - 1] || t
		}, h.getLastStoredState = function() {
			return h.storedStates[h.storedStates.length - 1] || t
		}, h.hasUrlDuplicate = function(e) {
			var t = !1,
				n;
			return n = h.extractState(e.url), t = n && n.id !== e.id, t
		}, h.storeState = function(e) {
			return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
		}, h.isLastSavedState = function(e) {
			var t = !1,
				n, r, i;
			return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i), t
		}, h.saveState = function(e) {
			return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0)
		}, h.getStateByIndex = function(e) {
			var t = null;
			return typeof e == "undefined" ? t = h.savedStates[h.savedStates.length - 1] : e < 0 ? t = h.savedStates[h.savedStates.length + e] : t = h.savedStates[e], t
		}, h.getCurrentIndex = function() {
			var e = null;
			return h.savedStates.length < 1 ? e = 0 : e = h.savedStates.length - 1, e
		}, h.getHash = function(e) {
			var t = h.getLocationHref(e),
				n;
			return n = h.getHashByUrl(t), n
		}, h.unescapeHash = function(e) {
			var t = h.normalizeHash(e);
			return t = decodeURIComponent(t), t
		}, h.normalizeHash = function(e) {
			var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
			return t
		}, h.setHash = function(e, t) {
			var n, i;
			return t !== !1 && h.busy() ? (h.pushQueue({
				scope: h,
				callback: h.setHash,
				args: arguments,
				queue: t
			}), !1) : (h.busy(!0), n = h.extractState(e, !0), n && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== e && (h.bugs.setHash ? (i = h.getPageUrl(), h.pushState(null, null, i + "#" + e, !1)) : r.location.hash = e), h)
		}, h.escapeHash = function(t) {
			var n = h.normalizeHash(t);
			return n = e.encodeURIComponent(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
		}, h.getHashByUrl = function(e) {
			var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
			return t = h.unescapeHash(t), t
		}, h.setTitle = function(e) {
			var t = e.title,
				n;
			t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));
			try {
				r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
			} catch (i) {}
			return r.title = t, h
		}, h.queues = [], h.busy = function(e) {
			typeof e != "undefined" ? h.busy.flag = e : typeof h.busy.flag == "undefined" && (h.busy.flag = !1);
			if (!h.busy.flag) {
				u(h.busy.timeout);
				var t = function() {
						var e, n, r;
						if (h.busy.flag) return;
						for (e = h.queues.length - 1; e >= 0; --e) {
							n = h.queues[e];
							if (n.length === 0) continue;
							r = n.shift(), h.fireQueueItem(r), h.busy.timeout = o(t, h.options.busyDelay)
						}
					};
				h.busy.timeout = o(t, h.options.busyDelay)
			}
			return h.busy.flag
		}, h.busy.flag = !1, h.fireQueueItem = function(e) {
			return e.callback.apply(e.scope || h, e.args || [])
		}, h.pushQueue = function(e) {
			return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
		}, h.queue = function(e, t) {
			return typeof e == "function" && (e = {
				callback: e
			}), typeof t != "undefined" && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
		}, h.clearQueue = function() {
			return h.busy.flag = !1, h.queues = [], h
		}, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function() {
			return h.stateChanged = !0, h.doubleCheckClear(), h
		}, h.doubleCheckClear = function() {
			return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1), h
		}, h.doubleCheck = function(e) {
			return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function() {
				return h.doubleCheckClear(), h.stateChanged || e(), !0
			}, h.options.doubleCheckInterval)), h
		}, h.safariStatePoll = function() {
			var t = h.extractState(h.getLocationHref()),
				n;
			if (!h.isLastSavedState(t)) return n = t, n || (n = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h;
			return
		}, h.back = function(e) {
			return e !== !1 && h.busy() ? (h.pushQueue({
				scope: h,
				callback: h.back,
				args: arguments,
				queue: e
			}), !1) : (h.busy(!0), h.doubleCheck(function() {
				h.back(!1)
			}), p.go(-1), !0)
		}, h.forward = function(e) {
			return e !== !1 && h.busy() ? (h.pushQueue({
				scope: h,
				callback: h.forward,
				args: arguments,
				queue: e
			}), !1) : (h.busy(!0), h.doubleCheck(function() {
				h.forward(!1)
			}), p.go(1), !0)
		}, h.go = function(e, t) {
			var n;
			if (e > 0) for (n = 1; n <= e; ++n) h.forward(t);
			else {
				if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
				for (n = -1; n >= e; --n) h.back(t)
			}
			return h
		};
		if (h.emulated.pushState) {
			var v = function() {};
			h.pushState = h.pushState || v, h.replaceState = h.replaceState || v
		} else h.onPopState = function(t, n) {
			var r = !1,
				i = !1,
				s, o;
			return h.doubleCheckComplete(), s = h.getHash(), s ? (o = h.extractState(s || h.getLocationHref(), !0), o ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (r = h.Adapter.extractEventData("state", t, n) || !1, r ? i = h.getStateById(r) : h.expectedStateId ? i = h.getStateById(h.expectedStateId) : i = h.extractState(h.getLocationHref()), i || (i = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(i) ? (h.busy(!1), !1) : (h.storeState(i), h.saveState(i), h.setTitle(i), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0))
		}, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState = function(t, n, r, i) {
			if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
			if (i !== !1 && h.busy()) return h.pushQueue({
				scope: h,
				callback: h.pushState,
				args: arguments,
				queue: i
			}), !1;
			h.busy(!0);
			var s = h.createStateObject(t, n, r);
			return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
		}, h.replaceState = function(t, n, r, i) {
			if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
			if (i !== !1 && h.busy()) return h.pushQueue({
				scope: h,
				callback: h.replaceState,
				args: arguments,
				queue: i
			}), !1;
			h.busy(!0);
			var s = h.createStateObject(t, n, r);
			return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
		};
		if (s) {
			try {
				h.store = l.parse(s.getItem("History.store")) || {}
			} catch (m) {
				h.store = {}
			}
			h.normalizeStore()
		} else h.store = {}, h.normalizeStore();
		h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), s && (h.onUnload = function() {
			var e, t, n;
			try {
				e = l.parse(s.getItem("History.store")) || {}
			} catch (r) {
				e = {}
			}
			e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
			for (t in h.idToState) {
				if (!h.idToState.hasOwnProperty(t)) continue;
				e.idToState[t] = h.idToState[t]
			}
			for (t in h.urlToId) {
				if (!h.urlToId.hasOwnProperty(t)) continue;
				e.urlToId[t] = h.urlToId[t]
			}
			for (t in h.stateToId) {
				if (!h.stateToId.hasOwnProperty(t)) continue;
				e.stateToId[t] = h.stateToId[t]
			}
			h.store = e, h.normalizeStore(), n = l.stringify(e);
			try {
				s.setItem("History.store", n)
			} catch (i) {
				if (i.code !== DOMException.QUOTA_EXCEEDED_ERR) throw i;
				s.length && (s.removeItem("History.store"), s.setItem("History.store", n))
			}
		}, h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload));
		if (!h.emulated.pushState) {
			h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));
			if (i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") === "Mozilla") h.Adapter.bind(e, "hashchange", function() {
				h.Adapter.trigger(e, "popstate")
			}), h.getHash() && h.Adapter.onDomLoad(function() {
				h.Adapter.trigger(e, "hashchange")
			})
		}
	}, (!h.options || !h.options.delayInit) && h.init()
}(window); /*mousewheel*/
(function(a) {
	function d(b) {
		var c = b || window.event,
			d = [].slice.call(arguments, 1),
			e = 0,
			f = !0,
			g = 0,
			h = 0;
		return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), h = e, c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS && (h = 0, g = -1 * e), c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120), c.wheelDeltaX !== undefined && (g = -1 * c.wheelDeltaX / 120), d.unshift(b, e, g, h), (a.event.dispatch || a.event.handle).apply(this, d)
	}
	var b = ["DOMMouseScroll", "mousewheel"];
	if (a.event.fixHooks) for (var c = b.length; c;) a.event.fixHooks[b[--c]] = a.event.mouseHooks;
	a.event.special.mousewheel = {
		setup: function() {
			if (this.addEventListener) for (var a = b.length; a;) this.addEventListener(b[--a], d, !1);
			else this.onmousewheel = d
		},
		teardown: function() {
			if (this.removeEventListener) for (var a = b.length; a;) this.removeEventListener(b[--a], d, !1);
			else this.onmousewheel = null
		}
	}, a.fn.extend({
		mousewheel: function(a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function(a) {
			return this.unbind("mousewheel", a)
		}
	})
})(jQuery); /*custom scrollbar*/
(function(c) {
	var b = {
		init: function(e) {
			var f = {
				set_width: false,
				set_height: false,
				horizontalScroll: false,
				scrollInertia: 950,
				mouseWheel: true,
				mouseWheelPixels: "auto",
				autoDraggerLength: true,
				autoHideScrollbar: false,
				alwaysShowScrollbar: false,
				snapAmount: null,
				snapOffset: 0,
				scrollButtons: {
					enable: false,
					scrollType: "continuous",
					scrollSpeed: "auto",
					scrollAmount: 40
				},
				advanced: {
					updateOnBrowserResize: true,
					updateOnContentResize: false,
					autoExpandHorizontalScroll: false,
					autoScrollOnFocus: true,
					normalizeMouseWheelDelta: false
				},
				contentTouchScroll: true,
				callbacks: {
					onScrollStart: function() {},
					onScroll: function() {},
					onTotalScroll: function() {},
					onTotalScrollBack: function() {},
					onTotalScrollOffset: 0,
					onTotalScrollBackOffset: 0,
					whileScrolling: function() {}
				},
				theme: "light"
			},
				e = c.extend(true, f, e);
			return this.each(function() {
				var m = c(this);
				if (e.set_width) {
					m.css("width", e.set_width)
				}
				if (e.set_height) {
					m.css("height", e.set_height)
				}
				if (!c(document).data("mCustomScrollbar-index")) {
					c(document).data("mCustomScrollbar-index", "1")
				} else {
					var t = parseInt(c(document).data("mCustomScrollbar-index"));
					c(document).data("mCustomScrollbar-index", t + 1)
				}
				m.wrapInner("<div class='mCustomScrollBox mCS-" + e.theme + "' id='mCSB_" + c(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_" + c(document).data("mCustomScrollbar-index"));
				var g = m.children(".mCustomScrollBox");
				if (e.horizontalScroll) {
					g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
					var k = g.children(".mCSB_h_wrapper");
					k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({
						width: k.children().outerWidth(),
						position: "relative"
					}).unwrap()
				} else {
					g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")
				}
				var o = g.children(".mCSB_container");
				if (c.support.touch) {
					o.addClass("mCS_touch")
				}
				o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
				var l = g.children(".mCSB_scrollTools"),
					h = l.children(".mCSB_draggerContainer"),
					q = h.children(".mCSB_dragger");
				if (e.horizontalScroll) {
					q.data("minDraggerWidth", q.width())
				} else {
					q.data("minDraggerHeight", q.height())
				}
				if (e.scrollButtons.enable) {
					if (e.horizontalScroll) {
						l.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>")
					} else {
						l.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")
					}
				}
				g.bind("scroll", function() {
					if (!m.is(".mCS_disabled")) {
						g.scrollTop(0).scrollLeft(0)
					}
				});
				m.data({
					mCS_Init: true,
					mCustomScrollbarIndex: c(document).data("mCustomScrollbar-index"),
					horizontalScroll: e.horizontalScroll,
					scrollInertia: e.scrollInertia,
					scrollEasing: "mcsEaseOut",
					mouseWheel: e.mouseWheel,
					mouseWheelPixels: e.mouseWheelPixels,
					autoDraggerLength: e.autoDraggerLength,
					autoHideScrollbar: e.autoHideScrollbar,
					alwaysShowScrollbar: e.alwaysShowScrollbar,
					snapAmount: e.snapAmount,
					snapOffset: e.snapOffset,
					scrollButtons_enable: e.scrollButtons.enable,
					scrollButtons_scrollType: e.scrollButtons.scrollType,
					scrollButtons_scrollSpeed: e.scrollButtons.scrollSpeed,
					scrollButtons_scrollAmount: e.scrollButtons.scrollAmount,
					autoExpandHorizontalScroll: e.advanced.autoExpandHorizontalScroll,
					autoScrollOnFocus: e.advanced.autoScrollOnFocus,
					normalizeMouseWheelDelta: e.advanced.normalizeMouseWheelDelta,
					contentTouchScroll: e.contentTouchScroll,
					onScrollStart_Callback: e.callbacks.onScrollStart,
					onScroll_Callback: e.callbacks.onScroll,
					onTotalScroll_Callback: e.callbacks.onTotalScroll,
					onTotalScrollBack_Callback: e.callbacks.onTotalScrollBack,
					onTotalScroll_Offset: e.callbacks.onTotalScrollOffset,
					onTotalScrollBack_Offset: e.callbacks.onTotalScrollBackOffset,
					whileScrolling_Callback: e.callbacks.whileScrolling,
					bindEvent_scrollbar_drag: false,
					bindEvent_content_touch: false,
					bindEvent_scrollbar_click: false,
					bindEvent_mousewheel: false,
					bindEvent_buttonsContinuous_y: false,
					bindEvent_buttonsContinuous_x: false,
					bindEvent_buttonsPixels_y: false,
					bindEvent_buttonsPixels_x: false,
					bindEvent_focusin: false,
					bindEvent_autoHideScrollbar: false,
					mCSB_buttonScrollRight: false,
					mCSB_buttonScrollLeft: false,
					mCSB_buttonScrollDown: false,
					mCSB_buttonScrollUp: false
				});
				if (e.horizontalScroll) {
					if (m.css("max-width") !== "none") {
						if (!e.advanced.updateOnContentResize) {
							e.advanced.updateOnContentResize = true
						}
					}
				} else {
					if (m.css("max-height") !== "none") {
						var s = false,
							r = parseInt(m.css("max-height"));
						if (m.css("max-height").indexOf("%") >= 0) {
							s = r, r = m.parent().height() * s / 100
						}
						m.css("overflow", "hidden");
						g.css("max-height", r)
					}
				}
				m.mCustomScrollbar("update");
				if (e.advanced.updateOnBrowserResize) {
					var i, j = c(window).width(),
						u = c(window).height();
					c(window).bind("resize." + m.data("mCustomScrollbarIndex"), function() {
						if (i) {
							clearTimeout(i)
						}
						i = setTimeout(function() {
							if (!m.is(".mCS_disabled") && !m.is(".mCS_destroyed")) {
								var w = c(window).width(),
									v = c(window).height();
								if (j !== w || u !== v) {
									if (m.css("max-height") !== "none" && s) {
										g.css("max-height", m.parent().height() * s / 100)
									}
									m.mCustomScrollbar("update");
									j = w;
									u = v
								}
							}
						}, 150)
					})
				}
				if (e.advanced.updateOnContentResize) {
					var p;
					if (e.horizontalScroll) {
						var n = o.outerWidth()
					} else {
						var n = o.outerHeight()
					}
					p = setInterval(function() {
						if (e.horizontalScroll) {
							if (e.advanced.autoExpandHorizontalScroll) {
								o.css({
									position: "absolute",
									width: "auto"
								}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
									width: o.outerWidth(),
									position: "relative"
								}).unwrap()
							}
							var v = o.outerWidth()
						} else {
							var v = o.outerHeight()
						}
						if (v != n) {
							m.mCustomScrollbar("update");
							n = v
						}
					}, 300)
				}
			})
		},
		update: function() {
			var n = c(this),
				k = n.children(".mCustomScrollBox"),
				q = k.children(".mCSB_container");
			q.removeClass("mCS_no_scrollbar");
			n.removeClass("mCS_disabled mCS_destroyed");
			k.scrollTop(0).scrollLeft(0);
			var y = k.children(".mCSB_scrollTools"),
				o = y.children(".mCSB_draggerContainer"),
				m = o.children(".mCSB_dragger");
			if (n.data("horizontalScroll")) {
				var A = y.children(".mCSB_buttonLeft"),
					t = y.children(".mCSB_buttonRight"),
					f = k.width();
				if (n.data("autoExpandHorizontalScroll")) {
					q.css({
						position: "absolute",
						width: "auto"
					}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
						width: q.outerWidth(),
						position: "relative"
					}).unwrap()
				}
				var z = q.outerWidth()
			} else {
				var w = y.children(".mCSB_buttonUp"),
					g = y.children(".mCSB_buttonDown"),
					r = k.height(),
					i = q.outerHeight()
			}
			if (i > r && !n.data("horizontalScroll")) {
				y.css("display", "block");
				var s = o.height();
				if (n.data("autoDraggerLength")) {
					var u = Math.round(r / i * s),
						l = m.data("minDraggerHeight");
					if (u <= l) {
						m.css({
							height: l
						})
					} else {
						if (u >= s - 10) {
							var p = s - 10;
							m.css({
								height: p
							})
						} else {
							m.css({
								height: u
							})
						}
					}
					m.children(".mCSB_dragger_bar").css({
						"line-height": m.height() + "px"
					})
				}
				var B = m.height(),
					x = (i - r) / (s - B);
				n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
				var D = Math.abs(q.position().top);
				n.mCustomScrollbar("scrollTo", D, {
					scrollInertia: 0,
					trigger: "internal"
				})
			} else {
				if (z > f && n.data("horizontalScroll")) {
					y.css("display", "block");
					var h = o.width();
					if (n.data("autoDraggerLength")) {
						var j = Math.round(f / z * h),
							C = m.data("minDraggerWidth");
						if (j <= C) {
							m.css({
								width: C
							})
						} else {
							if (j >= h - 10) {
								var e = h - 10;
								m.css({
									width: e
								})
							} else {
								m.css({
									width: j
								})
							}
						}
					}
					var v = m.width(),
						x = (z - f) / (h - v);
					n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
					var D = Math.abs(q.position().left);
					n.mCustomScrollbar("scrollTo", D, {
						scrollInertia: 0,
						trigger: "internal"
					})
				} else {
					k.unbind("mousewheel focusin");
					if (n.data("horizontalScroll")) {
						m.add(q).css("left", 0)
					} else {
						m.add(q).css("top", 0)
					}
					if (n.data("alwaysShowScrollbar")) {
						if (!n.data("horizontalScroll")) {
							m.css({
								height: o.height()
							})
						} else {
							if (n.data("horizontalScroll")) {
								m.css({
									width: o.width()
								})
							}
						}
					} else {
						y.css("display", "none");
						q.addClass("mCS_no_scrollbar")
					}
					n.data({
						bindEvent_mousewheel: false,
						bindEvent_focusin: false
					})
				}
			}
		},
		scrolling: function(i, q, n, k, A, f, D, w) {
			var l = c(this);
			if (!l.data("bindEvent_scrollbar_drag")) {
				var o, p, C, z, e;
				if (c.support.pointer) {
					C = "pointerdown";
					z = "pointermove";
					e = "pointerup"
				} else {
					if (c.support.msPointer) {
						C = "MSPointerDown";
						z = "MSPointerMove";
						e = "MSPointerUp"
					}
				}
				if (c.support.pointer || c.support.msPointer) {
					k.bind(C, function(K) {
						K.preventDefault();
						l.data({
							on_drag: true
						});
						k.addClass("mCSB_dragger_onDrag");
						var J = c(this),
							M = J.offset(),
							I = K.originalEvent.pageX - M.left,
							L = K.originalEvent.pageY - M.top;
						if (I < J.width() && I > 0 && L < J.height() && L > 0) {
							o = L;
							p = I
						}
					});
					c(document).bind(z + "." + l.data("mCustomScrollbarIndex"), function(K) {
						K.preventDefault();
						if (l.data("on_drag")) {
							var J = k,
								M = J.offset(),
								I = K.originalEvent.pageX - M.left,
								L = K.originalEvent.pageY - M.top;
							G(o, p, L, I)
						}
					}).bind(e + "." + l.data("mCustomScrollbarIndex"), function(x) {
						l.data({
							on_drag: false
						});
						k.removeClass("mCSB_dragger_onDrag")
					})
				} else {
					k.bind("mousedown touchstart", function(K) {
						K.preventDefault();
						K.stopImmediatePropagation();
						var J = c(this),
							N = J.offset(),
							I, M;
						if (K.type === "touchstart") {
							var L = K.originalEvent.touches[0] || K.originalEvent.changedTouches[0];
							I = L.pageX - N.left;
							M = L.pageY - N.top
						} else {
							l.data({
								on_drag: true
							});
							k.addClass("mCSB_dragger_onDrag");
							I = K.pageX - N.left;
							M = K.pageY - N.top
						}
						if (I < J.width() && I > 0 && M < J.height() && M > 0) {
							o = M;
							p = I
						}
					}).bind("touchmove", function(K) {
						K.preventDefault();
						K.stopImmediatePropagation();
						var N = K.originalEvent.touches[0] || K.originalEvent.changedTouches[0],
							J = c(this),
							M = J.offset(),
							I = N.pageX - M.left,
							L = N.pageY - M.top;
						G(o, p, L, I)
					});
					c(document).bind("mousemove." + l.data("mCustomScrollbarIndex"), function(K) {
						if (l.data("on_drag")) {
							var J = k,
								M = J.offset(),
								I = K.pageX - M.left,
								L = K.pageY - M.top;
							G(o, p, L, I)
						}
					}).bind("mouseup." + l.data("mCustomScrollbarIndex"), function(x) {
						l.data({
							on_drag: false
						});
						k.removeClass("mCSB_dragger_onDrag")
					})
				}
				l.data({
					bindEvent_scrollbar_drag: true
				})
			}
			function G(J, K, L, I) {
				if (l.data("horizontalScroll")) {
					l.mCustomScrollbar("scrollTo", (k.position().left - (K)) + I, {
						moveDragger: true,
						trigger: "internal"
					})
				} else {
					l.mCustomScrollbar("scrollTo", (k.position().top - (J)) + L, {
						moveDragger: true,
						trigger: "internal"
					})
				}
			}
			if (c.support.touch && l.data("contentTouchScroll")) {
				if (!l.data("bindEvent_content_touch")) {
					var m, E, s, t, v, F, H;
					q.bind("touchstart", function(x) {
						x.stopImmediatePropagation();
						m = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
						E = c(this);
						s = E.offset();
						v = m.pageX - s.left;
						t = m.pageY - s.top;
						F = t;
						H = v
					});
					q.bind("touchmove", function(x) {
						x.preventDefault();
						x.stopImmediatePropagation();
						m = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
						E = c(this).parent();
						s = E.offset();
						v = m.pageX - s.left;
						t = m.pageY - s.top;
						if (l.data("horizontalScroll")) {
							l.mCustomScrollbar("scrollTo", H - v, {
								trigger: "internal"
							})
						} else {
							l.mCustomScrollbar("scrollTo", F - t, {
								trigger: "internal"
							})
						}
					})
				}
			}
			if (!l.data("bindEvent_scrollbar_click")) {
				n.bind("click", function(I) {
					var x = (I.pageY - n.offset().top) * l.data("scrollAmount"),
						y = c(I.target);
					if (l.data("horizontalScroll")) {
						x = (I.pageX - n.offset().left) * l.data("scrollAmount")
					}
					if (y.hasClass("mCSB_draggerContainer") || y.hasClass("mCSB_draggerRail")) {
						l.mCustomScrollbar("scrollTo", x, {
							trigger: "internal",
							scrollEasing: "draggerRailEase"
						})
					}
				});
				l.data({
					bindEvent_scrollbar_click: true
				})
			}
			if (l.data("mouseWheel")) {
				if (!l.data("bindEvent_mousewheel")) {
					i.bind("mousewheel", function(K, M) {
						var J, I = l.data("mouseWheelPixels"),
							x = Math.abs(q.position().top),
							L = k.position().top,
							y = n.height() - k.height();
						if (l.data("normalizeMouseWheelDelta")) {
							if (M < 0) {
								M = -1
							} else {
								M = 1
							}
						}
						if (I === "auto") {
							I = 100 + Math.round(l.data("scrollAmount") / 2)
						}
						if (l.data("horizontalScroll")) {
							L = k.position().left;
							y = n.width() - k.width();
							x = Math.abs(q.position().left)
						}
						if ((M > 0 && L !== 0) || (M < 0 && L !== y)) {
							K.preventDefault();
							K.stopImmediatePropagation()
						}
						J = x - (M * I);
						l.mCustomScrollbar("scrollTo", J, {
							trigger: "internal"
						})
					});
					l.data({
						bindEvent_mousewheel: true
					})
				}
			}
			if (l.data("scrollButtons_enable")) {
				if (l.data("scrollButtons_scrollType") === "pixels") {
					if (l.data("horizontalScroll")) {
						w.add(D).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", j, h);
						l.data({
							bindEvent_buttonsContinuous_x: false
						});
						if (!l.data("bindEvent_buttonsPixels_x")) {
							w.bind("click", function(x) {
								x.preventDefault();
								r(Math.abs(q.position().left) + l.data("scrollButtons_scrollAmount"))
							});
							D.bind("click", function(x) {
								x.preventDefault();
								r(Math.abs(q.position().left) - l.data("scrollButtons_scrollAmount"))
							});
							l.data({
								bindEvent_buttonsPixels_x: true
							})
						}
					} else {
						f.add(A).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", j, h);
						l.data({
							bindEvent_buttonsContinuous_y: false
						});
						if (!l.data("bindEvent_buttonsPixels_y")) {
							f.bind("click", function(x) {
								x.preventDefault();
								r(Math.abs(q.position().top) + l.data("scrollButtons_scrollAmount"))
							});
							A.bind("click", function(x) {
								x.preventDefault();
								r(Math.abs(q.position().top) - l.data("scrollButtons_scrollAmount"))
							});
							l.data({
								bindEvent_buttonsPixels_y: true
							})
						}
					}
					function r(x) {
						if (!k.data("preventAction")) {
							k.data("preventAction", true);
							l.mCustomScrollbar("scrollTo", x, {
								trigger: "internal"
							})
						}
					}
				} else {
					if (l.data("horizontalScroll")) {
						w.add(D).unbind("click");
						l.data({
							bindEvent_buttonsPixels_x: false
						});
						if (!l.data("bindEvent_buttonsContinuous_x")) {
							w.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
								y.preventDefault();
								var x = B();
								l.data({
									mCSB_buttonScrollRight: setInterval(function() {
										l.mCustomScrollbar("scrollTo", Math.abs(q.position().left) + x, {
											trigger: "internal",
											scrollEasing: "easeOutCirc"
										})
									}, 17)
								})
							});
							var j = function(x) {
									x.preventDefault();
									clearInterval(l.data("mCSB_buttonScrollRight"))
								};
							w.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", j);
							D.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
								y.preventDefault();
								var x = B();
								l.data({
									mCSB_buttonScrollLeft: setInterval(function() {
										l.mCustomScrollbar("scrollTo", Math.abs(q.position().left) - x, {
											trigger: "internal",
											scrollEasing: "easeOutCirc"
										})
									}, 17)
								})
							});
							var h = function(x) {
									x.preventDefault();
									clearInterval(l.data("mCSB_buttonScrollLeft"))
								};
							D.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", h);
							l.data({
								bindEvent_buttonsContinuous_x: true
							})
						}
					} else {
						f.add(A).unbind("click");
						l.data({
							bindEvent_buttonsPixels_y: false
						});
						if (!l.data("bindEvent_buttonsContinuous_y")) {
							f.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
								y.preventDefault();
								var x = B();
								l.data({
									mCSB_buttonScrollDown: setInterval(function() {
										l.mCustomScrollbar("scrollTo", Math.abs(q.position().top) + x, {
											trigger: "internal",
											scrollEasing: "easeOutCirc"
										})
									}, 17)
								})
							});
							var u = function(x) {
									x.preventDefault();
									clearInterval(l.data("mCSB_buttonScrollDown"))
								};
							f.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", u);
							A.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
								y.preventDefault();
								var x = B();
								l.data({
									mCSB_buttonScrollUp: setInterval(function() {
										l.mCustomScrollbar("scrollTo", Math.abs(q.position().top) - x, {
											trigger: "internal",
											scrollEasing: "easeOutCirc"
										})
									}, 17)
								})
							});
							var g = function(x) {
									x.preventDefault();
									clearInterval(l.data("mCSB_buttonScrollUp"))
								};
							A.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", g);
							l.data({
								bindEvent_buttonsContinuous_y: true
							})
						}
					}
					function B() {
						var x = l.data("scrollButtons_scrollSpeed");
						if (l.data("scrollButtons_scrollSpeed") === "auto") {
							x = Math.round((l.data("scrollInertia") + 100) / 40)
						}
						return x
					}
				}
			}
			if (l.data("autoScrollOnFocus")) {
				if (!l.data("bindEvent_focusin")) {
					i.bind("focusin", function() {
						i.scrollTop(0).scrollLeft(0);
						var x = c(document.activeElement);
						if (x.is("input,textarea,select,button,a[tabindex],area,object")) {
							var J = q.position().top,
								y = x.position().top,
								I = i.height() - x.outerHeight();
							if (l.data("horizontalScroll")) {
								J = q.position().left;
								y = x.position().left;
								I = i.width() - x.outerWidth()
							}
							if (J + y < 0 || J + y > I) {
								l.mCustomScrollbar("scrollTo", y, {
									trigger: "internal"
								})
							}
						}
					});
					l.data({
						bindEvent_focusin: true
					})
				}
			}
			if (l.data("autoHideScrollbar") && !l.data("alwaysShowScrollbar")) {
				if (!l.data("bindEvent_autoHideScrollbar")) {
					i.bind("mouseenter", function(x) {
						i.addClass("mCS-mouse-over");
						d.showScrollbar.call(i.children(".mCSB_scrollTools"))
					}).bind("mouseleave touchend", function(x) {
						i.removeClass("mCS-mouse-over");
						if (x.type === "mouseleave") {
							d.hideScrollbar.call(i.children(".mCSB_scrollTools"))
						}
					});
					l.data({
						bindEvent_autoHideScrollbar: true
					})
				}
			}
		},
		scrollTo: function(e, f) {
			var i = c(this),
				o = {
					moveDragger: false,
					trigger: "external",
					callbacks: true,
					scrollInertia: i.data("scrollInertia"),
					scrollEasing: i.data("scrollEasing")
				},
				f = c.extend(o, f),
				p, g = i.children(".mCustomScrollBox"),
				k = g.children(".mCSB_container"),
				r = g.children(".mCSB_scrollTools"),
				j = r.children(".mCSB_draggerContainer"),
				h = j.children(".mCSB_dragger"),
				t = draggerSpeed = f.scrollInertia,
				q, s, m, l;
			if (!k.hasClass("mCS_no_scrollbar")) {
				i.data({
					mCS_trigger: f.trigger
				});
				if (i.data("mCS_Init")) {
					f.callbacks = false
				}
				if (e || e === 0) {
					if (typeof(e) === "number") {
						if (f.moveDragger) {
							p = e;
							if (i.data("horizontalScroll")) {
								e = h.position().left * i.data("scrollAmount")
							} else {
								e = h.position().top * i.data("scrollAmount")
							}
							draggerSpeed = 0
						} else {
							p = e / i.data("scrollAmount")
						}
					} else {
						if (typeof(e) === "string") {
							var v;
							if (e === "top") {
								v = 0
							} else {
								if (e === "bottom" && !i.data("horizontalScroll")) {
									v = k.outerHeight() - g.height()
								} else {
									if (e === "left") {
										v = 0
									} else {
										if (e === "right" && i.data("horizontalScroll")) {
											v = k.outerWidth() - g.width()
										} else {
											if (e === "first") {
												v = i.find(".mCSB_container").find(":first")
											} else {
												if (e === "last") {
													v = i.find(".mCSB_container").find(":last")
												} else {
													v = i.find(e)
												}
											}
										}
									}
								}
							}
							if (v.length === 1) {
								if (i.data("horizontalScroll")) {
									e = v.position().left
								} else {
									e = v.position().top
								}
								p = e / i.data("scrollAmount")
							} else {
								p = e = v
							}
						}
					}
					if (i.data("horizontalScroll")) {
						if (i.data("onTotalScrollBack_Offset")) {
							s = -i.data("onTotalScrollBack_Offset")
						}
						if (i.data("onTotalScroll_Offset")) {
							l = g.width() - k.outerWidth() + i.data("onTotalScroll_Offset")
						}
						if (p < 0) {
							p = e = 0;
							clearInterval(i.data("mCSB_buttonScrollLeft"));
							if (!s) {
								q = true
							}
						} else {
							if (p >= j.width() - h.width()) {
								p = j.width() - h.width();
								e = g.width() - k.outerWidth();
								clearInterval(i.data("mCSB_buttonScrollRight"));
								if (!l) {
									m = true
								}
							} else {
								e = -e
							}
						}
						var n = i.data("snapAmount");
						if (n) {
							e = Math.round(e / n) * n - i.data("snapOffset")
						}
						d.mTweenAxis.call(this, h[0], "left", Math.round(p), draggerSpeed, f.scrollEasing);
						d.mTweenAxis.call(this, k[0], "left", Math.round(e), t, f.scrollEasing, {
							onStart: function() {
								if (f.callbacks && !i.data("mCS_tweenRunning")) {
									u("onScrollStart")
								}
								if (i.data("autoHideScrollbar") && !i.data("alwaysShowScrollbar")) {
									d.showScrollbar.call(r)
								}
							},
							onUpdate: function() {
								if (f.callbacks) {
									u("whileScrolling")
								}
							},
							onComplete: function() {
								if (f.callbacks) {
									u("onScroll");
									if (q || (s && k.position().left >= s)) {
										u("onTotalScrollBack")
									}
									if (m || (l && k.position().left <= l)) {
										u("onTotalScroll")
									}
								}
								h.data("preventAction", false);
								i.data("mCS_tweenRunning", false);
								if (i.data("autoHideScrollbar") && !i.data("alwaysShowScrollbar")) {
									if (!g.hasClass("mCS-mouse-over")) {
										d.hideScrollbar.call(r)
									}
								}
							}
						})
					} else {
						if (i.data("onTotalScrollBack_Offset")) {
							s = -i.data("onTotalScrollBack_Offset")
						}
						if (i.data("onTotalScroll_Offset")) {
							l = g.height() - k.outerHeight() + i.data("onTotalScroll_Offset")
						}
						if (p < 0) {
							p = e = 0;
							clearInterval(i.data("mCSB_buttonScrollUp"));
							if (!s) {
								q = true
							}
						} else {
							if (p >= j.height() - h.height()) {
								p = j.height() - h.height();
								e = g.height() - k.outerHeight();
								clearInterval(i.data("mCSB_buttonScrollDown"));
								if (!l) {
									m = true
								}
							} else {
								e = -e
							}
						}
						var n = i.data("snapAmount");
						if (n) {
							e = Math.round(e / n) * n - i.data("snapOffset")
						}
						d.mTweenAxis.call(this, h[0], "top", Math.round(p), draggerSpeed, f.scrollEasing);
						d.mTweenAxis.call(this, k[0], "top", Math.round(e), t, f.scrollEasing, {
							onStart: function() {
								if (f.callbacks && !i.data("mCS_tweenRunning")) {
									u("onScrollStart")
								}
								if (i.data("autoHideScrollbar") && !i.data("alwaysShowScrollbar")) {
									d.showScrollbar.call(r)
								}
							},
							onUpdate: function() {
								if (f.callbacks) {
									u("whileScrolling")
								}
							},
							onComplete: function() {
								if (f.callbacks) {
									u("onScroll");
									if (q || (s && k.position().top >= s)) {
										u("onTotalScrollBack")
									}
									if (m || (l && k.position().top <= l)) {
										u("onTotalScroll")
									}
								}
								h.data("preventAction", false);
								i.data("mCS_tweenRunning", false);
								if (i.data("autoHideScrollbar") && !i.data("alwaysShowScrollbar")) {
									if (!g.hasClass("mCS-mouse-over")) {
										d.hideScrollbar.call(r)
									}
								}
							}
						})
					}
					if (i.data("mCS_Init")) {
						i.data({
							mCS_Init: false
						})
					}
				}
			}
			function u(w) {
				if (i.data("mCustomScrollbarIndex")) {
					this.mcs = {
						top: k.position().top,
						left: k.position().left,
						draggerTop: h.position().top,
						draggerLeft: h.position().left,
						topPct: Math.round((100 * Math.abs(k.position().top)) / Math.abs(k.outerHeight() - g.height())),
						leftPct: Math.round((100 * Math.abs(k.position().left)) / Math.abs(k.outerWidth() - g.width()))
					};
					switch (w) {
					case "onScrollStart":
						i.data("mCS_tweenRunning", true).data("onScrollStart_Callback").call(i, this.mcs);
						break;
					case "whileScrolling":
						i.data("whileScrolling_Callback").call(i, this.mcs);
						break;
					case "onScroll":
						i.data("onScroll_Callback").call(i, this.mcs);
						break;
					case "onTotalScrollBack":
						i.data("onTotalScrollBack_Callback").call(i, this.mcs);
						break;
					case "onTotalScroll":
						i.data("onTotalScroll_Callback").call(i, this.mcs);
						break
					}
				}
			}
		},
		stop: function() {
			var g = c(this),
				e = g.children().children(".mCSB_container"),
				f = g.children().children().children().children(".mCSB_dragger");
			d.mTweenAxisStop.call(this, e[0]);
			d.mTweenAxisStop.call(this, f[0])
		},
		disable: function(e) {
			var j = c(this),
				f = j.children(".mCustomScrollBox"),
				h = f.children(".mCSB_container"),
				g = f.children(".mCSB_scrollTools"),
				i = g.children().children(".mCSB_dragger");
			f.unbind("mousewheel focusin mouseenter mouseleave touchend");
			h.unbind("touchstart touchmove");
			if (e) {
				if (j.data("horizontalScroll")) {
					i.add(h).css("left", 0)
				} else {
					i.add(h).css("top", 0)
				}
			}
			g.css("display", "none");
			h.addClass("mCS_no_scrollbar");
			j.data({
				bindEvent_mousewheel: false,
				bindEvent_focusin: false,
				bindEvent_content_touch: false,
				bindEvent_autoHideScrollbar: false
			}).addClass("mCS_disabled")
		},
		destroy: function() {
			var e = c(this);
			e.removeClass("mCustomScrollbar _mCS_" + e.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();
			c(document).unbind("mousemove." + e.data("mCustomScrollbarIndex") + " mouseup." + e.data("mCustomScrollbarIndex") + " MSPointerMove." + e.data("mCustomScrollbarIndex") + " MSPointerUp." + e.data("mCustomScrollbarIndex"));
			c(window).unbind("resize." + e.data("mCustomScrollbarIndex"))
		}
	},
		d = {
			showScrollbar: function() {
				this.stop().animate({
					opacity: 1
				}, "fast")
			},
			hideScrollbar: function() {
				this.stop().animate({
					opacity: 0
				}, "fast")
			},
			mTweenAxis: function(g, i, h, f, o, y) {
				var y = y || {},
					v = y.onStart ||
				function() {}, p = y.onUpdate ||
				function() {}, w = y.onComplete ||
				function() {};
				var n = t(),
					l, j = 0,
					r = g.offsetTop,
					s = g.style;
				if (i === "left") {
					r = g.offsetLeft
				}
				var m = h - r;
				q();
				e();

				function t() {
					if (window.performance && window.performance.now) {
						return window.performance.now()
					} else {
						if (window.performance && window.performance.webkitNow) {
							return window.performance.webkitNow()
						} else {
							if (Date.now) {
								return Date.now()
							} else {
								return new Date().getTime()
							}
						}
					}
				}
				function x() {
					if (!j) {
						v.call()
					}
					j = t() - n;
					u();
					if (j >= g._time) {
						g._time = (j > g._time) ? j + l - (j - g._time) : j + l - 1;
						if (g._time < j + 1) {
							g._time = j + 1
						}
					}
					if (g._time < f) {
						g._id = _request(x)
					} else {
						w.call()
					}
				}
				function u() {
					if (f > 0) {
						g.currVal = k(g._time, r, m, f, o);
						s[i] = Math.round(g.currVal) + "px"
					} else {
						s[i] = h + "px"
					}
					p.call()
				}
				function e() {
					l = 1000 / 60;
					g._time = j + l;
					_request = (!window.requestAnimationFrame) ?
					function(z) {
						u();
						return setTimeout(z, 0.01)
					} : window.requestAnimationFrame;
					g._id = _request(x)
				}
				function q() {
					if (g._id == null) {
						return
					}
					if (!window.requestAnimationFrame) {
						clearTimeout(g._id)
					} else {
						window.cancelAnimationFrame(g._id)
					}
					g._id = null
				}
				function k(B, A, F, E, C) {
					switch (C) {
					case "linear":
						return F * B / E + A;
						break;
					case "easeOutQuad":
						B /= E;
						return -F * B * (B - 2) + A;
						break;
					case "easeInOutQuad":
						B /= E / 2;
						if (B < 1) {
							return F / 2 * B * B + A
						}
						B--;
						return -F / 2 * (B * (B - 2) - 1) + A;
						break;
					case "easeOutCubic":
						B /= E;
						B--;
						return F * (B * B * B + 1) + A;
						break;
					case "easeOutQuart":
						B /= E;
						B--;
						return -F * (B * B * B * B - 1) + A;
						break;
					case "easeOutQuint":
						B /= E;
						B--;
						return F * (B * B * B * B * B + 1) + A;
						break;
					case "easeOutCirc":
						B /= E;
						B--;
						return F * Math.sqrt(1 - B * B) + A;
						break;
					case "easeOutSine":
						return F * Math.sin(B / E * (Math.PI / 2)) + A;
						break;
					case "easeOutExpo":
						return F * (-Math.pow(2, -10 * B / E) + 1) + A;
						break;
					case "mcsEaseOut":
						var D = (B /= E) * B,
							z = D * B;
						return A + F * (0.499999999999997 * z * D + -2.5 * D * D + 5.5 * z + -6.5 * D + 4 * B);
						break;
					case "draggerRailEase":
						B /= E / 2;
						if (B < 1) {
							return F / 2 * B * B * B + A
						}
						B -= 2;
						return F / 2 * (B * B * B + 2) + A;
						break
					}
				}
			},
			mTweenAxisStop: function(e) {
				if (e._id == null) {
					return
				}
				if (!window.requestAnimationFrame) {
					clearTimeout(e._id)
				} else {
					window.cancelAnimationFrame(e._id)
				}
				e._id = null
			},
			rafPolyfill: function() {
				var f = ["ms", "moz", "webkit", "o"],
					e = f.length;
				while (--e > -1 && !window.requestAnimationFrame) {
					window.requestAnimationFrame = window[f[e] + "RequestAnimationFrame"];
					window.cancelAnimationFrame = window[f[e] + "CancelAnimationFrame"] || window[f[e] + "CancelRequestAnimationFrame"]
				}
			}
		};
	d.rafPolyfill.call();
	c.support.touch = !! ("ontouchstart" in window);
	c.support.pointer = window.navigator.pointerEnabled;
	c.support.msPointer = window.navigator.msPointerEnabled;
	var a = ("https:" == document.location.protocol) ? "https:" : "http:";
	c.event.special.mousewheel || document.write('<script src="' + a + '//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');
	c.fn.mCustomScrollbar = function(e) {
		if (b[e]) {
			return b[e].apply(this, Array.prototype.slice.call(arguments, 1))
		} else {
			if (typeof e === "object" || !e) {
				return b.init.apply(this, arguments)
			} else {
				c.error("Method " + e + " does not exist")
			}
		}
	}
})(jQuery);;
/*!
	Autosize v1.17.2 - 2013-07-30
	Automatically adjust textarea height based on user input.
	(c) 2013 Jack Moore - http://www.jacklmoore.com/autosize
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e) {
	var t, o = {
		className: "autosizejs",
		append: "",
		callback: !1,
		resizeDelay: 10
	},
		i = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',
		n = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"],
		s = e(i).data("autosize", !0)[0];
	s.style.lineHeight = "99px", "99px" === e(s).css("lineHeight") && n.push("lineHeight"), s.style.lineHeight = "", e.fn.autosize = function(i) {
		return i = e.extend({}, o, i || {}), s.parentNode !== document.body && e(document.body).append(s), this.each(function() {
			function o() {
				var o, a = {};
				if (t = u, s.className = i.className, l = parseInt(h.css("maxHeight"), 10), e.each(n, function(e, t) {
					a[t] = h.css(t)
				}), e(s).css(a), "oninput" in u) {
					var r = u.style.width;
					u.style.width = "0px", o = u.offsetWidth, u.style.width = r
				}
			}
			function a() {
				var n, a, r, c;
				t !== u && o(), s.value = u.value + i.append, s.style.overflowY = u.style.overflowY, a = parseInt(u.style.height, 10), "getComputedStyle" in window ? (c = window.getComputedStyle(u), r = u.getBoundingClientRect().width, e.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function(e, t) {
					r -= parseInt(c[t], 10)
				}), s.style.width = r + "px") : s.style.width = Math.max(h.width(), 0) + "px", s.scrollTop = 0, s.scrollTop = 9e4, n = s.scrollTop, l && n > l ? (u.style.overflowY = "scroll", n = l) : (u.style.overflowY = "hidden", d > n && (n = d)), n += p, a !== n && (u.style.height = n + "px", f && i.callback.call(u, u))
			}
			function r() {
				clearTimeout(c), c = setTimeout(function() {
					h.width() !== z && a()
				}, parseInt(i.resizeDelay, 10))
			}
			var l, d, c, u = this,
				h = e(u),
				p = 0,
				f = e.isFunction(i.callback),
				w = {
					height: u.style.height,
					overflow: u.style.overflow,
					overflowY: u.style.overflowY,
					wordWrap: u.style.wordWrap,
					resize: u.style.resize
				},
				z = h.width();
			h.data("autosize") || (h.data("autosize", !0), ("border-box" === h.css("box-sizing") || "border-box" === h.css("-moz-box-sizing") || "border-box" === h.css("-webkit-box-sizing")) && (p = h.outerHeight() - h.height()), d = Math.max(parseInt(h.css("minHeight"), 10) - p || 0, h.height()), h.css({
				overflow: "hidden",
				overflowY: "hidden",
				wordWrap: "break-word",
				resize: "none" === h.css("resize") || "vertical" === h.css("resize") ? "none" : "horizontal"
			}), "onpropertychange" in u ? "oninput" in u ? h.on("input.autosize keyup.autosize", a) : h.on("propertychange.autosize", function() {
				"value" === event.propertyName && a()
			}) : h.on("input.autosize", a), i.resizeDelay !== !1 && e(window).on("resize.autosize", r), h.on("autosize.resize", a), h.on("autosize.resizeIncludeStyle", function() {
				t = null, a()
			}), h.on("autosize.destroy", function() {
				t = null, clearTimeout(c), e(window).off("resize", r), h.off("autosize").off(".autosize").css(w).removeData("autosize")
			}), a())
		})
	}
})(jQuery);; /* Tooltipster v3.1.0 */
;
(function(e, t, n) {
	function o(t, n) {
		this.bodyOverflowX;
		this.callbacks = {
			hide: [],
			show: []
		};
		this.checkInterval = null;
		this.content;
		this.$el = e(t);
		this.$elProxy;
		this.elProxyPosition;
		this.enabled = true;
		this.options = e.extend({}, s, n);
		this.mouseIsOverProxy = false;
		this.namespace = "tooltipster-" + Math.round(Math.random() * 1e5);
		this.status = "hidden";
		this.timerHide = null;
		this.timerShow = null;
		this.$tooltip;
		this.options.iconTheme = this.options.iconTheme.replace(".", "");
		this.options.theme = this.options.theme.replace(".", "");
		this.init()
	}
	function u(t, n) {
		var r = true;
		e.each(t, function(e, i) {
			if (typeof n[e] === "undefined" || t[e] !== n[e]) {
				r = false;
				return false
			}
		});
		return r
	}
	function l() {
		return !f && a
	}
	function c() {
		var e = n.body || n.documentElement,
			t = e.style,
			r = "transition";
		if (typeof t[r] == "string") {
			return true
		}
		v = ["Moz", "Webkit", "Khtml", "O", "ms"], r = r.charAt(0).toUpperCase() + r.substr(1);
		for (var i = 0; i < v.length; i++) {
			if (typeof t[v[i] + r] == "string") {
				return true
			}
		}
		return false
	}
	var r = "tooltipster",
		s = {
			animation: "fade",
			arrow: true,
			arrowColor: "",
			autoClose: true,
			content: null,
			contentAsHTML: false,
			contentCloning: true,
			delay: 200,
			fixedWidth: 0,
			maxWidth: 0,
			functionInit: function(e, t) {},
			functionBefore: function(e, t) {
				t()
			},
			functionReady: function(e, t) {},
			functionAfter: function(e) {},
			icon: "(?)",
			iconCloning: true,
			iconDesktop: false,
			iconTouch: false,
			iconTheme: "tooltipster-icon",
			interactive: false,
			interactiveTolerance: 350,
			offsetX: 0,
			offsetY: 0,
			onlyOne: false,
			position: "top",
			positionTracker: false,
			speed: 350,
			timer: 0,
			theme: "tooltipster-default",
			touchDevices: true,
			trigger: "hover",
			updateAnimation: true
		};
	o.prototype = {
		init: function() {
			var t = this;
			if (n.querySelector) {
				if (t.options.content !== null) {
					t.setContent(t.options.content)
				} else {
					var r = t.$el.attr("title");
					if (typeof r === "undefined") r = null;
					t.setContent(r)
				}
				var i = t.options.functionInit.call(t.$el, t.$el, t.content);
				if (typeof i !== "undefined") t.setContent(i);
				t.$el.removeAttr("title").addClass("tooltipstered");
				if (!a && t.options.iconDesktop || a && t.options.iconTouch) {
					if (typeof t.options.icon === "string") {
						t.$elProxy = e('<span class="' + t.options.iconTheme + '"></span>');
						t.$elProxy.text(t.options.icon)
					} else {
						if (t.options.iconCloning) t.$elProxy = t.options.icon.clone(true);
						else t.$elProxy = t.options.icon
					}
					t.$elProxy.insertAfter(t.$el)
				} else {
					t.$elProxy = t.$el
				}
				if (t.options.trigger == "hover") {
					t.$elProxy.on("mouseenter." + t.namespace, function() {
						if (!l() || t.options.touchDevices) {
							t.mouseIsOverProxy = true;
							t.showTooltip()
						}
					}).on("mouseleave." + t.namespace, function() {
						if (!l() || t.options.touchDevices) {
							t.mouseIsOverProxy = false
						}
					});
					if (a && t.options.touchDevices) {
						t.$elProxy.on("touchstart." + t.namespace, function() {
							t.showTooltipNow()
						})
					}
				} else if (t.options.trigger == "click") {
					t.$elProxy.on("click." + t.namespace, function() {
						if (!l() || t.options.touchDevices) {
							t.showTooltip()
						}
					})
				}
			}
		},
		showTooltip: function() {
			var e = this;
			if (e.status != "shown" && e.status != "appearing") {
				if (e.options.delay) {
					e.timerShow = setTimeout(function() {
						if (e.options.trigger == "click" || e.options.trigger == "hover" && e.mouseIsOverProxy) {
							e.showTooltipNow()
						}
					}, e.options.delay)
				} else e.showTooltipNow()
			}
		},
		showTooltipNow: function(n) {
			var i = this;
			i.options.functionBefore.call(i.$el, i.$el, function() {
				if (i.enabled && i.content !== null) {
					if (n) i.callbacks.show.push(n);
					i.callbacks.hide = [];
					clearTimeout(i.timerShow);
					i.timerShow = null;
					clearTimeout(i.timerHide);
					i.timerHide = null;
					if (i.options.onlyOne) {
						e(".tooltipstered").not(i.$el).each(function(t, n) {
							var i = e(n),
								s = i[r]("status"),
								o = i[r]("option", "autoClose");
							if (s !== "hidden" && s !== "disappearing" && o) {
								i[r]("hide")
							}
						})
					}
					var s = function() {
							i.status = "shown";
							e.each(i.callbacks.show, function(e, t) {
								t.call(i.$el)
							});
							i.callbacks.show = []
						};
					if (i.status !== "hidden") {
						var o = 0;
						if (i.status === "disappearing") {
							i.status = "appearing";
							if (c()) {
								i.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + i.options.animation + "-show");
								if (i.options.speed > 0) i.$tooltip.delay(i.options.speed);
								i.$tooltip.queue(s)
							} else {
								i.$tooltip.stop().fadeIn(s)
							}
						} else if (i.status === "shown") {
							s()
						}
					} else {
						i.status = "appearing";
						var o = i.options.speed;
						i.bodyOverflowX = e("body").css("overflow-x");
						e("body").css("overflow-x", "hidden");
						var u = "tooltipster-" + i.options.animation,
							f = "-webkit-transition-duration: " + i.options.speed + "ms; -webkit-animation-duration: " + i.options.speed + "ms; -moz-transition-duration: " + i.options.speed + "ms; -moz-animation-duration: " + i.options.speed + "ms; -o-transition-duration: " + i.options.speed + "ms; -o-animation-duration: " + i.options.speed + "ms; -ms-transition-duration: " + i.options.speed + "ms; -ms-animation-duration: " + i.options.speed + "ms; transition-duration: " + i.options.speed + "ms; animation-duration: " + i.options.speed + "ms;",
							l = i.options.fixedWidth > 0 ? "width:" + Math.round(i.options.fixedWidth) + "px;" : "",
							h = i.options.maxWidth > 0 ? "max-width:" + Math.round(i.options.maxWidth) + "px;" : "",
							p = i.options.interactive ? "pointer-events: auto;" : "";
						i.$tooltip = e('<div class="tooltipster-base ' + i.options.theme + '" style="' + l + " " + h + " " + p + " " + f + '"><div class="tooltipster-content"></div></div>');
						if (c()) i.$tooltip.addClass(u);
						i.insertContent();
						i.$tooltip.appendTo("body");
						i.positionTooltip();
						i.options.functionReady.call(i.$el, i.$el, i.$tooltip);
						if (c()) {
							i.$tooltip.addClass(u + "-show");
							if (i.options.speed > 0) i.$tooltip.delay(i.options.speed);
							i.$tooltip.queue(s)
						} else {
							i.$tooltip.css("display", "none").fadeIn(i.options.speed, s)
						}
						i.setCheckInterval();
						e(t).on("scroll." + i.namespace + " resize." + i.namespace, function() {
							i.positionTooltip()
						});
						if (i.options.autoClose) {
							e("body").off("." + i.namespace);
							if (i.options.trigger == "hover") {
								if (a) {
									setTimeout(function() {
										e("body").on("touchstart." + i.namespace, function() {
											i.hideTooltip()
										})
									}, 0)
								}
								if (i.options.interactive) {
									if (a) {
										i.$tooltip.on("touchstart." + i.namespace, function(e) {
											e.stopPropagation()
										})
									}
									var d = null;
									i.$elProxy.add(i.$tooltip).on("mouseleave." + i.namespace + "-autoClose", function() {
										clearTimeout(d);
										d = setTimeout(function() {
											i.hideTooltip()
										}, i.options.interactiveTolerance)
									}).on("mouseenter." + i.namespace + "-autoClose", function() {
										clearTimeout(d)
									})
								} else {
									i.$elProxy.on("mouseleave." + i.namespace + "-autoClose", function() {
										i.hideTooltip()
									})
								}
							} else if (i.options.trigger == "click") {
								setTimeout(function() {
									e("body").on("click." + i.namespace + " touchstart." + i.namespace, function() {
										i.hideTooltip()
									})
								}, 0);
								if (i.options.interactive) {
									i.$tooltip.on("click." + i.namespace + " touchstart." + i.namespace, function(e) {
										e.stopPropagation()
									})
								}
							}
						}
					}
					if (i.options.timer > 0) {
						i.timerHide = setTimeout(function() {
							i.timerHide = null;
							i.hideTooltip()
						}, i.options.timer + o)
					}
				}
			})
		},
		setCheckInterval: function() {
			var t = this;
			t.checkInterval = setInterval(function() {
				if (e("body").find(t.$el).length === 0 || e("body").find(t.$elProxy).length === 0 || t.status == "hidden" || e("body").find(t.$tooltip).length === 0) {
					if (t.status == "shown" || t.status == "appearing") t.hideTooltip();
					t.cancelCheckInterval()
				} else {
					if (t.options.positionTracker) {
						var n = t.positionInfo(t.$elProxy),
							r = false;
						if (u(n.dimension, t.elProxyPosition.dimension)) {
							if (t.$elProxy.css("position") === "fixed") {
								if (u(n.position, t.elProxyPosition.position)) r = true
							} else {
								if (u(n.offset, t.elProxyPosition.offset)) r = true
							}
						}
						if (!r) {
							t.positionTooltip()
						}
					}
				}
			}, 200)
		},
		cancelCheckInterval: function() {
			clearInterval(this.checkInterval);
			this.checkInterval = null
		},
		hideTooltip: function(n) {
			var r = this;
			if (n) r.callbacks.hide.push(n);
			r.callbacks.show = [];
			clearTimeout(r.timerShow);
			r.timerShow = null;
			clearTimeout(r.timerHide);
			r.timerHide = null;
			var i = function() {
					e.each(r.callbacks.hide, function(e, t) {
						t.call(r.$el)
					});
					r.callbacks.hide = []
				};
			if (r.status == "shown" || r.status == "appearing") {
				r.status = "disappearing";
				var s = function() {
						r.status = "hidden";
						r.$tooltip.remove();
						r.$tooltip = null;
						e(t).off("." + r.namespace);
						e("body").off("." + r.namespace).css("overflow-x", r.bodyOverflowX);
						r.$elProxy.off("." + r.namespace + "-autoClose");
						r.options.functionAfter.call(r.$el, r.$el);
						i()
					};
				if (c()) {
					r.$tooltip.clearQueue().removeClass("tooltipster-" + r.options.animation + "-show").addClass("tooltipster-dying");
					if (r.options.speed > 0) r.$tooltip.delay(r.options.speed);
					r.$tooltip.queue(s)
				} else {
					r.$tooltip.stop().fadeOut(r.options.speed, s)
				}
			} else if (r.status == "hidden") {
				i()
			}
		},
		setContent: function(e) {
			if (typeof e === "object" && e !== null && this.options.contentCloning) {
				e = e.clone(true)
			}
			this.content = e
		},
		insertContent: function() {
			var e = this,
				t = this.$tooltip.find(".tooltipster-content");
			if (typeof e.content === "string" && !e.options.contentAsHTML) {
				t.text(e.content)
			} else {
				t.empty().append(e.content)
			}
		},
		updateTooltip: function(e) {
			var t = this;
			t.setContent(e);
			if (t.content !== null) {
				if (t.status !== "hidden") {
					t.insertContent();
					t.positionTooltip();
					if (t.options.updateAnimation) {
						if (c()) {
							t.$tooltip.css({
								width: "",
								"-webkit-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
								"-moz-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
								"-o-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
								"-ms-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
								transition: "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
							}).addClass("tooltipster-content-changing");
							setTimeout(function() {
								if (t.status != "hidden") {
									t.$tooltip.removeClass("tooltipster-content-changing");
									setTimeout(function() {
										if (t.status !== "hidden") {
											t.$tooltip.css({
												"-webkit-transition": t.options.speed + "ms",
												"-moz-transition": t.options.speed + "ms",
												"-o-transition": t.options.speed + "ms",
												"-ms-transition": t.options.speed + "ms",
												transition: t.options.speed + "ms"
											})
										}
									}, t.options.speed)
								}
							}, t.options.speed)
						} else {
							t.$tooltip.fadeTo(t.options.speed, .5, function() {
								if (t.status != "hidden") {
									t.$tooltip.fadeTo(t.options.speed, 1)
								}
							})
						}
					}
				}
			} else {
				t.hideTooltip()
			}
		},
		positionInfo: function(e) {
			return {
				dimension: {
					height: e.outerHeight(false),
					width: e.outerWidth(false)
				},
				offset: e.offset(),
				position: {
					left: parseInt(e.css("left")),
					top: parseInt(e.css("top"))
				}
			}
		},
		positionTooltip: function() {
			var n = this;
			if (e("body").find(n.$tooltip).length !== 0) {
				n.$tooltip.css("width", "");
				n.elProxyPosition = n.positionInfo(n.$elProxy);
				var r = null,
					s = e(t).width(),
					o = n.elProxyPosition,
					u = n.$tooltip.outerWidth(false),
					a = n.$tooltip.innerWidth() + 1,
					f = n.$tooltip.outerHeight(false);
				if (n.$elProxy.is("area")) {
					var l = n.$elProxy.attr("shape"),
						c = n.$elProxy.parent().attr("name"),
						h = e('img[usemap="#' + c + '"]'),
						p = h.offset().left,
						d = h.offset().top,
						v = n.$elProxy.attr("coords") !== undefined ? n.$elProxy.attr("coords").split(",") : undefined;
					if (l == "circle") {
						var m = parseInt(v[0]),
							g = parseInt(v[1]),
							y = parseInt(v[2]);
						o.dimension.height = y * 2;
						o.dimension.width = y * 2;
						o.offset.top = d + g - y;
						o.offset.left = p + m - y
					} else if (l == "rect") {
						var m = parseInt(v[0]),
							g = parseInt(v[1]),
							b = parseInt(v[2]),
							w = parseInt(v[3]);
						o.dimension.height = w - g;
						o.dimension.width = b - m;
						o.offset.top = d + g;
						o.offset.left = p + m
					} else if (l == "poly") {
						var E = [],
							S = [],
							x = 0,
							T = 0,
							N = 0,
							C = 0,
							k = "even";
						for (i = 0; i < v.length; i++) {
							var L = parseInt(v[i]);
							if (k == "even") {
								if (L > N) {
									N = L;
									if (i === 0) {
										x = N
									}
								}
								if (L < x) {
									x = L
								}
								k = "odd"
							} else {
								if (L > C) {
									C = L;
									if (i == 1) {
										T = C
									}
								}
								if (L < T) {
									T = L
								}
								k = "even"
							}
						}
						o.dimension.height = C - T;
						o.dimension.width = N - x;
						o.offset.top = d + T;
						o.offset.left = p + x
					} else {
						o.dimension.height = h.outerHeight(false);
						o.dimension.width = h.outerWidth(false);
						o.offset.top = d;
						o.offset.left = p
					}
				}
				if (n.options.fixedWidth === 0) {
					n.$tooltip.css({
						width: Math.round(a) + "px",
						"padding-left": "0px",
						"padding-right": "0px"
					})
				}
				var A = 0,
					O = 0,
					M = 0,
					_ = parseInt(n.options.offsetY),
					D = parseInt(n.options.offsetX),
					P = n.options.position;

				function H() {
					var n = e(t).scrollLeft();
					if (A - n < 0) {
						r = A - n;
						A = n
					}
					if (A + u - n > s) {
						r = A - (s + n - u);
						A = s + n - u
					}
				}
				function B(n, r) {
					if (o.offset.top - e(t).scrollTop() - f - _ - 12 < 0 && r.indexOf("top") > -1) {
						P = n
					}
					if (o.offset.top + o.dimension.height + f + 12 + _ > e(t).scrollTop() + e(t).height() && r.indexOf("bottom") > -1) {
						P = n;
						M = o.offset.top - f - _ - 12
					}
				}
				if (P == "top") {
					var j = o.offset.left + u - (o.offset.left + o.dimension.width);
					A = o.offset.left + D - j / 2;
					M = o.offset.top - f - _ - 12;
					H();
					B("bottom", "top")
				}
				if (P == "top-left") {
					A = o.offset.left + D;
					M = o.offset.top - f - _ - 12;
					H();
					B("bottom-left", "top-left")
				}
				if (P == "top-right") {
					A = o.offset.left + o.dimension.width + D - u;
					M = o.offset.top - f - _ - 12;
					H();
					B("bottom-right", "top-right")
				}
				if (P == "bottom") {
					var j = o.offset.left + u - (o.offset.left + o.dimension.width);
					A = o.offset.left - j / 2 + D;
					M = o.offset.top + o.dimension.height + _ + 12;
					H();
					B("top", "bottom")
				}
				if (P == "bottom-left") {
					A = o.offset.left + D;
					M = o.offset.top + o.dimension.height + _ + 12;
					H();
					B("top-left", "bottom-left")
				}
				if (P == "bottom-right") {
					A = o.offset.left + o.dimension.width + D - u;
					M = o.offset.top + o.dimension.height + _ + 12;
					H();
					B("top-right", "bottom-right")
				}
				if (P == "left") {
					A = o.offset.left - D - u - 12;
					O = o.offset.left + D + o.dimension.width + 12;
					var F = o.offset.top + f - (o.offset.top + n.$elProxy.outerHeight(false));
					M = o.offset.top - F / 2 - _;
					if (A < 0 && O + u > s) {
						var I = parseFloat(n.$tooltip.css("border-width")) * 2,
							q = u + A - I;
						n.$tooltip.css("width", q + "px");
						f = n.$tooltip.outerHeight(false);
						A = o.offset.left - D - q - 12 - I;
						F = o.offset.top + f - (o.offset.top + n.$elProxy.outerHeight(false));
						M = o.offset.top - F / 2 - _
					} else if (A < 0) {
						A = o.offset.left + D + o.dimension.width + 12;
						r = "left"
					}
				}
				if (P == "right") {
					A = o.offset.left + D + o.dimension.width + 12;
					O = o.offset.left - D - u - 12;
					var F = o.offset.top + f - (o.offset.top + n.$elProxy.outerHeight(false));
					M = o.offset.top - F / 2 - _;
					if (A + u > s && O < 0) {
						var I = parseFloat(n.$tooltip.css("border-width")) * 2,
							q = s - A - I;
						n.$tooltip.css("width", q + "px");
						f = n.$tooltip.outerHeight(false);
						F = o.offset.top + f - (o.offset.top + n.$elProxy.outerHeight(false));
						M = o.offset.top - F / 2 - _
					} else if (A + u > s) {
						A = o.offset.left - D - u - 12;
						r = "right"
					}
				}
				if (n.options.arrow) {
					var R = "tooltipster-arrow-" + P;
					if (n.options.arrowColor.length < 1) {
						var U = n.$tooltip.css("background-color")
					} else {
						var U = n.options.arrowColor
					}
					if (!r) {
						r = ""
					} else if (r == "left") {
						R = "tooltipster-arrow-right";
						r = ""
					} else if (r == "right") {
						R = "tooltipster-arrow-left";
						r = ""
					} else {
						r = "left:" + Math.round(r) + "px;"
					}
					if (P == "top" || P == "top-left" || P == "top-right") {
						var z = parseFloat(n.$tooltip.css("border-bottom-width")),
							W = n.$tooltip.css("border-bottom-color")
					} else if (P == "bottom" || P == "bottom-left" || P == "bottom-right") {
						var z = parseFloat(n.$tooltip.css("border-top-width")),
							W = n.$tooltip.css("border-top-color")
					} else if (P == "left") {
						var z = parseFloat(n.$tooltip.css("border-right-width")),
							W = n.$tooltip.css("border-right-color")
					} else if (P == "right") {
						var z = parseFloat(n.$tooltip.css("border-left-width")),
							W = n.$tooltip.css("border-left-color")
					} else {
						var z = parseFloat(n.$tooltip.css("border-bottom-width")),
							W = n.$tooltip.css("border-bottom-color")
					}
					if (z > 1) {
						z++
					}
					var X = "";
					if (z !== 0) {
						var V = "",
							J = "border-color: " + W + ";";
						if (R.indexOf("bottom") !== -1) {
							V = "margin-top: -" + Math.round(z) + "px;"
						} else if (R.indexOf("top") !== -1) {
							V = "margin-bottom: -" + Math.round(z) + "px;"
						} else if (R.indexOf("left") !== -1) {
							V = "margin-right: -" + Math.round(z) + "px;"
						} else if (R.indexOf("right") !== -1) {
							V = "margin-left: -" + Math.round(z) + "px;"
						}
						X = '<span class="tooltipster-arrow-border" style="' + V + " " + J + ';"></span>'
					}
					n.$tooltip.find(".tooltipster-arrow").remove();
					var K = '<div class="' + R + ' tooltipster-arrow" style="' + r + '">' + X + '<span style="border-color:' + U + ';"></span></div>';
					n.$tooltip.append(K)
				}
				n.$tooltip.css({
					top: Math.round(M) + "px",
					left: Math.round(A) + "px"
				})
			}
		}
	};
	e.fn[r] = function() {
		var t = arguments;
		if (this.length === 0) {
			if (typeof t[0] === "string") {
				var n = true;
				switch (t[0]) {
				case "setDefaults":
					e.extend(s, t[1]);
					break;
				default:
					n = false;
					break
				}
				if (n) return true;
				else return this
			} else {
				return this
			}
		} else {
			if (typeof t[0] === "string") {
				var r = "#*$~&";
				this.each(function() {
					var n = e(this).data("tooltipster");
					if (n) {
						switch (t[0]) {
						case "content":
						case "update":
							if (typeof t[1] === "undefined") {
								r = n.content;
								return false
							} else {
								n.updateTooltip(t[1]);
								break
							};
						case "destroy":
							n.hideTooltip();
							if (n.$el[0] !== n.$elProxy[0]) n.$elProxy.remove();
							var i = typeof n.content === "string" ? n.content : e("<div></div>").append(n.content).html();
							n.$el.removeClass("tooltipstered").attr("title", i).removeData("tooltipster").off("." + n.namespace);
							break;
						case "disable":
							n.hideTooltip();
							n.enabled = false;
							break;
						case "elementIcon":
							r = n.$el[0] !== n.$elProxy[0] ? n.$elProxy[0] : undefined;
							return false;
						case "elementTooltip":
							r = n.$tooltip ? n.$tooltip[0] : undefined;
							return false;
						case "enable":
							n.enabled = true;
							break;
						case "hide":
							n.hideTooltip(t[1]);
							break;
						case "option":
							r = n.options[t[1]];
							return false;
						case "reposition":
							n.positionTooltip();
							break;
						case "show":
							n.showTooltipNow(t[1]);
							break;
						case "status":
							r = n.status;
							return false;
						default:
							throw new Error('Unknown method .tooltipster("' + t[0] + '")');
							break
						}
					} else {
						throw new Error("You called Tooltipster's \"" + t[0] + '" method on an uninitialized element')
					}
				});
				return r !== "#*$~&" ? r : this
			} else {
				return this.each(function() {
					if (!e(this).data("tooltipster")) {
						e(this).data("tooltipster", new o(this, t[0]))
					}
				})
			}
		}
	};
	var a = !! ("ontouchstart" in t);
	var f = false;
	e("body").one("mousemove", function() {
		f = true
	})
})(jQuery, window, document);;
!
function() {
	"use strict";

	function a(b) {
		if (!(this instanceof a)) return new a(b);
		if (!b) throw new Error("No DOM elements passed into Touche");
		return this.nodes = b, this
	}
	var b = "ontouchstart" in window || "msmaxtouchpoints" in window.navigator;
	if (a.prototype.on = function(a, c) {
		var d, e, f = this.nodes,
			g = f.length;
		if (b && "click" === a && (d = !0), e = function(a, b, c) {
			var e, f = function() {
					!e && (e = !0) && c.apply(this, arguments)
				};
			a.addEventListener(b, f, !1), d && a.addEventListener("touchend", f, !1)
		}, g) for (; g--;) e(f[g], a, c);
		else e(f, a, c);
		return this
	}, window.Touche = a, window.jQuery && b) {
		var c = jQuery.fn.on;
		jQuery.fn.on = function() {
			var a = arguments[0];
			return arguments[0] = "click" === a ? "touchend" : a, c.apply(this, arguments), this
		}
	}
}();; /*global Modernizr:true */

(function($) {

	// Store history object
	var History = window.History,
		manualStateChange = true;

	// Page transition animate vars
	var isAnimating = false,
		animEndEventNames = {
			'WebkitAnimation': 'webkitAnimationEnd',
			'OAnimation': 'oAnimationEnd',
			'msAnimation': 'MSAnimationEnd',
			'animation': 'animationend'
		},
		animEndEventName = animEndEventNames[Modernizr.prefixed('animation')];

	// Project load functions

	function projectLoad() {
		$('.project-load').on('click', function() {
			var _this = $(this),
				title = _this.data('page-title'),
				nid = _this.data('project-nid'),
				href = _this.attr('href'),
				loadingAnimationOut = 'fadeOutDownBig',
				loadingAnimationIn = 'fadeInUpBig',
				site = 'Iuvo',
				content = $('#body'),
				loader = $('#loading-animation');

			// Change pushState
			manualStateChange = false;
			History.pushState(null, title + " | " + site, href);

			loader.show();

			if (!content.hasClass('active')) {
				content.addClass('active');
			} else {
				loader.removeClass(loadingAnimationOut).addClass(loadingAnimationIn);
			}

			$.ajax({
				url: '/ajax/projects/' + nid,
				type: 'POST',
				success: function(data) {
					setTimeout(function() {
						content.find('.content-holder').html(data);
						// Custom scrollbar plugin
						$('.field-name-field-images .inner').mCustomScrollbar({
							horizontalScroll: false,
							scrollInertia: 0,
							autoHideScrollbar: true,
							advanced: {
								updateOnBrowserResize: true,
								updateOnContentResize: true,
								autoScrollOnFocus: true
							},
							contentTouchScroll: true,
						});
						loader.removeClass(loadingAnimationIn).addClass(loadingAnimationOut);
						setTimeout(function() {
							loader.hide();
						}, 1000);
						$('.tooltip').tooltipster({
							animation: 'fade',
							theme: 'tooltipster-iuvo',
							touchDevices: false,
							positionTracker: true
						});
						projectLoad();
						projectClose();
					}, 1000);
				}
			});

			// Disable default link action
			return false;
		});
	}

	// Project close function

	function projectClose() {
		var content = $('#body'),
			loader = $('#loading-animation'),
			loadingAnimationOut = 'fadeOutDownBig',
			loadingAnimationIn = 'fadeInUpBig';

		$('.control-close').on('click', function() {
			loader.show().removeClass(loadingAnimationOut).addClass(loadingAnimationIn);
			setTimeout(function() {
				content.removeClass('active').find('.content-holder').empty();
				loader.fadeOut().removeClass(loadingAnimationOut + ' ' + loadingAnimationIn);
			}, 1000);

			// Disable default link action
			return false;
		});
	}

	$(document).ready(function() {

		// Run preloader on document ready
		$('body').jpreLoader({
			showPercentage: false,
			splashID: '#loading-spinner',
			loaderVPos: '0%',
			splashVPos: '50%'
		}, function() {
			$('#front .action').show().addClass('fadeInDownBig');
			$('#front .message').show().addClass('fadeInUpBig');
		});

		$('#header').on('click', function() {
			if ($('body').hasClass('header-closed')) {
				$('body').removeClass('header-closed');
				setTimeout(function() {
					$('#header .social ul, #header .colophon, #header .navigation .main-item, #header .navigation .sub-item').fadeIn();
				}, 400);
			} else {
				$('#header .social ul, #header .colophon, #header .navigation .main-item, #header .navigation .sub-item').fadeOut(200, function() {
					$('body').addClass('header-closed');
				});

			}
		});

		// Custom scrollbar plugin
		$('.content-area, .field-name-field-images .inner').not('#body').mCustomScrollbar({
			horizontalScroll: false,
			scrollInertia: 0,
			autoHideScrollbar: true,
			advanced: {
				updateOnBrowserResize: true,
				updateOnContentResize: true,
				autoScrollOnFocus: true
			},
			contentTouchScroll: true,
		});

		$('#body').mCustomScrollbar({
			horizontalScroll: false,
			scrollInertia: 0,
			autoHideScrollbar: true,
			advanced: {
				updateOnBrowserResize: true,
				updateOnContentResize: true,
				autoScrollOnFocus: true
			},
			contentTouchScroll: true,
			callbacks: {
				whileScrolling: function(mcs) {
					if (!Modernizr.mq('only screen and (max-device-width: 960px)')) {
						if (mcs.top < -400) {
							$('.node-project .images').addClass('active');
							$('.node-project .project-content').removeClass('fadeInLeft').addClass('fadeOutLeft');
						} else {
							$('.node-project .images').removeClass('active');
							$('.node-project .project-content').removeClass('fadeOutLeft').addClass('fadeInLeft');
						}
					}
				}
			}
		});

		$('#body').scroll(function() {
			if (Modernizr.mq('only screen and (max-device-width: 960px)')) {
				if ($('#body').scrollTop() > 600) {
					$('.node-project .images').addClass('active');
					$('.node-project .project-content').removeClass('fadeInLeft').addClass('fadeOutLeft');
				} else {
					$('.node-project .images').removeClass('active');
					$('.node-project .project-content').removeClass('fadeOutLeft').addClass('fadeInLeft');
				}
			}
		});

		// Change default ajax behaviour in Drupal webform
		$('#touch .form-submit').on('click', function() {
			var touchLoader = $('#loading-animation-webform');

			touchLoader.show().removeClass('fadeInUpBig fadeOutDownBig').addClass('fadeInUpBig');
			setTimeout(function() {
				touchLoader.show().removeClass('fadeInUpBig').addClass('fadeOutDownBig');
				$('#touch').mCustomScrollbar('scrollTo', 'top');
			}, 2000);
			setTimeout(function() {
				touchLoader.hide();
			}, 3000);
		});

		// Navigation functions
		$('.nav-button').on('click', function() {
			var _this = $(this),
				title = _this.data('page-title'),
				target = _this.data('target'),
				href = _this.attr('href'),
				previous = $('.content-area.active').attr('id'),
				site = 'Iuvo',
				menu = $('.header .menu'),
				outClass = 'glue-out',
				inClass = 'move-in',
				current = $('.content-area#' + previous),
				next = $('.content-area#' + target);


			if ($('#body').hasClass('active')) {
				$('.control-close').click();
			}

			if (target !== previous && !isAnimating) {
				isAnimating = true;

				// Change pushState
				if (title === 'Iuvo') {
					site = 'UX, UI, Drupal, Design & Development';
				}
				manualStateChange = false;
				History.pushState(null, title + " | " + site, href);

				// Change menu items
				menu.find('a.active').removeClass('active');
				menu.find('a.' + target + '-button').addClass('active');

				current.addClass(outClass).on(animEndEventName, function() {
					current.off(animEndEventName).removeClass(outClass + ' active');
				});

				next.addClass(inClass + ' active').on(animEndEventName, function() {
					next.off(animEndEventName).removeClass(inClass);
					isAnimating = false;
				});
			}

			// Disable default link action
			return false;
		});

		// Scroll to top element
		$('.scroll-to-top').on('click', function() {
			var scrollContent = $(this).data('content-id');
			if (Modernizr.mq('only screen and (max-device-width: 960px)')) {
				$('#' + scrollContent).animate({
					scrollTop: 0
				});
			} else {
				$('#' + scrollContent).mCustomScrollbar('scrollTo', 'top');
			}
		});

		// Project load functions
		projectLoad();

		// Project close functions
		projectClose();

		// Run Tooltipster plugin
		$('.tooltip').tooltipster({
			animation: 'fade',
			theme: 'tooltipster-iuvo',
			touchDevices: false,
			positionTracker: true
		});

		$('#touch .form-text, #touch .form-textarea').tooltipster({
			animation: 'fade',
			theme: 'tooltipster-iuvo',
			positionTracker: true
		});

		// Run autosize plugin for textareas
		$('textarea').autosize();

		// History, when back button is pressed reload page
		History.Adapter.bind(window, 'statechange', function() {
			if (manualStateChange === true) {
				location.reload();
			}
			manualStateChange = true;
		});
	});

})(jQuery);;