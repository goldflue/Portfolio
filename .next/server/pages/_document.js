(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./libs/theme.js":
/*!***********************!*\
  !*** ./libs/theme.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "@chakra-ui/theme-tools");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);


const styles = {
  global: props => ({
    body: {
      bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('f#0e7db', '#202023')(props)
    }
  })
};
const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStle: props => ({
      color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#cd7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
};
const fonts = {
  heading: "'M PLUS Rounder 1c'"
};
const colors = {
  glassTeal: '#88ccca'
};
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
  config,
  styles,
  components,
  colors,
  fonts
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/script.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/script.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../shared/lib/head-manager-context */ "../shared/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    strategy = 'afterInteractive',
    onError
  } = props;
  const cacheKey = id || src; // Script has already loaded

  if (cacheKey && LoadCache.has(cacheKey)) {
    return;
  } // Contents of this script are already loading/loaded


  if (ScriptCache.has(src)) {
    LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

    ScriptCache.get(src).then(onLoad, onError);
    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function (e) {
      resolve();

      if (onLoad) {
        onLoad.call(this, e);
      }
    });
    el.addEventListener('error', function (e) {
      reject(e);
    });
  }).catch(function (e) {
    if (onError) {
      onError(e);
    }
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
  }

  LoadCache.add(cacheKey);

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  el.setAttribute('data-nscript', strategy);
  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    dangerouslySetInnerHTML,
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = _objectWithoutProperties(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR


  const {
    updateScripts,
    scripts,
    getIsSsr
  } = (0, _react).useContext(_headManagerContext.HeadManagerContext);
  (0, _react).useEffect(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([_objectSpread({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    } else if (getIsSsr && getIsSsr()) {
      // Script has already loaded during SSR
      LoadCache.add(restProps.id || src);
    } else if (getIsSsr && !getIsSsr()) {
      loadScript(props);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const _excluded = ["strategy"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DocumentContext", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentContext;
  }
}));
Object.defineProperty(exports, "DocumentInitialProps", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentInitialProps;
  }
}));
Object.defineProperty(exports, "DocumentProps", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentProps;
  }
}));
exports.Html = Html;
exports.Main = Main;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../shared/lib/constants */ "../shared/lib/constants");

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

var _getPageFiles = __webpack_require__(/*! ../server/get-page-files */ "../server/get-page-files");

var _utils1 = __webpack_require__(/*! ../server/utils */ "../server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "../server/htmlescape");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "./node_modules/next/dist/client/script.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map((file, index) => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, _excluded);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      key: scriptProps.src || index,
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      "data-nscript": "beforeInteractive",
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var ref;
  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) === null || ref === void 0 ? void 0 : ref.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

class Document1 extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, Object.assign({}, props));
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server).default()];
    return {
      html,
      head,
      styles
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document1;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react).useContext(_utils.HtmlContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _script.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var ref;
        const isReactHelmet = child === null || child === void 0 ? void 0 : (ref = child.props) === null || ref === void 0 ? void 0 : ref['data-react-helmet'];

        if (!isReactHelmet) {
          var ref1;

          if ((child === null || child === void 0 ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child === null || child === void 0 ? void 0 : child.type) === 'meta' && (child === null || child === void 0 ? void 0 : (ref1 = child.props) === null || ref1 === void 0 ? void 0 : ref1.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    children = this.handleDocumentScriptLoaderItems(children);
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var ref2, ref3;
        return el === null || el === void 0 ? void 0 : (ref2 = el.props) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.dangerouslySetInnerHTML) === null || ref3 === void 0 ? void 0 : ref3.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);

    var _nonce, _nonce1;

    return /*#__PURE__*/_react.default.createElement("head", Object.assign({}, this.props), this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children,  false && /*#__PURE__*/0, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils1).cleanAmpPath(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_nonce = this.props.nonce) !== null && _nonce !== void 0 ? _nonce : ''
    }),  false && /*#__PURE__*/0, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && 0,  false && /*#__PURE__*/0, this.context.isDevelopment && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)

    /*#__PURE__*/
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _utils.HtmlContext;

function Main() {
  const {
    inAmpMode,
    docComponentsRendered
  } = (0, _react).useContext(_utils.HtmlContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.BODY_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next"
  }, _constants.BODY_RENDER_TARGET);
}

