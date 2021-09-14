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

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      msg = _useState6[0],
      setMsg = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      ownMsg = _useState7[0],
      setOwnMsg = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      user = _useState8[0],
      setUser = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      receiver = _useState9[0],
      setReceiver = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      disconnect = _useState10[0],
      setDisconnect = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      chat = _useState11[0],
      setChat = _useState11[1];

  var messageObj = [];
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_4__.io)('ws://localhost:3001');
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    socket.current.on('left', function (data) {
      return setDisconnect(true);
    }); // socket.current.on('getMessage', data => {
    //   setMsg([...msg, data])
    // })

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
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
            lineNumber: 97,
            columnNumber: 88
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "font-mono tracking-tighter",
          children: ['In conversation with' + " ", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "font-semibold text-purple-600 capitalize",
            children: receiver
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 89
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "h-[650px] lg:h-[500px] bg-white flex justify-between overflow-scroll",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "h-7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 17
          }, this), chat === null || chat === void 0 ? void 0 : chat.map(function (item) {
            if (item.type === 'mine') {
              /*#__PURE__*/
              (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "text-yellow-300",
                children: "item?.message"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 21
              }, _this);
            } else {
              /*#__PURE__*/
              (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "text-red-500",
                children: "item?.message"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 21
              }, _this);
            }
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }, this), disconnect && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-red-800 underline text-xs mx-auto pt-4 absolute bottom-20 left-28 lg:left-[615px]",
        children: "The User left the chat."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
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
            lineNumber: 121,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "w-[100px] bg-purple-600 text-white font-mono font-semibold text-xl border border-white",
            children: "Send"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
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
          lineNumber: 129,
          columnNumber: 13
        }, this), inputAlert && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "font-mono text-sm text-red-500 transition-all duration-300",
          children: "Username already taken!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
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
              lineNumber: 134,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 18
          }, this) : "Enter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
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
          lineNumber: 139,
          columnNumber: 13
        }, this), inputUI2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "font-mono text-sm text-red-500 transition-all duration-300",
          children: "User not Found!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 26
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "bg-purple-600 text-white w-56 h-7 rounded-sm  ".concat(inputAlert2 && 'bg-green-500'),
          children: inputAlert2 ? 'User matched successfully!' : 'Search'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }, this), inputAlert2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "w-full h-full text-purple-700 font-semibold font-mono bg-gray-200 active:animate-ping ",
        onClick: function onClick() {
          return setMessageDisplay(true);
        },
        children: "Start messaging"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 27
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, this);
}

