if (typeof global.KOOT_DIST_DIR === "undefined") {
    global.KOOT_DIST_DIR = require("path").resolve(__dirname, "../");
}

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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/thumbnails/20200913.jpg":
/*!**************************************!*\
  !*** ./data/thumbnails/20200913.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "includes/asset.25f3af6f9a284595e6ed4e649a62ff96.jpg");

/***/ }),

/***/ "./data/thumbnails/20200920.jpg":
/*!**************************************!*\
  !*** ./data/thumbnails/20200920.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "includes/asset.7d84ca2e7f02d9a095b8ce8e6cfc036a.jpg");

/***/ }),

/***/ "./data/thumbnails/20200926.jpg":
/*!**************************************!*\
  !*** ./data/thumbnails/20200926.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "includes/asset.8f4a34ed8b93d015437e5327cfe71046.jpg");

/***/ }),

/***/ "./data/thumbnails/20201001.jpg":
/*!**************************************!*\
  !*** ./data/thumbnails/20201001.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "includes/asset.828c66a12fbf309fce57448c7f5f6330.jpg");

/***/ }),

/***/ "./data/thumbnails/20201008.jpg":
/*!**************************************!*\
  !*** ./data/thumbnails/20201008.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "includes/asset.37ef02295a27e63b83c2dae5a46e1bd2.jpg");

/***/ }),

/***/ "./data/thumbnails/20201019.jpg":
/*!**************************************!*\
  !*** ./data/thumbnails/20201019.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "includes/asset.137e3967e8d1779fb24c9b709c8d18b4.jpg");

/***/ }),

/***/ "./data/thumbnails/20201025.jpg":
/*!**************************************!*\
  !*** ./data/thumbnails/20201025.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "includes/asset.4d80cd7c0d77d9ada29fbcd01e8886ec.jpg");

/***/ }),

/***/ "./data/thumbnails/20201101.jpg":
/*!**************************************!*\
  !*** ./data/thumbnails/20201101.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "includes/asset.064e763122dcaf4aec7f925718fc3d60.jpg");

/***/ }),

/***/ "./data/thumbnails/20201108.jpg":
/*!**************************************!*\
  !*** ./data/thumbnails/20201108.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "includes/asset.1046b1868902e4abfdee3079df1970f9.jpg");

/***/ }),

/***/ "./data/thumbnails/20201116.jpg":
/*!**************************************!*\
  !*** ./data/thumbnails/20201116.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "includes/asset.04861cc880ae09846a063f7e3f4d02a8.jpg");

/***/ }),

/***/ "./data/thumbnails/20201124.jpg":
/*!**************************************!*\
  !*** ./data/thumbnails/20201124.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "includes/asset.54eeff5602823ed2b6fc85abb5d0399a.jpg");

/***/ }),

/***/ "./data/thumbnails/20201206.jpg":
/*!**************************************!*\
  !*** ./data/thumbnails/20201206.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "includes/asset.c63707d375403e8334d7c59f2e8bcba8.jpg");

/***/ }),

/***/ "./data/thumbnails/20201229.jpg":
/*!**************************************!*\
  !*** ./data/thumbnails/20201229.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "includes/asset.af518702f0a41e371c4f2eea534d203b.jpg");

/***/ }),

/***/ "./data/thumbnails/20210110.jpg":
/*!**************************************!*\
  !*** ./data/thumbnails/20210110.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "includes/asset.6eba4eab906777b470e77b00a1eb2a8e.jpg");

/***/ }),

/***/ "./data/videos.ts":
/*!************************!*\
  !*** ./data/videos.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const videos = [{
  name: {
    zh: '航母 MOD'
  },
  des: {
    zh: '看！那是什么！是航母！这是一套为微软模拟飞行打造的航母MOD，由 HARD DECK SIMULATION（HDS）开发，售价15美元。在本期节目中我们会尝试在航母上起降各种类型的飞机，在视频后半则会介绍该 MOD 的安装、配置介绍。'
  },
  thumbnail: __webpack_require__(/*! ./thumbnails/20210110.jpg */ "./data/thumbnails/20210110.jpg").default,
  link: {
    youtube: 'https://youtu.be/sMlw3HfhPoA',
    bilibili: 'https://www.bilibili.com/video/BV1CU4y1x7Hm'
  },
  release: 1610249416000
}, {
  name: {
    zh: '百万分！巴黎戴高乐降落挑战'
  },
  des: {
    zh: '模拟更新（Sim Update）第二弹在12月23日正式上线，除了带来了备受期待的VR功能外，还有针对空客、波音客机的大量更新，以及全新的雪景表现。不过我们今天的视频中要讲的都不是这些，而是本次更新带来的全新降落挑战——巴黎夏尔·戴高乐机场A320降落挑战。'
  },
  thumbnail: __webpack_require__(/*! ./thumbnails/20201229.jpg */ "./data/thumbnails/20201229.jpg").default,
  link: {
    youtube: 'https://youtu.be/lXeULVaPRLM',
    bilibili: 'https://www.bilibili.com/video/BV12f4y1e7Nt'
  },
  release: 1609210057000
}, {
  name: {
    zh: '云游美国'
  },
  des: {
    zh: '世界更新第二弹在11月24日如期而至，对美国全境的机场、地貌、地景、地标建筑进行了大幅更新。请大家系好安全带，搭乘 DBH 航空的班机游览北美风光~'
  },
  thumbnail: __webpack_require__(/*! ./thumbnails/20201206.jpg */ "./data/thumbnails/20201206.jpg").default,
  link: {
    youtube: 'https://youtu.be/wSOc5o-xCeQ',
    bilibili: 'https://www.bilibili.com/video/BV1YZ4y1g7sR'
  },
  release: 1607229007000
}, {
  name: {
    zh: '零能见度盲降'
  },
  des: {
    zh: '在全新的《微软模拟飞行》中，空客A320能否在杰克逊·霍尔机场实现零能见度盲降？我们来亲自测试下……'
  },
  thumbnail: __webpack_require__(/*! ./thumbnails/20201124.jpg */ "./data/thumbnails/20201124.jpg").default,
  link: {
    youtube: 'https://youtu.be/9JJhlXSBsbo',
    bilibili: 'https://www.bilibili.com/video/BV1Ey4y1S7V6'
  },
  release: 1606188616000
}, {
  name: {
    zh: '百万分！杰克逊机场降落挑战'
  },
  des: {
    zh: '11月10日的更新为游戏带来了一个全新的降落挑战：杰克逊·霍尔机场（Jackson Hole）。本次挑战将会驾驶 Citation CJ4 降落在 19 跑道。CJ4 我的驾驶经验不多，祝我走运。'
  },
  thumbnail: __webpack_require__(/*! ./thumbnails/20201116.jpg */ "./data/thumbnails/20201116.jpg").default,
  link: {
    youtube: 'https://youtu.be/StOJ9HkXccY',
    bilibili: 'https://www.bilibili.com/video/BV1gD4y1X7Ng'
  },
  release: 1605497402000
}, {
  name: {
    zh: '生涯模式 NeoFly'
  },
  des: {
    zh: '一款免费的第三方程序为《微软模拟飞行》带来了生涯模式，我们来一探究竟'
  },
  thumbnail: __webpack_require__(/*! ./thumbnails/20201108.jpg */ "./data/thumbnails/20201108.jpg").default,
  link: {
    youtube: 'https://youtu.be/QElg8lr15tU',
    bilibili: 'https://www.bilibili.com/video/BV1ir4y1w7aj'
  },
  release: 1604808000000
}, {
  name: {
    zh: '万圣节降落挑战'
  },
  des: {
    zh: '10月29日的更新新增了一个万圣节主题的限定降落挑战——好吓人啊~'
  },
  thumbnail: __webpack_require__(/*! ./thumbnails/20201101.jpg */ "./data/thumbnails/20201101.jpg").default,
  link: {
    youtube: 'https://youtu.be/6qPRsCuPMUE',
    bilibili: 'https://www.bilibili.com/video/BV1KD4y1R7UT'
  },
  release: 1604201460000
}, {
  name: {
    zh: '攀枝花保安营降落挑战'
  },
  des: {
    zh: '就在前不久的10月16日，攀枝花保安营机场发生了一起事故，虽然没有人员伤亡，但此次事故让这座机场再次进入公众视野。通过模拟飞行，我们可以还原当时的条件，来亲自体验下在这座机场降落是不是如传说那般具有挑战性！'
  },
  thumbnail: __webpack_require__(/*! ./thumbnails/20201025.jpg */ "./data/thumbnails/20201025.jpg").default,
  link: {
    youtube: 'https://youtu.be/YxrXO9g-JLc',
    bilibili: 'https://www.bilibili.com/video/BV1tz4y1C78e'
  },
  release: 1603596631000
}, {
  name: {
    zh: '新摇杆开箱 & 上手体验'
  },
  des: {
    zh: '大波胡购入了一款新的游戏外设，意图提升模拟飞行体验……'
  },
  thumbnail: __webpack_require__(/*! ./thumbnails/20201019.jpg */ "./data/thumbnails/20201019.jpg").default,
  link: {
    youtube: 'https://youtu.be/XT9FdreY9ZQ',
    bilibili: 'https://www.bilibili.com/video/BV1x54y1R7nX'
  },
  release: 1603078204000
}, {
  name: {
    zh: '新 · 东京'
  },
  des: {
    zh: '9月29日的世界更新（日本）为东京带来了测绘级的地景。但大波胡之前一直没有在游戏中看到，直到现在……'
  },
  thumbnail: __webpack_require__(/*! ./thumbnails/20201008.jpg */ "./data/thumbnails/20201008.jpg").default,
  link: {
    youtube: 'https://youtu.be/rndn4CINMQc',
    bilibili: 'https://www.bilibili.com/video/BV1m54y117rt'
  },
  release: 1602127832000
}, {
  name: {
    zh: '云游日本'
  },
  des: {
    zh: '9月29日大型补丁更新 - World Update: Japan，大规模更新了日本的地貌、地景以及机场，同时带来了一个新的活动：云游日本'
  },
  thumbnail: __webpack_require__(/*! ./thumbnails/20201001.jpg */ "./data/thumbnails/20201001.jpg").default,
  link: {
    youtube: 'https://youtu.be/vNcbK0hF8mg',
    bilibili: 'https://www.bilibili.com/video/BV13p4y1Y7wS'
  },
  release: 1601546435000
}, {
  name: {
    zh: 'ILS 盲降'
  },
  des: {
    zh: 'ILS 盲降练习 - 降落首都国际机场'
  },
  thumbnail: __webpack_require__(/*! ./thumbnails/20200926.jpg */ "./data/thumbnails/20200926.jpg").default,
  link: {
    youtube: 'https://youtu.be/F-jVs38ab8Y',
    bilibili: 'https://www.bilibili.com/video/BV1kK4y1874X'
  },
  release: 1601092856000
}, {
  name: {
    zh: '海河水上降落'
  },
  des: {
    zh: '驾驶 Icon A5 游览海河'
  },
  thumbnail: __webpack_require__(/*! ./thumbnails/20200920.jpg */ "./data/thumbnails/20200920.jpg").default,
  link: {
    youtube: 'https://youtu.be/3Efm9u7TAyg',
    bilibili: 'https://www.bilibili.com/video/BV1yD4y1o7jE'
  },
  release: 1600659015000
}, {
  name: {
    zh: '飞行训练'
  },
  des: {
    zh: '飞行训练最后一课'
  },
  thumbnail: __webpack_require__(/*! ./thumbnails/20200913.jpg */ "./data/thumbnails/20200913.jpg").default,
  link: {
    youtube: 'https://youtu.be/eO0Prwjklkg',
    bilibili: 'https://www.bilibili.com/video/BV17a4y1j7Qq'
  },
  release: 1600056009000
}];
/* harmony default export */ __webpack_exports__["default"] = (videos);

/***/ }),

/***/ "./logs/tmp/config/full.a227f6f678b0be214ac573271cf2f00d.js":
/*!******************************************************************!*\
  !*** ./logs/tmp/config/full.a227f6f678b0be214ac573271cf2f00d.js ***!
  \******************************************************************/
/*! exports provided: name, type, template, router, redux, client, server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redux", function() { return redux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "server", function() { return server; });
// 核心代码中引用的配置文件
const name = "sp.diablohu.com";
const type = "react";
const template = "./src/index.ejs";
const router = __webpack_require__(/*! ../../../src/routes */ "./src/routes/index.js").default;
const redux = {
  "store": __webpack_require__(/*! ../../../src/store */ "./src/store/index.js").default,
  "syncCookie": true
};
const client = {};
const server =  true ? {
  "renderCache": false,
  "proxyRequestOrigin": {
    "protocol": "https"
  },
  "inject": __webpack_require__(/*! ../../../src/index.inject.js */ "./src/index.inject.js").default,
  "before": __webpack_require__(/*! ../../../src/server/before.js */ "./src/server/before.js").default
} : undefined;

/***/ }),

/***/ "./node_modules/history/lib/Actions.js":
/*!*********************************************!*\
  !*** ./node_modules/history/lib/Actions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Indicates that navigation was caused by a call to history.push.
 */

var PUSH = exports.PUSH = 'PUSH';
/**
 * Indicates that navigation was caused by a call to history.replace.
 */

var REPLACE = exports.REPLACE = 'REPLACE';
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */

var POP = exports.POP = 'POP';

/***/ }),

/***/ "./node_modules/history/lib/AsyncUtils.js":
/*!************************************************!*\
  !*** ./node_modules/history/lib/AsyncUtils.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var isSync = false,
      hasNext = false,
      doneArgs = void 0;

  var done = function done() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    isDone = true;

    if (isSync) {
      // Iterate instead of recursing if possible.
      doneArgs = args;
      return;
    }

    callback.apply(undefined, args);
  };

  var next = function next() {
    if (isDone) return;
    hasNext = true;
    if (isSync) return; // Iterate instead of recursing if possible.

    isSync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work(currentTurn++, next, done);
    }

    isSync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(undefined, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  };

  next();
};

/***/ }),

/***/ "./node_modules/history/lib/LocationUtils.js":
/*!***************************************************!*\
  !*** ./node_modules/history/lib/LocationUtils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

var _Actions = __webpack_require__(/*! ./Actions */ "./node_modules/history/lib/Actions.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var createQuery = exports.createQuery = function createQuery(props) {
  return _extends(Object.create(null), props);
};

var createLocation = exports.createLocation = function createLocation() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Actions.POP;
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;
   true ? (0, _warning2.default)(!object.path, 'Location descriptor objects should have a `pathname`, not a `path`.') : undefined;
  var pathname = object.pathname || '/';
  var search = object.search || '';
  var hash = object.hash || '';
  var state = object.state;
  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
};

var isDate = function isDate(object) {
  return Object.prototype.toString.call(object) === '[object Date]';
};

var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
  if (a === b) return true;
  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);
  if (typeofA !== typeofB) return false;
  !(typeofA !== 'function') ?  true ? (0, _invariant2.default)(false, 'You must not store functions in location state') : undefined : void 0; // Not the same object, but same type.

  if (typeofA === 'object') {
    !!(isDate(a) && isDate(b)) ?  true ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : undefined : void 0;

    if (!Array.isArray(a)) {
      var keysofA = Object.keys(a);
      var keysofB = Object.keys(b);
      return keysofA.length === keysofB.length && keysofA.every(function (key) {
        return statesAreEqual(a[key], b[key]);
      });
    }

    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return statesAreEqual(item, b[index]);
    });
  } // All other serializable types (string, number, boolean)
  // should be strict equal.


  return false;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.key === b.key && // a.action === b.action && // Different action !== location change.
  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
};

/***/ }),

/***/ "./node_modules/history/lib/PathUtils.js":
/*!***********************************************!*\
  !*** ./node_modules/history/lib/PathUtils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = undefined;

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
  var _parsePath = parsePath(path),
      pathname = _parsePath.pathname,
      search = _parsePath.search,
      hash = _parsePath.hash;

  return createPath({
    pathname: pathname,
    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
    hash: hash
  });
};

var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
  var _parsePath2 = parsePath(path),
      pathname = _parsePath2.pathname,
      search = _parsePath2.search,
      hash = _parsePath2.hash;

  return createPath({
    pathname: pathname,
    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
      return prefix === '?' ? prefix : suffix;
    }),
    hash: hash
  });
};

var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
  var _parsePath3 = parsePath(path),
      search = _parsePath3.search;

  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
  return match && match[1];
};

var extractPath = function extractPath(string) {
  var match = string.match(/^(https?:)?\/\/[^\/]*/);
  return match == null ? string : string.substring(match[0].length);
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = extractPath(path);
  var search = '';
  var hash = '';
   true ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : undefined;
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';
  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  if (location == null || typeof location === 'string') return location;
  var basename = location.basename,
      pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = (basename || '') + pathname;
  if (search && search !== '?') path += search;
  if (hash) path += hash;
  return path;
};

/***/ }),

/***/ "./node_modules/history/lib/createHistory.js":
/*!***************************************************!*\
  !*** ./node_modules/history/lib/createHistory.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ "./node_modules/history/lib/AsyncUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

var _runTransitionHook = __webpack_require__(/*! ./runTransitionHook */ "./node_modules/history/lib/runTransitionHook.js");

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _Actions = __webpack_require__(/*! ./Actions */ "./node_modules/history/lib/Actions.js");

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/lib/LocationUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var createHistory = function createHistory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getCurrentLocation = options.getCurrentLocation,
      getUserConfirmation = options.getUserConfirmation,
      pushLocation = options.pushLocation,
      replaceLocation = options.replaceLocation,
      go = options.go,
      keyLength = options.keyLength;
  var currentLocation = void 0;
  var pendingLocation = void 0;
  var beforeListeners = [];
  var listeners = [];
  var allKeys = [];

  var getCurrentIndex = function getCurrentIndex() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);
    if (currentLocation) return allKeys.indexOf(currentLocation.key);
    return -1;
  };

  var updateLocation = function updateLocation(nextLocation) {
    var currentIndex = getCurrentIndex();
    currentLocation = nextLocation;

    if (currentLocation.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, currentIndex + 1), [currentLocation.key]);
    } else if (currentLocation.action === _Actions.REPLACE) {
      allKeys[currentIndex] = currentLocation.key;
    }

    listeners.forEach(function (listener) {
      return listener(currentLocation);
    });
  };

  var listenBefore = function listenBefore(listener) {
    beforeListeners.push(listener);
    return function () {
      return beforeListeners = beforeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var listen = function listen(listener) {
    listeners.push(listener);
    return function () {
      return listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
        return result != null ? done(result) : next();
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          return callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  };

  var transitionTo = function transitionTo(nextLocation) {
    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do

    pendingLocation = nextLocation;
    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation

      pendingLocation = null;

      if (ok) {
        // Treat PUSH to same path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = (0, _PathUtils.createPath)(currentLocation);
          var nextPath = (0, _PathUtils.createPath)(nextLocation);
          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
        }

        if (nextLocation.action === _Actions.POP) {
          updateLocation(nextLocation);
        } else if (nextLocation.action === _Actions.PUSH) {
          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
        } else if (nextLocation.action === _Actions.REPLACE) {
          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
        }
      } else if (currentLocation && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(currentLocation.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);
        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
      }
    });
  };

  var push = function push(input) {
    return transitionTo(createLocation(input, _Actions.PUSH));
  };

  var replace = function replace(input) {
    return transitionTo(createLocation(input, _Actions.REPLACE));
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength || 6);
  };

  var createHref = function createHref(location) {
    return (0, _PathUtils.createPath)(location);
  };

  var createLocation = function createLocation(location, action) {
    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : createKey();
    return (0, _LocationUtils.createLocation)(location, action, key);
  };

  return {
    getCurrentLocation: getCurrentLocation,
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: _PathUtils.createPath,
    createHref: createHref,
    createLocation: createLocation
  };
};

exports.default = createHistory;

/***/ }),

/***/ "./node_modules/history/lib/createMemoryHistory.js":
/*!*********************************************************!*\
  !*** ./node_modules/history/lib/createMemoryHistory.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/lib/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

var _createHistory = __webpack_require__(/*! ./createHistory */ "./node_modules/history/lib/createHistory.js");

var _createHistory2 = _interopRequireDefault(_createHistory);

var _Actions = __webpack_require__(/*! ./Actions */ "./node_modules/history/lib/Actions.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var createStateStorage = function createStateStorage(entries) {
  return entries.filter(function (entry) {
    return entry.state;
  }).reduce(function (memo, entry) {
    memo[entry.key] = entry.state;
    return memo;
  }, {});
};

var createMemoryHistory = function createMemoryHistory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (Array.isArray(options)) {
    options = {
      entries: options
    };
  } else if (typeof options === 'string') {
    options = {
      entries: [options]
    };
  }

  var getCurrentLocation = function getCurrentLocation() {
    var entry = entries[current];
    var path = (0, _PathUtils.createPath)(entry);
    var key = void 0,
        state = void 0;

    if (entry.key) {
      key = entry.key;
      state = readState(key);
    }

    var init = (0, _PathUtils.parsePath)(path);
    return (0, _LocationUtils.createLocation)(_extends({}, init, {
      state: state
    }), undefined, key);
  };

  var canGo = function canGo(n) {
    var index = current + n;
    return index >= 0 && index < entries.length;
  };

  var go = function go(n) {
    if (!n) return;

    if (!canGo(n)) {
       true ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : undefined;
      return;
    }

    current += n;
    var currentLocation = getCurrentLocation(); // Change action to POP

    history.transitionTo(_extends({}, currentLocation, {
      action: _Actions.POP
    }));
  };

  var pushLocation = function pushLocation(location) {
    current += 1;
    if (current < entries.length) entries.splice(current);
    entries.push(location);
    saveState(location.key, location.state);
  };

  var replaceLocation = function replaceLocation(location) {
    entries[current] = location;
    saveState(location.key, location.state);
  };

  var history = (0, _createHistory2.default)(_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    pushLocation: pushLocation,
    replaceLocation: replaceLocation,
    go: go
  }));
  var _options = options,
      entries = _options.entries,
      current = _options.current;

  if (typeof entries === 'string') {
    entries = [entries];
  } else if (!Array.isArray(entries)) {
    entries = ['/'];
  }

  entries = entries.map(function (entry) {
    return (0, _LocationUtils.createLocation)(entry);
  });

  if (current == null) {
    current = entries.length - 1;
  } else {
    !(current >= 0 && current < entries.length) ?  true ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : undefined : void 0;
  }

  var storage = createStateStorage(entries);

  var saveState = function saveState(key, state) {
    return storage[key] = state;
  };

  var readState = function readState(key) {
    return storage[key];
  };

  return _extends({}, history, {
    canGo: canGo
  });
};

exports.default = createMemoryHistory;

/***/ }),

/***/ "./node_modules/history/lib/runTransitionHook.js":
/*!*******************************************************!*\
  !*** ./node_modules/history/lib/runTransitionHook.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var runTransitionHook = function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
     true ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : undefined;
  }
};

exports.default = runTransitionHook;

/***/ }),

/***/ "./node_modules/history/lib/useBasename.js":
/*!*************************************************!*\
  !*** ./node_modules/history/lib/useBasename.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _runTransitionHook = __webpack_require__(/*! ./runTransitionHook */ "./node_modules/history/lib/runTransitionHook.js");

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var useBasename = function useBasename(createHistory) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var history = createHistory(options);
    var basename = options.basename;

    var addBasename = function addBasename(location) {
      if (!location) return location;

      if (basename && location.basename == null) {
        if (location.pathname.toLowerCase().indexOf(basename.toLowerCase()) === 0) {
          location.pathname = location.pathname.substring(basename.length);
          location.basename = basename;
          if (location.pathname === '') location.pathname = '/';
        } else {
          location.basename = '';
        }
      }

      return location;
    };

    var prependBasename = function prependBasename(location) {
      if (!basename) return location;
      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
      var pname = object.pathname;
      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
      var pathname = normalizedBasename + normalizedPathname;
      return _extends({}, object, {
        pathname: pathname
      });
    }; // Override all read methods with basename-aware versions.


    var getCurrentLocation = function getCurrentLocation() {
      return addBasename(history.getCurrentLocation());
    };

    var listenBefore = function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        return (0, _runTransitionHook2.default)(hook, addBasename(location), callback);
      });
    };

    var listen = function listen(listener) {
      return history.listen(function (location) {
        return listener(addBasename(location));
      });
    }; // Override all write methods with basename-aware versions.


    var push = function push(location) {
      return history.push(prependBasename(location));
    };

    var replace = function replace(location) {
      return history.replace(prependBasename(location));
    };

    var createPath = function createPath(location) {
      return history.createPath(prependBasename(location));
    };

    var createHref = function createHref(location) {
      return history.createHref(prependBasename(location));
    };

    var createLocation = function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
    };

    return _extends({}, history, {
      getCurrentLocation: getCurrentLocation,
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation
    });
  };
};

exports.default = useBasename;

/***/ }),

/***/ "./node_modules/history/lib/useQueries.js":
/*!************************************************!*\
  !*** ./node_modules/history/lib/useQueries.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _queryString = __webpack_require__(/*! query-string */ "query-string");

var _runTransitionHook = __webpack_require__(/*! ./runTransitionHook */ "./node_modules/history/lib/runTransitionHook.js");

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/lib/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var defaultStringifyQuery = function defaultStringifyQuery(query) {
  return (0, _queryString.stringify)(query).replace(/%20/g, '+');
};

var defaultParseQueryString = _queryString.parse;
/**
 * Returns a new createHistory function that may be used to create
 * history objects that know how to handle URL queries.
 */

var useQueries = function useQueries(createHistory) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var history = createHistory(options);
    var stringifyQuery = options.stringifyQuery,
        parseQueryString = options.parseQueryString;
    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;
    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

    var decodeQuery = function decodeQuery(location) {
      if (!location) return location;
      if (location.query == null) location.query = parseQueryString(location.search.substring(1));
      return location;
    };

    var encodeQuery = function encodeQuery(location, query) {
      if (query == null) return location;
      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
      var queryString = stringifyQuery(query);
      var search = queryString ? '?' + queryString : '';
      return _extends({}, object, {
        search: search
      });
    }; // Override all read methods with query-aware versions.


    var getCurrentLocation = function getCurrentLocation() {
      return decodeQuery(history.getCurrentLocation());
    };

    var listenBefore = function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        return (0, _runTransitionHook2.default)(hook, decodeQuery(location), callback);
      });
    };

    var listen = function listen(listener) {
      return history.listen(function (location) {
        return listener(decodeQuery(location));
      });
    }; // Override all write methods with query-aware versions.


    var push = function push(location) {
      return history.push(encodeQuery(location, location.query));
    };

    var replace = function replace(location) {
      return history.replace(encodeQuery(location, location.query));
    };

    var createPath = function createPath(location) {
      return history.createPath(encodeQuery(location, location.query));
    };

    var createHref = function createHref(location) {
      return history.createHref(encodeQuery(location, location.query));
    };

    var createLocation = function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var newLocation = history.createLocation.apply(history, [encodeQuery(location, location.query)].concat(args));
      if (location.query) newLocation.query = (0, _LocationUtils.createQuery)(location.query);
      return decodeQuery(newLocation);
    };

    return _extends({}, history, {
      getCurrentLocation: getCurrentLocation,
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation
    });
  };
};

exports.default = useQueries;

/***/ }),

/***/ "./node_modules/koot/React/client-session-store.js":
/*!*********************************************************!*\
  !*** ./node_modules/koot/React/client-session-store.js ***!
  \*********************************************************/
/*! exports provided: save, addEventHandlerOnPageUnload, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventHandlerOnPageUnload", function() { return addEventHandlerOnPageUnload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./node_modules/koot/index.js");
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../defaults/defines */ "./node_modules/koot/defaults/defines.js");
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_filter_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/filter-state */ "./node_modules/koot/libs/filter-state.js");
/* harmony import */ var _libs_filter_state__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_libs_filter_state__WEBPACK_IMPORTED_MODULE_4__);





const configSessionStore = JSON.parse("false");
/** @type {Boolean} 当前是否可以/允许使用 sessionStore */

const able = (() => {
  if (true) return false;
  if (!window.sessionStorage) return false;
  if (!configSessionStore) return false;
  if (configSessionStore === true) return true;
  if (configSessionStore === 'all') return true;
  return Boolean(typeof configSessionStore === 'object' && !Array.isArray(configSessionStore));
})();
/**
 * 保存当前 state 到 sessionStorage
 * @void
 */


const save = () => {
  if (!able) return;
  /** @type {Object} 排除掉黑名单内的项目后的 state 对象 */

  const state = _libs_filter_state__WEBPACK_IMPORTED_MODULE_4___default()(___WEBPACK_IMPORTED_MODULE_2__["store"].getState());
  let saveState = {};

  if (configSessionStore === true || configSessionStore === 'all') {
    saveState = state;
  } else if (typeof configSessionStore === 'object' && !Array.isArray(configSessionStore)) {
    // 根据配置对象存储
    const parse = (obj, accumulatedKey = '') => {
      Object.keys(obj).forEach(key => {
        const currentAccumulatedKey = accumulatedKey + `[${JSON.stringify(key)}]`;

        if (typeof obj[key] === 'object') {
          parse(obj[key], currentAccumulatedKey);
        } else if (obj[key] === true) {
          const value = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(state, currentAccumulatedKey);
          if (typeof value !== 'undefined') lodash_set__WEBPACK_IMPORTED_MODULE_1___default()(saveState, currentAccumulatedKey, value);
        }
      });
    };

    parse(configSessionStore); // console.log(configSessionStore, state, saveState);
  }

  sessionStorage.setItem(_defaults_defines__WEBPACK_IMPORTED_MODULE_3__["sessionStoreKey"], JSON.stringify(saveState));
  return;
};
/**
 * 向 window.onunload 添加事件：保存 state
 * @void
 */

const addEventHandlerOnPageUnload = () => {
  if (!able) return;
  window.addEventListener('unload', save);
  return;
};
/**
 * 从 sessionStorage 中读取 state
 * @returns {Object} 存储的 state
 */

const load = () => {
  if (!able) return {};
  return JSON.parse(sessionStorage.getItem(_defaults_defines__WEBPACK_IMPORTED_MODULE_3__["sessionStoreKey"]) || '{}');
};

/***/ }),

/***/ "./node_modules/koot/React/client-update-page-info.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/React/client-update-page-info.js ***!
  \************************************************************/
/*! exports provided: default, getInjectedMetaTags, markInited */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInjectedMetaTags", function() { return getInjectedMetaTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markInited", function() { return markInited; });
/**
 * @typedef Pageinfo
 * @type {Object}
 * @property {string} [title] 标题
 * @property {Array<Object.<string, string>>} [metas] meta 标签信息，需要形式为 `{[name]: value}` 对象的数组
 */
// import isEqual from 'lodash/isEqual';

/**
 * 当前已注入的 meta 标签
 * @type {Array<HTMLElement>}
 */
let injectedMetaTags; // meta 标签区域结尾的 HTML 注释代码

let nodeCommentEnd;
let inited = false;
/** @type {Pageinfo} */

