"use strict";
(self["webpackChunkmy_webpage_revamped"] = self["webpackChunkmy_webpage_revamped"] || []).push([["src_components_Icon_tsx-src_components_MainNavbar_tsx-src_components_PageHeader_index_tsx-src-917388"],{

/***/ "./src/components/Icon.tsx":
/*!*********************************!*\
  !*** ./src/components/Icon.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Icon; }
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/animation/use-animation.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/**
 * Icon component that comes with the ability to move to its new position wiht animation when it is moved in its parent container.
 */


/**
 * Contains a div and a img displaying the icon.
 * The div component serves as the housing for the actual icon.
 * The div exact position is determined entirely by the parent container which contains
 * the Icon component.
 * When the position of the div changes, the icon will move (animated)
 * to the new position of Container component.
 *
 * @param iconSvg data URI of the SVG of the icon to render
 * @param previousPositionFromParent optional: manually controls the previous position of the Icon.
 * Useful when the Icon is not rendered in a similar arrangment (changing of parent layout etc),
 * which prevents the inbuilt previous position tracking from working.
 * @param altText optional: accessibility text
 * @param height optional: height of icon
 * @param width optional: width of icon
 */


function Icon(_ref) {
  var iconSvg = _ref.iconSvg,
      altText = _ref.altText,
      height = _ref.height,
      width = _ref.width,
      previousPositionFromParent = _ref.previousPositionFromParent,
      iconRef = _ref.iconRef,
      className = _ref.className;
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var animationControls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation)(); // if previousPositionFromParent is given, then set previous position to be that, else
  // set it to be the top and left values from containerRef.current
  // containerRef would have the old HTMLDivElement in the previous render at this point,
  // thus we can use it to get out the previous position of the Icon.

  var previousPosition = previousPositionFromParent ? previousPositionFromParent : containerRef.current ? {
    top: containerRef.current.offsetTop,
    left: containerRef.current.offsetLeft
  } : null; // set up the window resize listeners on Icon mount to move icon to its div housing position when window resized

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    function moveIconSvgToCorrectPosition() {
      if (containerRef.current) {
        animationControls.set({
          top: containerRef.current.offsetTop,
          left: containerRef.current.offsetLeft
        });
      }
    }

    window.addEventListener('resize', moveIconSvgToCorrectPosition);
    return function () {
      return window.removeEventListener('resize', moveIconSvgToCorrectPosition);
    };
  }, []); // This needs to run before any DOM paints can be performed, hence useLayoutEffect is the right choice here

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var newPosition = {
      top: containerRef.current.offsetTop,
      left: containerRef.current.offsetLeft
    };

    if (previousPosition === null) {
      // first time being rendered, no need for any animation
      animationControls.set(newPosition);
      return;
    } // The icon SVG was in a previous position, need to move it with animation
    // set the SVG to its prv position, then just move it to the new position with animation


    animationControls.set(previousPosition);
    animationControls.start(newPosition);
  }); // callback function to pass as ref to the div container
  // so that both containerRef and iconRef can contain the div container in their current properties

  function containerRefCallback(element) {
    if (iconRef) {
      iconRef.current = element;
    }

    containerRef.current = element;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ref: containerRefCallback,
    style: {
      height: height,
      width: width
    },
    className: className,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {
      src: iconSvg,
      alt: altText + ' Icon',
      style: {
        position: 'absolute',
        height: height,
        width: width
      },
      animate: animationControls,
      transition: {
        type: 'spring',
        duration: 0.44
      },
      className: className
    })
  });
}

/***/ }),

/***/ "./src/components/MainNavbar.tsx":
/*!***************************************!*\
  !*** ./src/components/MainNavbar.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var src_assets_icons_bjm_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/icons/bjm.svg */ "./src/assets/icons/bjm.svg");
/* harmony import */ var src_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/routes */ "./src/routes.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var MainNavbar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_, ref) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('/'),
      _useState2 = _slicedToArray(_useState, 2),
      currentPath = _useState2[0],
      setCurrentPath = _useState2[1]; // Setting the current path of the browser must be in useEffect, as this is browser specific behaviour


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setCurrentPath(window.location.pathname);
  });
  /**
   * Generates the href for a nav link.
   * This is to handle having resource param in base path.
   * e.g: If example.com/base is the base path of the webpage (like in github pages), then
   * the href for another page should be example.com/base/otherPage.
   */

  function generateHref(linkPath) {
    // no resource param in base path
    if (currentPath === '/') {
      return linkPath;
    }

    var indexOfLastSlash = currentPath.lastIndexOf('/');
    return currentPath.slice(0, indexOfLastSlash) + linkPath;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: ref,
    collapseOnSelect: true,
    className: "",
    bg: "primary",
    variant: "dark",
    expand: "md",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"].Brand, {
      href: "/",
      className: "px-2 rounded",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: src_assets_icons_bjm_svg__WEBPACK_IMPORTED_MODULE_1__,
        alt: "ben murphy brand icon"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"].Toggle, {
      "aria-controls": "responsive-navbar-nav"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"].Collapse, {
      className: "justify-content-end",
      id: "basic-navbar-nav",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "justify-content-end",
        children: Object.keys(src_routes__WEBPACK_IMPORTED_MODULE_2__["default"]).map(function (page) {
          return (// only home page does not get a link
            page !== 'home' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
              className: "d-flex justify-content-end",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Link, {
                className: "px-2",
                href: generateHref(src_routes__WEBPACK_IMPORTED_MODULE_2__["default"][page].path),
                children: src_routes__WEBPACK_IMPORTED_MODULE_2__["default"][page].title
              }, page)
            }, page) : null
          );
        })
      })
    })]
  });
});
MainNavbar.displayName = 'Navigator';
/* harmony default export */ __webpack_exports__["default"] = (MainNavbar);

/***/ }),

/***/ "./src/components/PageHeader/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/PageHeader/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PageHeader; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/PageHeader/styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function PageHeader(_ref) {
  var backgroundImage = _ref.backgroundImage,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fluid: true,
    className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].headerContainer),
    style: {
      backgroundImage: "url(".concat(backgroundImage, ")")
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "justify-content-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: children
      })
    })
  });
}

/***/ }),

/***/ "./src/components/SectionHeader/index.tsx":
/*!************************************************!*\
  !*** ./src/components/SectionHeader/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SectionHeader; }
/* harmony export */ });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/components/SectionHeader/styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

 //custom underline for the headers




function CustomLineBreaker() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_0__["default"].customLineBreaker
  });
}
/**
 * Header for a section of a page.
 * Consists of title and line breaker.
 */


function SectionHeader(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      _ref$isHiddenOnPhone = _ref.isHiddenOnPhone,
      isHiddenOnPhone = _ref$isHiddenOnPhone === void 0 ? false : _ref$isHiddenOnPhone,
      className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "".concat(isHiddenOnPhone ? _styles_scss__WEBPACK_IMPORTED_MODULE_0__["default"].isHiddenOnPhone : '', " py-2 ").concat(className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "align-items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
          className: "display-6 mb-2 text-center",
          children: title
        }), subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h5", {
          className: "text-center",
          children: subtitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CustomLineBreaker, {})]
      })
    })
  });
}

/***/ }),

/***/ "./src/components/SubNavbar/constants.ts":
/*!***********************************************!*\
  !*** ./src/components/SubNavbar/constants.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SUBPAGE_WINDOW_RATIO": function() { return /* binding */ SUBPAGE_WINDOW_RATIO; },
/* harmony export */   "observerOptionsDefaultLong": function() { return /* binding */ observerOptionsDefaultLong; },
/* harmony export */   "observerOptionsDefaultShort": function() { return /* binding */ observerOptionsDefaultShort; },
/* harmony export */   "useVisibilityController": function() { return /* binding */ useVisibilityController; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // used to determine when to use observer options short or long

var SUBPAGE_WINDOW_RATIO = 9 / 5; //two different observer options for short elements (smaller than 2x of viewport), and long elements (double of viewport)

var observerOptionsDefaultShort = {
  rootMargin: '0px',
  threshold: 0.5
};
var observerOptionsDefaultLong = {
  rootMargin: '0px',
  threshold: 0.1
}; // observer options for the main nav bar, controls when the subnavbar will be hidden upon scrolling away from the mainnavbar

var mainNavbarObserverOptions = {
  rootMargin: '0px',
  threshold: 0.1
};
/**
 * Controls the visibility of the the SubNavbar.
 * When mainNavbar is no longer visible, the subNavbar appears.
 * @param mainNavbarRef
 * @returns react state variable indicating if the subNavState should be visible.
 */

function useVisibilityController(mainNavbarRef) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSubNavbarVisible = _useState2[0],
      setIsSubNavbarVisible = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var observer = new IntersectionObserver(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          entry = _ref2[0];

      return setIsSubNavbarVisible(!entry.isIntersecting);
    }, mainNavbarObserverOptions);
    observer.observe(mainNavbarRef.current); //to avoid ref change warning

    var refCur = mainNavbarRef.current;
    return function () {
      return observer.unobserve(refCur);
    };
  });
  return [isSubNavbarVisible, setIsSubNavbarVisible];
}

/***/ }),

/***/ "./src/components/SubNavbar/index.tsx":
/*!********************************************!*\
  !*** ./src/components/SubNavbar/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SubNavbar; }
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var src_components_SubNavbar_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/SubNavbar/constants */ "./src/components/SubNavbar/constants.ts");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * custom sub nab bar to be used in pages wherein this subnav bar appears and stays at top of page only when user scrolls past the main navbar
 * props:
 * 1) map containing page names as keys, and their refs as their value
 * 2) animated prop - whether we want this navbar animated or not
 * 3) observer options object to control intersection observer settings
 * 4) forwardRef is used so that the parent component that contains this subnavbar can reference it
 *
 */







function SubNavbar(_ref) {
  var pageSections = _ref.pageSections,
      _ref$observerOptionsS = _ref.observerOptionsShort,
      observerOptionsShort = _ref$observerOptionsS === void 0 ? src_components_SubNavbar_constants__WEBPACK_IMPORTED_MODULE_1__.observerOptionsDefaultShort : _ref$observerOptionsS,
      _ref$observerOptionsL = _ref.observerOptionsLong,
      observerOptionsLong = _ref$observerOptionsL === void 0 ? src_components_SubNavbar_constants__WEBPACK_IMPORTED_MODULE_1__.observerOptionsDefaultLong : _ref$observerOptionsL,
      subNavbarRef = _ref.subNavbarRef,
      mainNavbarRef = _ref.mainNavbarRef;

  var _useVisibilityControl = (0,src_components_SubNavbar_constants__WEBPACK_IMPORTED_MODULE_1__.useVisibilityController)(mainNavbarRef),
      _useVisibilityControl2 = _slicedToArray(_useVisibilityControl, 2),
      isVisible = _useVisibilityControl2[0],
      setIsVisible = _useVisibilityControl2[1]; // create a map of each page section name to the ref of the nav link button that scrolls to it


  var navLinkRefsMap = new Map();
  Object.keys(pageSections).forEach(function (pageSectionName) {
    navLinkRefsMap.set(pageSectionName, (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null));
  }); // ref for navlinkRefs

  var navLinkRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(navLinkRefsMap);
  /**
   * Sets up intersection observers to handle the lightening of subnavbar links when sections are scrolled on screen.
   */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var intersectionObservers = []; // set up an intersection observer for each page section ref

    var _loop = function _loop() {
      var pageSectionName = _Object$keys[_i2];
      // set up the intersection observer which watches for page sections being scrolled on screen
      var intersectionObserver = new IntersectionObserver(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 1),
            entry = _ref3[0];

        // manual writing of style when the page section is intersecting/not interesecting.
        // This makes the corresponding page section link become light when its section is on screen.
        if (navLinkRefs.current.get(pageSectionName).current) {
          if (!entry.isIntersecting) {
            navLinkRefs.current.get(pageSectionName).current.style.color = 'rgba(255, 255, 255, 0.55)';
          } else {
            navLinkRefs.current.get(pageSectionName).current.style.color = 'rgba(255, 255, 255)';
          }
        }
      }, pageSections[pageSectionName].ref.current.getBoundingClientRect().height < window.innerHeight * src_components_SubNavbar_constants__WEBPACK_IMPORTED_MODULE_1__.SUBPAGE_WINDOW_RATIO ? observerOptionsShort : observerOptionsLong);
      intersectionObserver.observe(pageSections[pageSectionName].ref.current);
      intersectionObservers.push(intersectionObserver);
    };

    for (var _i2 = 0, _Object$keys = Object.keys(pageSections); _i2 < _Object$keys.length; _i2++) {
      _loop();
    }

    return function () {
      // stop all the intersection observers
      intersectionObservers.forEach(function (observer) {
        return observer.disconnect;
      });
    };
  });
  /**
   * Returns true if a quicklink was pressed on homepage.
   */

  function wasQuickLinkPressed(quickLink) {
    return quickLink.path === window.location.pathname + window.location.search;
  }
  /**
   * Sets up the quick links from homepage, by monitoring the url, if match with a quicklink,
   * if so makes the navbar visible so that the page can be scrolled down correctly to the
   * quicklink section on next render.
   *
   * This only runs on first mount.
   */


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _iterator = _createForOfIteratorHelper(src_constants__WEBPACK_IMPORTED_MODULE_2__.quickLinks),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var quickLink = _step.value;

        if (wasQuickLinkPressed(quickLink)) {
          setIsVisible(true);
          return;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isVisible) {
      var _iterator2 = _createForOfIteratorHelper(src_constants__WEBPACK_IMPORTED_MODULE_2__.quickLinks),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var quickLink = _step2.value;

          if (wasQuickLinkPressed(quickLink)) {
            quickLinkScroll(quickLink);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  });
  /**
   * Scrolls to the section of the page with the given ref.
   */

  function scrollTo(sectionRef) {
    var yOffset = -subNavbarRef.current.offsetHeight;
    var y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
  /**
   * Scrolls to the page section that the quicklink that was pressed refers to.
   */


  function quickLinkScroll(quickLink) {
    // removes the query param from quicklink url
    window.history.replaceState({}, '', quickLink.path.slice(0, quickLink.path.indexOf('?')));
    scrollTo(pageSections[quickLink.name].ref);
  }
  /**
   * Runs on select of navlink, scrolls to the corresponding page section AND removes the focus from the navlink
   * so it dosent stay focused if the user scrolls away
   * @param eventKey
   * @returns
   */


  function onSelectFunc(eventKey) {
    if (!eventKey) {
      return;
    }

    scrollTo(pageSections[eventKey].ref);
  } // Because of a bug with AnimatePresence where it is not able to properly remove custom component (NavBar),
  // in that the navbar would be not visible, but still in the DOM and clickable, when not supposed to!
  // so wrap Navbar with a motion.div to give it its animated behavious whilst avoiding the bug.
  // the motion.div needs to have a height of 0 so it doesnt get seen at all on DOm (no blank spot appears temporarily).


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
    children: isVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
      style: {
        height: 0
      },
      exit: {
        opacity: 0
      },
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        duration: 0.2
      },
      children: ["(", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ref: subNavbarRef,
        onSelect: onSelectFunc,
        fixed: "top",
        bg: "primary",
        className: "justify-content-center",
        style: {
          overflow: 'hidden'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: Object.keys(pageSections).map(function (pageSectionName) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Link, {
                ref: navLinkRefs.current.get(pageSectionName),
                eventKey: pageSectionName,
                children: pageSections[pageSectionName].title
              })
            }, pageSectionName);
          })
        })
      }, 'navbar'), ")"]
    })
  });
}

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quickLinks": function() { return /* binding */ quickLinks; }
/* harmony export */ });
/* harmony import */ var src_pages_experience_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pages/experience/constants */ "./src/pages/experience/constants.ts");
/* harmony import */ var src_pages_knowledge_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pages/knowledge/constants */ "./src/pages/knowledge/constants.ts");
/* harmony import */ var src_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/routes */ "./src/routes.ts");



