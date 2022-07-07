"use strict";
(self["webpackChunkmy_webpage_revamped"] = self["webpackChunkmy_webpage_revamped"] || []).push([["home"],{

/***/ "./src/pages/home/components/AboutMe/index.tsx":
/*!*****************************************************!*\
  !*** ./src/pages/home/components/AboutMe/index.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Image.js");
/* harmony import */ var src_assets_images_ben_photo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/images/ben_photo.jpg */ "./src/assets/images/ben_photo.jpg");
/* harmony import */ var src_components_SectionHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/SectionHeader */ "./src/components/SectionHeader/index.tsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./src/pages/home/components/AboutMe/styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable react/no-unescaped-entities */




 //about me write up + picture



var AboutMe = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_, ref) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fluid: true,
    className: "",
    ref: ref,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(src_components_SectionHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "About Me",
        isHiddenOnPhone: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "pt-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "d-flex justify-content-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_3__["default"].portraitImage,
          src: src_assets_images_ben_photo_jpg__WEBPACK_IMPORTED_MODULE_1__,
          alt: "portrait photo of Ben Murphy"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "pt-4 justify-content-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "align-items-center",
        lg: 7,
        xl: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "fs-4 text-center",
          children: "I'm Ben, a year 2 student in the National University of Singapore (NUS), pursuing a Bachelor's degree (Hons) in Computer Science. I created this website to be a space for me to share my technical skills and industry experience, along with projects I've done. Thanks for taking a look, and feel free to connect with me!"
        })
      })
    })]
  });
});
AboutMe.displayName = 'AboutMe';
/* harmony default export */ __webpack_exports__["default"] = (AboutMe);

/***/ }),

/***/ "./src/pages/home/components/AnimatedGreeting/index.tsx":
/*!**************************************************************!*\
  !*** ./src/pages/home/components/AnimatedGreeting/index.tsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AnimatedGreeting; }
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/pages/home/components/AnimatedGreeting/styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function AnimatedGreeting() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_0__["default"].greetingText,
    initial: {
      y: -200
    },
    animate: {
      y: 0
    },
    children: "Welcome!"
  });
}

/***/ }),

/***/ "./src/pages/home/components/Contact/index.tsx":
/*!*****************************************************!*\
  !*** ./src/pages/home/components/Contact/index.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var src_assets_icons_contact_download_download_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/icons/contact/download/download.svg */ "./src/assets/icons/contact/download/download.svg");
/* harmony import */ var src_components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/Icon */ "./src/components/Icon.tsx");
/* harmony import */ var src_components_SectionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/SectionHeader */ "./src/components/SectionHeader/index.tsx");
/* harmony import */ var src_pages_home_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/home/constants */ "./src/pages/home/constants.ts");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ "./src/pages/home/components/Contact/styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






 //to return specific contact icon




function ContactIconSelector(_ref) {
  var className = _ref.className,
      iconSvg = _ref.iconSvg;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
    src: iconSvg,
    className: className
  });
}

var Contact = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_, ref) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: ref,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_components_SectionHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Contact"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "my-2 justify-content-center",
      children: src_pages_home_constants__WEBPACK_IMPORTED_MODULE_4__.contacts.map(function (contact) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: "d-flex g-0 justify-content-center align-items-center col-xl-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
            href: contact.link,
            target: "_blank",
            rel: "noreferrer",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ContactIconSelector, {
              className: _styles_scss__WEBPACK_IMPORTED_MODULE_5__["default"].contactIcon,
              iconSvg: contact.icon
            })
          })
        }, contact.name);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "my-4 justify-content-center",
      children: src_pages_home_constants__WEBPACK_IMPORTED_MODULE_4__.downloads.map(function (document) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: "d-flex flex-column align-items-center col-sm-4 col-xl-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
            className: _styles_scss__WEBPACK_IMPORTED_MODULE_5__["default"].documentDownloadLink,
            href: document.file,
            target: "_blank",
            rel: "noreferrer",
            download: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
              className: "text-center",
              children: document.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_components_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
              iconSvg: src_assets_icons_contact_download_download_svg__WEBPACK_IMPORTED_MODULE_1__,
              className: _styles_scss__WEBPACK_IMPORTED_MODULE_5__["default"].documentDownloadIcon,
              altText: "Download ".concat(document.name)
            })]
          })
        }, document.name);
      })
    })]
  });
});
Contact.displayName = 'Contact';
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/pages/home/components/QuickLinks/index.tsx":
/*!********************************************************!*\
  !*** ./src/pages/home/components/QuickLinks/index.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ QuickLinks; }
/* harmony export */ });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var src_components_SectionHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/components/SectionHeader */ "./src/components/SectionHeader/index.tsx");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./src/pages/home/components/QuickLinks/styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function QuickLinks() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fluid: true,
    className: "pb-4 px-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(src_components_SectionHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      title: "Quick Links"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "justify-content-center",
        children: src_constants__WEBPACK_IMPORTED_MODULE_1__.quickLinks.map(function (quickLink) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "d-flex justify-content-center align-items-stretch col-12 col-sm-3 col-xl-2 gy-1 gx-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_2__["default"].button, " w-100"),
              style: {
                backgroundColor: quickLink.buttonColor
              },
              href: quickLink.path,
              children: quickLink.title
            })
          }, quickLink.name);
        })
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/home/constants.ts":
/*!*************************************!*\
  !*** ./src/pages/home/constants.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageSectionNames": function() { return /* binding */ HomePageSectionNames; },
/* harmony export */   "contacts": function() { return /* binding */ contacts; },
/* harmony export */   "downloads": function() { return /* binding */ downloads; },
/* harmony export */   "homePageSections": function() { return /* binding */ homePageSections; }
/* harmony export */ });
/* harmony import */ var src_assets_downloads_Resume_Ben_Murphy_pdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/downloads/Resume_Ben_Murphy.pdf */ "./src/assets/downloads/Resume_Ben_Murphy.pdf");
/* harmony import */ var src_assets_downloads_Transcript_Ben_Murphy_pdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/downloads/Transcript_Ben_Murphy.pdf */ "./src/assets/downloads/Transcript_Ben_Murphy.pdf");
/* harmony import */ var src_assets_icons_contact_email_email_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/icons/contact/email/email.svg */ "./src/assets/icons/contact/email/email.svg");
/* harmony import */ var src_assets_icons_contact_github_github_original_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/icons/contact/github/github-original.svg */ "./src/assets/icons/contact/github/github-original.svg");
/* harmony import */ var src_assets_icons_contact_linkedin_linkedin_original_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/icons/contact/linkedin/linkedin-original.svg */ "./src/assets/icons/contact/linkedin/linkedin-original.svg");
/* harmony import */ var src_assets_icons_contact_telegram_telegram_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/icons/contact/telegram/telegram.svg */ "./src/assets/icons/contact/telegram/telegram.svg");
var _homePageSections;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Download Files





 //array of contact objects, corresponding to contact links

var contacts = [{
  name: 'LinkedIn',
  icon: src_assets_icons_contact_linkedin_linkedin_original_svg__WEBPACK_IMPORTED_MODULE_4__,
  link: 'https://www.linkedin.com/in/ben-murphyy'
}, {
  name: 'Github',
  icon: src_assets_icons_contact_github_github_original_svg__WEBPACK_IMPORTED_MODULE_3__,
  link: 'https://github.com/benmurphyy'
}, {
  name: 'Telegram',
  icon: src_assets_icons_contact_telegram_telegram_svg__WEBPACK_IMPORTED_MODULE_5__,
  link: 'https://t.me/murph99'
}, {
  name: 'Email',
  icon: src_assets_icons_contact_email_email_svg__WEBPACK_IMPORTED_MODULE_2__,
  link: 'mailto:benmurphyyy99@gmail.com'
}]; //array of download objects, corresponding to items we want to download