_s(Home, "4QVAA79+2J0M6fKkuB60Qa7POog=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInNvY2tldCIsInVzZVJlZiIsInVzZXJSZWYiLCJyZWNlaXZlclJlZiIsIm1lc3NhZ2VSZWYiLCJ1c2VTdGF0ZSIsImlucHV0QWxlcnQiLCJzZXRJbnB1dEFsZXJ0IiwiaW5wdXRVSSIsInNldElucHV0VUkiLCJpbnB1dEFsZXJ0MiIsInNldElucHV0QWxlcnQyIiwiaW5wdXRVSTIiLCJzZXRJbnB1dFVJMiIsIm1lc3NhZ2VEaXNwbGF5Iiwic2V0TWVzc2FnZURpc3BsYXkiLCJtc2ciLCJzZXRNc2ciLCJvd25Nc2ciLCJzZXRPd25Nc2ciLCJ1c2VyIiwic2V0VXNlciIsInJlY2VpdmVyIiwic2V0UmVjZWl2ZXIiLCJkaXNjb25uZWN0Iiwic2V0RGlzY29ubmVjdCIsImNoYXQiLCJzZXRDaGF0IiwibWVzc2FnZU9iaiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJpbyIsIm9uIiwiZGF0YSIsInVzZXJIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1pdCIsInZhbHVlIiwicmVjZWl2ZXJIYW5kbGVyIiwibWVzc2FnZUhhbmRsZXIiLCJ1c2VyTmFtZSIsInJlY2VpdmVyTmFtZSIsInRleHRNZXNzYWdlIiwibWVzc2FnZSIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkNBQU0sRUFBckI7QUFDQSxNQUFNQyxPQUFPLEdBQUdELDZDQUFNLEVBQXRCO0FBQ0EsTUFBTUUsV0FBVyxHQUFHRiw2Q0FBTSxFQUExQjtBQUNBLE1BQU1HLFVBQVUsR0FBR0gsNkNBQU0sRUFBekI7O0FBSjZCLGtCQUtPSSwrQ0FBUSxDQUFDLEtBQUQsQ0FMZjtBQUFB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QUFBQTtBQUFBLGNBbEJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdFRDs7R0FoSnVCaEIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNWE0OTczNjY1ZDk3OGNkODZiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBzb2NrZXQgPSB1c2VSZWYoKTtcbiAgY29uc3QgdXNlclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCByZWNlaXZlclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBtZXNzYWdlUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtpbnB1dEFsZXJ0LCBzZXRJbnB1dEFsZXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0VUksIHNldElucHV0VUldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5wdXRBbGVydDIsIHNldElucHV0QWxlcnQyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0VUkyLCBzZXRJbnB1dFVJMl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZXNzYWdlRGlzcGxheSwgc2V0TWVzc2FnZURpc3BsYXldID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFttc2csIHNldE1zZ10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtvd25Nc2csIHNldE93bk1zZ10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JlY2VpdmVyLCBzZXRSZWNlaXZlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkaXNjb25uZWN0LCBzZXREaXNjb25uZWN0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY2hhdCxzZXRDaGF0XSA9IHVzZVN0YXRlKFtdKTtcblxuICBsZXQgbWVzc2FnZU9iaiA9IFtdXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQuY3VycmVudCA9IGlvKCd3czovL2xvY2FsaG9zdDozMDAxJyk7XG5cbiAgfSwgW10pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0LmN1cnJlbnQub24oJ2xlZnQnLCBkYXRhID0+IHNldERpc2Nvbm5lY3QodHJ1ZSkpXG4gICAgLy8gc29ja2V0LmN1cnJlbnQub24oJ2dldE1lc3NhZ2UnLCBkYXRhID0+IHtcbiAgICAvLyAgIHNldE1zZyhbLi4ubXNnLCBkYXRhXSlcbiAgICAvLyB9KVxuICAgIHNvY2tldC5jdXJyZW50Lm9uKCdnZXRNZXNzYWdlJywgZGF0YSA9PiB7XG4gICAgICBzZXRDaGF0KFsuLi5jaGF0LCBkYXRhXSlcbiAgICB9KVxuICAgIFxuICB9LCBbY2hhdF0pXG5cbiAgZnVuY3Rpb24gdXNlckhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzb2NrZXQuY3VycmVudC5lbWl0KCdhZGRVc2VyJywgdXNlclJlZi5jdXJyZW50Py52YWx1ZSlcbiAgICBzb2NrZXQuY3VycmVudC5vbignZ2V0VXNlcicsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBpZiAoZGF0YSA9PT0gJ3VzZXIgYWxyZWFkeSBDcmVhdGVkJykge1xuICAgICAgICBzZXRJbnB1dEFsZXJ0KHRydWUpXG4gICAgICAgIHNldElucHV0VUkoZmFsc2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJbnB1dEFsZXJ0KGZhbHNlKVxuICAgICAgICBzZXRJbnB1dFVJKHRydWUpXG4gICAgICAgIHNldFVzZXIodXNlclJlZi5jdXJyZW50Py52YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGZ1bmN0aW9uIHJlY2VpdmVySGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNvY2tldC5jdXJyZW50LmVtaXQoJ2NoZWNrVXNlcicsIHJlY2VpdmVyUmVmLmN1cnJlbnQ/LnZhbHVlKVxuICAgIHNvY2tldC5jdXJyZW50Lm9uKCd2YWxpZFVzZXInLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEgPT09ICd0cnVlJykge1xuICAgICAgICBzZXRJbnB1dEFsZXJ0Mih0cnVlKVxuICAgICAgICBzZXRJbnB1dFVJMihmYWxzZSlcbiAgICAgICAgc2V0UmVjZWl2ZXIocmVjZWl2ZXJSZWYuY3VycmVudD8udmFsdWUpXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldElucHV0VUkyKHRydWUpXG4gICAgICAgIHNldElucHV0QWxlcnQyKGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZnVuY3Rpb24gbWVzc2FnZUhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzb2NrZXQuY3VycmVudC5lbWl0KCdzZW5kTWVzc2FnZScsIHtcbiAgICAgIHVzZXJOYW1lOiB1c2VyLFxuICAgICAgcmVjZWl2ZXJOYW1lOiByZWNlaXZlcixcbiAgICAgIHRleHRNZXNzYWdlOiBtZXNzYWdlUmVmLmN1cnJlbnQudmFsdWVcbiAgICB9KVxuICAgIC8vIHNvY2tldC5jdXJyZW50Lm9uKCdnZXRNZXNzYWdlJywgZGF0YSA9PiB7XG4gICAgLy8gICBzZXRNc2coWy4uLm1zZywgZGF0YV0pXG4gICAgLy8gfSlcbiAgICAvLyBzZXRPd25Nc2coWy4uLm93bk1zZywgbWVzc2FnZVJlZi5jdXJyZW50LnZhbHVlXSlcbiAgICBzZXRDaGF0KFsuLi5jaGF0LHttZXNzYWdlOm1lc3NhZ2VSZWYuY3VycmVudC52YWx1ZSwgdHlwZTonbWluZSd9XSlcbiAgICBtZXNzYWdlUmVmLmN1cnJlbnQudmFsdWUgPSAnJ1xuXG4gICAgY29uc29sZS5sb2coY2hhdClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gcHktMiBiZy1wdXJwbGUtNjAwXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAge21lc3NhZ2VEaXNwbGF5XG4gICAgICAgID8gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUgcm91bmRlZC1zbSBmbGV4LWNvbCBmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtbW9ubyB0cmFja2luZy10aWdodGVyJz57J1lvdSBhcmUgY2hhdHRpbmcgYXMnICsgXCIgXCJ9IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCB0ZXh0LXB1cnBsZS02MDAgY2FwaXRhbGl6ZSc+e3VzZXJ9PC9zcGFuPjwvaDE+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtbW9ubyB0cmFja2luZy10aWdodGVyJz57J0luIGNvbnZlcnNhdGlvbiB3aXRoJyArIFwiIFwifSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC1wdXJwbGUtNjAwIGNhcGl0YWxpemUnPntyZWNlaXZlcn08L3NwYW4+PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzY1MHB4XSBsZzpoLVs1MDBweF0gYmctd2hpdGUgZmxleCBqdXN0aWZ5LWJldHdlZW4gb3ZlcmZsb3ctc2Nyb2xsJz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC03JyAvPlxuICAgICAgICAgICAgICAgIHsvKiB7bXNnPy5tYXAoKGl0ZW0saW5kZXgpID0+IDxoMSBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2JnLXB1cnBsZS02MDAgdGV4dC1sZWZ0IHRleHQtd2hpdGUgbWwtMSBwbC0yIHctWzE2MHB4XSByb3VuZGVkLWZ1bGwgaC05IHB0LTEgZm9udC1tb25vIHRleHQteGwgbXQtMTInID57aXRlbX08L2gxPil9ICovfVxuICAgICAgICAgICAgICAgIHtjaGF0Py5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgICAgICAgICBpZihpdGVtLnR5cGU9PT0nbWluZScpe1xuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctMzAwXCI+aXRlbT8ubWVzc2FnZTwvaDE+XG4gICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPml0ZW0/Lm1lc3NhZ2U8L2gxPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgey8qIHtvd25Nc2c/Lm1hcCgoaXRlbSxpbmRleCkgPT4gPGgxIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktMzAwIHRleHQtcmlnaHQgcHItNCB3LVsxNjBweF0gcm91bmRlZC1mdWxsIG1iLTIgaC05IHB0LTEgZm9udC1tb25vIHRleHQtZ3JheS04MDAgdGV4dC14bCBtci0yIG10LTEwJz57aXRlbX08L2gxPil9ICAqL31cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2Rpc2Nvbm5lY3QgJiYgPGgxIGNsYXNzTmFtZT0ndGV4dC1yZWQtODAwIHVuZGVybGluZSB0ZXh0LXhzIG14LWF1dG8gcHQtNCBhYnNvbHV0ZSBib3R0b20tMjAgbGVmdC0yOCBsZzpsZWZ0LVs2MTVweF0nPlRoZSBVc2VyIGxlZnQgdGhlIGNoYXQuPC9oMT59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHctWzM3MHB4XSBiZy13aGl0ZSBzaGFkb3ctMnhsJz5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e21lc3NhZ2VIYW5kbGVyfSBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBhdXRvQ29tcGxldGU9J29mZicgbmFtZT0nbWVzc2FnZScgcmVmPXttZXNzYWdlUmVmfSByZXF1aXJlZCBjbGFzc05hbWU9J2JvcmRlci0yIGJvcmRlci1wdXJwbGUtNjAwIG91dGxpbmUtbm9uZSBmb2N1cy13aXRoaW46b3V0bGluZS1ub25lIHctWzI3MHB4XSBoLTEwJyAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3LVsxMDBweF0gYmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtbW9ubyBmb250LXNlbWlib2xkIHRleHQteGwgYm9yZGVyIGJvcmRlci13aGl0ZSc+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICA6ICg8ZGl2IGNsYXNzTmFtZT0naC02NCB3LTY0IGZsZXggZmxleC1jb2wgYmctd2hpdGUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy0yeGwgcm91bmRlZC1zbSBzcGFjZS15LTInPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBzcGFjZS15LTEnIG9uU3VibWl0PXt1c2VySGFuZGxlcn0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0ndXNlcm5hbWUnIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXItYiBib3JkZXItZ3JheS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci1wdXJwbGUtNjAwIGZvY3VzLXdpdGhpbjpib3JkZXItYi0yIHRyYW5zaXRpb24tYWxsIGgtOCcgcGxhY2Vob2xkZXI9J05ldyBVc2VybmFtZScgcmVmPXt1c2VyUmVmfSAvPlxuICAgICAgICAgICAge2lucHV0QWxlcnQgJiYgPGgxIGNsYXNzTmFtZT0nZm9udC1tb25vIHRleHQtc20gdGV4dC1yZWQtNTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCc+VXNlcm5hbWUgYWxyZWFkeSB0YWtlbiE8L2gxPn1cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1wdXJwbGUtNjAwIHRleHQtd2hpdGUgdy01NiBoLTcgcm91bmRlZC1zbSc+e2lucHV0VUlcbiAgICAgICAgICAgICAgPyAoPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LWNlbnRlciBtbC0yNCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNOSAxMmwyIDIgNC00bTYgMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz4pXG4gICAgICAgICAgICAgIDogXCJFbnRlclwifTwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2ZsZXgtY29sIGZsZXggc3BhY2UteS0xJyBvblN1Ym1pdD17cmVjZWl2ZXJIYW5kbGVyfT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdyZWNlaXZlcicgYXV0b0NvbXBsZXRlPVwib2ZmXCIgcGxhY2Vob2xkZXI9J0ZpbmQgYnkgVXNlcm5hbWUnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXItYiBib3JkZXItZ3JheS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci1wdXJwbGUtNjAwIGZvY3VzLXdpdGhpbjpib3JkZXItYi0yIHRyYW5zaXRpb24tYWxsIGgtOCcgcmVmPXtyZWNlaXZlclJlZn0gLz5cbiAgICAgICAgICAgIHtpbnB1dFVJMiAmJiA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gdGV4dC1zbSB0ZXh0LXJlZC01MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwJz5Vc2VyIG5vdCBGb3VuZCE8L2gxPn1cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlIHctNTYgaC03IHJvdW5kZWQtc20gICR7aW5wdXRBbGVydDIgJiYgJ2JnLWdyZWVuLTUwMCd9YH0+eyhpbnB1dEFsZXJ0MiA/ICdVc2VyIG1hdGNoZWQgc3VjY2Vzc2Z1bGx5IScgOiAnU2VhcmNoJyl9PC9idXR0b24+XG5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAge2lucHV0QWxlcnQyICYmIDxidXR0b24gY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIHRleHQtcHVycGxlLTcwMCBmb250LXNlbWlib2xkIGZvbnQtbW9ubyBiZy1ncmF5LTIwMCBhY3RpdmU6YW5pbWF0ZS1waW5nICcgb25DbGljaz17KCkgPT4gc2V0TWVzc2FnZURpc3BsYXkodHJ1ZSl9PlxuICAgICAgICAgICAgU3RhcnQgbWVzc2FnaW5nPC9idXR0b24+fVxuICAgICAgICA8L2Rpdj4pfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9