var quickLinks = [{
  name: src_pages_knowledge_constants__WEBPACK_IMPORTED_MODULE_1__.KnowledgePageSectionName.UNIVERSITY_MODULES,
  title: src_pages_knowledge_constants__WEBPACK_IMPORTED_MODULE_1__.knowledgePageSections[src_pages_knowledge_constants__WEBPACK_IMPORTED_MODULE_1__.KnowledgePageSectionName.UNIVERSITY_MODULES].title,
  path: src_routes__WEBPACK_IMPORTED_MODULE_2__["default"][src_routes__WEBPACK_IMPORTED_MODULE_2__.PageName.KNOWLEDGE].path + '?' + src_pages_knowledge_constants__WEBPACK_IMPORTED_MODULE_1__.knowledgePageSections[src_pages_knowledge_constants__WEBPACK_IMPORTED_MODULE_1__.KnowledgePageSectionName.UNIVERSITY_MODULES].queryParam,
  buttonColor: '#373F51'
}, {
  name: src_pages_knowledge_constants__WEBPACK_IMPORTED_MODULE_1__.KnowledgePageSectionName.SKILLS,
  title: src_pages_knowledge_constants__WEBPACK_IMPORTED_MODULE_1__.knowledgePageSections[src_pages_knowledge_constants__WEBPACK_IMPORTED_MODULE_1__.KnowledgePageSectionName.SKILLS].title,
  path: src_routes__WEBPACK_IMPORTED_MODULE_2__["default"][src_routes__WEBPACK_IMPORTED_MODULE_2__.PageName.KNOWLEDGE].path + '?' + src_pages_knowledge_constants__WEBPACK_IMPORTED_MODULE_1__.knowledgePageSections[src_pages_knowledge_constants__WEBPACK_IMPORTED_MODULE_1__.KnowledgePageSectionName.SKILLS].queryParam,
  buttonColor: '#58A4B0'
}, {
  name: src_pages_experience_constants__WEBPACK_IMPORTED_MODULE_0__.ExperiencePageSectionName.CAREER_EXPERIENCE,
  title: src_pages_experience_constants__WEBPACK_IMPORTED_MODULE_0__.experiencePageSections[src_pages_experience_constants__WEBPACK_IMPORTED_MODULE_0__.ExperiencePageSectionName.CAREER_EXPERIENCE].title,
  path: src_routes__WEBPACK_IMPORTED_MODULE_2__["default"][src_routes__WEBPACK_IMPORTED_MODULE_2__.PageName.EXPERIENCE].path + '?' + src_pages_experience_constants__WEBPACK_IMPORTED_MODULE_0__.experiencePageSections[src_pages_experience_constants__WEBPACK_IMPORTED_MODULE_0__.ExperiencePageSectionName.CAREER_EXPERIENCE].queryParam,
  buttonColor: '#CE8147'
}, {
  name: src_pages_experience_constants__WEBPACK_IMPORTED_MODULE_0__.ExperiencePageSectionName.PROJECTS,
  title: src_pages_experience_constants__WEBPACK_IMPORTED_MODULE_0__.experiencePageSections[src_pages_experience_constants__WEBPACK_IMPORTED_MODULE_0__.ExperiencePageSectionName.PROJECTS].title,
  path: src_routes__WEBPACK_IMPORTED_MODULE_2__["default"][src_routes__WEBPACK_IMPORTED_MODULE_2__.PageName.EXPERIENCE].path + '?' + src_pages_experience_constants__WEBPACK_IMPORTED_MODULE_0__.experiencePageSections[src_pages_experience_constants__WEBPACK_IMPORTED_MODULE_0__.ExperiencePageSectionName.PROJECTS].queryParam,
  buttonColor: '#931621'
}];

/***/ }),

/***/ "./src/pages/experience/constants.ts":
/*!*******************************************!*\
  !*** ./src/pages/experience/constants.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperiencePageSectionName": function() { return /* binding */ ExperiencePageSectionName; },
/* harmony export */   "experiencePageSections": function() { return /* binding */ experiencePageSections; },
/* harmony export */   "projects": function() { return /* binding */ projects; }
/* harmony export */ });
/* harmony import */ var src_assets_data_projects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/data/projects.json */ "./src/assets/data/projects.json");
/* harmony import */ var src_assets_icons_projects_3d_printing_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/icons/projects/3d_printing.svg */ "./src/assets/icons/projects/3d_printing.svg");
/* harmony import */ var src_assets_icons_projects_alexa_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/icons/projects/alexa.svg */ "./src/assets/icons/projects/alexa.svg");
/* harmony import */ var src_assets_icons_projects_bjm_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/icons/projects/bjm.svg */ "./src/assets/icons/projects/bjm.svg");
/* harmony import */ var src_assets_icons_projects_pong_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/icons/projects/pong.svg */ "./src/assets/icons/projects/pong.svg");
/* harmony import */ var src_assets_icons_projects_telegram_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/icons/projects/telegram.svg */ "./src/assets/icons/projects/telegram.svg");
var _experiencePageSectio;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var ExperiencePageSectionName;

(function (ExperiencePageSectionName) {
  ExperiencePageSectionName["CAREER_EXPERIENCE"] = "careerExperience";
  ExperiencePageSectionName["ACHIEVEMENTS"] = "achievements";
  ExperiencePageSectionName["PROJECTS"] = "projects";
})(ExperiencePageSectionName || (ExperiencePageSectionName = {}));
/**
 * Icons for each project in the SAME order that they are written in the json file.
 */


var icons = [src_assets_icons_projects_bjm_svg__WEBPACK_IMPORTED_MODULE_3__, src_assets_icons_projects_3d_printing_svg__WEBPACK_IMPORTED_MODULE_1__, src_assets_icons_projects_alexa_svg__WEBPACK_IMPORTED_MODULE_2__, src_assets_icons_projects_telegram_svg__WEBPACK_IMPORTED_MODULE_5__, src_assets_icons_projects_pong_svg__WEBPACK_IMPORTED_MODULE_4__];
var experiencePageSections = (_experiencePageSectio = {}, _defineProperty(_experiencePageSectio, ExperiencePageSectionName.CAREER_EXPERIENCE, {
  name: ExperiencePageSectionName.CAREER_EXPERIENCE,
  title: 'Career Experience',
  queryParam: ExperiencePageSectionName.CAREER_EXPERIENCE
}), _defineProperty(_experiencePageSectio, ExperiencePageSectionName.ACHIEVEMENTS, {
  name: ExperiencePageSectionName.ACHIEVEMENTS,
  title: 'Achievements',
  queryParam: ExperiencePageSectionName.ACHIEVEMENTS
}), _defineProperty(_experiencePageSectio, ExperiencePageSectionName.PROJECTS, {
  name: ExperiencePageSectionName.PROJECTS,
  title: 'Projects',
  queryParam: ExperiencePageSectionName.PROJECTS
}), _experiencePageSectio);
/**
 * The array of Projects, which contains information from the json file,
 * combined with the icon svg for each project.
 */

var projects = src_assets_data_projects_json__WEBPACK_IMPORTED_MODULE_0__.map(function (projectInfo, index) {
  return _objectSpread(_objectSpread({}, projectInfo), {}, {
    icon: icons[index]
  });
});

/***/ }),

/***/ "./src/pages/knowledge/constants.ts":
/*!******************************************!*\
  !*** ./src/pages/knowledge/constants.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgePageSectionName": function() { return /* binding */ KnowledgePageSectionName; },
/* harmony export */   "knowledgePageSections": function() { return /* binding */ knowledgePageSections; }
/* harmony export */ });
var _knowledgePageSection;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KnowledgePageSectionName;

(function (KnowledgePageSectionName) {
  KnowledgePageSectionName["SKILLS"] = "skills";
  KnowledgePageSectionName["UNIVERSITY_MODULES"] = "modules";
})(KnowledgePageSectionName || (KnowledgePageSectionName = {}));

var knowledgePageSections = (_knowledgePageSection = {}, _defineProperty(_knowledgePageSection, KnowledgePageSectionName.SKILLS, {
  name: KnowledgePageSectionName.SKILLS,
  title: 'Skills',
  queryParam: KnowledgePageSectionName.SKILLS
}), _defineProperty(_knowledgePageSection, KnowledgePageSectionName.UNIVERSITY_MODULES, {
  name: KnowledgePageSectionName.UNIVERSITY_MODULES,
  title: 'University Modules',
  queryParam: KnowledgePageSectionName.UNIVERSITY_MODULES
}), _knowledgePageSection);

/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageName": function() { return /* binding */ PageName; }
/* harmony export */ });
var _routes;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PageName;

(function (PageName) {
  PageName["HOME"] = "home";
  PageName["KNOWLEDGE"] = "knowledge";
  PageName["EXPERIENCE"] = "experience";
})(PageName || (PageName = {}));
/**
 * Contains information on all the routes in the app.
 * Each routes key must match the name of the page(folder name) it routes to.
 * The title of a route is the title of the link in the navbar that directs to it.
 */


var routes = (_routes = {}, _defineProperty(_routes, PageName.HOME, {
  title: 'Home',
  path: '/'
}), _defineProperty(_routes, PageName.KNOWLEDGE, {
  title: 'Knowledge',
  path: '/knowledge'
}), _defineProperty(_routes, PageName.EXPERIENCE, {
  title: 'Experience',
  path: '/experience'
}), _routes);
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/util/hooks/usePageSectionRefMapCreator.ts":
/*!*******************************************************!*\
  !*** ./src/util/hooks/usePageSectionRefMapCreator.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ usePageSectionRefMapCreator; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/**
 * React hook that converts an object containing PageSections into PageSectionWithRef, by adding a ref
 * for every single page section.
 */

function usePageSectionRefMapCreator(sections) {
  var pageSectionsWithRefs = {};
  Object.entries(sections).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        pageSection = _ref2[1];

    pageSectionsWithRefs[key] = _objectSpread(_objectSpread({}, pageSection), {}, {
      ref: (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null)
    });
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(pageSectionsWithRefs);
}

/***/ }),

/***/ "./src/components/PageHeader/styles.scss":
/*!***********************************************!*\
  !*** ./src/components/PageHeader/styles.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"headerContainer":"pRMSuhh6KM10l_cToaVJ"});

/***/ }),

/***/ "./src/components/SectionHeader/styles.scss":
/*!**************************************************!*\
  !*** ./src/components/SectionHeader/styles.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"customLineBreaker":"G1sEQb6m9oGeeUfEAtK7","isHiddenOnPhone":"hVRzAN3r9td1y17lsSKr"});

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/icons/bjm.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/bjm.svg ***!
  \**********************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMjguMjAwMDAwMHB0IiBoZWlnaHQ9IjI1LjYwMDAwMDBwdCIgdmlld0JveD0iMCAwIDQyNi4wMDAwMDAgMzg0LjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMzg0LjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iI0FBQUFBQSIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTE5ODYgMzY4NCBjLTQzIC04IC0xNDAgLTM3IC0yMTUgLTY1IC0zMDYgLTExNCAtMzgzIC0xMzggLTU0MSAtMTc0Ci05MSAtMjAgLTE3MiAtMzkgLTE4MCAtNDIgLTggLTQgLTE4IC01IC0yMyAtNSAtMTQgMyAtMjEyIC00NyAtMjg3IC03MiAtNDEKLTE0IC05NCAtMjYgLTExOCAtMjYgLTg3IDAgLTEzMCAtMzYgLTEyMCAtMTAwIDExIC03NCAxNTQgLTg3IDM0MyAtMzEgNjEgMTcKMTE3IDM1IDEyNSAzOCA4IDMgMTggNiAyMiA1IDExIC0yIDI3MyA1NiA0MDMgOTAgNjYgMTcgMTc5IDUzIDI1MCA4MCAzNzggMTQ0CjM1MSAxMzYgMzU5IDk3IDMgLTE3IDYgLTQ2IDYgLTY0IDAgLTE3IDIgLTM0IDUgLTM3IDcgLTcgOSAtNTE5IDIgLTUzOCAtMyAtOAotOSAtMTU5IC0xMyAtMzM1IC05IC00NDYgLTkgLTQ0NSAtMjggLTQ5MCAtNTYgLTEzMSAtMzcyIC0xMDE0IC00MDIgLTExMjAgLTkKLTMzIC0xNyAtOTcgLTE4IC0xNDIgLTEgLTQ1IC01IC04NSAtOSAtODkgLTExIC0xMSAtOCAtMjkyIDIgLTI5OSA2IC0zIDcgLTI3CjQgLTU0IC04IC02NyAyMCAtMTU2IDYxIC0xOTcgNDUgLTQ1IDkyIC01MiAxNTAgLTI0IDYzIDMwIDE4NCAxNjIgMjI0IDI0MiAzOAo3OCA5NCAyNDcgODggMjY1IC0zIDcgLTEgMTUgNCAxOCAxMSA3IDM0IDE0MSAyNiAxNTQgLTQgNSAtMiAxMiAzIDE1IDExIDcgMzUKMTMyIDI3IDE0NSAtNCA1IC0xIDEzIDQgMTYgNiA0IDEwIDE3IDkgMjggLTEgMTIgMSAyOSA0IDM3IDE2IDM4IDI4IDM1NiAyNgo2NjMgLTEgMTg1IDEgMzQwIDUgMzQ0IDMgMyA2IDI2IDYgNDkgMCA0NCAyMyAxMDEgMTI4IDMyNCAyNyA1OCA4NCAxODQgMTI3CjI4MCA0MiA5NiA4MCAxNzggODQgMTgyIDkgMTAgNiAtNjMgLTQgLTg1IC00IC0xMCAtNSAtNDAgLTIgLTY3IDMgLTI3IDIgLTUyCi0yIC01NCAtNyAtNSAtMjAgLTExOCAtMjYgLTIzMSAtMSAtMjIgLTYgLTQ4IC0xMCAtNTkgLTUgLTEwIC05IC05MSAtOSAtMTgwCi0xIC0xNDUgMSAtMTY0IDE5IC0xOTYgMTMgLTIxIDM1IC00MCA1NyAtNDggMzMgLTEzIDQxIC0xMiA3NSA0IDIxIDExIDQzIDMwCjUwIDQ0IDI0IDUyIDM2IDIwMiAzMCAzOTYgLTMgMTA2IC0xIDE5NiAzIDIwMCAxMiAxMyA0MiAyNDMgMzYgMjcwIC00IDEzIC0yCjI2IDQgMjkgNSAzIDEwIDIxIDEwIDM4IDAgNjQgMTYgNTYgMzQgLTE2IDY4IC0yNjUgMTQyIC00NTUgMTk2IC01MDEgNjggLTU3CjE2MCAtNTQgMjIyIDcgNzYgNzUgMTk4IDI0MSAzMDQgNDE0IGwxOSAzMSAwIC05OCBjMCAtNTQgLTMgLTEwMiAtNyAtMTA2IC0xMwotMTMgLTEwIC0zNDIgMyAtMzUwIDggLTUgMTAgLTM1IDYgLTk3IC01IC03NiAtMyAtOTggMTUgLTE0NiAzNyAtOTggMTIyIC0xNjAKMjAwIC0xNDQgMTcgMyA0NSAyMSA2MyAzOCAzMCAzMCAzMiAzOCAzMCA4OCAtMiAzNyAtMTAgNjggLTI1IDkyIC0yMiAzNiAtMjIKMzkgLTE1IDI2MSA0IDEyMyA4IDM3MiAxMCA1NTMgMSAxODEgNSAzMzMgNyAzMzcgMyA1IDExIDYxIDE4IDEyNCAxNCAxMzAgNQoxNzMgLTQ0IDIwNSAtNjEgNDAgLTE1OSAtMTcgLTE2MCAtOTIgLTEgLTIxIC00IC00MiAtNyAtNDggLTQgLTUgLTE2IC00MiAtMjgKLTgyIC0xMyAtNDMgLTQzIC0xMDQgLTc0IC0xNTIgLTI5IC00NCAtODYgLTEzNiAtMTI3IC0yMDMgLTE2NiAtMjcxIC0yNzMKLTQxOSAtMjkxIC00MDEgLTQgNCAtNDYgMTIxIC05MyAyNjAgLTkyIDI3NCAtMTUyIDQxNSAtMTg1IDQzMiAtMTEgNyAtMzEgMzMKLTQzIDU5IC0zNyA3NSAtMTEwIDg0IC0xNTEgMTcgLTY1IC0xMDUgLTIxNyAtMzk1IC0zMTIgLTU5NyBsLTExMiAtMjM4IC01CjE3OCBjLTMgOTcgLTEgMTgxIDMgMTg2IDExIDEyIDEyIDM1MCAyIDM2MCAtNSA0IC04IDM4IC04IDc0IC0xIDEwMiAtMTUgMjU0Ci0yNyAyODUgLTEyIDMxIC01NSA1OCAtOTAgNTYgLTEzIC0xIC01OSAtOCAtMTAyIC0xNXogbS0xMSAtMjE1NiBjLTMgLTI0IC03Ci0xMzcgLTkgLTI1MyAtMiAtMTE1IC03IC0yMTggLTExIC0yMjggLTQgLTkgLTUgLTI3IC0yIC0zOCAzIC0xMiAyIC0yOSAtMwotMzggLTUgLTkgLTE2IC02NSAtMjUgLTEyNiAtMTcgLTExMyAtMzggLTIwNyAtNTcgLTI2MCAtMjQgLTY2IC0xMTAgLTIzMwotMTI4IC0yNTAgLTIwIC0xOCAtMjAgLTE3IC0yMCAyNyAwIDI0IC0zIDQ3IC02IDUxIC03IDcgLTggMzQ0IC0xIDM2NyAzIDggMTAKNDIgMTcgNzUgMTIgNTYgNTcgMTkwIDE4MCA1MzUgMjkgODAgNTMgMTUyIDU1IDE2MCA1IDIxIDQgMjAgMTAgMjAgMiAwIDIgLTE5CjAgLTQyeiIvPgo8cGF0aCBkPSJNMTA1NSAzMTQzIGMtMTEgLTIgLTI3IC03IC0zNSAtMTAgLTggLTMgLTE4IC02IC0yMiAtNSAtMTQgMyAtMTc3Ci01NyAtMjM4IC04OCAtOTEgLTQ2IC0yNDYgLTE0NSAtMzA2IC0xOTcgLTU2IC00NyAtNjggLTc2IC00OSAtMTIwIDEyIC0yOSA2OQotNjMgODIgLTQ5IDE2IDE2IDMzIC0xOCAyNyAtNTUgLTQgLTIxIC0zIC00NiAxIC01NiA4IC0yMSAxMSAtMzU1IDMgLTM2OSAtNQotOCAtNCAtMzQ5IDEgLTM0OSAxIDAgNCAtMjQwIDYgLTUzNCBsNCAtNTM0IDMwIC0zMSBjMjUgLTI0IDQwIC0zMSA3MiAtMzEgMzUKMCA0NiA2IDc2IDM5IGwzNiAzOSAtNiAxMDMgYy0zIDU3IC0zIDEwNCAxIDEwMyA0IDAgMTYgLTQgMjcgLTggMzMgLTEzIDcxIDcKMTE0IDYyIDIyIDI5IDkxIDExNyAxNTMgMTk2IDYyIDc4IDE0MCAxNzggMTczIDIyMCAzMyA0MyA5MyAxMTggMTMzIDE2NyA5MAoxMTEgMTU1IDIzOSAxODIgMzU5IDMyIDE0NSAyNCAyMzUgLTI1IDI5NCAtMjYgMzEgLTExMCA3NSAtMTI1IDY2IC01IC0zIC0xMQotMSAtMTUgNSAtOCAxMyAtNzIgMTMgLTgwIDAgLTQgLTYgLTE1IC04IC0yNiAtNSAtMjQgOCAtMTcwIC0xNCAtMTg2IC0yNyAtOQotNyAtMTMgLTcgLTEzIDAgMCA2IDM1IDUzIDc4IDEwNCAxNDMgMTczIDIxMSAyODEgMjU2IDQwNiAyOCA4MCAzMiAxMjEgMTUKMTczIC0xNSA0MyAtNzQgMTA3IC0xMTYgMTI1IC0zMSAxMyAtMTgwIDE4IC0yMjggN3ogbTE4MSAtMTU0IGMzOCAtMzEgLTE2Ci0xNzggLTExNiAtMzE5IC0yOSAtNDEgLTEwMSAtMTMzIC0xNTkgLTIwNCAtMjEwIC0yNTYgLTIzMCAtMjg0IC0yMTQgLTMwOSA0Ci03IDggLTE5IDggLTI3IDAgLTggMTUgLTIzIDM0IC0zMiAzMSAtMTYgMzcgLTE2IDcwIC0xIDExMCA0OCAxNTUgNjMgMjM2IDc5CjUwIDkgOTcgMTkgMTA1IDIyIDE4IDYgMTI3IDMgMTUzIC00IDEwIC0zIDE3IC0xNSAxNyAtMjkgMCAtMTMgNCAtMjcgMTAgLTMwCjYgLTQgNiAtMTIgMSAtMjMgLTUgLTkgLTE0IC00NCAtMjAgLTc3IC0xNiAtODYgLTc3IC0yMDcgLTE1MiAtMjk5IC0zNSAtNDMKLTEwNyAtMTMzIC0xNTkgLTIwMSAtMTg3IC0yNDAgLTI1OSAtMzMxIC0yOTIgLTM2OCBsLTMzIC0zOCAtMyAxMDggYy0yIDU5IC02CjExMiAtMTAgMTE4IC00IDUgLTUgOTAgLTMgMTg3IDIgOTcgMCAxODEgLTMgMTg3IC00IDUgLTkgNjIgLTEyIDEyNyAtMiA2NCAtNwoxMjEgLTEwIDEyNiAtNCA1IC01IDExNCAtNSAyNDMgMSAxNTAgLTIgMjM2IC04IDI0MCAtNiAzIC04IDI0IC01IDQ4IDMgMjMgMQo2NyAtNCA5NyAtNiAzNCAtNyA2MSAtMSA3MiAxMiAyMSAtMTEgODIgLTM2IDk1IC0xNCA4IC00IDE4IDU3IDU1IDQwIDI1IDkyCjU1IDExNCA2NiA2NCAzMyAyNTIgOTIgMjg5IDkyIDE5IDAgMzYgNCAzOSA4IDcgMTMgOTUgNiAxMTIgLTl6Ii8+CjwvZz4KPC9zdmc+Cg==";

/***/ }),