var downloads = [{
  name: 'Resume',
  file: src_assets_downloads_Resume_Ben_Murphy_pdf__WEBPACK_IMPORTED_MODULE_0__
}, {
  name: 'Transcript',
  file: src_assets_downloads_Transcript_Ben_Murphy_pdf__WEBPACK_IMPORTED_MODULE_1__
}];
var HomePageSectionNames;

(function (HomePageSectionNames) {
  HomePageSectionNames["ABOUT_ME"] = "aboutMe";
  HomePageSectionNames["CONTACT"] = "contact";
})(HomePageSectionNames || (HomePageSectionNames = {}));

var homePageSections = (_homePageSections = {}, _defineProperty(_homePageSections, HomePageSectionNames.ABOUT_ME, {
  name: HomePageSectionNames.ABOUT_ME,
  title: 'About Me'
}), _defineProperty(_homePageSections, HomePageSectionNames.CONTACT, {
  name: HomePageSectionNames.CONTACT,
  title: 'Contact'
}), _homePageSections);

/***/ }),

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var src_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_assets_images_background_homepage_background_min_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/images/background/homepage_background-min.jpg */ "./src/assets/images/background/homepage_background-min.jpg");
/* harmony import */ var src_components_MainNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/MainNavbar */ "./src/components/MainNavbar.tsx");
/* harmony import */ var src_components_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/PageHeader */ "./src/components/PageHeader/index.tsx");
/* harmony import */ var src_components_SubNavbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/SubNavbar */ "./src/components/SubNavbar/index.tsx");
/* harmony import */ var src_pages_home_components_AboutMe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pages/home/components/AboutMe */ "./src/pages/home/components/AboutMe/index.tsx");
/* harmony import */ var src_pages_home_components_AnimatedGreeting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/pages/home/components/AnimatedGreeting */ "./src/pages/home/components/AnimatedGreeting/index.tsx");
/* harmony import */ var src_pages_home_components_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/pages/home/components/Contact */ "./src/pages/home/components/Contact/index.tsx");
/* harmony import */ var src_pages_home_components_QuickLinks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/pages/home/components/QuickLinks */ "./src/pages/home/components/QuickLinks/index.tsx");
/* harmony import */ var src_pages_home_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/pages/home/constants */ "./src/pages/home/constants.ts");
/* harmony import */ var src_util_hooks_usePageSectionRefMapCreator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/util/hooks/usePageSectionRefMapCreator */ "./src/util/hooks/usePageSectionRefMapCreator.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













/**
 * React component defining homepage of application.
 */




function Root() {
  /** Ref containing information on page sections */
  var homePageSectionsRef = (0,src_util_hooks_usePageSectionRefMapCreator__WEBPACK_IMPORTED_MODULE_12__["default"])(src_pages_home_constants__WEBPACK_IMPORTED_MODULE_11__.homePageSections);
  var mainNavbarRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var subNavbarRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(src_components_MainNavbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ref: mainNavbarRef
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "h-100",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(src_components_SubNavbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        mainNavbarRef: mainNavbarRef,
        subNavbarRef: subNavbarRef,
        pageSections: homePageSectionsRef.current
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(src_components_PageHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
        backgroundImage: src_assets_images_background_homepage_background_min_jpg__WEBPACK_IMPORTED_MODULE_3__,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(src_pages_home_components_AnimatedGreeting__WEBPACK_IMPORTED_MODULE_8__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(src_pages_home_components_AboutMe__WEBPACK_IMPORTED_MODULE_7__["default"], {
        ref: homePageSectionsRef.current[src_pages_home_constants__WEBPACK_IMPORTED_MODULE_11__.HomePageSectionNames.ABOUT_ME].ref
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(src_pages_home_components_QuickLinks__WEBPACK_IMPORTED_MODULE_10__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(src_pages_home_components_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], {
        ref: homePageSectionsRef.current[src_pages_home_constants__WEBPACK_IMPORTED_MODULE_11__.HomePageSectionNames.CONTACT].ref
      })]
    })]
  });
}

react_dom_client__WEBPACK_IMPORTED_MODULE_0__.hydrateRoot(document.getElementById('root'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Root, {}));

/***/ }),

/***/ "./src/pages/home/components/AboutMe/styles.scss":
/*!*******************************************************!*\
  !*** ./src/pages/home/components/AboutMe/styles.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"portraitImage":"R7CqzLuoCFwR6oRO8CN4"});

/***/ }),

/***/ "./src/pages/home/components/AnimatedGreeting/styles.scss":
/*!****************************************************************!*\
  !*** ./src/pages/home/components/AnimatedGreeting/styles.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"greetingText":"w44pbPYp20YWPincSZYt"});

/***/ }),

/***/ "./src/pages/home/components/Contact/styles.scss":
/*!*******************************************************!*\
  !*** ./src/pages/home/components/Contact/styles.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"contactIcon":"R1K8k8bAfkMiVHLncb9O","documentDownloadIcon":"A4PAqWRWQX_EZgDmjdd5","documentDownloadLink":"N_VRJIPBVxEiU_AF7YUX"});

/***/ }),

/***/ "./src/pages/home/components/QuickLinks/styles.scss":
/*!**********************************************************!*\
  !*** ./src/pages/home/components/QuickLinks/styles.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"button":"Rr9ZcGIOJCmyn16mK4u4"});

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Button.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Button.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restart_ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/ui/Button */ "./node_modules/@restart/ui/esm/Button.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





const defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false
};
const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  as,
  bsPrefix,
  variant,
  size,
  active,
  className,
  ...props
}, ref) => {
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'btn');
  const [buttonProps, {
    tagName
  }] = (0,_restart_ui_Button__WEBPACK_IMPORTED_MODULE_4__.useButtonProps)({
    tagName: as,
    ...props
  });
  const Component = tagName;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, { ...buttonProps,
    ...props,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && props.disabled && 'disabled')
  });
});
Button.displayName = 'Button';
Button.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Image.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Image.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "propTypes": function() { return /* binding */ propTypes; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





const propTypes = {
  /**
   * @default 'img'
   */
  bsPrefix: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Sets image as fluid image.
   */
  fluid: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Sets image shape as rounded.
   */
  rounded: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Sets image shape as circle.
   */
  roundedCircle: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
const defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};
const Image = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  fluid,
  rounded,
  roundedCircle,
  thumbnail,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'img');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
    // eslint-disable-line jsx-a11y/alt-text
    ref: ref,
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, fluid && `${bsPrefix}-fluid`, rounded && `rounded`, roundedCircle && `rounded-circle`, thumbnail && `${bsPrefix}-thumbnail`)
  });
});
Image.displayName = 'Image';
Image.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/assets/icons/contact/download/download.svg":
/*!********************************************************!*\
  !*** ./src/assets/icons/contact/download/download.svg ***!
  \********************************************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMzMCAzMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMzMCAzMzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJYTUxJRF8yM18iPg0KCTxwYXRoIGlkPSJYTUxJRF8yNF8iIGQ9Ik0xNTQuMzg5LDI1NS42MDJjMC4zNTEsMC4zNTEsMC43MTksMC42ODMsMS4xMDMsMC45OThjMC4xNjksMC4xMzgsMC4zNDcsMC4yNTgsMC41MiwwLjM4OA0KCQljMC4yMTgsMC4xNjQsMC40MzIsMC4zMzMsMC42NTksMC40ODRjMC4yMTIsMC4xNDIsMC40MzIsMC4yNjUsMC42NDksMC4zOTVjMC4yMDIsMC4xMjEsMC40LDAuMjQ4LDAuNjA4LDAuMzU5DQoJCWMwLjIyMywwLjEyLDAuNDUzLDAuMjIxLDAuNjgxLDAuMzI4YzAuMjE1LDAuMTAyLDAuNDI3LDAuMjEsMC42NDgsMC4zMDFjMC4yMjMsMC4wOTIsMC40NSwwLjE2NywwLjY3NiwwLjI0Nw0KCQljMC4yMzYsMC4wODUsMC40NjgsMC4xNzUsMC43MDksMC4yNDhjMC4yMjYsMC4wNjgsMC40NTYsMC4xMTksMC42ODQsMC4xNzZjMC4yNDYsMC4wNjIsMC40ODksMC4xMzEsMC43MzksMC4xODENCgkJYzAuMjYzLDAuMDUyLDAuNTI5LDAuMDgzLDAuNzk0LDAuMTIxYzAuMjE5LDAuMDMxLDAuNDM1LDAuMDczLDAuNjU4LDAuMDk1YzAuNDkyLDAuMDQ4LDAuOTg2LDAuMDc1LDEuNDgsMC4wNzUNCgkJYzAuNDk0LDAsMC45ODgtMC4wMjYsMS40NzktMC4wNzVjMC4yMjYtMC4wMjIsMC40NDQtMC4wNjQsMC42NjctMC4wOTZjMC4yNjItMC4wMzcsMC41MjQtMC4wNjgsMC43ODQtMC4xMg0KCQljMC4yNTUtMC4wNSwwLjUwNC0wLjEyMSwwLjc1NC0wLjE4NGMwLjIyMy0wLjA1NywwLjQ0OC0wLjEwNSwwLjY2OS0wLjE3MmMwLjI0Ni0wLjA3NSwwLjQ4My0wLjE2NywwLjcyNC0wLjI1Mw0KCQljMC4yMjEtMC4wOCwwLjQ0NC0wLjE1MiwwLjY2Mi0wLjI0MmMwLjIyNS0wLjA5MywwLjQ0LTAuMjAyLDAuNjU5LTAuMzA2YzAuMjI1LTAuMTA2LDAuNDUyLTAuMjA2LDAuNjcyLTAuMzI0DQoJCWMwLjIxLTAuMTEyLDAuNDA4LTAuMjM5LDAuNjExLTAuMzYxYzAuMjE3LTAuMTMsMC40MzctMC4yNTIsMC42NDgtMC4zOTRjMC4yMjItMC4xNDgsMC40MzEtMC4zMTQsMC42NDQtMC40NzMNCgkJYzAuMTc5LTAuMTM0LDAuMzYyLTAuMjU4LDAuNTM2LTAuNGMwLjM2NS0wLjMsMC43MTQtMC42MTcsMS4wNDktMC45NDljMC4wMTYtMC4wMTYsMC4wMzQtMC4wMjgsMC4wNDktMC4wNDRsNzAuMDAyLTY5Ljk5OA0KCQljNS44NTgtNS44NTgsNS44NTgtMTUuMzU1LDAtMjEuMjEzYy01Ljg1Ny01Ljg1Ny0xNS4zNTUtNS44NTgtMjEuMjEzLTAuMDAxbC00NC4zOTYsNDQuMzkzVjI1YzAtOC4yODQtNi43MTYtMTUtMTUtMTUNCgkJYy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1djE4My43ODVsLTQ0LjM5Mi00NC4zOTFjLTUuODU3LTUuODU4LTE1LjM1NS01Ljg1OC0yMS4yMTMsMGMtNS44NTgsNS44NTgtNS44NTgsMTUuMzU1LDAsMjEuMjEzDQoJCUwxNTQuMzg5LDI1NS42MDJ6Ii8+DQoJPHBhdGggaWQ9IlhNTElEXzI1XyIgZD0iTTMxNSwxNjBjLTguMjg0LDAtMTUsNi43MTYtMTUsMTV2MTE1SDMwVjE3NWMwLTguMjg0LTYuNzE2LTE1LTE1LTE1Yy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1djEzMA0KCQljMCw4LjI4NCw2LjcxNiwxNSwxNSwxNWgzMDBjOC4yODQsMCwxNS02LjcxNiwxNS0xNVYxNzVDMzMwLDE2Ni43MTYsMzIzLjI4NCwxNjAsMzE1LDE2MHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K";

/***/ }),

/***/ "./src/assets/icons/contact/email/email.svg":
/*!**************************************************!*\
  !*** ./src/assets/icons/contact/email/email.svg ***!
  \**************************************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM2NC40NDEgMzY0LjQ0MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzY0LjQ0MSAzNjQuNDQxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojQzNDNkM4OyIgZD0iTTM1Ni45NDEsODguNjM3YzAtMTMuNzUtMTEuMjUtMjUtMjUtMjVIMzIuNWMtMTMuNzUsMC0yNSwxMS4yNS0yNSwyNXYxODcuMTY4DQoJCWMwLDEzLjc1LDExLjI1LDI1LDI1LDI1aDI5OS40NDFjMTMuNzUsMCwyNS0xMS4yNSwyNS0yNVY4OC42Mzd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0U4RThFODsiIGQ9Ik0xODIuMjIxLDE1Ni45MzNMNy41LDI2OC43MDR2Ny4xYzAsMTMuNzUsMTEuMjUsMjUsMjUsMjVoMjk5LjQ0MWMxMy43NSwwLDI1LTExLjI1LDI1LTI1di03LjENCgkJTDE4Mi4yMjEsMTU2LjkzM3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRThFOEU4OyIgZD0iTTE4Mi4yMjEsMjA3LjUwOWwxNzQuNzItMTExLjc3M3YtNy4xYzAtMTMuNzUtMTEuMjUtMjUtMjUtMjVIMzIuNWMtMTMuNzUsMC0yNSwxMS4yNS0yNSwyNXY3LjENCgkJTDE4Mi4yMjEsMjA3LjUwOXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDA1Q0I5OyIgZD0iTTM1NS41OTksODAuNTk1TDE4Mi4yMjEsMTkxLjUwOUw4Ljg0Myw4MC41OTVDNy45NzcsODMuMTIzLDcuNSw4NS44MjYsNy41LDg4LjYzN3Y3LjENCgkJbDE3NC43MjEsMTExLjc3MmwxNzQuNzItMTExLjc3M3YtNy4xQzM1Ni45NDEsODUuODI2LDM1Ni40NjUsODMuMTIzLDM1NS41OTksODAuNTk1eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwNzFDMkM7IiBkPSJNMzMxLjk0MSw1Ni4xMzdIMzIuNWMtMTcuOTIsMC0zMi41LDE0LjU4LTMyLjUsMzIuNXYxODcuMTY4YzAsMTcuOTIsMTQuNTgsMzIuNSwzMi41LDMyLjVoMjk5LjQ0MQ0KCQljMTcuOTIxLDAsMzIuNS0xNC41OCwzMi41LTMyLjVWODguNjM3QzM2NC40NDEsNzAuNzE2LDM0OS44NjIsNTYuMTM3LDMzMS45NDEsNTYuMTM3eiBNMTUsMTA5LjQzOGwxMTMuNzczLDcyLjc4M0wxNSwyNTUuMDA0DQoJCVYxMDkuNDM4eiBNMzQ5LjQ0MSwyNzUuODA1YzAsOS42NDktNy44NTEsMTcuNS0xNy41LDE3LjVIMzIuNWMtOS42NDksMC0xNy41LTcuODUxLTE3LjUtMTcuNXYtMi45OTRsMTI3LjY5LTgxLjY4N2wzNS40ODgsMjIuNzAzDQoJCWMxLjIzMiwwLjc4OCwyLjYzNywxLjE4Miw0LjA0MiwxLjE4MnMyLjgxLTAuMzk0LDQuMDQyLTEuMTgybDM1LjQ4Ny0yMi43MDJsMTI3LjY5MSw4MS42ODZ2Mi45OTRIMzQ5LjQ0MXogTTM0OS40NDEsMjU1LjAwMw0KCQlMMjM1LjY2OCwxODIuMjJsMTEzLjc3My03Mi43ODNWMjU1LjAwM3ogTTM0OS40NDEsOTEuNjMxbC0xNjcuMjIsMTA2Ljk3NEwxNSw5MS42MzF2LTIuOTk0YzAtOS42NDksNy44NTEtMTcuNSwxNy41LTE3LjVoMjk5LjQ0MQ0KCQljOS42NDksMCwxNy41LDcuODUxLDE3LjUsMTcuNVY5MS42MzF6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==";

/***/ }),

