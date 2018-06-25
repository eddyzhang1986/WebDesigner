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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/device/iphone/style.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader!./src/device/iphone/style.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  background-color: #2c2c32;\r\n}\r\n.ms-content .c-view {\r\n  padding-left: 24px;\r\n  text-align: left;\r\n  color: white;\r\n}\r\n.nav-float {\r\n  z-index: 9990;\r\n  position: fixed;\r\n  top: 150px;\r\n  right: 6%;\r\n  width: 150px;\r\n  text-align: center;\r\n  border: 1px solid darkgray;\r\n  border-radius: 6px;\r\n  background-color: #2c2c32;\r\n}\r\n.nav-float a {\r\n  display: block;\r\n  padding: 10px;\r\n  border-bottom: 1px solid darkgray;\r\n  color: white;\r\n}\r\n.nav-float a:last-child {\r\n  border: 0;\r\n}\r\n.nav-float a:hover {\r\n  color: #53d9ef;\r\n}\r\n.nav-title {\r\n  padding: 76px 0 15px 0;\r\n  font-size: 20px;\r\n  color: #53d9ef;\r\n}\r\n.demo-li {\r\n  display: inline-block;\r\n  width: 40%;\r\n  margin: 30px 4%;\r\n  text-align: center;\r\n  vertical-align: top;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n.iPhone {\r\n  position: relative;\r\n  display: inline-block;\r\n  border: 1px solid white;\r\n  border-radius: 40px;\r\n  padding: 70px 10px;\r\n  margin-left: 20px;\r\n}\r\n.iPhone img {\r\n  width: 320px;\r\n  height: 562px;\r\n}\r\n.iPhone:before {\r\n  position: absolute;\r\n  top: 30px;\r\n  left: 50%;\r\n  content: \"\";\r\n  display: inline-block;\r\n  width: 80px;\r\n  height: 8px;\r\n  margin-left: -40px;\r\n  border: 1px solid white;\r\n  border-radius: 8px;\r\n}\r\n.iPhone:after {\r\n  position: absolute;\r\n  left: 50%;\r\n  bottom: 15px;\r\n  content: \"\";\r\n  display: block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-left: -20px;\r\n  border: 1px solid white;\r\n  border-radius: 50%;\r\n}\r\n.demo-li:hover .iPhone,\r\n.demo-li:hover .iPhone:before,\r\n.demo-li:hover .iPhone:after {\r\n  border: 1px solid #53d9ef;\r\n}\r\n.demo-li:hover {\r\n  color: #53d9ef;\r\n}\r\n.demo-title {\r\n  font-size: 18px;\r\n  padding: 10px;\r\n}\r\n.btn-line {\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  margin: 14px;\r\n  padding: 8px 30px;\r\n  border: 1px solid #53d9ef;\r\n  border-radius: 20px;\r\n  color: #53d9ef;\r\n  cursor: pointer;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  outline: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\";\r\n}\r\nul {\r\n  list-style-type: none;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\na:hover {\r\n  text-decoration: none;\r\n}\r\nimg {\r\n  vertical-align: bottom;\r\n}\r\na.green {\r\n  color: #53d9ef;\r\n}\r\na.green:hover {\r\n  color: #a6e22b;\r\n}\r\n.c-view {\r\n  width: 1100px;\r\n  margin: auto;\r\n}\r\n.pink {\r\n  color: #ea1c40;\r\n}\r\n.blue {\r\n  color: #a6e22b;\r\n}\r\n.green {\r\n  color: #53d9ef;\r\n}\r\n.gray {\r\n  color: gray;\r\n}\r\n.hide {\r\n  display: none;\r\n}\r\n.ms-header {\r\n  z-index: 9990;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 80px;\r\n  background-color: #2c2c32;\r\n}\r\n.ms-header .logo {\r\n  padding: 25px;\r\n  height: 80px;\r\n  cursor: pointer;\r\n}\r\n.ms-header .nav {\r\n  float: right;\r\n}\r\n.ms-header .nav a {\r\n  display: inline-block;\r\n  font-size: 18px;\r\n  margin: 8px 16px;\r\n  padding: 20px;\r\n  cursor: pointer;\r\n  color: darkgray;\r\n}\r\n.ms-header .nav a:hover,\r\n.ms-header .nav a.active {\r\n  color: white;\r\n}\r\n.ms-header ~ .ms-content {\r\n  padding-top: 80px;\r\n}\r\n.ms-footer {\r\n  padding: 50px;\r\n  font-size: 12px;\r\n  text-align: center;\r\n  background-color: #393d49;\r\n  color: gray;\r\n}\r\n::-webkit-scrollbar-track {\r\n  background-color: transparent;\r\n}\r\n::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  border-radius: 6px;\r\n  background-color: #ccc;\r\n}\r\n::-webkit-scrollbar-thumb:hover {\r\n  background-color: #aaa;\r\n}\r\n.qq_team {\r\n  z-index: 999999;\r\n  position: fixed;\r\n  top: 32px;\r\n  right: 64px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/device/Device.tsx":
/*!*******************************!*\
  !*** ./src/device/Device.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./iphone/style.css */ "./src/device/iphone/style.css");
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Device.prototype.render = function () {
        return (React.createElement("div", { className: "c-view" },
            React.createElement("p", { id: "base", className: "nav-title" }, "\u57FA\u7840\u6848\u4F8B :"),
            React.createElement("p", { className: "green" }, "\u5FEB\u901F\u5165\u95E8\u548C\u7406\u89E3mescroll\u7684\u5404\u9879\u914D\u7F6E"),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=list-products", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1508205320970list-products.gif" })),
                React.createElement("p", { className: "demo-title" }, "\u5546\u54C1\u5217\u8868"),
                React.createElement("p", null, "\u4E0B\u62C9\u5237\u65B0\u91CD\u7F6E\u5217\u8868\u6570\u636E")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=list-news", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1508205314004list-news.gif" })),
                React.createElement("p", { className: "demo-title" }, "\u65B0\u95FB\u5217\u8868"),
                React.createElement("p", null, "\u4E0B\u62C9\u5237\u65B0\u6DFB\u52A0\u65B0\u6570\u636E\u5230\u5217\u8868\u9876\u90E8")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=list-mescroll-one", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1508205310491list-mescroll-one.gif" })),
                React.createElement("p", { className: "demo-title" }, "\u5355mescroll"),
                React.createElement("p", null, "\u6BCF\u6B21\u5207\u6362\u83DC\u5355\u90FD\u91CD\u7F6E\u5217\u8868,\u4E0D\u7F13\u5B58\u6570\u636E")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=list-mescroll-more", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1508205306072list-mescroll-more.gif" })),
                React.createElement("p", { className: "demo-title" }, "\u591Amescroll"),
                React.createElement("p", null, "\u6BCF\u4E2A\u83DC\u5355\u5217\u8868\u4EC5\u521D\u59CB\u5316\u4E00\u6B21,\u5207\u6362\u83DC\u5355\u7F13\u5B58\u6570\u636E")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=list-full-lock", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1508205101076list-full-lock.gif" })),
                React.createElement("p", { className: "demo-title" }, "\u6EE1\u5C4F\u52A0\u8F7D\u4E0E\u9501\u5B9A\u6ED1\u52A8"),
                React.createElement("p", null, "\u81EA\u52A8\u6EE1\u5C4F\u52A0\u8F7D,\u53EF\u4E34\u65F6\u9501\u5B9A\u4E0A\u62C9\u5237\u65B0\u548C\u4E0B\u62C9\u52A0\u8F7D")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=list-products-vue", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1508205333637list-products-vue.gif" })),
                React.createElement("p", { className: "demo-title" }, "mescroll\u5728vue\u4E2D\u7684\u4F7F\u7528"),
                React.createElement("p", null, "\u5BF9, \u5728vue\u4E2D\u4F7F\u7528\u5C31\u662F\u8FD9\u4E48\u7684\u7B80\u5355 ~")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=list-mescroll-body", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1508205286594list-mescroll-body.gif" })),
                React.createElement("p", { className: "demo-title" }, "body\u4E3A\u6EDA\u52A8\u533A\u57DF"),
                React.createElement("p", null, "\u65E0\u9700\u8BBE\u7F6E\u9AD8\u5EA6,\u5199\u6CD5\u7B80\u5355,\u9002\u7528\u4E8E\u65E0\u60AC\u6D6E\u83DC\u5355\u7684\u754C\u9762")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=mescroll-options", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1508205347926mescroll-options.gif" })),
                React.createElement("p", { className: "demo-title" }, "mescroll\u6240\u6709\u914D\u7F6E\u9879"),
                React.createElement("p", null, "\u6E90\u7801\u5C55\u793Amescroll\u6240\u6709\u914D\u7F6E\u9879, \u5FEB\u901F\u4F7F\u7528\u4E0E\u8C03\u8BD5mescroll")),
            React.createElement("p", { id: "middle", className: "nav-title" }, "\u4E2D\u7EA7\u6848\u4F8B :"),
            React.createElement("p", { className: "green" }, "\u719F\u7EC3\u638C\u63E1mescroll\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0\u548C\u4E0A\u62C9\u52A0\u8F7D\u7684\u6280\u5DE7"),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=sticky", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1512487870668IMG_4195.GIF" })),
                React.createElement("p", { className: "demo-title" }, "\u5438\u9876\u60AC\u6D6E\u6548\u679C")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=search", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1512835307876IMG_4217.GIF" })),
                React.createElement("p", { className: "demo-title" }, "\u5173\u952E\u8BCD\u641C\u7D22")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=swiper-tap", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1512487862014IMG_4194.GIF" })),
                React.createElement("p", { className: "demo-title" }, "\u8F6E\u64AD\u5207\u6362\u6548\u679C")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=swiper-nav", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1512487862014IMG_4194.GIF" })),
                React.createElement("p", { className: "demo-title" }, "\u8F6E\u64AD\u5BFC\u822A\u83DC\u5355")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=zhihu", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1508204842656zhihu.gif" })),
                React.createElement("p", { className: "demo-title" }, "\u77E5\u4E4E v3.53.0")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=xinlang", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1508205006290xinlang.gif" })),
                React.createElement("p", { className: "demo-title" }, "\u65B0\u6D6A\u5FAE\u535A v7.6.1")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=beibei", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1508205298057beibei.gif" })),
                React.createElement("p", { className: "demo-title" }, "\u8D1D\u8D1D v6.0.0")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=yabuli", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1508204995995yabuli.gif" })),
                React.createElement("p", { className: "demo-title" }, "\u96C5\u5E03\u529B v2.4.0")),
            React.createElement("p", { id: "hight", className: "nav-title" }, "\u9AD8\u7EA7\u6848\u4F8B :"),
            React.createElement("p", { className: "green" }, "\u5145\u5206\u5C55\u793Amescroll\u7075\u6D3B\u7B80\u5355\u6781\u6613\u62D3\u5C55\u7684\u7279\u6027"),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=taobao", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1508205033359taobao.gif" })),
                React.createElement("p", { id: "hight2", className: "demo-title" }, "\u6DD8\u5B9D v6.8.0")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=jingdong", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1508205090739jingdong.gif" })),
                React.createElement("p", { className: "demo-title" }, "\u4EAC\u4E1C v6.1.0")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=meituan", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1508205067956meituan.gif" })),
                React.createElement("p", { className: "demo-title" }, "\u7F8E\u56E2 v8.2.3")),
            React.createElement("a", { className: "demo-li", href: "preview.html?name=meitunmama", target: "_blank" },
                React.createElement("div", { className: "iPhone" },
                    React.createElement("img", { src: "http://oux5x2xxe.bkt.clouddn.com/1508205054953meitunmama.gif" })),
                React.createElement("p", { className: "demo-title" }, "\u7F8E\u56E4\u5988\u5988 v2.0.5")),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null)));
    };
    return Device;
}(React.Component));
exports.Device = Device;


/***/ }),

/***/ "./src/device/iphone/style.css":
/*!*************************************!*\
  !*** ./src/device/iphone/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/device/iphone/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var Device_1 = __webpack_require__(/*! ./device/Device */ "./src/device/Device.tsx");
ReactDOM.render(React.createElement(Device_1.Device, null), document.getElementById("container"));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map