/***/ "./src/assets/icons/projects/3d_printing.svg":
/*!***************************************************!*\
  !*** ./src/assets/icons/projects/3d_printing.svg ***!
  \***************************************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIg0KCSB2aWV3Qm94PSIwIDAgNDg2LjExNyA0ODYuMTE3IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJYTUxJRF8xMTY0XyI+DQoJPGcgaWQ9IlhNTElEXzQwMF8iPg0KCQk8cmVjdCB4PSI3LjQxNiIgc3R5bGU9ImZpbGw6I0ExMDgzRTsiIHdpZHRoPSI0NzEuMTA1IiBoZWlnaHQ9IjQ1NS43MzQiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzU3M18iPg0KCQk8cmVjdCB4PSIzMTkuMDE0IiBzdHlsZT0iZmlsbDojRDYwQjUyOyIgd2lkdGg9IjE1OS41MDciIGhlaWdodD0iNDU1LjczNCIvPg0KCTwvZz4NCgk8ZyBpZD0iWE1MSURfNzcwXyI+DQoJCTxyZWN0IHg9IjM3OS43NzkiIHk9IjMyNi42MDkiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iNjguMzYiIGhlaWdodD0iOTguNzQyIi8+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF8xMTYzXyI+DQoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGN4PSI0MTAuMTYxIiBjeT0iMjczLjQ0IiByPSIyMi43ODciLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzU3NF8iPg0KCQk8cmVjdCB4PSIzNy45NzgiIHk9IjM3Ljk3OCIgc3R5bGU9ImZpbGw6I0UwRDZDNjsiIHdpZHRoPSIzMDMuODIzIiBoZWlnaHQ9IjM4Ny4zNzQiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzExMDhfIj4NCgkJPHJlY3QgeD0iMTY3LjEwMyIgeT0iODMuNTUxIiBzdHlsZT0iZmlsbDojRDYwQjUyOyIgd2lkdGg9IjQ1LjU3MyIgaGVpZ2h0PSI5OC43NDIiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwOTJfIj4NCgkJPHJlY3QgeD0iMTM2LjcyIiB5PSIzNzIuMTgzIiBzdHlsZT0iZmlsbDojQ0JCQkEwOyIgd2lkdGg9IjEwNi4zMzgiIGhlaWdodD0iNTMuMTY5Ii8+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF8xMDYxXyI+DQoJCTxyZWN0IHg9IjM2NC41ODciIHk9IjMwLjQ3OCIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSIxNS4xOTEiIGhlaWdodD0iMTUiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwNjJfIj4NCgkJPHJlY3QgeD0iMzY0LjU4NyIgeT0iNjAuODYiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iMTUuMTkxIiBoZWlnaHQ9IjE1Ii8+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF8xMDYzXyI+DQoJCTxyZWN0IHg9IjM2NC41ODciIHk9IjkxLjI0MyIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSIxNS4xOTEiIGhlaWdodD0iMTUiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwNjRfIj4NCgkJPHJlY3QgeD0iMzY0LjU4NyIgeT0iMTIxLjYyNSIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSIxNS4xOTEiIGhlaWdodD0iMTUiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwNjVfIj4NCgkJPHJlY3QgeD0iMzY0LjU4NyIgeT0iMTUyLjAwNiIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSIxNS4xOTEiIGhlaWdodD0iMTUiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwNjZfIj4NCgkJPHJlY3QgeD0iMzY0LjU4NyIgeT0iMTg5Ljk4NSIgc3R5bGU9ImZpbGw6IzFEMUQxQjsiIHdpZHRoPSI5MS4xNDciIGhlaWdodD0iMTUiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwNTdfIj4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzFEMUQxQjsiIGQ9Ik00MTAuMTYxLDMwMy43MjdjLTE2LjcsMC0zMC4yODctMTMuNTg3LTMwLjI4Ny0zMC4yODdzMTMuNTg2LTMwLjI4NiwzMC4yODctMzAuMjg2DQoJCQlzMzAuMjg3LDEzLjU4NiwzMC4yODcsMzAuMjg2UzQyNi44NjEsMzAzLjcyNyw0MTAuMTYxLDMwMy43Mjd6IE00MTAuMTYxLDI1OC4xNTRjLTguNDI5LDAtMTUuMjg3LDYuODU3LTE1LjI4NywxNS4yODYNCgkJCWMwLDguNDMsNi44NTcsMTUuMjg3LDE1LjI4NywxNS4yODdzMTUuMjg3LTYuODU3LDE1LjI4Ny0xNS4yODdDNDI1LjQ0OCwyNjUuMDExLDQxOC41OSwyNTguMTU0LDQxMC4xNjEsMjU4LjE1NHoiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwNjhfIj4NCgkJPHJlY3QgeD0iNDAyLjY2MSIgeT0iMjIwLjI3MSIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNS4xOTEiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwNjdfIj4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzFEMUQxQjsiIGQ9Ik00NTUuNjM5LDQzMi44NTJoLTkwLjk1NlYzMTkuMTFoOTAuOTU2VjQzMi44NTJ6IE0zNzkuNjgzLDQxNy44NTJoNjAuOTU2VjMzNC4xMWgtNjAuOTU2VjQxNy44NTJ6DQoJCQkiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwNzBfIj4NCgkJPHJlY3QgeD0iMzk0Ljk3IiB5PSIzNDkuNDkyIiBzdHlsZT0iZmlsbDojMUQxRDFCOyIgd2lkdGg9IjMwLjM4MiIgaGVpZ2h0PSIxNSIvPg0KCTwvZz4NCgk8ZyBpZD0iWE1MSURfMTA3MV8iPg0KCQk8cmVjdCB4PSI0MDIuNTY2IiB5PSIzMC40NzgiIHN0eWxlPSJmaWxsOiMxRDFEMUI7IiB3aWR0aD0iNTMuMTY5IiBoZWlnaHQ9IjE1Ii8+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF8xMDczXyI+DQoJCTxyZWN0IHg9IjQwMi41NjYiIHk9IjYwLjg2IiBzdHlsZT0iZmlsbDojMUQxRDFCOyIgd2lkdGg9IjUzLjE2OSIgaGVpZ2h0PSIxNSIvPg0KCTwvZz4NCgk8ZyBpZD0iWE1MSURfMTA3NF8iPg0KCQk8cmVjdCB4PSI0MDIuNTY2IiB5PSI5MS4yNDMiIHN0eWxlPSJmaWxsOiMxRDFEMUI7IiB3aWR0aD0iNTMuMTY5IiBoZWlnaHQ9IjE1Ii8+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF8xMDc1XyI+DQoJCTxyZWN0IHg9IjQwMi41NjYiIHk9IjEyMS42MjUiIHN0eWxlPSJmaWxsOiMxRDFEMUI7IiB3aWR0aD0iNTMuMTY5IiBoZWlnaHQ9IjE1Ii8+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF8xMDc2XyI+DQoJCTxyZWN0IHg9IjQwMi41NjYiIHk9IjE1Mi4wMDYiIHN0eWxlPSJmaWxsOiMxRDFEMUI7IiB3aWR0aD0iNTMuMTY5IiBoZWlnaHQ9IjE1Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMUQxRDFCOyIgZD0iTTAuMDk2LDAuMDk1djQ2My4xMzloNTIuMjA2djIyLjg4M2gxNXYtMjIuODgzaDM1MC42ODZ2MjIuODgzaDE1di0yMi44ODNoNTMuMDMzVjAuMDk1SDAuMDk2eg0KCQkJIE00NzEuMDIxLDQ0OC4yMzRIMTUuMDk2VjE1LjA5NWg0NTUuOTI1VjQ0OC4yMzR6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMxRDFEMUI7IiBkPSJNMzQ5LjMwMSwzMC40NzhIMzAuNDc4djQwMi4zNzRoMzE4LjgyM1YzMC40Nzh6IE0yMzUuNTU4LDQxNy44NTJIMTQ0LjIydi0zOC4xNjloOTEuMzM4VjQxNy44NTJ6DQoJCQkgTTMzNC4zMDEsNDE3Ljg1MmgtODMuNzQzdi0zOC4xNjloMTUuMjg3di0xNUgxMTMuOTM0djE1aDE1LjI4N3YzOC4xNjlINDUuNDc4VjQ1LjQ3OGgyODguODIzVjQxNy44NTJ6Ii8+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF8xMDgwXyI+DQoJCTxyZWN0IHg9IjUzLjE2OSIgeT0iMTE0LjAyOSIgc3R5bGU9ImZpbGw6IzFEMUQxQjsiIHdpZHRoPSI5OC43NDMiIGhlaWdodD0iMTUiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzU1OV8iPg0KCQk8cmVjdCB4PSIyMjcuODY3IiB5PSIxMTQuMDI5IiBzdHlsZT0iZmlsbDojMUQxRDFCOyIgd2lkdGg9Ijk4Ljc0MiIgaGVpZ2h0PSIxNSIvPg0KCTwvZz4NCgk8ZyBpZD0iWE1MSURfMTA2MF8iPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMUQxRDFCOyIgZD0iTTIyMC4xNzYsMTg5Ljc5NGgtNjAuNTc0Vjc2LjA1MWg2MC41NzRWMTg5Ljc5NHogTTE3NC42MDMsMTc0Ljc5NGgzMC41NzRWOTEuMDUxaC0zMC41NzRWMTc0Ljc5NHoNCgkJCSIvPg0KCTwvZz4NCgk8ZyBpZD0iWE1MSURfMTA4M18iPg0KCQk8cG9seWdvbiBzdHlsZT0iZmlsbDojMUQxRDFCOyIgcG9pbnRzPSIyMTIuNTgxLDIyMC4xNzYgMTY3LjE5OCwyMjAuMTc2IDE2Ny4xOTgsMTk3LjQ4NSAxODIuMTk4LDE5Ny40ODUgMTgyLjE5OCwyMDUuMTc2IA0KCQkJMTk3LjU4MSwyMDUuMTc2IDE5Ny41ODEsMTk3LjQ4NSAyMTIuNTgxLDE5Ny40ODUgCQkiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwODRfIj4NCgkJPHJlY3QgeD0iMTgyLjM4OSIgeT0iMjEyLjY3NiIgc3R5bGU9ImZpbGw6IzFEMUQxQjsiIHdpZHRoPSIxNSIgaGVpZ2h0PSIzNy45NzgiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzU2MF8iPg0KCQkNCgkJCTxyZWN0IHg9IjIyNi4wODMiIHk9IjIwMi44MzEiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjcwNzEgLTAuNzA3MSAwLjcwNzEgLTAuNzA3MSAyMDQuMDU4OCA2MzUuMTk4MykiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iMTUiIGhlaWdodD0iMTQ1LjAxMyIvPg0KCTwvZz4NCgk8ZyBpZD0iWE1MSURfNTYxXyI+DQoJCQ0KCQkJPHJlY3QgeD0iMjY1Ljk1OSIgeT0iMjU5LjU1IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC43MDcxIC0wLjcwNzEgMC43MDcxIC0wLjcwNzEgMjY4LjEwNDYgNjczLjExOTMpIiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgd2lkdGg9IjE1LjAwMSIgaGVpZ2h0PSI0Mi45NjciLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzQwMV8iPg0KCQkNCgkJCTxyZWN0IHg9IjgzLjY1OCIgeT0iMTgwLjQ1MyIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzA3MSAtMC43MDcxIDAuNzA3MSAtMC43MDcxIDUuMjMwMiA0MjcuNTIyMykiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iMTUiIGhlaWdodD0iNjQuNDQ5Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=";

/***/ }),

/***/ "./src/assets/icons/projects/alexa.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/projects/alexa.svg ***!
  \*********************************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzMuMjUgMTczLjMzIj48cGF0aCBkPSJNODYuNjIzIDBDMzguNzgzIDAgMCAzOC44MDMgMCA4Ni42NjdjMCA0My45NDcgMzIuNjk0IDgwLjI0OCA3NS4wNzQgODUuODk4di0xNy40NjNjMC00LjkyNS0zLjEwNC05LjM1LTcuNzctMTAuOTE3LTI0LjQ1Mi04LjIxOC00MS45NDUtMzEuNjAxLTQxLjMtNTguOTguNzg0LTMzLjMzMiAyNy45MjItNTkuNTM4IDYxLjI0NC01OS4yMDIgMzMuMi4zMzYgNjAuMDEyIDI3LjM2NyA2MC4wMTIgNjAuNjY0IDAgLjc1OS0uMDE5IDEuNTE0LS4wNDcgMi4yNjVsLS4wMTguNTA3YTYzLjQ5OSA2My40OTkgMCAwMS0uMTMgMi4wODZjLS4wMTYuMjItLjAzOC40NC0uMDU4LjY2YTU2LjkxMiA1Ni45MTIgMCAwMS0uMzU1IDMuMDY3Yy0uMDMzLjI0Ni0uMDY3LjQ5My0uMTA0LjczOC03LjQyNCA0OC45MjctNzEuMTE4IDc2LjQyNi03MS40NjcgNzYuNTc3IDMuNzc3LjUwMiA3LjYyOS43NjYgMTEuNTQyLjc2NiA0Ny44NCAwIDg2LjYyNC0zOC44MDEgODYuNjI0LTg2LjY2NkMxNzMuMjQ3IDM4LjgwMyAxMzQuNDY0IDAgODYuNjIzIDAiIGZpbGw9IiM1RkNBRjQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==";

/***/ }),

