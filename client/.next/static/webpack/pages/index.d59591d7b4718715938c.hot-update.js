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
      className: "absolute right-10 bottom-10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-6 w-6 text-white",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1,
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
      }, this)
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInNvY2tldCIsInVzZVJlZiIsInVzZXJSZWYiLCJyZWNlaXZlclJlZiIsIm1lc3NhZ2VSZWYiLCJ1c2VTdGF0ZSIsImlucHV0QWxlcnQiLCJzZXRJbnB1dEFsZXJ0IiwiaW5wdXRVSSIsInNldElucHV0VUkiLCJpbnB1dEFsZXJ0MiIsInNldElucHV0QWxlcnQyIiwiaW5wdXRVSTIiLCJzZXRJbnB1dFVJMiIsIm1lc3NhZ2VEaXNwbGF5Iiwic2V0TWVzc2FnZURpc3BsYXkiLCJ1c2VyIiwic2V0VXNlciIsInJlY2VpdmVyIiwic2V0UmVjZWl2ZXIiLCJkaXNjb25uZWN0Iiwic2V0RGlzY29ubmVjdCIsImNoYXQiLCJzZXRDaGF0IiwidXNlRWZmZWN0IiwiY3VycmVudCIsImlvIiwib24iLCJkYXRhIiwidXNlckhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwidmFsdWUiLCJyZWNlaXZlckhhbmRsZXIiLCJtZXNzYWdlSGFuZGxlciIsInVzZXJOYW1lIiwicmVjZWl2ZXJOYW1lIiwidGV4dE1lc3NhZ2UiLCJtZXNzYWdlIiwidHlwZSIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxNQUFNLEdBQUdDLDZDQUFNLEVBQXJCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRCw2Q0FBTSxFQUF0QjtBQUNBLE1BQU1FLFdBQVcsR0FBR0YsNkNBQU0sRUFBMUI7QUFDQSxNQUFNRyxVQUFVLEdBQUdILDZDQUFNLEVBQXpCOztBQUo2QixrQkFLT0ksK0NBQVEsQ0FBQyxLQUFELENBTGY7QUFBQSxNQUt0QkMsVUFMc0I7QUFBQSxNQUtWQyxhQUxVOztBQUFBLG1CQU1DRiwrQ0FBUSxDQUFDLEtBQUQsQ0FOVDtB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QUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdFRDs7R0F6SXVCaEIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNTk1OTFkN2I0NzE4NzE1OTM4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBzb2NrZXQgPSB1c2VSZWYoKTtcbiAgY29uc3QgdXNlclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCByZWNlaXZlclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBtZXNzYWdlUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtpbnB1dEFsZXJ0LCBzZXRJbnB1dEFsZXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0VUksIHNldElucHV0VUldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5wdXRBbGVydDIsIHNldElucHV0QWxlcnQyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0VUkyLCBzZXRJbnB1dFVJMl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZXNzYWdlRGlzcGxheSwgc2V0TWVzc2FnZURpc3BsYXldID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JlY2VpdmVyLCBzZXRSZWNlaXZlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkaXNjb25uZWN0LCBzZXREaXNjb25uZWN0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY2hhdCwgc2V0Q2hhdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQuY3VycmVudCA9IGlvKCd3czovL2xvY2FsaG9zdDozMDAxJyk7XG5cbiAgfSwgW10pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gc29ja2V0LmN1cnJlbnQub24oJ2xlZnQnLCBkYXRhID0+IHNldERpc2Nvbm5lY3QodHJ1ZSkpXG4gICAgc29ja2V0LmN1cnJlbnQub24oJ2dldE1lc3NhZ2UnLCBkYXRhID0+IHtcbiAgICAgIHNldENoYXQoWy4uLmNoYXQsIGRhdGFdKVxuICAgIH0pXG5cbiAgfSwgW2NoYXRdKVxuXG4gIGZ1bmN0aW9uIHVzZXJIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc29ja2V0LmN1cnJlbnQuZW1pdCgnYWRkVXNlcicsIHVzZXJSZWYuY3VycmVudD8udmFsdWUpXG4gICAgc29ja2V0LmN1cnJlbnQub24oJ2dldFVzZXInLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEgPT09ICd1c2VyIGFscmVhZHkgQ3JlYXRlZCcpIHtcbiAgICAgICAgc2V0SW5wdXRBbGVydCh0cnVlKVxuICAgICAgICBzZXRJbnB1dFVJKGZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SW5wdXRBbGVydChmYWxzZSlcbiAgICAgICAgc2V0SW5wdXRVSSh0cnVlKVxuICAgICAgICBzZXRVc2VyKHVzZXJSZWYuY3VycmVudD8udmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiByZWNlaXZlckhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzb2NrZXQuY3VycmVudC5lbWl0KCdjaGVja1VzZXInLCByZWNlaXZlclJlZi5jdXJyZW50Py52YWx1ZSlcbiAgICBzb2NrZXQuY3VycmVudC5vbigndmFsaWRVc2VyJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhID09PSAndHJ1ZScpIHtcbiAgICAgICAgc2V0SW5wdXRBbGVydDIodHJ1ZSlcbiAgICAgICAgc2V0SW5wdXRVSTIoZmFsc2UpXG4gICAgICAgIHNldFJlY2VpdmVyKHJlY2VpdmVyUmVmLmN1cnJlbnQ/LnZhbHVlKVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJbnB1dFVJMih0cnVlKVxuICAgICAgICBzZXRJbnB1dEFsZXJ0MihmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGZ1bmN0aW9uIG1lc3NhZ2VIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc29ja2V0LmN1cnJlbnQuZW1pdCgnc2VuZE1lc3NhZ2UnLCB7XG4gICAgICB1c2VyTmFtZTogdXNlcixcbiAgICAgIHJlY2VpdmVyTmFtZTogcmVjZWl2ZXIsXG4gICAgICB0ZXh0TWVzc2FnZTogbWVzc2FnZVJlZi5jdXJyZW50LnZhbHVlXG4gICAgfSlcbiAgICAvLyBzb2NrZXQuY3VycmVudC5vbignZ2V0TWVzc2FnZScsIGRhdGEgPT4ge1xuICAgIC8vICAgc2V0TXNnKFsuLi5tc2csIGRhdGFdKVxuICAgIC8vIH0pXG4gICAgLy8gc2V0T3duTXNnKFsuLi5vd25Nc2csIG1lc3NhZ2VSZWYuY3VycmVudC52YWx1ZV0pXG4gICAgc2V0Q2hhdChbLi4uY2hhdCwgeyBtZXNzYWdlOiBtZXNzYWdlUmVmLmN1cnJlbnQudmFsdWUsIHR5cGU6ICdtaW5lJyB9XSlcbiAgICBtZXNzYWdlUmVmLmN1cnJlbnQudmFsdWUgPSAnJ1xuXG4gICAgLy8gY29uc29sZS5sb2coY2hhdClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gcHktMiBiZy1wdXJwbGUtNjAwXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAge21lc3NhZ2VEaXNwbGF5XG4gICAgICAgID8gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUgcm91bmRlZC1zbSBmbGV4LWNvbCBmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtbW9ubyB0cmFja2luZy10aWdodGVyJz57J1lvdSBhcmUgY2hhdHRpbmcgYXMnICsgXCIgXCJ9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCB0ZXh0LXB1cnBsZS02MDAgY2FwaXRhbGl6ZSc+e3VzZXJ9PC9zcGFuPjwvaDE+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtbW9ubyB0cmFja2luZy10aWdodGVyJz57J0luIGNvbnZlcnNhdGlvbiB3aXRoJyArIFwiIFwifSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC1wdXJwbGUtNjAwIGNhcGl0YWxpemUnPntyZWNlaXZlcn08L3NwYW4+PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzY1MHB4XSBsZzpoLVs1MDBweF0gYmctd2hpdGUgZmxleCBqdXN0aWZ5LWJldHdlZW4gb3ZlcmZsb3ctc2Nyb2xsJz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC03IHJlbGF0aXZlJyAvPlxuICAgICAgICAgICAgICAgIHtjaGF0Py5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdtaW5lJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGgxIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHRleHQtcmlnaHQgcHItNCB3LVsxNTBweF0gcHgtMyByb3VuZGVkLTJ4bCBtYi0yIHB0LTEgZm9udC1tb25vIHRleHQtZ3JheS04MDAgdGV4dC14bCBtbC01MiBtdC0yIHJvdW5kZWQtYnItbm9uZSBoLWF1dG9cIj57aXRlbT8ubWVzc2FnZX08L2gxPlxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxoMSBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNjAwIHRleHQtbGVmdCB0ZXh0LXdoaXRlIHBsLTQgdy1bMTUwcHhdIHJvdW5kZWQtMnhsIHB4LTMgZm9udC1tb25vIHRleHQteGwgbXQtMiBwdC0xIG1sLTEgcm91bmRlZC1ibC1ub25lIGgtYXV0b1wiID57aXRlbT8ubWVzc2FnZX08L2gxPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7ZGlzY29ubmVjdCAmJiA8aDEgY2xhc3NOYW1lPSd0ZXh0LXJlZC04MDAgdW5kZXJsaW5lIHRleHQteHMgbXgtYXV0byBwdC00IGFic29sdXRlIGJvdHRvbS0yMCBsZWZ0LTI4IGxnOmxlZnQtWzYxNXB4XSc+VGhlIFVzZXIgbGVmdCB0aGUgY2hhdC48L2gxPn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgdy1bMzcwcHhdIGJnLXdoaXRlIHNoYWRvdy0yeGwnPlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17bWVzc2FnZUhhbmRsZXJ9IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGF1dG9Db21wbGV0ZT0nb2ZmJyBuYW1lPSdtZXNzYWdlJyByZWY9e21lc3NhZ2VSZWZ9IHJlcXVpcmVkIGNsYXNzTmFtZT0nYm9yZGVyLTIgYm9yZGVyLXB1cnBsZS02MDAgb3V0bGluZS1ub25lIGZvY3VzLXdpdGhpbjpvdXRsaW5lLW5vbmUgdy1bMjcwcHhdIGgtMTAnIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3ctWzEwMHB4XSBiZy1wdXJwbGUtNjAwIHRleHQtd2hpdGUgZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgdGV4dC14bCBib3JkZXIgYm9yZGVyLXdoaXRlJz5TZW5kPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgIDogKDxkaXYgY2xhc3NOYW1lPSdoLTY0IHctNjQgZmxleCBmbGV4LWNvbCBiZy13aGl0ZSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LTJ4bCByb3VuZGVkLXNtIHNwYWNlLXktMic+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHNwYWNlLXktMScgb25TdWJtaXQ9e3VzZXJIYW5kbGVyfT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSd1c2VybmFtZScgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlci1iIGJvcmRlci1ncmF5LTYwMCBmb2N1cy13aXRoaW46Ym9yZGVyLXB1cnBsZS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci1iLTIgdHJhbnNpdGlvbi1hbGwgaC04JyBwbGFjZWhvbGRlcj0nTmV3IFVzZXJuYW1lJyByZWY9e3VzZXJSZWZ9IC8+XG4gICAgICAgICAgICB7aW5wdXRBbGVydCAmJiA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gdGV4dC1zbSB0ZXh0LXJlZC01MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwJz5Vc2VybmFtZSBhbHJlYWR5IHRha2VuITwvaDE+fVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSB3LTU2IGgtNyByb3VuZGVkLXNtJz57aW5wdXRVSVxuICAgICAgICAgICAgICA/ICg8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtY2VudGVyIG1sLTI0IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17Mn0gZD1cIk05IDEybDIgMiA0LTRtNiAyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPilcbiAgICAgICAgICAgICAgOiBcIkVudGVyXCJ9PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZmxleC1jb2wgZmxleCBzcGFjZS15LTEnIG9uU3VibWl0PXtyZWNlaXZlckhhbmRsZXJ9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J3JlY2VpdmVyJyBhdXRvQ29tcGxldGU9XCJvZmZcIiBwbGFjZWhvbGRlcj0nRmluZCBieSBVc2VybmFtZSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlci1iIGJvcmRlci1ncmF5LTYwMCBmb2N1cy13aXRoaW46Ym9yZGVyLXB1cnBsZS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci1iLTIgdHJhbnNpdGlvbi1hbGwgaC04JyByZWY9e3JlY2VpdmVyUmVmfSAvPlxuICAgICAgICAgICAge2lucHV0VUkyICYmIDxoMSBjbGFzc05hbWU9J2ZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtcmVkLTUwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAnPlVzZXIgbm90IEZvdW5kITwvaDE+fVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BiZy1wdXJwbGUtNjAwIHRleHQtd2hpdGUgdy01NiBoLTcgcm91bmRlZC1zbSAgJHtpbnB1dEFsZXJ0MiAmJiAnYmctZ3JlZW4tNTAwJ31gfT57KGlucHV0QWxlcnQyID8gJ1VzZXIgbWF0Y2hlZCBzdWNjZXNzZnVsbHkhJyA6ICdTZWFyY2gnKX08L2J1dHRvbj5cblxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICB7aW5wdXRBbGVydDIgJiYgPGJ1dHRvbiBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgdGV4dC1wdXJwbGUtNzAwIGZvbnQtc2VtaWJvbGQgZm9udC1tb25vIGJnLWdyYXktMjAwIGFjdGl2ZTphbmltYXRlLXBpbmcgJyBvbkNsaWNrPXsoKSA9PiBzZXRNZXNzYWdlRGlzcGxheSh0cnVlKX0+XG4gICAgICAgICAgICBTdGFydCBtZXNzYWdpbmc8L2J1dHRvbj59XG4gICAgICAgIDwvZGl2Pil9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgcmlnaHQtMTAgYm90dG9tLTEwJz5cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LXdoaXRlXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsxfSBkPVwiTTguMjI4IDljLjU0OS0xLjE2NSAyLjAzLTIgMy43NzItMiAyLjIxIDAgNCAxLjM0MyA0IDMgMCAxLjQtMS4yNzggMi41NzUtMy4wMDYgMi45MDctLjU0Mi4xMDQtLjk5NC41NC0uOTk0IDEuMDkzbTAgM2guMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==