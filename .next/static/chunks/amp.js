(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["amp"],{

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
    page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null;
/* eslint-disable-next-line */

var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
}

function _tryApplyUpdates() {
  _tryApplyUpdates = // This function reads code updates on the fly and hard
  // reloads the page when it has changed.
  _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var res, jsonData, curPage, pageUpdated;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isUpdateAvailable() || !canApplyUpdates())) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return fetch(typeof __webpack_require__.j !== 'undefined' ? "".concat(hotUpdatePath).concat(curHash, ".").concat(__webpack_require__.j, ".hot-update.json") : "".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            jsonData = _context.sent;
            curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

            pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function (mod) {
              return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
            });

            if (pageUpdated) {
              document.location.reload(true);
            } else {
              curHash = mostRecentHash;
            }

            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.error('Error occurred checking for update', _context.t0);
            document.location.reload(true);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}

function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}

(0, _eventsource).addMessageListener(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }

  try {
    var message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils).setupPing(assetPrefix, function () {
  return page;
});
(0, _fouc).displayContent();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addMessageListener = addMessageListener;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(function (cb) {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function addMessageListener(cb) {
  eventCallbacks.push(cb);
}

function getEventSourceWrapper(options) {
  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below

var document = window.document;
var Response1 = window.Response;
var TextDecoder1 = window.TextDecoder;
var TextEncoder1 = window.TextEncoder;
var AbortController1 = window.AbortController;

if (AbortController1 == undefined) {
  AbortController1 = function AbortController1() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 128 >> shift && codePoint << shift <= 2047;
    }

    if (octetsCount === 2) {
      return codePoint >= 2048 >> shift && codePoint << shift <= 55295 || codePoint >= 57344 >> shift && codePoint << shift <= 65535;
    }

    if (octetsCount === 3) {
      return codePoint >= 65536 >> shift && codePoint << shift <= 1114111;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 65533;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 65535) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(55296 + (codePoint - 65535 - 1 >> 10));
        string += String.fromCharCode(56320 + (codePoint - 65535 - 1 & 1023));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder1().decode(new TextEncoder1().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder1 == undefined || TextEncoder1 == undefined || !supportsStreamOption()) {
  TextDecoder1 = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 32);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers1 = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers1), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers2) {
  this._headers = headers2;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers2) {
  var controller = new AbortController1();
  var signal = controller.signal // see #120
  ;
  var textDecoder = new TextDecoder1();
  fetch(url, {
    headers: headers2,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget1() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget1;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget1.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget1.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget1.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event1(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event1;

function MessageEvent1(type, options) {
  Event1.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent1;
MessageEvent1.prototype = Object.create(Event1.prototype);

function ConnectionEvent(type, options) {
  Event1.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event1.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget1.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = fetch != undefined && Response1 != undefined && 'body' in Response1.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers2 = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers3, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers3
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers3
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent1(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event1('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers2 != undefined) {
      for (var name in headers2) {
        if (Object.prototype.hasOwnProperty.call(headers2, name)) {
          requestHeaders[name] = headers2[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget1.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports.default = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget1");
$RefreshReg$(_c8, "Event1");
$RefreshReg$(_c9, "MessageEvent1");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.displayContent = displayContent;

function displayContent(callback) {
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  evtSource = (0, _eventsource).getEventSourceWrapper({
    path: "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(encodeURIComponent(currentPage)),
    timeout: 5000
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data); // don't attempt fetching the page if we're already showing
      // the dev overlay as this can cause the error to be triggered
      // repeatedly

      if (payload.invalid && !self.__NEXT_DATA__.err) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        fetch(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/client/dev/amp-dev.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLENBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9hbXAtZGV2LmpzIiwid2VicGFjazovL19OX0UvX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlLmpzIiwid2VicGFjazovL19OX0UvX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9ldmVudC1zb3VyY2UtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L2ZvdWMuanMiLCJ3ZWJwYWNrOi8vX05fRS9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzIiwid2VicGFjazovL19OX0UvX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FL19OX0UvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX2V2ZW50U291cmNlUG9seWZpbGwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2V2ZW50LXNvdXJjZS1wb2x5ZmlsbFwiKSk7XHJcbnZhciBfZXZlbnRzb3VyY2UgPSByZXF1aXJlKFwiLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlXCIpO1xyXG52YXIgX29uRGVtYW5kRW50cmllc1V0aWxzID0gcmVxdWlyZShcIi4vb24tZGVtYW5kLWVudHJpZXMtdXRpbHNcIik7XHJcbnZhciBfZm91YyA9IHJlcXVpcmUoXCIuL2ZvdWNcIik7XHJcbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGluZm8uZG9uZSkge1xyXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcclxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xyXG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX25leHQodW5kZWZpbmVkKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG59XHJcbmlmICghd2luZG93LkV2ZW50U291cmNlKSB7XHJcbiAgICB3aW5kb3cuRXZlbnRTb3VyY2UgPSBfZXZlbnRTb3VyY2VQb2x5ZmlsbC5kZWZhdWx0O1xyXG59XHJcbmNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX05FWFRfREFUQV9fJykudGV4dENvbnRlbnQpO1xyXG5sZXQgeyBhc3NldFByZWZpeCAsIHBhZ2UgIH0gPSBkYXRhO1xyXG5hc3NldFByZWZpeCA9IGFzc2V0UHJlZml4IHx8ICcnO1xyXG5sZXQgbW9zdFJlY2VudEhhc2ggPSBudWxsO1xyXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi8gbGV0IGN1ckhhc2ggPSBfX3dlYnBhY2tfaGFzaF9fO1xyXG5jb25zdCBob3RVcGRhdGVQYXRoID0gYXNzZXRQcmVmaXggKyAoYXNzZXRQcmVmaXguZW5kc1dpdGgoJy8nKSA/ICcnIDogJy8nKSArICdfbmV4dC9zdGF0aWMvd2VicGFjay8nO1xyXG4vLyBJcyB0aGVyZSBhIG5ld2VyIHZlcnNpb24gb2YgdGhpcyBjb2RlIGF2YWlsYWJsZT9cclxuZnVuY3Rpb24gaXNVcGRhdGVBdmFpbGFibGUoKSB7XHJcbiAgICAvLyBfX3dlYnBhY2tfaGFzaF9fIGlzIHRoZSBoYXNoIG9mIHRoZSBjdXJyZW50IGNvbXBpbGF0aW9uLlxyXG4gICAgLy8gSXQncyBhIGdsb2JhbCB2YXJpYWJsZSBpbmplY3RlZCBieSBXZWJwYWNrLlxyXG4gICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovIHJldHVybiBtb3N0UmVjZW50SGFzaCAhPT0gX193ZWJwYWNrX2hhc2hfXztcclxufVxyXG4vLyBXZWJwYWNrIGRpc2FsbG93cyB1cGRhdGVzIGluIG90aGVyIHN0YXRlcy5cclxuZnVuY3Rpb24gY2FuQXBwbHlVcGRhdGVzKCkge1xyXG4gICAgcmV0dXJuIG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09ICdpZGxlJztcclxufVxyXG5mdW5jdGlvbiBfdHJ5QXBwbHlVcGRhdGVzKCkge1xyXG4gICAgX3RyeUFwcGx5VXBkYXRlcyA9IC8vIFRoaXMgZnVuY3Rpb24gcmVhZHMgY29kZSB1cGRhdGVzIG9uIHRoZSBmbHkgYW5kIGhhcmRcclxuICAgIC8vIHJlbG9hZHMgdGhlIHBhZ2Ugd2hlbiBpdCBoYXMgY2hhbmdlZC5cclxuICAgIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKigpIHtcclxuICAgICAgICBpZiAoIWlzVXBkYXRlQXZhaWxhYmxlKCkgfHwgIWNhbkFwcGx5VXBkYXRlcygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2godHlwZW9mIF9fd2VicGFja19ydW50aW1lX2lkX18gIT09ICd1bmRlZmluZWQnID8gYCR7aG90VXBkYXRlUGF0aH0ke2N1ckhhc2h9LiR7X193ZWJwYWNrX3J1bnRpbWVfaWRfX30uaG90LXVwZGF0ZS5qc29uYCA6IGAke2hvdFVwZGF0ZVBhdGh9JHtjdXJIYXNofS5ob3QtdXBkYXRlLmpzb25gKTtcclxuICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSB5aWVsZCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJQYWdlID0gcGFnZSA9PT0gJy8nID8gJ2luZGV4JyA6IHBhZ2U7XHJcbiAgICAgICAgICAgIC8vIHdlYnBhY2sgNSB1c2VzIGFuIGFycmF5IGluc3RlYWRcclxuICAgICAgICAgICAgY29uc3QgcGFnZVVwZGF0ZWQgPSAoQXJyYXkuaXNBcnJheShqc29uRGF0YS5jKSA/IGpzb25EYXRhLmMgOiBPYmplY3Qua2V5cyhqc29uRGF0YS5jKSkuc29tZSgobW9kKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZC5pbmRleE9mKGBwYWdlcyR7Y3VyUGFnZS5zdWJzdHIoMCwgMSkgPT09ICcvJyA/IGN1clBhZ2UgOiBgLyR7Y3VyUGFnZX1gfWApICE9PSAtMSB8fCBtb2QuaW5kZXhPZihgcGFnZXMke2N1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSAnLycgPyBjdXJQYWdlIDogYC8ke2N1clBhZ2V9YH1gLnJlcGxhY2UoL1xcLy9nLCAnXFxcXCcpKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocGFnZVVwZGF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGN1ckhhc2ggPSBtb3N0UmVjZW50SGFzaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCBjaGVja2luZyBmb3IgdXBkYXRlJywgZXJyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIF90cnlBcHBseVVwZGF0ZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5mdW5jdGlvbiB0cnlBcHBseVVwZGF0ZXMoKSB7XHJcbiAgICByZXR1cm4gX3RyeUFwcGx5VXBkYXRlcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcbigwLCBfZXZlbnRzb3VyY2UpLmFkZE1lc3NhZ2VMaXN0ZW5lcigoZXZlbnQpPT57XHJcbiAgICBpZiAoZXZlbnQuZGF0YSA9PT0gJ1xcdUQ4M0RcXHVEQzkzJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc3luYycgfHwgbWVzc2FnZS5hY3Rpb24gPT09ICdidWlsdCcpIHtcclxuICAgICAgICAgICAgaWYgKCFtZXNzYWdlLmhhc2gpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtb3N0UmVjZW50SGFzaCA9IG1lc3NhZ2UuaGFzaDtcclxuICAgICAgICAgICAgdHJ5QXBwbHlVcGRhdGVzKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3JlbG9hZFBhZ2UnKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBITVIgbWVzc2FnZTogJyArIGV2ZW50LmRhdGEgKyAnXFxuJyArIGV4KTtcclxuICAgIH1cclxufSk7XHJcbigwLCBfb25EZW1hbmRFbnRyaWVzVXRpbHMpLnNldHVwUGluZyhhc3NldFByZWZpeCwgKCk9PnBhZ2VcclxuKTtcclxuKDAsIF9mb3VjKS5kaXNwbGF5Q29udGVudCgpO1xyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW1wLWRldi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5hZGRNZXNzYWdlTGlzdGVuZXIgPSBhZGRNZXNzYWdlTGlzdGVuZXI7XHJcbmV4cG9ydHMuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyID0gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyO1xyXG5jb25zdCBldmVudENhbGxiYWNrcyA9IFtdO1xyXG5mdW5jdGlvbiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xyXG4gICAgdmFyIHNvdXJjZTtcclxuICAgIHZhciBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIGxpc3RlbmVycyA9IFtdO1xyXG4gICAgaWYgKCFvcHRpb25zLnRpbWVvdXQpIHtcclxuICAgICAgICBvcHRpb25zLnRpbWVvdXQgPSAyMCAqIDEwMDA7XHJcbiAgICB9XHJcbiAgICBpbml0KCk7XHJcbiAgICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAobmV3IERhdGUoKSAtIGxhc3RBY3Rpdml0eSA+IG9wdGlvbnMudGltZW91dCkge1xyXG4gICAgICAgICAgICBoYW5kbGVEaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgb3B0aW9ucy50aW1lb3V0IC8gMik7XHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIHNvdXJjZSA9IG5ldyB3aW5kb3cuRXZlbnRTb3VyY2Uob3B0aW9ucy5wYXRoKTtcclxuICAgICAgICBzb3VyY2Uub25vcGVuID0gaGFuZGxlT25saW5lO1xyXG4gICAgICAgIHNvdXJjZS5vbmVycm9yID0gaGFuZGxlRGlzY29ubmVjdDtcclxuICAgICAgICBzb3VyY2Uub25tZXNzYWdlID0gaGFuZGxlTWVzc2FnZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKCdbSE1SXSBjb25uZWN0ZWQnKTtcclxuICAgICAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xyXG4gICAgICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyc1tpXShldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+e1xyXG4gICAgICAgICAgICBpZiAoIWNiLnVuZmlsdGVyZWQgJiYgZXZlbnQuZGF0YS5pbmRleE9mKCdhY3Rpb24nKSA9PT0gLTEpIHJldHVybjtcclxuICAgICAgICAgICAgY2IoZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICBzb3VyY2UuY2xvc2UoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGluaXQsIG9wdGlvbnMudGltZW91dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsb3NlOiAoKT0+e1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICAgICAgc291cmNlLmNsb3NlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRNZXNzYWdlTGlzdGVuZXI6IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoKGZuKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGFkZE1lc3NhZ2VMaXN0ZW5lcihjYikge1xyXG4gICAgZXZlbnRDYWxsYmFja3MucHVzaChjYik7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucyk7XHJcbn1cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50c291cmNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XHJcbi8qIGVzbGludC1kaXNhYmxlICovIC8vIEltcHJvdmVkIHZlcnNpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL1lhZmZsZS9FdmVudFNvdXJjZS9cclxuLy8gQXZhaWxhYmxlIHVuZGVyIE1JVCBMaWNlbnNlIChNSVQpXHJcbi8vIE9ubHkgdHJpZXMgdG8gc3VwcG9ydCBJRTExIGFuZCBub3RoaW5nIGJlbG93XHJcbnZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcclxudmFyIFJlc3BvbnNlMSA9IHdpbmRvdy5SZXNwb25zZTtcclxudmFyIFRleHREZWNvZGVyMSA9IHdpbmRvdy5UZXh0RGVjb2RlcjtcclxudmFyIFRleHRFbmNvZGVyMSA9IHdpbmRvdy5UZXh0RW5jb2RlcjtcclxudmFyIEFib3J0Q29udHJvbGxlcjEgPSB3aW5kb3cuQWJvcnRDb250cm9sbGVyO1xyXG5pZiAoQWJvcnRDb250cm9sbGVyMSA9PSB1bmRlZmluZWQpIHtcclxuICAgIEFib3J0Q29udHJvbGxlcjEgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNpZ25hbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hYm9ydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIFRleHREZWNvZGVyUG9seWZpbGwoKSB7XHJcbiAgICB0aGlzLmJpdHNOZWVkZWQgPSAwO1xyXG4gICAgdGhpcy5jb2RlUG9pbnQgPSAwO1xyXG59XHJcblRleHREZWNvZGVyUG9seWZpbGwucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKG9jdGV0cykge1xyXG4gICAgZnVuY3Rpb24gdmFsaWQoY29kZVBvaW50LCBzaGlmdCwgb2N0ZXRzQ291bnQpIHtcclxuICAgICAgICBpZiAob2N0ZXRzQ291bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSAxMjggPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDIwNDc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvY3RldHNDb3VudCA9PT0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gY29kZVBvaW50ID49IDIwNDggPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDU1Mjk1IHx8IGNvZGVQb2ludCA+PSA1NzM0NCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gNjU1MzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvY3RldHNDb3VudCA9PT0gMykge1xyXG4gICAgICAgICAgICByZXR1cm4gY29kZVBvaW50ID49IDY1NTM2ID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAxMTE0MTExO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkge1xyXG4gICAgICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29kZVBvaW50ID4+IDYgPiAxNSA/IDMgOiBjb2RlUG9pbnQgPiAzMSA/IDIgOiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvZGVQb2ludCA+IDE1ID8gMyA6IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMykge1xyXG4gICAgICAgICAgICByZXR1cm4gMztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgUkVQTEFDRVIgPSA2NTUzMztcclxuICAgIHZhciBzdHJpbmcgPSAnJztcclxuICAgIHZhciBiaXRzTmVlZGVkID0gdGhpcy5iaXRzTmVlZGVkO1xyXG4gICAgdmFyIGNvZGVQb2ludCA9IHRoaXMuY29kZVBvaW50O1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG9jdGV0cy5sZW5ndGg7IGkgKz0gMSl7XHJcbiAgICAgICAgdmFyIG9jdGV0ID0gb2N0ZXRzW2ldO1xyXG4gICAgICAgIGlmIChiaXRzTmVlZGVkICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChvY3RldCA8IDEyOCB8fCBvY3RldCA+IDE5MSB8fCAhdmFsaWQoY29kZVBvaW50IDw8IDYgfCBvY3RldCAmIDYzLCBiaXRzTmVlZGVkIC0gNiwgb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSkpIHtcclxuICAgICAgICAgICAgICAgIGJpdHNOZWVkZWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVI7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChvY3RldCA+PSAwICYmIG9jdGV0IDw9IDEyNykge1xyXG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBvY3RldDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAxOTIgJiYgb2N0ZXQgPD0gMjIzKSB7XHJcbiAgICAgICAgICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDE7XHJcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDMxO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDIyNCAmJiBvY3RldCA8PSAyMzkpIHtcclxuICAgICAgICAgICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMjtcclxuICAgICAgICAgICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMTU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMjQwICYmIG9jdGV0IDw9IDI0Nykge1xyXG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDYgKiAzO1xyXG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiA3O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYml0c05lZWRlZCAhPT0gMCAmJiAhdmFsaWQoY29kZVBvaW50LCBiaXRzTmVlZGVkLCBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpKSkge1xyXG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJpdHNOZWVkZWQgLT0gNjtcclxuICAgICAgICAgICAgY29kZVBvaW50ID0gY29kZVBvaW50IDw8IDYgfCBvY3RldCAmIDYzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYml0c05lZWRlZCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoY29kZVBvaW50IDw9IDY1NTM1KSB7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgKyAoY29kZVBvaW50IC0gNjU1MzUgLSAxID4+IDEwKSk7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NjMyMCArIChjb2RlUG9pbnQgLSA2NTUzNSAtIDEgJiAxMDIzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmJpdHNOZWVkZWQgPSBiaXRzTmVlZGVkO1xyXG4gICAgdGhpcy5jb2RlUG9pbnQgPSBjb2RlUG9pbnQ7XHJcbiAgICByZXR1cm4gc3RyaW5nO1xyXG59O1xyXG4vLyBGaXJlZm94IDwgMzggdGhyb3dzIGFuIGVycm9yIHdpdGggc3RyZWFtIG9wdGlvblxyXG52YXIgc3VwcG9ydHNTdHJlYW1PcHRpb24gPSBmdW5jdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcjEoKS5kZWNvZGUobmV3IFRleHRFbmNvZGVyMSgpLmVuY29kZSgndGVzdCcpLCB7XHJcbiAgICAgICAgICAgIHN0cmVhbTogdHJ1ZVxyXG4gICAgICAgIH0pID09PSAndGVzdCc7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuLy8gSUUsIEVkZ2VcclxuaWYgKFRleHREZWNvZGVyMSA9PSB1bmRlZmluZWQgfHwgVGV4dEVuY29kZXIxID09IHVuZGVmaW5lZCB8fCAhc3VwcG9ydHNTdHJlYW1PcHRpb24oKSkge1xyXG4gICAgVGV4dERlY29kZXIxID0gVGV4dERlY29kZXJQb2x5ZmlsbDtcclxufVxyXG52YXIgayA9IGZ1bmN0aW9uKCkge1xyXG59O1xyXG5mdW5jdGlvbiBYSFJXcmFwcGVyKHhocikge1xyXG4gICAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcclxuICAgIHRoaXMucmVzcG9uc2VUeXBlID0gJyc7XHJcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSAwO1xyXG4gICAgdGhpcy5zdGF0dXMgPSAwO1xyXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJyc7XHJcbiAgICB0aGlzLnJlc3BvbnNlVGV4dCA9ICcnO1xyXG4gICAgdGhpcy5vbnByb2dyZXNzID0gaztcclxuICAgIHRoaXMub25yZWFkeXN0YXRlY2hhbmdlID0gaztcclxuICAgIHRoaXMuX2NvbnRlbnRUeXBlID0gJyc7XHJcbiAgICB0aGlzLl94aHIgPSB4aHI7XHJcbiAgICB0aGlzLl9zZW5kVGltZW91dCA9IDA7XHJcbiAgICB0aGlzLl9hYm9ydCA9IGs7XHJcbn1cclxuWEhSV3JhcHBlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKG1ldGhvZCwgdXJsKSB7XHJcbiAgICB0aGlzLl9hYm9ydCh0cnVlKTtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIHZhciB4aHIgPSB0aGlzLl94aHI7XHJcbiAgICB2YXIgc3RhdGUgPSAxO1xyXG4gICAgdmFyIHRpbWVvdXQgPSAwO1xyXG4gICAgdGhpcy5fYWJvcnQgPSBmdW5jdGlvbihzaWxlbnQpIHtcclxuICAgICAgICBpZiAodGhhdC5fc2VuZFRpbWVvdXQgIT09IDApIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoYXQuX3NlbmRUaW1lb3V0KTtcclxuICAgICAgICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RhdGUgPT09IDEgfHwgc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcclxuICAgICAgICAgICAgc3RhdGUgPSA0O1xyXG4gICAgICAgICAgICB4aHIub25sb2FkID0gaztcclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBrO1xyXG4gICAgICAgICAgICB4aHIub25hYm9ydCA9IGs7XHJcbiAgICAgICAgICAgIHhoci5vbnByb2dyZXNzID0gaztcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGs7XHJcbiAgICAgICAgICAgIC8vIElFIDggLSA5OiBYRG9tYWluUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XHJcbiAgICAgICAgICAgIC8vIE9wZXJhIDwgMTA6IFhNTEh0dHBSZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcclxuICAgICAgICAgICAgeGhyLmFib3J0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gNDtcclxuICAgICAgICAgICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUgPSAwO1xyXG4gICAgfTtcclxuICAgIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIHN0YXRlID0gMjtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IDA7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXNUZXh0ID0gJyc7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYgKCEoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IHhoci5zdGF0dXM7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSUUgPCAxMCB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMiB8fCB4aHIucmVhZHlTdGF0ZSA9PT0gM1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9wZXJhIDwgMTEgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDJcclxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkxMjFcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggPCAxNCwgQ2hyb21lID8sIFNhZmFyaSA/XHJcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Mjk2NThcclxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD03Nzg1NFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzID0gMjAwO1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9ICdPSyc7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9IHhoci5jb250ZW50VHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhdHVzICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5fY29udGVudFR5cGUgPSBjb250ZW50VHlwZTtcclxuICAgICAgICAgICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uUHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBvblN0YXJ0KCk7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gMztcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9ICcnO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gSUUgOCAtIDkgd2l0aCBYTUxIdHRwUmVxdWVzdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDM7XHJcbiAgICAgICAgICAgIHRoYXQucmVzcG9uc2VUZXh0ID0gcmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICB0aGF0Lm9ucHJvZ3Jlc3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gRmlyZWZveCA1MiBmaXJlcyBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHdpdGhvdXQgZmluYWwgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSAzKVxyXG4gICAgICAgIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1wiXHJcbiAgICAgICAgb25Qcm9ncmVzcygpO1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gMSB8fCBzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IDQ7XHJcbiAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSA0O1xyXG4gICAgICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgb25SZWFkeVN0YXRlQ2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHhociAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gT3BlcmEgMTJcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBvbkZpbmlzaCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIG9uU3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG9uVGltZW91dCgpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAzKSB7XHJcbiAgICAgICAgICAgIG9uUHJvZ3Jlc3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gWERvbWFpblJlcXVlc3QjYWJvcnQgcmVtb3ZlcyBvbnByb2dyZXNzLCBvbmVycm9yLCBvbmxvYWRcclxuICAgIHhoci5vbmxvYWQgPSBvbkZpbmlzaDtcclxuICAgIHhoci5vbmVycm9yID0gb25GaW5pc2g7XHJcbiAgICAvLyBpbXByb3BlciBmaXggdG8gbWF0Y2ggRmlyZWZveCBiZWhhdmlvciwgYnV0IGl0IGlzIGJldHRlciB0aGFuIGp1c3QgaWdub3JlIGFib3J0XHJcbiAgICAvLyBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzY4NTk2XHJcbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODAyMDBcclxuICAgIC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNTM1NzBcclxuICAgIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1xyXG4gICAgeGhyLm9uYWJvcnQgPSBvbkZpbmlzaDtcclxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTczNjcyM1xyXG4gICAgaWYgKCEoJ3NlbmRBc0JpbmFyeScgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJiAhKCdtb3pBbm9uJyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpKSB7XHJcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBvblByb2dyZXNzO1xyXG4gICAgfVxyXG4gICAgLy8gSUUgOCAtIDkgKFhNTEhUVFBSZXF1ZXN0KVxyXG4gICAgLy8gT3BlcmEgPCAxMlxyXG4gICAgLy8gRmlyZWZveCA8IDMuNVxyXG4gICAgLy8gRmlyZWZveCAzLjUgLSAzLjYgLSA/IDwgOS4wXHJcbiAgICAvLyBvbnByb2dyZXNzIGlzIG5vdCBmaXJlZCBzb21ldGltZXMgb3IgZGVsYXllZFxyXG4gICAgLy8gc2VlIGFsc28gIzY0XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gb25SZWFkeVN0YXRlQ2hhbmdlO1xyXG4gICAgaWYgKCdjb250ZW50VHlwZScgaW4geGhyKSB7XHJcbiAgICAgICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyAncGFkZGluZz10cnVlJztcclxuICAgIH1cclxuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuICAgIGlmICgncmVhZHlTdGF0ZScgaW4geGhyKSB7XHJcbiAgICAgICAgLy8gd29ya2Fyb3VuZCBmb3IgT3BlcmEgMTIgaXNzdWUgd2l0aCBcInByb2dyZXNzXCIgZXZlbnRzXHJcbiAgICAgICAgLy8gIzkxXHJcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG9uVGltZW91dCgpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG59O1xyXG5YSFJXcmFwcGVyLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5fYWJvcnQoZmFsc2UpO1xyXG59O1xyXG5YSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZUhlYWRlciA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250ZW50VHlwZTtcclxufTtcclxuWEhSV3JhcHBlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XHJcbiAgICB2YXIgeGhyID0gdGhpcy5feGhyO1xyXG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiB4aHIpIHtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSk7XHJcbiAgICB9XHJcbn07XHJcblhIUldyYXBwZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMgIT0gdW5kZWZpbmVkID8gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIDogJyc7XHJcbn07XHJcblhIUldyYXBwZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIGxvYWRpbmcgaW5kaWNhdG9yIGluIFNhZmFyaSA8ID8gKDYpLCBDaHJvbWUgPCAxNCwgRmlyZWZveFxyXG4gICAgaWYgKCEoJ29udGltZW91dCcgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJiBkb2N1bWVudCAhPSB1bmRlZmluZWQgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSB1bmRlZmluZWQgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gMDtcclxuICAgICAgICAgICAgdGhhdC5zZW5kKCk7XHJcbiAgICAgICAgfSwgNCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHhociA9IHRoaXMuX3hocjtcclxuICAgIC8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxyXG4gICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRoaXMud2l0aENyZWRlbnRpYWxzO1xyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyB4aHIuc2VuZCgpOyB0aHJvd3MgXCJOb3QgZW5vdWdoIGFyZ3VtZW50c1wiIGluIEZpcmVmb3ggMy4wXHJcbiAgICAgICAgeGhyLnNlbmQodW5kZWZpbmVkKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yMSkge1xyXG4gICAgICAgIC8vIFNhZmFyaSA1LjEuNywgT3BlcmEgMTJcclxuICAgICAgICB0aHJvdyBlcnJvcjE7XHJcbiAgICB9XHJcbn07XHJcbmZ1bmN0aW9uIHRvTG93ZXJDYXNlKG5hbWUpIHtcclxuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uKGMpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjLmNoYXJDb2RlQXQoMCkgKyAzMik7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBIZWFkZXJzUG9seWZpbGwoYWxsKSB7XHJcbiAgICAvLyBHZXQgaGVhZGVyczogaW1wbGVtZW50ZWQgYWNjb3JkaW5nIHRvIG1vemlsbGEncyBleGFtcGxlIGNvZGU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdC9nZXRBbGxSZXNwb25zZUhlYWRlcnMjRXhhbXBsZVxyXG4gICAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICB2YXIgYXJyYXkgPSBhbGwuc3BsaXQoJ1xcclxcbicpO1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKXtcclxuICAgICAgICB2YXIgbGluZSA9IGFycmF5W2ldO1xyXG4gICAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzogJyk7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBwYXJ0cy5zaGlmdCgpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzogJyk7XHJcbiAgICAgICAgbWFwW3RvTG93ZXJDYXNlKG5hbWUpXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbWFwID0gbWFwO1xyXG59XHJcbkhlYWRlcnNQb2x5ZmlsbC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcFt0b0xvd2VyQ2FzZShuYW1lKV07XHJcbn07XHJcbmZ1bmN0aW9uIFhIUlRyYW5zcG9ydCgpIHtcclxufVxyXG5YSFJUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbih4aHIsIG9uU3RhcnRDYWxsYmFjaywgb25Qcm9ncmVzc0NhbGxiYWNrLCBvbkZpbmlzaENhbGxiYWNrLCB1cmwsIHdpdGhDcmVkZW50aWFscywgaGVhZGVycykge1xyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XHJcbiAgICB2YXIgb2Zmc2V0ID0gMDtcclxuICAgIHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgdmFyIGNodW5rID0gcmVzcG9uc2VUZXh0LnNsaWNlKG9mZnNldCk7XHJcbiAgICAgICAgb2Zmc2V0ICs9IGNodW5rLmxlbmd0aDtcclxuICAgICAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHhoci5zdGF0dXM7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHQ7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7XHJcbiAgICAgICAgICAgIHZhciBoZWFkZXJzMSA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtcclxuICAgICAgICAgICAgb25TdGFydENhbGxiYWNrKHN0YXR1cywgc3RhdHVzVGV4dCwgY29udGVudFR5cGUsIG5ldyBIZWFkZXJzUG9seWZpbGwoaGVhZGVyczEpLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHhoci5hYm9ydCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFscztcclxuICAgIHhoci5yZXNwb25zZVR5cGUgPSAndGV4dCc7XHJcbiAgICBmb3IodmFyIG5hbWUgaW4gaGVhZGVycyl7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCBoZWFkZXJzW25hbWVdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZCgpO1xyXG59O1xyXG5mdW5jdGlvbiBIZWFkZXJzV3JhcHBlcihoZWFkZXJzMikge1xyXG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnMyO1xyXG59XHJcbkhlYWRlcnNXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVhZGVycy5nZXQobmFtZSk7XHJcbn07XHJcbmZ1bmN0aW9uIEZldGNoVHJhbnNwb3J0KCkge1xyXG59XHJcbkZldGNoVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oeGhyLCBvblN0YXJ0Q2FsbGJhY2ssIG9uUHJvZ3Jlc3NDYWxsYmFjaywgb25GaW5pc2hDYWxsYmFjaywgdXJsLCB3aXRoQ3JlZGVudGlhbHMsIGhlYWRlcnMyKSB7XHJcbiAgICB2YXIgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIxKCk7XHJcbiAgICB2YXIgc2lnbmFsID0gY29udHJvbGxlci5zaWduYWwgLy8gc2VlICMxMjBcclxuICAgIDtcclxuICAgIHZhciB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcjEoKTtcclxuICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMyLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiB3aXRoQ3JlZGVudGlhbHMgPyAnaW5jbHVkZScgOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICAgIHNpZ25hbDogc2lnbmFsLFxyXG4gICAgICAgIGNhY2hlOiAnbm8tc3RvcmUnXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdmFyIHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XHJcbiAgICAgICAgb25TdGFydENhbGxiYWNrKHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dCwgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLCBuZXcgSGVhZGVyc1dyYXBwZXIocmVzcG9uc2UuaGVhZGVycyksIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5jYW5jZWwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciByZWFkTmV4dENodW5rID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IGJ5dGVzIGluIHRleHREZWNvZGVyIGFyZSBpZ25vcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2h1bmsgPSB0ZXh0RGVjb2Rlci5kZWNvZGUocmVzdWx0LnZhbHVlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW06IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWROZXh0Q2h1bmsoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVsnY2F0Y2gnXShmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVhZE5leHRDaHVuaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjaygpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9KTtcclxufTtcclxuZnVuY3Rpb24gRXZlbnRUYXJnZXQxKCkge1xyXG4gICAgdGhpcy5fbGlzdGVuZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxufVxyXG5mdW5jdGlvbiB0aHJvd0Vycm9yKGUpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgIH0sIDApO1xyXG59XHJcbkV2ZW50VGFyZ2V0MS5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC50YXJnZXQgPSB0aGlzO1xyXG4gICAgdmFyIHR5cGVMaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZlbnQudHlwZV07XHJcbiAgICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdHlwZUxpc3RlbmVycy5sZW5ndGg7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKXtcclxuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gdHlwZUxpc3RlbmVyc1tpXTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5FdmVudFRhcmdldDEucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgdHlwZSA9IFN0cmluZyh0eXBlKTtcclxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnM7XHJcbiAgICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXTtcclxuICAgIGlmICh0eXBlTGlzdGVuZXJzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHR5cGVMaXN0ZW5lcnMgPSBbXTtcclxuICAgICAgICBsaXN0ZW5lcnNbdHlwZV0gPSB0eXBlTGlzdGVuZXJzO1xyXG4gICAgfVxyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSl7XHJcbiAgICAgICAgaWYgKHR5cGVMaXN0ZW5lcnNbaV0gPT09IGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgICAgdHlwZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICAgIH1cclxufTtcclxuRXZlbnRUYXJnZXQxLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcclxuICAgIHR5cGUgPSBTdHJpbmcodHlwZSk7XHJcbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzO1xyXG4gICAgdmFyIHR5cGVMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdHlwZV07XHJcbiAgICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YXIgZmlsdGVyZWQgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSl7XHJcbiAgICAgICAgICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldICE9PSBsaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWQucHVzaCh0eXBlTGlzdGVuZXJzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbdHlwZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzW3R5cGVdID0gZmlsdGVyZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5mdW5jdGlvbiBFdmVudDEodHlwZSkge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG59XHJcbmZ1bmN0aW9uIE1lc3NhZ2VFdmVudDEodHlwZSwgb3B0aW9ucykge1xyXG4gICAgRXZlbnQxLmNhbGwodGhpcywgdHlwZSk7XHJcbiAgICB0aGlzLmRhdGEgPSBvcHRpb25zLmRhdGE7XHJcbiAgICB0aGlzLmxhc3RFdmVudElkID0gb3B0aW9ucy5sYXN0RXZlbnRJZDtcclxufVxyXG5NZXNzYWdlRXZlbnQxLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQxLnByb3RvdHlwZSk7XHJcbmZ1bmN0aW9uIENvbm5lY3Rpb25FdmVudCh0eXBlLCBvcHRpb25zKSB7XHJcbiAgICBFdmVudDEuY2FsbCh0aGlzLCB0eXBlKTtcclxuICAgIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXM7XHJcbiAgICB0aGlzLnN0YXR1c1RleHQgPSBvcHRpb25zLnN0YXR1c1RleHQ7XHJcbiAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcbn1cclxuQ29ubmVjdGlvbkV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQxLnByb3RvdHlwZSk7XHJcbnZhciBXQUlUSU5HID0gLTE7XHJcbnZhciBDT05ORUNUSU5HID0gMDtcclxudmFyIE9QRU4gPSAxO1xyXG52YXIgQ0xPU0VEID0gMjtcclxudmFyIEFGVEVSX0NSID0gLTE7XHJcbnZhciBGSUVMRF9TVEFSVCA9IDA7XHJcbnZhciBGSUVMRCA9IDE7XHJcbnZhciBWQUxVRV9TVEFSVCA9IDI7XHJcbnZhciBWQUxVRSA9IDM7XHJcbnZhciBjb250ZW50VHlwZVJlZ0V4cCA9IC9edGV4dFxcL2V2ZW50XFwtc3RyZWFtOz8oXFxzKmNoYXJzZXRcXD11dGZcXC04KT8kL2k7XHJcbnZhciBNSU5JTVVNX0RVUkFUSU9OID0gMTAwMDtcclxudmFyIE1BWElNVU1fRFVSQVRJT04gPSAxODAwMDAwMDtcclxudmFyIHBhcnNlRHVyYXRpb24gPSBmdW5jdGlvbih2YWx1ZSwgZGVmKSB7XHJcbiAgICB2YXIgbiA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XHJcbiAgICBpZiAobiAhPT0gbikge1xyXG4gICAgICAgIG4gPSBkZWY7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhbXBEdXJhdGlvbihuKTtcclxufTtcclxudmFyIGNsYW1wRHVyYXRpb24gPSBmdW5jdGlvbihuKSB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgTUlOSU1VTV9EVVJBVElPTiksIE1BWElNVU1fRFVSQVRJT04pO1xyXG59O1xyXG52YXIgZmlyZSA9IGZ1bmN0aW9uKHRoYXQsIGYsIGV2ZW50KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBmLmNhbGwodGhhdCwgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvd0Vycm9yKGUpO1xyXG4gICAgfVxyXG59O1xyXG5mdW5jdGlvbiBFdmVudFNvdXJjZVBvbHlmaWxsKHVybCwgb3B0aW9ucykge1xyXG4gICAgRXZlbnRUYXJnZXQxLmNhbGwodGhpcyk7XHJcbiAgICB0aGlzLm9ub3BlbiA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMub25tZXNzYWdlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5vbmVycm9yID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy51cmwgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLndpdGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuX2Nsb3NlID0gdW5kZWZpbmVkO1xyXG4gICAgc3RhcnQodGhpcywgdXJsLCBvcHRpb25zKTtcclxufVxyXG52YXIgaXNGZXRjaFN1cHBvcnRlZCA9IGZldGNoICE9IHVuZGVmaW5lZCAmJiBSZXNwb25zZTEgIT0gdW5kZWZpbmVkICYmICdib2R5JyBpbiBSZXNwb25zZTEucHJvdG90eXBlO1xyXG5mdW5jdGlvbiBzdGFydChlcywgdXJsLCBvcHRpb25zKSB7XHJcbiAgICB1cmwgPSBTdHJpbmcodXJsKTtcclxuICAgIHZhciB3aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBCb29sZWFuKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKTtcclxuICAgIHZhciBpbml0aWFsUmV0cnkgPSBjbGFtcER1cmF0aW9uKDEwMDApO1xyXG4gICAgdmFyIGhlYXJ0YmVhdFRpbWVvdXQgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQgIT0gdW5kZWZpbmVkID8gcGFyc2VEdXJhdGlvbihvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQsIDQ1MDAwKSA6IGNsYW1wRHVyYXRpb24oNDUwMDApO1xyXG4gICAgdmFyIGxhc3RFdmVudElkID0gJyc7XHJcbiAgICB2YXIgcmV0cnkgPSBpbml0aWFsUmV0cnk7XHJcbiAgICB2YXIgd2FzQWN0aXZpdHkgPSBmYWxzZTtcclxuICAgIHZhciBoZWFkZXJzMiA9IG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGVhZGVycyAhPSB1bmRlZmluZWQgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuaGVhZGVycykpIDogdW5kZWZpbmVkO1xyXG4gICAgdmFyIEN1cnJlbnRUcmFuc3BvcnQgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWQgPyBvcHRpb25zLlRyYW5zcG9ydCA6IFhNTEh0dHBSZXF1ZXN0O1xyXG4gICAgdmFyIHhociA9IGlzRmV0Y2hTdXBwb3J0ZWQgJiYgIShvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWQpID8gdW5kZWZpbmVkIDogbmV3IFhIUldyYXBwZXIobmV3IEN1cnJlbnRUcmFuc3BvcnQoKSk7XHJcbiAgICB2YXIgdHJhbnNwb3J0ID0geGhyID09IHVuZGVmaW5lZCA/IG5ldyBGZXRjaFRyYW5zcG9ydCgpIDogbmV3IFhIUlRyYW5zcG9ydCgpO1xyXG4gICAgdmFyIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgdmFyIHRpbWVvdXQgPSAwO1xyXG4gICAgdmFyIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkc7XHJcbiAgICB2YXIgZGF0YUJ1ZmZlciA9ICcnO1xyXG4gICAgdmFyIGxhc3RFdmVudElkQnVmZmVyID0gJyc7XHJcbiAgICB2YXIgZXZlbnRUeXBlQnVmZmVyID0gJyc7XHJcbiAgICB2YXIgdGV4dEJ1ZmZlciA9ICcnO1xyXG4gICAgdmFyIHN0YXRlID0gRklFTERfU1RBUlQ7XHJcbiAgICB2YXIgZmllbGRTdGFydCA9IDA7XHJcbiAgICB2YXIgdmFsdWVTdGFydCA9IDA7XHJcbiAgICB2YXIgb25TdGFydCA9IGZ1bmN0aW9uKHN0YXR1cywgc3RhdHVzVGV4dCwgY29udGVudFR5cGUsIGhlYWRlcnMzLCBjYW5jZWwpIHtcclxuICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XHJcbiAgICAgICAgICAgIGNhbmNlbEZ1bmN0aW9uID0gY2FuY2VsO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAgJiYgY29udGVudFR5cGUgIT0gdW5kZWZpbmVkICYmIGNvbnRlbnRUeXBlUmVnRXhwLnRlc3QoY29udGVudFR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUgPSBPUEVOO1xyXG4gICAgICAgICAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnk7XHJcbiAgICAgICAgICAgICAgICBlcy5yZWFkeVN0YXRlID0gT1BFTjtcclxuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBDb25uZWN0aW9uRXZlbnQoJ29wZW4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzM1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGZpcmUoZXMsIGVzLm9ub3BlbiwgZXZlbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXNUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSBzdGF0dXNUZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBzdGF0dXMgXCIgKyBzdGF0dXMgKyAnICcgKyBzdGF0dXNUZXh0ICsgJyB0aGF0IGlzIG5vdCAyMDAuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgQ29udGVudC1UeXBlIHNwZWNpZnlpbmcgYW4gdW5zdXBwb3J0ZWQgdHlwZTogXCIgKyAoY29udGVudFR5cGUgPT0gdW5kZWZpbmVkID8gJy0nIDogY29udGVudFR5cGUucmVwbGFjZSgvXFxzKy9nLCAnICcpKSArICcuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKG5ldyBFcnJvcihtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IENvbm5lY3Rpb25FdmVudCgnZXJyb3InLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzM1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGZpcmUoZXMsIGVzLm9uZXJyb3IsIGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgb25Qcm9ncmVzcyA9IGZ1bmN0aW9uKHRleHRDaHVuaykge1xyXG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4pIHtcclxuICAgICAgICAgICAgdmFyIG4gPSAtMTtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRleHRDaHVuay5sZW5ndGg7IGkgKz0gMSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHRleHRDaHVuay5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG4gPSBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjaHVuayA9IChuICE9PSAtMSA/IHRleHRCdWZmZXIgOiAnJykgKyB0ZXh0Q2h1bmsuc2xpY2UoMCwgbiArIDEpO1xyXG4gICAgICAgICAgICB0ZXh0QnVmZmVyID0gKG4gPT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZShuICsgMSk7XHJcbiAgICAgICAgICAgIGlmIChjaHVuayAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHdhc0FjdGl2aXR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IodmFyIHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBjaHVuay5sZW5ndGg7IHBvc2l0aW9uICs9IDEpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGMgPSBjaHVuay5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IgJiYgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgIT09IEZJRUxEX1NUQVJUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTdGFydCA9IHBvc2l0aW9uICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZCA9IGNodW5rLnNsaWNlKGZpZWxkU3RhcnQsIHZhbHVlU3RhcnQgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNodW5rLnNsaWNlKHZhbHVlU3RhcnQgKyAodmFsdWVTdGFydCA8IHBvc2l0aW9uICYmIGNodW5rLmNoYXJDb2RlQXQodmFsdWVTdGFydCkgPT09ICcgJy5jaGFyQ29kZUF0KDApID8gMSA6IDApLCBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQgPT09ICdkYXRhJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCdWZmZXIgKz0gJ1xcbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdpZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZEJ1ZmZlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2V2ZW50Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ3JldHJ5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxSZXRyeSA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGluaXRpYWxSZXRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaGVhcnRiZWF0VGltZW91dCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaGVhcnRiZWF0VGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGltZW91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFCdWZmZXIgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEV2ZW50SWQgPSBsYXN0RXZlbnRJZEJ1ZmZlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSAnbWVzc2FnZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBNZXNzYWdlRXZlbnQxKGV2ZW50VHlwZUJ1ZmZlciwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhQnVmZmVyLnNsaWNlKDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZDogbGFzdEV2ZW50SWRCdWZmZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnbWVzc2FnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyZShlcywgZXMub25tZXNzYWdlLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IENMT1NFRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApID8gQUZURVJfQ1IgOiBGSUVMRF9TVEFSVDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEX1NUQVJUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFN0YXJ0ID0gcG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEZJRUxEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTEQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjID09PSAnOicuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgPSBwb3NpdGlvbiArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRV9TVEFSVDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gVkFMVUVfU1RBUlQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gVkFMVUU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gT1BFTiB8fCBjdXJyZW50U3RhdGUgPT09IENPTk5FQ1RJTkcpIHtcclxuICAgICAgICAgICAgY3VycmVudFN0YXRlID0gV0FJVElORztcclxuICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgb25UaW1lb3V0KCk7XHJcbiAgICAgICAgICAgIH0sIHJldHJ5KTtcclxuICAgICAgICAgICAgcmV0cnkgPSBjbGFtcER1cmF0aW9uKE1hdGgubWluKGluaXRpYWxSZXRyeSAqIDE2LCByZXRyeSAqIDIpKTtcclxuICAgICAgICAgICAgZXMucmVhZHlTdGF0ZSA9IENPTk5FQ1RJTkc7XHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudDEoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgICAgICBmaXJlKGVzLCBlcy5vbmVycm9yLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhciBjbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9IENMT1NFRDtcclxuICAgICAgICBpZiAoY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNhbmNlbEZ1bmN0aW9uKCk7XHJcbiAgICAgICAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgIHRpbWVvdXQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlcy5yZWFkeVN0YXRlID0gQ0xPU0VEO1xyXG4gICAgfTtcclxuICAgIHZhciBvblRpbWVvdXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aW1lb3V0ID0gMDtcclxuICAgICAgICBpZiAoY3VycmVudFN0YXRlICE9PSBXQUlUSU5HKSB7XHJcbiAgICAgICAgICAgIGlmICghd2FzQWN0aXZpdHkgJiYgY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKG5ldyBFcnJvcignTm8gYWN0aXZpdHkgd2l0aGluICcgKyBoZWFydGJlYXRUaW1lb3V0ICsgJyBtaWxsaXNlY29uZHMuIFJlY29ubmVjdGluZy4nKSk7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxGdW5jdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3YXNBY3Rpdml0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25UaW1lb3V0KCk7XHJcbiAgICAgICAgICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdhc0FjdGl2aXR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG9uVGltZW91dCgpO1xyXG4gICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpO1xyXG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9IENPTk5FQ1RJTkc7XHJcbiAgICAgICAgZGF0YUJ1ZmZlciA9ICcnO1xyXG4gICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICcnO1xyXG4gICAgICAgIGxhc3RFdmVudElkQnVmZmVyID0gbGFzdEV2ZW50SWQ7XHJcbiAgICAgICAgdGV4dEJ1ZmZlciA9ICcnO1xyXG4gICAgICAgIGZpZWxkU3RhcnQgPSAwO1xyXG4gICAgICAgIHZhbHVlU3RhcnQgPSAwO1xyXG4gICAgICAgIHN0YXRlID0gRklFTERfU1RBUlQ7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDI4OTE2XHJcbiAgICAgICAgLy8gUmVxdWVzdCBoZWFkZXIgZmllbGQgTGFzdC1FdmVudC1JRCBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLlxyXG4gICAgICAgIHZhciByZXF1ZXN0VVJMID0gdXJsO1xyXG4gICAgICAgIGlmICh1cmwuc2xpY2UoMCwgNSkgIT09ICdkYXRhOicgJiYgdXJsLnNsaWNlKDAsIDUpICE9PSAnYmxvYjonKSB7XHJcbiAgICAgICAgICAgIGlmIChsYXN0RXZlbnRJZCAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RVUkwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArICdsYXN0RXZlbnRJZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGxhc3RFdmVudElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSB7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXF1ZXN0SGVhZGVyc1snQWNjZXB0J10gPSAndGV4dC9ldmVudC1zdHJlYW0nO1xyXG4gICAgICAgIGlmIChoZWFkZXJzMiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yKHZhciBuYW1lIGluIGhlYWRlcnMyKXtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVyczIsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEhlYWRlcnNbbmFtZV0gPSBoZWFkZXJzMltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0cmFuc3BvcnQub3Blbih4aHIsIG9uU3RhcnQsIG9uUHJvZ3Jlc3MsIG9uRmluaXNoLCByZXF1ZXN0VVJMLCB3aXRoQ3JlZGVudGlhbHMsIHJlcXVlc3RIZWFkZXJzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZXMudXJsID0gdXJsO1xyXG4gICAgZXMucmVhZHlTdGF0ZSA9IENPTk5FQ1RJTkc7XHJcbiAgICBlcy53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHM7XHJcbiAgICBlcy5fY2xvc2UgPSBjbG9zZTtcclxuICAgIG9uVGltZW91dCgpO1xyXG59XHJcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudFRhcmdldDEucHJvdG90eXBlKTtcclxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ09OTkVDVElORyA9IENPTk5FQ1RJTkc7XHJcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLk9QRU4gPSBPUEVOO1xyXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DTE9TRUQgPSBDTE9TRUQ7XHJcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLl9jbG9zZSgpO1xyXG59O1xyXG5FdmVudFNvdXJjZVBvbHlmaWxsLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HO1xyXG5FdmVudFNvdXJjZVBvbHlmaWxsLk9QRU4gPSBPUEVOO1xyXG5FdmVudFNvdXJjZVBvbHlmaWxsLkNMT1NFRCA9IENMT1NFRDtcclxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkO1xyXG52YXIgX2RlZmF1bHQgPSBFdmVudFNvdXJjZVBvbHlmaWxsO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50LXNvdXJjZS1wb2x5ZmlsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5kaXNwbGF5Q29udGVudCA9IGRpc3BsYXlDb250ZW50O1xyXG5mdW5jdGlvbiBkaXNwbGF5Q29udGVudChjYWxsYmFjaykge1xyXG4gICAgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yKHZhciB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksIGkgPSB4Lmxlbmd0aDsgaS0tOyl7XHJcbiAgICAgICAgICAgIHhbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuY2xvc2VQaW5nID0gY2xvc2VQaW5nO1xyXG5leHBvcnRzLnNldHVwUGluZyA9IHNldHVwUGluZztcclxuZXhwb3J0cy5jdXJyZW50UGFnZSA9IHZvaWQgMDtcclxudmFyIF9ldmVudHNvdXJjZSA9IHJlcXVpcmUoXCIuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2VcIik7XHJcbmxldCBldnRTb3VyY2U7XHJcbmxldCBjdXJyZW50UGFnZTtcclxuZXhwb3J0cy5jdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlO1xyXG5mdW5jdGlvbiBjbG9zZVBpbmcoKSB7XHJcbiAgICBpZiAoZXZ0U291cmNlKSBldnRTb3VyY2UuY2xvc2UoKTtcclxuICAgIGV2dFNvdXJjZSA9IG51bGw7XHJcbn1cclxuZnVuY3Rpb24gc2V0dXBQaW5nKGFzc2V0UHJlZml4LCBwYXRobmFtZUZuLCByZXRyeSkge1xyXG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRobmFtZUZuKCk7XHJcbiAgICAvLyBNYWtlIHN1cmUgdG8gb25seSBjcmVhdGUgbmV3IEV2ZW50U291cmNlIHJlcXVlc3QgaWYgcGFnZSBoYXMgY2hhbmdlZFxyXG4gICAgaWYgKHBhdGhuYW1lID09PSBjdXJyZW50UGFnZSAmJiAhcmV0cnkpIHJldHVybjtcclxuICAgIGV4cG9ydHMuY3VycmVudFBhZ2UgPSBjdXJyZW50UGFnZSA9IHBhdGhuYW1lO1xyXG4gICAgLy8gY2xvc2UgY3VycmVudCBFdmVudFNvdXJjZSBjb25uZWN0aW9uXHJcbiAgICBjbG9zZVBpbmcoKTtcclxuICAgIGV2dFNvdXJjZSA9ICgwLCBfZXZlbnRzb3VyY2UpLmdldEV2ZW50U291cmNlV3JhcHBlcih7XHJcbiAgICAgICAgcGF0aDogYCR7YXNzZXRQcmVmaXh9L19uZXh0L3dlYnBhY2staG1yP3BhZ2U9JHtlbmNvZGVVUklDb21wb25lbnQoY3VycmVudFBhZ2UpfWAsXHJcbiAgICAgICAgdGltZW91dDogNTAwMFxyXG4gICAgfSk7XHJcbiAgICBldnRTb3VyY2UuYWRkTWVzc2FnZUxpc3RlbmVyKChldmVudCk9PntcclxuICAgICAgICBpZiAoZXZlbnQuZGF0YS5pbmRleE9mKCd7JykgPT09IC0xKSByZXR1cm47XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIGRvbid0IGF0dGVtcHQgZmV0Y2hpbmcgdGhlIHBhZ2UgaWYgd2UncmUgYWxyZWFkeSBzaG93aW5nXHJcbiAgICAgICAgICAgIC8vIHRoZSBkZXYgb3ZlcmxheSBhcyB0aGlzIGNhbiBjYXVzZSB0aGUgZXJyb3IgdG8gYmUgdHJpZ2dlcmVkXHJcbiAgICAgICAgICAgIC8vIHJlcGVhdGVkbHlcclxuICAgICAgICAgICAgaWYgKHBheWxvYWQuaW52YWxpZCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmVycikge1xyXG4gICAgICAgICAgICAgICAgLy8gUGF5bG9hZCBjYW4gYmUgaW52YWxpZCBldmVuIGlmIHRoZSBwYWdlIGRvZXMgbm90IGV4aXN0LlxyXG4gICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGl0IGV4aXN0cyBiZWZvcmUgcmVsb2FkaW5nLlxyXG4gICAgICAgICAgICAgICAgZmV0Y2gobG9jYXRpb24uaHJlZiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKChwYWdlUmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYWdlUmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ29uLWRlbWFuZC1lbnRyaWVzIGZhaWxlZCB0byBwYXJzZSByZXNwb25zZScsIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XHJcbiIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cclxuICovXHJcblxyXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xyXG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcclxuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cclxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xyXG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XHJcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcclxuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xyXG5cclxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcclxuICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvYmpba2V5XTtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXHJcbiAgICBkZWZpbmUoe30sIFwiXCIpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcclxuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxyXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XHJcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xyXG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XHJcblxyXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxyXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxyXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBnZW5lcmF0b3I7XHJcbiAgfVxyXG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XHJcblxyXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxyXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxyXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxyXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcclxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXHJcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xyXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXHJcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXHJcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxyXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cclxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcclxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcclxuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xyXG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XHJcblxyXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcclxuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXHJcbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcclxuXHJcbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXHJcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXHJcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcclxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxyXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XHJcbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxyXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cclxuXHJcbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxyXG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXHJcbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XHJcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcclxuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XHJcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXHJcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxyXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XHJcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxyXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxyXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcclxuICB9XHJcblxyXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XHJcbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XHJcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XHJcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcclxuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xyXG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxyXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXHJcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcclxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxyXG4gICk7XHJcblxyXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXHJcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cclxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XHJcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcclxuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xyXG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xyXG4gICAgcmV0dXJuIGN0b3JcclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxyXG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cclxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXHJcbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXHJcbiAgICAgIDogZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XHJcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XHJcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcclxuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XHJcbiAgICByZXR1cm4gZ2VuRnVuO1xyXG4gIH07XHJcblxyXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xyXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XHJcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xyXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXHJcbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xyXG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XHJcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcclxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJlxyXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xyXG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XHJcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xyXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXHJcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cclxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcclxuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cclxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XHJcblxyXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xyXG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cclxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXHJcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXHJcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxyXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXHJcbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXHJcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cclxuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XHJcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcclxuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxyXG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXHJcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcclxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXHJcbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcclxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXHJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXHJcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xyXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXHJcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cclxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XHJcbiAgfVxyXG5cclxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xyXG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfSk7XHJcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcclxuXHJcbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxyXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxyXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxyXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcclxuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XHJcblxyXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcclxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXHJcbiAgICAgIFByb21pc2VJbXBsXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcclxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cclxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XHJcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcclxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcclxuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAgIHRocm93IGFyZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxyXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xyXG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcclxuXHJcbiAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcclxuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcclxuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcclxuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xyXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcclxuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcclxuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcclxuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XHJcblxyXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcclxuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcclxuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cclxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cclxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXHJcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcclxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xyXG5cclxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxyXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcclxuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcclxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXHJcbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcclxuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcclxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXHJcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXHJcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXHJcbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xyXG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcclxuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcclxuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cclxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XHJcblxyXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXHJcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XHJcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXHJcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXHJcbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XHJcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXHJcbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxyXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xyXG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcclxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcclxuXHJcbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcclxuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xyXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcclxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xyXG5cclxuICAgIGlmICghIGluZm8pIHtcclxuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XHJcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xyXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcclxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGluZm8uZG9uZSkge1xyXG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxyXG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxyXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcclxuXHJcbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cclxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcclxuXHJcbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxyXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXHJcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXHJcbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xyXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxyXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXHJcbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xyXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XHJcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXHJcbiAgICAgIHJldHVybiBpbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXHJcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxyXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XHJcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICB9XHJcblxyXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXHJcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxyXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XHJcblxyXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xyXG5cclxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxyXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXHJcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cclxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cclxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH0pO1xyXG5cclxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcclxuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XHJcblxyXG4gICAgaWYgKDEgaW4gbG9jcykge1xyXG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKDIgaW4gbG9jcykge1xyXG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcclxuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcclxuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xyXG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xyXG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XHJcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xyXG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXHJcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXHJcbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXHJcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xyXG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xyXG4gICAgdGhpcy5yZXNldCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xyXG4gICAgdmFyIGtleXMgPSBbXTtcclxuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcclxuICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICB9XHJcbiAgICBrZXlzLnJldmVyc2UoKTtcclxuXHJcbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxyXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cclxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcclxuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcclxuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xyXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcclxuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcclxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcclxuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXHJcbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XHJcbiAgICAgIHJldHVybiBuZXh0O1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcclxuICAgIGlmIChpdGVyYWJsZSkge1xyXG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XHJcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xyXG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gaXRlcmFibGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xyXG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XHJcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xyXG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXHJcbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XHJcbiAgfVxyXG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xyXG5cclxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xyXG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XHJcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcclxuXHJcbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xyXG4gICAgICB0aGlzLnByZXYgPSAwO1xyXG4gICAgICB0aGlzLm5leHQgPSAwO1xyXG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xyXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxyXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XHJcblxyXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xyXG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xyXG5cclxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XHJcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxyXG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxyXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXHJcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xyXG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcclxuXHJcbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XHJcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XHJcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XHJcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcclxuICAgICAgICB0aHJvdyBleGNlcHRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XHJcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XHJcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcclxuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XHJcblxyXG4gICAgICAgIGlmIChjYXVnaHQpIHtcclxuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXHJcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxyXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcclxuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcclxuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcclxuXHJcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcclxuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXHJcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cclxuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXHJcbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcclxuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xyXG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xyXG5cclxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcclxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxyXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXHJcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcclxuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxyXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxyXG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcclxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXHJcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcclxuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXHJcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxyXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xyXG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XHJcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XHJcblxyXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcclxuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcclxuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcclxuICAgIH0sXHJcblxyXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcclxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxyXG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xyXG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcclxuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xyXG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcclxuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICB9LFxyXG5cclxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xyXG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcclxuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xyXG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XHJcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XHJcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcclxuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xyXG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0aHJvd247XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cclxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XHJcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XHJcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXHJcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcclxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcclxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXHJcbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcclxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcclxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcclxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxyXG4gIHJldHVybiBleHBvcnRzO1xyXG5cclxufShcclxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xyXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XHJcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxyXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXHJcbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cclxuKSk7XHJcblxyXG50cnkge1xyXG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XHJcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XHJcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcclxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcclxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXHJcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxyXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxyXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxyXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXHJcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcclxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcclxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cclxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcclxuICB9IGVsc2Uge1xyXG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIl9ldmVudFNvdXJjZVBvbHlmaWxsIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfZXZlbnRzb3VyY2UiLCJfb25EZW1hbmRFbnRyaWVzVXRpbHMiLCJfZm91YyIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJ2YWx1ZSIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwid2luZG93IiwiRXZlbnRTb3VyY2UiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRleHRDb250ZW50IiwiYXNzZXRQcmVmaXgiLCJwYWdlIiwibW9zdFJlY2VudEhhc2giLCJjdXJIYXNoIiwiX193ZWJwYWNrX2hhc2hfXyIsImhvdFVwZGF0ZVBhdGgiLCJlbmRzV2l0aCIsImlzVXBkYXRlQXZhaWxhYmxlIiwiY2FuQXBwbHlVcGRhdGVzIiwibW9kdWxlIiwiaG90Iiwic3RhdHVzIiwiX3RyeUFwcGx5VXBkYXRlcyIsImZldGNoIiwiX193ZWJwYWNrX3J1bnRpbWVfaWRfXyIsInJlcyIsImpzb24iLCJqc29uRGF0YSIsImN1clBhZ2UiLCJwYWdlVXBkYXRlZCIsIkFycmF5IiwiaXNBcnJheSIsImMiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsIm1vZCIsImluZGV4T2YiLCJzdWJzdHIiLCJyZXBsYWNlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJjb25zb2xlIiwidHJ5QXBwbHlVcGRhdGVzIiwiYWRkTWVzc2FnZUxpc3RlbmVyIiwiZXZlbnQiLCJtZXNzYWdlIiwiYWN0aW9uIiwiaGFzaCIsImV4Iiwid2FybiIsInNldHVwUGluZyIsImRpc3BsYXlDb250ZW50IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIiwiZXZlbnRDYWxsYmFja3MiLCJFdmVudFNvdXJjZVdyYXBwZXIiLCJvcHRpb25zIiwic291cmNlIiwibGFzdEFjdGl2aXR5IiwiRGF0ZSIsImxpc3RlbmVycyIsInRpbWVvdXQiLCJpbml0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImhhbmRsZURpc2Nvbm5lY3QiLCJwYXRoIiwib25vcGVuIiwiaGFuZGxlT25saW5lIiwib25lcnJvciIsIm9ubWVzc2FnZSIsImhhbmRsZU1lc3NhZ2UiLCJsb2ciLCJpIiwibGVuZ3RoIiwiZm9yRWFjaCIsImNiIiwidW5maWx0ZXJlZCIsImNsZWFySW50ZXJ2YWwiLCJjbG9zZSIsInNldFRpbWVvdXQiLCJwdXNoIiwiUmVzcG9uc2UxIiwiUmVzcG9uc2UiLCJUZXh0RGVjb2RlcjEiLCJUZXh0RGVjb2RlciIsIlRleHRFbmNvZGVyMSIsIlRleHRFbmNvZGVyIiwiQWJvcnRDb250cm9sbGVyMSIsIkFib3J0Q29udHJvbGxlciIsInNpZ25hbCIsImFib3J0IiwiVGV4dERlY29kZXJQb2x5ZmlsbCIsImJpdHNOZWVkZWQiLCJjb2RlUG9pbnQiLCJwcm90b3R5cGUiLCJkZWNvZGUiLCJvY3RldHMiLCJ2YWxpZCIsInNoaWZ0Iiwib2N0ZXRzQ291bnQiLCJFcnJvciIsIlJFUExBQ0VSIiwic3RyaW5nIiwib2N0ZXQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJzdXBwb3J0c1N0cmVhbU9wdGlvbiIsImVuY29kZSIsInN0cmVhbSIsImsiLCJYSFJXcmFwcGVyIiwieGhyIiwid2l0aENyZWRlbnRpYWxzIiwicmVzcG9uc2VUeXBlIiwicmVhZHlTdGF0ZSIsInN0YXR1c1RleHQiLCJyZXNwb25zZVRleHQiLCJvbnByb2dyZXNzIiwib25yZWFkeXN0YXRlY2hhbmdlIiwiX2NvbnRlbnRUeXBlIiwiX3hociIsIl9zZW5kVGltZW91dCIsIl9hYm9ydCIsIm9wZW4iLCJtZXRob2QiLCJ1cmwiLCJ0aGF0Iiwic3RhdGUiLCJzaWxlbnQiLCJjbGVhclRpbWVvdXQiLCJvbmxvYWQiLCJvbmFib3J0Iiwib25TdGFydCIsImNvbnRlbnRUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJvblByb2dyZXNzIiwib25GaW5pc2giLCJvblJlYWR5U3RhdGVDaGFuZ2UiLCJvblRpbWVvdXQiLCJYTUxIdHRwUmVxdWVzdCIsIm5hbWUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2VuZCIsImVycm9yMSIsInRvTG93ZXJDYXNlIiwiY2hhckNvZGVBdCIsIkhlYWRlcnNQb2x5ZmlsbCIsImFsbCIsIm1hcCIsImNyZWF0ZSIsImFycmF5Iiwic3BsaXQiLCJsaW5lIiwicGFydHMiLCJqb2luIiwiX21hcCIsImdldCIsIlhIUlRyYW5zcG9ydCIsIm9uU3RhcnRDYWxsYmFjayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsIm9uRmluaXNoQ2FsbGJhY2siLCJoZWFkZXJzIiwib2Zmc2V0IiwiY2h1bmsiLCJzbGljZSIsImhlYWRlcnMxIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiSGVhZGVyc1dyYXBwZXIiLCJoZWFkZXJzMiIsIl9oZWFkZXJzIiwiRmV0Y2hUcmFuc3BvcnQiLCJjb250cm9sbGVyIiwidGV4dERlY29kZXIiLCJjcmVkZW50aWFscyIsImNhY2hlIiwicmVzcG9uc2UiLCJyZWFkZXIiLCJib2R5IiwiZ2V0UmVhZGVyIiwiY2FuY2VsIiwicmVhZE5leHRDaHVuayIsInJlYWQiLCJyZXN1bHQiLCJFdmVudFRhcmdldDEiLCJfbGlzdGVuZXJzIiwidGhyb3dFcnJvciIsImUiLCJkaXNwYXRjaEV2ZW50IiwidGFyZ2V0IiwidHlwZUxpc3RlbmVycyIsInR5cGUiLCJsaXN0ZW5lciIsImhhbmRsZUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvdW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbHRlcmVkIiwiRXZlbnQxIiwiTWVzc2FnZUV2ZW50MSIsImxhc3RFdmVudElkIiwiQ29ubmVjdGlvbkV2ZW50IiwiV0FJVElORyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0VEIiwiQUZURVJfQ1IiLCJGSUVMRF9TVEFSVCIsIkZJRUxEIiwiVkFMVUVfU1RBUlQiLCJWQUxVRSIsImNvbnRlbnRUeXBlUmVnRXhwIiwiTUlOSU1VTV9EVVJBVElPTiIsIk1BWElNVU1fRFVSQVRJT04iLCJwYXJzZUR1cmF0aW9uIiwiZGVmIiwibiIsInBhcnNlSW50IiwiY2xhbXBEdXJhdGlvbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJmaXJlIiwiZiIsIkV2ZW50U291cmNlUG9seWZpbGwiLCJfY2xvc2UiLCJzdGFydCIsImlzRmV0Y2hTdXBwb3J0ZWQiLCJlcyIsIkJvb2xlYW4iLCJpbml0aWFsUmV0cnkiLCJoZWFydGJlYXRUaW1lb3V0IiwicmV0cnkiLCJ3YXNBY3Rpdml0eSIsInN0cmluZ2lmeSIsIkN1cnJlbnRUcmFuc3BvcnQiLCJUcmFuc3BvcnQiLCJ0cmFuc3BvcnQiLCJjYW5jZWxGdW5jdGlvbiIsImN1cnJlbnRTdGF0ZSIsImRhdGFCdWZmZXIiLCJsYXN0RXZlbnRJZEJ1ZmZlciIsImV2ZW50VHlwZUJ1ZmZlciIsInRleHRCdWZmZXIiLCJmaWVsZFN0YXJ0IiwidmFsdWVTdGFydCIsImhlYWRlcnMzIiwidGVzdCIsInRleHRDaHVuayIsInBvc2l0aW9uIiwiZmllbGQiLCJyZXF1ZXN0VVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdEhlYWRlcnMiLCJfZGVmYXVsdCIsImNhbGxiYWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwieCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjbG9zZVBpbmciLCJjdXJyZW50UGFnZSIsImV2dFNvdXJjZSIsInBhdGhuYW1lRm4iLCJwYXRobmFtZSIsInBheWxvYWQiLCJpbnZhbGlkIiwiX19ORVhUX0RBVEFfXyIsImhyZWYiLCJwYWdlUmVzIl0sInNvdXJjZVJvb3QiOiIifQ==