/***/ "./src/assets/icons/projects/bjm.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/projects/bjm.svg ***!
  \*******************************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB2aWV3Qm94PSIwIDAgNDI2LjAwMDAwMCAzODQuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwzODQuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMEIzOTQ4IiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTk4NiAzNjg0IGMtNDMgLTggLTE0MCAtMzcgLTIxNSAtNjUgLTMwNiAtMTE0IC0zODMgLTEzOCAtNTQxIC0xNzQKLTkxIC0yMCAtMTcyIC0zOSAtMTgwIC00MiAtOCAtNCAtMTggLTUgLTIzIC01IC0xNCAzIC0yMTIgLTQ3IC0yODcgLTcyIC00MQotMTQgLTk0IC0yNiAtMTE4IC0yNiAtODcgMCAtMTMwIC0zNiAtMTIwIC0xMDAgMTEgLTc0IDE1NCAtODcgMzQzIC0zMSA2MSAxNwoxMTcgMzUgMTI1IDM4IDggMyAxOCA2IDIyIDUgMTEgLTIgMjczIDU2IDQwMyA5MCA2NiAxNyAxNzkgNTMgMjUwIDgwIDM3OCAxNDQKMzUxIDEzNiAzNTkgOTcgMyAtMTcgNiAtNDYgNiAtNjQgMCAtMTcgMiAtMzQgNSAtMzcgNyAtNyA5IC01MTkgMiAtNTM4IC0zIC04Ci05IC0xNTkgLTEzIC0zMzUgLTkgLTQ0NiAtOSAtNDQ1IC0yOCAtNDkwIC01NiAtMTMxIC0zNzIgLTEwMTQgLTQwMiAtMTEyMCAtOQotMzMgLTE3IC05NyAtMTggLTE0MiAtMSAtNDUgLTUgLTg1IC05IC04OSAtMTEgLTExIC04IC0yOTIgMiAtMjk5IDYgLTMgNyAtMjcKNCAtNTQgLTggLTY3IDIwIC0xNTYgNjEgLTE5NyA0NSAtNDUgOTIgLTUyIDE1MCAtMjQgNjMgMzAgMTg0IDE2MiAyMjQgMjQyIDM4Cjc4IDk0IDI0NyA4OCAyNjUgLTMgNyAtMSAxNSA0IDE4IDExIDcgMzQgMTQxIDI2IDE1NCAtNCA1IC0yIDEyIDMgMTUgMTEgNyAzNQoxMzIgMjcgMTQ1IC00IDUgLTEgMTMgNCAxNiA2IDQgMTAgMTcgOSAyOCAtMSAxMiAxIDI5IDQgMzcgMTYgMzggMjggMzU2IDI2CjY2MyAtMSAxODUgMSAzNDAgNSAzNDQgMyAzIDYgMjYgNiA0OSAwIDQ0IDIzIDEwMSAxMjggMzI0IDI3IDU4IDg0IDE4NCAxMjcKMjgwIDQyIDk2IDgwIDE3OCA4NCAxODIgOSAxMCA2IC02MyAtNCAtODUgLTQgLTEwIC01IC00MCAtMiAtNjcgMyAtMjcgMiAtNTIKLTIgLTU0IC03IC01IC0yMCAtMTE4IC0yNiAtMjMxIC0xIC0yMiAtNiAtNDggLTEwIC01OSAtNSAtMTAgLTkgLTkxIC05IC0xODAKLTEgLTE0NSAxIC0xNjQgMTkgLTE5NiAxMyAtMjEgMzUgLTQwIDU3IC00OCAzMyAtMTMgNDEgLTEyIDc1IDQgMjEgMTEgNDMgMzAKNTAgNDQgMjQgNTIgMzYgMjAyIDMwIDM5NiAtMyAxMDYgLTEgMTk2IDMgMjAwIDEyIDEzIDQyIDI0MyAzNiAyNzAgLTQgMTMgLTIKMjYgNCAyOSA1IDMgMTAgMjEgMTAgMzggMCA2NCAxNiA1NiAzNCAtMTYgNjggLTI2NSAxNDIgLTQ1NSAxOTYgLTUwMSA2OCAtNTcKMTYwIC01NCAyMjIgNyA3NiA3NSAxOTggMjQxIDMwNCA0MTQgbDE5IDMxIDAgLTk4IGMwIC01NCAtMyAtMTAyIC03IC0xMDYgLTEzCi0xMyAtMTAgLTM0MiAzIC0zNTAgOCAtNSAxMCAtMzUgNiAtOTcgLTUgLTc2IC0zIC05OCAxNSAtMTQ2IDM3IC05OCAxMjIgLTE2MAoyMDAgLTE0NCAxNyAzIDQ1IDIxIDYzIDM4IDMwIDMwIDMyIDM4IDMwIDg4IC0yIDM3IC0xMCA2OCAtMjUgOTIgLTIyIDM2IC0yMgozOSAtMTUgMjYxIDQgMTIzIDggMzcyIDEwIDU1MyAxIDE4MSA1IDMzMyA3IDMzNyAzIDUgMTEgNjEgMTggMTI0IDE0IDEzMCA1CjE3MyAtNDQgMjA1IC02MSA0MCAtMTU5IC0xNyAtMTYwIC05MiAtMSAtMjEgLTQgLTQyIC03IC00OCAtNCAtNSAtMTYgLTQyIC0yOAotODIgLTEzIC00MyAtNDMgLTEwNCAtNzQgLTE1MiAtMjkgLTQ0IC04NiAtMTM2IC0xMjcgLTIwMyAtMTY2IC0yNzEgLTI3MwotNDE5IC0yOTEgLTQwMSAtNCA0IC00NiAxMjEgLTkzIDI2MCAtOTIgMjc0IC0xNTIgNDE1IC0xODUgNDMyIC0xMSA3IC0zMSAzMwotNDMgNTkgLTM3IDc1IC0xMTAgODQgLTE1MSAxNyAtNjUgLTEwNSAtMjE3IC0zOTUgLTMxMiAtNTk3IGwtMTEyIC0yMzggLTUKMTc4IGMtMyA5NyAtMSAxODEgMyAxODYgMTEgMTIgMTIgMzUwIDIgMzYwIC01IDQgLTggMzggLTggNzQgLTEgMTAyIC0xNSAyNTQKLTI3IDI4NSAtMTIgMzEgLTU1IDU4IC05MCA1NiAtMTMgLTEgLTU5IC04IC0xMDIgLTE1eiBtLTExIC0yMTU2IGMtMyAtMjQgLTcKLTEzNyAtOSAtMjUzIC0yIC0xMTUgLTcgLTIxOCAtMTEgLTIyOCAtNCAtOSAtNSAtMjcgLTIgLTM4IDMgLTEyIDIgLTI5IC0zCi0zOCAtNSAtOSAtMTYgLTY1IC0yNSAtMTI2IC0xNyAtMTEzIC0zOCAtMjA3IC01NyAtMjYwIC0yNCAtNjYgLTExMCAtMjMzCi0xMjggLTI1MCAtMjAgLTE4IC0yMCAtMTcgLTIwIDI3IDAgMjQgLTMgNDcgLTYgNTEgLTcgNyAtOCAzNDQgLTEgMzY3IDMgOCAxMAo0MiAxNyA3NSAxMiA1NiA1NyAxOTAgMTgwIDUzNSAyOSA4MCA1MyAxNTIgNTUgMTYwIDUgMjEgNCAyMCAxMCAyMCAyIDAgMiAtMTkKMCAtNDJ6Ii8+CjxwYXRoIGQ9Ik0xMDU1IDMxNDMgYy0xMSAtMiAtMjcgLTcgLTM1IC0xMCAtOCAtMyAtMTggLTYgLTIyIC01IC0xNCAzIC0xNzcKLTU3IC0yMzggLTg4IC05MSAtNDYgLTI0NiAtMTQ1IC0zMDYgLTE5NyAtNTYgLTQ3IC02OCAtNzYgLTQ5IC0xMjAgMTIgLTI5IDY5Ci02MyA4MiAtNDkgMTYgMTYgMzMgLTE4IDI3IC01NSAtNCAtMjEgLTMgLTQ2IDEgLTU2IDggLTIxIDExIC0zNTUgMyAtMzY5IC01Ci04IC00IC0zNDkgMSAtMzQ5IDEgMCA0IC0yNDAgNiAtNTM0IGw0IC01MzQgMzAgLTMxIGMyNSAtMjQgNDAgLTMxIDcyIC0zMSAzNQowIDQ2IDYgNzYgMzkgbDM2IDM5IC02IDEwMyBjLTMgNTcgLTMgMTA0IDEgMTAzIDQgMCAxNiAtNCAyNyAtOCAzMyAtMTMgNzEgNwoxMTQgNjIgMjIgMjkgOTEgMTE3IDE1MyAxOTYgNjIgNzggMTQwIDE3OCAxNzMgMjIwIDMzIDQzIDkzIDExOCAxMzMgMTY3IDkwCjExMSAxNTUgMjM5IDE4MiAzNTkgMzIgMTQ1IDI0IDIzNSAtMjUgMjk0IC0yNiAzMSAtMTEwIDc1IC0xMjUgNjYgLTUgLTMgLTExCi0xIC0xNSA1IC04IDEzIC03MiAxMyAtODAgMCAtNCAtNiAtMTUgLTggLTI2IC01IC0yNCA4IC0xNzAgLTE0IC0xODYgLTI3IC05Ci03IC0xMyAtNyAtMTMgMCAwIDYgMzUgNTMgNzggMTA0IDE0MyAxNzMgMjExIDI4MSAyNTYgNDA2IDI4IDgwIDMyIDEyMSAxNQoxNzMgLTE1IDQzIC03NCAxMDcgLTExNiAxMjUgLTMxIDEzIC0xODAgMTggLTIyOCA3eiBtMTgxIC0xNTQgYzM4IC0zMSAtMTYKLTE3OCAtMTE2IC0zMTkgLTI5IC00MSAtMTAxIC0xMzMgLTE1OSAtMjA0IC0yMTAgLTI1NiAtMjMwIC0yODQgLTIxNCAtMzA5IDQKLTcgOCAtMTkgOCAtMjcgMCAtOCAxNSAtMjMgMzQgLTMyIDMxIC0xNiAzNyAtMTYgNzAgLTEgMTEwIDQ4IDE1NSA2MyAyMzYgNzkKNTAgOSA5NyAxOSAxMDUgMjIgMTggNiAxMjcgMyAxNTMgLTQgMTAgLTMgMTcgLTE1IDE3IC0yOSAwIC0xMyA0IC0yNyAxMCAtMzAKNiAtNCA2IC0xMiAxIC0yMyAtNSAtOSAtMTQgLTQ0IC0yMCAtNzcgLTE2IC04NiAtNzcgLTIwNyAtMTUyIC0yOTkgLTM1IC00MwotMTA3IC0xMzMgLTE1OSAtMjAxIC0xODcgLTI0MCAtMjU5IC0zMzEgLTI5MiAtMzY4IGwtMzMgLTM4IC0zIDEwOCBjLTIgNTkgLTYKMTEyIC0xMCAxMTggLTQgNSAtNSA5MCAtMyAxODcgMiA5NyAwIDE4MSAtMyAxODcgLTQgNSAtOSA2MiAtMTIgMTI3IC0yIDY0IC03CjEyMSAtMTAgMTI2IC00IDUgLTUgMTE0IC01IDI0MyAxIDE1MCAtMiAyMzYgLTggMjQwIC02IDMgLTggMjQgLTUgNDggMyAyMyAxCjY3IC00IDk3IC02IDM0IC03IDYxIC0xIDcyIDEyIDIxIC0xMSA4MiAtMzYgOTUgLTE0IDggLTQgMTggNTcgNTUgNDAgMjUgOTIKNTUgMTE0IDY2IDY0IDMzIDI1MiA5MiAyODkgOTIgMTkgMCAzNiA0IDM5IDggNyAxMyA5NSA2IDExMiAtOXoiLz4KPC9nPgo8L3N2Zz4K";

/***/ }),

/***/ "./src/assets/icons/projects/pong.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/projects/pong.svg ***!
  \********************************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUwNS45MzggNTA1LjkzOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTA1LjkzOCA1MDUuOTM4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojQTMxQTFBOyIgZD0iTTI5Ni45NjksMTMzLjE5NWMyNCw4MC0xMC40LDIwNi40LTkwLjQsMjI5LjZjLTgwLDI0LTE3Ni44LTY0LTIwMC44LTE0NHMyOS42LTE0MCwxMTAuNC0xNjMuMg0KCUMxOTYuMTY5LDMxLjU5NSwyNzIuOTY5LDUyLjM5NSwyOTYuOTY5LDEzMy4xOTV6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojOEUxMzEzOyIgZD0iTTExNi4xNjksNTQuNzk1YzgwLTI0LDE1Ny42LTIuNCwxODAuOCw3Ny42YzI0LDgwLTEwLjQsMjA2LjQtOTAuNCwyMjkuNiIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0Q4OTYyMTsiIHBvaW50cz0iMjY3LjM2OSw0MzkuNTk1IDIzMy43NjksNDU1LjU5NSAxOTYuOTY5LDQ2MC4zOTUgMTc4LjU2OSwzMzAuNzk1IDE5Mi4xNjksMzE0Ljc5NSANCgkyMTIuOTY5LDMyMS4xOTUgIi8+DQo8cG9seWxpbmUgc3R5bGU9ImZpbGw6I0JDN0EwRjsiIHBvaW50cz0iMTkyLjE2OSwzMTQuNzk1IDIxMi45NjksMzIxLjE5NSAyNjcuMzY5LDQzOS41OTUgMjMzLjc2OSw0NTUuNTk1ICIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Q4OTYyMTsiIGQ9Ik05My43NjksMzM2LjM5NWMzNS4yLDI0LjgsNzUuMiwzNy42LDExMi44LDI2LjRjMzYuOC0xMS4yLDY0LTQzLjIsODAtODMuMkw5My43NjksMzM2LjM5NXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNCQzdBMEY7IiBkPSJNMjA2LjU2OSwzNjIuNzk1YzM2LjgtMTEuMiw2NC00My4yLDgwLTgzLjIiLz4NCjxyZWN0IHg9IjE3Ni4xNjUiIHk9IjMyMS4wOTkiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjk1OTQgMC4yODE5IC0wLjI4MTkgLTAuOTU5NCA0NzYuNDcxNSA1ODQuODQ2NCkiIHN0eWxlPSJmaWxsOiM4RTEzMTM7IiB3aWR0aD0iMzkuOTk4IiBoZWlnaHQ9IjExLjIiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMzg0OTE7IiBkPSJNMjA4Ljk2OSwxMzMuMTk1Yy0yNCw4MCwxMC40LDIwNi40LDkwLjQsMjI5LjZjODAsMjQsMTc2LjgtNjQsMjAwLjgtMTQ0YzI0LTgwLTI5LjYtMTQwLTExMC40LTE2My4yDQoJQzMwOS43NjksMzEuNTk1LDIzMi45NjksNTIuMzk1LDIwOC45NjksMTMzLjE5NXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwQ0E2QkY7IiBkPSJNMzg5Ljc2OSw1NC43OTVjLTgwLTI0LTE1Ny42LTIuNC0xODAuOCw3Ny42Yy0yNCw4MCwxMC40LDIwNi40LDkwLjQsMjI5LjYiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCQzdBMEY7IiBwb2ludHM9IjIzOC41NjksNDM5LjU5NSAyNzIuMTY5LDQ1NS41OTUgMzA4Ljk2OSw0NjAuMzk1IDMyNy4zNjksMzMwLjc5NSAzMTMuNzY5LDMxNC43OTUgDQoJMjkyLjk2OSwzMjEuMTk1ICIvPg0KPHBvbHlsaW5lIHN0eWxlPSJmaWxsOiNEODk2MjE7IiBwb2ludHM9IjMxMy43NjksMzE0Ljc5NSAyOTIuOTY5LDMyMS4xOTUgMjM4LjU2OSw0MzkuNTk1IDI3Mi4xNjksNDU1LjU5NSAiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNCQzdBMEY7IiBkPSJNNDEyLjE2OSwzMzYuMzk1Yy0zNS4yLDI0LjgtNzUuMiwzNy42LTExMi44LDI2LjRjLTM2LjgtMTEuMi02NC00My4yLTgwLTgzLjJMNDEyLjE2OSwzMzYuMzk1eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Q4OTYyMTsiIGQ9Ik0yOTkuMzY5LDM2Mi43OTVjLTM2LjgtMTEuMi02NC00My4yLTgwLTgzLjIiLz4NCjxyZWN0IHg9IjI4OS42NTYiIHk9IjMyMC44OTMiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTU5NCAwLjI4MTkgLTAuMjgxOSAwLjk1OTQgMTA0LjYwMTggLTc0LjA1MzEpIiBzdHlsZT0iZmlsbDojOEUxMzEzOyIgd2lkdGg9IjM5Ljk5OCIgaGVpZ2h0PSIxMS4yIi8+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiNFNkU4RTg7IiBjeD0iMjUyLjk2OSIgY3k9IjIwMi43OTUiIHI9IjU2LjgiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNDM0M5Qzk7IiBkPSJNMjkyLjk2OSwxNjIuNzk1YzIyLjQsMjIuNCwyMi40LDU4LjQsMCw4MGMtMjIuNCwyMi40LTU3LjYsMjIuNC04MCwwIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==";

/***/ }),