const infoToChange = {
  title: '',
  metas: []
};
let changeTimeout = undefined;
/**
 * _仅限客户端_
 *
 * 更新页面信息
 * @module
 * @param {string} title 新的标题
 * @param {Array<Object.<string, string>>} metas meta 标签信息，需要形式为 `{[name]: value}` 对象的数组
 */

/* harmony default export */ __webpack_exports__["default"] = ((title, metas = []) => {
  if (true) return;

  if ( true && !inited) {
    setTimeout(() => {
      inited = true;
    });
    return;
  } // 判断 & 追加即将修改的内容

  /*
  // 如果新 meta 不存在于已有的 meta 列表，添加
  metas.forEach(metaNew => {
      if (!infoToChange.metas.length) infoToChange.metas.push(metaNew);
      if (
          !infoToChange.metas.every(metaExist => {
              console.log(metaNew, metaExist, isEqual(metaNew, metaExist));
              return isEqual(metaNew, metaExist);
          })
      ) {
          console.log('PUSH');
          infoToChange.metas.push(metaNew);
      }
  });
  */
  // 如果当前没有信息，设为当前信息


  if (!infoToChange.title && (!Array.isArray(infoToChange.metas) || !infoToChange.metas.length)) {
    infoToChange.title = title;
    infoToChange.metas = metas;
  }

  if (changeTimeout) return;
  changeTimeout = setTimeout(() => {
    doUpdate();
    infoToChange.title = '';
    infoToChange.metas = [];
    changeTimeout = undefined;
  });
}); //

const doUpdate = () => {
  const {
    title,
    metas
  } = infoToChange; // 替换页面标题

  document.title = title; // 替换 metas

  const head = document.getElementsByTagName('head')[0];
  getInjectedMetaTags().forEach(el => head.removeChild(el));
  injectedMetaTags.forEach(el => {
    if (el && el.parentNode) el.parentNode.removeChild(el);
  });
  injectedMetaTags = metas.filter(meta => typeof meta === 'object').map(meta => {
    const el = document.createElement('meta');

    for (var key in meta) {
      el.setAttribute(key, meta[key]);
    } // el.setAttribute(__KOOT_INJECT_ATTRIBUTE_NAME__, '')


    if (nodeCommentEnd) {
      head.insertBefore(el, nodeCommentEnd);
    } else {
      head.appendChild(el);
    }

    return el;
  });
}; //

/**
 * 获取当前已注入的 meta 标签
 * @returns {Array<HTMLElement>}
 */


const getInjectedMetaTags = () => {
  if (!Array.isArray(injectedMetaTags)) {
    const head = document.getElementsByTagName('head')[0];
    injectedMetaTags = []; // 移除所有在 KOOT_METAS 里的 meta 标签
    // 采用 DOM 操作的初衷：如果使用 innerHTML 的字符串替换方法，浏览器可能会全局重新渲染一次，造成“闪屏”

    const childNodes = head.childNodes;
    let meetStart = false;
    let meetEnd = false;
    let i = 0;

    while (!meetEnd && childNodes[i] instanceof Node) {
      const node = childNodes[i];

      if (node.nodeType === Node.COMMENT_NODE) {
        if (node.nodeValue === "koot-inject-metas-start") meetStart = true;

        if (node.nodeValue === "koot-inject-metas-end") {
          meetEnd = true;
          nodeCommentEnd = node;
        }
      } else if (meetStart && node.nodeType === Node.ELEMENT_NODE && node.tagName === 'META') {
        injectedMetaTags.push(node);
      }

      i++;
    }
  }

  return injectedMetaTags;
};
/** _仅针对客户端_ 标记已初始化 */

const markInited = () => {
  inited = true;
};

/***/ }),

/***/ "./node_modules/koot/React/component-extender.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/React/component-extender.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./node_modules/koot/index.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _get_render_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-render-props */ "./node_modules/koot/React/get-render-props.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./node_modules/koot/React/styles.js");
/* harmony import */ var _client_update_page_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-update-page-info */ "./node_modules/koot/React/client-update-page-info.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./redux */ "./node_modules/koot/React/redux.js");
/* harmony import */ var _is_render_safe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./is-render-safe */ "./node_modules/koot/React/is-render-safe.js");
/* harmony import */ var _is_render_safe__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_is_render_safe__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _libs_ssr_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../libs/ssr/context */ "./node_modules/koot/libs/ssr/context.js");
/* harmony import */ var _libs_ssr_context__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_libs_ssr_context__WEBPACK_IMPORTED_MODULE_10__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import { hot } from 'react-hot-loader'
// import PropTypes from 'prop-types'



 //






 //
// 是否已挂载了组件

let everMounted = false; // const defaultPageInfo = {
//     title: '',
//     metas: []
// }

const styleMap = {};
/**
 * @type {Number}
 * _开发环境_
 * _服务器_
 * 使用该高阶组件的次数
 */

let devSSRConnectIndex = 0;
/**
 * 获取数据
 * @callback callbackFetchData
 * @param {Object} state 当前 state
 * @param {Object} renderProps 封装的同构 props
 * @param {Function} dispatch Redux dispatch
 * @returns {Promise}
 */

/**
 * 判断数据是否准备好
 * @callback callbackCheckLoaded
 * @param {Object} state 当前 state
 * @param {Object} renderProps 封装的同构 props
 * @returns {boolean}
 */

/**
 * 获取页面信息
 * @callback callbackGetPageInfo
 * @param {Object} state 当前 state
 * @param {Object} renderProps 封装的同构 props
 * @returns {Object}
 */

/**
 * 获取同构数据的执行方法
 * @param {Object} store
 * @param {Object} props renderProps
 * @returns {Promise}
 */

const doFetchData = (store, renderProps, funcFetch) => {
  // return new Promise((resolve) => resolve());
  if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_9___default()()) return  false ? undefined : undefined;
  const result = funcFetch(store.getState(), renderProps, store.dispatch); // if (result === true) {
  //     isDataPreloaded = true
  //     return new Promise(resolve => resolve())
  // }

  if (Array.isArray(result)) return Promise.all(result);
  if (result instanceof Promise) return result;
  return new Promise(resolve => resolve(result));
};
/**
 * 更新页面信息
 * @param {Object} store
 * @param {Object} props renderProps
 * @returns {Object} infos
 * @returns {String} infos.title
 * @returns {Array} infos.metas
 */


const doPageinfo = (store, props, pageinfo) => {
  if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_9___default()()) return {};
  const defaultPageInfo = {
    title: '',
    metas: []
  };
  if (typeof pageinfo !== 'function' && typeof pageinfo !== 'object') return defaultPageInfo;
  const state = store.getState();

  const infos = (() => {
    if (typeof pageinfo === 'object') return pageinfo;
    const infos = pageinfo(state, props);
    if (typeof infos !== 'object') return defaultPageInfo;
    return infos;
  })();

  const {
    title = defaultPageInfo.title,
    metas = defaultPageInfo.metas
  } = infos;

  if (state.localeId) {
    if (!metas.some(meta => {
      if (meta.name === 'koot-locale-id') {
        meta.content = state.localeId;
        return true;
      }

      return false;
    })) {
      metas.push({
        name: 'koot-locale-id',
        content: state.localeId
      });
    }
  }

  return {
    title,
    metas
  };
}; // console.log((typeof store === 'undefined' ? `\x1b[31m×\x1b[0m` : `\x1b[32m√\x1b[0m`) + ' store in [HOC] extend')

/**
 * 高阶组件/组件装饰器：组件扩展
 * @param {Object} options 选项
 * @param {boolean|Function} [options.connect] react-redux 的 connect() 的参数。如果为 true，表示使用 connect()，但不连接任何数据
 * @param {Object|callbackGetPageInfo} [options.pageinfo]
 * @param {Object} [options.data] 同构数据相关
 * @param {callbackFetchData} [options.data.fetch]
 * @param {callbackCheckLoaded} [options.data.check]
 * @param {Object} [options.styles] 组件 CSS 结果
 * @returns {Function} 封装好的 React 组件
 */


/* harmony default export */ __webpack_exports__["default"] = ((options = {}) => WrappedComponent => {
  // console.log((typeof store === 'undefined' ? `\x1b[31m×\x1b[0m` : `\x1b[32m√\x1b[0m`) + ' store in [HOC] extend run')
  const {
    connect: _connect = false,
    pageinfo,
    data: {
      fetch: _dataFetch,
      check: dataCheck,
      resetWhenUnmount: dataResetWhenUnmount
    } = {},
    styles: _styles,
    ssr = true // ttt
    // hot: _hot = true,
    // name

  } = options; // console.log('extend hoc run', { name, LocaleId })
  // 样式相关

  /** @type {Object} 经过 koot-css-loader 处理后的 css 文件的结果对象 */

  const styles = (!Array.isArray(_styles) ? [_styles] : _styles).filter(obj => typeof obj === 'object' && typeof obj.wrapper === 'string');
  /** @type {boolean} 是否有上述结果对象 */

  const hasStyles = Array.isArray(styles) && styles.length > 0; // console.log({ ttt, hasStyles, styles })

  /** @type {boolean} 是否有 pageinfo 对象 */

  const hasPageinfo = typeof pageinfo === 'function' || typeof pageinfo === 'object'; // 同构数据相关

  /** @type {boolean} 同构数据是否已经获取成功 */
  // let isDataPreloaded = false

  /** @type {Function} 获取同构数据 */

  const dataFetch = typeof options.data === 'function' || Array.isArray(options.data) ? options.data : typeof _dataFetch === 'function' || Array.isArray(_dataFetch) ? _dataFetch : undefined; // 装饰组件

  class KootReactComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    //
    // static contextType = StyleMapContext
    //
    clientUpdatePageInfo(to) {
      if (true) return;
      if (!hasPageinfo) return;
      const {
        title,
        metas
      } = typeof to === 'function' ? doPageinfo(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])(), this.getRenderProps(), to) : to || doPageinfo(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])(), this.getRenderProps(), pageinfo);
      Object(_client_update_page_info__WEBPACK_IMPORTED_MODULE_7__["default"])(title || "sp.diablohu.com", metas);
    }

    getRenderProps() {
      return Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(this.props);
    } //


    //
    constructor(props
    /*, context*/
    ) {
      super(props
      /*, context*/
      );
      /**
       * _服务器端_
       * 将组件注册到同构渲染对象中
       */

      _defineProperty(this, "state", {
        loaded: typeof dataCheck === 'function' ? dataCheck(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])().getState(), this.getRenderProps()) : undefined
      });

      _defineProperty(this, "mounted", false);

      _defineProperty(this, "kootClassNames", []);

      if (true) {
        let SSR = Object(_libs_ssr_context__WEBPACK_IMPORTED_MODULE_10__["get"])();

        if (SSR[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_4__["needConnectComponents"]]) {
          if (false) {}

          if (Array.isArray(SSR.connectedComponents)) SSR.connectedComponents.unshift(KootComponent);
        }

        SSR = undefined;
      }

      if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_9___default()()) return;

      if (hasStyles) {
        this.kootClassNames = styles.map(obj => obj.wrapper);
        Object(_styles__WEBPACK_IMPORTED_MODULE_6__["append"])(this.getStyleMap(), styles); // console.log('----------')
        // console.log('styles', styles)
        // console.log('theStyles', theStyles)
        // console.log('this.classNameWrapper', this.classNameWrapper)
        // console.log('----------')
      }
    }
    /**
     * 获取 styleMap
     * - 服务器端: 返回全局常量中的对照表
     * - 客户端: 直接返回本文件内的 styleMap
     */


    getStyleMap()
    /*context*/
    {
      // console.log('extend', { LocaleId })
      if (true) return Object(_libs_ssr_context__WEBPACK_IMPORTED_MODULE_10__["get"])().styleMap;
      return styleMap; // return context
    } //


    componentDidUpdate(prevProps) {
      // if (
      //     typeof prevProps.location === 'object' &&
      //     typeof this.props.location === 'object' &&
      //     prevProps.location.pathname !== this.props.location.pathname
      // )
      this.clientUpdatePageInfo();
    }

    componentDidMount() {
      this.mounted = true;

      if (!this.state.loaded && typeof dataFetch !== 'undefined') {
        doFetchData(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])(), this.getRenderProps(), dataFetch).then(() => {
          if (!this.mounted) return;
          this.setState({
            loaded: true
          });
        });
      }

      this.clientUpdatePageInfo();

      if (hasPageinfo && this.mounted) {
        setTimeout(() => {
          if (this && this.mounted) {
            this.clientUpdatePageInfo();
          }
        }, 500);
      }

      if (everMounted) {} else {
        everMounted = true;
      }
    }

    componentWillUnmount() {
      this.mounted = false;

      if (hasStyles) {
        Object(_styles__WEBPACK_IMPORTED_MODULE_6__["remove"])(this.getStyleMap(), styles);
      }

      if (typeof dataResetWhenUnmount === 'object') {
        setTimeout(() => {
          this.props.dispatch({
            type: _redux__WEBPACK_IMPORTED_MODULE_8__["RESET_CERTAIN_STATE"],
            data: dataResetWhenUnmount
          });
        });
      }
    } //


    render() {
      // console.log('styles', styles)
      // console.log('this', this)
      // console.log('this.kootClassNames', this.kootClassNames)
      // console.log('this.props.className', this.props.className)
      if (true) {
        if (ssr === false) return null;
        if (ssr !== true) return ssr;
      }

      if (false) {}

      const props = Object.assign({}, this.props, {
        className: this.kootClassNames.concat(this.props.className).join(' ').trim(),
        'data-class-name': this.kootClassNames.join(' ').trim()
      });
      if (hasPageinfo) props.updatePageinfo = this.clientUpdatePageInfo.bind(this); // if (__SERVER__) console.log('extender this.state.loaded', this.state.loaded)

      if (typeof dataFetch !== 'undefined' && typeof dataCheck === 'function') props.loaded = this.state.loaded; // if (typeof props.forwardedRef !== 'undefined') {
      //     console.log(props.forwardedRef);
      // }

      if (typeof props.kootForwardedRef !== 'undefined') {
        props.forwardedRef = props.kootForwardedRef;
        delete props.kootForwardedRef;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, props);
    }

  }

  _defineProperty(KootReactComponent, "onServerRenderHtmlExtend", ({
    store,
    renderProps = {}
  }) => {
    const {
      title,
      metas
    } = doPageinfo(store, Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromServerProps"])(renderProps), pageinfo);
    return {
      title,
      metas
    };
  });

  if (typeof dataFetch !== 'undefined') {
    KootReactComponent.onServerRenderStoreExtend = ({
      store,
      renderProps
    }) => doFetchData(store, Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromServerProps"])(renderProps), dataFetch);
  } // if (_hot && __DEV__ && __CLIENT__) {
  //     const { hot, setConfig } = require('react-hot-loader')
  //     setConfig({ logLevel: 'debug' })
  //     KootComponent = hot(module)(KootComponent)
  // }
  // if (typeof styles === 'object' &&
  //     typeof styles.wrapper === 'string'
  // ) {
  //     KootComponent = ImportStyle(styles)(KootComponent)
  // }


  let KootComponent = hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(KootReactComponent, WrappedComponent); // if (typeof styles === 'object' &&
  //     typeof styles.wrapper === 'string'
  // ) {
  //     KootComponent = ImportStyle(styles)(KootComponent)
  // }

  if (_connect === true) {
    KootComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(() => ({}), undefined, undefined, {
      forwardRef: true
    })(KootComponent);
  } else if (typeof _connect === 'function') {
    KootComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(_connect, undefined, undefined, {
      forwardRef: true
    })(KootComponent);
  } else if (Array.isArray(_connect)) {
    if (typeof _connect[3] !== 'object') _connect[3] = {};
    _connect[3].forwardRef = true;
    KootComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(..._connect)(KootComponent);
  } // return KootComponent;


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => {
    if (props.forwardedRef) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(KootComponent, _extends({}, props, {
      kootForwardedRef: props.forwardedRef
    }));
    if (ref) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(KootComponent, _extends({}, props, {
      kootForwardedRef: ref
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(KootComponent, props);
  });
});

/***/ }),

/***/ "./node_modules/koot/React/get-render-props.js":
/*!*****************************************************!*\
  !*** ./node_modules/koot/React/get-render-props.js ***!
  \*****************************************************/
/*! exports provided: fromServerProps, fromComponentProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromServerProps", function() { return fromServerProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromComponentProps", function() { return fromComponentProps; });
/**
 * 基于 serverProps 返回同构 props
 * @param {Object} serverProps 
 * @return {Object}
 */
const fromServerProps = (serverProps = {}) => {
  // console.log(' ')
  // console.log('----------')
  // console.log(serverProps)
  // console.log('----------')
  // console.log(' ')
  return { ...serverProps
  };
};
/**
 * 基于组件 props 返回同构 props
 * @param {Object} componentProps 
 * @return {Object}
 */


const fromComponentProps = (componentProps = {}) => {
  // console.log(' ')
  // console.log('----------')
  // console.log(componentProps)
  // console.log('----------')
  // console.log(' ')
  return { ...componentProps
  };
};



/***/ }),

/***/ "./node_modules/koot/React/history.js":
/*!********************************************!*\
  !*** ./node_modules/koot/React/history.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KOOT_CLIENT_REQUIRE_CREATE_HISTORY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __KOOT_CLIENT_REQUIRE_CREATE_HISTORY__ */ "./node_modules/history/lib/createMemoryHistory.js");
/* harmony import */ var _KOOT_CLIENT_REQUIRE_CREATE_HISTORY___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_KOOT_CLIENT_REQUIRE_CREATE_HISTORY___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history/lib/PathUtils */ "./node_modules/history/lib/PathUtils.js");
/* harmony import */ var history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2__);
// import history from "__KOOT_CLIENT_REQUIRE_HISTORY__"



/**
 * History Enhancer: use basename
 * 
 * Original useBasename enhancer from history also override all read methods
 * `getCurrentLocation` `listenBefore` `listen`
 * But as Diablohu tested, when read methods overrided, if the route matched used async method to get component, would fail
 * that rendering blank page and no route match event fired
 * So we only overrid write methods here. And modify the first level path in routes object to `:localeId`
 * 
 * @param {Function} createHistory
 * @returns {Object} History
 */

const kootUseBasename = createHistory => (options = {}) => {
  const history = createHistory(options);
  const {
    basename
  } = options;

  const addBasename = location => {
    if (!location) return location;

    if (basename && location.basename == null) {
      if (location.pathname.toLowerCase().indexOf(basename.toLowerCase()) === 0) {
        location.pathname = location.pathname.substring(basename.length);
        location.basename = basename;
        if (location.pathname === '') location.pathname = '/';
      } else {
        location.basename = '';
      }
    }

    return location;
  };

  const prependBasename = location => {
    if (!basename) return location;
    const object = typeof location === 'string' ? Object(history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__["parsePath"])(location) : location;
    const pname = object.pathname;
    const normalizedBasename = basename.slice(-1) === '/' ? basename : `${basename}/`;
    const normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
    const pathname = normalizedBasename + normalizedPathname;
    return { ...object,
      pathname
    };
  }; // Override all write methods with basename-aware versions.


  const push = location => history.push(prependBasename(location));

  const replace = location => history.replace(prependBasename(location));

  const createPath = location => history.createPath(prependBasename(location));

  const createHref = location => history.createHref(prependBasename(location));

  const createLocation = (location, ...args) => addBasename(history.createLocation(prependBasename(location), ...args));

  return { ...history,
    push,
    replace,
    createPath,
    createHref,
    createLocation
  };
};

let historyClient;

const history = (() => {
  if (false) {}

  if (true) {
    return undefined;
  }
})();

/* harmony default export */ __webpack_exports__["default"] = (history);

/***/ }),

/***/ "./node_modules/koot/React/inject/_cache-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/React/inject/_cache-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * inject 缓存键值
 */
module.exports = {
  styles: 'STYLES',
  scriptsRunFirst: 'SCRIPTS_RUN_FIRST',
  scriptsInBody: 'SCRIPTS_IN_BODY',
  uriServiceWorker: 'URI_SERVICE_WORKER'
};

/***/ }),

/***/ "./node_modules/koot/React/inject/htmlLang.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/React/inject/htmlLang.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 注入: html 标签上的 lang 属性
 * @param {String} localeId 当前语种 ID
 * @returns {String}
 */
module.exports = localeId => localeId ? ` lang="${localeId}"` : '';

/***/ }),

/***/ "./node_modules/koot/React/inject/is-need-inject-critical.js":
/*!*******************************************************************!*\
  !*** ./node_modules/koot/React/inject/is-need-inject-critical.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 检查 template 是否需要自动添加针对 critical 的注入
 * @param {String} template
 * @returns {Object}
 */
module.exports = (template = '') => {
  return {
    styles: !/(content|pathname)\(['"]critical\.css['"]\)/.test(template),
    scripts: !/(content|pathname)\(['"]critical\.js['"]\)/.test(template)
  };
};

/***/ }),

/***/ "./node_modules/koot/React/inject/metas.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/React/inject/metas.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fs = __webpack_require__(/*! fs */ "fs");

const {
  dll
} = __webpack_require__(/*! ../../defaults/dev-request-uri */ "./node_modules/koot/defaults/dev-request-uri.js");

const {
  compilationKeyHtmlMetaTags
} = __webpack_require__(/*! ../../defaults/before-build */ "./node_modules/koot/defaults/before-build.js");
/**
 * 注入: meta 标签 HTML 代码，以及其他的 <head> 标签中的注入
 * @param {Object} options
 * @param {Object} [options.manifest]
 * @param {String} [options.metaHtml]
 * @param {String} [options.localeId]
 * @param {Object} [options.compilation]
 * @returns {String}
 */


module.exports = ({
  metaHtml = '',
  manifest = {}
}) => {
  let r = getDevExtra();

  if (false) {} else {
    r += `<!--${"koot-inject-metas-start"}-->${metaHtml}<!--${"koot-inject-metas-end"}-->`;
  }

  r += manifest[compilationKeyHtmlMetaTags] || '';
  return r;
};
/**
 * [开发环境] 额外内容
 */


const getDevExtra = () => {
  if (true) return ''; // 判断是否存在 dll 文件，如果存在，在此引入

  const {
    KOOT_DEV_DLL_FILE_CLIENT: fileDllClient
  } = process.env;
  if (fileDllClient && fs.existsSync(fileDllClient)) return `<script type="text/javascript" src="${dll}"></script>`;
  return '';
};

/***/ }),

/***/ "./node_modules/koot/React/inject/scripts.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/React/inject/scripts.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "path");

const {
  chunkNameClientRunFirst,
  scriptTagEntryAttributeName,
  thresholdScriptRunFirst
} = __webpack_require__(/*! ../../defaults/before-build */ "./node_modules/koot/defaults/before-build.js");

const defaultEntrypoints = __webpack_require__(/*! ../../defaults/entrypoints */ "./node_modules/koot/defaults/entrypoints.js");

const {
  scopeNeedTransformPathname
} = __webpack_require__(/*! ../../defaults/defines-service-worker */ "./node_modules/koot/defaults/defines-service-worker.js");

const readClientFile = __webpack_require__(/*! ../../utils/read-client-file */ "./node_modules/koot/utils/read-client-file.js");

const getClientFilePath = __webpack_require__(/*! ../../utils/get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");

const getSSRStateString = __webpack_require__(/*! ../../libs/get-ssr-state-string */ "./node_modules/koot/libs/get-ssr-state-string.js");

const getSwScopeFromEnv = __webpack_require__(/*! ../../libs/get-sw-scope-from-env */ "./node_modules/koot/libs/get-sw-scope-from-env.js");

const {
  scriptsRunFirst,
  scriptsInBody,
  uriServiceWorker
} = __webpack_require__(/*! ./_cache-keys */ "./node_modules/koot/React/inject/_cache-keys.js");

let isSPAi18nEnabled = false;
const SPAi18nNeedWaiting = false;
/**
 * 注入: JavaScript 代码
 * @param {Object} options
 * @param {Boolean} [options.needInjectCritical]
 * @param {Object} [options.injectCache]
 * @param {Object} [options.entrypoints]
 * @param {String} [options.localeId]
 * @param {Object} [options.localeFileMap]
 * @param {string} [options.defaultLocaleId]
 * @param {String} [options.reduxHtml]
 * @param {Object} [options.compilation]
 * @param {Object} [options.SSRState]
 * @returns {String}
 */

module.exports = ({
  needInjectCritical,
  injectCache,
  entrypoints,
  localeId,
  localeFileMap,
  defaultLocaleId,
  reduxHtml,
  SSRState = {},
  compilation
}) => {
  const ENV = "prod";
  const isDev = Boolean(ENV === 'dev' ||  true && false); // const isProd = !isDev;

  const isSPA = Boolean("isomorphic" === 'spa');
  /** @type {boolean} 启用多语言的 SPA */

  isSPAi18nEnabled = Boolean(isSPA && typeof localeFileMap === 'object' && Object.keys(localeFileMap).length && defaultLocaleId); // SPAi18nNeedWaiting = Boolean(isSPAi18nEnabled /* && isDev*/);

  if (isDev || typeof injectCache[scriptsRunFirst] === 'undefined') {
    const filename = `${chunkNameClientRunFirst}.js`;
    const name = '*run-first';

    if (isDev) {
      injectCache[scriptsRunFirst] = combineFilePaths(name, filename, localeId);
    } else {
      const content = scriptTagsFromContent(name, filename, localeId, compilation);

      if (content.length > thresholdScriptRunFirst
      /* * (isSPAi18nEnabled ? 0 : 1)*/
      ) {
          injectCache[scriptsRunFirst] = combineFilePaths(name, filename, localeId);
        } else {
        injectCache[scriptsRunFirst] = content;
      }
    }
  }

  if (isDev || typeof injectCache[scriptsInBody] === 'undefined') {
    let r = ''; // 入口: critical

    if (needInjectCritical && Array.isArray(entrypoints.critical)) {
      r += entrypoints.critical.filter(file => path.extname(file) === '.js').map(file => {
        if (isDev) {
          // return `<script type="text/javascript" src="${getClientFilePath(true, file)}"></script>`;
          return combineFilePaths('critical', true, file);
        }

        return scriptTagsFromContent('critical', true, file);
      }).join('');
    } // 其他默认入口
    // console.log('defaultEntrypoints', defaultEntrypoints)
    // console.log('entrypoints', entrypoints)


    defaultEntrypoints.forEach(key => {
      if (Array.isArray(entrypoints[key])) {
        r += entrypoints[key].filter(file => /\.(js|jsx|mjs|ejs)$/.test(file)).map(file => {
          // console.log(file)
          // if (isDev)
          // return `<script type="text/javascript" src="${getClientFilePath(true, file)}" defer></script>`
          // return `<script type="text/javascript" src="${getClientFilePath(
          //     true,
          //     file
          // )}" defer></script>`;
          return combineFilePaths(key, true, file);
        }).join('');
      }
    }); // 如果设置了 PWA 自动注册 Service-Worker，在此注册

    const pwaAuto =  true ? JSON.parse("true") : undefined; // console.log({
    //     pwaAuto,
    //     'injectCache[uriServiceWorker]': injectCache[uriServiceWorker]
    // });

    if (pwaAuto && ( false || typeof injectCache[uriServiceWorker] === 'string')) {
      const scope = getSwScopeFromEnv();
      r += `<script id="__koot-pwa-register-sw" type="text/javascript">` + // if (isProd) {
      `if ('serviceWorker' in navigator) {` + `window.addEventListener('load', function() {` + // + `navigator.serviceWorker.register("${injectCache[uriServiceWorker]}?koot=${process.env.KOOT_VERSION}",`
      `navigator.serviceWorker.register("${injectCache[uriServiceWorker] || JSON.parse("\"/service-worker.js\"")}?koot=0.12"` + (scope ? `,{scope: ${scope === scopeNeedTransformPathname ? `location.pathname` : `'${scope}'`}}` : '') + `)` + `.catch(err => {console.log('👩‍💻 Service Worker SUPPORTED. ERROR', err)})` + `});` + `}else{console.log('👩‍💻 Service Worker not supported!')}` + // } else if (isDev) {
      //     r += `console.log('👩‍💻 No Service Worker for DEV mode.')`;
      // }
      `</script>`;
    }

    injectCache[scriptsInBody] = r;
  }

  if (isSPAi18nEnabled) {
    return `<script type="text/javascript" ${scriptTagEntryAttributeName}="*run-first-spa-locales">` + `window.__KOOT_SPA_LOCALE_FILE_MAP__ = ${JSON.stringify(localeFileMap)};` + (SPAi18nNeedWaiting ? `window.__KOOT_SCRIPTS__ = {` + `addAfterLocale: function(name, src) {` + `if (` + `window.__KOOT_LOCALEID__ && ` + `typeof window.__KOOT_SSR_STATE__ === 'object' && ` + `typeof window.__KOOT_SSR_STATE__.locales === 'object'` + `) {` + `var fjs = document.getElementsByTagName('script')[0];` + `var js = document.createElement('script');` + `js.setAttribute("${scriptTagEntryAttributeName}", name);` + `js.setAttribute('defer', '');` + `js.onerror = function(e) {` + `console.error(e);` + `throw new Error(` + `'Loading javascript file ('+src+') fail!'` + `);` + `};` + `js.src = src;` + `fjs.parentNode.insertBefore(js, fjs);` + `return;` + `}` + `console.warn(name, src, window.__KOOT_LOCALEID__);` + `return setTimeout(() => {` + `window.__KOOT_SCRIPTS__.addAfterLocale(name, src);` + `}, 10);` + `}` + `};` : '') + `</script>` + // getClientRunFirstJS(localeId, compilation) +
    injectCache[scriptsRunFirst] + injectCache[scriptsInBody];
  }

  return `<script type="text/javascript">` + (reduxHtml ? reduxHtml : `window.__REDUX_STATE__ = {};`) + `window.__KOOT_LOCALEID__ = "${SSRState.localeId || ''}";` + `window.__KOOT_SSR_STATE__ = ${getSSRStateString(SSRState)};` + `</script>` + // getClientRunFirstJS(localeId, compilation) +
  injectCache[scriptsRunFirst] + injectCache[scriptsInBody];
};
/**
 * 返回引用地址的 script 标签
 * 如果有多个结果，会返回包含多个标签的 HTML 结果
 * @param {string} name 入口名/标识符
 * @param {...any} args `utils/get-client-file-path` 对应的参数
 * @returns {String} 整合的 HTML 结果
 */


const combineFilePaths = (name, ...args) => {
  let pathnames = getClientFilePath(...args);
  if (!Array.isArray(pathnames)) pathnames = [pathnames];

  if (SPAi18nNeedWaiting && name !== '*run-first') {
    return pathnames.map((pathname, index) => `<script type="text/javascript">` + `window.__KOOT_SCRIPTS__.addAfterLocale("${name}", "${pathname}")` + `</script>`).join('');
  }

  return pathnames.map(pathname => `<script type="text/javascript" src="${pathname}" defer ${scriptTagEntryAttributeName}="${name}"></script>`).join('');
};
/**
 * 返回 script 标签，标签内容为源代码字符串
 * 如果有多个结果，会返回包含多个标签的 HTML 结果
 * @param {string} name 入口名/标识符
 * @param {...any} args `utils/read-client-file` 对应的参数
 * @returns {String} 整合的 HTML 结果
 */


