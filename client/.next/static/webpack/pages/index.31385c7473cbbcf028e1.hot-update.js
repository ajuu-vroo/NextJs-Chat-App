self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Projects_WD_Next_js_WEB_chat_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/wrapper.mjs");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Projects-WD\\Next.js\\WEB chat-app\\client\\pages\\index.js",
    _s = $RefreshSig$();



 // import Link from 'next/link';

function Home() {
  _s();

  var _this = this;

  var socket = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var userRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var receiverRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var messageRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      inputAlert = _useState[0],
      setInputAlert = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      inputUI = _useState2[0],
      setInputUI = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      inputAlert2 = _useState3[0],
      setInputAlert2 = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      inputUI2 = _useState4[0],
      setInputUI2 = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      messageDisplay = _useState5[0],
      setMessageDisplay = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      user = _useState6[0],
      setUser = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      receiver = _useState7[0],
      setReceiver = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      disconnect = _useState8[0],
      setDisconnect = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      chat = _useState9[0],
      setChat = _useState9[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_4__.io)('ws://localhost:3001');
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    // socket.current.on('left', data => setDisconnect(true))
    socket.current.on('getMessage', function (data) {
      setChat([].concat((0,D_Projects_WD_Next_js_WEB_chat_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(chat), [data]));
    });
  }, [chat]);

  function userHandler(e) {
    var _userRef$current;

    e.preventDefault();
    socket.current.emit('addUser', (_userRef$current = userRef.current) === null || _userRef$current === void 0 ? void 0 : _userRef$current.value);
    socket.current.on('getUser', function (data) {
      if (data === 'user already Created') {
        setInputAlert(true);
        setInputUI(false);
      } else {
        var _userRef$current2;

        setInputAlert(false);
        setInputUI(true);
        setUser((_userRef$current2 = userRef.current) === null || _userRef$current2 === void 0 ? void 0 : _userRef$current2.value);
      }
    });
  }

  function receiverHandler(e) {
    var _receiverRef$current;

    e.preventDefault();
    socket.current.emit('checkUser', (_receiverRef$current = receiverRef.current) === null || _receiverRef$current === void 0 ? void 0 : _receiverRef$current.value);
    socket.current.on('validUser', function (data) {
      if (data === 'true') {
        var _receiverRef$current2;

        setInputAlert2(true);
        setInputUI2(false);
        setReceiver((_receiverRef$current2 = receiverRef.current) === null || _receiverRef$current2 === void 0 ? void 0 : _receiverRef$current2.value);
      } else {
        setInputUI2(true);
        setInputAlert2(false);
      }
    });
  }

  function messageHandler(e) {
    e.preventDefault();
    socket.current.emit('sendMessage', {
      userName: user,
      receiverName: receiver,
      textMessage: messageRef.current.value
    }); // socket.current.on('getMessage', data => {
    //   setMsg([...msg, data])
    // })
    // setOwnMsg([...ownMsg, messageRef.current.value])

    setChat([].concat((0,D_Projects_WD_Next_js_WEB_chat_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(chat), [{
      message: messageRef.current.value,
      type: 'mine'
    }]));
    messageRef.current.value = ''; // console.log(chat)
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col items-center justify-center min-h-screen py-2 bg-purple-600",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), messageDisplay ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg-white rounded-sm flex-col flex items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "font-mono tracking-tighter",
          children: ['You are chatting as' + " ", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "font-semibold text-purple-600 capitalize",
            children: user
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 88
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "font-mono tracking-tighter",
          children: ['In conversation with' + " ", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "font-semibold text-purple-600 capitalize",
            children: receiver
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 89
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "h-[650px] lg:h-[500px] bg-white flex justify-between overflow-scroll",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "h-7 relative"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 17
          }, this), chat === null || chat === void 0 ? void 0 : chat.map(function (item) {
            if (item.type === 'mine') {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "bg-gray-300 text-right pr-4 w-[150px] px-3 rounded-2xl mb-2 pt-1 font-mono text-gray-800 text-xl ml-52 mt-2 rounded-br-none h-auto",
                children: item === null || item === void 0 ? void 0 : item.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 28
              }, _this);
            } else {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "bg-purple-600 text-left text-white pl-4 w-[150px] rounded-2xl px-3 font-mono text-xl mt-2 pt-1 ml-1 rounded-bl-none h-auto",
                children: item === null || item === void 0 ? void 0 : item.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 28
              }, _this);
            }
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }, this), disconnect && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-red-800 underline text-xs mx-auto pt-4 absolute bottom-20 left-28 lg:left-[615px]",
        children: "The User left the chat."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 28
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " w-[370px] bg-white shadow-2xl",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: messageHandler,
          className: "flex justify-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            autoComplete: "off",
            name: "message",
            ref: messageRef,
            required: true,
            className: "border-2 border-purple-600 outline-none focus-within:outline-none w-[270px] h-10"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w-[100px] bg-purple-600 text-white font-mono font-semibold text-xl border border-white",
            children: "Send"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "h-64 w-64 flex flex-col bg-white items-center justify-center shadow-2xl rounded-sm space-y-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        className: "flex flex-col space-y-1",
        onSubmit: userHandler,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          name: "username",
          autoComplete: "off",
          className: "outline-none focus:outline-none border-b border-gray-600 focus-within:border-purple-600 focus-within:border-b-2 transition-all h-8",
          placeholder: "New Username",
          ref: userRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }, this), inputAlert && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "font-mono text-sm text-red-500 transition-all duration-300",
          children: "Username already taken!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 28
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "bg-purple-600 text-white w-56 h-7 rounded-sm",
          children: inputUI ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6 text-center ml-24 transition-all duration-300",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 18
          }, this) : "Enter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        className: "flex-col flex space-y-1",
        onSubmit: receiverHandler,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          name: "receiver",
          autoComplete: "off",
          placeholder: "Find by Username",
          className: "outline-none focus:outline-none border-b border-gray-600 focus-within:border-purple-600 focus-within:border-b-2 transition-all h-8",
          ref: receiverRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, this), inputUI2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "font-mono text-sm text-red-500 transition-all duration-300",
          children: "User not Found!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 26
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "bg-purple-600 text-white w-56 h-7 rounded-sm  ".concat(inputAlert2 && 'bg-green-500'),
          children: inputAlert2 ? 'User matched successfully!' : 'Search'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 11
      }, this), inputAlert2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "w-full h-full text-purple-700 font-semibold font-mono bg-gray-200 active:animate-ping ",
        onClick: function onClick() {
          return setMessageDisplay(true);
        },
        children: "Start messaging"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 27
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "absolute right-10 bottom-10 cursor-pointer group",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-white hover:scale-90",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("video", {
        className: "hidden group-hover:flex",
        autoPlay: true,
        style: {
          width: '500px',
          height: '500px'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("source", {
          src: "/chat-app.mp4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, this);
}

_s(Home, "9aJdn5+iarp82TiJstcRYOcnhQw=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInNvY2tldCIsInVzZVJlZiIsInVzZXJSZWYiLCJyZWNlaXZlclJlZiIsIm1lc3NhZ2VSZWYiLCJ1c2VTdGF0ZSIsImlucHV0QWxlcnQiLCJzZXRJbnB1dEFsZXJ0IiwiaW5wdXRVSSIsInNldElucHV0VUkiLCJpbnB1dEFsZXJ0MiIsInNldElucHV0QWxlcnQyIiwiaW5wdXRVSTIiLCJzZXRJbnB1dFVJMiIsIm1lc3NhZ2VEaXNwbGF5Iiwic2V0TWVzc2FnZURpc3BsYXkiLCJ1c2VyIiwic2V0VXNlciIsInJlY2VpdmVyIiwic2V0UmVjZWl2ZXIiLCJkaXNjb25uZWN0Iiwic2V0RGlzY29ubmVjdCIsImNoYXQiLCJzZXRDaGF0IiwidXNlRWZmZWN0IiwiY3VycmVudCIsImlvIiwib24iLCJkYXRhIiwidXNlckhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwidmFsdWUiLCJyZWNlaXZlckhhbmRsZXIiLCJtZXNzYWdlSGFuZGxlciIsInVzZXJOYW1lIiwicmVjZWl2ZXJOYW1lIiwidGV4dE1lc3NhZ2UiLCJtZXNzYWdlIiwidHlwZSIsIm1hcCIsIml0ZW0iLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkNBQU0sRUFBckI7QUFDQSxNQUFNQyxPQUFPLEdBQUdELDZDQUFNLEVBQXRCO0FBQ0EsTUFBTUUsV0FBVyxHQUFHRiw2Q0FBTSxFQUExQjtBQUNBLE1BQU1HLFVBQVUsR0FBR0gsNkNBQU0sRUFBekI7O0FBSjZCLGtCQUtPSSwrQ0FBUSxDQUFDLEtBQUQsQ0FMZjtBQUFBLE1BS3RCQyxVQUxzQjtBQUFBLE1BS1ZDLGFBTFU7O0FBQUEsbUJBTUNGLCtDQUFR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QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQU8saUJBQVMsRUFBQyx5QkFBakI7QUFBMkMsZ0JBQVEsTUFBbkQ7QUFBb0QsYUFBSyxFQUFFO0FBQUU0QixlQUFLLEVBQUUsT0FBVDtBQUFrQkMsZ0JBQU0sRUFBRTtBQUExQixTQUEzRDtBQUFBLCtCQUNBO0FBQVEsYUFBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtRUQ7O0dBNUl1QjdDLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzEzODVjNzQ3M2NiYmNmMDI4ZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaW8gfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XG4gIGNvbnN0IHVzZXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcmVjZWl2ZXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbWVzc2FnZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBbaW5wdXRBbGVydCwgc2V0SW5wdXRBbGVydF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbnB1dFVJLCBzZXRJbnB1dFVJXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0QWxlcnQyLCBzZXRJbnB1dEFsZXJ0Ml0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbnB1dFVJMiwgc2V0SW5wdXRVSTJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZURpc3BsYXksIHNldE1lc3NhZ2VEaXNwbGF5XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZWNlaXZlciwgc2V0UmVjZWl2ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGlzY29ubmVjdCwgc2V0RGlzY29ubmVjdF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NoYXQsIHNldENoYXRdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0LmN1cnJlbnQgPSBpbygnd3M6Ly9sb2NhbGhvc3Q6MzAwMScpO1xuXG4gIH0sIFtdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNvY2tldC5jdXJyZW50Lm9uKCdsZWZ0JywgZGF0YSA9PiBzZXREaXNjb25uZWN0KHRydWUpKVxuICAgIHNvY2tldC5jdXJyZW50Lm9uKCdnZXRNZXNzYWdlJywgZGF0YSA9PiB7XG4gICAgICBzZXRDaGF0KFsuLi5jaGF0LCBkYXRhXSlcbiAgICB9KVxuXG4gIH0sIFtjaGF0XSlcblxuICBmdW5jdGlvbiB1c2VySGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNvY2tldC5jdXJyZW50LmVtaXQoJ2FkZFVzZXInLCB1c2VyUmVmLmN1cnJlbnQ/LnZhbHVlKVxuICAgIHNvY2tldC5jdXJyZW50Lm9uKCdnZXRVc2VyJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhID09PSAndXNlciBhbHJlYWR5IENyZWF0ZWQnKSB7XG4gICAgICAgIHNldElucHV0QWxlcnQodHJ1ZSlcbiAgICAgICAgc2V0SW5wdXRVSShmYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldElucHV0QWxlcnQoZmFsc2UpXG4gICAgICAgIHNldElucHV0VUkodHJ1ZSlcbiAgICAgICAgc2V0VXNlcih1c2VyUmVmLmN1cnJlbnQ/LnZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZnVuY3Rpb24gcmVjZWl2ZXJIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc29ja2V0LmN1cnJlbnQuZW1pdCgnY2hlY2tVc2VyJywgcmVjZWl2ZXJSZWYuY3VycmVudD8udmFsdWUpXG4gICAgc29ja2V0LmN1cnJlbnQub24oJ3ZhbGlkVXNlcicsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBpZiAoZGF0YSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHNldElucHV0QWxlcnQyKHRydWUpXG4gICAgICAgIHNldElucHV0VUkyKGZhbHNlKVxuICAgICAgICBzZXRSZWNlaXZlcihyZWNlaXZlclJlZi5jdXJyZW50Py52YWx1ZSlcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SW5wdXRVSTIodHJ1ZSlcbiAgICAgICAgc2V0SW5wdXRBbGVydDIoZmFsc2UpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiBtZXNzYWdlSGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNvY2tldC5jdXJyZW50LmVtaXQoJ3NlbmRNZXNzYWdlJywge1xuICAgICAgdXNlck5hbWU6IHVzZXIsXG4gICAgICByZWNlaXZlck5hbWU6IHJlY2VpdmVyLFxuICAgICAgdGV4dE1lc3NhZ2U6IG1lc3NhZ2VSZWYuY3VycmVudC52YWx1ZVxuICAgIH0pXG4gICAgLy8gc29ja2V0LmN1cnJlbnQub24oJ2dldE1lc3NhZ2UnLCBkYXRhID0+IHtcbiAgICAvLyAgIHNldE1zZyhbLi4ubXNnLCBkYXRhXSlcbiAgICAvLyB9KVxuICAgIC8vIHNldE93bk1zZyhbLi4ub3duTXNnLCBtZXNzYWdlUmVmLmN1cnJlbnQudmFsdWVdKVxuICAgIHNldENoYXQoWy4uLmNoYXQsIHsgbWVzc2FnZTogbWVzc2FnZVJlZi5jdXJyZW50LnZhbHVlLCB0eXBlOiAnbWluZScgfV0pXG4gICAgbWVzc2FnZVJlZi5jdXJyZW50LnZhbHVlID0gJydcblxuICAgIC8vIGNvbnNvbGUubG9nKGNoYXQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHB5LTIgYmctcHVycGxlLTYwMFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHttZXNzYWdlRGlzcGxheVxuICAgICAgICA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIHJvdW5kZWQtc20gZmxleC1jb2wgZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gdHJhY2tpbmctdGlnaHRlcic+eydZb3UgYXJlIGNoYXR0aW5nIGFzJyArIFwiIFwifSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC1wdXJwbGUtNjAwIGNhcGl0YWxpemUnPnt1c2VyfTwvc3Bhbj48L2gxPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gdHJhY2tpbmctdGlnaHRlcic+eydJbiBjb252ZXJzYXRpb24gd2l0aCcgKyBcIiBcIn0gPHNwYW4gY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIHRleHQtcHVycGxlLTYwMCBjYXBpdGFsaXplJz57cmVjZWl2ZXJ9PC9zcGFuPjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs2NTBweF0gbGc6aC1bNTAwcHhdIGJnLXdoaXRlIGZsZXgganVzdGlmeS1iZXR3ZWVuIG92ZXJmbG93LXNjcm9sbCc+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtNyByZWxhdGl2ZScgLz5cbiAgICAgICAgICAgICAgICB7Y2hhdD8ubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnbWluZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxoMSBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCB0ZXh0LXJpZ2h0IHByLTQgdy1bMTUwcHhdIHB4LTMgcm91bmRlZC0yeGwgbWItMiBwdC0xIGZvbnQtbW9ubyB0ZXh0LWdyYXktODAwIHRleHQteGwgbWwtNTIgbXQtMiByb3VuZGVkLWJyLW5vbmUgaC1hdXRvXCI+e2l0ZW0/Lm1lc3NhZ2V9PC9oMT5cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDEgY2xhc3NOYW1lPVwiYmctcHVycGxlLTYwMCB0ZXh0LWxlZnQgdGV4dC13aGl0ZSBwbC00IHctWzE1MHB4XSByb3VuZGVkLTJ4bCBweC0zIGZvbnQtbW9ubyB0ZXh0LXhsIG10LTIgcHQtMSBtbC0xIHJvdW5kZWQtYmwtbm9uZSBoLWF1dG9cIiA+e2l0ZW0/Lm1lc3NhZ2V9PC9oMT5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2Rpc2Nvbm5lY3QgJiYgPGgxIGNsYXNzTmFtZT0ndGV4dC1yZWQtODAwIHVuZGVybGluZSB0ZXh0LXhzIG14LWF1dG8gcHQtNCBhYnNvbHV0ZSBib3R0b20tMjAgbGVmdC0yOCBsZzpsZWZ0LVs2MTVweF0nPlRoZSBVc2VyIGxlZnQgdGhlIGNoYXQuPC9oMT59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHctWzM3MHB4XSBiZy13aGl0ZSBzaGFkb3ctMnhsJz5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e21lc3NhZ2VIYW5kbGVyfSBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBhdXRvQ29tcGxldGU9J29mZicgbmFtZT0nbWVzc2FnZScgcmVmPXttZXNzYWdlUmVmfSByZXF1aXJlZCBjbGFzc05hbWU9J2JvcmRlci0yIGJvcmRlci1wdXJwbGUtNjAwIG91dGxpbmUtbm9uZSBmb2N1cy13aXRoaW46b3V0bGluZS1ub25lIHctWzI3MHB4XSBoLTEwJyAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3LVsxMDBweF0gYmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtbW9ubyBmb250LXNlbWlib2xkIHRleHQteGwgYm9yZGVyIGJvcmRlci13aGl0ZSc+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICA6ICg8ZGl2IGNsYXNzTmFtZT0naC02NCB3LTY0IGZsZXggZmxleC1jb2wgYmctd2hpdGUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy0yeGwgcm91bmRlZC1zbSBzcGFjZS15LTInPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBzcGFjZS15LTEnIG9uU3VibWl0PXt1c2VySGFuZGxlcn0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0ndXNlcm5hbWUnIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXItYiBib3JkZXItZ3JheS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci1wdXJwbGUtNjAwIGZvY3VzLXdpdGhpbjpib3JkZXItYi0yIHRyYW5zaXRpb24tYWxsIGgtOCcgcGxhY2Vob2xkZXI9J05ldyBVc2VybmFtZScgcmVmPXt1c2VyUmVmfSAvPlxuICAgICAgICAgICAge2lucHV0QWxlcnQgJiYgPGgxIGNsYXNzTmFtZT0nZm9udC1tb25vIHRleHQtc20gdGV4dC1yZWQtNTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCc+VXNlcm5hbWUgYWxyZWFkeSB0YWtlbiE8L2gxPn1cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1wdXJwbGUtNjAwIHRleHQtd2hpdGUgdy01NiBoLTcgcm91bmRlZC1zbSc+e2lucHV0VUlcbiAgICAgICAgICAgICAgPyAoPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LWNlbnRlciBtbC0yNCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNOSAxMmwyIDIgNC00bTYgMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz4pXG4gICAgICAgICAgICAgIDogXCJFbnRlclwifTwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2ZsZXgtY29sIGZsZXggc3BhY2UteS0xJyBvblN1Ym1pdD17cmVjZWl2ZXJIYW5kbGVyfT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdyZWNlaXZlcicgYXV0b0NvbXBsZXRlPVwib2ZmXCIgcGxhY2Vob2xkZXI9J0ZpbmQgYnkgVXNlcm5hbWUnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXItYiBib3JkZXItZ3JheS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci1wdXJwbGUtNjAwIGZvY3VzLXdpdGhpbjpib3JkZXItYi0yIHRyYW5zaXRpb24tYWxsIGgtOCcgcmVmPXtyZWNlaXZlclJlZn0gLz5cbiAgICAgICAgICAgIHtpbnB1dFVJMiAmJiA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gdGV4dC1zbSB0ZXh0LXJlZC01MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwJz5Vc2VyIG5vdCBGb3VuZCE8L2gxPn1cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlIHctNTYgaC03IHJvdW5kZWQtc20gICR7aW5wdXRBbGVydDIgJiYgJ2JnLWdyZWVuLTUwMCd9YH0+eyhpbnB1dEFsZXJ0MiA/ICdVc2VyIG1hdGNoZWQgc3VjY2Vzc2Z1bGx5IScgOiAnU2VhcmNoJyl9PC9idXR0b24+XG5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAge2lucHV0QWxlcnQyICYmIDxidXR0b24gY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIHRleHQtcHVycGxlLTcwMCBmb250LXNlbWlib2xkIGZvbnQtbW9ubyBiZy1ncmF5LTIwMCBhY3RpdmU6YW5pbWF0ZS1waW5nICcgb25DbGljaz17KCkgPT4gc2V0TWVzc2FnZURpc3BsYXkodHJ1ZSl9PlxuICAgICAgICAgICAgU3RhcnQgbWVzc2FnaW5nPC9idXR0b24+fVxuICAgICAgICA8L2Rpdj4pfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHJpZ2h0LTEwIGJvdHRvbS0xMCBjdXJzb3ItcG9pbnRlciBncm91cCc+XG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtOCB3LTggdGV4dC13aGl0ZSBob3ZlcjpzY2FsZS05MFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17Mn0gZD1cIk04LjIyOCA5Yy41NDktMS4xNjUgMi4wMy0yIDMuNzcyLTIgMi4yMSAwIDQgMS4zNDMgNCAzIDAgMS40LTEuMjc4IDIuNTc1LTMuMDA2IDIuOTA3LS41NDIuMTA0LS45OTQuNTQtLjk5NCAxLjA5M20wIDNoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8dmlkZW8gY2xhc3NOYW1lPSdoaWRkZW4gZ3JvdXAtaG92ZXI6ZmxleCcgYXV0b1BsYXkgc3R5bGU9e3sgd2lkdGg6ICc1MDBweCcsIGhlaWdodDogJzUwMHB4JyB9fT5cbiAgICAgICAgPHNvdXJjZSBzcmM9XCIvY2hhdC1hcHAubXA0XCIgLz5cbiAgICAgIDwvdmlkZW8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==