/***/ "./src/assets/icons/contact/github/github-original.svg":
/*!*************************************************************!*\
  !*** ./src/assets/icons/contact/github/github-original.svg ***!
  \*************************************************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48ZyBmaWxsPSIjMTgxNjE2Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY0IDUuMTAzYy0zMy4zNDcgMC02MC4zODggMjcuMDM1LTYwLjM4OCA2MC4zODggMCAyNi42ODIgMTcuMzAzIDQ5LjMxNyA0MS4yOTcgNTcuMzAzIDMuMDE3LjU2IDQuMTI1LTEuMzEgNC4xMjUtMi45MDUgMC0xLjQ0LS4wNTYtNi4xOTctLjA4Mi0xMS4yNDMtMTYuOCAzLjY1My0yMC4zNDUtNy4xMjUtMjAuMzQ1LTcuMTI1LTIuNzQ3LTYuOTgtNi43MDUtOC44MzYtNi43MDUtOC44MzYtNS40OC0zLjc0OC40MTMtMy42Ny40MTMtMy42NyA2LjA2My40MjUgOS4yNTcgNi4yMjMgOS4yNTcgNi4yMjMgNS4zODYgOS4yMyAxNC4xMjcgNi41NjIgMTcuNTczIDUuMDIuNTQyLTMuOTAzIDIuMTA3LTYuNTY4IDMuODM0LTguMDc2LTEzLjQxMy0xLjUyNS0yNy41MTQtNi43MDQtMjcuNTE0LTI5Ljg0MyAwLTYuNTkzIDIuMzYtMTEuOTggNi4yMjMtMTYuMjEtLjYyOC0xLjUyLTIuNjk1LTcuNjYyLjU4NC0xNS45OCAwIDAgNS4wNy0xLjYyMyAxNi42MSA2LjE5QzUzLjcgMzUgNTguODY3IDM0LjMyNyA2NCAzNC4zMDRjNS4xMy4wMjMgMTAuMy42OTQgMTUuMTI3IDIuMDMzIDExLjUyNi03LjgxMyAxNi41OS02LjE5IDE2LjU5LTYuMTkgMy4yODcgOC4zMTcgMS4yMiAxNC40Ni41OTMgMTUuOTggMy44NzIgNC4yMyA2LjIxNSA5LjYxNyA2LjIxNSAxNi4yMSAwIDIzLjE5NC0xNC4xMjcgMjguMy0yNy41NzQgMjkuNzk2IDIuMTY3IDEuODc0IDQuMDk3IDUuNTUgNC4wOTcgMTEuMTgzIDAgOC4wOC0uMDcgMTQuNTgzLS4wNyAxNi41NzIgMCAxLjYwNyAxLjA4OCAzLjQ5IDQuMTQ4IDIuODk3IDIzLjk4LTcuOTk0IDQxLjI2My0zMC42MjIgNDEuMjYzLTU3LjI5NEMxMjQuMzg4IDMyLjE0IDk3LjM1IDUuMTA0IDY0IDUuMTA0eiIvPjxwYXRoIGQ9Ik0yNi40ODQgOTEuODA2Yy0uMTMzLjMtLjYwNS4zOS0xLjAzNS4xODUtLjQ0LS4xOTYtLjY4NS0uNjA1LS41NDMtLjkwNi4xMy0uMzEuNjAzLS4zOTUgMS4wNC0uMTg4LjQ0LjE5Ny42OS42MS41MzcuOTF6bTIuNDQ2IDIuNzI5Yy0uMjg3LjI2Ny0uODUuMTQzLTEuMjMyLS4yOC0uMzk2LS40Mi0uNDctLjk4My0uMTc3LTEuMjU0LjI5OC0uMjY2Ljg0NC0uMTQgMS4yNC4yOC4zOTQuNDI2LjQ3Mi45ODQuMTcgMS4yNTV6TTMxLjMxMiA5OC4wMTJjLS4zNy4yNTgtLjk3Ni4wMTctMS4zNS0uNTItLjM3LS41MzgtLjM3LTEuMTgzLjAxLTEuNDQuMzczLS4yNTguOTctLjAyNSAxLjM1LjUwNy4zNjguNTQ1LjM2OCAxLjE5LS4wMSAxLjQ1MnptMy4yNjEgMy4zNjFjLS4zMy4zNjUtMS4wMzYuMjY3LTEuNTUyLS4yMy0uNTI3LS40ODctLjY3NC0xLjE4LS4zNDMtMS41NDQuMzM2LS4zNjYgMS4wNDUtLjI2NCAxLjU2NC4yMy41MjcuNDg2LjY4NiAxLjE4LjMzMyAxLjU0M3ptNC41IDEuOTUxYy0uMTQ3LjQ3My0uODI1LjY4OC0xLjUxLjQ4Ni0uNjgzLS4yMDctMS4xMy0uNzYtLjk5LTEuMjM4LjE0LS40NzcuODIzLS43IDEuNTEyLS40ODUuNjgzLjIwNiAxLjEzLjc1Ni45ODggMS4yMzd6bTQuOTQzLjM2MWMuMDE3LjQ5OC0uNTYzLjkxLTEuMjguOTItLjcyMy4wMTctMS4zMDgtLjM4Ny0xLjMxNS0uODc3IDAtLjUwMy41NjgtLjkxIDEuMjktLjkyNC43MTctLjAxMyAxLjMwNi4zODcgMS4zMDYuODh6bTQuNTk4LS43ODJjLjA4Ni40ODUtLjQxMy45ODQtMS4xMjYgMS4xMTctLjcuMTMtMS4zNS0uMTcyLTEuNDQtLjY1My0uMDg2LS40OTguNDIyLS45OTcgMS4xMjItMS4xMjYuNzE0LS4xMjMgMS4zNTQuMTcgMS40NDQuNjYzem0wIDAiLz48L2c+PC9zdmc+";

/***/ }),

/***/ "./src/assets/icons/contact/linkedin/linkedin-original.svg":
/*!*****************************************************************!*\
  !*** ./src/assets/icons/contact/linkedin/linkedin-original.svg ***!
  \*****************************************************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48cGF0aCBmaWxsPSIjMDA3NmIyIiBkPSJNMTE2IDNIMTJhOC45MSA4LjkxIDAgMDAtOSA4Ljh2MTA0LjQyYTguOTEgOC45MSAwIDAwOSA4Ljc4aDEwNGE4LjkzIDguOTMgMCAwMDktOC44MVYxMS43N0E4LjkzIDguOTMgMCAwMDExNiAzeiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMS4wNiA0OC43M2gxOC4xMVYxMDdIMjEuMDZ6bTkuMDYtMjlhMTAuNSAxMC41IDAgMTEtMTAuNSAxMC40OSAxMC41IDEwLjUgMCAwMTEwLjUtMTAuNDlNNTAuNTMgNDguNzNoMTcuMzZ2OGguMjRjMi40Mi00LjU4IDguMzItOS40MSAxNy4xMy05LjQxQzEwMy42IDQ3LjI4IDEwNyA1OS4zNSAxMDcgNzV2MzJIODguODlWNzguNjVjMC02Ljc1LS4xMi0xNS40NC05LjQxLTE1LjQ0cy0xMC44NyA3LjM2LTEwLjg3IDE1VjEwN0g1MC41M3oiLz48L3N2Zz4=";

/***/ }),

