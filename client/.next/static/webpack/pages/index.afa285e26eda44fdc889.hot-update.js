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
    socket.current.on('left', function (data) {
      return setDisconnect(true);
    });
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
    messageRef.current.value = '';
    console.log(chat);
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
                className: "bg-gray-300 text-right pr-4 w-[150px] px-3 rounded-full mb-2 h-9 pt-1 font-mono text-gray-800 text-xl ml-52 mt-2 rounded-br-none",
                children: item === null || item === void 0 ? void 0 : item.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 28
              }, _this);
            } else {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "bg-purple-600 text-left text-white pl-4 w-[150px] rounded-full h-9 px-3 font-mono text-xl mt-2 pt-1 ml-1 rounded-bl-none",
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
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, this);
}

_s(Home, "Qbd1rT95pQQT0hoELaDwdNtAaE4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInNvY2tldCIsInVzZVJlZiIsInVzZXJSZWYiLCJyZWNlaXZlclJlZiIsIm1lc3NhZ2VSZWYiLCJ1c2VTdGF0ZSIsImlucHV0QWxlcnQiLCJzZXRJbnB1dEFsZXJ0IiwiaW5wdXRVSSIsInNldElucHV0VUkiLCJpbnB1dEFsZXJ0MiIsInNldElucHV0QWxlcnQyIiwiaW5wdXRVSTIiLCJzZXRJbnB1dFVJMiIsIm1lc3NhZ2VEaXNwbGF5Iiwic2V0TWVzc2FnZURpc3BsYXkiLCJ1c2VyIiwic2V0VXNlciIsInJlY2VpdmVyIiwic2V0UmVjZWl2ZXIiLCJkaXNjb25uZWN0Iiwic2V0RGlzY29ubmVjdCIsImNoYXQiLCJzZXRDaGF0IiwidXNlRWZmZWN0IiwiY3VycmVudCIsImlvIiwib24iLCJkYXRhIiwidXNlckhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwidmFsdWUiLCJyZWNlaXZlckhhbmRsZXIiLCJtZXNzYWdlSGFuZGxlciIsInVzZXJOYW1lIiwicmVjZWl2ZXJOYW1lIiwidGV4dE1lc3NhZ2UiLCJtZXNzYWdlIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2Q0FBTSxFQUFyQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0QsNkNBQU0sRUFBdEI7QUFDQSxNQUFNRSxXQUFXLEdBQUdGLDZDQUFNLEVBQTFCO0FBQ0EsTUFBTUcsVUFBVSxHQUFHSCw2Q0FBTSxFQUF6Qjs7QUFKNkIsa0JBS09JLCtDQUFRLENBQUMsS0FBRCxDQUxmO0FBQUEsTUFLdEJDLFVBTHNCO0FBQUEsTUFLVkMsYUFMVTs7QUFBQSxtQkFNQ0YsK0NBQVEs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ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaW8gfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XG4gIGNvbnN0IHVzZXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcmVjZWl2ZXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbWVzc2FnZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBbaW5wdXRBbGVydCwgc2V0SW5wdXRBbGVydF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbnB1dFVJLCBzZXRJbnB1dFVJXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0QWxlcnQyLCBzZXRJbnB1dEFsZXJ0Ml0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbnB1dFVJMiwgc2V0SW5wdXRVSTJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZURpc3BsYXksIHNldE1lc3NhZ2VEaXNwbGF5XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZWNlaXZlciwgc2V0UmVjZWl2ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGlzY29ubmVjdCwgc2V0RGlzY29ubmVjdF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NoYXQsc2V0Q2hhdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQuY3VycmVudCA9IGlvKCd3czovL2xvY2FsaG9zdDozMDAxJyk7XG5cbiAgfSwgW10pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0LmN1cnJlbnQub24oJ2xlZnQnLCBkYXRhID0+IHNldERpc2Nvbm5lY3QodHJ1ZSkpXG4gICAgc29ja2V0LmN1cnJlbnQub24oJ2dldE1lc3NhZ2UnLCBkYXRhID0+IHtcbiAgICAgIHNldENoYXQoWy4uLmNoYXQsIGRhdGFdKVxuICAgIH0pXG4gICAgXG4gIH0sIFtjaGF0XSlcblxuICBmdW5jdGlvbiB1c2VySGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNvY2tldC5jdXJyZW50LmVtaXQoJ2FkZFVzZXInLCB1c2VyUmVmLmN1cnJlbnQ/LnZhbHVlKVxuICAgIHNvY2tldC5jdXJyZW50Lm9uKCdnZXRVc2VyJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhID09PSAndXNlciBhbHJlYWR5IENyZWF0ZWQnKSB7XG4gICAgICAgIHNldElucHV0QWxlcnQodHJ1ZSlcbiAgICAgICAgc2V0SW5wdXRVSShmYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldElucHV0QWxlcnQoZmFsc2UpXG4gICAgICAgIHNldElucHV0VUkodHJ1ZSlcbiAgICAgICAgc2V0VXNlcih1c2VyUmVmLmN1cnJlbnQ/LnZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZnVuY3Rpb24gcmVjZWl2ZXJIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc29ja2V0LmN1cnJlbnQuZW1pdCgnY2hlY2tVc2VyJywgcmVjZWl2ZXJSZWYuY3VycmVudD8udmFsdWUpXG4gICAgc29ja2V0LmN1cnJlbnQub24oJ3ZhbGlkVXNlcicsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBpZiAoZGF0YSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHNldElucHV0QWxlcnQyKHRydWUpXG4gICAgICAgIHNldElucHV0VUkyKGZhbHNlKVxuICAgICAgICBzZXRSZWNlaXZlcihyZWNlaXZlclJlZi5jdXJyZW50Py52YWx1ZSlcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SW5wdXRVSTIodHJ1ZSlcbiAgICAgICAgc2V0SW5wdXRBbGVydDIoZmFsc2UpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiBtZXNzYWdlSGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNvY2tldC5jdXJyZW50LmVtaXQoJ3NlbmRNZXNzYWdlJywge1xuICAgICAgdXNlck5hbWU6IHVzZXIsXG4gICAgICByZWNlaXZlck5hbWU6IHJlY2VpdmVyLFxuICAgICAgdGV4dE1lc3NhZ2U6IG1lc3NhZ2VSZWYuY3VycmVudC52YWx1ZVxuICAgIH0pXG4gICAgLy8gc29ja2V0LmN1cnJlbnQub24oJ2dldE1lc3NhZ2UnLCBkYXRhID0+IHtcbiAgICAvLyAgIHNldE1zZyhbLi4ubXNnLCBkYXRhXSlcbiAgICAvLyB9KVxuICAgIC8vIHNldE93bk1zZyhbLi4ub3duTXNnLCBtZXNzYWdlUmVmLmN1cnJlbnQudmFsdWVdKVxuICAgIHNldENoYXQoWy4uLmNoYXQse21lc3NhZ2U6bWVzc2FnZVJlZi5jdXJyZW50LnZhbHVlLCB0eXBlOidtaW5lJ31dKVxuICAgIG1lc3NhZ2VSZWYuY3VycmVudC52YWx1ZSA9ICcnXG5cbiAgICBjb25zb2xlLmxvZyhjaGF0KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBweS0yIGJnLXB1cnBsZS02MDBcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICB7bWVzc2FnZURpc3BsYXlcbiAgICAgICAgPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSByb3VuZGVkLXNtIGZsZXgtY29sIGZsZXggaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1tb25vIHRyYWNraW5nLXRpZ2h0ZXInPnsnWW91IGFyZSBjaGF0dGluZyBhcycgKyBcIiBcIn0gPHNwYW4gY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIHRleHQtcHVycGxlLTYwMCBjYXBpdGFsaXplJz57dXNlcn08L3NwYW4+PC9oMT5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1tb25vIHRyYWNraW5nLXRpZ2h0ZXInPnsnSW4gY29udmVyc2F0aW9uIHdpdGgnICsgXCIgXCJ9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCB0ZXh0LXB1cnBsZS02MDAgY2FwaXRhbGl6ZSc+e3JlY2VpdmVyfTwvc3Bhbj48L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC1bNjUwcHhdIGxnOmgtWzUwMHB4XSBiZy13aGl0ZSBmbGV4IGp1c3RpZnktYmV0d2VlbiBvdmVyZmxvdy1zY3JvbGwnPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTcgcmVsYXRpdmUnIC8+XG4gICAgICAgICAgICAgICAge2NoYXQ/Lm1hcCgoaXRlbSk9PntcbiAgICAgICAgICAgICAgICAgIGlmKGl0ZW0udHlwZT09PSdtaW5lJyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDEgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgdGV4dC1yaWdodCBwci00IHctWzE1MHB4XSBweC0zIHJvdW5kZWQtZnVsbCBtYi0yIGgtOSBwdC0xIGZvbnQtbW9ubyB0ZXh0LWdyYXktODAwIHRleHQteGwgbWwtNTIgbXQtMiByb3VuZGVkLWJyLW5vbmVcIj57aXRlbT8ubWVzc2FnZX08L2gxPlxuICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDEgY2xhc3NOYW1lPVwiYmctcHVycGxlLTYwMCB0ZXh0LWxlZnQgdGV4dC13aGl0ZSBwbC00IHctWzE1MHB4XSByb3VuZGVkLWZ1bGwgaC05IHB4LTMgZm9udC1tb25vIHRleHQteGwgbXQtMiBwdC0xIG1sLTEgcm91bmRlZC1ibC1ub25lXCIgPntpdGVtPy5tZXNzYWdlfTwvaDE+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtkaXNjb25uZWN0ICYmIDxoMSBjbGFzc05hbWU9J3RleHQtcmVkLTgwMCB1bmRlcmxpbmUgdGV4dC14cyBteC1hdXRvIHB0LTQgYWJzb2x1dGUgYm90dG9tLTIwIGxlZnQtMjggbGc6bGVmdC1bNjE1cHhdJz5UaGUgVXNlciBsZWZ0IHRoZSBjaGF0LjwvaDE+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyB3LVszNzBweF0gYmctd2hpdGUgc2hhZG93LTJ4bCc+XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXttZXNzYWdlSGFuZGxlcn0gY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgYXV0b0NvbXBsZXRlPSdvZmYnIG5hbWU9J21lc3NhZ2UnIHJlZj17bWVzc2FnZVJlZn0gcmVxdWlyZWQgY2xhc3NOYW1lPSdib3JkZXItMiBib3JkZXItcHVycGxlLTYwMCBvdXRsaW5lLW5vbmUgZm9jdXMtd2l0aGluOm91dGxpbmUtbm9uZSB3LVsyNzBweF0gaC0xMCcgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndy1bMTAwcHhdIGJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBmb250LW1vbm8gZm9udC1zZW1pYm9sZCB0ZXh0LXhsIGJvcmRlciBib3JkZXItd2hpdGUnPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICAgOiAoPGRpdiBjbGFzc05hbWU9J2gtNjQgdy02NCBmbGV4IGZsZXgtY29sIGJnLXdoaXRlIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaGFkb3ctMnhsIHJvdW5kZWQtc20gc3BhY2UteS0yJz5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgc3BhY2UteS0xJyBvblN1Ym1pdD17dXNlckhhbmRsZXJ9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J3VzZXJuYW1lJyBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9J291dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyLWIgYm9yZGVyLWdyYXktNjAwIGZvY3VzLXdpdGhpbjpib3JkZXItcHVycGxlLTYwMCBmb2N1cy13aXRoaW46Ym9yZGVyLWItMiB0cmFuc2l0aW9uLWFsbCBoLTgnIHBsYWNlaG9sZGVyPSdOZXcgVXNlcm5hbWUnIHJlZj17dXNlclJlZn0gLz5cbiAgICAgICAgICAgIHtpbnB1dEFsZXJ0ICYmIDxoMSBjbGFzc05hbWU9J2ZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtcmVkLTUwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAnPlVzZXJuYW1lIGFscmVhZHkgdGFrZW4hPC9oMT59XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlIHctNTYgaC03IHJvdW5kZWQtc20nPntpbnB1dFVJXG4gICAgICAgICAgICAgID8gKDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1jZW50ZXIgbWwtMjQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTkgMTJsMiAyIDQtNG02IDJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+KVxuICAgICAgICAgICAgICA6IFwiRW50ZXJcIn08L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmbGV4LWNvbCBmbGV4IHNwYWNlLXktMScgb25TdWJtaXQ9e3JlY2VpdmVySGFuZGxlcn0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0ncmVjZWl2ZXInIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHBsYWNlaG9sZGVyPSdGaW5kIGJ5IFVzZXJuYW1lJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J291dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyLWIgYm9yZGVyLWdyYXktNjAwIGZvY3VzLXdpdGhpbjpib3JkZXItcHVycGxlLTYwMCBmb2N1cy13aXRoaW46Ym9yZGVyLWItMiB0cmFuc2l0aW9uLWFsbCBoLTgnIHJlZj17cmVjZWl2ZXJSZWZ9IC8+XG4gICAgICAgICAgICB7aW5wdXRVSTIgJiYgPGgxIGNsYXNzTmFtZT0nZm9udC1tb25vIHRleHQtc20gdGV4dC1yZWQtNTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCc+VXNlciBub3QgRm91bmQhPC9oMT59XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSB3LTU2IGgtNyByb3VuZGVkLXNtICAke2lucHV0QWxlcnQyICYmICdiZy1ncmVlbi01MDAnfWB9PnsoaW5wdXRBbGVydDIgPyAnVXNlciBtYXRjaGVkIHN1Y2Nlc3NmdWxseSEnIDogJ1NlYXJjaCcpfTwvYnV0dG9uPlxuXG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIHtpbnB1dEFsZXJ0MiAmJiA8YnV0dG9uIGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCB0ZXh0LXB1cnBsZS03MDAgZm9udC1zZW1pYm9sZCBmb250LW1vbm8gYmctZ3JheS0yMDAgYWN0aXZlOmFuaW1hdGUtcGluZyAnIG9uQ2xpY2s9eygpID0+IHNldE1lc3NhZ2VEaXNwbGF5KHRydWUpfT5cbiAgICAgICAgICAgIFN0YXJ0IG1lc3NhZ2luZzwvYnV0dG9uPn1cbiAgICAgICAgPC9kaXY+KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==