/***/ "./src/assets/icons/projects/telegram.svg":
/*!************************************************!*\
  !*** ./src/assets/icons/projects/telegram.svg ***!
  \************************************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjMTM5QkQwIiByPSI0NSIvPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUxLjQ3NCw2MC43NTRjLTEuNzMzLDEuNjg4LTMuNDUxLDMuMzQ4LTUuMTUzLDUuMDIxICAgYy0wLjU5NSwwLjU4Ni0xLjI2NCwwLjkxLTIuMTE4LDAuODY1Yy0wLjU4My0wLjAzMS0wLjkwOS0wLjI4Ny0xLjA4OC0wLjg0Yy0xLjMwNC00LjA0Ny0yLjYyNy04LjA4NC0zLjkyNC0xMi4xMzUgICBjLTAuMTI2LTAuMzkzLTAuMzEyLTAuNTg0LTAuNzEtMC43MDdjLTMuMDcyLTAuOTM4LTYuMTM4LTEuODk4LTkuMTk5LTIuODcxYy0wLjQ3MS0wLjE1LTAuOTQ2LTAuMzQ2LTEuMzUzLTAuNjIzICAgYy0wLjYyOS0wLjQyNi0wLjcyMS0xLjEyMS0wLjE1Ny0xLjYyMWMwLjUyMS0wLjQ2MSwxLjE0My0wLjg2MywxLjc4OS0xLjExOWMzLjc1NS0xLjQ4OCw3LjUzLTIuOTI4LDExLjI5OS00LjM4MSAgIGM5LjU2NS0zLjY5MywxOS4xMy03LjM4MywyOC42OTYtMTEuMDc2YzEuODE5LTAuNzAzLDMuMjE3LDAuMjg3LDMuMDI4LDIuMjU0Yy0wLjEyMSwxLjI1OC0wLjQ0NywyLjQ5Ni0wLjcxLDMuNzM4ICAgYy0yLjA3Nyw5LjgwNy00LjE1NiwxOS42MTUtNi4yNDQsMjkuNDJjLTAuNDk2LDIuMzI4LTIuMTMxLDIuOTM2LTQuMDQ3LDEuNTIzYy0zLjIwOS0yLjM2NS02LjQxNS00LjczOC05LjYyMi03LjEwNyAgIEM1MS44MDgsNjAuOTg0LDUxLjY0OSw2MC44NzcsNTEuNDc0LDYwLjc1NHogTTQ0LjI3MSw2My43MzJjMC4wMzYtMC4wMSwwLjA3Mi0wLjAyLDAuMTA4LTAuMDI5ICAgYzAuMDItMC4wOTIsMC4wNDktMC4xODIsMC4wNTctMC4yNzNjMC4yMDYtMi4yMjMsMC40MjQtNC40NDUsMC42MDMtNi42NzJjMC4wNC0wLjQ5NiwwLjIxLTAuODQ4LDAuNTgzLTEuMTgyICAgYzIuOTU4LTIuNjQ1LDUuODk4LTUuMzA3LDguODQ0LTcuOTYzYzMuMjYxLTIuOTQxLDYuNTIzLTUuODc5LDkuNzcyLTguODMyYzAuMjAxLTAuMTgyLDAuMjg1LTAuNDkyLDAuNDIzLTAuNzQ0ICAgYy0wLjMwNi0wLjAzMy0wLjYzNC0wLjE1Ni0wLjkxMi0wLjA4NGMtMC4zNzksMC4wOTgtMC43MzgsMC4zMTgtMS4wNzYsMC41MzFjLTcuMTk3LDQuNTMzLTE0LjM4OCw5LjA3NC0yMS41OSwxMy41OTggICBjLTAuNDA3LDAuMjU2LTAuNDgzLDAuNDczLTAuMzI4LDAuOTJjMC41MzEsMS41MjUsMS4wMTQsMy4wNjQsMS41MTUsNC42QzQyLjkzNyw1OS42NDYsNDMuNjA0LDYxLjY4OSw0NC4yNzEsNjMuNzMyeiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjwvc3ZnPg==";

/***/ }),

/***/ "./src/assets/data/projects.json":
/*!***************************************!*\
  !*** ./src/assets/data/projects.json ***!
  \***************************************/