const scriptTagsFromContent = (name, ...args) => `<script type="text/javascript" ${scriptTagEntryAttributeName}="${name}">${readClientFile(...args)}</script>`;

/***/ }),

/***/ "./node_modules/koot/React/inject/styles.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/React/inject/styles.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  chunkNameExtractCss,
  chunkNameExtractCssForImport,
  styleTagGlobalAttributeName,
  thresholdStylesExtracted
} = __webpack_require__(/*! ../../defaults/before-build */ "./node_modules/koot/defaults/before-build.js");

const readClientFile = __webpack_require__(/*! ../../utils/read-client-file */ "./node_modules/koot/utils/read-client-file.js");

const getClientFilePath = __webpack_require__(/*! ../../utils/get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");

const {
  styles
} = __webpack_require__(/*! ./_cache-keys */ "./node_modules/koot/React/inject/_cache-keys.js");
/**
 * 注入: CSS 代码
 * @param {Object} options
 * @param {Boolean} [options.needInjectCritical]
 * @param {Object} [options.injectCache]
 * @param {String} [options.stylesHtml]
 * @param {String} [options.localeId]
 * @param {Object} [options.filemap]
 * @param {String} [options.compilation]
 * @returns {String}
 */


module.exports = ({
  // needInjectCritical,
  injectCache,
  // filemap,
  stylesHtml,
  localeId,
  compilation
}) => {
  if (typeof injectCache[styles] === 'undefined') {
    injectCache[styles] = getExtracted(localeId, compilation);

    if (false) {}
  } // if (needInjectCritical && typeof filemap['critical.css'] === 'string') {
  //     injectCache.styles += getCritical()
  // }


  return (injectCache[styles] || '') + stylesHtml;
}; // const getCritical = () => {
//     if (process.env.WEBPACK_BUILD_ENV === 'dev') {
//         return `<link id="__koot-critical-styles" media="all" rel="stylesheet" href="${getClientFilePath('critical.css')}" />`
//     }
//     return `<style id="__koot-critical-styles" type="text/css">${readClientFile('critical.css')}</style>`
// }


const getExtracted = (localeId, compilation) => {
  const filename = `${chunkNameExtractCss}.css`;

  if (false) {}

  const content = readClientFile(filename, localeId, compilation); // 如果内容大于 50k

  if (content.length > thresholdStylesExtracted) {
    if (false) {} else {
      return combineFilePaths(filename, localeId);
    } // return `<link id="__koot-extracted-styles" media="all" rel="stylesheet" href="${
    //     process.env.WEBPACK_BUILD_TYPE === 'spa'
    //         ? getClientFilePath(
    //               `${chunkNameExtractCssForImport}.css`,
    //               localeId
    //           )
    //         : getClientFilePath(filename, localeId)
    // }" />`;

  }

  return `<style id="__koot-extracted-styles" type="text/css" ${styleTagGlobalAttributeName}>${content}</style>`;
}; // const functionNameLinkOnLoad = '__KOOT_GLOBAL_STYLE_ON_LOAD__';

/**
 * 返回 link 标签
 * 如果有多个结果，会返回包含多个标签的 HTML 结果
 * @param {...any} args `utils/get-client-file-path` 对应的参数
 * @returns {String} 整合的 HTML 结果
 */


const combineFilePaths = (...args) => {
  let pathnames = getClientFilePath(...args);
  if (!Array.isArray(pathnames)) pathnames = [pathnames];
  return pathnames.map(pathname => `<link id="__koot-extracted-styles" media="all" rel="stylesheet" href="${pathname}" ${styleTagGlobalAttributeName} />`).join('');
};

/***/ }),

/***/ "./node_modules/koot/React/is-render-safe.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/React/is-render-safe.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  get: getSSRContext
} = __webpack_require__(/*! ../libs/ssr/context */ "./node_modules/koot/libs/ssr/context.js");

const {
  needConnectComponents
} = __webpack_require__(/*! ../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/**
 * 当前执行和渲染有关的操作是否安全
 * - 客户端: 永远安全
 * - 服务器端: SSR `dataToStore` 之前不安全，之后安全
 * @returns {boolean}
 */


module.exports = () => !Boolean( true && getSSRContext()[needConnectComponents]);

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/actionType.js":
/*!*****************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/actionType.js ***!
  \*****************************************************************/
/*! exports provided: LOCATION_UPDATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION_UPDATE", function() { return LOCATION_UPDATE; });
const LOCATION_UPDATE = '@@KOOT@@LOCATION_UPDATE';

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/actions.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/actions.js ***!
  \**************************************************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./node_modules/koot/React/realtime-location/actionType.js");

function update(location) {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__["LOCATION_UPDATE"],
    location
  };
}

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/api.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/api.js ***!
  \**********************************************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions.js */ "./node_modules/koot/React/realtime-location/actions.js");

const update = location => dispatch => {
  return dispatch(_actions_js__WEBPACK_IMPORTED_MODULE_0__["update"](location));
};

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/index.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/index.js ***!
  \************************************************************/
/*! exports provided: LOCATION_UPDATE, reducer, update, REALTIME_LOCATION_REDUCER_NAME, actionUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REALTIME_LOCATION_REDUCER_NAME", function() { return REALTIME_LOCATION_REDUCER_NAME; });
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./node_modules/koot/React/realtime-location/actionType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOCATION_UPDATE", function() { return _actionType__WEBPACK_IMPORTED_MODULE_0__["LOCATION_UPDATE"]; });

/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/koot/React/realtime-location/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./node_modules/koot/React/realtime-location/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["update"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/koot/React/realtime-location/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionUpdate", function() { return _actions__WEBPACK_IMPORTED_MODULE_3__["update"]; });





const REALTIME_LOCATION_REDUCER_NAME = 'realtimeLocation';


/***/ }),

/***/ "./node_modules/koot/React/realtime-location/reducer.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/reducer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType.js */ "./node_modules/koot/React/realtime-location/actionType.js");

const initialState = {};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _actionType_js__WEBPACK_IMPORTED_MODULE_0__["LOCATION_UPDATE"]:
      return action.location;
  }

  return state;
});

/***/ }),

/***/ "./node_modules/koot/React/redux.js":
/*!******************************************!*\
  !*** ./node_modules/koot/React/redux.js ***!
  \******************************************/
/*! exports provided: RESET_CERTAIN_STATE, reducers, initialState, middlewares, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CERTAIN_STATE", function() { return RESET_CERTAIN_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "middlewares", function() { return middlewares; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-redux */ "react-router-redux");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _realtime_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./realtime-location */ "./node_modules/koot/React/realtime-location/index.js");
/* harmony import */ var _ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ReactApp/server/redux */ "./node_modules/koot/ReactApp/server/redux.js");
/* harmony import */ var _i18n_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../i18n/redux */ "./node_modules/koot/i18n/redux/index.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./history */ "./node_modules/koot/React/history.js");
/* harmony import */ var _client_session_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client-session-store */ "./node_modules/koot/React/client-session-store.js");







 // import history from "__KOOT_CLIENT_REQUIRE_HISTORY__"


 // const getHistory = () => {
//     if (__SPA__) {
//         return require('react-router/lib/hashHistory')
//     }
//     return require('react-router/lib/browserHistory')
// }

/******************************************************************************
 * ┌─┐┌─┐┌┐┌┌─┐┌┬┐┌─┐┌┐┌┌┬┐┌─┐
 * │  │ ││││└─┐ │ ├─┤│││ │ └─┐
 * └─┘└─┘┘└┘└─┘ ┴ ┴ ┴┘└┘ ┴ └─┘
 *****************************************************************************/

const RESET_CERTAIN_STATE = '@@KOOT@@RESET_CERTAIN_STATE';
/******************************************************************************
 * ┌─┐┌─┐┌─┐┌─┐┌┐┌┌┬┐┬┌─┐┬  ┌─┐
 * ├┤ └─┐└─┐├┤ │││ │ │├─┤│  └─┐
 * └─┘└─┘└─┘└─┘┘└┘ ┴ ┴┴ ┴┴─┘└─┘
 *****************************************************************************/

/**
 * @type {Array}
 */

const reducers = {
  // 路由状态扩展
  routing: react_router_redux__WEBPACK_IMPORTED_MODULE_2__["routerReducer"],
  // 目的：新页面请求处理完成后再改变URL
  [_realtime_location__WEBPACK_IMPORTED_MODULE_4__["REALTIME_LOCATION_REDUCER_NAME"]]: _realtime_location__WEBPACK_IMPORTED_MODULE_4__["reducer"],
  // 对应服务器生成的store
  [_ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_5__["SERVER_REDUCER_NAME"]]: _ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_5__["serverReducer"]
};

if (_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7___default()()) {
  reducers.localeId = _i18n_redux__WEBPACK_IMPORTED_MODULE_6__["reducerLocaleId"]; // reducers.locales = i18nReducerLocales
}
/**
 * @type {Object}
 */


const initialState = (() => {
  if (false) {}
  if (true) return {};
})();
/**
 * @type {Array}
 */

const middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, Object(react_router_redux__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(_history__WEBPACK_IMPORTED_MODULE_8__["default"])]; // const enhancerClientModifyState = createStore => (
//     reducer,
//     preloadedState,
//     enhancer
// ) => {
//     const store = createStore(reducer, preloadedState, enhancer);
//     console.log({ store, state: store.getState() });
//     return store;
// };
// const rootReducerClientResetCertainState = (state, action) => {
//     const reset = (data, prefix = '') => {
//         for (const [key, value] of Object.entries(data)) {
//             const newKey = prefix ? `${prefix}.${key}` : key;
//             if (
//                 typeof value === 'object' &&
//                 typeof state[key] === 'object' &&
//                 !Array.isArray(state[key])
//             ) {
//                 return reset(value, newKey);
//             } else if (value === true) {
//                 console.log(newKey);
//             }
//         }
//     };
//     if (
//         __CLIENT__ &&
//         action.type === RESET_CERTAIN_STATE &&
//         typeof action.data === 'object'
//     ) {
//         reset(action.data);
//     }
// };

/**
 * 创建 redux store
 * - _注_: 与 redux 提供的 `createStore` 方法略有不同，仅需提供项目所用的 reducer 对象和中间件列表，**不需要**初始 state 对象
 * @param {Object|Function} appReducers 项目使用的 reducer，可为 `ReducersMapObject` (形式为 Object 的列表)，也可以为 `Reducer` (reducer 函数)
 * @param {Function[]} appMiddlewares 项目的中间件列表
 * @param {Function[]} appEnhancers 项目的 store 增强函数 (enhancer) 列表
 * @returns {Object} redux store
 */

const createStore = (appReducer, appMiddlewares = [], appEnhancers = []) => {
  // const toCompose = [
  //     reduxApplyMiddleware(...middlewares.concat(appMiddlewares))
  // ];
  // if (__CLIENT__) toCompose.push(enhancerClientModifyState);
  const projectReducer = (() => {
    if (typeof appReducer === 'function') {
      const kootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({ ...reducers
      });
      return (state, action) => {
        const {
          appState,
          kootState
        } = sliceStateForReducers(state);
        return { ...appReducer(appState, action),
          ...kootReducer(kootState, action)
        };
      };
    } else if (typeof appReducer === 'object' && !Array.isArray(appReducer)) {
      return Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({ ...appReducer,
        ...reducers
      });
    }

    return Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({ ...reducers
    });
  })();

  if (!Array.isArray(appEnhancers) && appEnhancers) appEnhancers = [appEnhancers];else if (!appEnhancers) appEnhancers = [];
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(projectReducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares.concat(appMiddlewares)), ...appEnhancers));
};
/******************************************************************************
 * ┬ ┬┌─┐┬  ┌─┐┌─┐┬─┐┌─┐
 * ├─┤├┤ │  ├─┘├┤ ├┬┘└─┐
 * ┴ ┴└─┘┴─┘┴  └─┘┴└─└─┘
 *****************************************************************************/

/**
 * 将当前 state 拆分为 _appState_ 和 _kootState_
 * @param {Object} state
 * @returns {Object} { appState, kootState }
 */

const sliceStateForReducers = state => {
  const appState = {};
  const kootState = {};
  const keysForKootReducer = Object.keys(reducers);
  Object.keys(state).forEach(key => {
    if (keysForKootReducer.includes(key)) {
      kootState[key] = state[key];
    } else {
      appState[key] = state[key];
    }
  });
  return {
    appState,
    kootState
  };
};

/***/ }),

/***/ "./node_modules/koot/React/redux/reset-store.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/React/redux/reset-store.js ***!
  \******************************************************/
/*! exports provided: defaultKeysToPreserve, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultKeysToPreserve", function() { return defaultKeysToPreserve; });
/**
 * 重置 store，清空所有 state
 * @param {Object} store
 * @param {string[]} [keysToPreserve]
 */
const resetStore = (store, keysToPreserve = defaultKeysToPreserve) => {
  const state = store.getState();
  Object.keys(state).filter(key => !keysToPreserve.includes(key)).forEach(key => {
    state[key] = undefined;
    delete state[key];
  }); // 触发所有 reducer 的初始化

  store.dispatch({
    type: '@@KOOT@@STATE_RESET_REDUCER_INIT'
  });
  return store;
};
/** @type {Array} 需要保留（不需要进行删除操作）的 redux store state 属性名 */


const defaultKeysToPreserve = ['localeId', 'locales' // 'server'
];
/* harmony default export */ __webpack_exports__["default"] = (resetStore);

/***/ }),

/***/ "./node_modules/koot/React/render-template.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/React/render-template.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ejs = __webpack_require__(/*! ejs */ "ejs");

const readClientFile = __webpack_require__(/*! ../utils/read-client-file */ "./node_modules/koot/utils/read-client-file.js");

const getClientFilePath = __webpack_require__(/*! ../utils/get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");
/**
 * 渲染 ejs 模板
 * @param {Object} options
 * @param {String} options.template ejs 模板内容
 * @param {Object} [options.inject={}] 注入对象
 * @param {Object} [options.state] 当前 Redux state。也可以传入 Redux store
 * @param {Object} [options.compilation] webpack compilation
 * @param {Object} [options.localeId] 强制更变为目标语种
 * @returns {String}
 */


module.exports = ({
  template = DEFAULT_TEMPLATE,
  inject = {},
  store,
  state,
  compilation,
  ctx,
  localeId
}) => {
  if (typeof state !== 'object' && typeof store === 'object' && typeof store.getState === 'function') state = store.getState();else if (typeof state === 'object' && typeof state.getState === 'function') state = state.getState();

  try {
    for (const key in inject) {
      if (typeof inject[key] === 'function') inject[key] = inject[key](template, state, ctx);
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    // console.log(e);
    throw e;
  } // 开发环境: 将 content('critical.js') 转为 pathname() 方式


  if (false) {} // console.log(template)

  const thisLocaleId = localeId || (typeof state === 'object' ? state.localeId : undefined);
  return ejs.render(template, {
    inject,
    content: filename => readClientFile(filename, thisLocaleId, compilation),
    pathname: filename => getClientFilePath(filename, thisLocaleId)
  }, {});
};

const DEFAULT_TEMPLATE = `<!DOCTYPE html>
<html>

<head<%- inject.htmlLang %>>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

    <title><%= inject.title %></title>

    <base target="_self">

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="format-detection" content="telephone=no,email=no,address=no">
    <meta name="format-detection" content="email=no">
    <meta name="format-detection" content="address=no">
    <meta name="format-detection" content="telephone=no">
    <meta name="HandheldFriendly" content="true">
    <meta name="mobile-web-app-capable" content="yes">

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

    <!-- IE/Edge/Multi-engine -->
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

    <!-- Customize -->
    <meta name="theme-color" content="#0092f5" />

    <%- inject.metas %>
    <%- inject.styles %>
</head>

<body class="koot-system">
    <div id="root"><%- inject.react %></div>
    <script type="text/javascript"><%- content('critical.js') %></script>
    <%- inject.scripts %>
</body>

</html>`;

/***/ }),

/***/ "./node_modules/koot/React/styles.js":
/*!*******************************************!*\
  !*** ./node_modules/koot/React/styles.js ***!
  \*******************************************/
/*! exports provided: checkAndWriteIntoHead, append, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAndWriteIntoHead", function() { return checkAndWriteIntoHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
// import React from 'react'

/**
 * 生成 StyleMapContext
 */
// export const createStyleMapContext = () => {
//     return React.createContext({})
// }
// export let StyleMapContext = createStyleMapContext()

/**
 * 将样式表写入到 head 标签内
 * @param {Object} styleMap
 */
const checkAndWriteIntoHead = (styleMap = {}) => {
  if (typeof styleMap !== 'object') return;
  Object.keys(styleMap).forEach(wrapper => {
    const style = styleMap[wrapper];
    const el = document.querySelector(`style[${"data-koot-module"}=${wrapper}]`);

    if (style.count > 0) {
      // 配置样式
      if (!el && style.css !== '') {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = style.css; // styleTag.setAttribute('id', wrapper);

        styleTag.setAttribute("data-koot-module", wrapper);
        document.getElementsByTagName('head')[0].appendChild(styleTag);
      }
    } else {
      // 移除样式
      if (el) {
        el.remove();
      }
    }
  });
}; // const getStyleMap = (passedMap) => {
//     if (__CLIENT__)
//         return passedMap
//     if (typeof __KOOT_SSR__ === 'object') {
//         // console.log({ LocaleId })
//         return __KOOT_SSR__.styleMap.get(LocaleId)
//     }
//     return passedMap
// }

/**
 * 追加样式
 * @param {Object} styleMap
 * @param {Object|Array} style
 */

const append = (styleMap = {}, style) => {
  // const styleMap = getStyleMap(passedMap)
  if (Array.isArray(style)) return style.forEach(theStyle => append(styleMap, theStyle));
  if (typeof style !== 'object') return;

  if (!styleMap[style.wrapper]) {
    styleMap[style.wrapper] = {
      css: style.css,
      count: 1
    };
  } else {
    styleMap[style.wrapper].count++;
  }

  if (false) {}
};
/**
 * 移除样式
 * @param {Object} styleMap
 * @param {*} style
 */

const remove = (styleMap = {}, style) => {
  // const styleMap = getStyleMap(passedMap)
  if (Array.isArray(style)) return style.forEach(theStyle => remove(theStyle));
  if (typeof style !== 'object') return;

  if (styleMap[style.wrapper]) {
    styleMap[style.wrapper].count--;
  }
}; // export const idDivStylesContainer = '__KOOT_ISOMORPHIC_STYLES_CONTAINER__'
// /**
//  * 分析 HTML 代码，解析已有样式表，将其从 HTML 代码中移除，并返回可以直接写入到 head 标签内的样式表代码
//  * @param {String} html
//  * @returns {String} htmlStyles
//  */
// export const parseHtmlForStyles = (html) => {
//     const matches = html.match(new RegExp(`<div id="${idDivStylesContainer}">(.*?)</div>`, 'm'))
//     if (
//         !matches ||
//         typeof matches !== 'object' ||
//         typeof matches.index === 'undefined' ||
//         typeof matches[1] === 'undefined'
//     )
//         return {
//             html,
//             htmlStyles: ''
//         }
//     return {
//         html: html.substr(0, matches.index),
//         htmlStyles: matches[1]
//     }
// }
// /**
//  * React 组件: 样式表内容容器
//  */
// export class StylesContainer extends React.Component {
//     static contextType = StyleMapContext
//     render() {
//         return (
//             <div
//                 id={idDivStylesContainer}
//                 dangerouslySetInnerHTML={{
//                     __html: Object.keys(this.context)
//                         .filter(id => !!this.context[id].css)
//                         .map(id => `<style id="${id}">${this.context[id].css}</style>`)
//                         .join('')
//                 }}
//             />
//         )
//     }
// }

/***/ }),

/***/ "./node_modules/koot/React/validate-inject.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/React/validate-inject.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const injectHtmlLang = __webpack_require__(/*! ./inject/htmlLang */ "./node_modules/koot/React/inject/htmlLang.js");

const injectMetas = __webpack_require__(/*! ./inject/metas */ "./node_modules/koot/React/inject/metas.js");

const injectStyles = __webpack_require__(/*! ./inject/styles */ "./node_modules/koot/React/inject/styles.js");

const injectScripts = __webpack_require__(/*! ./inject/scripts */ "./node_modules/koot/React/inject/scripts.js");
/**
 * 生成 ejs 使用的模板替换对象
 * @param {Object} options 当前设置
 * @param {Object} [options.injectCache={}] 静态注入对象/当前语言的静态注入缓存对象
 * @param {Object} [options.filemap={}] (当前语言的) 文件名对应表
 * @param {Object} [options.entrypoints={}] (当前语言的) 入口表
 * @param {String} [options.localeId] 当前语种 ID
 * @param {Object} [options.localeFileMap] (SPA) 语言包文件对照表
 * @param {string} [options.defaultLocaleId] (SPA) 默认语种 ID
 * @param {String} [options.title] 页面标题
 * @param {String} [options.metaHtml] meta 标签 HTML 代码
 * @param {String} [options.reactHtml] 已处理完毕的 React 同构结果 HTML 代码
 * @param {String} [options.stylesHtml] 已处理完毕的样式结果 HTML 代码
 * @param {String} [options.reduxHtml] 已处理完毕的 redux store 结果 HTML 代码
 * @param {Object} [options.SSRState] SSR 状态对象
 * @param {Object} [options.needInjectCritical] 是否需要自动注入 critical 内容
 * @param {Boolean} [options.needInjectCritical.styles=false]
 * @param {Boolean} [options.needInjectCritical.scripts=false]
 * @returns {Object}
 */


module.exports = (options = {}) => {
  const {
    injectCache = {},
    manifest = {},
    filemap = {},
    entrypoints = {},
    compilation,
    localeId,
    localeFileMap,
    defaultLocaleId,
    title,
    metaHtml,
    reactHtml,
    stylesHtml,
    reduxHtml,
    SSRState,
    needInjectCritical = {
      styles: false,
      scripts: false
    }
  } = options;
  return {
    htmlLang: injectHtmlLang(localeId),
    title,
    metas: injectMetas({
      manifest,
      metaHtml,
      localeId,
      compilation
    }),
    styles: injectStyles({
      needInjectCritical: needInjectCritical.styles,
      injectCache,
      filemap,
      stylesHtml,
      localeId,
      compilation
    }),
    react: reactHtml,
    scripts: injectScripts({
      needInjectCritical: needInjectCritical.scripts,
      injectCache,
      entrypoints,
      localeId,
      localeFileMap,
      defaultLocaleId,
      reduxHtml,
      SSRState,
      compilation
    })
  };
};

/***/ }),

/***/ "./node_modules/koot/React/validate/redux-config.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot/React/validate/redux-config.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux */ "./node_modules/koot/React/redux.js");


/**
 * 验证 Redux 配置
 * 
 * @param {Object} kootConfigRedux Koot 配置项: `redux`
 * @returns {Object} reduxConfig
 */

const validateReduxConfig = (kootConfigRedux = {}) => {
  const {
    syncCookie = true
  } = kootConfigRedux;
  const reduxConfig = {
    syncCookie
  };

  if (typeof kootConfigRedux.store === 'undefined') {
    const {
      combineReducers: theReducers = {}
    } = kootConfigRedux;
    Object.keys(_redux__WEBPACK_IMPORTED_MODULE_1__["reducers"]).forEach(reducerName => {
      theReducers[reducerName] = _redux__WEBPACK_IMPORTED_MODULE_1__["reducers"][reducerName];
    });

    reduxConfig.factoryStore = () => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(theReducers), _redux__WEBPACK_IMPORTED_MODULE_1__["initialState"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(..._redux__WEBPACK_IMPORTED_MODULE_1__["middlewares"]));
  } else if (typeof kootConfigRedux.store === 'function') {
    reduxConfig.factoryStore = kootConfigRedux.store;
  } else if (typeof kootConfigRedux.store === 'object') {
    reduxConfig.store = kootConfigRedux.store;
  }

  return reduxConfig;
};

/* harmony default export */ __webpack_exports__["default"] = (validateReduxConfig);

/***/ }),

/***/ "./node_modules/koot/React/validate/router-config.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/React/validate/router-config.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_error_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/error-msg */ "./node_modules/koot/libs/error-msg.js");
/* harmony import */ var _libs_error_msg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_error_msg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n_validte_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../i18n/validte-routes */ "./node_modules/koot/i18n/validte-routes.js");


/**
 * 验证 `react-router` 配置
 *
 * @param {Object} kootConfigRouter Koot 配置项: `router`
 * @returns {Promise<Object>} 路由配置对象，可直接供 `react-router` 使用
 */

const validateRouterConfig = kootConfigRouter => getPromise(kootConfigRouter).then(config => {
  if (typeof config !== 'object') throw new Error(_libs_error_msg__WEBPACK_IMPORTED_MODULE_0___default()('VALIDATE_ROUTER_CONFIG', 'no router config or router object invalid'));

  const { ...routes
  } = (() => {
    if (Array.isArray(config)) {
      return {
        childRoutes: [...config]
      };
    }

    return config;
  })();

  if (!routes.path) {
    routes.path = '/';
  }

  handleIndexRoute(routes);
  Object(_i18n_validte_routes__WEBPACK_IMPORTED_MODULE_1__["default"])(routes);
  return routes;
});

/* harmony default export */ __webpack_exports__["default"] = (validateRouterConfig); // ============================================================================

const getPromise = kootConfigRouter => {
  if (typeof kootConfigRouter !== 'function') return new Promise(resolve => resolve(kootConfigRouter));
  const value = kootConfigRouter();
  if (typeof value.then === 'function' || value instanceof Promise) return value;
  return new Promise(resolve => resolve(value));
};
/**
 * 处理默认路由
 * @param {any} route
 */


const handleIndexRoute = route => {
  if (route && (!route.childRoutes || !route.childRoutes.length)) {
    return;
  }

  route.childRoutes = route.childRoutes.filter(child => {
    // eslint-disable-line
    if (child.isIndex) {
      /* istanbul ignore next */
      if (false) {}
      /* istanbul ignore else */


      if (!route.indexRoute) {
        delete child.path; // eslint-disable-line

        route.indexRoute = child; // eslint-disable-line

        return false;
      }
    }

    return true;
  });
  route.childRoutes.forEach(handleIndexRoute);
};

/***/ }),

/***/ "./node_modules/koot/ReactApp/action-types.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/ReactApp/action-types.js ***!
  \****************************************************/
/*! exports provided: CHANGE_LANGUAGE, GET_ORIGIN_URL, TELL_CLIENT_URL, SYNC_COOKIE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LANGUAGE", function() { return CHANGE_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ORIGIN_URL", function() { return GET_ORIGIN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TELL_CLIENT_URL", function() { return TELL_CLIENT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNC_COOKIE", function() { return SYNC_COOKIE; });
const CHANGE_LANGUAGE = '@@KOOT@@CHANGE_LANGUAGE';
const GET_ORIGIN_URL = '@@KOOT@@GET_ORIGIN_URL';
const TELL_CLIENT_URL = '@@KOOT@@TELL_CLIENT_URL';
const SYNC_COOKIE = '@@KOOT@@SYNC_COOKIE';
/* harmony default export */ __webpack_exports__["default"] = ({
  CHANGE_LANGUAGE,
  GET_ORIGIN_URL,
  TELL_CLIENT_URL,
  SYNC_COOKIE
});

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/execute-components-lifecycle.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/execute-components-lifecycle.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getSSRStateString = __webpack_require__(/*! ../../../../libs/get-ssr-state-string */ "./node_modules/koot/libs/get-ssr-state-string.js"); // const { get: getSSRContext } = require('../../../../libs/ssr/context');