class NextScript extends _react.Component {
  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(context) {
    const {
      __NEXT_DATA__
    } = context;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape).htmlEscapeJsonString(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _utils.HtmlContext;
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/theme */ "./libs/theme.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\goldf\\source\\repos\\Portfolio\\pages\\_document.js";




class Document extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      lang: "en",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("body", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ColorModeScript, {
          initialColorMode: _libs_theme__WEBPACK_IMPORTED_MODULE_2__.default.config.initialColorMode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ "../server/get-page-files":
/*!*****************************************************!*\
  !*** external "next/dist/server/get-page-files.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ "../server/htmlescape":
/*!*************************************************!*\
  !*** external "next/dist/server/htmlescape.js" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ "../server/utils":
/*!********************************************!*\
  !*** external "next/dist/server/utils.js" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ "../shared/lib/constants":
/*!****************************************************!*\
  !*** external "next/dist/shared/lib/constants.js" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ "../shared/lib/head-manager-context":
/*!***************************************************************!*\
  !*** external "next/dist/shared/lib/head-manager-context.js" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/server");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_document.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQVVIOztBQVo4Qzs7Ozs7Ozs7OztBQ0puRCxpSEFBa0Q7Ozs7Ozs7Ozs7OztBQ0FsRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RhbmllbHRoZWlsdmFsbmVydF9wb3J0Zm9saW8vLi9saWJzL3RoZW1lLmpzIiwid2VicGFjazovL2RhbmllbHRoZWlsdmFsbmVydF9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9oZWFkLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vZGFuaWVsdGhlaWx2YWxuZXJ0X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9kYW5pZWx0aGVpbHZhbG5lcnRfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvc2NyaXB0LmpzIiwid2VicGFjazovL2RhbmllbHRoZWlsdmFsbmVydF9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9kYW5pZWx0aGVpbHZhbG5lcnRfcG9ydGZvbGlvLy4vcGFnZXMvX2RvY3VtZW50LmpzIiwid2VicGFjazovL2RhbmllbHRoZWlsdmFsbmVydF9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9kYW5pZWx0aGVpbHZhbG5lcnRfcG9ydGZvbGlvL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovL2RhbmllbHRoZWlsdmFsbmVydF9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3RoZW1lLXRvb2xzXCIiLCJ3ZWJwYWNrOi8vZGFuaWVsdGhlaWx2YWxuZXJ0X3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIiIsIndlYnBhY2s6Ly9kYW5pZWx0aGVpbHZhbG5lcnRfcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzXCIiLCJ3ZWJwYWNrOi8vZGFuaWVsdGhlaWx2YWxuZXJ0X3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9kYW5pZWx0aGVpbHZhbG5lcnRfcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvY29uc3RhbnRzLmpzXCIiLCJ3ZWJwYWNrOi8vZGFuaWVsdGhlaWx2YWxuZXJ0X3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZGFuaWVsdGhlaWx2YWxuZXJ0X3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vZGFuaWVsdGhlaWx2YWxuZXJ0X3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZGFuaWVsdGhlaWx2YWxuZXJ0X3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2RhbmllbHRoZWlsdmFsbmVydF9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3NlcnZlclwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgbW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnXHJcblxyXG5cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGdsb2JhbDogcHJvcHMgPT4gKHtcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgIGJnOiBtb2RlKCdmIzBlN2RiJywgJyMyMDIwMjMnKShwcm9wcylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgSGVhZGluZzoge1xyXG4gICAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgICAgICdzZWN0aW9uLXRpdGxlJyA6IHtcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDYsXHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiAnIzUyNTI1MicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvblRoaWNrbmVzczogNCxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIExpbms6IHtcclxuICAgICAgICBiYXNlU3RsZTogcHJvcHMgPT4gKHtcclxuICAgICAgICAgICAgY29sb3I6IG1vZGUoJyNjZDdhZWQnLCAnI2ZmNjNjMycpKHByb3BzKSxcclxuICAgICAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldDogM1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGZvbnRzID0ge1xyXG4gICAgaGVhZGluZzogXCInTSBQTFVTIFJvdW5kZXIgMWMnXCJcclxuXHJcbn1cclxuXHJcbmNvbnN0IGNvbG9ycyA9IHtcclxuICAgIGdsYXNzVGVhbDogJyM4OGNjY2EnXHJcbn1cclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGluaXRpYWxDb2xvck1vZGU6ICdkYXJrJyxcclxuICAgIHVzZVN5c3RlbUNvbG9yTW9kZTogdHJ1ZVxyXG59XHJcblxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcclxuICAgIGNvbmZpZywgc3R5bGVzLCBjb21wb25lbnRzLCBjb2xvcnMsIGZvbnRzXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZSIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBpbml0SGVhZE1hbmFnZXI7XHJcbmV4cG9ydHMuRE9NQXR0cmlidXRlTmFtZXMgPSB2b2lkIDA7XHJcbmNvbnN0IERPTUF0dHJpYnV0ZU5hbWVzID0ge1xyXG4gICAgYWNjZXB0Q2hhcnNldDogJ2FjY2VwdC1jaGFyc2V0JyxcclxuICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcclxuICAgIGh0bWxGb3I6ICdmb3InLFxyXG4gICAgaHR0cEVxdWl2OiAnaHR0cC1lcXVpdicsXHJcbiAgICBub01vZHVsZTogJ25vTW9kdWxlJ1xyXG59O1xyXG5leHBvcnRzLkRPTUF0dHJpYnV0ZU5hbWVzID0gRE9NQXR0cmlidXRlTmFtZXM7XHJcbmZ1bmN0aW9uIHJlYWN0RWxlbWVudFRvRE9NKHsgdHlwZSAsIHByb3BzICB9KSB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICBmb3IoY29uc3QgcCBpbiBwcm9wcyl7XHJcbiAgICAgICAgaWYgKCFwcm9wcy5oYXNPd25Qcm9wZXJ0eShwKSkgY29udGludWU7XHJcbiAgICAgICAgaWYgKHAgPT09ICdjaGlsZHJlbicgfHwgcCA9PT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykgY29udGludWU7XHJcbiAgICAgICAgLy8gd2UgZG9uJ3QgcmVuZGVyIHVuZGVmaW5lZCBwcm9wcyB0byB0aGUgRE9NXHJcbiAgICAgICAgaWYgKHByb3BzW3BdID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgIGNvbnN0IGF0dHIgPSBET01BdHRyaWJ1dGVOYW1lc1twXSB8fCBwLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzY3JpcHQnICYmIChhdHRyID09PSAnYXN5bmMnIHx8IGF0dHIgPT09ICdkZWZlcicgfHwgYXR0ciA9PT0gJ25vTW9kdWxlJykpIHtcclxuICAgICAgICAgICAgZWxbYXR0cl0gPSAhIXByb3BzW3BdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCBwcm9wc1twXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgeyBjaGlsZHJlbiAsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICB9ID0gcHJvcHM7XHJcbiAgICBpZiAoZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpIHtcclxuICAgICAgICBlbC5pbm5lckhUTUwgPSBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwgfHwgJyc7XHJcbiAgICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XHJcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gY2hpbGRyZW4gOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuLmpvaW4oJycpIDogJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlRWxlbWVudHModHlwZSwgY29tcG9uZW50cykge1xyXG4gICAgY29uc3QgaGVhZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcclxuICAgIGNvbnN0IGhlYWRDb3VudEVsID0gaGVhZEVsLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1uZXh0LWhlYWQtY291bnRdJyk7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIGlmICghaGVhZENvdW50RWwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignV2FybmluZzogbmV4dC1oZWFkLWNvdW50IGlzIG1pc3NpbmcuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaGVhZC1jb3VudC1taXNzaW5nJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoZWFkQ291bnQgPSBOdW1iZXIoaGVhZENvdW50RWwuY29udGVudCk7XHJcbiAgICBjb25zdCBvbGRUYWdzID0gW107XHJcbiAgICBmb3IobGV0IGkgPSAwLCBqID0gaGVhZENvdW50RWwucHJldmlvdXNFbGVtZW50U2libGluZzsgaSA8IGhlYWRDb3VudDsgaSsrLCBqID0gai5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKXtcclxuICAgICAgICBpZiAoai50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHR5cGUpIHtcclxuICAgICAgICAgICAgb2xkVGFncy5wdXNoKGopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1RhZ3MgPSBjb21wb25lbnRzLm1hcChyZWFjdEVsZW1lbnRUb0RPTSkuZmlsdGVyKChuZXdUYWcpPT57XHJcbiAgICAgICAgZm9yKGxldCBrID0gMCwgbGVuID0gb2xkVGFncy5sZW5ndGg7IGsgPCBsZW47IGsrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sZFRhZyA9IG9sZFRhZ3Nba107XHJcbiAgICAgICAgICAgIGlmIChvbGRUYWcuaXNFcXVhbE5vZGUobmV3VGFnKSkge1xyXG4gICAgICAgICAgICAgICAgb2xkVGFncy5zcGxpY2UoaywgMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICAgIG9sZFRhZ3MuZm9yRWFjaCgodCk9PnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KVxyXG4gICAgKTtcclxuICAgIG5ld1RhZ3MuZm9yRWFjaCgodCk9PmhlYWRFbC5pbnNlcnRCZWZvcmUodCwgaGVhZENvdW50RWwpXHJcbiAgICApO1xyXG4gICAgaGVhZENvdW50RWwuY29udGVudCA9IChoZWFkQ291bnQgLSBvbGRUYWdzLmxlbmd0aCArIG5ld1RhZ3MubGVuZ3RoKS50b1N0cmluZygpO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRIZWFkTWFuYWdlcigpIHtcclxuICAgIGxldCB1cGRhdGVQcm9taXNlID0gbnVsbDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbW91bnRlZEluc3RhbmNlczogbmV3IFNldCgpLFxyXG4gICAgICAgIHVwZGF0ZUhlYWQ6IChoZWFkKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdXBkYXRlUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlICE9PSB1cGRhdGVQcm9taXNlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVQcm9taXNlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaGVhZC5mb3JFYWNoKChoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgvLyBJZiB0aGUgZm9udCB0YWcgaXMgbG9hZGVkIG9ubHkgb24gY2xpZW50IG5hdmlnYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAvLyBpdCB3b24ndCBiZSBpbmxpbmVkLiBJbiB0aGlzIGNhc2UgcmV2ZXJ0IHRvIHRoZSBvcmlnaW5hbCBiZWhhdmlvclxyXG4gICAgICAgICAgICAgICAgICAgIGgudHlwZSA9PT0gJ2xpbmsnICYmIGgucHJvcHNbJ2RhdGEtb3B0aW1pemVkLWZvbnRzJ10gJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHN0eWxlW2RhdGEtaHJlZj1cIiR7aC5wcm9wc1snZGF0YS1ocmVmJ119XCJdYCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaC5wcm9wcy5ocmVmID0gaC5wcm9wc1snZGF0YS1ocmVmJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgucHJvcHNbJ2RhdGEtaHJlZiddID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzID0gdGFnc1toLnR5cGVdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaChoKTtcclxuICAgICAgICAgICAgICAgICAgICB0YWdzW2gudHlwZV0gPSBjb21wb25lbnRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUNvbXBvbmVudCA9IHRhZ3MudGl0bGUgPyB0YWdzLnRpdGxlWzBdIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiAgfSA9IHRpdGxlQ29tcG9uZW50LnByb3BzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyA/IGNoaWxkcmVuIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbi5qb2luKCcnKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlICE9PSBkb2N1bWVudC50aXRsZSkgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAnbWV0YScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Jhc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICAnc3R5bGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzY3JpcHQnXHJcbiAgICAgICAgICAgICAgICBdLmZvckVhY2goKHR5cGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRWxlbWVudHModHlwZSwgdGFnc1t0eXBlXSB8fCBbXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVhZC1tYW5hZ2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcclxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xyXG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcclxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNiKHtcclxuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCAxKTtcclxufTtcclxuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcclxuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xyXG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XHJcbn07XHJcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLmluaXRTY3JpcHRMb2FkZXIgPSBpbml0U2NyaXB0TG9hZGVyO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XHJcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbnZhciBfaGVhZE1hbmFnZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHRcIik7XHJcbnZhciBfaGVhZE1hbmFnZXIgPSByZXF1aXJlKFwiLi9oZWFkLW1hbmFnZXJcIik7XHJcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcclxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xyXG4gICAgaWYgKGtleSBpbiBvYmopIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XHJcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xyXG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xyXG4gICAgfTtcclxuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcclxuICAgIHZhciBrZXksIGk7XHJcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xyXG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xyXG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xyXG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xyXG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xyXG4gICAgfTtcclxuICAgIHZhciB0YXJnZXQgPSB7XHJcbiAgICB9O1xyXG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xyXG4gICAgdmFyIGtleSwgaTtcclxuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XHJcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcclxuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5jb25zdCBTY3JpcHRDYWNoZSA9IG5ldyBNYXAoKTtcclxuY29uc3QgTG9hZENhY2hlID0gbmV3IFNldCgpO1xyXG5jb25zdCBpZ25vcmVQcm9wcyA9IFtcclxuICAgICdvbkxvYWQnLFxyXG4gICAgJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJyxcclxuICAgICdjaGlsZHJlbicsXHJcbiAgICAnb25FcnJvcicsXHJcbiAgICAnc3RyYXRlZ3knLCBcclxuXTtcclxuY29uc3QgbG9hZFNjcmlwdCA9IChwcm9wcyk9PntcclxuICAgIGNvbnN0IHsgc3JjICwgaWQgLCBvbkxvYWQgPSgpPT57XHJcbiAgICB9ICwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgLCBjaGlsZHJlbiA9JycgLCBzdHJhdGVneSA9J2FmdGVySW50ZXJhY3RpdmUnICwgb25FcnJvciAsICB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBjYWNoZUtleSA9IGlkIHx8IHNyYztcclxuICAgIC8vIFNjcmlwdCBoYXMgYWxyZWFkeSBsb2FkZWRcclxuICAgIGlmIChjYWNoZUtleSAmJiBMb2FkQ2FjaGUuaGFzKGNhY2hlS2V5KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIENvbnRlbnRzIG9mIHRoaXMgc2NyaXB0IGFyZSBhbHJlYWR5IGxvYWRpbmcvbG9hZGVkXHJcbiAgICBpZiAoU2NyaXB0Q2FjaGUuaGFzKHNyYykpIHtcclxuICAgICAgICBMb2FkQ2FjaGUuYWRkKGNhY2hlS2V5KTtcclxuICAgICAgICAvLyBFeGVjdXRlIG9uTG9hZCBzaW5jZSB0aGUgc2NyaXB0IGxvYWRpbmcgaGFzIGJlZ3VuXHJcbiAgICAgICAgU2NyaXB0Q2FjaGUuZ2V0KHNyYykudGhlbihvbkxvYWQsIG9uRXJyb3IpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICBjb25zdCBsb2FkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICBpZiAob25Mb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBvbkxvYWQuY2FsbCh0aGlzLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKG9uRXJyb3IpIHtcclxuICAgICAgICAgICAgb25FcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChzcmMpIHtcclxuICAgICAgICBTY3JpcHRDYWNoZS5zZXQoc3JjLCBsb2FkUHJvbWlzZSk7XHJcbiAgICB9XHJcbiAgICBMb2FkQ2FjaGUuYWRkKGNhY2hlS2V5KTtcclxuICAgIGlmIChkYW5nZXJvdXNseVNldElubmVySFRNTCkge1xyXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCB8fCAnJztcclxuICAgIH0gZWxzZSBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycgPyBjaGlsZHJlbiA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4uam9pbignJykgOiAnJztcclxuICAgIH0gZWxzZSBpZiAoc3JjKSB7XHJcbiAgICAgICAgZWwuc3JjID0gc3JjO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBbaywgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSl7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgaWdub3JlUHJvcHMuaW5jbHVkZXMoaykpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGF0dHIgPSBfaGVhZE1hbmFnZXIuRE9NQXR0cmlidXRlTmFtZXNba10gfHwgay50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnNjcmlwdCcsIHN0cmF0ZWd5KTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xyXG59O1xyXG5mdW5jdGlvbiBoYW5kbGVDbGllbnRTY3JpcHRMb2FkKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IHN0cmF0ZWd5ID0nYWZ0ZXJJbnRlcmFjdGl2ZScgIH0gPSBwcm9wcztcclxuICAgIGlmIChzdHJhdGVneSA9PT0gJ2FmdGVySW50ZXJhY3RpdmUnKSB7XHJcbiAgICAgICAgbG9hZFNjcmlwdChwcm9wcyk7XHJcbiAgICB9IGVsc2UgaWYgKHN0cmF0ZWd5ID09PSAnbGF6eU9ubG9hZCcpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XHJcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+bG9hZFNjcmlwdChwcm9wcylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBsb2FkTGF6eVNjcmlwdChwcm9wcykge1xyXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PmxvYWRTY3JpcHQocHJvcHMpXHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xyXG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PmxvYWRTY3JpcHQocHJvcHMpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaW5pdFNjcmlwdExvYWRlcihzY3JpcHRMb2FkZXJJdGVtcykge1xyXG4gICAgc2NyaXB0TG9hZGVySXRlbXMuZm9yRWFjaChoYW5kbGVDbGllbnRTY3JpcHRMb2FkKTtcclxufVxyXG5mdW5jdGlvbiBTY3JpcHQocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgc3JjID0nJyAsIG9uTG9hZCA9KCk9PntcclxuICAgIH0gLCBkYW5nZXJvdXNseVNldElubmVySFRNTCAsIHN0cmF0ZWd5ID0nYWZ0ZXJJbnRlcmFjdGl2ZScgLCBvbkVycm9yICB9ID0gcHJvcHMsIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wic3JjXCIsIFwib25Mb2FkXCIsIFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiwgXCJzdHJhdGVneVwiLCBcIm9uRXJyb3JcIl0pO1xyXG4gICAgLy8gQ29udGV4dCBpcyBhdmFpbGFibGUgb25seSBkdXJpbmcgU1NSXHJcbiAgICBjb25zdCB7IHVwZGF0ZVNjcmlwdHMgLCBzY3JpcHRzICwgZ2V0SXNTc3IgIH0gPSAoMCwgX3JlYWN0KS51c2VDb250ZXh0KF9oZWFkTWFuYWdlckNvbnRleHQuSGVhZE1hbmFnZXJDb250ZXh0KTtcclxuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmIChzdHJhdGVneSA9PT0gJ2FmdGVySW50ZXJhY3RpdmUnKSB7XHJcbiAgICAgICAgICAgIGxvYWRTY3JpcHQocHJvcHMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RyYXRlZ3kgPT09ICdsYXp5T25sb2FkJykge1xyXG4gICAgICAgICAgICBsb2FkTGF6eVNjcmlwdChwcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW1xyXG4gICAgICAgIHByb3BzLFxyXG4gICAgICAgIHN0cmF0ZWd5XHJcbiAgICBdKTtcclxuICAgIGlmIChzdHJhdGVneSA9PT0gJ2JlZm9yZUludGVyYWN0aXZlJykge1xyXG4gICAgICAgIGlmICh1cGRhdGVTY3JpcHRzKSB7XHJcbiAgICAgICAgICAgIHNjcmlwdHMuYmVmb3JlSW50ZXJhY3RpdmUgPSAoc2NyaXB0cy5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXSkuY29uY2F0KFtcclxuICAgICAgICAgICAgICAgIF9vYmplY3RTcHJlYWQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYyxcclxuICAgICAgICAgICAgICAgICAgICBvbkxvYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvclxyXG4gICAgICAgICAgICAgICAgfSwgcmVzdFByb3BzKSwgXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB1cGRhdGVTY3JpcHRzKHNjcmlwdHMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ2V0SXNTc3IgJiYgZ2V0SXNTc3IoKSkge1xyXG4gICAgICAgICAgICAvLyBTY3JpcHQgaGFzIGFscmVhZHkgbG9hZGVkIGR1cmluZyBTU1JcclxuICAgICAgICAgICAgTG9hZENhY2hlLmFkZChyZXN0UHJvcHMuaWQgfHwgc3JjKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGdldElzU3NyICYmICFnZXRJc1NzcigpKSB7XHJcbiAgICAgICAgICAgIGxvYWRTY3JpcHQocHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbnZhciBfZGVmYXVsdCA9IFNjcmlwdDtcclxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3JpcHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkRvY3VtZW50Q29udGV4dFwiLCB7XHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gX3V0aWxzLkRvY3VtZW50Q29udGV4dDtcclxuICAgIH1cclxufSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkRvY3VtZW50SW5pdGlhbFByb3BzXCIsIHtcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBfdXRpbHMuRG9jdW1lbnRJbml0aWFsUHJvcHM7XHJcbiAgICB9XHJcbn0pO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJEb2N1bWVudFByb3BzXCIsIHtcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBfdXRpbHMuRG9jdW1lbnRQcm9wcztcclxuICAgIH1cclxufSk7XHJcbmV4cG9ydHMuSHRtbCA9IEh0bWw7XHJcbmV4cG9ydHMuTWFpbiA9IE1haW47XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBfc2VydmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIikpO1xyXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2NvbnN0YW50c1wiKTtcclxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3V0aWxzXCIpO1xyXG52YXIgX2dldFBhZ2VGaWxlcyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXNcIik7XHJcbnZhciBfdXRpbHMxID0gcmVxdWlyZShcIi4uL3NlcnZlci91dGlsc1wiKTtcclxudmFyIF9odG1sZXNjYXBlID0gcmVxdWlyZShcIi4uL3NlcnZlci9odG1sZXNjYXBlXCIpO1xyXG52YXIgX3NjcmlwdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NsaWVudC9zY3JpcHRcIikpO1xyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgICAgICBkZWZhdWx0OiBvYmpcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XHJcbiAgICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG5ld09iaiA9IHtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChvYmogIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiBvYmope1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdPYmouZGVmYXVsdCA9IG9iajtcclxuICAgICAgICByZXR1cm4gbmV3T2JqO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldERvY3VtZW50RmlsZXMoYnVpbGRNYW5pZmVzdCwgcGF0aG5hbWUsIGluQW1wTW9kZSkge1xyXG4gICAgY29uc3Qgc2hhcmVkRmlsZXMgPSAoMCwgX2dldFBhZ2VGaWxlcykuZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsICcvX2FwcCcpO1xyXG4gICAgY29uc3QgcGFnZUZpbGVzID0gaW5BbXBNb2RlID8gW10gOiAoMCwgX2dldFBhZ2VGaWxlcykuZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsIHBhdGhuYW1lKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hhcmVkRmlsZXMsXHJcbiAgICAgICAgcGFnZUZpbGVzLFxyXG4gICAgICAgIGFsbEZpbGVzOiBbXHJcbiAgICAgICAgICAgIC4uLm5ldyBTZXQoW1xyXG4gICAgICAgICAgICAgICAgLi4uc2hhcmVkRmlsZXMsXHJcbiAgICAgICAgICAgICAgICAuLi5wYWdlRmlsZXNcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICBdXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGdldFBvbHlmaWxsU2NyaXB0cyhjb250ZXh0LCBwcm9wcykge1xyXG4gICAgLy8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXHJcbiAgICAvLyBJdCBhbHNvIGhhcyB0byBiZSB0aGUgZmlyc3Qgc2NyaXB0IHRvIGxvYWRcclxuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXggLCBidWlsZE1hbmlmZXN0ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAsICB9ID0gY29udGV4dDtcclxuICAgIHJldHVybiBidWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXMuZmlsdGVyKChwb2x5ZmlsbCk9PnBvbHlmaWxsLmVuZHNXaXRoKCcuanMnKSAmJiAhcG9seWZpbGwuZW5kc1dpdGgoJy5tb2R1bGUuanMnKVxyXG4gICAgKS5tYXAoKHBvbHlmaWxsKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcclxuICAgICAgICAgICAga2V5OiBwb2x5ZmlsbCxcclxuICAgICAgICAgICAgZGVmZXI6ICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcclxuICAgICAgICAgICAgbm9uY2U6IHByb3BzLm5vbmNlLFxyXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixcclxuICAgICAgICAgICAgbm9Nb2R1bGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNyYzogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gXHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0UHJlTmV4dFNjcmlwdHMoY29udGV4dCwgcHJvcHMpIHtcclxuICAgIGNvbnN0IHsgc2NyaXB0TG9hZGVyICwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgIH0gPSBjb250ZXh0O1xyXG4gICAgcmV0dXJuIChzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLm1hcCgoZmlsZSwgaW5kZXgpPT57XHJcbiAgICAgICAgY29uc3QgeyBzdHJhdGVneSAsIC4uLnNjcmlwdFByb3BzIH0gPSBmaWxlO1xyXG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwgT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgfSwgc2NyaXB0UHJvcHMsIHtcclxuICAgICAgICAgICAga2V5OiBzY3JpcHRQcm9wcy5zcmMgfHwgaW5kZXgsXHJcbiAgICAgICAgICAgIGRlZmVyOiAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXHJcbiAgICAgICAgICAgIG5vbmNlOiBwcm9wcy5ub25jZSxcclxuICAgICAgICAgICAgXCJkYXRhLW5zY3JpcHRcIjogXCJiZWZvcmVJbnRlcmFjdGl2ZVwiLFxyXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxyXG4gICAgICAgIH0pKSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXREeW5hbWljQ2h1bmtzKGNvbnRleHQsIHByb3BzLCBmaWxlcykge1xyXG4gICAgY29uc3QgeyBkeW5hbWljSW1wb3J0cyAsIGFzc2V0UHJlZml4ICwgaXNEZXZlbG9wbWVudCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgLCAgfSA9IGNvbnRleHQ7XHJcbiAgICByZXR1cm4gZHluYW1pY0ltcG9ydHMubWFwKChmaWxlKT0+e1xyXG4gICAgICAgIGlmICghZmlsZS5lbmRzV2l0aCgnLmpzJykgfHwgZmlsZXMuYWxsRmlsZXMuaW5jbHVkZXMoZmlsZSkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xyXG4gICAgICAgICAgICBhc3luYzogIWlzRGV2ZWxvcG1lbnQgJiYgZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXHJcbiAgICAgICAgICAgIGRlZmVyOiAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXHJcbiAgICAgICAgICAgIGtleTogZmlsZSxcclxuICAgICAgICAgICAgc3JjOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxyXG4gICAgICAgICAgICBub25jZTogcHJvcHMubm9uY2UsXHJcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luOiBwcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0U2NyaXB0cyhjb250ZXh0LCBwcm9wcywgZmlsZXMpIHtcclxuICAgIHZhciByZWY7XHJcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4ICwgYnVpbGRNYW5pZmVzdCAsIGlzRGV2ZWxvcG1lbnQgLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICwgIH0gPSBjb250ZXh0O1xyXG4gICAgY29uc3Qgbm9ybWFsU2NyaXB0cyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZSk9PmZpbGUuZW5kc1dpdGgoJy5qcycpXHJcbiAgICApO1xyXG4gICAgY29uc3QgbG93UHJpb3JpdHlTY3JpcHRzID0gKHJlZiA9IGJ1aWxkTWFuaWZlc3QubG93UHJpb3JpdHlGaWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuZmlsdGVyKChmaWxlKT0+ZmlsZS5lbmRzV2l0aCgnLmpzJylcclxuICAgICk7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIC4uLm5vcm1hbFNjcmlwdHMsXHJcbiAgICAgICAgLi4ubG93UHJpb3JpdHlTY3JpcHRzXHJcbiAgICBdLm1hcCgoZmlsZSk9PntcclxuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcclxuICAgICAgICAgICAga2V5OiBmaWxlLFxyXG4gICAgICAgICAgICBzcmM6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXHJcbiAgICAgICAgICAgIG5vbmNlOiBwcm9wcy5ub25jZSxcclxuICAgICAgICAgICAgYXN5bmM6ICFpc0RldmVsb3BtZW50ICYmIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxyXG4gICAgICAgICAgICBkZWZlcjogIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxyXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxyXG4gICAgICAgIH0pKTtcclxuICAgIH0pO1xyXG59XHJcbmNsYXNzIERvY3VtZW50MSBleHRlbmRzIF9yZWFjdC5Db21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXHJcbiAgICogYHJlbmRlclBhZ2VgIGNhbGxiYWNrIGV4ZWN1dGVzIGBSZWFjdGAgcmVuZGVyaW5nIGxvZ2ljIHN5bmNocm9ub3VzbHkgdG8gc3VwcG9ydCBzZXJ2ZXItcmVuZGVyaW5nIHdyYXBwZXJzXHJcbiAgICovIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XHJcbiAgICAgICAgY29uc3QgZW5oYW5jZUFwcCA9IChBcHApPT57XHJcbiAgICAgICAgICAgIHJldHVybiAocHJvcHMpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQXBwLCBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgICAgIH0sIHByb3BzKSlcclxuICAgICAgICAgICAgO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgeyBodG1sICwgaGVhZCAgfSA9IGF3YWl0IGN0eC5yZW5kZXJQYWdlKHtcclxuICAgICAgICAgICAgZW5oYW5jZUFwcFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IFtcclxuICAgICAgICAgICAgLi4uKDAsIF9zZXJ2ZXIpLmRlZmF1bHQoKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaHRtbCxcclxuICAgICAgICAgICAgaGVhZCxcclxuICAgICAgICAgICAgc3R5bGVzXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEh0bWwsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYm9keVwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTWFpbiwgbnVsbCksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChOZXh0U2NyaXB0LCBudWxsKSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBEb2N1bWVudDE7XHJcbmZ1bmN0aW9uIEh0bWwocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgaW5BbXBNb2RlICwgZG9jQ29tcG9uZW50c1JlbmRlcmVkICwgbG9jYWxlICB9ID0gKDAsIF9yZWFjdCkudXNlQ29udGV4dChfdXRpbHMuSHRtbENvbnRleHQpO1xyXG4gICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLkh0bWwgPSB0cnVlO1xyXG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImh0bWxcIiwgT2JqZWN0LmFzc2lnbih7XHJcbiAgICB9LCBwcm9wcywge1xyXG4gICAgICAgIGxhbmc6IHByb3BzLmxhbmcgfHwgbG9jYWxlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICBhbXA6IGluQW1wTW9kZSA/ICcnIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIFwiZGF0YS1hbXBkZXZtb2RlXCI6IGluQW1wTW9kZSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJycgOiB1bmRlZmluZWRcclxuICAgIH0pKSk7XHJcbn1cclxuY2xhc3MgSGVhZCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnQge1xyXG4gICAgZ2V0Q3NzTGlua3MoZmlsZXMpIHtcclxuICAgICAgICBjb25zdCB7IGFzc2V0UHJlZml4ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBkeW5hbWljSW1wb3J0cyAgfSA9IHRoaXMuY29udGV4dDtcclxuICAgICAgICBjb25zdCBjc3NGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZik9PmYuZW5kc1dpdGgoJy5jc3MnKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2hhcmVkRmlsZXMgPSBuZXcgU2V0KGZpbGVzLnNoYXJlZEZpbGVzKTtcclxuICAgICAgICAvLyBVbm1hbmFnZWQgZmlsZXMgYXJlIENTUyBmaWxlcyB0aGF0IHdpbGwgYmUgaGFuZGxlZCBkaXJlY3RseSBieSB0aGVcclxuICAgICAgICAvLyB3ZWJwYWNrIHJ1bnRpbWUgKGBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbmApLlxyXG4gICAgICAgIGxldCB1bm1hbmdlZEZpbGVzID0gbmV3IFNldChbXSk7XHJcbiAgICAgICAgbGV0IGR5bmFtaWNDc3NGaWxlcyA9IEFycmF5LmZyb20obmV3IFNldChkeW5hbWljSW1wb3J0cy5maWx0ZXIoKGZpbGUpPT5maWxlLmVuZHNXaXRoKCcuY3NzJylcclxuICAgICAgICApKSk7XHJcbiAgICAgICAgaWYgKGR5bmFtaWNDc3NGaWxlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBuZXcgU2V0KGNzc0ZpbGVzKTtcclxuICAgICAgICAgICAgZHluYW1pY0Nzc0ZpbGVzID0gZHluYW1pY0Nzc0ZpbGVzLmZpbHRlcigoZik9PiEoZXhpc3RpbmcuaGFzKGYpIHx8IHNoYXJlZEZpbGVzLmhhcyhmKSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdW5tYW5nZWRGaWxlcyA9IG5ldyBTZXQoZHluYW1pY0Nzc0ZpbGVzKTtcclxuICAgICAgICAgICAgY3NzRmlsZXMucHVzaCguLi5keW5hbWljQ3NzRmlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY3NzTGlua0VsZW1lbnRzID0gW107XHJcbiAgICAgICAgY3NzRmlsZXMuZm9yRWFjaCgoZmlsZSk9PntcclxuICAgICAgICAgICAgY29uc3QgaXNTaGFyZWRGaWxlID0gc2hhcmVkRmlsZXMuaGFzKGZpbGUpO1xyXG4gICAgICAgICAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MpIHtcclxuICAgICAgICAgICAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogYCR7ZmlsZX0tcHJlbG9hZGAsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcclxuICAgICAgICAgICAgICAgICAgICBocmVmOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzOiBcInN0eWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGlzVW5tYW5hZ2VkRmlsZSA9IHVubWFuZ2VkRmlsZXMuaGFzKGZpbGUpO1xyXG4gICAgICAgICAgICBjc3NMaW5rRWxlbWVudHMucHVzaCgvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcclxuICAgICAgICAgICAgICAgIGtleTogZmlsZSxcclxuICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcclxuICAgICAgICAgICAgICAgIGhyZWY6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXHJcbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLFxyXG4gICAgICAgICAgICAgICAgXCJkYXRhLW4tZ1wiOiBpc1VubWFuYWdlZEZpbGUgPyB1bmRlZmluZWQgOiBpc1NoYXJlZEZpbGUgPyAnJyA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIFwiZGF0YS1uLXBcIjogaXNVbm1hbmFnZWRGaWxlID8gdW5kZWZpbmVkIDogaXNTaGFyZWRGaWxlID8gdW5kZWZpbmVkIDogJydcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJiBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMpIHtcclxuICAgICAgICAgICAgY3NzTGlua0VsZW1lbnRzID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNzc0xpbmtFbGVtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoID09PSAwID8gbnVsbCA6IGNzc0xpbmtFbGVtZW50cztcclxuICAgIH1cclxuICAgIGdldFByZWxvYWREeW5hbWljQ2h1bmtzKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZHluYW1pY0ltcG9ydHMgLCBhc3NldFByZWZpeCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICAgIHJldHVybiBkeW5hbWljSW1wb3J0cy5tYXAoKGZpbGUpPT57XHJcbiAgICAgICAgICAgIGlmICghZmlsZS5lbmRzV2l0aCgnLmpzJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcclxuICAgICAgICAgICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IGZpbGUsXHJcbiAgICAgICAgICAgICAgICBocmVmOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxyXG4gICAgICAgICAgICAgICAgYXM6IFwic2NyaXB0XCIsXHJcbiAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcclxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xyXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XHJcbiAgICB9XHJcbiAgICBnZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzKSB7XHJcbiAgICAgICAgY29uc3QgeyBhc3NldFByZWZpeCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgc2NyaXB0TG9hZGVyICB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICAgIGNvbnN0IHByZWxvYWRGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZSk9PntcclxuICAgICAgICAgICAgcmV0dXJuIGZpbGUuZW5kc1dpdGgoJy5qcycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIC4uLihzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLm1hcCgoZmlsZSk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogZmlsZS5zcmMsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcclxuICAgICAgICAgICAgICAgICAgICBocmVmOiBmaWxlLnNyYyxcclxuICAgICAgICAgICAgICAgICAgICBhczogXCJzY3JpcHRcIixcclxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAuLi5wcmVsb2FkRmlsZXMubWFwKChmaWxlKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBmaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcclxuICAgICAgICAgICAgICAgICAgICBhczogXCJzY3JpcHRcIixcclxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApLCBcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG4gICAgZ2V0RHluYW1pY0NodW5rcyhmaWxlcykge1xyXG4gICAgICAgIHJldHVybiBnZXREeW5hbWljQ2h1bmtzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpO1xyXG4gICAgfVxyXG4gICAgZ2V0UHJlTmV4dFNjcmlwdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFByZU5leHRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcyk7XHJcbiAgICB9XHJcbiAgICBnZXRTY3JpcHRzKGZpbGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcyk7XHJcbiAgICB9XHJcbiAgICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFBvbHlmaWxsU2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyhjaGlsZHJlbikge1xyXG4gICAgICAgIGNvbnN0IHsgc2NyaXB0TG9hZGVyICB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdExvYWRlckl0ZW1zID0gW107XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRDaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIChjaGlsZCk9PntcclxuICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IF9zY3JpcHQuZGVmYXVsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzLnN0cmF0ZWd5ID09PSAnYmVmb3JlSW50ZXJhY3RpdmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlID0gKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXSkuY29uY2F0KFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY2hpbGQucHJvcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xhenlPbmxvYWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdhZnRlckludGVyYWN0aXZlJ1xyXG4gICAgICAgICAgICAgICAgXS5pbmNsdWRlcyhjaGlsZC5wcm9wcy5zdHJhdGVneSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JpcHRMb2FkZXJJdGVtcy5wdXNoKGNoaWxkLnByb3BzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlsdGVyZWRDaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5zY3JpcHRMb2FkZXIgPSBzY3JpcHRMb2FkZXJJdGVtcztcclxuICAgICAgICByZXR1cm4gZmlsdGVyZWRDaGlsZHJlbjtcclxuICAgIH1cclxuICAgIG1ha2VTdHlsZXNoZWV0SW5lcnQobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAobm9kZSwgKGMpPT57XHJcbiAgICAgICAgICAgIGlmIChjLnR5cGUgPT09ICdsaW5rJyAmJiBjLnByb3BzWydocmVmJ10gJiYgX2NvbnN0YW50cy5PUFRJTUlaRURfRk9OVF9QUk9WSURFUlMuc29tZSgoeyB1cmwgIH0pPT5jLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpXHJcbiAgICAgICAgICAgICkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmMucHJvcHMgfHwge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1snZGF0YS1ocmVmJ10gPSBuZXdQcm9wc1snaHJlZiddO1xyXG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjLCBuZXdQcm9wcykpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGMucHJvcHMgJiYgYy5wcm9wc1snY2hpbGRyZW4nXSkge1xyXG4gICAgICAgICAgICAgICAgYy5wcm9wc1snY2hpbGRyZW4nXSA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjLnByb3BzWydjaGlsZHJlbiddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHN0eWxlcyAsIGFtcFBhdGggLCBpbkFtcE1vZGUgLCBoeWJyaWRBbXAgLCBjYW5vbmljYWxCYXNlICwgX19ORVhUX0RBVEFfXyAsIGRhbmdlcm91c0FzUGF0aCAsIGhlYWRUYWdzICwgdW5zdGFibGVfcnVudGltZUpTICwgdW5zdGFibGVfSnNQcmVsb2FkICwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgLCAgfSA9IHRoaXMuY29udGV4dDtcclxuICAgICAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZTtcclxuICAgICAgICBjb25zdCBkaXNhYmxlSnNQcmVsb2FkID0gdW5zdGFibGVfSnNQcmVsb2FkID09PSBmYWxzZSB8fCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmc7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRvY0NvbXBvbmVudHNSZW5kZXJlZC5IZWFkID0gdHJ1ZTtcclxuICAgICAgICBsZXQgeyBoZWFkICB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICAgIGxldCBjc3NQcmVsb2FkcyA9IFtdO1xyXG4gICAgICAgIGxldCBvdGhlckhlYWRFbGVtZW50cyA9IFtdO1xyXG4gICAgICAgIGlmIChoZWFkKSB7XHJcbiAgICAgICAgICAgIGhlYWQuZm9yRWFjaCgoYyk9PntcclxuICAgICAgICAgICAgICAgIGlmIChjICYmIGMudHlwZSA9PT0gJ2xpbmsnICYmIGMucHJvcHNbJ3JlbCddID09PSAncHJlbG9hZCcgJiYgYy5wcm9wc1snYXMnXSA9PT0gJ3N0eWxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNzc1ByZWxvYWRzLnB1c2goYyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGMgJiYgb3RoZXJIZWFkRWxlbWVudHMucHVzaChjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGhlYWQgPSBjc3NQcmVsb2Fkcy5jb25jYXQob3RoZXJIZWFkRWxlbWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmZpbHRlcihCb29sZWFuKTtcclxuICAgICAgICAvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgY2hpbGRyZW4gPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCk9PntcclxuICAgICAgICAgICAgICAgIHZhciByZWY7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1JlYWN0SGVsbWV0ID0gY2hpbGQgPT09IG51bGwgfHwgY2hpbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYgPSBjaGlsZC5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWZbJ2RhdGEtcmVhY3QtaGVsbWV0J107XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzUmVhY3RIZWxtZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGNoaWxkID09PSBudWxsIHx8IGNoaWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjaGlsZC50eXBlKSA9PT0gJ3RpdGxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXRpdGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGNoaWxkID09PSBudWxsIHx8IGNoaWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjaGlsZC50eXBlKSA9PT0gJ21ldGEnICYmIChjaGlsZCA9PT0gbnVsbCB8fCBjaGlsZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSBjaGlsZC5wcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5uYW1lKSA9PT0gJ3ZpZXdwb3J0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiB2aWV3cG9ydCBtZXRhIHRhZ3Mgc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbm8tZG9jdW1lbnQtdmlld3BvcnQtbWV0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbikgY29uc29sZS53YXJuKCdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnICYmIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyAmJiAhaW5BbXBNb2RlKSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMoY2hpbGRyZW4pO1xyXG4gICAgICAgIGxldCBoYXNBbXBodG1sUmVsID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGhhc0Nhbm9uaWNhbFJlbCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcclxuICAgICAgICBoZWFkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGhlYWQgfHwgW10sIChjaGlsZCk9PntcclxuICAgICAgICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgICAgICBjb25zdCB7IHR5cGUgLCBwcm9wcyAgfSA9IGNoaWxkO1xyXG4gICAgICAgICAgICBpZiAoaW5BbXBNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFkUHJvcCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdtZXRhJyAmJiBwcm9wcy5uYW1lID09PSAndmlld3BvcnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFkUHJvcCA9ICduYW1lPVwidmlld3BvcnRcIic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdjYW5vbmljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2Fub25pY2FsUmVsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NjcmlwdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGJsb2NrIGlmXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMS4gaXQgaGFzIGEgc3JjIGFuZCBpc24ndCBwb2ludGluZyB0byBhbXBwcm9qZWN0J3MgQ0ROXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMi4gaXQgaXMgdXNpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgd2l0aG91dCBhIHR5cGUgb3JcclxuICAgICAgICAgICAgICAgICAgICAvLyBhIHR5cGUgb2YgdGV4dC9qYXZhc2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLnNyYyAmJiBwcm9wcy5zcmMuaW5kZXhPZignYW1wcHJvamVjdCcpIDwgLTEgfHwgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgJiYgKCFwcm9wcy50eXBlIHx8IHByb3BzLnR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWRQcm9wID0gJzxzY3JpcHQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaCgocHJvcCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhZFByb3AgKz0gYCAke3Byb3B9PVwiJHtwcm9wc1twcm9wXX1cImA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWRQcm9wICs9ICcvPic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGJhZFByb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEZvdW5kIGNvbmZsaWN0aW5nIGFtcCB0YWcgXCIke2NoaWxkLnR5cGV9XCIgd2l0aCBjb25mbGljdGluZyBwcm9wICR7YmFkUHJvcH0gaW4gJHtfX05FWFRfREFUQV9fLnBhZ2V9LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jb25mbGljdGluZy1hbXAtdGFnYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBub24tYW1wIG1vZGVcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnYW1waHRtbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNBbXBodG1sUmVsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdHJ5IHRvIHBhcnNlIHN0eWxlcyBmcm9tIGZyYWdtZW50IGZvciBiYWNrd2FyZHMgY29tcGF0XHJcbiAgICAgICAgY29uc3QgY3VyU3R5bGVzID0gQXJyYXkuaXNBcnJheShzdHlsZXMpID8gc3R5bGVzIDogW107XHJcbiAgICAgICAgaWYgKGluQW1wTW9kZSAmJiBzdHlsZXMgJiYgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XHJcbiAgICAgICAgc3R5bGVzLnByb3BzICYmIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxyXG4gICAgICAgIEFycmF5LmlzQXJyYXkoc3R5bGVzLnByb3BzLmNoaWxkcmVuKSkge1xyXG4gICAgICAgICAgICBjb25zdCBoYXNTdHlsZXMgPSAoZWwpPT57XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVmMiwgcmVmMztcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbCA9PT0gbnVsbCB8fCBlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjIgPSBlbC5wcm9wcykgPT09IG51bGwgfHwgcmVmMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjMgPSByZWYyLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSA9PT0gbnVsbCB8fCByZWYzID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYzLl9faHRtbDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XHJcbiAgICAgICAgICAgIHN0eWxlcy5wcm9wcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCk9PntcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmZvckVhY2goKGVsKT0+aGFzU3R5bGVzKGVsKSAmJiBjdXJTdHlsZXMucHVzaChlbClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNTdHlsZXMoY2hpbGQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VyU3R5bGVzLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmlsZXMgPSBnZXREb2N1bWVudEZpbGVzKHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LCB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLCBpbkFtcE1vZGUpO1xyXG4gICAgICAgIHZhciBfbm9uY2UsIF9ub25jZTE7XHJcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImhlYWRcIiwgT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgfSwgdGhpcy5wcm9wcyksIHRoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xyXG4gICAgICAgICAgICBcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJkYXRhLWFtcGRldm1vZGVcIjogaW5BbXBNb2RlID8gJ3RydWUnIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xyXG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5Om5vbmV9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIHtcclxuICAgICAgICAgICAgXCJkYXRhLW5leHQtaGlkZS1mb3VjXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiZGF0YS1hbXBkZXZtb2RlXCI6IGluQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZFxyXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHtcclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcclxuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpibG9ja31gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSkpLCBjaGlsZHJlbiwgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIm5leHQtZm9udC1wcmVjb25uZWN0XCJcclxuICAgICAgICB9KSwgaGVhZCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwibmV4dC1oZWFkLWNvdW50XCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KGhlYWQgfHwgW10pLnRvU3RyaW5nKClcclxuICAgICAgICB9KSwgaW5BbXBNb2RlICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidmlld3BvcnRcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsbWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MVwiXHJcbiAgICAgICAgfSksICFoYXNDYW5vbmljYWxSZWwgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XHJcbiAgICAgICAgICAgIHJlbDogXCJjYW5vbmljYWxcIixcclxuICAgICAgICAgICAgaHJlZjogY2Fub25pY2FsQmFzZSArICgwLCBfdXRpbHMxKS5jbGVhbkFtcFBhdGgoZGFuZ2Vyb3VzQXNQYXRoKVxyXG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcclxuICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcclxuICAgICAgICAgICAgYXM6IFwic2NyaXB0XCIsXHJcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIlxyXG4gICAgICAgIH0pLCBzdHlsZXMgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xyXG4gICAgICAgICAgICBcImFtcC1jdXN0b21cIjogXCJcIixcclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcclxuICAgICAgICAgICAgICAgIF9faHRtbDogY3VyU3R5bGVzLm1hcCgoc3R5bGUpPT5zdHlsZS5wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWxcclxuICAgICAgICAgICAgICAgICkuam9pbignJykucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csICcnKS5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywgJycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xyXG4gICAgICAgICAgICBcImFtcC1ib2lsZXJwbGF0ZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xyXG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XHJcbiAgICAgICAgICAgIFwiYW1wLWJvaWxlcnBsYXRlXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XHJcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcclxuICAgICAgICB9KSksICFpbkFtcE1vZGUgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAhaGFzQW1waHRtbFJlbCAmJiBoeWJyaWRBbXAgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XHJcbiAgICAgICAgICAgIHJlbDogXCJhbXBodG1sXCIsXHJcbiAgICAgICAgICAgIGhyZWY6IGNhbm9uaWNhbEJhc2UgKyBnZXRBbXBQYXRoKGFtcFBhdGgsIGRhbmdlcm91c0FzUGF0aClcclxuICAgICAgICB9KSwgIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyksICFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIHtcclxuICAgICAgICAgICAgXCJkYXRhLW4tY3NzXCI6IChfbm9uY2UgPSB0aGlzLnByb3BzLm5vbmNlKSAhPT0gbnVsbCAmJiBfbm9uY2UgIT09IHZvaWQgMCA/IF9ub25jZSA6ICcnXHJcbiAgICAgICAgfSksIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9JTUFHRVMgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwibmV4dC1pbWFnZS1wcmVsb2FkXCJcclxuICAgICAgICB9KSwgIWRpc2FibGVSdW50aW1lSlMgJiYgIWRpc2FibGVKc1ByZWxvYWQgJiYgdGhpcy5nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpLCAhZGlzYWJsZVJ1bnRpbWVKUyAmJiAhZGlzYWJsZUpzUHJlbG9hZCAmJiB0aGlzLmdldFByZWxvYWRNYWluTGlua3MoZmlsZXMpLCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKSwgIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKSwgIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyksICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFNjcmlwdHMoZmlsZXMpLCBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIHRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpLCBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIHtcclxuICAgICAgICAgICAgXCJkYXRhLW4tY3NzXCI6IChfbm9uY2UxID0gdGhpcy5wcm9wcy5ub25jZSkgIT09IG51bGwgJiYgX25vbmNlMSAhPT0gdm9pZCAwID8gX25vbmNlMSA6ICcnXHJcbiAgICAgICAgfSksIHRoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcclxuICAgICAgICAvLyBvcmRlcmluZyBtYXRjaGVzIHByb2R1Y3Rpb25cclxuICAgICAgICAvLyAoYnkgZGVmYXVsdCwgc3R5bGUtbG9hZGVyIGluamVjdHMgYXQgdGhlIGJvdHRvbSBvZiA8aGVhZCAvPilcclxuICAgICAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCB7XHJcbiAgICAgICAgICAgIGlkOiBcIl9fbmV4dF9jc3NfX0RPX05PVF9VU0VfX1wiXHJcbiAgICAgICAgfSksIHN0eWxlcyB8fCBudWxsKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCB7XHJcbiAgICAgICAgfSwgLi4uaGVhZFRhZ3MgfHwgW10pKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5IZWFkID0gSGVhZDtcclxuSGVhZC5jb250ZXh0VHlwZSA9IF91dGlscy5IdG1sQ29udGV4dDtcclxuZnVuY3Rpb24gTWFpbigpIHtcclxuICAgIGNvbnN0IHsgaW5BbXBNb2RlICwgZG9jQ29tcG9uZW50c1JlbmRlcmVkICB9ID0gKDAsIF9yZWFjdCkudXNlQ29udGV4dChfdXRpbHMuSHRtbENvbnRleHQpO1xyXG4gICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLk1haW4gPSB0cnVlO1xyXG4gICAgaWYgKGluQW1wTW9kZSkgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgX2NvbnN0YW50cy5CT0RZX1JFTkRFUl9UQVJHRVQpKTtcclxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xyXG4gICAgICAgIGlkOiBcIl9fbmV4dFwiXHJcbiAgICB9LCBfY29uc3RhbnRzLkJPRFlfUkVOREVSX1RBUkdFVCkpO1xyXG59XHJcbmNsYXNzIE5leHRTY3JpcHQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGdldER5bmFtaWNDaHVua3MoZmlsZXMpIHtcclxuICAgICAgICByZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKTtcclxuICAgIH1cclxuICAgIGdldFByZU5leHRTY3JpcHRzKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRQcmVOZXh0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpO1xyXG4gICAgfVxyXG4gICAgZ2V0U2NyaXB0cyhmaWxlcykge1xyXG4gICAgICAgIHJldHVybiBnZXRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpO1xyXG4gICAgfVxyXG4gICAgZ2V0UG9seWZpbGxTY3JpcHRzKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRQb2x5ZmlsbFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRJbmxpbmVTY3JpcHRTb3VyY2UoY29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0IHsgX19ORVhUX0RBVEFfXyAgfSA9IGNvbnRleHQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KF9fTkVYVF9EQVRBX18pO1xyXG4gICAgICAgICAgICByZXR1cm4gKDAsIF9odG1sZXNjYXBlKS5odG1sRXNjYXBlSnNvblN0cmluZyhkYXRhKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgaWYgKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NpcmN1bGFyIHN0cnVjdHVyZScpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENpcmN1bGFyIHN0cnVjdHVyZSBpbiBcImdldEluaXRpYWxQcm9wc1wiIHJlc3VsdCBvZiBwYWdlIFwiJHtfX05FWFRfREFUQV9fLnBhZ2V9XCIuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NpcmN1bGFyLXN0cnVjdHVyZWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBhc3NldFByZWZpeCAsIGluQW1wTW9kZSAsIGJ1aWxkTWFuaWZlc3QgLCB1bnN0YWJsZV9ydW50aW1lSlMgLCBkb2NDb21wb25lbnRzUmVuZGVyZWQgLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICwgIH0gPSB0aGlzLmNvbnRleHQ7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2U7XHJcbiAgICAgICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLk5leHRTY3JpcHQgPSB0cnVlO1xyXG4gICAgICAgIGlmIChpbkFtcE1vZGUpIHtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGFtcERldkZpbGVzID0gW1xyXG4gICAgICAgICAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5kZXZGaWxlcyxcclxuICAgICAgICAgICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlcyxcclxuICAgICAgICAgICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QuYW1wRGV2RmlsZXMsIFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJfX05FWFRfREFUQV9fXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxyXG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixcclxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJkYXRhLWFtcGRldm1vZGVcIjogdHJ1ZVxyXG4gICAgICAgICAgICB9KSwgYW1wRGV2RmlsZXMubWFwKChmaWxlKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcclxuICAgICAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcclxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS1hbXBkZXZtb2RlXCI6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pIGNvbnNvbGUud2FybignV2FybmluZzogYE5leHRTY3JpcHRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyh0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCwgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSwgaW5BbXBNb2RlKTtcclxuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAhZGlzYWJsZVJ1bnRpbWVKUyAmJiBidWlsZE1hbmlmZXN0LmRldkZpbGVzID8gYnVpbGRNYW5pZmVzdC5kZXZGaWxlcy5tYXAoKGZpbGUpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xyXG4gICAgICAgICAgICAgICAga2V5OiBmaWxlLFxyXG4gICAgICAgICAgICAgICAgc3JjOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxyXG4gICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXHJcbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSA6IG51bGwsIGRpc2FibGVSdW50aW1lSlMgPyBudWxsIDogLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcclxuICAgICAgICAgICAgaWQ6IFwiX19ORVhUX0RBVEFfX1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXHJcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sXHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XHJcbiAgICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZU5leHRTY3JpcHRzKCksIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyksIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0U2NyaXB0cyhmaWxlcykpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk5leHRTY3JpcHQgPSBOZXh0U2NyaXB0O1xyXG5OZXh0U2NyaXB0LmNvbnRleHRUeXBlID0gX3V0aWxzLkh0bWxDb250ZXh0O1xyXG5OZXh0U2NyaXB0LnNhZmFyaU5vbW9kdWxlRml4ID0gJyFmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LHQ9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKCEoXCJub01vZHVsZVwiaW4gdCkmJlwib25iZWZvcmVsb2FkXCJpbiB0KXt2YXIgbj0hMTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVsb2FkXCIsZnVuY3Rpb24oZSl7aWYoZS50YXJnZXQ9PT10KW49ITA7ZWxzZSBpZighZS50YXJnZXQuaGFzQXR0cmlidXRlKFwibm9tb2R1bGVcIil8fCFuKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCl9LCEwKSx0LnR5cGU9XCJtb2R1bGVcIix0LnNyYz1cIi5cIixlLmhlYWQuYXBwZW5kQ2hpbGQodCksdC5yZW1vdmUoKX19KCk7JztcclxuZnVuY3Rpb24gZ2V0QW1wUGF0aChhbXBQYXRoLCBhc1BhdGgpIHtcclxuICAgIHJldHVybiBhbXBQYXRoIHx8IGAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nfWFtcD0xYDtcclxufVxyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2RvY3VtZW50LmpzLm1hcCIsImltcG9ydCB7Q29sb3JNb2RlU2NyaXB0fSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgTmV4dERvY3VtZW50LCB7SHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdH0gZnJvbSAnbmV4dC9kb2N1bWVudCdcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2xpYnMvdGhlbWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudCBleHRlbmRzIE5leHREb2N1bWVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPEh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZC8+XHJcbiAgICAgICAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sb3JNb2RlU2NyaXB0IGluaXRpYWxDb2xvck1vZGU9e3RoZW1lLmNvbmZpZy5pbml0aWFsQ29sb3JNb2RlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5leHRTY3JpcHQgLz5cclxuICAgICAgICAgICAgICAgIDwvYm9keT5cclxuICAgICAgICAgICAgPC9IdG1sPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fZG9jdW1lbnQnKVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9jb25zdGFudHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOyJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsIm1vZGUiLCJzdHlsZXMiLCJnbG9iYWwiLCJwcm9wcyIsImJvZHkiLCJiZyIsImNvbXBvbmVudHMiLCJIZWFkaW5nIiwidmFyaWFudHMiLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRTaXplIiwidGV4dFVuZGVybGluZU9mZnNldCIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJ0ZXh0RGVjb3JhdGlvblRoaWNrbmVzcyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIkxpbmsiLCJiYXNlU3RsZSIsImNvbG9yIiwiZm9udHMiLCJoZWFkaW5nIiwiY29sb3JzIiwiZ2xhc3NUZWFsIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsInRoZW1lIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiaW5pdEhlYWRNYW5hZ2VyIiwiRE9NQXR0cmlidXRlTmFtZXMiLCJhY2NlcHRDaGFyc2V0IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsImh0dHBFcXVpdiIsIm5vTW9kdWxlIiwicmVhY3RFbGVtZW50VG9ET00iLCJ0eXBlIiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJ1bmRlZmluZWQiLCJhdHRyIiwidG9Mb3dlckNhc2UiLCJzZXRBdHRyaWJ1dGUiLCJjaGlsZHJlbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiaW5uZXJIVE1MIiwiX19odG1sIiwidGV4dENvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJqb2luIiwidXBkYXRlRWxlbWVudHMiLCJoZWFkRWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImhlYWRDb3VudEVsIiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJlcnJvciIsImhlYWRDb3VudCIsIk51bWJlciIsImNvbnRlbnQiLCJvbGRUYWdzIiwiaSIsImoiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwidGFnTmFtZSIsInB1c2giLCJuZXdUYWdzIiwibWFwIiwiZmlsdGVyIiwibmV3VGFnIiwiayIsImxlbiIsImxlbmd0aCIsIm9sZFRhZyIsImlzRXF1YWxOb2RlIiwic3BsaWNlIiwiZm9yRWFjaCIsInQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJ0b1N0cmluZyIsInVwZGF0ZVByb21pc2UiLCJtb3VudGVkSW5zdGFuY2VzIiwiU2V0IiwidXBkYXRlSGVhZCIsImhlYWQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwidGFncyIsImgiLCJocmVmIiwidGl0bGVDb21wb25lbnQiLCJ0aXRsZSIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImlkIiwiY2xlYXJUaW1lb3V0IiwiaW5pdFNjcmlwdExvYWRlciIsIl9yZWFjdCIsInJlcXVpcmUiLCJfaGVhZE1hbmFnZXJDb250ZXh0IiwiX2hlYWRNYW5hZ2VyIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiYXJndW1lbnRzIiwic291cmNlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwiU2NyaXB0Q2FjaGUiLCJNYXAiLCJMb2FkQ2FjaGUiLCJpZ25vcmVQcm9wcyIsImxvYWRTY3JpcHQiLCJzcmMiLCJvbkxvYWQiLCJzdHJhdGVneSIsIm9uRXJyb3IiLCJjYWNoZUtleSIsImhhcyIsImFkZCIsImdldCIsImxvYWRQcm9taXNlIiwicmVqZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjYXRjaCIsInNldCIsImVudHJpZXMiLCJpbmNsdWRlcyIsImFwcGVuZENoaWxkIiwiaGFuZGxlQ2xpZW50U2NyaXB0TG9hZCIsImxvYWRMYXp5U2NyaXB0IiwicmVhZHlTdGF0ZSIsInNjcmlwdExvYWRlckl0ZW1zIiwiU2NyaXB0IiwicmVzdFByb3BzIiwidXBkYXRlU2NyaXB0cyIsInNjcmlwdHMiLCJnZXRJc1NzciIsInVzZUNvbnRleHQiLCJIZWFkTWFuYWdlckNvbnRleHQiLCJ1c2VFZmZlY3QiLCJiZWZvcmVJbnRlcmFjdGl2ZSIsIl9kZWZhdWx0IiwiX3V0aWxzIiwiRG9jdW1lbnRDb250ZXh0IiwiRG9jdW1lbnRJbml0aWFsUHJvcHMiLCJEb2N1bWVudFByb3BzIiwiSHRtbCIsIk1haW4iLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9zZXJ2ZXIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2NvbnN0YW50cyIsIl9nZXRQYWdlRmlsZXMiLCJfdXRpbHMxIiwiX2h0bWxlc2NhcGUiLCJfc2NyaXB0IiwiX19lc01vZHVsZSIsIm5ld09iaiIsImRlc2MiLCJnZXREb2N1bWVudEZpbGVzIiwiYnVpbGRNYW5pZmVzdCIsInBhdGhuYW1lIiwiaW5BbXBNb2RlIiwic2hhcmVkRmlsZXMiLCJnZXRQYWdlRmlsZXMiLCJwYWdlRmlsZXMiLCJhbGxGaWxlcyIsImdldFBvbHlmaWxsU2NyaXB0cyIsImNvbnRleHQiLCJhc3NldFByZWZpeCIsImRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nIiwiZGlzYWJsZU9wdGltaXplZExvYWRpbmciLCJwb2x5ZmlsbEZpbGVzIiwicG9seWZpbGwiLCJlbmRzV2l0aCIsImRlZmVyIiwibm9uY2UiLCJjcm9zc09yaWdpbiIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwiZ2V0UHJlTmV4dFNjcmlwdHMiLCJzY3JpcHRMb2FkZXIiLCJmaWxlIiwiaW5kZXgiLCJzY3JpcHRQcm9wcyIsImFzc2lnbiIsImdldER5bmFtaWNDaHVua3MiLCJmaWxlcyIsImR5bmFtaWNJbXBvcnRzIiwiaXNEZXZlbG9wbWVudCIsImFzeW5jIiwiZW5jb2RlVVJJIiwiZ2V0U2NyaXB0cyIsInJlZiIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJsb3dQcmlvcml0eUZpbGVzIiwiRG9jdW1lbnQxIiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZW5oYW5jZUFwcCIsIkFwcCIsImh0bWwiLCJyZW5kZXJQYWdlIiwicmVuZGVyIiwiSGVhZCIsIk5leHRTY3JpcHQiLCJkb2NDb21wb25lbnRzUmVuZGVyZWQiLCJsb2NhbGUiLCJIdG1sQ29udGV4dCIsImxhbmciLCJhbXAiLCJnZXRDc3NMaW5rcyIsImNzc0ZpbGVzIiwiZiIsInVubWFuZ2VkRmlsZXMiLCJkeW5hbWljQ3NzRmlsZXMiLCJmcm9tIiwiZXhpc3RpbmciLCJjc3NMaW5rRWxlbWVudHMiLCJpc1NoYXJlZEZpbGUiLCJfX05FWFRfT1BUSU1JWkVfQ1NTIiwicmVsIiwiYXMiLCJpc1VubWFuYWdlZEZpbGUiLCJfX05FWFRfT1BUSU1JWkVfRk9OVFMiLCJtYWtlU3R5bGVzaGVldEluZXJ0IiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJCb29sZWFuIiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsImhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMiLCJmaWx0ZXJlZENoaWxkcmVuIiwiQ2hpbGRyZW4iLCJjaGlsZCIsIl9fTkVYVF9EQVRBX18iLCJub2RlIiwiYyIsIk9QVElNSVpFRF9GT05UX1BST1ZJREVSUyIsInNvbWUiLCJ1cmwiLCJzdGFydHNXaXRoIiwibmV3UHJvcHMiLCJjbG9uZUVsZW1lbnQiLCJhbXBQYXRoIiwiaHlicmlkQW1wIiwiY2Fub25pY2FsQmFzZSIsImRhbmdlcm91c0FzUGF0aCIsImhlYWRUYWdzIiwidW5zdGFibGVfcnVudGltZUpTIiwidW5zdGFibGVfSnNQcmVsb2FkIiwiZGlzYWJsZVJ1bnRpbWVKUyIsImRpc2FibGVKc1ByZWxvYWQiLCJjc3NQcmVsb2FkcyIsIm90aGVySGVhZEVsZW1lbnRzIiwidG9BcnJheSIsImlzUmVhY3RIZWxtZXQiLCJyZWYxIiwid2FybiIsIm5hbWUiLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiYmFkUHJvcCIsInByb3AiLCJwYWdlIiwiY3VyU3R5bGVzIiwiaGFzU3R5bGVzIiwicmVmMiIsInJlZjMiLCJfbm9uY2UiLCJfbm9uY2UxIiwiRnJhZ21lbnQiLCJjb3VudCIsImNsZWFuQW1wUGF0aCIsInN0eWxlIiwicmVwbGFjZSIsImdldEFtcFBhdGgiLCJfX05FWFRfT1BUSU1JWkVfSU1BR0VTIiwiY29udGV4dFR5cGUiLCJCT0RZX1JFTkRFUl9UQVJHRVQiLCJnZXRJbmxpbmVTY3JpcHRTb3VyY2UiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImh0bWxFc2NhcGVKc29uU3RyaW5nIiwiZXJyIiwibWVzc2FnZSIsIkVycm9yIiwiYW1wRGV2RmlsZXMiLCJkZXZGaWxlcyIsInNhZmFyaU5vbW9kdWxlRml4IiwiYXNQYXRoIiwiQ29sb3JNb2RlU2NyaXB0IiwiTmV4dERvY3VtZW50IiwiRG9jdW1lbnQiXSwic291cmNlUm9vdCI6IiJ9