/***/ "./src/assets/icons/contact/telegram/telegram.svg":
/*!********************************************************!*\
  !*** ./src/assets/icons/contact/telegram/telegram.svg ***!
  \********************************************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjMTM5QkQwIiByPSI0NSIvPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUxLjQ3NCw2MC43NTRjLTEuNzMzLDEuNjg4LTMuNDUxLDMuMzQ4LTUuMTUzLDUuMDIxICAgYy0wLjU5NSwwLjU4Ni0xLjI2NCwwLjkxLTIuMTE4LDAuODY1Yy0wLjU4My0wLjAzMS0wLjkwOS0wLjI4Ny0xLjA4OC0wLjg0Yy0xLjMwNC00LjA0Ny0yLjYyNy04LjA4NC0zLjkyNC0xMi4xMzUgICBjLTAuMTI2LTAuMzkzLTAuMzEyLTAuNTg0LTAuNzEtMC43MDdjLTMuMDcyLTAuOTM4LTYuMTM4LTEuODk4LTkuMTk5LTIuODcxYy0wLjQ3MS0wLjE1LTAuOTQ2LTAuMzQ2LTEuMzUzLTAuNjIzICAgYy0wLjYyOS0wLjQyNi0wLjcyMS0xLjEyMS0wLjE1Ny0xLjYyMWMwLjUyMS0wLjQ2MSwxLjE0My0wLjg2MywxLjc4OS0xLjExOWMzLjc1NS0xLjQ4OCw3LjUzLTIuOTI4LDExLjI5OS00LjM4MSAgIGM5LjU2NS0zLjY5MywxOS4xMy03LjM4MywyOC42OTYtMTEuMDc2YzEuODE5LTAuNzAzLDMuMjE3LDAuMjg3LDMuMDI4LDIuMjU0Yy0wLjEyMSwxLjI1OC0wLjQ0NywyLjQ5Ni0wLjcxLDMuNzM4ICAgYy0yLjA3Nyw5LjgwNy00LjE1NiwxOS42MTUtNi4yNDQsMjkuNDJjLTAuNDk2LDIuMzI4LTIuMTMxLDIuOTM2LTQuMDQ3LDEuNTIzYy0zLjIwOS0yLjM2NS02LjQxNS00LjczOC05LjYyMi03LjEwNyAgIEM1MS44MDgsNjAuOTg0LDUxLjY0OSw2MC44NzcsNTEuNDc0LDYwLjc1NHogTTQ0LjI3MSw2My43MzJjMC4wMzYtMC4wMSwwLjA3Mi0wLjAyLDAuMTA4LTAuMDI5ICAgYzAuMDItMC4wOTIsMC4wNDktMC4xODIsMC4wNTctMC4yNzNjMC4yMDYtMi4yMjMsMC40MjQtNC40NDUsMC42MDMtNi42NzJjMC4wNC0wLjQ5NiwwLjIxLTAuODQ4LDAuNTgzLTEuMTgyICAgYzIuOTU4LTIuNjQ1LDUuODk4LTUuMzA3LDguODQ0LTcuOTYzYzMuMjYxLTIuOTQxLDYuNTIzLTUuODc5LDkuNzcyLTguODMyYzAuMjAxLTAuMTgyLDAuMjg1LTAuNDkyLDAuNDIzLTAuNzQ0ICAgYy0wLjMwNi0wLjAzMy0wLjYzNC0wLjE1Ni0wLjkxMi0wLjA4NGMtMC4zNzksMC4wOTgtMC43MzgsMC4zMTgtMS4wNzYsMC41MzFjLTcuMTk3LDQuNTMzLTE0LjM4OCw5LjA3NC0yMS41OSwxMy41OTggICBjLTAuNDA3LDAuMjU2LTAuNDgzLDAuNDczLTAuMzI4LDAuOTJjMC41MzEsMS41MjUsMS4wMTQsMy4wNjQsMS41MTUsNC42QzQyLjkzNyw1OS42NDYsNDMuNjA0LDYxLjY4OSw0NC4yNzEsNjMuNzMyeiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjwvc3ZnPg==";

/***/ }),

/***/ "./src/assets/downloads/Resume_Ben_Murphy.pdf":
/*!****************************************************!*\
  !*** ./src/assets/downloads/Resume_Ben_Murphy.pdf ***!
  \****************************************************/
/***/ (function(module) {

module.exports = "static/Resume_Ben_Murphy.pdf";

/***/ }),

/***/ "./src/assets/downloads/Transcript_Ben_Murphy.pdf":
/*!********************************************************!*\
  !*** ./src/assets/downloads/Transcript_Ben_Murphy.pdf ***!
  \********************************************************/
/***/ (function(module) {

module.exports = "static/Transcript_Ben_Murphy.pdf";

/***/ }),

/***/ "./src/assets/images/background/homepage_background-min.jpg":
/*!******************************************************************!*\
  !*** ./src/assets/images/background/homepage_background-min.jpg ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "59c0f4b8a3cc006a6862.jpg";

/***/ }),