const {
  ssrContext: SSRContext
} = __webpack_require__(/*! ../../../../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/** @type {String} 同步数据到 store 的静态方法名 */


const LIFECYCLE_DATA_TO_STORE = 'onServerRenderStoreExtend';
/** @type {String} 扩展 HTML 信息的静态方法名 */

const LIFECYCLE_HTML_EXTEND = 'onServerRenderHtmlExtend';
/**
 * 执行匹配到的组件的静态生命周期方法
 * @async
 * @param {Object} options
 * @param {Object} store Redux store 对象
 * @param {Object} renderProps 路由 `match` 结果中的属性对象，其内包含匹配到的组件的信息
 * @param {Object} ctx Koa context
 */

const executeComponentLifecycle = async ({
  store,
  renderProps,
  ctx
}) => {
  /** @type {Array} 需要执行的异步方法 */
  const tasks = [];
  /**
   * @type {Function}
   * @async
   * 扩展 HTML 信息需要执行的方法
   * 仅执行匹配到的最深层组件对应的方法
   */

  const extendHtmlTasks = [];

  const extractDataToStoreTask = component => {
    if (!component) return;

    if (typeof component[LIFECYCLE_DATA_TO_STORE] === 'function') {
      const thisTask = component[LIFECYCLE_DATA_TO_STORE]({
        store,
        renderProps,
        ctx
      }); // component[LIFECYCLE_DATA_TO_STORE] = undefined

      if (Array.isArray(thisTask)) {
        for (const task of thisTask) tasks.push(task);
      } else if (thisTask instanceof Promise || thisTask.then) {
        tasks.push(thisTask);
      } else if (typeof thisTask === 'function') {
        tasks.push(new Promise(async (resolve, reject) => {
          try {
            await thisTask();
            resolve();
          } catch (e) {
            reject(e);
          }
        }));
      }
    } else if (component.WrappedComponent) {
      extractDataToStoreTask(component.WrappedComponent);
    }
  };

  const extracHtmlExtendTask = component => {
    if (!component) return;

    if (typeof component[LIFECYCLE_HTML_EXTEND] === 'function') {
      extendHtmlTasks.push(component[LIFECYCLE_HTML_EXTEND]); // component[LIFECYCLE_HTML_EXTEND] = undefined
    } else if (component.WrappedComponent) {
      extracHtmlExtendTask(component.WrappedComponent);
    }
  };
  /** @type {Array} 使用 extend 高阶组件的组件 */


  let thisConnectedComponents =  false ? undefined : ctx[SSRContext].connectedComponents; // console.log('\n\n==========');
  // console.log({ connectedComponents });
  // console.log({ connectedComponents, renderProps });
  // console.log('==========\n\n');
  // 添加各项任务

  if (Array.isArray(thisConnectedComponents)) thisConnectedComponents.forEach(component => {
    extractDataToStoreTask(component);
    extracHtmlExtendTask(component);
  });
  thisConnectedComponents = undefined; // 旧代码
  // for (const component of renderProps.components) {
  //     /**
  //      * @type {Component}
  //      * 当前组件
  //      * component.WrappedComponent 是 redux 装饰的外壳
  //      */
  //     // const thisComponent = component && component.WrappedComponent ? component.WrappedComponent : component
  //     // extractDataToStoreTask(component)
  // }
  // 等待所有异步方法执行完毕

  await Promise.all(tasks).catch(e => {
    throw e;
  }); // 扩展 HTML 相关信息

  const result = {
    title: "sp.diablohu.com" || false,
    metaHtml: '',
    reduxHtml: `window.__REDUX_STATE__ = ${getSSRStateString(store.getState())};`
  }; // console.log(extendHtmlTasks);

  extendHtmlTasks.some(task => {
    if (typeof task === 'function') {
      const {
        title: thisTitle,
        metas: thisMetas
      } = task({
        store,
        renderProps,
        ctx
      });
      const hasTitle = !!thisTitle;
      const hasMeta = Array.isArray(thisMetas) && thisMetas.length;
      if (hasTitle) result.title = thisTitle;
      if (hasMeta) result.metaHtml = thisMetas.map(meta => '<meta' + Object.keys(meta).map(key => ` ${key}="${meta[key]}"`).join('') + '>').join('');
      if (hasTitle || hasMeta) return true;
    }

    return false;
  });
  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (executeComponentLifecycle);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/init-store.js":
/*!********************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/init-store.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _React_redux_reset_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../React/redux/reset-store */ "./node_modules/koot/React/redux/reset-store.js");

/**
 * 通过 redux 配置，初始化并获取 redux store 对象
 *
 * - 若提供产生 store 的方法 (`factoryStore`): 生成 store
 * - 若提供自生成的 store (`store`): 尝试清空 state 并触发一次所有 reducer 的初始化
 *
 * 每次访问请求时，需要生成全新的干净的 redux store，不可复用
 *
 * @param {Object} reduxConfig Redux，以下内容选其一
 * @param {Function} [reduxConfig.factoryStore] 生成 Redux Store 的方法
 * @param {Object} [reduxConfig.store] Redux Store 对象
 * @returns {Object} store
 */

const initStore = (reduxConfig = {}) => {
  const {
    store,
    factoryStore
  } = reduxConfig;

  if (typeof factoryStore === 'function') {
    return factoryStore();
  }

  if (typeof store === 'object') {
    return Object(_React_redux_reset_store__WEBPACK_IMPORTED_MODULE_0__["default"])(store);
  }

  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (initStore);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/after-data-to-store.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/after-data-to-store.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/log */ "./node_modules/koot/libs/log.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_log__WEBPACK_IMPORTED_MODULE_0__);


const afterDataToStore = async ({
  store,
  ctx,
  localeId,
  callback
}) => {
  if (false) {}
  if (typeof callback === 'function') await callback({
    ctx,
    store,
    localeId
  });
};

/* harmony default export */ __webpack_exports__["default"] = (afterDataToStore);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-data-to-store.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-data-to-store.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/log */ "./node_modules/koot/libs/log.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_log__WEBPACK_IMPORTED_MODULE_0__);


const beforeDataToStore = async ({
  ctx,
  store,
  localeId,
  callback
}) => {
  if (false) {}
  if (false) {}
  if (typeof callback === 'function') await callback({
    ctx,
    store,
    localeId
  });
};

/* harmony default export */ __webpack_exports__["default"] = (beforeDataToStore);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-pre-render.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-pre-render.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/log */ "./node_modules/koot/libs/log.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_log__WEBPACK_IMPORTED_MODULE_0__);


const beforePreRender = async ({
  ctx,
  store,
  localeId,
  callback
}) => {
  if (false) {}
  if (typeof callback === 'function') await callback({
    ctx,
    store,
    localeId
  });
};

/* harmony default export */ __webpack_exports__["default"] = (beforePreRender);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-router-match.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-router-match.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../action-types */ "./node_modules/koot/ReactApp/action-types.js");
/* harmony import */ var _i18n_server_check_and_redirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../i18n/server/check-and-redirect */ "./node_modules/koot/i18n/server/check-and-redirect.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/log */ "./node_modules/koot/libs/log.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_libs_log__WEBPACK_IMPORTED_MODULE_2__);

 // import isI18nEnabled from '../../../../../i18n/is-enabled'



const beforeRouterMatch = async ({
  store,
  ctx,
  syncCookie,
  callback
}) => {
  // 如果 i18n 判定需要跳转，此时进行处理
  const needRedirect = Object(_i18n_server_check_and_redirect__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx);
  if (needRedirect) return needRedirect; // 告诉前端，当前的url是啥

  store.dispatch({
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["TELL_CLIENT_URL"],
    data: ctx.originTrue
  }); // 把http请求带来的cookie同步到ssr的初始化redux state里
  // server.cookie 获取
  // 配置信息在koot.config.js里
  // redux.syncCookie = ['token', 'sid'] | 'token' | false

  if (syncCookie) {
    let cookies = syncCookie;

    if (cookies === true) {
      store.dispatch({
        type: _action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_COOKIE"],
        data: ctx.headers.cookie || ''
      });
    } else {
      const data = {};

      if (cookies === 'all') {
        const theCookies = ctx.headers.cookie || '';
        theCookies.split(';').forEach(str => {
          const crumbs = str.split('=');

          if (crumbs.length > 1) {
            const [key, ...values] = crumbs;
            data[key.trim()] = values.join('=').trim();
          }
        });
      } else {
        if (typeof cookies === 'string') cookies = [cookies];

        if (Array.isArray(cookies)) {
          // 获取需要的cookie值
          cookies.forEach(c => {
            data[c] = ctx.cookies.get(c);
          });
        }
      } // 同步到state中


      store.dispatch({
        type: _action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_COOKIE"],
        data
      });
    } // console.log({
    //     syncCookie,
    //     cookies: ctx.headers.cookie,
    //     server: store.getState().server
    // });

  }

  if (false) {}
  if (typeof callback === 'function') await callback({
    store,
    ctx
  });
};

/* harmony default export */ __webpack_exports__["default"] = (beforeRouterMatch);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/redux.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/redux.js ***!
  \****************************************************/
/*! exports provided: CHANGE_LANGUAGE, TELL_CLIENT_URL, SYNC_COOKIE, SERVER_REDUCER_NAME, serverReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_REDUCER_NAME", function() { return SERVER_REDUCER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverReducer", function() { return serverReducer; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/ReactApp/action-types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LANGUAGE", function() { return _action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LANGUAGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TELL_CLIENT_URL", function() { return _action_types__WEBPACK_IMPORTED_MODULE_0__["TELL_CLIENT_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SYNC_COOKIE", function() { return _action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_COOKIE"]; });

// TODO: change to one action type , like: CHANGE_BASE_INFO


const SERVER_REDUCER_NAME = 'server';
const serverReducer = (state = {
  lang: 'en',
  origin: ''
}, action) => {
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LANGUAGE"]:
      return Object.assign({}, state, {
        lang: action.data
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["TELL_CLIENT_URL"]:
      return Object.assign({}, state, {
        origin: action.data
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_COOKIE"]:
      return Object.assign({}, state, {
        cookie: action.data
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/root-isomorphic.jsx":
/*!***************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/root-isomorphic.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_lib_RouterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router/lib/RouterContext */ "./node_modules/react-router/lib/RouterContext.js");
/* harmony import */ var react_router_lib_RouterContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_lib_RouterContext__WEBPACK_IMPORTED_MODULE_2__);


 // import { idDivStylesContainer, StyleMapContext } from '../../React/styles'

const Root = ({
  store,
  ...props
}) => {
  // console.log('Root', {
  //     'in __KOOT_SSR__': __KOOT_SSR__.LocaleId
  // })
  // console.log('Root render Store', typeof Store === 'undefined' ? undefined : Store)
  return (
    /*#__PURE__*/
    // <StyleMapContext.Provider value={{}}>
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_lib_RouterContext__WEBPACK_IMPORTED_MODULE_2___default.a, props)) // <StylesContainer />
    // </StyleMapContext.Provider>

  );
};

/* harmony default export */ __webpack_exports__["default"] = (Root);
/**
 * React 组件: 样式表内容容器
 */
// const StylesContainer = () =>
//     <div
//         id={idDivStylesContainer}
//         dangerouslySetInnerHTML={{
//             __html: Object.keys(__KOOT_SSR__.styleMap)
//                 .filter(id => !!__KOOT_SSR__.styleMap[id].css)
//                 .map(id => `<style id="${id}">${__KOOT_SSR__.styleMap[id].css}</style>`)
//                 .join('')
//         }}
//     />
// let e = Root
// if (__DEV__) {
//     const { hot, setConfig } = require('react-hot-loader')
//     setConfig({ logLevel: 'debug' })
//     e = hot(module)(Root)
// }
// export default e

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/ssr.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/ssr.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_lib_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router/lib/match */ "./node_modules/react-router/lib/match.js");
/* harmony import */ var react_router_lib_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_lib_match__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_lib_useRouterHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router/lib/useRouterHistory */ "./node_modules/react-router/lib/useRouterHistory.js");
/* harmony import */ var react_router_lib_useRouterHistory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_lib_useRouterHistory__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history_lib_createMemoryHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history/lib/createMemoryHistory */ "./node_modules/history/lib/createMemoryHistory.js");
/* harmony import */ var history_lib_createMemoryHistory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(history_lib_createMemoryHistory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-redux */ "react-router-redux");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _KOOT_PROJECT_CONFIG_FULL_PATHNAME___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __KOOT_PROJECT_CONFIG_FULL_PATHNAME__ */ "./logs/tmp/config/full.a227f6f678b0be214ac573271cf2f00d.js");
/* harmony import */ var _libs_ssr_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../libs/ssr/context */ "./node_modules/koot/libs/ssr/context.js");
/* harmony import */ var _libs_ssr_context__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_libs_ssr_context__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _root_isomorphic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./root-isomorphic */ "./node_modules/koot/ReactApp/server/root-isomorphic.jsx");
/* harmony import */ var _defaults_webpack_dev_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../defaults/webpack-dev-server */ "./node_modules/koot/defaults/webpack-dev-server.js");
/* harmony import */ var _defaults_webpack_dev_server__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_defaults_webpack_dev_server__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines_server__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/ReactApp/action-types.js");
/* harmony import */ var _React_validate_router_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../React/validate/router-config */ "./node_modules/koot/React/validate/router-config.js");
/* harmony import */ var _React_validate_inject__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../React/validate-inject */ "./node_modules/koot/React/validate-inject.js");
/* harmony import */ var _React_validate_inject__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_React_validate_inject__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _React_validate_redux_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../React/validate/redux-config */ "./node_modules/koot/React/validate/redux-config.js");
/* harmony import */ var _React_inject_is_need_inject_critical__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../React/inject/is-need-inject-critical */ "./node_modules/koot/React/inject/is-need-inject-critical.js");
/* harmony import */ var _React_inject_is_need_inject_critical__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_React_inject_is_need_inject_critical__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _React_render_template__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../React/render-template */ "./node_modules/koot/React/render-template.js");
/* harmony import */ var _React_render_template__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_React_render_template__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _React_redux_reset_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../React/redux/reset-store */ "./node_modules/koot/React/redux/reset-store.js");
/* harmony import */ var _React_inject_cache_keys__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../React/inject/_cache-keys */ "./node_modules/koot/React/inject/_cache-keys.js");
/* harmony import */ var _React_inject_cache_keys__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_React_inject_cache_keys__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _middlewares_isomorphic_lifecycle_before_router_match__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./middlewares/isomorphic/lifecycle/before-router-match */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-router-match.js");
/* harmony import */ var _middlewares_isomorphic_lifecycle_before_pre_render__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./middlewares/isomorphic/lifecycle/before-pre-render */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-pre-render.js");
/* harmony import */ var _middlewares_isomorphic_lifecycle_before_data_to_store__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./middlewares/isomorphic/lifecycle/before-data-to-store */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-data-to-store.js");
/* harmony import */ var _middlewares_isomorphic_lifecycle_after_data_to_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./middlewares/isomorphic/lifecycle/after-data-to-store */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/after-data-to-store.js");
/* harmony import */ var _middlewares_isomorphic_execute_components_lifecycle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./middlewares/isomorphic/execute-components-lifecycle */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/execute-components-lifecycle.js");
/* harmony import */ var _middlewares_isomorphic_init_store__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./middlewares/isomorphic/init-store */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/init-store.js");
/* harmony import */ var _i18n_redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../i18n/redux */ "./node_modules/koot/i18n/redux/index.js");
/* harmony import */ var _i18n_server_generate_html_redirect_metas__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../i18n/server/generate-html-redirect-metas */ "./node_modules/koot/i18n/server/generate-html-redirect-metas.js");
/* harmony import */ var _i18n_server_get_ssr_state__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../i18n/server/get-ssr-state */ "./node_modules/koot/i18n/server/get-ssr-state.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import 'regenerator-runtime/runtime';
























 // import i18nOnServerRender from '../../i18n/onServerRender';





async function ssr(ctx) {
  Object(_libs_ssr_context__WEBPACK_IMPORTED_MODULE_7__["set"])(ctx);
  const SSR = Object(_libs_ssr_context__WEBPACK_IMPORTED_MODULE_7__["get"])();
  const {
    LocaleId
  } = SSR;
  /** @type {string} 本次请求的 URL */

  const url = ctx.path + ctx.search; // ========================================================================

  const {
    redux: reduxConfigRaw = {}
  } = _KOOT_PROJECT_CONFIG_FULL_PATHNAME___WEBPACK_IMPORTED_MODULE_6__;
  const reduxConfig = await Object(_React_validate_redux_config__WEBPACK_IMPORTED_MODULE_14__["default"])(reduxConfigRaw); // 生成/清理 Store
  // console.log('\x1b[36m⚑\x1b[0m' + ' Store created')

  const Store = Object(_middlewares_isomorphic_init_store__WEBPACK_IMPORTED_MODULE_24__["default"])(reduxConfig); // 生成 History

  const historyConfig = {
    basename: LocaleId && "undefined" === 'router' ? `/${LocaleId}` : '/'
  };
  /* eslint-disable react-hooks/rules-of-hooks */

  const memoryHistory = react_router_lib_useRouterHistory__WEBPACK_IMPORTED_MODULE_3___default()(() => history_lib_createMemoryHistory__WEBPACK_IMPORTED_MODULE_4___default()(url))(historyConfig);
  /* eslint-enable react-hooks/rules-of-hooks */

  /** @type {Object} 已生成的 History 实例 */

  const History = Object(react_router_redux__WEBPACK_IMPORTED_MODULE_5__["syncHistoryWithStore"])(memoryHistory, Store);
  const {
    syncCookie
  } = reduxConfig;

  if (false) {} else {
    Object(_libs_ssr_context__WEBPACK_IMPORTED_MODULE_7__["resetStore"])(Store);
    Object(_libs_ssr_context__WEBPACK_IMPORTED_MODULE_7__["resetHistory"])(History);
  } // ========================================================================
  // console.log({
  //     LocaleId,
  //     Store,
  //     History,
  //     SSR
  // })

  /** @type {Boolean} i18n 是否启用 */


  const i18nEnabled = Boolean(LocaleId);
  const {
    proxyRequestOrigin = {},
    ssrComplete: _complete
  } = SSR;

  function ssrComplete(...args) {
    if (true) {
      Object(_libs_ssr_context__WEBPACK_IMPORTED_MODULE_7__["reset"])(); // SSR = undefined;

      ctx = undefined;
      purgeObject(global);
    }

    _complete(...args);
  }

  ctx.originTrue = proxyRequestOrigin.protocol ? ctx.origin.replace(/^http:\/\//, `${proxyRequestOrigin.protocol}://`) : ctx.origin;
  ctx.hrefTrue = proxyRequestOrigin.protocol ? ctx.href.replace(/^http:\/\//, `${proxyRequestOrigin.protocol}://`) : ctx.href;
  const {
    lifecycle,
    routerConfig: routes
  } = await initConfig(i18nEnabled, LocaleId); // 渲染生命周期: beforeRouterMatch

  await Object(_middlewares_isomorphic_lifecycle_before_router_match__WEBPACK_IMPORTED_MODULE_19__["default"])({
    ctx,
    store: Store,
    syncCookie,
    callback: lifecycle.beforeRouterMatch
  });

  if (LocaleId) {
    Store.dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_11__["CHANGE_LANGUAGE"],
      data: LocaleId
    });
    Store.dispatch(Object(_i18n_redux__WEBPACK_IMPORTED_MODULE_25__["actionInit"])(LocaleId)); // i18nOnServerRender(Store, LocaleId);
  } // console.log('after router match', ctx.hrefTrue, LocaleId);
  // 进行路由匹配


  const {
    redirectLocation,
    renderProps
  } = await new Promise((resolve, reject) => {
    react_router_lib_match__WEBPACK_IMPORTED_MODULE_2___default()({
      history: History,
      routes,
      location: url
    }, (error, redirectLocation, renderProps) => {
      if (error) return reject(error);
      resolve({
        redirectLocation,
        renderProps
      });
    });
  }); // 如果需要重定向，派发 ctx.redirect / 302

  if (redirectLocation) {
    ssrComplete({
      redirect: redirectLocation.pathname + redirectLocation.search
    });
    return;
  } // 如果没有匹配，终止本中间件流程，执行其他中间件
  // 表示 react 不应处理该请求


  if (!renderProps) {
    ssrComplete({
      next: true
    });
    return;
  } // 强制更新 store: state.routing.locationBeforeTransitions


  const state = Store.getState();
  const currentPathname = state.routing.locationBeforeTransitions.pathname;
  if (currentPathname.split(0, 1) !== '/') Object.assign(Store.getState().routing.locationBeforeTransitions, {
    pathname: ctx.path // search: ctx.search

  }); // 渲染生命周期: beforePreRender

  await Object(_middlewares_isomorphic_lifecycle_before_pre_render__WEBPACK_IMPORTED_MODULE_20__["default"])({
    ctx,
    store: Store,
    localeId: LocaleId,
    callback: lifecycle.beforePreRender
  }); // 确定当前访问匹配到的组件

  SSR[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_10__["needConnectComponents"]] = true;
  SSR.connectedComponents = [];

  try {
    Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_root_isomorphic__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
      store: Store
    }, renderProps)));
  } catch (e) {}

  SSR[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_10__["needConnectComponents"]] = false; // 重置 state

  Object(_React_redux_reset_store__WEBPACK_IMPORTED_MODULE_17__["default"])(Store, [..._React_redux_reset_store__WEBPACK_IMPORTED_MODULE_17__["defaultKeysToPreserve"], 'server', 'routing']); // 渲染生命周期: beforeDataToStore

  await Object(_middlewares_isomorphic_lifecycle_before_data_to_store__WEBPACK_IMPORTED_MODULE_21__["default"])({
    ctx,
    store: Store,
    localeId: LocaleId,
    callback: lifecycle.beforeDataToStore
  }); // 执行所有匹配到的组件的自定义的静态生命周期

  const {
    title,
    metaHtml,
    reduxHtml
  } = await Object(_middlewares_isomorphic_execute_components_lifecycle__WEBPACK_IMPORTED_MODULE_23__["default"])({
    store: Store,
    renderProps,
    ctx
  }); // 渲染生命周期: afterDataToStore

  await Object(_middlewares_isomorphic_lifecycle_after_data_to_store__WEBPACK_IMPORTED_MODULE_22__["default"])({
    ctx,
    store: Store,
    localeId: LocaleId,
    callback: lifecycle.afterDataToStore
  }); // SSR

  const reactHtml = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_root_isomorphic__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
    store: Store
  }, renderProps))); // console.log({
  //     // __KOOT_SSR__,
  //     // thisTemplateInjectCache: SSR.thisTemplateInjectCache,
  //     // thisEntrypoints: SSR.thisEntrypoints,
  //     // thisFilemap: SSR.thisFilemap,
  //     thisStyleMap,
  //     // templateInject: SSR.templateInject,
  //     // proxyRequestOrigin,
  // })
  // const stylesHtml = Object.keys(thisStyleMap)
  //     .filter(id => typeof thisStyleMap[id].css === 'string')
  //     .map(id => `<style id="${id}">${thisStyleMap[id].css}</style>`)
  //     .join('')

  const stylesHtml = Object.keys(SSR.styleMap).filter(id => typeof SSR.styleMap[id].css === 'string' && SSR.styleMap[id].css !== '').map(id => `<style ${"data-koot-module"}="${id}">${SSR.styleMap[id].css}</style>`).join(''); // console.log('result thisStyleMap', thisStyleMap)
  // 渲染 EJS 模板

  const inject = _React_validate_inject__WEBPACK_IMPORTED_MODULE_13___default()({
    injectCache: SSR.thisTemplateInjectCache,
    filemap: SSR.thisFilemap,
    entrypoints: SSR.thisEntrypoints,
    manifest: SSR.thisManifest,
    localeId: LocaleId,
    title,
    metaHtml,
    reactHtml,
    stylesHtml,
    reduxHtml,
    SSRState: Object(_i18n_server_get_ssr_state__WEBPACK_IMPORTED_MODULE_27__["default"])(SSR),
    needInjectCritical: _React_inject_is_need_inject_critical__WEBPACK_IMPORTED_MODULE_15___default()(SSR.template)
  });

  if (LocaleId) {
    // i18n 启用时: 添加其他语种页面跳转信息的 meta 标签
    inject.metas += Object(_i18n_server_generate_html_redirect_metas__WEBPACK_IMPORTED_MODULE_26__["default"])({
      ctx,
      proxyRequestOrigin,
      localeId: LocaleId
    });
  } // > Memory stable ========================================================

  /** @type {String} HTML 结果 */


  let body = _React_render_template__WEBPACK_IMPORTED_MODULE_16___default()({
    template: SSR.template,
    inject: { ...inject,
      ...SSR.templateInject
    },
    store: Store,
    ctx
  }); // 结果写入缓存

  if (false) {} // React SSR


  ssrComplete({
    body
  });
}
/**
 * 初始化 SSR 配置
 * @param {*} i18nEnabled
 */


const initConfig = async (i18nEnabled, LocaleId) => {
  // const LocaleId = __DEV__ ? global.__KOOT_LOCALEID__ : __KOOT_LOCALEID__;
  const {
    server: serverConfig = {}
  } = _KOOT_PROJECT_CONFIG_FULL_PATHNAME___WEBPACK_IMPORTED_MODULE_6__;
  const config = {}; // 决定路由配置 (每次请求需重新生成)

  config.routerConfig = await Object(_React_validate_router_config__WEBPACK_IMPORTED_MODULE_12__["default"])(_KOOT_PROJECT_CONFIG_FULL_PATHNAME___WEBPACK_IMPORTED_MODULE_6__["router"]);
  if (typeof i18nEnabled === 'undefined') i18nEnabled = Boolean(LocaleId);
  config.lifecycle = {};

  if (typeof serverConfig.onRender === 'function') {
    config.lifecycle.beforeDataToStore = serverConfig.onRender;
  } else if (typeof serverConfig.onRender === 'object') {
    Object.keys(serverConfig.onRender).forEach(key => {
      config.lifecycle[key] = serverConfig.onRender[key];
    });
  }

  return config;
};

if (true) {
  // eslint-disable-next-line no-eval
  const ctx = eval(_defaults_defines_server__WEBPACK_IMPORTED_MODULE_10__["koaContext"]);
  ssr(ctx).catch(err => {
    ctx[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_10__["ssrContext"]].ssrComplete({
      error: err
    }); // console.error(err);
    // throw err;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ssr); // ============================================================================

const purgeObject = obj => {
  if (typeof obj !== 'object') return;

  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === 'object') purgeObject(obj[key]);
    delete obj[key];
  }
};

/***/ }),

/***/ "./node_modules/koot/defaults/before-build.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/defaults/before-build.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Webpack 打包相关的常量，包括：
 * - 文件名
 * - 代码中使用的临时常量名
 * - `koot.config.js` 的属性名
 * - 其他代码中用到的常量名
 */
module.exports = {
  // 处理项目配置相关
  keyFileProjectConfigTempFull: '__FILE_PROJECT_CONFIG_TEMP_FULL__',
  keyFileProjectConfigTempPortionServer: '__FILE_PROJECT_CONFIG_TEMP_PORTION_SERVER__',
  keyFileProjectConfigTempPortionClient: '__FILE_PROJECT_CONFIG_TEMP_PORTION_CLIENT__',
  keyFileProjectConfigTempPortionOtherClient: '__FILE_PROJECT_CONFIG_TEMP_PORTION_OTHER_CLIENT__',
  keyKootBaseVersion: '__KOOT_BASE_VERSION__',
  dirConfigTemp: 'logs/tmp/config',
  filenameProjectConfigTempFull: 'full.*.js',
  filenameProjectConfigTempPortionServer: 'portion.server.*.js',
  filenameProjectConfigTempPortionClient: 'portion.client.*.js',
  filenameProjectConfigTempPortionOtherClient: 'portion.client-other.*.js',
  propertiesToExtract: [['name', ''], ['type', 'react'], ['template', ''], ['templateInject', ''], ['routes', ''], ['historyType', ''], ['store', ''], ['cookiesToStore', ''], ['client', {}], ['server', {}]],
  typesSPA: ['spa', 'reactspa', 'react-spa'],
  // 打包 DLL 相关
  keyConfigBuildDll: '__BUILD_DLL__',
  filenameDll: '.dll.js',
  filenameDllManifest: '.dll.manifest.json',
  dirDll: 'dev-dll',
  // 其他项目配置项名
  keyConfigQuiet: '__QUIET__',
  keyConfigOutputPathShouldBe: '__OUTPUT_PATH_SHOULD_BE__',
  keyConfigWebpackSPATemplateInject: '__KOOT_WEBPACK_CONFIG_FOR_SPA_TEMPLATE_INJECT__',
  keyConfigWebpackSPAServer: '__SPA_SERVER__',
  keyConfigClientAssetsPublicPath: '__CLIENT_ASSETS_PUBLIC_PATH__',
  keyConfigClientServiceWorkerPathname: '__CLIENT_SERVICE_WORKER_PATHNAME__',
  keyConfigIcons: '__APP_ICONS__',
  WEBPACK_OUTPUT_PATH: '__WEBPACK_OUTPUT_PATH',
  CLIENT_ROOT_PATH: '__CLIENT_ROOT_PATH',
  WEBPACK_MODIFIED_PUBLIC_PATH: '__WEBPACK_MODIFIED_PUBLIC_PATH',
  // CLEANUP_PREVIOUS_BUILDS_IDS: '__CLEANUP_PREVIOUS_BUILDS_IDS',
  // CLEANUP_PREVIOUS_BUILDS_FILES: '__CLEANUP_PREVIOUS_BUILDS_FILES',
  // 自定义 chunk
  chunkNameExtractCss: '__KOOT__EXTRACT__CSS__',
  chunkNameExtractCssForImport: '__KOOT__EXTRACT__CSS__NO__PUBLIC__PATH__',
  chunkNameClientRunFirst: '__KOOT__CLIENT__RUN__FIRST__',
  // [开发环境] 临时文件名
  filenameWebpackDevServerPortTemp: '.dev_webpack-dev-server_port',
  filenameBuilding: '.koot-building',
  filenameBuildFail: '.koot-build-fail',
  filenameSPATemplateInjectJS: '.spa-template-inject.LOCALEID.js',
  // [生产环境] 文件名
  // filenameCurrentBundle: '.koot-current',
  // 标签属性
  styleTagGlobalAttributeName: 'data-koot-global',
  styleTagModuleAttributeName: 'data-koot-module',
  scriptTagEntryAttributeName: 'data-koot-entry',
  // 模板中的一些判断阈值

  /**
   * @type {number} 全局 CSS 抽出总结果文件尺寸阈值 (字节)
   * - 如果超过这个值，会采用 <link> 引用的方式
   * - 如果小于等于这个值，直接将文件内容写入 HTML
   */
  thresholdStylesExtracted: 50 * 1024,

  /**
   * @type {number} run-first 入口的文件尺寸阈值 (字节)
   * - 如果超过这个值，会采用 <script> 引用的方式
   * - 如果小于等于这个值，直接将文件内容写入 HTML
   */
  thresholdScriptRunFirst: 15 * 1024,

  /** @type {string} 打包结果目录中的文件对照表文件名 */
  buildManifestFilename: '.koot-public-manifest.json',

  /** @type {string} 打包结果目录中输出文件总集文件名 */
  buildOutputsFilename: '.koot-public-outputs.json',

  /** @type {string} Webpack Dev Server 热更新 Web Socket 地址 */
  pathnameSockjs: `sockjs-node`,

  /** Webpack compilation 对象中的定制属性 - 额外 Meta 标签的 HTML 代码 */
  compilationKeyHtmlMetaTags: '.htmlMetaTags__'
};

/***/ }),

/***/ "./node_modules/koot/defaults/defines-server.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/defaults/defines-server.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports =  true ? {
  needConnectComponents: '__NEED_CONNECT_COMPONENTS__',
  ssrContext: '__KOOT_SSR__',
  koaContext: '__KOOT_CTX__'
} : undefined;

/***/ }),

/***/ "./node_modules/koot/defaults/defines-service-worker.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/defaults/defines-service-worker.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  scopeNeedTransformPathname: '<<CURRENT_PATHNAME>>'
};

/***/ }),

/***/ "./node_modules/koot/defaults/defines.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/defaults/defines.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  __KOOT_INJECT_ATTRIBUTE_NAME__: 'koot-inject',
  __KOOT_INJECT_METAS_START__: 'koot-inject-metas-start',
  __KOOT_INJECT_METAS_END__: 'koot-inject-metas-end',
  // hl 这个参数名是参考了Instargram
  changeLocaleQueryKey: 'hl',
  sessionStoreKey: '__KOOT_SESSION_STORE__'
};

/***/ }),

/***/ "./node_modules/koot/defaults/dev-request-uri.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/defaults/dev-request-uri.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * [开发环境] 特殊的请求 URI
 */
module.exports = {
  dll: '/__koot_dev_dll',
  serviceWorker: `/__KOOT_DEV_SERVICE_WORKER.${ true ? encodeURIComponent("sp.diablohu.com") : undefined}.js`
};

/***/ }),

/***/ "./node_modules/koot/defaults/entrypoints.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/defaults/entrypoints.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 默认的入口
 * 
 * @module koot/defaults/entrypoints
 */
module.exports = ['client'];

/***/ }),

/***/ "./node_modules/koot/defaults/i18n.js":
/*!********************************************!*\
  !*** ./node_modules/koot/defaults/i18n.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 默认 i18n 配置 */
module.exports = {
  use: 'query',
  expr: '__',
  cookieKey: 'spLocaleId'
};

/***/ }),

/***/ "./node_modules/koot/defaults/webpack-dev-server.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot/defaults/webpack-dev-server.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  publicPathPrefix: '__koot_webpack_dev_server__',
  entryClientHMR: 'webpack-dev-server-client',
  serviceWorkerFilename: '__KOOT_DEV_SERVICE_WORKER__.js',
  hmrOptions: {// multiStep: true,
    // fullBuildTimeout: process.env.WEBPACK_BUILD_TYPE === 'spa' ? 500 : undefined,
    // requestTimeout: process.env.WEBPACK_BUILD_TYPE === 'spa' ? undefined : 1000
  }
};

/***/ }),

/***/ "./node_modules/koot/i18n/action-types.js":
/*!************************************************!*\
  !*** ./node_modules/koot/i18n/action-types.js ***!
  \************************************************/