/***/ (function(module) {

module.exports = JSON.parse('[{"title":"This Webpage","subtitle":"My portfolio website using React","summary":["Objective was to create a space to share my skills and projects, along with industrial experience. and develop my skill in front-end dev at the same time","Written in Typescript","Built with Webpack using a custom configuration","Main libraries used: react-router, framer-motion, react-bootstrap"],"description":"Having originally started development on this website in December 2021, I have been continually updating it as I\'ve learned more techniques in frontend developement.This webpage was built using React with Bootstrap to help in the layouts. React-router was used for routing and framer-motion for the animations. No template was used, as I wanted to fashion the website from the ground up, so I could impart my own style and also maximise the learning experience. The project was set up to be easy to maintain and update. Details and explanation regarding the configurations I used for the project can be viewed in its repository.","repository":"https://github.com/benmurphyy/portfolio-website"},{"title":"Thinking in 3 Dimensions","subtitle":"3D printing","summary":["Extensive experience in building and maintaining 3D printers","Parametric modelling in Fusion360 to develop parts for own projects","Marketed 3d printing services to supplement financial cost of hobby"],"description":"I got into 3d printing as a hobby as I found the ability to fabricate parts at home exciting, and useful for electronic projects. I also liked the idea that a hobbyist like myself could harness such seemingly cutting-edge technology, thanks to the open-source nature of the 3d printing community. \\nI first started in 2017, when I built a cheap 3d printer out of parts from China to minimise cost. Since then, I\'ve honed my ability to debug the myriad of errors that 3d printers can encounter and how to fix them to get great prints. Addtionally I\'ve also done some 3d modelling in Autodesk Fusion360 to make my own parts for projects. \\nNow I\'m using a printer that is considerably better than the one i first started with, upgraded with custom components to enhance print quality. I\'ve also marketed 3d printing services, which has almost entirely eliminated the financial cost of the hobby.","repository":""},{"title":"Smart Room","subtitle":"Making regular room appliances smart","summary":["Objective was to enhance the convenience features of appliances in my room","Remote controls of appliances wired up to GPIO pins of Raspberry Pi, which acted as a backend server for controlling all appliances in room","Built simple android app to communicate with Raspberry Pi server, so phone served as unified remote","Utilised Alexa Skills Kit (ASK) to add voice control by using alexa device to send the interpreted commands to the Raspberry Pi server"],"description":"This project was born from the desire to make the simple remote-controlled appliances in my room like the fan, lights and air-conditioning \'smart\' (an example would be turning on the lights at a specific time of day). \\nThe main problem I faced stemmed from the fact that these devices were not designed to be \'smart\', hence to interface the applicances with my Raspberry Pi (the control hub), I had to wire up their remote controls to the GPIO outputs of the Pi, and write python programs that triggered the right output (with correct timing of \'button presses\') depending on the action wanted. \\nWith the Raspberry Pi as a backend server, I later built a simple android app to control the devices through my phone (to use as my unified remote control for all appliances), and also incorporated voice control through the Alexa Skills Kit (ASK).","repository":""},{"title":"Fridge View Bot","subtitle":"A Telegram bot to reduce food waste","summary":["University module sustainability project","Utilised python-telegram-bot module to build the bot","Raspberry Pi backend server, with data logging and storage of user information in pickle files, along with image storage."],"description":"This was a project I undertook for a sustainability module I took in the National University of Singapore (NUS), GEH1074. It was designed to be a solution to the problem of food wastage by hostel residents who left food till expiry in hostel fridges, either by forgetting or not being able to finish their food. \\nA Telegram bot was chosen as Telegram is an application used by pretty much everyone in NUS, thus reducing the onboarding process. Fridge view bot provided students with a convenient platform to log the food they placed in the refrigerators, and put their items up for sharing in the bot when they were nearing expiry and they could not finish them. Fridge view bot also sent reminders to students as their items neared expiry. \\nOne problem faced in implemenation was how to allow other people to know where a shared item was in the fridge. A simple solution I came up with was to incorporate storing of images of the locations of the items in the fridge on the backend server, and sending the image to a user corresponding to the item being retrieved by that user.","repository":""},{"title":"Pong Connect","subtitle":"Multiplayer Pong over the Internet","summary":["Project undertaken purely out of interest","Based on the CS50 game development course pong game, with some enhancements, the main one being internet multiplayer","Client Hosted multiplayer set-up"],"description":"This was a fun mini-project I undertook as I was trying out Harvard\'s CS50 Game Development course. I was interested in the complexities of implementing a multiplayer game (which I discovered were immense as I researched for the project).\\nI settled on a simple setup whereby one player would be the server and the other the client. The game would essentially run on the server machine, and deliver and receive data from the client via UDP packets. The game was designed to be able to handle lost packets as long as not too many were lost. Upon playing the finished game, an acceptable framerate of around 40-60 fps with little choppiness being observed on the client\'s computer.\\nWhile the premise of the project, the game pong, is extremely simple, by simply trying to make a multiplayer version, it became a lot more complex and exposed me to some of challenges faced in multiplayer game development, like handling packet delays/losses, interpolation etc. It was also pretty fun to play the finished product with a friend! ","repository":"https://github.com/benmurphyy/pongconnect"}]');

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfSWNvbl90c3gtc3JjX2NvbXBvbmVudHNfTWFpbk5hdmJhcl90c3gtc3JjX2NvbXBvbmVudHNfUGFnZUhlYWRlcl9pbmRleF90c3gtc3JjLTkxNzM4OC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNlLFNBQVNJLElBQVQsT0FBb0c7RUFBQSxJQUFwRkMsT0FBb0YsUUFBcEZBLE9BQW9GO0VBQUEsSUFBM0VDLE9BQTJFLFFBQTNFQSxPQUEyRTtFQUFBLElBQWxFQyxNQUFrRSxRQUFsRUEsTUFBa0U7RUFBQSxJQUExREMsS0FBMEQsUUFBMURBLEtBQTBEO0VBQUEsSUFBbkRDLDBCQUFtRCxRQUFuREEsMEJBQW1EO0VBQUEsSUFBdkJDLE9BQXVCLFFBQXZCQSxPQUF1QjtFQUFBLElBQWRDLFNBQWMsUUFBZEEsU0FBYztFQUMvRyxJQUFNQyxZQUFZLEdBQUdULDZDQUFNLENBQUMsSUFBRCxDQUEzQjtFQUNBLElBQU1VLGlCQUFpQixHQUFHWiwyREFBWSxFQUF0QyxDQUYrRyxDQUcvRztFQUNBO0VBQ0E7RUFDQTs7RUFDQSxJQUFNYSxnQkFBZ0IsR0FBR0wsMEJBQTBCLEdBQzdDQSwwQkFENkMsR0FFN0NHLFlBQVksQ0FBQ0csT0FBYixHQUNJO0lBQ0VDLEdBQUcsRUFBRUosWUFBWSxDQUFDRyxPQUFiLENBQXFCRSxTQUQ1QjtJQUVFQyxJQUFJLEVBQUVOLFlBQVksQ0FBQ0csT0FBYixDQUFxQkk7RUFGN0IsQ0FESixHQUtJLElBUFYsQ0FQK0csQ0FlL0c7O0VBQ0FqQixnREFBUyxDQUFDLFlBQU07SUFDWixTQUFTa0IsNEJBQVQsR0FBd0M7TUFDcEMsSUFBSVIsWUFBWSxDQUFDRyxPQUFqQixFQUEwQjtRQUN0QkYsaUJBQWlCLENB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O01BRUl4SCxHQUFHLEVBQUVyQyw2Q0FBTSxDQUFDLElBQUQ7SUFGZjtFQUlILENBTEQ7RUFNQSxPQUFPQSw2Q0FBTSxDQUFDMEosb0JBQUQsQ0FBYjtBQUNIOzs7Ozs7Ozs7OztBQ2REO0FBQ0EsK0RBQWUsQ0FBQyx5Q0FBeUM7Ozs7Ozs7Ozs7O0FDRHpEO0FBQ0EsK0RBQWUsQ0FBQyxvRkFBb0Y7Ozs7Ozs7Ozs7O0FDRHBHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFnZS1yZXZhbXBlZC8uL3NyYy9jb21wb25lbnRzL0ljb24udHN4Iiwid2VicGFjazovL215LXdlYnBhZ2UtcmV2YW1wZWQvLi9zcmMvY29tcG9uZW50cy9NYWluTmF2YmFyLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJwYWdlLXJldmFtcGVkLy4vc3JjL2NvbXBvbmVudHMvUGFnZUhlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbXktd2VicGFnZS1yZXZhbXBlZC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL215LXdlYnBhZ2UtcmV2YW1wZWQvLi9zcmMvY29tcG9uZW50cy9TdWJOYXZiYXIvY29uc3RhbnRzLnRzIiwid2VicGFjazovL215LXdlYnBhZ2UtcmV2YW1wZWQvLi9zcmMvY29tcG9uZW50cy9TdWJOYXZiYXIvaW5kZXgudHN4Iiwid2VicGFjazovL215LXdlYnBhZ2UtcmV2YW1wZWQvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL215LXdlYnBhZ2UtcmV2YW1wZWQvLi9zcmMvcGFnZXMvZXhwZXJpZW5jZS9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFnZS1yZXZhbXBlZC8uL3NyYy9wYWdlcy9rbm93bGVkZ2UvY29uc3RhbnRzLnRzIiwid2VicGFjazovL215LXdlYnBhZ2UtcmV2YW1wZWQvLi9zcmMvcm91dGVzLnRzIiwid2VicGFjazovL215LXdlYnBhZ2UtcmV2YW1wZWQvLi9zcmMvdXRpbC9ob29rcy91c2VQYWdlU2VjdGlvblJlZk1hcENyZWF0b3IudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFnZS1yZXZhbXBlZC8uL3NyYy9jb21wb25lbnRzL1BhZ2VIZWFkZXIvc3R5bGVzLnNjc3M/ZjFiZCIsIndlYnBhY2s6Ly9teS13ZWJwYWdlLXJldmFtcGVkLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci9zdHlsZXMuc2Nzcz80NDgwIiwid2VicGFjazovL215LXdlYnBhZ2UtcmV2YW1wZWQvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZDUwYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEljb24gY29tcG9uZW50IHRoYXQgY29tZXMgd2l0aCB0aGUgYWJpbGl0eSB0byBtb3ZlIHRvIGl0cyBuZXcgcG9zaXRpb24gd2lodCBhbmltYXRpb24gd2hlbiBpdCBpcyBtb3ZlZCBpbiBpdHMgcGFyZW50IGNvbnRhaW5lci5cbiAqL1xuaW1wb3J0IHsgbW90aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBDb250YWlucyBhIGRpdiBhbmQgYSBpbWcgZGlzcGxheWluZyB0aGUgaWNvbi5cbiAqIFRoZSBkaXYgY29tcG9uZW50IHNlcnZlcyBhcyB0aGUgaG91c2luZyBmb3IgdGhlIGFjdHVhbCBpY29uLlxuICogVGhlIGRpdiBleGFjdCBwb3NpdGlvbiBpcyBkZXRlcm1pbmVkIGVudGlyZWx5IGJ5IHRoZSBwYXJlbnQgY29udGFpbmVyIHdoaWNoIGNvbnRhaW5zXG4gKiB0aGUgSWNvbiBjb21wb25lbnQuXG4gKiBXaGVuIHRoZSBwb3NpdGlvbiBvZiB0aGUgZGl2IGNoYW5nZXMsIHRoZSBpY29uIHdpbGwgbW92ZSAoYW5pbWF0ZWQpXG4gKiB0byB0aGUgbmV3IHBvc2l0aW9uIG9mIENvbnRhaW5lciBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIGljb25TdmcgZGF0YSBVUkkgb2YgdGhlIFNWRyBvZiB0aGUgaWNvbiB0byByZW5kZXJcbiAqIEBwYXJhbSBwcmV2aW91c1Bvc2l0aW9uRnJvbVBhcmVudCBvcHRpb25hbDogbWFudWFsbHkgY29udHJvbHMgdGhlIHByZXZpb3VzIHBvc2l0aW9uIG9mIHRoZSBJY29uLlxuICogVXNlZnVsIHdoZW4gdGhlIEljb24gaXMgbm90IHJlbmRlcmVkIGluIGEgc2ltaWxhciBhcnJhbmdtZW50IChjaGFuZ2luZyBvZiBwYXJlbnQgbGF5b3V0IGV0YyksXG4gKiB3aGljaCBwcmV2ZW50cyB0aGUgaW5idWlsdCBwcmV2aW91cyBwb3NpdGlvbiB0cmFja2luZyBmcm9tIHdvcmtpbmcuXG4gKiBAcGFyYW0gYWx0VGV4dCBvcHRpb25hbDogYWNjZXNzaWJpbGl0eSB0ZXh0XG4gKiBAcGFyYW0gaGVpZ2h0IG9wdGlvbmFsOiBoZWlnaHQgb2YgaWNvblxuICogQHBhcmFtIHdpZHRoIG9wdGlvbmFsOiB3aWR0aCBvZiBpY29uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb24oeyBpY29uU3ZnLCBhbHRUZXh0LCBoZWlnaHQsIHdpZHRoLCBwcmV2aW91c1Bvc2l0aW9uRnJvbVBhcmVudCwgaWNvblJlZiwgY2xhc3NOYW1lLCB9KSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGFuaW1hdGlvbkNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKCk7XG4gICAgLy8gaWYgcHJldmlvdXNQb3NpdGlvbkZyb21QYXJlbnQgaXMgZ2l2ZW4sIHRoZW4gc2V0IHByZXZpb3VzIHBvc2l0aW9uIHRvIGJlIHRoYXQsIGVsc2VcbiAgICAvLyBzZXQgaXQgdG8gYmUgdGhlIHRvcCBhbmQgbGVmdCB2YWx1ZXMgZnJvbSBjb250YWluZXJSZWYuY3VycmVudFxuICAgIC8vIGNvbnRhaW5lclJlZiB3b3VsZCBoYXZlIHRoZSBvbGQgSFRNTERpdkVsZW1lbnQgaW4gdGhlIHByZXZpb3VzIHJlbmRlciBhdCB0aGlzIHBvaW50LFxuICAgIC8vIHRodXMgd2UgY2FuIHVzZSBpdCB0byBnZXQgb3V0IHRoZSBwcmV2aW91cyBwb3NpdGlvbiBvZiB0aGUgSWNvbi5cbiAgICBjb25zdCBwcmV2aW91c1Bvc2l0aW9uID0gcHJldmlvdXNQb3NpdGlvbkZyb21QYXJlbnRcbiAgICAgICAgPyBwcmV2aW91c1Bvc2l0aW9uRnJvbVBhcmVudFxuICAgICAgICA6IGNvbnRhaW5lclJlZi5jdXJyZW50XG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICB0b3A6IGNvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldFRvcCxcbiAgICAgICAgICAgICAgICBsZWZ0OiBjb250YWluZXJSZWYuY3VycmVudC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBudWxsO1xuICAgIC8vIHNldCB1cCB0aGUgd2luZG93IHJlc2l6ZSBsaXN0ZW5lcnMgb24gSWNvbiBtb3VudCB0byBtb3ZlIGljb24gdG8gaXRzIGRpdiBob3VzaW5nIHBvc2l0aW9uIHdoZW4gd2luZG93IHJlc2l6ZWRcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBtb3ZlSWNvblN2Z1RvQ29ycmVjdFBvc2l0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ29udHJvbHMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBjb250YWluZXJSZWYuY3VycmVudC5vZmZzZXRUb3AsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldExlZnQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG1vdmVJY29uU3ZnVG9Db3JyZWN0UG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG1vdmVJY29uU3ZnVG9Db3JyZWN0UG9zaXRpb24pO1xuICAgIH0sIFtdKTtcbiAgICAvLyBUaGlzIG5lZWRzIHRvIHJ1biBiZWZvcmUgYW55IERPTSBwYWludHMgY2FuIGJlIHBlcmZvcm1lZCwgaGVuY2UgdXNlTGF5b3V0RWZmZWN0IGlzIHRoZSByaWdodCBjaG9pY2UgaGVyZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBjb250YWluZXJSZWYuY3VycmVudC5vZmZzZXRUb3AsXG4gICAgICAgICAgICBsZWZ0OiBjb250YWluZXJSZWYuY3VycmVudC5vZmZzZXRMZWZ0LFxuICAgICAgICB9O1xuICAgICAgICBpZiAocHJldmlvdXNQb3NpdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gZmlyc3QgdGltZSBiZWluZyByZW5kZXJlZCwgbm8gbmVlZCBmb3IgYW55IGFuaW1hdGlvblxuICAgICAgICAgICAgYW5pbWF0aW9uQ29udHJvbHMuc2V0KG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgaWNvbiBTVkcgd2FzIGluIGEgcHJldmlvdXMgcG9zaXRpb24sIG5lZWQgdG8gbW92ZSBpdCB3aXRoIGFuaW1hdGlvblxuICAgICAgICAvLyBzZXQgdGhlIFNWRyB0byBpdHMgcHJ2IHBvc2l0aW9uLCB0aGVuIGp1c3QgbW92ZSBpdCB0byB0aGUgbmV3IHBvc2l0aW9uIHdpdGggYW5pbWF0aW9uXG4gICAgICAgIGFuaW1hdGlvbkNvbnRyb2xzLnNldChwcmV2aW91c1Bvc2l0aW9uKTtcbiAgICAgICAgYW5pbWF0aW9uQ29udHJvbHMuc3RhcnQobmV3UG9zaXRpb24pO1xuICAgIH0pO1xuICAgIC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHBhc3MgYXMgcmVmIHRvIHRoZSBkaXYgY29udGFpbmVyXG4gICAgLy8gc28gdGhhdCBib3RoIGNvbnRhaW5lclJlZiBhbmQgaWNvblJlZiBjYW4gY29udGFpbiB0aGUgZGl2IGNvbnRhaW5lciBpbiB0aGVpciBjdXJyZW50IHByb3BlcnRpZXNcbiAgICBmdW5jdGlvbiBjb250YWluZXJSZWZDYWxsYmFjayhlbGVtZW50KSB7XG4gICAgICAgIGlmIChpY29uUmVmKSB7XG4gICAgICAgICAgICBpY29uUmVmLmN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuICg8ZGl2IHJlZj17Y29udGFpbmVyUmVmQ2FsbGJhY2t9IHN0eWxlPXt7XG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgfX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPG1vdGlvbi5pbWcgc3JjPXtpY29uU3ZnfSBhbHQ9e2FsdFRleHQgKyAnIEljb24nfSBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgfX0gYW5pbWF0ZT17YW5pbWF0aW9uQ29udHJvbHN9IHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgIHR5cGU6ICdzcHJpbmcnLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuNDQsXG4gICAgICAgIH19IGNsYXNzTmFtZT17Y2xhc3NOYW1lfS8+XG4gICAgPC9kaXY+KTtcbn1cbiIsImltcG9ydCB7IGZvcndhcmRSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcbmltcG9ydCBiam1JY29uIGZyb20gJ3NyYy9hc3NldHMvaWNvbnMvYmptLnN2Zyc7XG5pbXBvcnQgcm91dGVzIGZyb20gJ3NyYy9yb3V0ZXMnO1xuY29uc3QgTWFpbk5hdmJhciA9IGZvcndhcmRSZWYoKF8sIHJlZikgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50UGF0aCwgc2V0Q3VycmVudFBhdGhdID0gdXNlU3RhdGUoJy8nKTtcbiAgICAvLyBTZXR0aW5nIHRoZSBjdXJyZW50IHBhdGggb2YgdGhlIGJyb3dzZXIgbXVzdCBiZSBpbiB1c2VFZmZlY3QsIGFzIHRoaXMgaXMgYnJvd3NlciBzcGVjaWZpYyBiZWhhdmlvdXJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50UGF0aCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyB0aGUgaHJlZiBmb3IgYSBuYXYgbGluay5cbiAgICAgKiBUaGlzIGlzIHRvIGhhbmRsZSBoYXZpbmcgcmVzb3VyY2UgcGFyYW0gaW4gYmFzZSBwYXRoLlxuICAgICAqIGUuZzogSWYgZXhhbXBsZS5jb20vYmFzZSBpcyB0aGUgYmFzZSBwYXRoIG9mIHRoZSB3ZWJwYWdlIChsaWtlIGluIGdpdGh1YiBwYWdlcyksIHRoZW5cbiAgICAgKiB0aGUgaHJlZiBmb3IgYW5vdGhlciBwYWdlIHNob3VsZCBiZSBleGFtcGxlLmNvbS9iYXNlL290aGVyUGFnZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUhyZWYobGlua1BhdGgpIHtcbiAgICAgICAgLy8gbm8gcmVzb3VyY2UgcGFyYW0gaW4gYmFzZSBwYXRoXG4gICAgICAgIGlmIChjdXJyZW50UGF0aCA9PT0gJy8nKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlua1BhdGg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXhPZkxhc3RTbGFzaCA9IGN1cnJlbnRQYXRoLmxhc3RJbmRleE9mKCcvJyk7XG4gICAgICAgIHJldHVybiBjdXJyZW50UGF0aC5zbGljZSgwLCBpbmRleE9mTGFzdFNsYXNoKSArIGxpbmtQYXRoO1xuICAgIH1cbiAgICByZXR1cm4gKDxOYXZiYXIgcmVmPXtyZWZ9IGNvbGxhcHNlT25TZWxlY3QgY2xhc3NOYW1lPVwiXCIgYmc9XCJwcmltYXJ5XCIgdmFyaWFudD1cImRhcmtcIiBleHBhbmQ9XCJtZFwiPlxuICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInB4LTIgcm91bmRlZFwiPlxuICAgICAgICA8aW1nIHNyYz17YmptSWNvbn0gYWx0PVwiYmVuIG11cnBoeSBicmFuZCBpY29uXCIvPlxuICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwicmVzcG9uc2l2ZS1uYXZiYXItbmF2XCIvPlxuICAgICAgPE5hdmJhci5Db2xsYXBzZSBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XG4gICAgICAgIDxOYXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhyb3V0ZXMpLm1hcCgocGFnZSkgPT4gXG4gICAgICAgIC8vIG9ubHkgaG9tZSBwYWdlIGRvZXMgbm90IGdldCBhIGxpbmtcbiAgICAgICAgcGFnZSAhPT0gJ2hvbWUnID8gKDxOYXYuSXRlbSBrZXk9e3BhZ2V9IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGtleT17cGFnZX0gY2xhc3NOYW1lPVwicHgtMlwiIGhyZWY9e2dlbmVyYXRlSHJlZihyb3V0ZXNbcGFnZV0ucGF0aCl9PlxuICAgICAgICAgICAgICAgICAge3JvdXRlc1twYWdlXS50aXRsZX1cbiAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgICAgICAgICA8L05hdi5JdGVtPikgOiBudWxsKX1cbiAgICAgICAgPC9OYXY+XG4gICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICA8L05hdmJhcj4pO1xufSk7XG5NYWluTmF2YmFyLmRpc3BsYXlOYW1lID0gJ05hdmlnYXRvcic7XG5leHBvcnQgZGVmYXVsdCBNYWluTmF2YmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbCwgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5zY3NzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VIZWFkZXIoeyBiYWNrZ3JvdW5kSW1hZ2UsIGNoaWxkcmVuIH0pIHtcbiAgICByZXR1cm4gKDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGVyQ29udGFpbmVyfWB9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRJbWFnZX0pYCB9fT5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICA8Q29sPntjaGlsZHJlbn08L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPik7XG59XG4iLCJpbXBvcnQgeyBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuc2Nzcyc7XG4vL2N1c3RvbSB1bmRlcmxpbmUgZm9yIHRoZSBoZWFkZXJzXG5mdW5jdGlvbiBDdXN0b21MaW5lQnJlYWtlcigpIHtcbiAgICByZXR1cm4gPGhyIGNsYXNzTmFtZT17c3R5bGVzLmN1c3RvbUxpbmVCcmVha2VyfT48L2hyPjtcbn1cbi8qKlxuICogSGVhZGVyIGZvciBhIHNlY3Rpb24gb2YgYSBwYWdlLlxuICogQ29uc2lzdHMgb2YgdGl0bGUgYW5kIGxpbmUgYnJlYWtlci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbkhlYWRlcih7IHRpdGxlLCBzdWJ0aXRsZSwgaXNIaWRkZW5PblBob25lID0gZmFsc2UsIFxuLy8gYWRkIGV4dHJhIGNsYXNzZXMgdG8gdGhpcyBoZWFkZXIgaWYgbmVlZGVkXG5jbGFzc05hbWUsIH0pIHtcbiAgICByZXR1cm4gKDxDb250YWluZXIgY2xhc3NOYW1lPXtgJHtpc0hpZGRlbk9uUGhvbmUgPyBzdHlsZXMuaXNIaWRkZW5PblBob25lIDogJyd9IHB5LTIgJHtjbGFzc05hbWV9YH0+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTYgbWItMiB0ZXh0LWNlbnRlclwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgIHtzdWJ0aXRsZSAmJiA8aDUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57c3VidGl0bGV9PC9oNT59XG4gICAgICAgICAgPEN1c3RvbUxpbmVCcmVha2VyPjwvQ3VzdG9tTGluZUJyZWFrZXI+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+KTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vLyB1c2VkIHRvIGRldGVybWluZSB3aGVuIHRvIHVzZSBvYnNlcnZlciBvcHRpb25zIHNob3J0IG9yIGxvbmdcbmV4cG9ydCBjb25zdCBTVUJQQUdFX1dJTkRPV19SQVRJTyA9IDkgLyA1O1xuLy90d28gZGlmZmVyZW50IG9ic2VydmVyIG9wdGlvbnMgZm9yIHNob3J0IGVsZW1lbnRzIChzbWFsbGVyIHRoYW4gMnggb2Ygdmlld3BvcnQpLCBhbmQgbG9uZyBlbGVtZW50cyAoZG91YmxlIG9mIHZpZXdwb3J0KVxuZXhwb3J0IGNvbnN0IG9ic2VydmVyT3B0aW9uc0RlZmF1bHRTaG9ydCA9IHtcbiAgICByb290TWFyZ2luOiAnMHB4JyxcbiAgICB0aHJlc2hvbGQ6IDAuNSxcbn07XG5leHBvcnQgY29uc3Qgb2JzZXJ2ZXJPcHRpb25zRGVmYXVsdExvbmcgPSB7XG4gICAgcm9vdE1hcmdpbjogJzBweCcsXG4gICAgdGhyZXNob2xkOiAwLjEsXG59O1xuLy8gb2JzZXJ2ZXIgb3B0aW9ucyBmb3IgdGhlIG1haW4gbmF2IGJhciwgY29udHJvbHMgd2hlbiB0aGUgc3VibmF2YmFyIHdpbGwgYmUgaGlkZGVuIHVwb24gc2Nyb2xsaW5nIGF3YXkgZnJvbSB0aGUgbWFpbm5hdmJhclxuY29uc3QgbWFpbk5hdmJhck9ic2VydmVyT3B0aW9ucyA9IHtcbiAgICByb290TWFyZ2luOiAnMHB4JyxcbiAgICB0aHJlc2hvbGQ6IDAuMSxcbn07XG4vKipcbiAqIENvbnRyb2xzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB0aGUgU3ViTmF2YmFyLlxuICogV2hlbiBtYWluTmF2YmFyIGlzIG5vIGxvbmdlciB2aXNpYmxlLCB0aGUgc3ViTmF2YmFyIGFwcGVhcnMuXG4gKiBAcGFyYW0gbWFpbk5hdmJhclJlZlxuICogQHJldHVybnMgcmVhY3Qgc3RhdGUgdmFyaWFibGUgaW5kaWNhdGluZyBpZiB0aGUgc3ViTmF2U3RhdGUgc2hvdWxkIGJlIHZpc2libGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VWaXNpYmlsaXR5Q29udHJvbGxlcihtYWluTmF2YmFyUmVmKSB7XG4gICAgY29uc3QgW2lzU3ViTmF2YmFyVmlzaWJsZSwgc2V0SXNTdWJOYXZiYXJWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoW2VudHJ5XSkgPT4gc2V0SXNTdWJOYXZiYXJWaXNpYmxlKCFlbnRyeS5pc0ludGVyc2VjdGluZyksIG1haW5OYXZiYXJPYnNlcnZlck9wdGlvbnMpO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKG1haW5OYXZiYXJSZWYuY3VycmVudCk7XG4gICAgICAgIC8vdG8gYXZvaWQgcmVmIGNoYW5nZSB3YXJuaW5nXG4gICAgICAgIGNvbnN0IHJlZkN1ciA9IG1haW5OYXZiYXJSZWYuY3VycmVudDtcbiAgICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShyZWZDdXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbaXNTdWJOYXZiYXJWaXNpYmxlLCBzZXRJc1N1Yk5hdmJhclZpc2libGVdO1xufVxuIiwiLyoqXG4gKiBjdXN0b20gc3ViIG5hYiBiYXIgdG8gYmUgdXNlZCBpbiBwYWdlcyB3aGVyZWluIHRoaXMgc3VibmF2IGJhciBhcHBlYXJzIGFuZCBzdGF5cyBhdCB0b3Agb2YgcGFnZSBvbmx5IHdoZW4gdXNlciBzY3JvbGxzIHBhc3QgdGhlIG1haW4gbmF2YmFyXG4gKiBwcm9wczpcbiAqIDEpIG1hcCBjb250YWluaW5nIHBhZ2UgbmFtZXMgYXMga2V5cywgYW5kIHRoZWlyIHJlZnMgYXMgdGhlaXIgdmFsdWVcbiAqIDIpIGFuaW1hdGVkIHByb3AgLSB3aGV0aGVyIHdlIHdhbnQgdGhpcyBuYXZiYXIgYW5pbWF0ZWQgb3Igbm90XG4gKiAzKSBvYnNlcnZlciBvcHRpb25zIG9iamVjdCB0byBjb250cm9sIGludGVyc2VjdGlvbiBvYnNlcnZlciBzZXR0aW5nc1xuICogNCkgZm9yd2FyZFJlZiBpcyB1c2VkIHNvIHRoYXQgdGhlIHBhcmVudCBjb21wb25lbnQgdGhhdCBjb250YWlucyB0aGlzIHN1Ym5hdmJhciBjYW4gcmVmZXJlbmNlIGl0XG4gKlxuICovXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXYsIE5hdmJhciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBvYnNlcnZlck9wdGlvbnNEZWZhdWx0TG9uZywgb2JzZXJ2ZXJPcHRpb25zRGVmYXVsdFNob3J0LCBTVUJQQUdFX1dJTkRPV19SQVRJTywgdXNlVmlzaWJpbGl0eUNvbnRyb2xsZXIsIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvU3ViTmF2YmFyL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBxdWlja0xpbmtzIH0gZnJvbSAnc3JjL2NvbnN0YW50cyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJOYXZiYXIoeyBwYWdlU2VjdGlvbnMsIG9ic2VydmVyT3B0aW9uc1Nob3J0ID0gb2JzZXJ2ZXJPcHRpb25zRGVmYXVsdFNob3J0LCBvYnNlcnZlck9wdGlvbnNMb25nID0gb2JzZXJ2ZXJPcHRpb25zRGVmYXVsdExvbmcsIHN1Yk5hdmJhclJlZiwgbWFpbk5hdmJhclJlZiwgfSkge1xuICAgIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VWaXNpYmlsaXR5Q29udHJvbGxlcihtYWluTmF2YmFyUmVmKTtcbiAgICAvLyBjcmVhdGUgYSBtYXAgb2YgZWFjaCBwYWdlIHNlY3Rpb24gbmFtZSB0byB0aGUgcmVmIG9mIHRoZSBuYXYgbGluayBidXR0b24gdGhhdCBzY3JvbGxzIHRvIGl0XG4gICAgY29uc3QgbmF2TGlua1JlZnNNYXAgPSBuZXcgTWFwKCk7XG4gICAgT2JqZWN0LmtleXMocGFnZVNlY3Rpb25zKS5mb3JFYWNoKChwYWdlU2VjdGlvbk5hbWUpID0+IHtcbiAgICAgICAgbmF2TGlua1JlZnNNYXAuc2V0KHBhZ2VTZWN0aW9uTmFtZSwgdXNlUmVmKG51bGwpKTtcbiAgICB9KTtcbiAgICAvLyByZWYgZm9yIG5hdmxpbmtSZWZzXG4gICAgY29uc3QgbmF2TGlua1JlZnMgPSB1c2VSZWYobmF2TGlua1JlZnNNYXApO1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgaW50ZXJzZWN0aW9uIG9ic2VydmVycyB0byBoYW5kbGUgdGhlIGxpZ2h0ZW5pbmcgb2Ygc3VibmF2YmFyIGxpbmtzIHdoZW4gc2VjdGlvbnMgYXJlIHNjcm9sbGVkIG9uIHNjcmVlbi5cbiAgICAgKi9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb25PYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgLy8gc2V0IHVwIGFuIGludGVyc2VjdGlvbiBvYnNlcnZlciBmb3IgZWFjaCBwYWdlIHNlY3Rpb24gcmVmXG4gICAgICAgIGZvciAoY29uc3QgcGFnZVNlY3Rpb25OYW1lIG9mIE9iamVjdC5rZXlzKHBhZ2VTZWN0aW9ucykpIHtcbiAgICAgICAgICAgIC8vIHNldCB1cCB0aGUgaW50ZXJzZWN0aW9uIG9ic2VydmVyIHdoaWNoIHdhdGNoZXMgZm9yIHBhZ2Ugc2VjdGlvbnMgYmVpbmcgc2Nyb2xsZWQgb24gc2NyZWVuXG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoW2VudHJ5XSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIG1hbnVhbCB3cml0aW5nIG9mIHN0eWxlIHdoZW4gdGhlIHBhZ2Ugc2VjdGlvbiBpcyBpbnRlcnNlY3Rpbmcvbm90IGludGVyZXNlY3RpbmcuXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBtYWtlcyB0aGUgY29ycmVzcG9uZGluZyBwYWdlIHNlY3Rpb24gbGluayBiZWNvbWUgbGlnaHQgd2hlbiBpdHMgc2VjdGlvbiBpcyBvbiBzY3JlZW4uXG4gICAgICAgICAgICAgICAgaWYgKG5hdkxpbmtSZWZzLmN1cnJlbnQuZ2V0KHBhZ2VTZWN0aW9uTmFtZSkuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZMaW5rUmVmcy5jdXJyZW50LmdldChwYWdlU2VjdGlvbk5hbWUpLmN1cnJlbnQuc3R5bGUuY29sb3IgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdkxpbmtSZWZzLmN1cnJlbnQuZ2V0KHBhZ2VTZWN0aW9uTmFtZSkuY3VycmVudC5zdHlsZS5jb2xvciA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAyNTUsIDI1NSknO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcGFnZVNlY3Rpb25zW3BhZ2VTZWN0aW9uTmFtZV0ucmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgICAgICAuaGVpZ2h0IDxcbiAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgKiBTVUJQQUdFX1dJTkRPV19SQVRJT1xuICAgICAgICAgICAgICAgID8gb2JzZXJ2ZXJPcHRpb25zU2hvcnRcbiAgICAgICAgICAgICAgICA6IG9ic2VydmVyT3B0aW9uc0xvbmcpO1xuICAgICAgICAgICAgaW50ZXJzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShwYWdlU2VjdGlvbnNbcGFnZVNlY3Rpb25OYW1lXS5yZWYuY3VycmVudCk7XG4gICAgICAgICAgICBpbnRlcnNlY3Rpb25PYnNlcnZlcnMucHVzaChpbnRlcnNlY3Rpb25PYnNlcnZlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIC8vIHN0b3AgYWxsIHRoZSBpbnRlcnNlY3Rpb24gb2JzZXJ2ZXJzXG4gICAgICAgICAgICBpbnRlcnNlY3Rpb25PYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBhIHF1aWNrbGluayB3YXMgcHJlc3NlZCBvbiBob21lcGFnZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB3YXNRdWlja0xpbmtQcmVzc2VkKHF1aWNrTGluaykge1xuICAgICAgICByZXR1cm4gcXVpY2tMaW5rLnBhdGggPT09IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIHF1aWNrIGxpbmtzIGZyb20gaG9tZXBhZ2UsIGJ5IG1vbml0b3JpbmcgdGhlIHVybCwgaWYgbWF0Y2ggd2l0aCBhIHF1aWNrbGluayxcbiAgICAgKiBpZiBzbyBtYWtlcyB0aGUgbmF2YmFyIHZpc2libGUgc28gdGhhdCB0aGUgcGFnZSBjYW4gYmUgc2Nyb2xsZWQgZG93biBjb3JyZWN0bHkgdG8gdGhlXG4gICAgICogcXVpY2tsaW5rIHNlY3Rpb24gb24gbmV4dCByZW5kZXIuXG4gICAgICpcbiAgICAgKiBUaGlzIG9ubHkgcnVucyBvbiBmaXJzdCBtb3VudC5cbiAgICAgKi9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IHF1aWNrTGluayBvZiBxdWlja0xpbmtzKSB7XG4gICAgICAgICAgICBpZiAod2FzUXVpY2tMaW5rUHJlc3NlZChxdWlja0xpbmspKSB7XG4gICAgICAgICAgICAgICAgc2V0SXNWaXNpYmxlKHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHF1aWNrTGluayBvZiBxdWlja0xpbmtzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdhc1F1aWNrTGlua1ByZXNzZWQocXVpY2tMaW5rKSkge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0xpbmtTY3JvbGwocXVpY2tMaW5rKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIHRvIHRoZSBzZWN0aW9uIG9mIHRoZSBwYWdlIHdpdGggdGhlIGdpdmVuIHJlZi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzY3JvbGxUbyhzZWN0aW9uUmVmKSB7XG4gICAgICAgIGNvbnN0IHlPZmZzZXQgPSAtc3ViTmF2YmFyUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBjb25zdCB5ID0gc2VjdGlvblJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArXG4gICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgK1xuICAgICAgICAgICAgeU9mZnNldDtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiB5LCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNjcm9sbHMgdG8gdGhlIHBhZ2Ugc2VjdGlvbiB0aGF0IHRoZSBxdWlja2xpbmsgdGhhdCB3YXMgcHJlc3NlZCByZWZlcnMgdG8uXG4gICAgICovXG4gICAgZnVuY3Rpb24gcXVpY2tMaW5rU2Nyb2xsKHF1aWNrTGluaykge1xuICAgICAgICAvLyByZW1vdmVzIHRoZSBxdWVyeSBwYXJhbSBmcm9tIHF1aWNrbGluayB1cmxcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAnJywgcXVpY2tMaW5rLnBhdGguc2xpY2UoMCwgcXVpY2tMaW5rLnBhdGguaW5kZXhPZignPycpKSk7XG4gICAgICAgIHNjcm9sbFRvKHBhZ2VTZWN0aW9uc1txdWlja0xpbmsubmFtZV0ucmVmKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUnVucyBvbiBzZWxlY3Qgb2YgbmF2bGluaywgc2Nyb2xscyB0byB0aGUgY29ycmVzcG9uZGluZyBwYWdlIHNlY3Rpb24gQU5EIHJlbW92ZXMgdGhlIGZvY3VzIGZyb20gdGhlIG5hdmxpbmtcbiAgICAgKiBzbyBpdCBkb3NlbnQgc3RheSBmb2N1c2VkIGlmIHRoZSB1c2VyIHNjcm9sbHMgYXdheVxuICAgICAqIEBwYXJhbSBldmVudEtleVxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25TZWxlY3RGdW5jKGV2ZW50S2V5KSB7XG4gICAgICAgIGlmICghZXZlbnRLZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzY3JvbGxUbyhwYWdlU2VjdGlvbnNbZXZlbnRLZXldLnJlZik7XG4gICAgfVxuICAgIC8vIEJlY2F1c2Ugb2YgYSBidWcgd2l0aCBBbmltYXRlUHJlc2VuY2Ugd2hlcmUgaXQgaXMgbm90IGFibGUgdG8gcHJvcGVybHkgcmVtb3ZlIGN1c3RvbSBjb21wb25lbnQgKE5hdkJhciksXG4gICAgLy8gaW4gdGhhdCB0aGUgbmF2YmFyIHdvdWxkIGJlIG5vdCB2aXNpYmxlLCBidXQgc3RpbGwgaW4gdGhlIERPTSBhbmQgY2xpY2thYmxlLCB3aGVuIG5vdCBzdXBwb3NlZCB0byFcbiAgICAvLyBzbyB3cmFwIE5hdmJhciB3aXRoIGEgbW90aW9uLmRpdiB0byBnaXZlIGl0IGl0cyBhbmltYXRlZCBiZWhhdmlvdXMgd2hpbHN0IGF2b2lkaW5nIHRoZSBidWcuXG4gICAgLy8gdGhlIG1vdGlvbi5kaXYgbmVlZHMgdG8gaGF2ZSBhIGhlaWdodCBvZiAwIHNvIGl0IGRvZXNudCBnZXQgc2VlbiBhdCBhbGwgb24gRE9tIChubyBibGFuayBzcG90IGFwcGVhcnMgdGVtcG9yYXJpbHkpLlxuICAgIHJldHVybiAoPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgIHtpc1Zpc2libGUgJiYgKDxtb3Rpb24uZGl2IHN0eWxlPXt7IGhlaWdodDogMCB9fSBleGl0PXt7IG9wYWNpdHk6IDAgfX0gaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fSB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX0+XG4gICAgICAgICAgKFxuICAgICAgICAgIDxOYXZiYXIga2V5PXsnbmF2YmFyJ30gcmVmPXtzdWJOYXZiYXJSZWZ9IG9uU2VsZWN0PXtvblNlbGVjdEZ1bmN9IGZpeGVkPVwidG9wXCIgYmc9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlclwiIHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwYWdlU2VjdGlvbnMpLm1hcCgocGFnZVNlY3Rpb25OYW1lKSA9PiAoPE5hdi5JdGVtIGtleT17cGFnZVNlY3Rpb25OYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxOYXYuTGluayByZWY9e25hdkxpbmtSZWZzLmN1cnJlbnQuZ2V0KHBhZ2VTZWN0aW9uTmFtZSl9IGV2ZW50S2V5PXtwYWdlU2VjdGlvbk5hbWV9PlxuICAgICAgICAgICAgICAgICAgICB7cGFnZVNlY3Rpb25zW3BhZ2VTZWN0aW9uTmFtZV0udGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+KSl9XG4gICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgICApXG4gICAgICAgIDwvbW90aW9uLmRpdj4pfVxuICAgIDwvQW5pbWF0ZVByZXNlbmNlPik7XG59XG4iLCJpbXBvcnQgeyBFeHBlcmllbmNlUGFnZVNlY3Rpb25OYW1lLCBleHBlcmllbmNlUGFnZVNlY3Rpb25zLCB9IGZyb20gJ3NyYy9wYWdlcy9leHBlcmllbmNlL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBLbm93bGVkZ2VQYWdlU2VjdGlvbk5hbWUsIGtub3dsZWRnZVBhZ2VTZWN0aW9ucywgfSBmcm9tICdzcmMvcGFnZXMva25vd2xlZGdlL2NvbnN0YW50cyc7XG5pbXBvcnQgcm91dGVzLCB7IFBhZ2VOYW1lIH0gZnJvbSAnc3JjL3JvdXRlcyc7XG5leHBvcnQgY29uc3QgcXVpY2tMaW5rcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IEtub3dsZWRnZVBhZ2VTZWN0aW9uTmFtZS5VTklWRVJTSVRZX01PRFVMRVMsXG4gICAgICAgIHRpdGxlOiBrbm93bGVkZ2VQYWdlU2VjdGlvbnNbS25vd2xlZGdlUGFnZVNlY3Rpb25OYW1lLlVOSVZFUlNJVFlfTU9EVUxFU10udGl0bGUsXG4gICAgICAgIHBhdGg6IHJvdXRlc1tQYWdlTmFtZS5LTk9XTEVER0VdLnBhdGggK1xuICAgICAgICAgICAgJz8nICtcbiAgICAgICAgICAgIGtub3dsZWRnZVBhZ2VTZWN0aW9uc1tLbm93bGVkZ2VQYWdlU2VjdGlvbk5hbWUuVU5JVkVSU0lUWV9NT0RVTEVTXVxuICAgICAgICAgICAgICAgIC5xdWVyeVBhcmFtLFxuICAgICAgICBidXR0b25Db2xvcjogJyMzNzNGNTEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBLbm93bGVkZ2VQYWdlU2VjdGlvbk5hbWUuU0tJTExTLFxuICAgICAgICB0aXRsZToga25vd2xlZGdlUGFnZVNlY3Rpb25zW0tub3dsZWRnZVBhZ2VTZWN0aW9uTmFtZS5TS0lMTFNdLnRpdGxlLFxuICAgICAgICBwYXRoOiByb3V0ZXNbUGFnZU5hbWUuS05PV0xFREdFXS5wYXRoICtcbiAgICAgICAgICAgICc/JyArXG4gICAgICAgICAgICBrbm93bGVkZ2VQYWdlU2VjdGlvbnNbS25vd2xlZGdlUGFnZVNlY3Rpb25OYW1lLlNLSUxMU10ucXVlcnlQYXJhbSxcbiAgICAgICAgYnV0dG9uQ29sb3I6ICcjNThBNEIwJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogRXhwZXJpZW5jZVBhZ2VTZWN0aW9uTmFtZS5DQVJFRVJfRVhQRVJJRU5DRSxcbiAgICAgICAgdGl0bGU6IGV4cGVyaWVuY2VQYWdlU2VjdGlvbnNbRXhwZXJpZW5jZVBhZ2VTZWN0aW9uTmFtZS5DQVJFRVJfRVhQRVJJRU5DRV0udGl0bGUsXG4gICAgICAgIHBhdGg6IHJvdXRlc1tQYWdlTmFtZS5FWFBFUklFTkNFXS5wYXRoICtcbiAgICAgICAgICAgICc/JyArXG4gICAgICAgICAgICBleHBlcmllbmNlUGFnZVNlY3Rpb25zW0V4cGVyaWVuY2VQYWdlU2VjdGlvbk5hbWUuQ0FSRUVSX0VYUEVSSUVOQ0VdXG4gICAgICAgICAgICAgICAgLnF1ZXJ5UGFyYW0sXG4gICAgICAgIGJ1dHRvbkNvbG9yOiAnI0NFODE0NycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IEV4cGVyaWVuY2VQYWdlU2VjdGlvbk5hbWUuUFJPSkVDVFMsXG4gICAgICAgIHRpdGxlOiBleHBlcmllbmNlUGFnZVNlY3Rpb25zW0V4cGVyaWVuY2VQYWdlU2VjdGlvbk5hbWUuUFJPSkVDVFNdLnRpdGxlLFxuICAgICAgICBwYXRoOiByb3V0ZXNbUGFnZU5hbWUuRVhQRVJJRU5DRV0ucGF0aCArXG4gICAgICAgICAgICAnPycgK1xuICAgICAgICAgICAgZXhwZXJpZW5jZVBhZ2VTZWN0aW9uc1tFeHBlcmllbmNlUGFnZVNlY3Rpb25OYW1lLlBST0pFQ1RTXS5xdWVyeVBhcmFtLFxuICAgICAgICBidXR0b25Db2xvcjogJyM5MzE2MjEnLFxuICAgIH0sXG5dO1xuIiwiaW1wb3J0IHByb2plY3RXcml0ZXVwcyBmcm9tICdzcmMvYXNzZXRzL2RhdGEvcHJvamVjdHMuanNvbic7XG5pbXBvcnQgdGhyZWVEUHJpbnRJY29uIGZyb20gJ3NyYy9hc3NldHMvaWNvbnMvcHJvamVjdHMvM2RfcHJpbnRpbmcuc3ZnJztcbmltcG9ydCBhbGV4YUljb24gZnJvbSAnc3JjL2Fzc2V0cy9pY29ucy9wcm9qZWN0cy9hbGV4YS5zdmcnO1xuaW1wb3J0IGJqbUljb24gZnJvbSAnc3JjL2Fzc2V0cy9pY29ucy9wcm9qZWN0cy9iam0uc3ZnJztcbmltcG9ydCBwb25nSWNvbiBmcm9tICdzcmMvYXNzZXRzL2ljb25zL3Byb2plY3RzL3Bvbmcuc3ZnJztcbmltcG9ydCB0ZWxlZ3JhbUljb24gZnJvbSAnc3JjL2Fzc2V0cy9pY29ucy9wcm9qZWN0cy90ZWxlZ3JhbS5zdmcnO1xuZXhwb3J0IHZhciBFeHBlcmllbmNlUGFnZVNlY3Rpb25OYW1lO1xuKGZ1bmN0aW9uIChFeHBlcmllbmNlUGFnZVNlY3Rpb25OYW1lKSB7XG4gICAgRXhwZXJpZW5jZVBhZ2VTZWN0aW9uTmFtZVtcIkNBUkVFUl9FWFBFUklFTkNFXCJdID0gXCJjYXJlZXJFeHBlcmllbmNlXCI7XG4gICAgRXhwZXJpZW5jZVBhZ2VTZWN0aW9uTmFtZVtcIkFDSElFVkVNRU5UU1wiXSA9IFwiYWNoaWV2ZW1lbnRzXCI7XG4gICAgRXhwZXJpZW5jZVBhZ2VTZWN0aW9uTmFtZVtcIlBST0pFQ1RTXCJdID0gXCJwcm9qZWN0c1wiO1xufSkoRXhwZXJpZW5jZVBhZ2VTZWN0aW9uTmFtZSB8fCAoRXhwZXJpZW5jZVBhZ2VTZWN0aW9uTmFtZSA9IHt9KSk7XG4vKipcbiAqIEljb25zIGZvciBlYWNoIHByb2plY3QgaW4gdGhlIFNBTUUgb3JkZXIgdGhhdCB0aGV5IGFyZSB3cml0dGVuIGluIHRoZSBqc29uIGZpbGUuXG4gKi9cbmNvbnN0IGljb25zID0gW2JqbUljb24sIHRocmVlRFByaW50SWNvbiwgYWxleGFJY29uLCB0ZWxlZ3JhbUljb24sIHBvbmdJY29uXTtcbmV4cG9ydCBjb25zdCBleHBlcmllbmNlUGFnZVNlY3Rpb25zID0ge1xuICAgIFtFeHBlcmllbmNlUGFnZVNlY3Rpb25OYW1lLkNBUkVFUl9FWFBFUklFTkNFXToge1xuICAgICAgICBuYW1lOiBFeHBlcmllbmNlUGFnZVNlY3Rpb25OYW1lLkNBUkVFUl9FWFBFUklFTkNFLFxuICAgICAgICB0aXRsZTogJ0NhcmVlciBFeHBlcmllbmNlJyxcbiAgICAgICAgcXVlcnlQYXJhbTogRXhwZXJpZW5jZVBhZ2VTZWN0aW9uTmFtZS5DQVJFRVJfRVhQRVJJRU5DRSxcbiAgICB9LFxuICAgIFtFeHBlcmllbmNlUGFnZVNlY3Rpb25OYW1lLkFDSElFVkVNRU5UU106IHtcbiAgICAgICAgbmFtZTogRXhwZXJpZW5jZVBhZ2VTZWN0aW9uTmFtZS5BQ0hJRVZFTUVOVFMsXG4gICAgICAgIHRpdGxlOiAnQWNoaWV2ZW1lbnRzJyxcbiAgICAgICAgcXVlcnlQYXJhbTogRXhwZXJpZW5jZVBhZ2VTZWN0aW9uTmFtZS5BQ0hJRVZFTUVOVFMsXG4gICAgfSxcbiAgICBbRXhwZXJpZW5jZVBhZ2VTZWN0aW9uTmFtZS5QUk9KRUNUU106IHtcbiAgICAgICAgbmFtZTogRXhwZXJpZW5jZVBhZ2VTZWN0aW9uTmFtZS5QUk9KRUNUUyxcbiAgICAgICAgdGl0bGU6ICdQcm9qZWN0cycsXG4gICAgICAgIHF1ZXJ5UGFyYW06IEV4cGVyaWVuY2VQYWdlU2VjdGlvbk5hbWUuUFJPSkVDVFMsXG4gICAgfSxcbn07XG4vKipcbiAqIFRoZSBhcnJheSBvZiBQcm9qZWN0cywgd2hpY2ggY29udGFpbnMgaW5mb3JtYXRpb24gZnJvbSB0aGUganNvbiBmaWxlLFxuICogY29tYmluZWQgd2l0aCB0aGUgaWNvbiBzdmcgZm9yIGVhY2ggcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gcHJvamVjdFdyaXRldXBzLm1hcCgocHJvamVjdEluZm8sIGluZGV4KSA9PiAoe1xuICAgIC4uLnByb2plY3RJbmZvLFxuICAgIGljb246IGljb25zW2luZGV4XSxcbn0pKTtcbiIsImV4cG9ydCB2YXIgS25vd2xlZGdlUGFnZVNlY3Rpb25OYW1lO1xuKGZ1bmN0aW9uIChLbm93bGVkZ2VQYWdlU2VjdGlvbk5hbWUpIHtcbiAgICBLbm93bGVkZ2VQYWdlU2VjdGlvbk5hbWVbXCJTS0lMTFNcIl0gPSBcInNraWxsc1wiO1xuICAgIEtub3dsZWRnZVBhZ2VTZWN0aW9uTmFtZVtcIlVOSVZFUlNJVFlfTU9EVUxFU1wiXSA9IFwibW9kdWxlc1wiO1xufSkoS25vd2xlZGdlUGFnZVNlY3Rpb25OYW1lIHx8IChLbm93bGVkZ2VQYWdlU2VjdGlvbk5hbWUgPSB7fSkpO1xuZXhwb3J0IGNvbnN0IGtub3dsZWRnZVBhZ2VTZWN0aW9ucyA9IHtcbiAgICBbS25vd2xlZGdlUGFnZVNlY3Rpb25OYW1lLlNLSUxMU106IHtcbiAgICAgICAgbmFtZTogS25vd2xlZGdlUGFnZVNlY3Rpb25OYW1lLlNLSUxMUyxcbiAgICAgICAgdGl0bGU6ICdTa2lsbHMnLFxuICAgICAgICBxdWVyeVBhcmFtOiBLbm93bGVkZ2VQYWdlU2VjdGlvbk5hbWUuU0tJTExTLFxuICAgIH0sXG4gICAgW0tub3dsZWRnZVBhZ2VTZWN0aW9uTmFtZS5VTklWRVJTSVRZX01PRFVMRVNdOiB7XG4gICAgICAgIG5hbWU6IEtub3dsZWRnZVBhZ2VTZWN0aW9uTmFtZS5VTklWRVJTSVRZX01PRFVMRVMsXG4gICAgICAgIHRpdGxlOiAnVW5pdmVyc2l0eSBNb2R1bGVzJyxcbiAgICAgICAgcXVlcnlQYXJhbTogS25vd2xlZGdlUGFnZVNlY3Rpb25OYW1lLlVOSVZFUlNJVFlfTU9EVUxFUyxcbiAgICB9LFxufTtcbiIsImV4cG9ydCB2YXIgUGFnZU5hbWU7XG4oZnVuY3Rpb24gKFBhZ2VOYW1lKSB7XG4gICAgUGFnZU5hbWVbXCJIT01FXCJdID0gXCJob21lXCI7XG4gICAgUGFnZU5hbWVbXCJLTk9XTEVER0VcIl0gPSBcImtub3dsZWRnZVwiO1xuICAgIFBhZ2VOYW1lW1wiRVhQRVJJRU5DRVwiXSA9IFwiZXhwZXJpZW5jZVwiO1xufSkoUGFnZU5hbWUgfHwgKFBhZ2VOYW1lID0ge30pKTtcbi8qKlxuICogQ29udGFpbnMgaW5mb3JtYXRpb24gb24gYWxsIHRoZSByb3V0ZXMgaW4gdGhlIGFwcC5cbiAqIEVhY2ggcm91dGVzIGtleSBtdXN0IG1hdGNoIHRoZSBuYW1lIG9mIHRoZSBwYWdlKGZvbGRlciBuYW1lKSBpdCByb3V0ZXMgdG8uXG4gKiBUaGUgdGl0bGUgb2YgYSByb3V0ZSBpcyB0aGUgdGl0bGUgb2YgdGhlIGxpbmsgaW4gdGhlIG5hdmJhciB0aGF0IGRpcmVjdHMgdG8gaXQuXG4gKi9cbmNvbnN0IHJvdXRlcyA9IHtcbiAgICBbUGFnZU5hbWUuSE9NRV06IHtcbiAgICAgICAgdGl0bGU6ICdIb21lJyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgIH0sXG4gICAgW1BhZ2VOYW1lLktOT1dMRURHRV06IHtcbiAgICAgICAgdGl0bGU6ICdLbm93bGVkZ2UnLFxuICAgICAgICBwYXRoOiAnL2tub3dsZWRnZScsXG4gICAgfSxcbiAgICBbUGFnZU5hbWUuRVhQRVJJRU5DRV06IHtcbiAgICAgICAgdGl0bGU6ICdFeHBlcmllbmNlJyxcbiAgICAgICAgcGF0aDogJy9leHBlcmllbmNlJyxcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogUmVhY3QgaG9vayB0aGF0IGNvbnZlcnRzIGFuIG9iamVjdCBjb250YWluaW5nIFBhZ2VTZWN0aW9ucyBpbnRvIFBhZ2VTZWN0aW9uV2l0aFJlZiwgYnkgYWRkaW5nIGEgcmVmXG4gKiBmb3IgZXZlcnkgc2luZ2xlIHBhZ2Ugc2VjdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUGFnZVNlY3Rpb25SZWZNYXBDcmVhdG9yKHNlY3Rpb25zKSB7XG4gICAgY29uc3QgcGFnZVNlY3Rpb25zV2l0aFJlZnMgPSB7fTtcbiAgICBPYmplY3QuZW50cmllcyhzZWN0aW9ucykuZm9yRWFjaCgoW2tleSwgcGFnZVNlY3Rpb25dKSA9PiB7XG4gICAgICAgIHBhZ2VTZWN0aW9uc1dpdGhSZWZzW2tleV0gPSB7XG4gICAgICAgICAgICAuLi5wYWdlU2VjdGlvbixcbiAgICAgICAgICAgIHJlZjogdXNlUmVmKG51bGwpLFxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiB1c2VSZWYocGFnZVNlY3Rpb25zV2l0aFJlZnMpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJoZWFkZXJDb250YWluZXJcIjpcInBSTVN1aGg2S00xMGxfY1RvYVZKXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiY3VzdG9tTGluZUJyZWFrZXJcIjpcIkcxc0VRYjZtOW9HZWVVZkVBdEs3XCIsXCJpc0hpZGRlbk9uUGhvbmVcIjpcImhWUnpBTjNyOXRkMXkxN2xzU0tyXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJJY29uIiwiaWNvblN2ZyIsImFsdFRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsInByZXZpb3VzUG9zaXRpb25Gcm9tUGFyZW50IiwiaWNvblJlZiIsImNsYXNzTmFtZSIsImNvbnRhaW5lclJlZiIsImFuaW1hdGlvbkNvbnRyb2xzIiwicHJldmlvdXNQb3NpdGlvbiIsImN1cnJlbnQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm1vdmVJY29uU3ZnVG9Db3JyZWN0UG9zaXRpb24iLCJzZXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5ld1Bvc2l0aW9uIiwic3RhcnQiLCJjb250YWluZXJSZWZDYWxsYmFjayIsImVsZW1lbnQiLCJwb3NpdGlvbiIsInR5cGUiLCJkdXJhdGlvbiIsImZvcndhcmRSZWYiLCJ1c2VTdGF0ZSIsIk5hdiIsIk5hdmJhciIsImJqbUljb24iLCJyb3V0ZXMiLCJNYWluTmF2YmFyIiwiXyIsInJlZiIsImN1cnJlbnRQYXRoIiwic2V0Q3VycmVudFBhdGgiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZ2VuZXJhdGVIcmVmIiwibGlua1BhdGgiLCJpbmRleE9mTGFzdFNsYXNoIiwibGFzdEluZGV4T2YiLCJzbGljZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJwYWdlIiwicGF0aCIsInRpdGxlIiwiZGlzcGxheU5hbWUiLCJSZWFjdCIsIkNvbCIsIkNvbnRhaW5lciIsIlJvdyIsInN0eWxlcyIsIlBhZ2VIZWFkZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjaGlsZHJlbiIsImhlYWRlckNvbnRhaW5lciIsIkN1c3RvbUxpbmVCcmVha2VyIiwiY3VzdG9tTGluZUJyZWFrZXIiLCJTZWN0aW9uSGVhZGVyIiwic3VidGl0bGUiLCJpc0hpZGRlbk9uUGhvbmUiLCJTVUJQQUdFX1dJTkRPV19SQVRJTyIsIm9ic2VydmVyT3B0aW9uc0RlZmF1bHRTaG9ydCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYnNlcnZlck9wdGlvbnNEZWZhdWx0TG9uZyIsIm1haW5OYXZiYXJPYnNlcnZlck9wdGlvbnMiLCJ1c2VWaXNpYmlsaXR5Q29udHJvbGxlciIsIm1haW5OYXZiYXJSZWYiLCJpc1N1Yk5hdmJhclZpc2libGUiLCJzZXRJc1N1Yk5hdmJhclZpc2libGUiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIm9ic2VydmUiLCJyZWZDdXIiLCJ1bm9ic2VydmUiLCJBbmltYXRlUHJlc2VuY2UiLCJxdWlja0xpbmtzIiwiU3ViTmF2YmFyIiwicGFnZVNlY3Rpb25zIiwib2JzZXJ2ZXJPcHRpb25zU2hvcnQiLCJvYnNlcnZlck9wdGlvbnNMb25nIiwic3ViTmF2YmFyUmVmIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwibmF2TGlua1JlZnNNYXAiLCJNYXAiLCJmb3JFYWNoIiwicGFnZVNlY3Rpb25OYW1lIiwibmF2TGlua1JlZnMiLCJpbnRlcnNlY3Rpb25PYnNlcnZlcnMiLCJpbnRlcnNlY3Rpb25PYnNlcnZlciIsImdldCIsInN0eWxlIiwiY29sb3IiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJpbm5lckhlaWdodCIsInB1c2giLCJkaXNjb25uZWN0Iiwid2FzUXVpY2tMaW5rUHJlc3NlZCIsInF1aWNrTGluayIsInNlYXJjaCIsInF1aWNrTGlua1Njcm9sbCIsInNjcm9sbFRvIiwic2VjdGlvblJlZiIsInlPZmZzZXQiLCJvZmZzZXRIZWlnaHQiLCJ5IiwicGFnZVlPZmZzZXQiLCJiZWhhdmlvciIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJpbmRleE9mIiwibmFtZSIsIm9uU2VsZWN0RnVuYyIsImV2ZW50S2V5Iiwib3BhY2l0eSIsIm92ZXJmbG93IiwiRXhwZXJpZW5jZVBhZ2VTZWN0aW9uTmFtZSIsImV4cGVyaWVuY2VQYWdlU2VjdGlvbnMiLCJLbm93bGVkZ2VQYWdlU2VjdGlvbk5hbWUiLCJrbm93bGVkZ2VQYWdlU2VjdGlvbnMiLCJQYWdlTmFtZSIsIlVOSVZFUlNJVFlfTU9EVUxFUyIsIktOT1dMRURHRSIsInF1ZXJ5UGFyYW0iLCJidXR0b25Db2xvciIsIlNLSUxMUyIsIkNBUkVFUl9FWFBFUklFTkNFIiwiRVhQRVJJRU5DRSIsIlBST0pFQ1RTIiwicHJvamVjdFdyaXRldXBzIiwidGhyZWVEUHJpbnRJY29uIiwiYWxleGFJY29uIiwicG9uZ0ljb24iLCJ0ZWxlZ3JhbUljb24iLCJpY29ucyIsIkFDSElFVkVNRU5UUyIsInByb2plY3RzIiwicHJvamVjdEluZm8iLCJpbmRleCIsImljb24iLCJIT01FIiwidXNlUGFnZVNlY3Rpb25SZWZNYXBDcmVhdG9yIiwic2VjdGlvbnMiLCJwYWdlU2VjdGlvbnNXaXRoUmVmcyIsImVudHJpZXMiLCJrZXkiLCJwYWdlU2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=