/***/ "./src/assets/images/ben_photo.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/ben_photo.jpg ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "21e5ff1b25513e3d80ad.jpg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-bootstrap_esm_Col_js-node_modules_react-bootstrap_esm_Container_js-1e0fe2","src_components_Icon_tsx-src_components_MainNavbar_tsx-src_components_PageHeader_index_tsx-src-917388"], function() { return __webpack_exec__("./src/pages/home/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2Q0FBZ0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsYUFBYSxrRUFBa0I7QUFDL0Isc0JBQXNCLHNEQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQVUsd0JBQXdCLFNBQVMsa0ZBQWtGLFNBQVM7QUFDckosR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0EsK0RBQWUsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhZ2UtcmV2YW1wZWQvLi9zcmMvcGFnZXMvaG9tZS9jb21wb25lbnRzL0Fib3V0TWUvaW5kZXgudHN4Iiwid2VicGFjazovL215LXdlYnBhZ2UtcmV2YW1wZWQvLi9zcmMvcGFnZXMvaG9tZS9jb21wb25lbnRzL0FuaW1hdGVkR3JlZXRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovL215LXdlYnBhZ2UtcmV2YW1wZWQvLi9zcmMvcGFnZXMvaG9tZS9jb21wb25lbnRzL0NvbnRhY3QvaW5kZXgudHN4Iiwid2VicGFjazovL215LXdlYnBhZ2UtcmV2YW1wZWQvLi9zcmMvcGFnZXMvaG9tZS9jb21wb25lbnRzL1F1aWNrTGlua3MvaW5kZXgudHN4Iiwid2VicGFjazovL215LXdlYnBhZ2UtcmV2YW1wZWQvLi9zcmMvcGFnZXMvaG9tZS9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFnZS1yZXZhbXBlZC8uL3NyYy9wYWdlcy9ob21lL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9teS13ZWJwYWdlLXJldmFtcGVkLy4vc3JjL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9BYm91dE1lL3N0eWxlcy5zY3NzPzAwOGEiLCJ3ZWJwYWNrOi8vbXktd2VicGFnZS1yZXZhbXBlZC8uL3NyYy9wYWdlcy9ob21lL2NvbXBvbmVudHMvQW5pbWF0ZWRHcmVldGluZy9zdHlsZXMuc2Nzcz9jZTg4Iiwid2VicGFjazovL215LXdlYnBhZ2UtcmV2YW1wZWQvLi9zcmMvcGFnZXMvaG9tZS9jb21wb25lbnRzL0NvbnRhY3Qvc3R5bGVzLnNjc3M/ZDI4NCIsIndlYnBhY2s6Ly9teS13ZWJwYWdlLXJldmFtcGVkLy4vc3JjL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9RdWlja0xpbmtzL3N0eWxlcy5zY3NzPzhlMTciLCJ3ZWJwYWNrOi8vbXktd2VicGFnZS1yZXZhbXBlZC8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWdlLXJldmFtcGVkLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vSW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzICovXG5pbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sLCBDb250YWluZXIsIEltYWdlLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHBvdHJhaXRJbWFnZSBmcm9tICdzcmMvYXNzZXRzL2ltYWdlcy9iZW5fcGhvdG8uanBnJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ3NyYy9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5zY3NzJztcbi8vYWJvdXQgbWUgd3JpdGUgdXAgKyBwaWN0dXJlXG5jb25zdCBBYm91dE1lID0gZm9yd2FyZFJlZigoXywgcmVmKSA9PiB7XG4gICAgcmV0dXJuICg8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cIlwiIHJlZj17cmVmfT5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyIHRpdGxlPVwiQWJvdXQgTWVcIiBpc0hpZGRlbk9uUGhvbmU9e3RydWV9Lz5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJwdC00XCI+XG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMucG9ydHJhaXRJbWFnZX0gc3JjPXtwb3RyYWl0SW1hZ2V9IGFsdD1cInBvcnRyYWl0IHBob3RvIG9mIEJlbiBNdXJwaHlcIj48L0ltYWdlPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJwdC00IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIiBsZz17N30geGw9ezZ9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZzLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIEknbSBCZW4sIGEgeWVhciAyIHN0dWRlbnQgaW4gdGhlIE5hdGlvbmFsIFVuaXZlcnNpdHkgb2YgU2luZ2Fwb3JlXG4gICAgICAgICAgICAoTlVTKSwgcHVyc3VpbmcgYSBCYWNoZWxvcidzIGRlZ3JlZSAoSG9ucykgaW4gQ29tcHV0ZXIgU2NpZW5jZS4gSVxuICAgICAgICAgICAgY3JlYXRlZCB0aGlzIHdlYnNpdGUgdG8gYmUgYSBzcGFjZSBmb3IgbWUgdG8gc2hhcmUgbXkgdGVjaG5pY2FsXG4gICAgICAgICAgICBza2lsbHMgYW5kIGluZHVzdHJ5IGV4cGVyaWVuY2UsIGFsb25nIHdpdGggcHJvamVjdHMgSSd2ZSBkb25lLlxuICAgICAgICAgICAgVGhhbmtzIGZvciB0YWtpbmcgYSBsb29rLCBhbmQgZmVlbCBmcmVlIHRvIGNvbm5lY3Qgd2l0aCBtZSFcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+KTtcbn0pO1xuQWJvdXRNZS5kaXNwbGF5TmFtZSA9ICdBYm91dE1lJztcbmV4cG9ydCBkZWZhdWx0IEFib3V0TWU7XG4iLCJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuc2Nzcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRlZEdyZWV0aW5nKCkge1xuICAgIHJldHVybiAoPG1vdGlvbi5oMSBjbGFzc05hbWU9e3N0eWxlcy5ncmVldGluZ1RleHR9IGluaXRpYWw9e3sgeTogLTIwMCB9fSBhbmltYXRlPXt7IHk6IDAgfX0+XG4gICAgICBXZWxjb21lIVxuICAgIDwvbW90aW9uLmgxPik7XG59XG4iLCJpbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sLCBDb250YWluZXIsIFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgZG93bmxvYWRJY29uIGZyb20gJ3NyYy9hc3NldHMvaWNvbnMvY29udGFjdC9kb3dubG9hZC9kb3dubG9hZC5zdmcnO1xuaW1wb3J0IEljb24gZnJvbSAnc3JjL2NvbXBvbmVudHMvSWNvbic7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdzcmMvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyJztcbmltcG9ydCB7IGNvbnRhY3RzLCBkb3dubG9hZHMgfSBmcm9tICdzcmMvcGFnZXMvaG9tZS9jb25zdGFudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5zY3NzJztcbi8vdG8gcmV0dXJuIHNwZWNpZmljIGNvbnRhY3QgaWNvblxuZnVuY3Rpb24gQ29udGFjdEljb25TZWxlY3Rvcih7IGNsYXNzTmFtZSwgaWNvblN2ZywgfSkge1xuICAgIHJldHVybiA8aW1nIHNyYz17aWNvblN2Z30gY2xhc3NOYW1lPXtjbGFzc05hbWV9Lz47XG59XG5jb25zdCBDb250YWN0ID0gZm9yd2FyZFJlZigoXywgcmVmKSA9PiB7XG4gICAgcmV0dXJuICg8Q29udGFpbmVyIHJlZj17cmVmfT5cbiAgICAgIDxTZWN0aW9uSGVhZGVyIHRpdGxlPVwiQ29udGFjdFwiLz5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXktMiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIHtjb250YWN0cy5tYXAoKGNvbnRhY3QpID0+ICg8Q29sIGNsYXNzTmFtZT1cImQtZmxleCBnLTAganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgY29sLXhsLTJcIiBrZXk9e2NvbnRhY3QubmFtZX0+XG4gICAgICAgICAgICA8YSBocmVmPXtjb250YWN0Lmxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgPENvbnRhY3RJY29uU2VsZWN0b3IgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdEljb259IGljb25Tdmc9e2NvbnRhY3QuaWNvbn0vPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvQ29sPikpfVxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93IGNsYXNzTmFtZT1cIm15LTQganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICB7ZG93bmxvYWRzLm1hcCgoZG9jdW1lbnQpID0+ICg8Q29sIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgY29sLXNtLTQgY29sLXhsLTNcIiBrZXk9e2RvY3VtZW50Lm5hbWV9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuZG9jdW1lbnREb3dubG9hZExpbmt9IGhyZWY9e2RvY3VtZW50LmZpbGV9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBkb3dubG9hZD5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e2RvY3VtZW50Lm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgPEljb24gaWNvblN2Zz17ZG93bmxvYWRJY29ufSBjbGFzc05hbWU9e3N0eWxlcy5kb2N1bWVudERvd25sb2FkSWNvbn0gYWx0VGV4dD17YERvd25sb2FkICR7ZG9jdW1lbnQubmFtZX1gfS8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9Db2w+KSl9XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj4pO1xufSk7XG5Db250YWN0LmRpc3BsYXlOYW1lID0gJ0NvbnRhY3QnO1xuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcbiIsImltcG9ydCB7IEJ1dHRvbiwgQ29sLCBDb250YWluZXIsIFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdzcmMvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyJztcbmltcG9ydCB7IHF1aWNrTGlua3MgfSBmcm9tICdzcmMvY29uc3RhbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuc2Nzcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWlja0xpbmtzKCkge1xuICAgIHJldHVybiAoPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJwYi00IHB4LTRcIj5cbiAgICAgIDxTZWN0aW9uSGVhZGVyIHRpdGxlPVwiUXVpY2sgTGlua3NcIi8+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICB7cXVpY2tMaW5rcy5tYXAoKHF1aWNrTGluaykgPT4gKDxDb2wgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtc3RyZXRjaCBjb2wtMTIgY29sLXNtLTMgY29sLXhsLTIgZ3ktMSBneC0yXCIga2V5PXtxdWlja0xpbmsubmFtZX0+XG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9ufSB3LTEwMGB9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogcXVpY2tMaW5rLmJ1dHRvbkNvbG9yIH19IGhyZWY9e3F1aWNrTGluay5wYXRofT5cbiAgICAgICAgICAgICAgICB7cXVpY2tMaW5rLnRpdGxlfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29sPikpfVxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPik7XG59XG4iLCIvL0Rvd25sb2FkIEZpbGVzXG5pbXBvcnQgcmVzdW1lRmlsZSBmcm9tICdzcmMvYXNzZXRzL2Rvd25sb2Fkcy9SZXN1bWVfQmVuX011cnBoeS5wZGYnO1xuaW1wb3J0IHRyYW5zY3JpcHRGaWxlIGZyb20gJ3NyYy9hc3NldHMvZG93bmxvYWRzL1RyYW5zY3JpcHRfQmVuX011cnBoeS5wZGYnO1xuaW1wb3J0IEVtYWlsSWNvbiBmcm9tICdzcmMvYXNzZXRzL2ljb25zL2NvbnRhY3QvZW1haWwvZW1haWwuc3ZnJztcbmltcG9ydCBHaXRodWJJY29uIGZyb20gJ3NyYy9hc3NldHMvaWNvbnMvY29udGFjdC9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Zyc7XG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gJ3NyYy9hc3NldHMvaWNvbnMvY29udGFjdC9saW5rZWRpbi9saW5rZWRpbi1vcmlnaW5hbC5zdmcnO1xuaW1wb3J0IFRlbGVncmFtSWNvbiBmcm9tICdzcmMvYXNzZXRzL2ljb25zL2NvbnRhY3QvdGVsZWdyYW0vdGVsZWdyYW0uc3ZnJztcbi8vYXJyYXkgb2YgY29udGFjdCBvYmplY3RzLCBjb3JyZXNwb25kaW5nIHRvIGNvbnRhY3QgbGlua3NcbmV4cG9ydCBjb25zdCBjb250YWN0cyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdMaW5rZWRJbicsXG4gICAgICAgIGljb246IExpbmtlZEluSWNvbixcbiAgICAgICAgbGluazogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9iZW4tbXVycGh5eScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHaXRodWInLFxuICAgICAgICBpY29uOiBHaXRodWJJY29uLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2Jlbm11cnBoeXknLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVGVsZWdyYW0nLFxuICAgICAgICBpY29uOiBUZWxlZ3JhbUljb24sXG4gICAgICAgIGxpbms6ICdodHRwczovL3QubWUvbXVycGg5OScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdFbWFpbCcsXG4gICAgICAgIGljb246IEVtYWlsSWNvbixcbiAgICAgICAgbGluazogJ21haWx0bzpiZW5tdXJwaHl5eTk5QGdtYWlsLmNvbScsXG4gICAgfSxcbl07XG4vL2FycmF5IG9mIGRvd25sb2FkIG9iamVjdHMsIGNvcnJlc3BvbmRpbmcgdG8gaXRlbXMgd2Ugd2FudCB0byBkb3dubG9hZFxuZXhwb3J0IGNvbnN0IGRvd25sb2FkcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSZXN1bWUnLFxuICAgICAgICBmaWxlOiByZXN1bWVGaWxlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVHJhbnNjcmlwdCcsXG4gICAgICAgIGZpbGU6IHRyYW5zY3JpcHRGaWxlLFxuICAgIH0sXG5dO1xuZXhwb3J0IHZhciBIb21lUGFnZVNlY3Rpb25OYW1lcztcbihmdW5jdGlvbiAoSG9tZVBhZ2VTZWN0aW9uTmFtZXMpIHtcbiAgICBIb21lUGFnZVNlY3Rpb25OYW1lc1tcIkFCT1VUX01FXCJdID0gXCJhYm91dE1lXCI7XG4gICAgSG9tZVBhZ2VTZWN0aW9uTmFtZXNbXCJDT05UQUNUXCJdID0gXCJjb250YWN0XCI7XG59KShIb21lUGFnZVNlY3Rpb25OYW1lcyB8fCAoSG9tZVBhZ2VTZWN0aW9uTmFtZXMgPSB7fSkpO1xuZXhwb3J0IGNvbnN0IGhvbWVQYWdlU2VjdGlvbnMgPSB7XG4gICAgW0hvbWVQYWdlU2VjdGlvbk5hbWVzLkFCT1VUX01FXToge1xuICAgICAgICBuYW1lOiBIb21lUGFnZVNlY3Rpb25OYW1lcy5BQk9VVF9NRSxcbiAgICAgICAgdGl0bGU6ICdBYm91dCBNZScsXG4gICAgfSxcbiAgICBbSG9tZVBhZ2VTZWN0aW9uTmFtZXMuQ09OVEFDVF06IHtcbiAgICAgICAgbmFtZTogSG9tZVBhZ2VTZWN0aW9uTmFtZXMuQ09OVEFDVCxcbiAgICAgICAgdGl0bGU6ICdDb250YWN0JyxcbiAgICB9LFxufTtcbiIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztpbXBvcnQgJ3NyYy9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaGVhZGVyQmFja2dyb3VuZEltYWdlIGZyb20gJ3NyYy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQvaG9tZXBhZ2VfYmFja2dyb3VuZC1taW4uanBnJztcbmltcG9ydCBNYWluTmF2YmFyIGZyb20gJ3NyYy9jb21wb25lbnRzL01haW5OYXZiYXInO1xuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvUGFnZUhlYWRlcic7XG5pbXBvcnQgU3ViTmF2YmFyIGZyb20gJ3NyYy9jb21wb25lbnRzL1N1Yk5hdmJhcic7XG5pbXBvcnQgQWJvdXRNZSBmcm9tICdzcmMvcGFnZXMvaG9tZS9jb21wb25lbnRzL0Fib3V0TWUnO1xuaW1wb3J0IEFuaW1hdGVkR3JlZXRpbmcgZnJvbSAnc3JjL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9BbmltYXRlZEdyZWV0aW5nJztcbmltcG9ydCBDb250YWN0IGZyb20gJ3NyYy9wYWdlcy9ob21lL2NvbXBvbmVudHMvQ29udGFjdCc7XG5pbXBvcnQgUXVpY2tMaW5rcyBmcm9tICdzcmMvcGFnZXMvaG9tZS9jb21wb25lbnRzL1F1aWNrTGlua3MnO1xuaW1wb3J0IHsgSG9tZVBhZ2VTZWN0aW9uTmFtZXMsIGhvbWVQYWdlU2VjdGlvbnMsIH0gZnJvbSAnc3JjL3BhZ2VzL2hvbWUvY29uc3RhbnRzJztcbmltcG9ydCB1c2VQYWdlU2VjdGlvblJlZk1hcENyZWF0b3IgZnJvbSAnc3JjL3V0aWwvaG9va3MvdXNlUGFnZVNlY3Rpb25SZWZNYXBDcmVhdG9yJztcbi8qKlxuICogUmVhY3QgY29tcG9uZW50IGRlZmluaW5nIGhvbWVwYWdlIG9mIGFwcGxpY2F0aW9uLlxuICovXG5mdW5jdGlvbiBSb290KCkge1xuICAgIC8qKiBSZWYgY29udGFpbmluZyBpbmZvcm1hdGlvbiBvbiBwYWdlIHNlY3Rpb25zICovXG4gICAgY29uc3QgaG9tZVBhZ2VTZWN0aW9uc1JlZiA9IHVzZVBhZ2VTZWN0aW9uUmVmTWFwQ3JlYXRvcihob21lUGFnZVNlY3Rpb25zKTtcbiAgICBjb25zdCBtYWluTmF2YmFyUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHN1Yk5hdmJhclJlZiA9IHVzZVJlZihudWxsKTtcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICA8TWFpbk5hdmJhciByZWY9e21haW5OYXZiYXJSZWZ9PjwvTWFpbk5hdmJhcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xMDBcIj5cbiAgICAgICAgPFN1Yk5hdmJhciBtYWluTmF2YmFyUmVmPXttYWluTmF2YmFyUmVmfSBzdWJOYXZiYXJSZWY9e3N1Yk5hdmJhclJlZn0gcGFnZVNlY3Rpb25zPXtob21lUGFnZVNlY3Rpb25zUmVmLmN1cnJlbnR9Lz5cbiAgICAgICAgPFBhZ2VIZWFkZXIgYmFja2dyb3VuZEltYWdlPXtoZWFkZXJCYWNrZ3JvdW5kSW1hZ2V9PlxuICAgICAgICAgIDxBbmltYXRlZEdyZWV0aW5nIC8+XG4gICAgICAgIDwvUGFnZUhlYWRlcj5cbiAgICAgICAgPEFib3V0TWUgcmVmPXtob21lUGFnZVNlY3Rpb25zUmVmLmN1cnJlbnRbSG9tZVBhZ2VTZWN0aW9uTmFtZXMuQUJPVVRfTUVdLnJlZn0vPlxuICAgICAgICA8UXVpY2tMaW5rcyAvPlxuICAgICAgICA8Q29udGFjdCByZWY9e2hvbWVQYWdlU2VjdGlvbnNSZWYuY3VycmVudFtIb21lUGFnZVNlY3Rpb25OYW1lcy5DT05UQUNUXS5yZWZ9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pik7XG59XG5SZWFjdERPTS5oeWRyYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLCA8Um9vdC8+KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInBvcnRyYWl0SW1hZ2VcIjpcIlI3Q3F6THVvQ0Z3UjZvUk84Q040XCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiZ3JlZXRpbmdUZXh0XCI6XCJ3NDRwYlBZcDIwWVdQaW5jU1pZdFwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNvbnRhY3RJY29uXCI6XCJSMUs4azhiQWZrTWlWSExuY2I5T1wiLFwiZG9jdW1lbnREb3dubG9hZEljb25cIjpcIkE0UEFxV1JXUVhfRVpnRG1qZGQ1XCIsXCJkb2N1bWVudERvd25sb2FkTGlua1wiOlwiTl9WUkpJUEJWeEVpVV9BRjdZVVhcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJidXR0b25cIjpcIlJyOVpjR0lPSkNteW4xNm1LNHU0XCJ9OyIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQnV0dG9uUHJvcHMgfSBmcm9tICdAcmVzdGFydC91aS9CdXR0b24nO1xuaW1wb3J0IHsgdXNlQm9vdHN0cmFwUHJlZml4IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIHZhcmlhbnQ6ICdwcmltYXJ5JyxcbiAgYWN0aXZlOiBmYWxzZSxcbiAgZGlzYWJsZWQ6IGZhbHNlXG59O1xuY29uc3QgQnV0dG9uID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHtcbiAgYXMsXG4gIGJzUHJlZml4LFxuICB2YXJpYW50LFxuICBzaXplLFxuICBhY3RpdmUsXG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn0sIHJlZikgPT4ge1xuICBjb25zdCBwcmVmaXggPSB1c2VCb290c3RyYXBQcmVmaXgoYnNQcmVmaXgsICdidG4nKTtcbiAgY29uc3QgW2J1dHRvblByb3BzLCB7XG4gICAgdGFnTmFtZVxuICB9XSA9IHVzZUJ1dHRvblByb3BzKHtcbiAgICB0YWdOYW1lOiBhcyxcbiAgICAuLi5wcm9wc1xuICB9KTtcbiAgY29uc3QgQ29tcG9uZW50ID0gdGFnTmFtZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4KENvbXBvbmVudCwgeyAuLi5idXR0b25Qcm9wcyxcbiAgICAuLi5wcm9wcyxcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBwcmVmaXgsIGFjdGl2ZSAmJiAnYWN0aXZlJywgdmFyaWFudCAmJiBgJHtwcmVmaXh9LSR7dmFyaWFudH1gLCBzaXplICYmIGAke3ByZWZpeH0tJHtzaXplfWAsIHByb3BzLmhyZWYgJiYgcHJvcHMuZGlzYWJsZWQgJiYgJ2Rpc2FibGVkJylcbiAgfSk7XG59KTtcbkJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdCdXR0b24nO1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VCb290c3RyYXBQcmVmaXggfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBjb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAZGVmYXVsdCAnaW1nJ1xuICAgKi9cbiAgYnNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFNldHMgaW1hZ2UgYXMgZmx1aWQgaW1hZ2UuXG4gICAqL1xuICBmbHVpZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFNldHMgaW1hZ2Ugc2hhcGUgYXMgcm91bmRlZC5cbiAgICovXG4gIHJvdW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBTZXRzIGltYWdlIHNoYXBlIGFzIGNpcmNsZS5cbiAgICovXG4gIHJvdW5kZWRDaXJjbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBTZXRzIGltYWdlIHNoYXBlIGFzIHRodW1ibmFpbC5cbiAgICovXG4gIHRodW1ibmFpbDogUHJvcFR5cGVzLmJvb2xcbn07XG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIGZsdWlkOiBmYWxzZSxcbiAgcm91bmRlZDogZmFsc2UsXG4gIHJvdW5kZWRDaXJjbGU6IGZhbHNlLFxuICB0aHVtYm5haWw6IGZhbHNlXG59O1xuY29uc3QgSW1hZ2UgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigoe1xuICBic1ByZWZpeCxcbiAgY2xhc3NOYW1lLFxuICBmbHVpZCxcbiAgcm91bmRlZCxcbiAgcm91bmRlZENpcmNsZSxcbiAgdGh1bWJuYWlsLFxuICAuLi5wcm9wc1xufSwgcmVmKSA9PiB7XG4gIGJzUHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KGJzUHJlZml4LCAnaW1nJyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChcImltZ1wiLCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBqc3gtYTExeS9hbHQtdGV4dFxuICAgIHJlZjogcmVmLFxuICAgIC4uLnByb3BzLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsIGZsdWlkICYmIGAke2JzUHJlZml4fS1mbHVpZGAsIHJvdW5kZWQgJiYgYHJvdW5kZWRgLCByb3VuZGVkQ2lyY2xlICYmIGByb3VuZGVkLWNpcmNsZWAsIHRodW1ibmFpbCAmJiBgJHtic1ByZWZpeH0tdGh1bWJuYWlsYClcbiAgfSk7XG59KTtcbkltYWdlLmRpc3BsYXlOYW1lID0gJ0ltYWdlJztcbkltYWdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbmV4cG9ydCBkZWZhdWx0IEltYWdlOyJdLCJuYW1lcyI6WyJmb3J3YXJkUmVmIiwiQ29sIiwiQ29udGFpbmVyIiwiSW1hZ2UiLCJSb3ciLCJwb3RyYWl0SW1hZ2UiLCJTZWN0aW9uSGVhZGVyIiwic3R5bGVzIiwiQWJvdXRNZSIsIl8iLCJyZWYiLCJwb3J0cmFpdEltYWdlIiwiZGlzcGxheU5hbWUiLCJtb3Rpb24iLCJBbmltYXRlZEdyZWV0aW5nIiwiZ3JlZXRpbmdUZXh0IiwieSIsImRvd25sb2FkSWNvbiIsIkljb24iLCJjb250YWN0cyIsImRvd25sb2FkcyIsIkNvbnRhY3RJY29uU2VsZWN0b3IiLCJjbGFzc05hbWUiLCJpY29uU3ZnIiwiQ29udGFjdCIsIm1hcCIsImNvbnRhY3QiLCJsaW5rIiwiY29udGFjdEljb24iLCJpY29uIiwibmFtZSIsImRvY3VtZW50IiwiZG9jdW1lbnREb3dubG9hZExpbmsiLCJmaWxlIiwiZG9jdW1lbnREb3dubG9hZEljb24iLCJCdXR0b24iLCJxdWlja0xpbmtzIiwiUXVpY2tMaW5rcyIsInF1aWNrTGluayIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImJ1dHRvbkNvbG9yIiwicGF0aCIsInRpdGxlIiwicmVzdW1lRmlsZSIsInRyYW5zY3JpcHRGaWxlIiwiRW1haWxJY29uIiwiR2l0aHViSWNvbiIsIkxpbmtlZEluSWNvbiIsIlRlbGVncmFtSWNvbiIsIkhvbWVQYWdlU2VjdGlvbk5hbWVzIiwiaG9tZVBhZ2VTZWN0aW9ucyIsIkFCT1VUX01FIiwiQ09OVEFDVCIsIlJlYWN0RE9NIiwidXNlUmVmIiwiaGVhZGVyQmFja2dyb3VuZEltYWdlIiwiTWFpbk5hdmJhciIsIlBhZ2VIZWFkZXIiLCJTdWJOYXZiYXIiLCJ1c2VQYWdlU2VjdGlvblJlZk1hcENyZWF0b3IiLCJSb290IiwiaG9tZVBhZ2VTZWN0aW9uc1JlZiIsIm1haW5OYXZiYXJSZWYiLCJzdWJOYXZiYXJSZWYiLCJjdXJyZW50IiwiaHlkcmF0ZVJvb3QiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=