/*! exports provided: I18N_INIT, I18N_SET_LOCALES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_INIT", function() { return I18N_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_SET_LOCALES", function() { return I18N_SET_LOCALES; });
const I18N_INIT = '@@KOOT@@I18N_INIT';
const I18N_SET_LOCALES = '@@KOOT@@I18N_SET_LOCALES';

/***/ }),

/***/ "./node_modules/koot/i18n/generate-html-redirect-metas.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/i18n/generate-html-redirect-metas.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  use: defaultUse
} = __webpack_require__(/*! ../defaults/i18n */ "./node_modules/koot/defaults/i18n.js");

const {
  changeLocaleQueryKey
} = __webpack_require__(/*! ../defaults/defines */ "./node_modules/koot/defaults/defines.js");
/**
 * 生成用以声明该页面其他语种 URL 的 meta 标签的 HTML 代码
 * @param {Object} options
 * @param {String} options.localeId 当前语种
 * @param {string[]} options.availableLocaleIds
 * @param {string} [options.use=query]
 * @param {*} [options.ctx]
 * @returns {String} HTML 代码
 */


const generateHtmlRedirectMetas = ({
  ctx = {},
  localeId = '',
  availableLocaleIds,
  use = defaultUse
}) => {
  if (!Array.isArray(availableLocaleIds)) return '';
  if (!availableLocaleIds.length) return '';
  const {
    hrefTrue: href = '',
    originTrue: origin = '',
    query = {},
    querystring = ''
  } = ctx;
  const isUseRouter = use === 'router';
  const isUseSubdomain = use === 'subdomain';
  let html = availableLocaleIds //getLocaleIds()
  .filter(thisLocaleId => thisLocaleId !== localeId).map(l => {
    let thisHref = '';

    if (isUseRouter) {
      thisHref = origin + href.replace(new RegExp(`^${origin}`), '').replace(new RegExp(`^${localeId}`), l).replace(new RegExp(`^/${localeId}`), '/' + l);
    } else if (isUseSubdomain) {
      thisHref = href.replace(new RegExp(`://${localeId}.`), `://${l}.`);
    } else {
      thisHref = (() => {
        if (query[changeLocaleQueryKey] === '') {
          return href.replace(new RegExp(`${changeLocaleQueryKey}=`), `${changeLocaleQueryKey}=${l}`);
        }

        if (typeof query[changeLocaleQueryKey] === 'string') return href.replace(new RegExp(`${changeLocaleQueryKey}=[a-zA-Z-_]+`), `${changeLocaleQueryKey}=${l}`);
        return href + (querystring ? `&` : href.substr(href.length - 1) === '?' ? '' : `?`) + `${changeLocaleQueryKey}=${l}`;
      })();
    }

    if (false) {}
    return `<link rel="alternate" hreflang="${l}" href="${thisHref}" />`;
  }).join('');

  if (isUseRouter) {
    html += `<base href="/${localeId}">`;
  }

  return html;
};

module.exports = generateHtmlRedirectMetas;

/***/ }),

/***/ "./node_modules/koot/i18n/get-locales-config.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/i18n/get-locales-config.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isI18nEnabled = __webpack_require__(/*! ./is-enabled */ "./node_modules/koot/i18n/is-enabled.js");

let locales;
/**
 * 获取 i18n 配置数组
 * @returns {Array}
 */

module.exports = () => {
  if (!Array.isArray(locales)) {
    if (isI18nEnabled()) {
      locales = JSON.parse("[[\"zh\",{},null,\"./locales/zh.js\"]]") || [];
    } else {
      locales = [];
    }
  }

  return locales;
};

/***/ }),

/***/ "./node_modules/koot/i18n/get-type.js":
/*!********************************************!*\
  !*** ./node_modules/koot/i18n/get-type.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isI18nEnabled = __webpack_require__(/*! ./is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/**
 * 获取当前多语言配置类型
 * @returns {String}
 */


module.exports = () => isI18nEnabled() ? JSON.parse("\"default\"") || 'default' : undefined;

/***/ }),

/***/ "./node_modules/koot/i18n/is-enabled.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/is-enabled.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 检查当前项目是否开启多语言支持
 * @returns {Boolean}
 */
const isI18nEnabled = () => {
  if ( false || !JSON.parse("true")) return false;
  return true;
};

module.exports = isI18nEnabled;

/***/ }),

/***/ "./node_modules/koot/i18n/locale-ids.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/locale-ids.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const getLocalesConfig = __webpack_require__(/*! ./get-locales-config */ "./node_modules/koot/i18n/get-locales-config.js");

let result;
/**
 * 获取 i18n 语种列表
 * @returns {Array}
 */

module.exports = (() => {
  if (!Array.isArray(result)) {
    result = getLocalesConfig();
    result = result.map(l => l[0]);
    if (!result.length) result = [''];
  }

  return result;
})();

/***/ }),

/***/ "./node_modules/koot/i18n/parse-language-list.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/i18n/parse-language-list.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 根据输入的语言列表字符串，返回语言列表array
 *
 * @param {string} langList 语言列表字符串，eg: zh-CN,zh;q=0.8,en;q=0.6
 *
 * @returns {array} 语言列表
 */
module.exports = langList => langList.split(',').map(value => value.split(';')[0]);

/***/ }),

/***/ "./node_modules/koot/i18n/parse-locale-id.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/i18n/parse-locale-id.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const parseLanguageList = __webpack_require__(/*! ./parse-language-list */ "./node_modules/koot/i18n/parse-language-list.js");

const availableLocaleIds = __webpack_require__(/*! ./locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/**
 * 根据输入返回项目匹配的语言包ID (localeId)
 * 如果没有匹配，返回项目语言包ID的第一项
 * 注：仅为返回，没有赋值操作
 *
 * @param {string|string[]} input
 * @param {string[]} [localeIds] 可选语言ID列表
 * @returns 匹配的语言包ID localeId 或 availableLocaleIds[0]
 */


const parseLocaleId = (input, localeIds = availableLocaleIds) => {
  // 检查是否包含分号，如果是，按语言列表处理为array
  // eg: zh-CN,zh;q=0.8,en;q=0.6
  if (typeof input === 'string' && input.indexOf(';') > -1) input = parseLanguageList(input); // 检查是否为array

  if (Array.isArray(input)) {
    let id;
    input.some(thisId => {
      id = checkItem(thisId, localeIds);
      return id;
    });
    return id || localeIds[0];
  } else if (!input && typeof navigator !== 'undefined') return parseLocaleId(navigator.languages || navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || localeIds[0], localeIds);else if (input) return checkItem(input, localeIds) || localeIds[0];

  return localeIds[0];
};

module.exports = parseLocaleId; // ============================================================================

/**
 * 标准化语言包ID，方便匹配
 * - 全部小写
 * - `_` 变为 `-`
 * @param {string} input
 * @returns {string}
 */

const normalize = localeId => localeId.toLowerCase().replace(/_/g, '-');
/**
 * 获取基础语种
 * @param {string} localeId
 * @param {string} [seperator='-'] 连接线，默认为 `-`
 * @returns {string}
 */


const getLocaleBase = (localeId, seperator = '-') => localeId.split(seperator)[0];
/**
 * 检查单项，如果和availableLocales内的项目有匹配，返回匹配，否则返回null
 * @param {string} input 检查项
 * @param {string[]} [localeIds] 可选语言ID列表
 * @returns 匹配的 localeId 或 null
 */


const checkItem = (input, localeIds = availableLocaleIds) => {
  const inputNormalized = normalize(input);
  const localeIdsNormalized = localeIds.map(normalize);
  let result; // 如果有完整匹配的项，直接返回结果

  localeIdsNormalized.some((thisLocaleId, index) => {
    if (thisLocaleId === inputNormalized) {
      result = localeIds[index];
      return true;
    }

    return false;
  });
  if (result) return result; // 之后根据基础语种进行检查

  /** 基础语种 (eg: `zh-CN` 基础语种为 `zh`) */

  const baseLocale = getLocaleBase(inputNormalized, '-'); // 如果可选列表中有对应的基础语种，返回该结果

  localeIdsNormalized.some((thisLocaleId, index) => {
    if (thisLocaleId === baseLocale) {
      result = localeIds[index];
      return true;
    }

    return false;
  });
  if (result) return result; // 检查可选列表中每一项的基础语种，返回第一个匹配

  localeIdsNormalized.some((thisLocaleId, index) => {
    const thisBaseLocale = getLocaleBase(thisLocaleId, '-');

    if (thisBaseLocale === baseLocale) {
      result = localeIds[index];
      return true;
    }

    return false;
  });
  if (result) return result;
  return null;
};

/***/ }),

/***/ "./node_modules/koot/i18n/redux/index.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/i18n/redux/index.js ***!
  \***********************************************/
/*! exports provided: reducerLocaleId, actionInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerLocaleId", function() { return reducerLocaleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionInit", function() { return actionInit; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/i18n/action-types.js");
// import parseLanguageList from '../parse-language-list';
// import getLanguagelistFromState from '../get-language-list-from-state';
// import parseLocaleId from '../parse-locale-id';
// import locales from '../locales'

/**
 * Redux reducer: 初始化 localeId
 *
 * @param {*} state
 * @param {*} action
 *
 * @returns {*} state
 */

const reducerLocaleId = (state = null, action) => {
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__["I18N_INIT"]:
      return action.localeId;
  }

  return state;
}; // /**
//  * Redux reducer: 初始化 locales
//  *
//  * @param {*} state
//  * @param {*} action
//  *
//  * @returns {*} state
//  */
// export const reducerLocales = (state = {}, action) => {
//     switch (action.type) {
//         case I18N_SET_LOCALES:
//             return Object.assign({}, state, action.locales)
//     }
//     return state
// }

/**
 * Redux action: 初始化
 *
 * @param {Object} state
 * @returns {Object}
 */

const actionInit = localeId => {
  // setLocaleId(localeId)
  // const localeId = __SERVER__
  //     ? init(parseLanguageList(
  //         (typeof state === 'object') ? getLanguagelistFromState(state) : state
  //     ), state.localeId)
  //     : state.localeId
  // setLocaleId(localeId)
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["I18N_INIT"],
    localeId: '' + localeId
  };
}; // /**
//  * Redux action: 设置语言包内容对象
//  *
//  * @returns {Object}
//  */
// export const actionLocales = (state) => {
//     return {
//         type: I18N_SET_LOCALES,
//         locales: locales[state.localeId]
//     }
// }

/**
 * 服务器环境：根据语言列表，初始化i18n，获得并赋值 localeId
 *
 * @param {array|string} langList 语言列表
 *
 * @returns (如果已初始化)locales[localeId]
 */
// const init = (langList = [], localeId) => {
//     if (__SERVER__) {
//         // console.log(locales[localeId])
//         if (typeof langList === 'string')
//             if (langList.indexOf(';') > -1)
//                 langList = parseLanguageList(langList);
//             else return init([langList], localeId);
//         const parsed = parseLocaleId(langList);
//         // if (parsed) setLocaleId(parsed)
//         // else setLocaleId(localeId)
//         if (parsed) return parsed;
//         return localeId;
//         // if (locales[localeId]) return locales[localeId]
//     }
// };

/***/ }),

/***/ "./node_modules/koot/i18n/server/check-and-redirect.js":
/*!*************************************************************!*\
  !*** ./node_modules/koot/i18n/server/check-and-redirect.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_locale_ids__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_lang_from_ctx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-lang-from-ctx */ "./node_modules/koot/i18n/server/get-lang-from-ctx.js");
/* harmony import */ var _set_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../set-cookie */ "./node_modules/koot/i18n/set-cookie.js");
/* harmony import */ var _set_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_set_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_is_enabled__WEBPACK_IMPORTED_MODULE_3__);




/**
 * 在同构中间件流程的匹配 react 路由之前，检查是否需要跳转
 * 如果需要跳转，此时发送跳转请求
 * @param {Object} ctx
 * @returns {Boolean} 是否进行跳转
 */

const checkRouterRedirect = ctx => {
  if (!_is_enabled__WEBPACK_IMPORTED_MODULE_3___default()()) return false;

  if (false) {}

  if (false) {}

  return false;
};

/* harmony default export */ __webpack_exports__["default"] = (checkRouterRedirect);

/***/ }),

/***/ "./node_modules/koot/i18n/server/generate-html-redirect-metas.js":
/*!***********************************************************************!*\
  !*** ./node_modules/koot/i18n/server/generate-html-redirect-metas.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_locale_ids__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _generate_html_redirect_metas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generate-html-redirect-metas */ "./node_modules/koot/i18n/generate-html-redirect-metas.js");
/* harmony import */ var _generate_html_redirect_metas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_generate_html_redirect_metas__WEBPACK_IMPORTED_MODULE_2__);



/**
 * 生成用以声明该页面其他语种 URL 的 meta 标签的 HTML 代码
 * @param {Object} options
 * @param {Object} options.ctx
 * @param {Object} options.proxyRequestOrigin Koot 配置: server.proxyRequestOrigin
 * @param {String} options.localeId 当前语种
 * @returns {String} HTML 代码
 */

const generateHtmlRedirectMetas = ({
  ctx,
  localeId
  /*, proxyRequestOrigin*/

}) => {
  if (!_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_1___default()()) return '';
  return _generate_html_redirect_metas__WEBPACK_IMPORTED_MODULE_2___default()({
    localeId,
    availableLocaleIds: (_locale_ids__WEBPACK_IMPORTED_MODULE_0___default()),
    use: "undefined",
    ctx
  });
};

/* harmony default export */ __webpack_exports__["default"] = (generateHtmlRedirectMetas);

/***/ }),

/***/ "./node_modules/koot/i18n/server/get-lang-from-ctx.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/i18n/server/get-lang-from-ctx.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../defaults/defines */ "./node_modules/koot/defaults/defines.js");
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_locale_ids__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parse_locale_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse-locale-id */ "./node_modules/koot/i18n/parse-locale-id.js");
/* harmony import */ var _parse_locale_id__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parse_locale_id__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _set_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../set-cookie */ "./node_modules/koot/i18n/set-cookie.js");
/* harmony import */ var _set_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_set_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_is_enabled__WEBPACK_IMPORTED_MODULE_4__);
// import cookie from 'cookie'





/**
 * 根据 KOA Context 获取语种ID
 * @param {Object} ctx KOA Context
 * @returns {String} 匹配到的或当前项目默认语种ID
 */

const getLangFromCtx = ctx => {
  if (!_is_enabled__WEBPACK_IMPORTED_MODULE_4___default()()) return ''; // const localeIds = getLocaleIds()
  // 根据项目设置，从 URL 中抽取语种 ID

  if (false) {} else if (false) {} else {
    if (ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]]) {
      if (_locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.includes(ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]])) return ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]];
      ctx.redirect(ctx.url.replace(new RegExp(`(\\?|&)${_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]}=(.+)$`), '').replace(new RegExp(`(\\?|&)${_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]}=(.+)&`), ''));
      return _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0];
    }
  } // 如果上一步没有结果，从 COOKIE 中获取
  // const cookies = cookie.parse(ctx.request.header.cookie || '')
  // if (cookies[process.env.KOOT_I18N_COOKIE_KEY] && cookies[process.env.KOOT_I18N_COOKIE_KEY] !== 'null')
  //     return cookies[process.env.KOOT_I18N_COOKIE_KEY]


  const cookieValue = ctx.cookies.get("spLocaleId");

  if (cookieValue && _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.includes(cookieValue)) {
    return cookieValue;
  } // console.log('ctx.cookies.get(process.env.KOOT_I18N_COOKIE_KEY)', cookieValue)
  // 如果上一步没有结果，从请求 headers 中获取


  if (ctx.header['accept-language']) {
    // const acceptLanguage = ctx.header['accept-language']
    // const acceptLanguages = acceptLanguage.split(',').map(str => str.split(';')[0])
    // console.log('acceptLanguage', acceptLanguage)
    // console.log('acceptLanguages', acceptLanguages)
    // console.log('parsed locale id', parseLocaleId(acceptLanguage))
    const localeId = _parse_locale_id__WEBPACK_IMPORTED_MODULE_2___default()(ctx.header['accept-language']);
    if (localeId) return setLocale(localeId, ctx);
  } // 如果上一步没有结果，返回项目默认语种


  return setLocale(_locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0], ctx);
};

/* harmony default export */ __webpack_exports__["default"] = (getLangFromCtx);
/**
 * 服务器环境: 设置 cookie
 * @param {*} localeId
 */

const setLocale = (localeId, ctx) => {
  _set_cookie__WEBPACK_IMPORTED_MODULE_3___default()(localeId, ctx);
  return localeId;
};

/***/ }),

/***/ "./node_modules/koot/i18n/server/get-ssr-state.js":
/*!********************************************************!*\
  !*** ./node_modules/koot/i18n/server/get-ssr-state.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 返回多语言相关的 SSR 状态
 * @returns {Object}
 */
const getSSRState = SSRContext => {
  if (false) {}
  return {
    localeId: SSRContext.LocaleId,
    locales: JSON.parse("\"default\"") === 'store' ? SSRContext.locales[SSRContext.LocaleId] || {} : {}
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getSSRState);

/***/ }),

/***/ "./node_modules/koot/i18n/set-cookie.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/set-cookie.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 设置 cookie
 * @param {String} localeId
 * @param {Object} ctx Koa context
 */
module.exports = (localeId, ctx) => {
  const maxDate = 365;
  const options = {};

  if (typeof process.env.KOOT_I18N_COOKIE_DOMAIN === 'string' && process.env.KOOT_I18N_COOKIE_DOMAIN) {
    options.domain = process.env.KOOT_I18N_COOKIE_DOMAIN;
  }

  if (false) {}

  if (true) {// TODO: set cookie on server
    // console.log('ctx.host', ctx.host)
    // console.log('ctx.hostname', ctx.hostname)
    // console.log(process.env.KOOT_I18N_COOKIE_KEY, localeId, { domain: ctx.hostname, ...options })
    // ctx.cookies.set(process.env.KOOT_I18N_COOKIE_KEY, localeId, {
    //     domain: ctx.hostname,
    //     maxAge: maxDate * 24 * 60 * 60 * 1000,
    //     signed: false,
    //     ...options
    // })
  }
};

/***/ }),

/***/ "./node_modules/koot/i18n/validte-routes.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/i18n/validte-routes.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_is_enabled__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 根据当前项目配置，对路由对象进行改造
 * @param {Object} routes 
 * @returns {Object} routes
 */

const validateRoutes = (routes = {}) => {
  if (!_is_enabled__WEBPACK_IMPORTED_MODULE_0___default()()) return routes;

  if (false) {}

  return routes;
};

/* harmony default export */ __webpack_exports__["default"] = (validateRoutes);

/***/ }),

/***/ "./node_modules/koot/index.js":
/*!************************************!*\
  !*** ./node_modules/koot/index.js ***!
  \************************************/
/*! exports provided: createStore, reduxForCreateStore, extend, localeId, store, getStore, history, getHistory, getLocaleId, resetLocaleId, resetStore, resetHistory, getCache, getCtx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduxForCreateStore", function() { return reduxForCreateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCache", function() { return getCache; });
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _React_is_render_safe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./React/is-render-safe */ "./node_modules/koot/React/is-render-safe.js");
/* harmony import */ var _React_is_render_safe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_React_is_render_safe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/ssr/context */ "./node_modules/koot/libs/ssr/context.js");
/* harmony import */ var _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocaleId", function() { return _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__["getLocaleId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetLocaleId", function() { return _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__["resetLocaleId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetStore", function() { return _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__["resetStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetHistory", function() { return _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__["resetHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCtx", function() { return _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__["getKoaCtx"]; });

/* harmony import */ var _React_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./React/redux */ "./node_modules/koot/React/redux.js");
/* harmony import */ var _KOOT_HOC_EXTEND___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __KOOT_HOC_EXTEND__ */ "./node_modules/koot/React/component-extender.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _KOOT_HOC_EXTEND___WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localeId", function() { return _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__["localeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__["store"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStore", function() { return _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__["getStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "history", function() { return _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__["history"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHistory", function() { return _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__["getHistory"]; });



 // ============================================================================

/**
 * 手动创建 Redux Store 时需要的相关对象
 * @type {Object}
 */


const {
  createStore,
  ...reduxForCreateStore
} = _React_redux__WEBPACK_IMPORTED_MODULE_3__;

/**
 * 通用的高阶组件/方法的装饰器
 * @type {Function}
 */

 // ============================================================================


 // ============================================================================

const getCache = localeId => {
  if (!_React_is_render_safe__WEBPACK_IMPORTED_MODULE_1___default()()) return {};

  if (false) {}

  if (true) {
    const cache = Object(_libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__["get"])().globalCache;
    if (!cache) return {};
    if (localeId === true) return cache.get(Object(_libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__["getLocaleId"])());
    if (localeId) return cache.get(localeId) || {};
    return cache.get('__');
  }
}; // ============================================================================

 // ============================================================================

if (false) {}

/***/ }),

/***/ "./node_modules/koot/libs/error-msg.js":
/*!*********************************************!*\
  !*** ./node_modules/koot/libs/error-msg.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 生成错误信息
 * @param {String} msg
 * @returns {String}
 */
const errorMsg = (type, msg) => {
  if (typeof type === 'string' && typeof msg === 'string') return `${type}::${msg}`;
  return type;
};

module.exports = errorMsg;

/***/ }),

/***/ "./node_modules/koot/libs/filter-state.js":
/*!************************************************!*\
  !*** ./node_modules/koot/libs/filter-state.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const itemsBlacklist = ['localeId', 'realtimeLocation', 'routing', 'server'];
/**
 * 过滤 state，将黑名单内的项目删除，并返回过滤后的 state
 *
 * 黑名单中包括：
 * - `localeId`
 * - `realtimeLocation`
 * - `routing`
 * - `server`
 *
 * @param {Object} state
 * @returns {Object}
 */

const filter = oldState => itemsBlacklist.reduce((state, item) => {
  const {
    [item]: _,
    ...rest
  } = state;
  return rest;
}, oldState);

module.exports = filter;

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dev-tmp.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dev-tmp.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "path");

const getCwd = __webpack_require__(/*! ../utils/get-cwd */ "./node_modules/koot/utils/get-cwd.js");
/**
 * _仅针对开发环境_ 获取开发环境临时目录
 * @param {String} [cwd]
 * @param {String} [type]
 * @returns {String} 如果提供 `type`，则返回对应类型的目录
 */


module.exports = (cwd = getCwd(), type = "") => path.resolve(cwd, 'logs/dev', type ? `.${type}` : '');

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dist-public-foldername.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dist-public-foldername.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 获取客户端打包结果 public 目录名
 * @returns {String}
 */
module.exports = () =>  false ? undefined : `public`;

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dist-public.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dist-public.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "path");

const getDirDistPublicFoldername = __webpack_require__(/*! ./get-dir-dist-public-foldername */ "./node_modules/koot/libs/get-dir-dist-public-foldername.js");
/**
 * 获取打包结果基础目录
 * 最终的打包目录是该目录下的 includes (默认情况)
 * @param {String} dist 打包结果目录
 * @returns {String}
 */


module.exports = dist => {
  if (!result) {
    result = path.resolve(dist, getDirDistPublicFoldername());
  }

  return result;
};

let result;

/***/ }),

/***/ "./node_modules/koot/libs/get-log-msg.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/libs/get-log-msg.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const chalk = __webpack_require__(/*! chalk */ "chalk");
/**
 * 生成 log 消息内容
 * @variation 只提供内容
 * @param {String} content 内容
 */

/**
* 生成 log 消息内容
* @variation 提供标记和内容
* @param {String|Boolean} [mark=""] 标记
* @param {String} content 内容
*/

/**
* 生成 log 消息内容
* @variation 提供标记、类型和内容
* @param {String|Boolean} [mark=""] 标记
* @param {String} [type=""] 操作类型
* @param {String} content 内容
*/


const generateLogMsg = (mark, type, content) => {
  if (typeof mark !== 'undefined' && typeof type === 'undefined' && typeof content === 'undefined') return generateLogMsg('', '', mark);
  if (typeof type !== 'undefined' && typeof content === 'undefined') return generateLogMsg(mark, '', type);
  let markColor = 'cyan';
  if (mark === false) mark = '';

  switch (mark.toLowerCase()) {
    case '×':
    case 'x':
    case 'x ':
    case 'error':
      {
        mark = '× ';
        markColor = 'redBright';
        break;
      }

    case 'success':
      {
        mark = '√ ';
        markColor = 'green';
        break;
      }

    case 'cb':
    case 'callback':
      {
        mark = '⚑ ';
        markColor = 'cyan';
        break;
      }

    case 'warning':
      {
        mark = '! ';
        markColor = 'yellowBright';
        break;
      }

    case '':
      {
        break;
      }

    default:
      {
        mark = '  ';
      }
  }

  const typeColor = (() => {
    switch (type) {
      default:
        return 'yellowBright';
    }
  })();

  return (mark === '' ? '' : chalk[markColor](mark)) + chalk[typeColor](`[koot${type ? `/${type}` : ''}] `) + content;
};

module.exports = generateLogMsg;

/***/ }),

/***/ "./node_modules/koot/libs/get-ssr-state-string.js":
/*!********************************************************!*\
  !*** ./node_modules/koot/libs/get-ssr-state-string.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 输出 SSR 时需要的 state 字符串形式结果
 * @param {Object} state
 * @returns {string}
 */
const getSSRStateString = (state = {}) => `JSON.parse(` + `decodeURIComponent("${encodeURIComponent(JSON.stringify(state))}"))`;

module.exports = getSSRStateString;

/***/ }),

/***/ "./node_modules/koot/libs/get-sw-scope-from-env.js":
/*!*********************************************************!*\
  !*** ./node_modules/koot/libs/get-sw-scope-from-env.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-restricted-globals */
const {
  scopeNeedTransformPathname
} = __webpack_require__(/*! ../defaults/defines-service-worker */ "./node_modules/koot/defaults/defines-service-worker.js");
/**
 * 基于环境变量，获取 service worker 的 scope
 * @param {string} [scope]
 * @returns {string} scope 路径名，前后都有 `/`
 */


module.exports = valueScope => {
  let scope = valueScope;
  if (!scope) try {
    scope = JSON.parse("\"/\"") || '/';
  } catch (e) {
    scope = '/';
  }

  if (scope === scopeNeedTransformPathname) {
    scope = typeof window !== 'undefined' ? window.location.pathname : typeof location !== 'undefined' ? location.pathname : scopeNeedTransformPathname;
  }

  if (scope !== scopeNeedTransformPathname) {
    // 确保前后都有 `/`
    scope = /^\//.test(scope) ? scope : `/${scope}`;
    scope = /\/$/.test(scope) ? scope : `${scope}/`;
  }

  return scope;
};

/***/ }),

/***/ "./node_modules/koot/libs/log.js":
/*!***************************************!*\
  !*** ./node_modules/koot/libs/log.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-console */

/**
 * 命令行 Log
 * @variation 1
 * @param {String} content 内容
 */

/**
* 命令行 Log
* @variation 2
* @param {String} [type=""] 操作类型
* @param {String} content 内容
*/

/**
* 命令行 Log
* @variation 3
* @param {String} [mark=""] 标记
* @param {String} [type=""] 操作类型
* @param {String} content 内容
*/
module.exports = (...args) => {
  console.log(__webpack_require__(/*! ./get-log-msg */ "./node_modules/koot/libs/get-log-msg.js")(...args));
};

/***/ }),

/***/ "./node_modules/koot/libs/ssr/context.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/libs/ssr/context.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global
    __KOOT_SSR__:false
    __KOOT_CTX__:false
*/

/**
 * 当前 SSR context 对象
 * @typedef {Object} KootSSRContext
 * @property {Object} Store - 数据存储空间
 * @property {History} History - 历史纪录对象
 * @property {string} [LocaleId] - 当前语种ID
 * @property {Object} [locales] - 语言包对象，包含所有语种
 * @property {Map} globalCache - 公共缓存空间
 * @property {Object} [proxyRequestOrigin={}] - 配置项 `proxyRequestOrigin`
 * @property {string} template - EJS 模板
 * @property {Object} [templateInject={}] - EJS 自定义注入对象
 *
                    thisTemplateInjectCache,
                    thisEntrypoints,
                    thisFilemap, //thisStyleMap,
                    thisManifest,
                    styleMap,
                    connectedComponents: __DEV__
                        ? (global[SSRContext]
                              ? global[SSRContext].connectedComponents
                              : []) || []
                        : [],
 */
// ============================================================================
const {
  ssrContext: SSRContext,
  koaContext: KOAContext
} = __webpack_require__(/*! ../../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js"); // ============================================================================

/** @type {KootSSRContext} */


let kootSSRContext;
let koaCtx;

if (false) {} // ============================================================================

/**
 * 获取 SSR context 对象
 * @returns {KootSSRContext}
 */


function get() {
  if (false) {}
  if (false) {}
  if (typeof kootSSRContext === 'object') return kootSSRContext;
  if (typeof __KOOT_SSR__ === 'object') return __KOOT_SSR__;
  return {};
}
/**
 * 获取 Koa ctx 对象
 */


function getKoaCtx() {
  if (false) {}
  if (false) {}
  if (typeof koaCtx === 'object') return koaCtx;
  if (typeof __KOOT_CTX__ === 'object') return __KOOT_CTX__;
  return {};
}
/**
 * 设置当前 Koa ctx 和 Koot SSR context 对象
 * @param {*} ctx
 */


function set(ctx) {
  if (false) {} // console.log('set', ctx, 'locales', ctx[SSRContext].locales);

  if (false) {}
  kootSSRContext = ctx[SSRContext];
  koaCtx = ctx;
  resetLocaleId();
  resetStore();
  resetHistory();
} // ============================================================================


const getLocaleId = () => {
  if (false) {}

  if (true) {
    if (false) {}
    return get().LocaleId;
  }
};

let localeId = (() => getLocaleId())();

const resetLocaleId = newValue => {
  if ( true && newValue === false) {
    localeId = undefined;
    delete get().LocaleId;
    return;
  }

  if (newValue) get().LocaleId = newValue;
  localeId = newValue || getLocaleId();
}; // ============================================================================


const getStore = () => {
  if (false) {}

  if (true) {
    if (false) {}
    return get().Store;
  }
};

let store = (() => getStore())();

const resetStore = newValue => {
  if (newValue) get().Store = newValue;
  store = newValue || getStore();
}; // ============================================================================


const getHistory = () => {
  if (false) {}

  if (true) {
    if (false) {}
    return get().History;
  }
};

let history = (() => getHistory())();

const resetHistory = newValue => {
  if (newValue) get().History = newValue;
  history = newValue || getHistory();
}; // ============================================================================


function reset() {
  resetLocaleId(false); // purgeObj(kootSSRContext);

  kootSSRContext = undefined;
  koaCtx = undefined;
} // const purgeObj = (obj) => {
//     if (typeof obj === 'object') {
//         for (const [key, value] of Object.entries(obj)) {
//             if (typeof value === 'object') {
//                 purgeObj(value);
//             }
//             // console.log(key);
//             try {
//                 obj[key] = undefined;
//             } catch (e) {}
//             delete obj[key];
//         }
//     }
// };
// ============================================================================


module.exports = {
  set,
  get,
  getKoaCtx,
  localeId,
  getLocaleId,
  resetLocaleId,
  store,
  getStore,
  resetStore,
  history,
  getHistory,
  resetHistory,
  reset
};

/***/ }),

/***/ "./node_modules/koot/utils/generate-filemap-from-compilation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/koot/utils/generate-filemap-from-compilation.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "path");
/**
 * 从 Webpack compilation 数据中生成文件对应表 (Filemap)
 * @param {Object} compilation 
 * @param {String} [dirRelative] 
 * @returns {Object} 文件对应表 (Filemap)
 */


module.exports = (compilation, dirRelative) => {
  if (typeof compilation !== 'object') return undefined;
  const filemap = {};
  const stats = compilation.getStats();

  for (let id in stats.compilation.chunks) {
    const o = stats.compilation.chunks[id];
    if (typeof o.name === 'undefined' || o.name === null) continue;

    if (Array.isArray(o.files)) {
      o.files.filter(filename => !/\.(js|css)\.map$/i.test(filename)).forEach(filename => {
        const extname = path.extname(filename);
        const file = o.name + extname;
        if (typeof filemap[file] !== 'string') filemap[file] =  false ? undefined : (dirRelative ? dirRelative + '/' : '') + filename;
      });
    }
  }

  return filemap;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-build-manifest-path.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/utils/get-build-manifest-path.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "path");

const getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

const getDirDevTmp = __webpack_require__(/*! ../libs/get-dir-dev-tmp */ "./node_modules/koot/libs/get-dir-dev-tmp.js");

const {
  buildManifestFilename
} = __webpack_require__(/*! ../defaults/before-build */ "./node_modules/koot/defaults/before-build.js");
/**
 * 获取打包文件清单文件 (build-manifest) 的文件路径
 * @param {string} [dist] 打包结果目录，默认为项目指定的路径
 * @returns {string}
 */


module.exports = (dist = getDistPath()) => {
  if (false) {}
  return path.resolve(dist, buildManifestFilename);
};

/***/ }),

/***/ "./node_modules/koot/utils/get-chunkmap-path.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/utils/get-chunkmap-path.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 获取打包文件对应表 (chunkmap) 的文件路径
 * @param {string} [dist] 打包结果目录，默认为项目指定的路径
 * @returns {string}
 */
module.exports = __webpack_require__(/*! ./get-build-manifest-path */ "./node_modules/koot/utils/get-build-manifest-path.js");

/***/ }),

/***/ "./node_modules/koot/utils/get-chunkmap.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/utils/get-chunkmap.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fs = __webpack_require__(/*! fs */ "fs");

const getIsI18nEnabled = __webpack_require__(/*! ../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");

const getI18nType = __webpack_require__(/*! ../i18n/get-type */ "./node_modules/koot/i18n/get-type.js");

const getChunkmapPath = __webpack_require__(/*! ./get-chunkmap-path */ "./node_modules/koot/utils/get-chunkmap-path.js");

const getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

let cachedChunkmap;
/**
 * 获取打包文件对应表 (chunkmap)
 *
 * @param {String} [localeId] 当前语言，默认为当前语言 (i18n开启时) 或未指定 (i18n未开启时)
 * @param {Boolean} [getFullResult = false] 仅 i18n 开启时：获取 chunkmap 全文，而非当前语言的片段
 * @param {Boolean} [ignoreCache = false] 忽略结果缓存，强制重新获取对照表
 * @returns {Object}
 */

const getChunkmap = (localeId, getFullResult = false, ignoreCache = false) => {
  if (localeId === true) {
    return getChunkmap(getFullResult || undefined, true);
  }

  const isI18nEnabled = getIsI18nEnabled();

  if (isI18nEnabled && typeof localeId === 'undefined') {
    try {
      localeId = __webpack_require__(/*! ../index */ "./node_modules/koot/index.js").localeId;
    } catch (e) {}
  }

  const i18nType = getI18nType();
  const isI18nDefault = isI18nEnabled && i18nType === 'default';

  const chunkmap = (() => {
    if (!ignoreCache && cachedChunkmap) return cachedChunkmap;
    let chunkmap;
    if (typeof global.chunkmap === 'object') chunkmap = global.chunkmap;

    try {
      chunkmap = JSON.parse("{\".zh\":{\".public\":\"public/\",\".out\":\"public/\",\".entrypoints\":{\"critical\":[\"public/includes/extract.2.c82ab8d5f7c00bacea61.css\",\"public/includes/entry.c82ab8d5f7c00bacea61.js\"],\"client\":[\"public/includes/chunk.aece61d87276133c194d.js\",\"public/includes/chunk.37ba2d82068da4b8f35a.js\",\"public/includes/entry.67ecf3eafe7c032e580c.js\"],\"__KOOT__CLIENT__RUN__FIRST__\":[\"public/includes/entry.d89ce77fa71277089517.js\"]},\".files\":{\"__KOOT__CLIENT__RUN__FIRST__.js\":\"public/includes/entry.d89ce77fa71277089517.js\",\"client.js\":\"public/includes/entry.67ecf3eafe7c032e580c.js\",\"critical.css\":\"public/includes/extract.2.c82ab8d5f7c00bacea61.css\",\"critical.js\":\"public/includes/entry.c82ab8d5f7c00bacea61.js\",\"libs.js\":\"public/includes/chunk.aece61d87276133c194d.js\",\"vendors~client.js\":\"public/includes/chunk.37ba2d82068da4b8f35a.js\",\"__KOOT__EXTRACT__CSS__.css\":\"public/includes/extract.all.5d2f36ec5091395800d4fd2785bf716d.small.css\"},\"service-worker\":[\"public/service-worker.zh.js\"],\".htmlMetaTags__\":\"<link rel=\\\"shortcut icon\\\" href=\\\"/includes/webapp.9db7a190/favicon.ico\\\"><link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"/includes/webapp.9db7a190/favicon-16x16.png\\\"><link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"/includes/webapp.9db7a190/favicon-32x32.png\\\"><link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"48x48\\\" href=\\\"/includes/webapp.9db7a190/favicon-48x48.png\\\"><link rel=\\\"manifest\\\" href=\\\"/includes/webapp.9db7a190/manifest.json\\\"><meta name=\\\"mobile-web-app-capable\\\" content=\\\"yes\\\"><meta name=\\\"theme-color\\\" content=\\\"#fbfbfb\\\"><meta name=\\\"application-name\\\" content=\\\"sp.diablohu.com\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"57x57\\\" href=\\\"/includes/webapp.9db7a190/apple-touch-icon-57x57.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"60x60\\\" href=\\\"/includes/webapp.9db7a190/apple-touch-icon-60x60.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"72x72\\\" href=\\\"/includes/webapp.9db7a190/apple-touch-icon-72x72.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"76x76\\\" href=\\\"/includes/webapp.9db7a190/apple-touch-icon-76x76.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"114x114\\\" href=\\\"/includes/webapp.9db7a190/apple-touch-icon-114x114.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"120x120\\\" href=\\\"/includes/webapp.9db7a190/apple-touch-icon-120x120.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"144x144\\\" href=\\\"/includes/webapp.9db7a190/apple-touch-icon-144x144.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"152x152\\\" href=\\\"/includes/webapp.9db7a190/apple-touch-icon-152x152.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"167x167\\\" href=\\\"/includes/webapp.9db7a190/apple-touch-icon-167x167.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"/includes/webapp.9db7a190/apple-touch-icon-180x180.png\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"1024x1024\\\" href=\\\"/includes/webapp.9db7a190/apple-touch-icon-1024x1024.png\\\"><meta name=\\\"apple-mobile-web-app-capable\\\" content=\\\"yes\\\"><meta name=\\\"apple-mobile-web-app-status-bar-style\\\" content=\\\"black-translucent\\\"><meta name=\\\"apple-mobile-web-app-title\\\" content=\\\"sp.diablohu.com\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-640x1136.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-750x1334.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-828x1792.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-1125x2436.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-1242x2208.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\\"    href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-1242x2688.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"   href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-1536x2048.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"   href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-1668x2224.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"   href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-1668x2388.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"  href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-2048x2732.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\\"  href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-1620x2160.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-1136x640.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-1334x750.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-1792x828.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-2436x1125.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-2208x1242.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\\"   href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-2688x1242.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"  href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-2048x1536.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"  href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-2224x1668.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"  href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-2388x1668.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\" href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-2732x2048.png\\\"><link rel=\\\"apple-touch-startup-image\\\" media=\\\"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\\"  href=\\\"/includes/webapp.9db7a190/apple-touch-startup-image-2160x1620.png\\\"><link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"228x228\\\" href=\\\"/includes/webapp.9db7a190/coast-228x228.png\\\"><meta name=\\\"msapplication-TileColor\\\" content=\\\"#212121\\\"><meta name=\\\"msapplication-TileImage\\\" content=\\\"/includes/webapp.9db7a190/mstile-144x144.png\\\"><meta name=\\\"msapplication-config\\\" content=\\\"/includes/webapp.9db7a190/browserconfig.xml\\\"><link rel=\\\"yandex-tableau-widget\\\" href=\\\"/includes/webapp.9db7a190/yandex-browser-manifest.json\\\">\"}}");
    } catch (e) {
      chunkmap = false;
    }

    if (typeof chunkmap !== 'object' && typeof getDistPath() === 'string') {
      chunkmap = JSON.parse(fs.readFileSync(getChunkmapPath(), 'utf-8'));
      if (process.env.WEBPACK_BUILD_STAGE === 'server') global.chunkmap = chunkmap;
    }

    if (true) cachedChunkmap = chunkmap;
    return chunkmap;
  })();

  if (typeof chunkmap === 'object') {
    // let chunkmap = fs.readJsonSync(pathChunckmap)
    if (getFullResult) return chunkmap || {};
    if (isI18nEnabled && isI18nDefault) return chunkmap[`.${localeId}`] || {};
  }

  return chunkmap || {};
};

module.exports = getChunkmap;

/***/ }),

/***/ "./node_modules/koot/utils/get-client-file-path.js":
/*!*********************************************************!*\
  !*** ./node_modules/koot/utils/get-client-file-path.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global
    __KOOT_LOCALEID__:false
*/
const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const getI18nType = __webpack_require__(/*! ../i18n/get-type */ "./node_modules/koot/i18n/get-type.js");

const getPublicPath = __webpack_require__(/*! ./get-public-dir */ "./node_modules/koot/utils/get-public-dir.js");

const getChunkmap = __webpack_require__(/*! ./get-chunkmap */ "./node_modules/koot/utils/get-chunkmap.js");
/**
 * 获指定文件在客户端/取浏览器端中的可访问路径
 * @param {String} filename 要查找的文件的文件名。根据打包文件对应表 (chunkmap) 查询文件名和实际打包结果文件的对应关系
 * @param {String} [localeId] 当前语言
 * @param {Boolean} [isPathname = false] 如果标记为 true，表示提供的 filename 为确切的访问地址，无需查询对照表，直接返回结果
 * @param {Boolean} [isSSRReading = false] 如果标记为 true，表示用于 SSR 时读取文件，会对 publicPath 进行特殊处理
 * @returns {String|String[]} 浏览器环境中的访问路径、空字符串或包含所有可能结果的 Array
 */


const getFilePath = (filename, localeId, isPathname = false, isSSRReading = false) => {
  // 如果第一个参数为 true，表示完全信任，不进行 chunkmap 对照查询，直接进行处理并返回结果
  if (filename === true) return getFilePath(localeId, isPathname || undefined, true, isSSRReading);

  if (typeof localeId === 'undefined') {
    try {
      if (false) {} else {
        localeId = __webpack_require__(/*! ../index */ "./node_modules/koot/index.js").localeId;
      }
    } catch (e) {// console.error(e);
    }
  }

  const pathPublic = getPublicPath(isSSRReading);
  const i18nType = getI18nType();
  const isI18nDefault = i18nType === 'default';
  const isDev =  false ||  true && false; // const localeId = 'zh'
  // 如果标记为 pathname，直接返回结果

  if (isPathname) return pathPublic + filename.replace(/(^\.\/|^)public\//, '');
  const chunkmap = getChunkmap(localeId);
  const regPublicPath = chunkmap['.public'] ? new RegExp(`(^\\.\\/|^)${chunkmap['.public']}`) : /(^\.\/|^)public\//;
  /**************************************************************************
   *   ┌─┐┌─┐┌┬┐┌┬┐┌─┐┌┐┌  ┌─┐┬ ┬┌┐┌┌─┐┌┬┐┬┌─┐┌┐┌┌─┐
   *  │  │ ││││││││ ││││  ├┤ │ │││││   │ ││ ││││└─┐
   * └─┘└─┘┴ ┴┴ ┴└─┘┘└┘  └  └─┘┘└┘└─┘ ┴ ┴└─┘┘└┘└─┘
   *************************************************************************/

  /**
   * 返回可供客户端/浏览器端使用的访问地址
   * @param {String} pathname
   * @returns {String}
   */

  const getResultPathname = pathname => pathPublic + pathname.replace(regPublicPath, '');
  /**************************************************************************
   *   ┌┬┐┌─┐┌┐ ┬ ┬┌─┐
   *   ││├┤ ├┴┐│ ││ ┬
   * ─┴┘└─┘└─┘└─┘└─┘
   *************************************************************************/
  // console.log('----------')
  // console.log(filename)
  // console.log(chunkmap)
  // console.log(chunkmap['.files'])
  // console.log(chunkmap['.files'][filename])
  // console.log(regPublicPath)
  // console.log(pathPublic + chunkmap['.files'][filename].replace(regPublicPath, ''))
  // console.log({
  //     regPublicPath,
  // })
  // console.log('----------')

  /**************************************************************************
   *   ┌─┐┬ ┬┌─┐┌─┐┬┌─   ┬   ┬─┐┌─┐┌┬┐┬─┐┬ ┬┌┐┌┌─┐
   *  │  ├─┤├┤ │  ├┴┐  ┌┼─  ├┬┘├┤  │ ├┬┘│ ││││└─┐
   * └─┘┴ ┴└─┘└─┘┴ ┴  └┘   ┴└─└─┘ ┴ ┴└─└─┘┘└┘└─┘
   *************************************************************************/
  // 检查 `.files` 下是否有该文件名的直接对应
  // 如果有，直接返回该结果


  if (typeof chunkmap === 'object' && typeof chunkmap['.files'] === 'object' && typeof chunkmap['.files'][filename] === 'string') {
    return getResultPathname(chunkmap['.files'][filename]);
  }

  if (isDev) {
    const prefix = pathPublic + (isI18nDefault ? localeId : '');
    if (typeof chunkmap['.files'] === 'object' && typeof chunkmap['.files'][filename] === 'string') return prefix + chunkmap['.files'][filename];
    return prefix + `.${filename}`;
  }
  /** @type {String} 目标文件的扩展名 */


  const extname = path.extname(filename);
  /** @type {String} 目标文件的文件名（不包括扩展名） */

  const basename = path.basename(filename, extname); // 检查 `.entrypoints` 下是否有该文件的文件名对应（不包括扩展名）
  // 如果有，同时只有一个结果，返回该结果
  // 如果有，同时有多个结果，返回包含所有结果的 Array

  if (Array.isArray(chunkmap['.entrypoints'][basename])) {
    const files = chunkmap['.entrypoints'][basename].filter(file => path.extname(file) === extname);
    if (files.length === 1) return getResultPathname(files[0]);else if (files.length) return files.map(file => getResultPathname(file));
  } // 检查 chunkmap 第一级是否有包含该文件的文件名的对应（不包括扩展名）
  // 如果有，直接返回该结果


  if (typeof chunkmap === 'object') {
    let result;

    if (Array.isArray(chunkmap[basename])) {
      chunkmap[basename].some(value => {
        if (path.extname(value) === extname) {
          result = value;
          return true;
        }

        return false;
      });
    }

    if (result) return getResultPathname(result);
  } // 如果没有找到 chunkmap 或是 chunkmap 中未找到目标项目，转为过滤文件形式
  // if (fs.existsSync(path.resolve(pathPublic, filename))) {
  //     return '/' + filename;
  // }


  if (fs.existsSync(path.resolve(filename))) {
    return pathPublic + filename;
  }

  console.warn(`File not found:` + (isI18nDefault ? `[${localeId}] ` : '') + ` ${filename}`);
  return ''; // const segs = pathname.split('/').filter(seg => seg !== '/')
  // const file = segs.pop()
  // const dir = segs.length ? `${segs.join('/')}/` : ''
  // return `/${dir}${
  //     require('./filterTargetFile')(
  //         require('./readFilesInPath')(`./${distPathname}/public/${appName ? `${appName}/` : ''}${dir}`),
  //         file
  //     )}`
};

module.exports = getFilePath; // module.exports = (pathname, pathDist = 'dist') => {
//     if (__DEV__) {
//         return `http://localhost:${process.env.WEBPACK_DEV_SERVER_PORT || '3001'}/dist/${pathname}`
//     } else {
//         const segs = pathname.split('/').filter(seg => seg !== '/')
//         const file = segs.pop()
//         const dir = segs.length ? `${segs.join('/')}/` : ''
//         return `/${dir}${
//             require('./filterTargetFile')(
//                 require('./readFilesInPath')(`./${pathDist}/public/${dir}`),
//                 file
//             )}`
//     }
// }

/***/ }),

/***/ "./node_modules/koot/utils/get-cwd.js":
/*!********************************************!*\
  !*** ./node_modules/koot/utils/get-cwd.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 获取运行目录
 * @returns {String}
 */
module.exports = () => {
  // console.log('process.env.KOOT_CWD', process.env.KOOT_CWD)
  // console.log('process.cwd()', process.cwd())
  return typeof process.env.KOOT_CWD === 'string' ? process.env.KOOT_CWD : process.cwd();
};

/***/ }),

/***/ "./node_modules/koot/utils/get-dist-path.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/utils/get-dist-path.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const getCwd = __webpack_require__(/*! ./get-cwd */ "./node_modules/koot/utils/get-cwd.js");

let p;
/**
 * 获取打包结果路径
 * @returns {String} 打包结果路径 (硬盘绝对路径)
 */

module.exports = () => {
  // console.log('global.KOOT_DIST_DIR', global.KOOT_DIST_DIR)
  if (typeof p !== 'string') {
    p = typeof global.KOOT_DIST_DIR === 'string' ? global.KOOT_DIST_DIR : (() => {
      let cwd = getCwd();
      let parent = path.resolve(cwd, '..');
      let result = path.resolve(cwd, "dist");

      while (!fs.existsSync(result) && cwd !== parent) {
        cwd = parent;
        parent = path.resolve(cwd, '..');
        result = path.resolve(cwd, "dist");
      }

      if (fs.existsSync(result)) return result;
      return path.resolve(cwd, "dist");
    })();
  }

  return p;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-port.js":
/*!*********************************************!*\
  !*** ./node_modules/koot/utils/get-port.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// require('./init-node-env')()

/**
 * 获取 Web 服务器端口号
 * @param {Object|number} port
 * @param {string} [env=process.env.WEBPACK_BUILD_ENV]
 * @returns {number}
 */
module.exports = (port, env = "prod") => {
  // console.log({
  //     ENV: process.env.WEBPACK_BUILD_ENV,
  //     SERVER_PORT: process.env.SERVER_PORT,
  //     __SERVER_PORT__: __SERVER_PORT__
  // });
  const defaultPort =  true && typeof process.env.SERVER_PORT !== 'undefined' ? process.env.SERVER_PORT :
  /* typeof process.env.SERVER_PORT === 'undefined' && */
   true ? "8090" : undefined;

  if (typeof port === 'object') {
    if (!env) env = 'prod';
    if (typeof port[env] !== 'undefined') return port[env];
    return defaultPort;
  }

  if (typeof port !== 'undefined' && typeof port !== 'boolean') return port;
  return defaultPort;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-public-dir.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/utils/get-public-dir.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const getWDSport = __webpack_require__(/*! ./get-webpack-dev-server-port */ "./node_modules/koot/utils/get-webpack-dev-server-port.js");

let publicPath;
let publicPathSSRReading;
/**
 * 获取浏览器环境中的访问根路径
 * @param {Boolean} [isSSRReading = false] 如果标记为 true，表示用于 SSR 时读取文件，会对 publicPath 进行特殊处理
 * @returns {String} 浏览器环境中的访问根路径
 */

module.exports = (isSSRReading = false) => {
  if (isSSRReading && typeof publicPathSSRReading === 'string') return publicPathSSRReading;
  if (typeof publicPath === 'string') return publicPath;
  const isDev =  false ||  true && false;

  if (false) {} else if (isDev) {
    const port = getWDSport();
    const origin = typeof global.koaCtxOrigin === 'string' ? global.koaCtxOrigin.split(':').slice(0, 2).join(':') : 'http://localhost';
    publicPath = `${origin}:${port}/dist/`;
    publicPathSSRReading = publicPath;
  } else if (true) {
    publicPath = JSON.parse("\"/\"");
    publicPathSSRReading = '/';
  } else {}

  if (isSSRReading) return publicPathSSRReading;
  return publicPath;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-webpack-dev-server-port.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/utils/get-webpack-dev-server-port.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 获取 webpack-dev-server 端口号
 * @returns {Number}
 */
module.exports = () => {
  // console.log('process.env.WEBPACK_DEV_SERVER_PORT', process.env.WEBPACK_DEV_SERVER_PORT)
  return "3001" || false;
};

/***/ }),

/***/ "./node_modules/koot/utils/read-client-file.js":
/*!*****************************************************!*\
  !*** ./node_modules/koot/utils/read-client-file.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const isUrl = __webpack_require__(/*! is-url */ "is-url");

const getFilePath = __webpack_require__(/*! ./get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");

const generateFilemap = __webpack_require__(/*! ./generate-filemap-from-compilation */ "./node_modules/koot/utils/generate-filemap-from-compilation.js");

const getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

const getPort = __webpack_require__(/*! ./get-port */ "./node_modules/koot/utils/get-port.js");

const getDirDistPublic = __webpack_require__(/*! ../libs/get-dir-dist-public */ "./node_modules/koot/libs/get-dir-dist-public.js"); // ============================================================================

/**
 * 读取目标客户端打包结果文件的内容
 * @param {String} filename 要查找的文件的文件名。根据打包文件对应表 (chunkmap) 查询文件名和实际打包结果文件的对应关系
 * @param {String} [localeId] 当前语言
 * @param {Object} [compilation] Webpack compilation 对象
 * @param {Boolean} [isPathname=false] 如果标记为 true，表示提供的 filename 为确切的访问地址，无需查询对照表，直接返回结果
 * @returns {String} 文件内容
 */


const readClientFile = (filename, localeId, compilation, isPathname = false) => {
  // 如果第一个参数为 true，表示标记为 pathname
  if (filename === true) return readClientFile(localeId, compilation || undefined, isPathname || undefined, true); // 如果提供了 webpack compilation 数据，尝试从其中查询对应文件的最终内容并返回

  if (typeof compilation === 'object') {
    const filemap = generateFilemap(compilation);

    if (typeof filemap === 'object') {
      // console.log('\n' + filename)
      // console.log(`typeof filemap["${filename}"]`, typeof filemap[filename])
      // console.log(`typeof compilation.assets["${filemap[filename]}"]`, typeof compilation.assets[filemap[filename]])
      // for (let key in compilation) {
      //     console.log(key)
      // }
      if (typeof filemap[filename] === 'string' && typeof compilation.assets[filemap[filename]] !== 'undefined') {
        const asset = compilation.assets[filemap[filename]]; // console.log(filename, filemap[filename])
        // if (!asset._value) {
        //     console.log(asset)
        // }
        // console.log('typeof asset.source', typeof asset.source)

        if (typeof asset.source === 'function') return asset.source();
        if (typeof asset._value !== 'undefined') return asset._value;
        if (typeof asset._cachedSource !== 'undefined') return asset._cachedSource; // return '123'
      }
    }
  } // 在打包结果中寻找指定文件


  let pathnames = getFilePath(filename, localeId, isPathname, true);
  if (!Array.isArray(pathnames)) pathnames = [pathnames];
  const results = pathnames.map(pathname => {
    if (isUrl(pathname)) {
      if (false) {} else {
        return `<!-- The pathname for file '${filename}' is a URL. Rendering file content from URL can only be done in DEV mode. -->`;
      }
    }

    if (false) {}

    return fs.readFileSync(path.resolve(getDirDistPublic(getDistPath()), pathname.replace(/^\//, '')), 'utf-8');
  });
  return results.join('\n\n');
};

module.exports = readClientFile;

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var Symbol = root.Symbol;
module.exports = Symbol;

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

module.exports = apply;

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

module.exports = arrayMap;

/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;

/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** Built-in value references. */


var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */


var baseFor = createBaseFor();
module.exports = baseFor;

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */


function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}

module.exports = baseGet;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }

  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeysIn;

/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");
/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }

  baseFor(source, function (srcValue, key) {
    stack || (stack = new Stack());

    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }

      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;

/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");
/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }

  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;

    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;

      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }

  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;

/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */


function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */


function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }

  path = castPath(path, object);
  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

module.exports = baseSet;

/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};
module.exports = baseSetToString;

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = baseToString;

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */


function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }

  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */


function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */


function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

module.exports = copyArray;

/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */


function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }

  return object;
}

module.exports = copyObject;

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */


function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = sources[index];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  });
}

module.exports = createAssigner;

/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];

      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}

module.exports = createBaseFor;

/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */


function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }

  var type = typeof index;

  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }

  return false;
}

module.exports = isIterateeCall;

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used to match property names within property paths. */


var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = typeof value;

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");
/** Used to detect methods masquerading as native. */


var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");
/** Used as the maximum memoize cache size. */


var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */

function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

module.exports = nativeKeysIn;

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */


var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;

/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var setToString = shortOut(baseSetToString);
module.exports = setToString;

/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");
/** Used as the size to enable large array optimizations. */


var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");
/** Used to match property names within property paths. */


var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = memoizeCapped(function (string) {
  var result = [];

  if (string.charCodeAt(0) === 46
  /* . */
  ) {
      result.push('');
    }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
module.exports = stringToPath;

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toKey;

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

module.exports = toSource;

/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

module.exports = constant;

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */


function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */


function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */


function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");
/** Error message constants. */


var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function () {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = MapCache;
module.exports = memoize;

/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");
/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */


var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
module.exports = merge;

/***/ }),

/***/ "./node_modules/lodash/set.js":
/*!************************************!*\
  !*** ./node_modules/lodash/set.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js");
/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */


function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");
/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */


function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

/***/ }),

/***/ "./node_modules/react-router/lib/AsyncUtils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router/lib/AsyncUtils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.loopAsync = loopAsync;
exports.mapAsync = mapAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var sync = false,
      hasNext = false,
      doneArgs = void 0;

  function done() {
    isDone = true;

    if (sync) {
      // Iterate instead of recursing if possible.
      doneArgs = [].concat(Array.prototype.slice.call(arguments));
      return;
    }

    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) {
      return;
    }

    hasNext = true;

    if (sync) {
      // Iterate instead of recursing if possible.
      return;
    }

    sync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work.call(this, currentTurn++, next, done);
    }

    sync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(this, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  }

  next();
}

function mapAsync(array, work, callback) {
  var length = array.length;
  var values = [];
  if (length === 0) return callback(null, values);
  var isDone = false,
      doneCount = 0;

  function done(index, error, value) {
    if (isDone) return;

    if (error) {
      isDone = true;
      callback(error);
    } else {
      values[index] = value;
      isDone = ++doneCount === length;
      if (isDone) callback(null, values);
    }
  }

  array.forEach(function (item, index) {
    work(item, index, function (error, value) {
      done(index, error, value);
    });
  });
}

/***/ }),

/***/ "./node_modules/react-router/lib/ContextUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/lib/ContextUtils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ContextProvider = ContextProvider;
exports.ContextSubscriber = ContextSubscriber;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // Works around issues with context updates failing to propagate.
// Caveat: the context value is expected to never change its identity.
// https://github.com/facebook/react/issues/2517
// https://github.com/reactjs/react-router/issues/470


var contextProviderShape = _propTypes2.default.shape({
  subscribe: _propTypes2.default.func.isRequired,
  eventIndex: _propTypes2.default.number.isRequired
});

function makeContextName(name) {
  return '@@contextSubscriber/' + name;
}

var prefixUnsafeLifecycleMethods = typeof _react2.default.forwardRef !== 'undefined';

function ContextProvider(name) {
  var _childContextTypes, _config;

  var contextName = makeContextName(name);
  var listenersKey = contextName + '/listeners';
  var eventIndexKey = contextName + '/eventIndex';
  var subscribeKey = contextName + '/subscribe';
  var config = (_config = {
    childContextTypes: (_childContextTypes = {}, _childContextTypes[contextName] = contextProviderShape.isRequired, _childContextTypes),
    getChildContext: function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextName] = {
        eventIndex: this[eventIndexKey],
        subscribe: this[subscribeKey]
      }, _ref;
    },
    // this method will be updated to UNSAFE_componentWillMount below for React versions >= 16.3
    componentWillMount: function componentWillMount() {
      this[listenersKey] = [];
      this[eventIndexKey] = 0;
    },
    // this method will be updated to UNSAFE_componentWillReceiveProps below for React versions >= 16.3
    componentWillReceiveProps: function componentWillReceiveProps() {
      this[eventIndexKey]++;
    },
    componentDidUpdate: function componentDidUpdate() {
      var _this = this;

      this[listenersKey].forEach(function (listener) {
        return listener(_this[eventIndexKey]);
      });
    }
  }, _config[subscribeKey] = function (listener) {
    var _this2 = this; // No need to immediately call listener here.


    this[listenersKey].push(listener);
    return function () {
      _this2[listenersKey] = _this2[listenersKey].filter(function (item) {
        return item !== listener;
      });
    };
  }, _config);

  if (prefixUnsafeLifecycleMethods) {
    config.UNSAFE_componentWillMount = config.componentWillMount;
    config.UNSAFE_componentWillReceiveProps = config.componentWillReceiveProps;
    delete config.componentWillMount;
    delete config.componentWillReceiveProps;
  }

  return config;
}

function ContextSubscriber(name) {
  var _contextTypes, _config2;

  var contextName = makeContextName(name);
  var lastRenderedEventIndexKey = contextName + '/lastRenderedEventIndex';
  var handleContextUpdateKey = contextName + '/handleContextUpdate';
  var unsubscribeKey = contextName + '/unsubscribe';
  var config = (_config2 = {
    contextTypes: (_contextTypes = {}, _contextTypes[contextName] = contextProviderShape, _contextTypes),
    getInitialState: function getInitialState() {
      var _ref2;

      if (!this.context[contextName]) {
        return {};
      }

      return _ref2 = {}, _ref2[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _ref2;
    },
    componentDidMount: function componentDidMount() {
      if (!this.context[contextName]) {
        return;
      }

      this[unsubscribeKey] = this.context[contextName].subscribe(this[handleContextUpdateKey]);
    },
    // this method will be updated to UNSAFE_componentWillReceiveProps below for React versions >= 16.3
    componentWillReceiveProps: function componentWillReceiveProps() {
      var _setState;

      if (!this.context[contextName]) {
        return;
      }

      this.setState((_setState = {}, _setState[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _setState));
    },
    componentWillUnmount: function componentWillUnmount() {
      if (!this[unsubscribeKey]) {
        return;
      }

      this[unsubscribeKey]();
      this[unsubscribeKey] = null;
    }
  }, _config2[handleContextUpdateKey] = function (eventIndex) {
    if (eventIndex !== this.state[lastRenderedEventIndexKey]) {
      var _setState2;

      this.setState((_setState2 = {}, _setState2[lastRenderedEventIndexKey] = eventIndex, _setState2));
    }
  }, _config2);

  if (prefixUnsafeLifecycleMethods) {
    config.UNSAFE_componentWillReceiveProps = config.componentWillReceiveProps;
    delete config.componentWillReceiveProps;
  }

  return config;
}

/***/ }),

/***/ "./node_modules/react-router/lib/PatternUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/lib/PatternUtils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.compilePattern = compilePattern;
exports.matchPattern = matchPattern;
exports.getParamNames = getParamNames;
exports.getParams = getParams;
exports.formatPattern = formatPattern;

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function _compilePattern(pattern) {
  var regexpSource = '';
  var paramNames = [];
  var tokens = [];
  var match = void 0,
      lastIndex = 0,
      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)|\\\(|\\\)/g;

  while (match = matcher.exec(pattern)) {
    if (match.index !== lastIndex) {
      tokens.push(pattern.slice(lastIndex, match.index));
      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
    }

    if (match[1]) {
      regexpSource += '([^/]+)';
      paramNames.push(match[1]);
    } else if (match[0] === '**') {
      regexpSource += '(.*)';
      paramNames.push('splat');
    } else if (match[0] === '*') {
      regexpSource += '(.*?)';
      paramNames.push('splat');
    } else if (match[0] === '(') {
      regexpSource += '(?:';
    } else if (match[0] === ')') {
      regexpSource += ')?';
    } else if (match[0] === '\\(') {
      regexpSource += '\\(';
    } else if (match[0] === '\\)') {
      regexpSource += '\\)';
    }

    tokens.push(match[0]);
    lastIndex = matcher.lastIndex;
  }

  if (lastIndex !== pattern.length) {
    tokens.push(pattern.slice(lastIndex, pattern.length));
    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
  }

  return {
    pattern: pattern,
    regexpSource: regexpSource,
    paramNames: paramNames,
    tokens: tokens
  };
}

var CompiledPatternsCache = Object.create(null);

function compilePattern(pattern) {
  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);
  return CompiledPatternsCache[pattern];
}
/**
 * Attempts to match a pattern on the given pathname. Patterns may use
 * the following special characters:
 *
 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
 *                  captured string is considered a "param"
 * - ()             Wraps a segment of the URL that is optional
 * - *              Consumes (non-greedy) all characters up to the next
 *                  character in the pattern, or to the end of the URL if
 *                  there is none
 * - **             Consumes (greedy) all characters up to the next character
 *                  in the pattern, or to the end of the URL if there is none
 *
 *  The function calls callback(error, matched) when finished.
 * The return value is an object with the following properties:
 *
 * - remainingPathname
 * - paramNames
 * - paramValues
 */


function matchPattern(pattern, pathname) {
  // Ensure pattern starts with leading slash for consistency with pathname.
  if (pattern.charAt(0) !== '/') {
    pattern = '/' + pattern;
  }

  var _compilePattern2 = compilePattern(pattern),
      regexpSource = _compilePattern2.regexpSource,
      paramNames = _compilePattern2.paramNames,
      tokens = _compilePattern2.tokens;

  if (pattern.charAt(pattern.length - 1) !== '/') {
    regexpSource += '/?'; // Allow optional path separator at end.
  } // Special-case patterns like '*' for catch-all routes.


  if (tokens[tokens.length - 1] === '*') {
    regexpSource += '$';
  }

  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));

  if (match == null) {
    return null;
  }

  var matchedPath = match[0];
  var remainingPathname = pathname.substr(matchedPath.length);

  if (remainingPathname) {
    // Require that the match ends at a path separator, if we didn't match
    // the full path, so any remaining pathname is a new path segment.
    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
      return null;
    } // If there is a remaining pathname, treat the path separator as part of
    // the remaining pathname for properly continuing the match.


    remainingPathname = '/' + remainingPathname;
  }

  return {
    remainingPathname: remainingPathname,
    paramNames: paramNames,
    paramValues: match.slice(1).map(function (v) {
      return v && decodeURIComponent(v);
    })
  };
}

function getParamNames(pattern) {
  return compilePattern(pattern).paramNames;
}

function getParams(pattern, pathname) {
  var match = matchPattern(pattern, pathname);

  if (!match) {
    return null;
  }

  var paramNames = match.paramNames,
      paramValues = match.paramValues;
  var params = {};
  paramNames.forEach(function (paramName, index) {
    params[paramName] = paramValues[index];
  });
  return params;
}
/**
 * Returns a version of the given pattern with params interpolated. Throws
 * if there is a dynamic segment of the pattern for which there is no param.
 */


function formatPattern(pattern, params) {
  params = params || {};

  var _compilePattern3 = compilePattern(pattern),
      tokens = _compilePattern3.tokens;

  var parenCount = 0,
      pathname = '',
      splatIndex = 0,
      parenHistory = [];
  var token = void 0,
      paramName = void 0,
      paramValue = void 0;

  for (var i = 0, len = tokens.length; i < len; ++i) {
    token = tokens[i];

    if (token === '*' || token === '**') {
      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;
      !(paramValue != null || parenCount > 0) ?  true ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : undefined : void 0;
      if (paramValue != null) pathname += encodeURI(paramValue);
    } else if (token === '(') {
      parenHistory[parenCount] = '';
      parenCount += 1;
    } else if (token === ')') {
      var parenText = parenHistory.pop();
      parenCount -= 1;
      if (parenCount) parenHistory[parenCount - 1] += parenText;else pathname += parenText;
    } else if (token === '\\(') {
      pathname += '(';
    } else if (token === '\\)') {
      pathname += ')';
    } else if (token.charAt(0) === ':') {
      paramName = token.substring(1);
      paramValue = params[paramName];
      !(paramValue != null || parenCount > 0) ?  true ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : undefined : void 0;

      if (paramValue == null) {
        if (parenCount) {
          parenHistory[parenCount - 1] = '';
          var curTokenIdx = tokens.indexOf(token);
          var tokensSubset = tokens.slice(curTokenIdx, tokens.length);
          var nextParenIdx = -1;

          for (var _i = 0; _i < tokensSubset.length; _i++) {
            if (tokensSubset[_i] == ')') {
              nextParenIdx = _i;
              break;
            }
          }

          !(nextParenIdx > 0) ?  true ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren at segment "%s"', pattern, tokensSubset.join('')) : undefined : void 0; // jump to ending paren

          i = curTokenIdx + nextParenIdx - 1;
        }
      } else if (parenCount) parenHistory[parenCount - 1] += encodeURIComponent(paramValue);else pathname += encodeURIComponent(paramValue);
    } else {
      if (parenCount) parenHistory[parenCount - 1] += token;else pathname += token;
    }
  }

  !(parenCount <= 0) ?  true ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren', pattern) : undefined : void 0;
  return pathname.replace(/\/+/g, '/');
}

/***/ }),

/***/ "./node_modules/react-router/lib/PromiseUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/lib/PromiseUtils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isPromise = isPromise;

function isPromise(obj) {
  return obj && typeof obj.then === 'function';
}

/***/ }),

/***/ "./node_modules/react-router/lib/RouteUtils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router/lib/RouteUtils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.isReactChildren = isReactChildren;
exports.createRouteFromReactElement = createRouteFromReactElement;
exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
exports.createRoutes = createRoutes;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isValidChild(object) {
  return object == null || _react2.default.isValidElement(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

function createRoute(defaultProps, props) {
  return _extends({}, defaultProps, props);
}

function createRouteFromReactElement(element) {
  var type = element.type;
  var route = createRoute(type.defaultProps, element.props);

  if (route.children) {
    var childRoutes = createRoutesFromReactChildren(route.children, route);
    if (childRoutes.length) route.childRoutes = childRoutes;
    delete route.children;
  }

  return route;
}
/**
 * Creates and returns a routes object from the given ReactChildren. JSX
 * provides a convenient way to visualize how routes in the hierarchy are
 * nested.
 *
 *   import { Route, createRoutesFromReactChildren } from 'react-router'
 *
 *   const routes = createRoutesFromReactChildren(
 *     <Route component={App}>
 *       <Route path="home" component={Dashboard}/>
 *       <Route path="news" component={NewsFeed}/>
 *     </Route>
 *   )
 *
 * Note: This method is automatically used when you provide <Route> children
 * to a <Router> component.
 */


function createRoutesFromReactChildren(children, parentRoute) {
  var routes = [];

  _react2.default.Children.forEach(children, function (element) {
    if (_react2.default.isValidElement(element)) {
      // Component classes may have a static create* method.
      if (element.type.createRouteFromReactElement) {
        var route = element.type.createRouteFromReactElement(element, parentRoute);
        if (route) routes.push(route);
      } else {
        routes.push(createRouteFromReactElement(element));
      }
    }
  });

  return routes;
}
/**
 * Creates and returns an array of routes from the given object which
 * may be a JSX route, a plain object route, or an array of either.
 */


function createRoutes(routes) {
  if (isReactChildren(routes)) {
    routes = createRoutesFromReactChildren(routes);
  } else if (routes && !Array.isArray(routes)) {
    routes = [routes];
  }

  return routes;
}

/***/ }),

/***/ "./node_modules/react-router/lib/RouterContext.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router/lib/RouterContext.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactIs = __webpack_require__(/*! react-is */ "react-is");

var _createReactClass = __webpack_require__(/*! create-react-class */ "create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _getRouteParams = __webpack_require__(/*! ./getRouteParams */ "./node_modules/react-router/lib/getRouteParams.js");

var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

var _ContextUtils = __webpack_require__(/*! ./ContextUtils */ "./node_modules/react-router/lib/ContextUtils.js");

var _RouteUtils = __webpack_require__(/*! ./RouteUtils */ "./node_modules/react-router/lib/RouteUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * A <RouterContext> renders the component tree for a given router state
 * and sets the history object and the current location in context.
 */


var RouterContext = (0, _createReactClass2.default)({
  displayName: 'RouterContext',
  mixins: [(0, _ContextUtils.ContextProvider)('router')],
  propTypes: {
    router: _propTypes.object.isRequired,
    location: _propTypes.object.isRequired,
    routes: _propTypes.array.isRequired,
    params: _propTypes.object.isRequired,
    components: _propTypes.array.isRequired,
    createElement: _propTypes.func.isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      createElement: _react2.default.createElement
    };
  },
  childContextTypes: {
    router: _propTypes.object.isRequired
  },
  getChildContext: function getChildContext() {
    return {
      router: this.props.router
    };
  },
  createElement: function createElement(component, props) {
    return component == null ? null : this.props.createElement(component, props);
  },
  render: function render() {
    var _this = this;

    var _props = this.props,
        location = _props.location,
        routes = _props.routes,
        params = _props.params,
        components = _props.components,
        router = _props.router;
    var element = null;

    if (components) {
      element = components.reduceRight(function (element, components, index) {
        if (components == null) return element; // Don't create new children; use the grandchildren.

        var route = routes[index];
        var routeParams = (0, _getRouteParams2.default)(route, params);
        var props = {
          location: location,
          params: params,
          route: route,
          router: router,
          routeParams: routeParams,
          routes: routes
        };

        if ((0, _RouteUtils.isReactChildren)(element)) {
          props.children = element;
        } else if (element) {
          for (var prop in element) {
            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
          }
        } // Handle components is object for { [name]: component } but not valid element
        // type of react, such as React.memo, React.lazy and so on.


        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object' && !(0, _reactIs.isValidElementType)(components)) {
          var elements = {};

          for (var key in components) {
            if (Object.prototype.hasOwnProperty.call(components, key)) {
              // Pass through the key as a prop to createElement to allow
              // custom createElement functions to know which named component
              // they're rendering, for e.g. matching up to fetched data.
              elements[key] = _this.createElement(components[key], _extends({
                key: key
              }, props));
            }
          }

          return elements;
        }

        return _this.createElement(components, props);
      }, element);
    }

    !(element === null || element === false || _react2.default.isValidElement(element)) ?  true ? (0, _invariant2.default)(false, 'The root route must render a single element') : undefined : void 0;
    return element;
  }
});
exports.default = RouterContext;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/RouterUtils.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router/lib/RouterUtils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.createRouterObject = createRouterObject;
exports.assignRouterState = assignRouterState;

function createRouterObject(history, transitionManager, state) {
  var router = _extends({}, history, {
    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
    isActive: transitionManager.isActive
  });

  return assignRouterState(router, state);
}

function assignRouterState(router, _ref) {
  var location = _ref.location,
      params = _ref.params,
      routes = _ref.routes;
  router.location = location;
  router.params = params;
  router.routes = routes;
  return router;
}

/***/ }),

/***/ "./node_modules/react-router/lib/TransitionUtils.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-router/lib/TransitionUtils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getTransitionUtils;

var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ "./node_modules/react-router/lib/AsyncUtils.js");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var PendingHooks = function PendingHooks() {
  var _this = this;

  _classCallCheck(this, PendingHooks);

  this.hooks = [];

  this.add = function (hook) {
    return _this.hooks.push(hook);
  };

  this.remove = function (hook) {
    return _this.hooks = _this.hooks.filter(function (h) {
      return h !== hook;
    });
  };

  this.has = function (hook) {
    return _this.hooks.indexOf(hook) !== -1;
  };

  this.clear = function () {
    return _this.hooks = [];
  };
};

function getTransitionUtils() {
  var enterHooks = new PendingHooks();
  var changeHooks = new PendingHooks();

  function createTransitionHook(hook, route, asyncArity, pendingHooks) {
    var isSync = hook.length < asyncArity;

    var transitionHook = function transitionHook() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      hook.apply(route, args);

      if (isSync) {
        var callback = args[args.length - 1]; // Assume hook executes synchronously and
        // automatically call the callback.

        callback();
      }
    };

    pendingHooks.add(transitionHook);
    return transitionHook;
  }

  function getEnterHooks(routes) {
    return routes.reduce(function (hooks, route) {
      if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3, enterHooks));
      return hooks;
    }, []);
  }

  function getChangeHooks(routes) {
    return routes.reduce(function (hooks, route) {
      if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4, changeHooks));
      return hooks;
    }, []);
  }

  function runTransitionHooks(length, iter, callback) {
    if (!length) {
      callback();
      return;
    }

    var redirectInfo = void 0;

    function replace(location) {
      redirectInfo = location;
    }

    (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
      iter(index, replace, function (error) {
        if (error || redirectInfo) {
          done(error, redirectInfo); // No need to continue.
        } else {
          next();
        }
      });
    }, callback);
  }
  /**
   * Runs all onEnter hooks in the given array of routes in order
   * with onEnter(nextState, replace, callback) and calls
   * callback(error, redirectInfo) when finished. The first hook
   * to use replace short-circuits the loop.
   *
   * If a hook needs to run asynchronously, it may use the callback
   * function. However, doing so will cause the transition to pause,
   * which could lead to a non-responsive UI if the hook is slow.
   */


  function runEnterHooks(routes, nextState, callback) {
    enterHooks.clear();
    var hooks = getEnterHooks(routes);
    return runTransitionHooks(hooks.length, function (index, replace, next) {
      var wrappedNext = function wrappedNext() {
        if (enterHooks.has(hooks[index])) {
          next.apply(undefined, arguments);
          enterHooks.remove(hooks[index]);
        }
      };

      hooks[index](nextState, replace, wrappedNext);
    }, callback);
  }
  /**
   * Runs all onChange hooks in the given array of routes in order
   * with onChange(prevState, nextState, replace, callback) and calls
   * callback(error, redirectInfo) when finished. The first hook
   * to use replace short-circuits the loop.
   *
   * If a hook needs to run asynchronously, it may use the callback
   * function. However, doing so will cause the transition to pause,
   * which could lead to a non-responsive UI if the hook is slow.
   */


  function runChangeHooks(routes, state, nextState, callback) {
    changeHooks.clear();
    var hooks = getChangeHooks(routes);
    return runTransitionHooks(hooks.length, function (index, replace, next) {
      var wrappedNext = function wrappedNext() {
        if (changeHooks.has(hooks[index])) {
          next.apply(undefined, arguments);
          changeHooks.remove(hooks[index]);
        }
      };

      hooks[index](state, nextState, replace, wrappedNext);
    }, callback);
  }
  /**
   * Runs all onLeave hooks in the given array of routes in order.
   */


  function runLeaveHooks(routes, prevState) {
    for (var i = 0, len = routes.length; i < len; ++i) {
      if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
    }
  }

  return {
    runEnterHooks: runEnterHooks,
    runChangeHooks: runChangeHooks,
    runLeaveHooks: runLeaveHooks
  };
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/computeChangedRoutes.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router/lib/computeChangedRoutes.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ "./node_modules/react-router/lib/PatternUtils.js");

function routeParamsChanged(route, prevState, nextState) {
  if (!route.path) return false;
  var paramNames = (0, _PatternUtils.getParamNames)(route.path);
  return paramNames.some(function (paramName) {
    return prevState.params[paramName] !== nextState.params[paramName];
  });
}
/**
 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
 * the change from prevState to nextState. We leave routes if either
 * 1) they are not in the next state or 2) they are in the next state
 * but their params have changed (i.e. /users/123 => /users/456).
 *
 * leaveRoutes are ordered starting at the leaf route of the tree
 * we're leaving up to the common parent route. enterRoutes are ordered
 * from the top of the tree we're entering down to the leaf route.
 *
 * changeRoutes are any routes that didn't leave or enter during
 * the transition.
 */


function computeChangedRoutes(prevState, nextState) {
  var prevRoutes = prevState && prevState.routes;
  var nextRoutes = nextState.routes;
  var leaveRoutes = void 0,
      changeRoutes = void 0,
      enterRoutes = void 0;

  if (prevRoutes) {
    var parentIsLeaving = false;
    leaveRoutes = prevRoutes.filter(function (route) {
      if (parentIsLeaving) {
        return true;
      } else {
        var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
        if (isLeaving) parentIsLeaving = true;
        return isLeaving;
      }
    }); // onLeave hooks start at the leaf route.

    leaveRoutes.reverse();
    enterRoutes = [];
    changeRoutes = [];
    nextRoutes.forEach(function (route) {
      var isNew = prevRoutes.indexOf(route) === -1;
      var paramsChanged = leaveRoutes.indexOf(route) !== -1;
      if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
    });
  } else {
    leaveRoutes = [];
    changeRoutes = [];
    enterRoutes = nextRoutes;
  }

  return {
    leaveRoutes: leaveRoutes,
    changeRoutes: changeRoutes,
    enterRoutes: enterRoutes
  };
}

exports.default = computeChangedRoutes;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/createMemoryHistory.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-router/lib/createMemoryHistory.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createMemoryHistory;

var _useQueries = __webpack_require__(/*! history/lib/useQueries */ "./node_modules/history/lib/useQueries.js");

var _useQueries2 = _interopRequireDefault(_useQueries);

var _useBasename = __webpack_require__(/*! history/lib/useBasename */ "./node_modules/history/lib/useBasename.js");

var _useBasename2 = _interopRequireDefault(_useBasename);

var _createMemoryHistory = __webpack_require__(/*! history/lib/createMemoryHistory */ "./node_modules/history/lib/createMemoryHistory.js");

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function createMemoryHistory(options) {
  // signatures and type checking differ between `useQueries` and
  // `createMemoryHistory`, have to create `memoryHistory` first because
  // `useQueries` doesn't understand the signature
  var memoryHistory = (0, _createMemoryHistory2.default)(options);

  var createHistory = function createHistory() {
    return memoryHistory;
  };

  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
  return history;
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/createTransitionManager.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-router/lib/createTransitionManager.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.default = createTransitionManager;

var _routerWarning = __webpack_require__(/*! ./routerWarning */ "./node_modules/react-router/lib/routerWarning.js");

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _computeChangedRoutes2 = __webpack_require__(/*! ./computeChangedRoutes */ "./node_modules/react-router/lib/computeChangedRoutes.js");

var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

var _TransitionUtils = __webpack_require__(/*! ./TransitionUtils */ "./node_modules/react-router/lib/TransitionUtils.js");

var _TransitionUtils2 = _interopRequireDefault(_TransitionUtils);

var _isActive2 = __webpack_require__(/*! ./isActive */ "./node_modules/react-router/lib/isActive.js");

var _isActive3 = _interopRequireDefault(_isActive2);

var _getComponents = __webpack_require__(/*! ./getComponents */ "./node_modules/react-router/lib/getComponents.js");

var _getComponents2 = _interopRequireDefault(_getComponents);

var _matchRoutes = __webpack_require__(/*! ./matchRoutes */ "./node_modules/react-router/lib/matchRoutes.js");

var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function hasAnyProperties(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
  }

  return false;
}

function createTransitionManager(history, routes) {
  var state = {};

  var _getTransitionUtils = (0, _TransitionUtils2.default)(),
      runEnterHooks = _getTransitionUtils.runEnterHooks,
      runChangeHooks = _getTransitionUtils.runChangeHooks,
      runLeaveHooks = _getTransitionUtils.runLeaveHooks; // Signature should be (location, indexOnly), but needs to support (path,
  // query, indexOnly)


  function isActive(location, indexOnly) {
    location = history.createLocation(location);
    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
  }

  var partialNextState = void 0;

  function match(location, callback) {
    if (partialNextState && partialNextState.location === location) {
      // Continue from where we left off.
      finishMatch(partialNextState, callback);
    } else {
      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
        if (error) {
          callback(error);
        } else if (nextState) {
          finishMatch(_extends({}, nextState, {
            location: location
          }), callback);
        } else {
          callback();
        }
      });
    }
  }

  function finishMatch(nextState, callback) {
    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState),
        leaveRoutes = _computeChangedRoutes.leaveRoutes,
        changeRoutes = _computeChangedRoutes.changeRoutes,
        enterRoutes = _computeChangedRoutes.enterRoutes;

    runLeaveHooks(leaveRoutes, state); // Tear down confirmation hooks for left routes

    leaveRoutes.filter(function (route) {
      return enterRoutes.indexOf(route) === -1;
    }).forEach(removeListenBeforeHooksForRoute); // change and enter hooks are run in series

    runChangeHooks(changeRoutes, state, nextState, function (error, redirectInfo) {
      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);
      runEnterHooks(enterRoutes, nextState, finishEnterHooks);
    });

    function finishEnterHooks(error, redirectInfo) {
      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo); // TODO: Fetch components after state is updated.

      (0, _getComponents2.default)(nextState, function (error, components) {
        if (error) {
          callback(error);
        } else {
          // TODO: Make match a pure function and have some other API
          // for "match and update state".
          callback(null, null, state = _extends({}, nextState, {
            components: components
          }));
        }
      });
    }

    function handleErrorOrRedirect(error, redirectInfo) {
      if (error) callback(error);else callback(null, redirectInfo);
    }
  }

  var RouteGuid = 1;

  function getRouteID(route) {
    var create = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return route.__id__ || create && (route.__id__ = RouteGuid++);
  }

  var RouteHooks = Object.create(null);

  function getRouteHooksForRoutes(routes) {
    return routes.map(function (route) {
      return RouteHooks[getRouteID(route)];
    }).filter(function (hook) {
      return hook;
    });
  }

  function transitionHook(location, callback) {
    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
      if (nextState == null) {
        // TODO: We didn't actually match anything, but hang
        // onto error/nextState so we don't have to matchRoutes
        // again in the listen callback.
        callback();
        return;
      } // Cache some state here so we don't have to
      // matchRoutes() again in the listen callback.


      partialNextState = _extends({}, nextState, {
        location: location
      });
      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);
      var result = void 0;

      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
        // Passing the location arg here indicates to
        // the user that this is a transition hook.
        result = hooks[i](location);
      }

      callback(result);
    });
  }
  /* istanbul ignore next: untestable with Karma */


  function beforeUnloadHook() {
    // Synchronously check to see if any route hooks want
    // to prevent the current window/tab from closing.
    if (state.routes) {
      var hooks = getRouteHooksForRoutes(state.routes);
      var message = void 0;

      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
        // Passing no args indicates to the user that this is a
        // beforeunload hook. We don't know the next location.
        message = hooks[i]();
      }

      return message;
    }
  }

  var unlistenBefore = void 0,
      unlistenBeforeUnload = void 0;

  function removeListenBeforeHooksForRoute(route) {
    var routeID = getRouteID(route);

    if (!routeID) {
      return;
    }

    delete RouteHooks[routeID];

    if (!hasAnyProperties(RouteHooks)) {
      // teardown transition & beforeunload hooks
      if (unlistenBefore) {
        unlistenBefore();
        unlistenBefore = null;
      }

      if (unlistenBeforeUnload) {
        unlistenBeforeUnload();
        unlistenBeforeUnload = null;
      }
    }
  }
  /**
   * Registers the given hook function to run before leaving the given route.
   *
   * During a normal transition, the hook function receives the next location
   * as its only argument and can return either a prompt message (string) to show the user,
   * to make sure they want to leave the page; or `false`, to prevent the transition.
   * Any other return value will have no effect.
   *
   * During the beforeunload event (in browsers) the hook receives no arguments.
   * In this case it must return a prompt message to prevent the transition.
   *
   * Returns a function that may be used to unbind the listener.
   */


  function listenBeforeLeavingRoute(route, hook) {
    var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
    var routeID = getRouteID(route, true);
    RouteHooks[routeID] = hook;

    if (thereWereNoRouteHooks) {
      // setup transition & beforeunload hooks
      unlistenBefore = history.listenBefore(transitionHook);
      if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
    }

    return function () {
      removeListenBeforeHooksForRoute(route);
    };
  }
  /**
   * This is the API for stateful environments. As the location
   * changes, we update state and call the listener. We can also
   * gracefully handle errors and redirects.
   */


  function listen(listener) {
    function historyListener(location) {
      if (state.location === location) {
        listener(null, state);
      } else {
        match(location, function (error, redirectLocation, nextState) {
          if (error) {
            listener(error);
          } else if (redirectLocation) {
            history.replace(redirectLocation);
          } else if (nextState) {
            listener(null, nextState);
          } else {
             true ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : undefined;
          }
        });
      }
    } // TODO: Only use a single history listener. Otherwise we'll end up with
    // multiple concurrent calls to match.
    // Set up the history listener first in case the initial match redirects.


    var unsubscribe = history.listen(historyListener);

    if (state.location) {
      // Picking up on a matchContext.
      listener(null, state);
    } else {
      historyListener(history.getCurrentLocation());
    }

    return unsubscribe;
  }

  return {
    isActive: isActive,
    match: match,
    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
    listen: listen
  };
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/getComponents.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router/lib/getComponents.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ "./node_modules/react-router/lib/AsyncUtils.js");

var _PromiseUtils = __webpack_require__(/*! ./PromiseUtils */ "./node_modules/react-router/lib/PromiseUtils.js");

function getComponentsForRoute(nextState, route, callback) {
  if (route.component || route.components) {
    callback(null, route.component || route.components);
    return;
  }

  var getComponent = route.getComponent || route.getComponents;

  if (getComponent) {
    var componentReturn = getComponent.call(route, nextState, callback);
    if ((0, _PromiseUtils.isPromise)(componentReturn)) componentReturn.then(function (component) {
      return callback(null, component);
    }, callback);
  } else {
    callback();
  }
}
/**
 * Asynchronously fetches all components needed for the given router
 * state and calls callback(error, components) when finished.
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getComponents method.
 */


function getComponents(nextState, callback) {
  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
    getComponentsForRoute(nextState, route, callback);
  }, callback);
}

exports.default = getComponents;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/getRouteParams.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-router/lib/getRouteParams.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ "./node_modules/react-router/lib/PatternUtils.js");
/**
 * Extracts an object of params the given route cares about from
 * the given params object.
 */


function getRouteParams(route, params) {
  var routeParams = {};
  if (!route.path) return routeParams;
  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
    if (Object.prototype.hasOwnProperty.call(params, p)) {
      routeParams[p] = params[p];
    }
  });
  return routeParams;
}

exports.default = getRouteParams;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/isActive.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router/lib/isActive.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports.default = isActive;

var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ "./node_modules/react-router/lib/PatternUtils.js");

function deepEqual(a, b) {
  if (a == b) return true;
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return deepEqual(item, b[index]);
    });
  }

  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
    for (var p in a) {
      if (!Object.prototype.hasOwnProperty.call(a, p)) {
        continue;
      }

      if (a[p] === undefined) {
        if (b[p] !== undefined) {
          return false;
        }
      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
        return false;
      } else if (!deepEqual(a[p], b[p])) {
        return false;
      }
    }

    return true;
  }

  return String(a) === String(b);
}
/**
 * Returns true if the current pathname matches the supplied one, net of
 * leading and trailing slash normalization. This is sufficient for an
 * indexOnly route match.
 */


function pathIsActive(pathname, currentPathname) {
  // Normalize leading slash for consistency. Leading slash on pathname has
  // already been normalized in isActive. See caveat there.
  if (currentPathname.charAt(0) !== '/') {
    currentPathname = '/' + currentPathname;
  } // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
  // `/foo` as active, but in this case, we would already have failed the
  // match.


  if (pathname.charAt(pathname.length - 1) !== '/') {
    pathname += '/';
  }

  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
    currentPathname += '/';
  }

  return currentPathname === pathname;
}
/**
 * Returns true if the given pathname matches the active routes and params.
 */


function routeIsActive(pathname, routes, params) {
  var remainingPathname = pathname,
      paramNames = [],
      paramValues = []; // for...of would work here but it's probably slower post-transpilation.

  for (var i = 0, len = routes.length; i < len; ++i) {
    var route = routes[i];
    var pattern = route.path || '';

    if (pattern.charAt(0) === '/') {
      remainingPathname = pathname;
      paramNames = [];
      paramValues = [];
    }

    if (remainingPathname !== null && pattern) {
      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);

      if (matched) {
        remainingPathname = matched.remainingPathname;
        paramNames = [].concat(paramNames, matched.paramNames);
        paramValues = [].concat(paramValues, matched.paramValues);
      } else {
        remainingPathname = null;
      }

      if (remainingPathname === '') {
        // We have an exact match on the route. Just check that all the params
        // match.
        // FIXME: This doesn't work on repeated params.
        return paramNames.every(function (paramName, index) {
          return String(paramValues[index]) === String(params[paramName]);
        });
      }
    }
  }

  return false;
}
/**
 * Returns true if all key/value pairs in the given query are
 * currently active.
 */


function queryIsActive(query, activeQuery) {
  if (activeQuery == null) return query == null;
  if (query == null) return true;
  return deepEqual(query, activeQuery);
}
/**
 * Returns true if a <Link> to the given pathname/query combination is
 * currently active.
 */


function isActive(_ref, indexOnly, currentLocation, routes, params) {
  var pathname = _ref.pathname,
      query = _ref.query;
  if (currentLocation == null) return false; // TODO: This is a bit ugly. It keeps around support for treating pathnames
  // without preceding slashes as absolute paths, but possibly also works
  // around the same quirks with basenames as in matchRoutes.

  if (pathname.charAt(0) !== '/') {
    pathname = '/' + pathname;
  }

  if (!pathIsActive(pathname, currentLocation.pathname)) {
    // The path check is necessary and sufficient for indexOnly, but otherwise
    // we still need to check the routes.
    if (indexOnly || !routeIsActive(pathname, routes, params)) {
      return false;
    }
  }

  return queryIsActive(query, currentLocation.query);
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/match.js":
/*!************************************************!*\
  !*** ./node_modules/react-router/lib/match.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _Actions = __webpack_require__(/*! history/lib/Actions */ "./node_modules/history/lib/Actions.js");

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _createMemoryHistory = __webpack_require__(/*! ./createMemoryHistory */ "./node_modules/react-router/lib/createMemoryHistory.js");

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/react-router/lib/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _RouteUtils = __webpack_require__(/*! ./RouteUtils */ "./node_modules/react-router/lib/RouteUtils.js");

var _RouterUtils = __webpack_require__(/*! ./RouterUtils */ "./node_modules/react-router/lib/RouterUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}
/**
 * A high-level API to be used for server-side rendering.
 *
 * This function matches a location to a set of routes and calls
 * callback(error, redirectLocation, renderProps) when finished.
 *
 * Note: You probably don't want to use this in a browser unless you're using
 * server-side rendering with async routes.
 */


function match(_ref, callback) {
  var history = _ref.history,
      routes = _ref.routes,
      location = _ref.location,
      options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

  !(history || location) ?  true ? (0, _invariant2.default)(false, 'match needs a history or a location') : undefined : void 0;
  history = history ? history : (0, _createMemoryHistory2.default)(options);
  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

  if (location) {
    // Allow match({ location: '/the/path', ... })
    location = history.createLocation(location);
  } else {
    location = history.getCurrentLocation();
  }

  transitionManager.match(location, function (error, redirectLocation, nextState) {
    var renderProps = void 0;

    if (nextState) {
      var router = (0, _RouterUtils.createRouterObject)(history, transitionManager, nextState);
      renderProps = _extends({}, nextState, {
        router: router,
        matchContext: {
          transitionManager: transitionManager,
          router: router
        }
      });
    }

    callback(error, redirectLocation && history.createLocation(redirectLocation, _Actions.REPLACE), renderProps);
  });
}

exports.default = match;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/matchRoutes.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router/lib/matchRoutes.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.default = matchRoutes;

var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ "./node_modules/react-router/lib/AsyncUtils.js");

var _PromiseUtils = __webpack_require__(/*! ./PromiseUtils */ "./node_modules/react-router/lib/PromiseUtils.js");

var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ "./node_modules/react-router/lib/PatternUtils.js");

var _routerWarning = __webpack_require__(/*! ./routerWarning */ "./node_modules/react-router/lib/routerWarning.js");

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _RouteUtils = __webpack_require__(/*! ./RouteUtils */ "./node_modules/react-router/lib/RouteUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getChildRoutes(route, location, paramNames, paramValues, callback) {
  if (route.childRoutes) {
    return [null, route.childRoutes];
  }

  if (!route.getChildRoutes) {
    return [];
  }

  var sync = true,
      result = void 0;
  var partialNextState = {
    location: location,
    params: createParams(paramNames, paramValues)
  };
  var childRoutesReturn = route.getChildRoutes(partialNextState, function (error, childRoutes) {
    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);

    if (sync) {
      result = [error, childRoutes];
      return;
    }

    callback(error, childRoutes);
  });
  if ((0, _PromiseUtils.isPromise)(childRoutesReturn)) childRoutesReturn.then(function (childRoutes) {
    return callback(null, (0, _RouteUtils.createRoutes)(childRoutes));
  }, callback);
  sync = false;
  return result; // Might be undefined.
}

function getIndexRoute(route, location, paramNames, paramValues, callback) {
  if (route.indexRoute) {
    callback(null, route.indexRoute);
  } else if (route.getIndexRoute) {
    var partialNextState = {
      location: location,
      params: createParams(paramNames, paramValues)
    };
    var indexRoutesReturn = route.getIndexRoute(partialNextState, function (error, indexRoute) {
      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
    });
    if ((0, _PromiseUtils.isPromise)(indexRoutesReturn)) indexRoutesReturn.then(function (indexRoute) {
      return callback(null, (0, _RouteUtils.createRoutes)(indexRoute)[0]);
    }, callback);
  } else if (route.childRoutes || route.getChildRoutes) {
    var onChildRoutes = function onChildRoutes(error, childRoutes) {
      if (error) {
        callback(error);
        return;
      }

      var pathless = childRoutes.filter(function (childRoute) {
        return !childRoute.path;
      });
      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
          if (error || indexRoute) {
            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
            done(error, routes);
          } else {
            next();
          }
        });
      }, function (err, routes) {
        callback(null, routes);
      });
    };

    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);

    if (result) {
      onChildRoutes.apply(undefined, result);
    }
  } else {
    callback();
  }
}

function assignParams(params, paramNames, paramValues) {
  return paramNames.reduce(function (params, paramName, index) {
    var paramValue = paramValues && paramValues[index];

    if (Array.isArray(params[paramName])) {
      params[paramName].push(paramValue);
    } else if (paramName in params) {
      params[paramName] = [params[paramName], paramValue];
    } else {
      params[paramName] = paramValue;
    }

    return params;
  }, params);
}

function createParams(paramNames, paramValues) {
  return assignParams({}, paramNames, paramValues);
}

function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
  var pattern = route.path || '';

  if (pattern.charAt(0) === '/') {
    remainingPathname = location.pathname;
    paramNames = [];
    paramValues = [];
  } // Only try to match the path if the route actually has a pattern, and if
  // we're not just searching for potential nested absolute paths.


  if (remainingPathname !== null && pattern) {
    try {
      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);

      if (matched) {
        remainingPathname = matched.remainingPathname;
        paramNames = [].concat(paramNames, matched.paramNames);
        paramValues = [].concat(paramValues, matched.paramValues);
      } else {
        remainingPathname = null;
      }
    } catch (error) {
      callback(error);
    } // By assumption, pattern is non-empty here, which is the prerequisite for
    // actually terminating a match.


    if (remainingPathname === '') {
      var match = {
        routes: [route],
        params: createParams(paramNames, paramValues)
      };
      getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
        if (error) {
          callback(error);
        } else {
          if (Array.isArray(indexRoute)) {
            var _match$routes;

             true ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
              return !route.path;
            }), 'Index routes should not have paths') : undefined;

            (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
          } else if (indexRoute) {
             true ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : undefined;
            match.routes.push(indexRoute);
          }

          callback(null, match);
        }
      });
      return;
    }
  }

  if (remainingPathname != null || route.childRoutes) {
    // Either a) this route matched at least some of the path or b)
    // we don't have to load this route's children asynchronously. In
    // either case continue checking for matches in the subtree.
    var onChildRoutes = function onChildRoutes(error, childRoutes) {
      if (error) {
        callback(error);
      } else if (childRoutes) {
        // Check the child routes to see if any of them match.
        matchRoutes(childRoutes, location, function (error, match) {
          if (error) {
            callback(error);
          } else if (match) {
            // A child route matched! Augment the match and pass it up the stack.
            match.routes.unshift(route);
            callback(null, match);
          } else {
            callback();
          }
        }, remainingPathname, paramNames, paramValues);
      } else {
        callback();
      }
    };

    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);

    if (result) {
      onChildRoutes.apply(undefined, result);
    }
  } else {
    callback();
  }
}
/**
 * Asynchronously matches the given location to a set of routes and calls
 * callback(error, state) when finished. The state object will have the
 * following properties:
 *
 * - routes       An array of routes that matched, in hierarchical order
 * - params       An object of URL parameters
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getChildRoutes method.
 */


function matchRoutes(routes, location, callback, remainingPathname) {
  var paramNames = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var paramValues = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

  if (remainingPathname === undefined) {
    // TODO: This is a little bit ugly, but it works around a quirk in history
    // that strips the leading slash from pathnames when using basenames with
    // trailing slashes.
    if (location.pathname.charAt(0) !== '/') {
      location = _extends({}, location, {
        pathname: '/' + location.pathname
      });
    }

    remainingPathname = location.pathname;
  }

  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
      if (error || match) {
        done(error, match);
      } else {
        next();
      }
    });
  }, callback);
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/routerWarning.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router/lib/routerWarning.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = routerWarning;
exports._resetWarned = _resetWarned;

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var warned = {};

function routerWarning(falseToWarn, message) {
  // Only issue deprecation warnings once.
  if (message.indexOf('deprecated') !== -1) {
    if (warned[message]) {
      return;
    }

    warned[message] = true;
  }

  message = '[react-router] ' + message;

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
}

function _resetWarned() {
  warned = {};
}

/***/ }),

/***/ "./node_modules/react-router/lib/useRouterHistory.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-router/lib/useRouterHistory.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = useRouterHistory;

var _useQueries = __webpack_require__(/*! history/lib/useQueries */ "./node_modules/history/lib/useQueries.js");

var _useQueries2 = _interopRequireDefault(_useQueries);

var _useBasename = __webpack_require__(/*! history/lib/useBasename */ "./node_modules/history/lib/useBasename.js");

var _useBasename2 = _interopRequireDefault(_useBasename);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function useRouterHistory(createHistory) {
  return function (options) {
    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
    return history;
  };
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/api/videos.ts":
/*!***************************!*\
  !*** ./src/api/videos.ts ***!
  \***************************/
/*! exports provided: getVideoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVideoList", function() { return getVideoList; });
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @constants/action-types */ "./src/constants/action-types.ts");
/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable @typescript-eslint/explicit-function-return-type */


const getVideoList = () => async dispatch => {
  if (true) {
    const list = __webpack_require__(/*! @data/videos */ "./data/videos.ts").default;

    return dispatch({
      type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_VIDEO_LIST"],
      payload: list.map(({
        name,
        des,
        ...o
      }) => {
        var _name$getLocaleId, _des$getLocaleId;

        return {
          name: (_name$getLocaleId = name[Object(koot__WEBPACK_IMPORTED_MODULE_0__["getLocaleId"])()]) !== null && _name$getLocaleId !== void 0 ? _name$getLocaleId : name.zh,
          des: (_des$getLocaleId = des[Object(koot__WEBPACK_IMPORTED_MODULE_0__["getLocaleId"])()]) !== null && _des$getLocaleId !== void 0 ? _des$getLocaleId : name.zh,
          ...o
        };
      })
    });
  }

  return;
};

/***/ }),

/***/ "./src/assets/banner.jpg":
/*!*******************************!*\
  !*** ./src/assets/banner.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "includes/asset.7618bfaeaa248e73e6190c1e101355c4.jpg");

/***/ }),

/***/ "./src/assets/sim-pilot-plate.svg":
/*!****************************************!*\
  !*** ./src/assets/sim-pilot-plate.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "includes/asset.2703dbafaffc8066597114554adab17f.svg";

/***/ }),

/***/ "./src/components/center/index.module.less":
/*!*************************************************!*\
  !*** ./src/components/center/index.module.less ***!
  \*************************************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
const wrapper = 'c81c13';const css = '.c81c13{position:relative;width:100%;max-width:1280px;margin-left:auto;margin-right:auto;border-left:40px solid transparent;border-right:40px solid transparent}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/components/center/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/center/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.less */ "./src/components/center/index.module.less");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




 // ============================================================================

// Functional Component =======================================================
const Center = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_3__["default"]
})( /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(({
  className,
  type,
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([className, {
    [`mod-${type}`]: typeof type === 'string'
  }])
}, props))));
/* harmony default export */ __webpack_exports__["default"] = (Center);

/***/ }),

/***/ "./src/components/icon/index.jsx":
/*!***************************************!*\
  !*** ./src/components/icon/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.less */ "./src/components/icon/index.module.less");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Icon = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_2__["default"]
})(({
  className,
  style,
  id,
  icon,
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  className: className,
  style: style
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: '#icon-' + (id || icon)
})));
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./src/components/icon/index.module.less":
/*!***********************************************!*\
  !*** ./src/components/icon/index.module.less ***!
  \***********************************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
const wrapper = 'dd3414';const css = '.dd3414{display:inline-block;width:16px;height:16px;stroke-width:0;stroke:currentColor;fill:currentColor;vertical-align:text-top}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/components/video-list/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/video-list/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var _api_videos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/videos */ "./src/api/videos.ts");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/icon */ "./src/components/icon/index.jsx");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.less */ "./src/components/video-list/index.module.less");
var _dec, _class, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // Component Class ============================================================

let VideoList = (_dec = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  connect: state => {
    var _state$videos;

    return {
      list: (_state$videos = state.videos) !== null && _state$videos !== void 0 ? _state$videos : []
    };
  },
  data: (state, renderProps, dispatch) => dispatch(Object(_api_videos__WEBPACK_IMPORTED_MODULE_2__["getVideoList"])()),
  styles: _index_module_less__WEBPACK_IMPORTED_MODULE_4__["default"]
}), _dec(_class = (_temp = class VideoList extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", void 0);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.className
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u6700\u65B0\u89C6\u9891")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "list"
    }, this.props.list.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
      video: item,
      key: item.release
    }))));
  }

}, _temp)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (VideoList); // ============================================================================

const Item = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(({
  video: {
    name,
    thumbnail,
    link,
    release
  }
}) => {
  const time = new Date(release);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `${_index_module_less__WEBPACK_IMPORTED_MODULE_4__["wrapper"]}-item`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "thumbnail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: thumbnail,
    alt: name,
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: link.bilibili,
    target: "_blank",
    rel: "noreferrer",
    className: "bilibili"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "icon",
    icon: "bilibili"
  }), "\u54D4\u54E9\u54D4\u54E9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: link.youtube,
    target: "_blank",
    rel: "noreferrer",
    className: "youtube"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "icon",
    icon: "youtube"
  }), "YouTube")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "infos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "name"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "date"
  }, time.getFullYear(), " / ", time.getMonth() + 1, " /", ' ', time.getDate())));
});

/***/ }),

/***/ "./src/components/video-list/index.module.less":
/*!*****************************************************!*\
  !*** ./src/components/video-list/index.module.less ***!
  \*****************************************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
const wrapper = 'f32f89';const css = '.f32f89{position:relative;padding:40px 0;margin:0 auto}.f32f89>.list{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));grid-gap:40px;margin-top:40px}.f32f89-item{position:relative;cursor:default;z-index:10;transition:none .15s ease-out}.f32f89-item:after{content:"";position:absolute;top:-10px;bottom:-10px;left:-10px;right:-10px;background:#fff;z-index:-1;border:1px solid #26a69a;border-radius:7px;box-shadow:0 25px 20px -20px rgba(0,0,0,.25);opacity:0;transition:inherit;transition-property:opacity}.f32f89-item>.thumbnail{position:relative;width:100%;padding-bottom:56.25%;height:0;display:block;background:no-repeat 50% 50%;background-size:cover;border-radius:5px 5px 0 0;border:1px solid #26a69a;border-bottom:0;transition:inherit;transition-property:-webkit-filter;transition-property:filter;transition-property:filter,-webkit-filter;overflow:hidden;background:#26a69a}.f32f89-item>.thumbnail>img{display:block;position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.f32f89-item>.links{display:block;margin-top:0;text-align:left;border-radius:0 0 5px 5px;border:1px solid #26a69a;border-top:0;background:#26a69a}.f32f89-item>.links,.f32f89-item>.links>a{height:50px;overflow:hidden;transition:inherit}.f32f89-item>.links>a{color:transparent !important;display:inline-block;width:50%;position:relative;vertical-align:top;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition-property:background-color}.f32f89-item>.links>a:after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;box-shadow:inset 0 5px 10px rgba(0,0,0,.25)}.f32f89-item>.links>a svg{position:absolute;top:50%;left:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;fill:#26a69a;display:block;fill:#fff;transition:inherit;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.f32f89-item>.links>a.bilibili{background:#67acc3}.f32f89-item>.links>a.youtube{background:#d27979}html.is-hover .f32f89-item>.links>a:hover svg{-webkit-transform:scale(1.2);transform:scale(1.2)}.f32f89-item>.infos{width:100%;display:-webkit-flex;display:flex;margin-top:12px;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;padding:0 8px 0 4px}.f32f89-item>.infos>.date,.f32f89-item>.infos>.name{display:block}.f32f89-item>.infos>.name{-webkit-flex:1;flex:1;color:#26a69a;font-size:20px;line-height:1.2}.f32f89-item>.infos>.date{-webkit-flex:0;flex:0;font-size:14px;line-height:1.2;font-style:italic;white-space:nowrap;margin-top:4px;margin-left:1em}html.is-hover .f32f89-item:hover>.thumbnail{-webkit-filter:none;filter:none}html.is-hover .f32f89-item:hover>.links>a.bilibili{background:#07a3d7}html.is-hover .f32f89-item:hover>.links>a.youtube{background:red}html.is-hover .f32f89-item:hover:after{opacity:1}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ "./src/constants/action-types.ts":
/*!***************************************!*\
  !*** ./src/constants/action-types.ts ***!
  \***************************************/
/*! exports provided: UPDATE_VIDEO_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_VIDEO_LIST", function() { return UPDATE_VIDEO_LIST; });
const UPDATE_VIDEO_LIST = 'UPDATE_VIDEO_LIST';

/***/ }),

/***/ "./src/index.inject.js":
/*!*****************************!*\
  !*** ./src/index.inject.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* global
    __SVG_ICON_PACK__:false
*/
/* harmony default export */ __webpack_exports__["default"] = ({
  performanceInfos: () => `<!-- rendered: ${new Date().toISOString()} -->`,
  svgIconPack: "<svg aria-hidden=\"true\" style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<defs>\r\n<symbol id=\"icon-bilibili\" viewBox=\"0 0 35 32\">\r\n<path d=\"M20.807 9.893c0.094 0.141 0.752 4.873 0.58 4.904s-1.394 0.313-1.394 0.313c-0.094-0.642-0.893-4.622-0.909-5.029zM22.076 14.719c0.329-0.016 1.661-0.11 1.786-0.125-0.204-1.927-0.517-4.967-0.517-4.967-0.627-0.125-1.285-0.125-1.911 0zM24.113 16.317c0.533 1.927 1.504 12.738 1.598 13.177-0.658 0.078-2.82 0.266-2.993 0.313-0.141-0.815-2.554-12.597-2.554-13.114zM32.62 10.159c0.031 0.376 0.188 4.92 0.016 4.935s-1.394 0.125-1.394 0.125c-0.031-0.627-0.36-4.591-0.345-5.014zM33.388 15.11c0.329 0 1.645 0.078 1.786 0.063-0.031-1.927 0-4.967 0-4.967-0.627-0.11-1.269-0.141-1.911-0.125zM35.205 16.912c0.219 2.256 0.188 12.769 0.219 13.208-0.674 0-2.82 0.031-2.993 0.063-0.016-0.815-1.238-12.832-1.191-13.349zM27.419 28.459c0 0 1.347 0.031 2.867 0.125-0.893-9.385-1.99-24.379-1.974-24.88-0.376-0.407-3.948 0.204-3.948 0.204zM20.603 24.511c-0.329-2.444-9.072-5.217-13.991-4.324 0 0-0.611-5.39-0.846-10.607-0.204-4.481-0.031-8.837 0.016-9.557-0.329-0.219-3.87 1.457-5.781 2.162 0 0 2.288 9.683 3.948 29.769 0 0 2.648 0.282 7.191-0.595s9.918-3.619 9.463-6.847zM9.918 28.913l-0.768-5.531c0.188-0.094 4.904 1.661 5.405 1.974-0.078 0.345-4.638 3.557-4.638 3.557z\"></path>\r\n</symbol>\r\n<symbol id=\"icon-youtube\" viewBox=\"0 0 32 32\">\r\n<path d=\"M31.682 9.6c0 0-0.312-2.206-1.274-3.174-1.218-1.274-2.582-1.282-3.206-1.356-4.474-0.326-11.194-0.326-11.194-0.326h-0.012c0 0-6.718 0-11.194 0.326-0.626 0.076-1.988 0.082-3.206 1.356-0.962 0.968-1.268 3.174-1.268 3.174s-0.318 2.588-0.318 5.182v2.426c0 2.588 0.318 5.182 0.318 5.182s0.312 2.206 1.268 3.176c1.218 1.274 2.818 1.232 3.532 1.368 2.562 0.244 10.882 0.318 10.882 0.318s6.726-0.012 11.2-0.332c0.626-0.074 1.988-0.082 3.206-1.356 0.962-0.968 1.274-3.176 1.274-3.176s0.318-2.588 0.318-5.182v-2.426c-0.006-2.588-0.324-5.182-0.324-5.182zM12.694 20.15v-8.994l8.644 4.512-8.644 4.482z\"></path>\r\n</symbol>\r\n</defs>\r\n</svg>\r\n"
});

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @views/app */ "./src/views/app.jsx");
// import routeCheck from 'koot/React/route-check';

/**
 * @type {Object} 路由配置对象
 * 原则上支持任何与 `react-router` (v3) 兼容的对象
 * - 可使用 koot-router 提供的方法封装路由配置对象
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/',
  component: _views_app__WEBPACK_IMPORTED_MODULE_0__["default"] // 项目的根层组件
  // indexRoute: {
  //     /**
  //      * 标准写法: 打包后，该组件会存在于核心包中
  //      * - 推荐小型项目或大型项目的小型页面使用
  //      */
  //     component: require('@views/home').default,
  //     /**
  //      * 代码分割写法: 打包后，该组件会存在于独立的 .js 文件中
  //      * - 推荐大型项目使用
  //      * - 推荐使用 koot 提供的 `routeCheck()` 方法保证路由组件的正确渲染 (详情请查阅文档)
  //      */
  //     getComponent: (nextState, cb) => {
  //         import(
  //             /* webpackChunkName: "PageHome" */
  //             '@views/home'
  //         ).then((module) => {
  //             if (routeCheck(nextState)) cb(null, module.default);
  //         });
  //     },
  // },
  // childRoutes: [],

});

/***/ }),

/***/ "./src/server/before.js":
/*!******************************!*\
  !*** ./src/server/before.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./src/server/routes/index.js");
/**
 * **服务器端生命周期**
 *
 * _创建 Koa 实例后、挂载任何中间件之前_
 */

/* harmony default export */ __webpack_exports__["default"] = (async app => {
  // 挂载路由
  app.use(_routes__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/*! exports provided: router, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);

/** @type {Object} 服务器路由对象 (koa-router) */

const router = koa_router__WEBPACK_IMPORTED_MODULE_0___default()();
/** @type {Object} 服务器路由表 */

/* harmony default export */ __webpack_exports__["default"] = (router.routes()); // ----------------------------------------------------------------------------

router.get('/api/timestamp', async ctx => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.body = {
    ts: Date.now()
  };
});

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var _reducers_videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/videos */ "./src/store/reducers/videos.js");


/**
 * @type {Object|Function} 项目使用的 reducer，接受以下格式/形式
 * - reducer 函数
 * - `combineReducer` 返回的函数结果
 * - 类型是 _Object_ 的 reducer 对照表
 */

const appReducer = {
  videos: _reducers_videos__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/** @type {Array} 项目使用的 middleware 列表 */

const appMiddlewares = [];
if (false) {}
/**
 * 创建 Redux store 的方法
 * 原则上支持任何与 `redux` 兼容的 store 对象
 * - 可使用 koot-redux 提供的方法进行封装
 *
 * 本例为 Redux 最基本的写法
 */

/* harmony default export */ __webpack_exports__["default"] = (() => Object(koot__WEBPACK_IMPORTED_MODULE_0__["createStore"])(appReducer, appMiddlewares));

/***/ }),

/***/ "./src/store/reducers/videos.js":
/*!**************************************!*\
  !*** ./src/store/reducers/videos.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @constants/action-types */ "./src/constants/action-types.ts");

const initialState = [];
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, {
  type,
  payload
} = {}) {
  switch (type) {
    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_VIDEO_LIST"]:
      {
        return payload !== null && payload !== void 0 ? payload : state;
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/views/app.jsx":
/*!***************************!*\
  !*** ./src/views/app.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var _components_video_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/video-list */ "./src/components/video-list/index.jsx");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/icon */ "./src/components/icon/index.jsx");
/* harmony import */ var _components_center__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/center */ "./src/components/center/index.tsx");
/* harmony import */ var _app_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.module.less */ "./src/views/app.module.less");





 // ============================================================================

const App = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  pageinfo: {
    title: '飞行员大波胡 | Sim-Pilot Diablohu',
    description: '【飞行员大波胡 | Sim-Pilot Diablohu】系列视频'
  },
  styles: _app_module_less__WEBPACK_IMPORTED_MODULE_5__["default"]
})(({
  className
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: className
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "banner"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "wrapper"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  className: "logo"
}, "\u98DE\u884C\u5458\u5927\u6CE2\u80E1 | Sim-Pilot Diablohu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "subscribe"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://space.bilibili.com/79089",
  target: "_blank",
  rel: "noreferrer",
  className: "bilibili"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
  className: "icon",
  icon: "bilibili"
}), "\u5173\u6CE8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://www.youtube.com/channel/UCJyg_CwPNweYfuwZ05VGpJg",
  target: "_blank",
  rel: "noreferrer",
  className: "youtube"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
  className: "icon",
  icon: "youtube"
}), "\u8BA2\u9605")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "list"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_video_list__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: "infos"
}, "\xA9 2021", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://diablohu.com/",
  target: "_blank",
  rel: "noreferrer"
}, "diablohu.com"), ' ', "|", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://weibo.com/u/2019430291",
  target: "_blank",
  rel: "noreferrer"
}, "@diablohu (\u5FAE\u535A)"), ' ', "|", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://twitter.com/Diablohu/",
  target: "_blank",
  rel: "noreferrer"
}, "@diablohu (twitter)")))));
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/views/app.module.less":
/*!***********************************!*\
  !*** ./src/views/app.module.less ***!
  \***********************************/
/*! exports provided: wrapper, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony import */ var D_Projects_diablohu_sp_diablohu_com_src_assets_banner_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/assets/banner.jpg */ "./src/assets/banner.jpg");
/* harmony import */ var D_Projects_diablohu_sp_diablohu_com_src_assets_sim_pilot_plate_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/assets/sim-pilot-plate.svg */ "./src/assets/sim-pilot-plate.svg");
/* harmony import */ var D_Projects_diablohu_sp_diablohu_com_src_assets_sim_pilot_plate_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Projects_diablohu_sp_diablohu_com_src_assets_sim_pilot_plate_svg__WEBPACK_IMPORTED_MODULE_1__);
const wrapper = 'f0fa31';const css = '.f0fa31,.f0fa31>.banner{position:relative}.f0fa31>.banner{background:url("' + D_Projects_diablohu_sp_diablohu_com_src_assets_banner_jpg__WEBPACK_IMPORTED_MODULE_0__["default"] + '") no-repeat 50% 50%;background-size:cover;width:100%;height:75vh;max-height:800px}.f0fa31>.banner:after,.f0fa31>.banner:before,.f0fa31>.banner>.wrapper{content:"";position:absolute;top:0;bottom:0;left:0;right:0;-webkit-flex:none;flex:none}.f0fa31>.banner:after{z-index:10;background:rgba(0,0,0,.15)}.f0fa31>.banner:before{z-index:100;background-image:radial-gradient(rgba(0,0,0,.1) 66.6667%,transparent 0);background-size:4px 4px}.f0fa31>.banner>.wrapper{z-index:200;display:-webkit-flex;display:flex;-webkit-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-justify-content:space-around;justify-content:space-around;-webkit-align-items:center;align-items:center;padding:0 30px}.f0fa31>.banner>.wrapper:after,.f0fa31>.banner>.wrapper:before{content:"";-webkit-flex:1;flex:1}.f0fa31>.banner .logo{-webkit-flex:1;flex:1;color:transparent;background:url("' + D_Projects_diablohu_sp_diablohu_com_src_assets_sim_pilot_plate_svg__WEBPACK_IMPORTED_MODULE_1___default.a + '") no-repeat 50% 50%;background-size:contain;margin:0;padding:0;min-height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.f0fa31>.banner .subscribe{-webkit-flex:none;flex:none;padding-top:5vh}.f0fa31>.banner .subscribe>a{display:inline-block;line-height:40px;border-radius:10px;padding-left:60px;padding-right:20px;color:#fff;position:relative;text-decoration:none;margin:0 10px;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out}.f0fa31>.banner .subscribe>a>.icon{content:"";position:absolute;display:block;top:7px;left:10px;bottom:7px;height:26px;width:40px;background:no-repeat 50% 50%;background-size:contain;fill:#fff}.f0fa31>.banner .subscribe>a.youtube{background:red}.f0fa31>.banner .subscribe>a.bilibili{background:#07a3d7}html.is-hover .f0fa31>.banner .subscribe>a:hover{color:#fff;-webkit-transform:scale(1.1);transform:scale(1.1)}.f0fa31>.banner .subscribe>a:active,html.is-hover .f0fa31>.banner .subscribe>a:hover:active{color:#fff;-webkit-transform:scale(.95);transform:scale(.95)}.f0fa31>.list{position:relative;padding-bottom:20px}.f0fa31>.list:after,.f0fa31>.list:before{content:"";position:absolute;top:0;bottom:0;left:0;right:0}.f0fa31>.list:before{z-index:-2;background:radial-gradient(ellipse at bottom,#f6f8f8 25%,#d7dee2 100%)}.f0fa31>.list:after{z-index:-1;opacity:.05;background:linear-gradient(135deg,#708090 21px,#d9ecff 22px,#d9ecff 24px,transparent 0,transparent 67px,#d9ecff 0,#d9ecff 69px,transparent 0),linear-gradient(225deg,#708090 21px,#d9ecff 22px,#d9ecff 24px,transparent 0,transparent 67px,#d9ecff 0,#d9ecff 69px,transparent 0) 0 64px;background-color:#708090;background-size:64px 128px}.f0fa31>.infos{cursor:default;padding:26px 0;font-size:14px;line-height:1.5;text-align:center}';/* harmony default export */ __webpack_exports__["default"] = ({wrapper,css});

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./node_modules/koot/ReactApp/server/ssr.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\@diablohu\sp.diablohu.com\node_modules\koot\ReactApp\server\ssr.js */"./node_modules/koot/ReactApp/server/ssr.js");


/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "create-react-class":
/*!*************************************!*\
  !*** external "create-react-class" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("create-react-class");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ejs");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),

/***/ "is-url":
/*!*************************!*\
  !*** external "is-url" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("is-url");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-redux":
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "warning":
/*!**************************!*\
  !*** external "warning" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("warning");

/***/ })

/******/ });
//# sourceMappingURL=ssr.js.map