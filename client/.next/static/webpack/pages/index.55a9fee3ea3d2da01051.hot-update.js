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
            className: "h-7 relative"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 17
          }, this), chat === null || chat === void 0 ? void 0 : chat.map(function (item) {
            if (item.type === 'mine') {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "bg-gray-300 text-right pr-4 w-max px-3 rounded-full mb-2 h-9 pt-1 font-mono text-gray-800 text-xl mr-2 mt-2 absolute right-0 space-y-12",
                children: item === null || item === void 0 ? void 0 : item.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 28
              }, _this);
            } else {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "bg-purple-600 text-left text-white pl-2 w-max rounded-full h-9 px-3 font-mono text-xl mt-2 pt-1 ",
                children: item === null || item === void 0 ? void 0 : item.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 28
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInNvY2tldCIsInVzZVJlZiIsInVzZXJSZWYiLCJyZWNlaXZlclJlZiIsIm1lc3NhZ2VSZWYiLCJ1c2VTdGF0ZSIsImlucHV0QWxlcnQiLCJzZXRJbnB1dEFsZXJ0IiwiaW5wdXRVSSIsInNldElucHV0VUkiLCJpbnB1dEFsZXJ0MiIsInNldElucHV0QWxlcnQyIiwiaW5wdXRVSTIiLCJzZXRJbnB1dFVJMiIsIm1lc3NhZ2VEaXNwbGF5Iiwic2V0TWVzc2FnZURpc3BsYXkiLCJtc2ciLCJzZXRNc2ciLCJvd25Nc2ciLCJzZXRPd25Nc2ciLCJ1c2VyIiwic2V0VXNlciIsInJlY2VpdmVyIiwic2V0UmVjZWl2ZXIiLCJkaXNjb25uZWN0Iiwic2V0RGlzY29ubmVjdCIsImNoYXQiLCJzZXRDaGF0IiwibWVzc2FnZU9iaiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJpbyIsIm9uIiwiZGF0YSIsInVzZXJIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1pdCIsInZhbHVlIiwicmVjZWl2ZXJIYW5kbGVyIiwibWVzc2FnZUhhbmRsZXIiLCJ1c2VyTmFtZSIsInJlY2VpdmVyTmFtZSIsInRleHRNZXNzYWdlIiwibWVzc2FnZSIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkNBQU0sRUFBckI7QUFDQSxNQUFNQyxPQUFPLEdBQUdELDZDQUFNLEVBQXRCO0FBQ0EsTUFBTUUsV0FBVyxHQUFHRiw2Q0FBTSxFQUExQjtBQUNBLE1BQU1HLFVBQVUsR0FBR0gsNkNBQU0sRUFBekI7O0FBSjZCLGtCQUtPSSwrQ0FBUSxDQUFDLEtBQUQsQ0FMZjtBQUFB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QUFJO0FBQVEsaUJBQVMsRUFBQyx3RkFBbEI7QUFBMkcsZUFBTyxFQUFFO0FBQUEsaUJBQU1LLGlCQUFpQixDQUFDLElBQUQsQ0FBdkI7QUFBQSxTQUFwSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Q1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnRUQ7O0dBaEp1QmhCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTVhOWZlZTNlYTNkMmRhMDEwNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaW8gfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XG4gIGNvbnN0IHVzZXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcmVjZWl2ZXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbWVzc2FnZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBbaW5wdXRBbGVydCwgc2V0SW5wdXRBbGVydF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbnB1dFVJLCBzZXRJbnB1dFVJXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0QWxlcnQyLCBzZXRJbnB1dEFsZXJ0Ml0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbnB1dFVJMiwgc2V0SW5wdXRVSTJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZURpc3BsYXksIHNldE1lc3NhZ2VEaXNwbGF5XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbXNnLCBzZXRNc2ddID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbb3duTXNnLCBzZXRPd25Nc2ddID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZWNlaXZlciwgc2V0UmVjZWl2ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGlzY29ubmVjdCwgc2V0RGlzY29ubmVjdF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NoYXQsc2V0Q2hhdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgbGV0IG1lc3NhZ2VPYmogPSBbXVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0LmN1cnJlbnQgPSBpbygnd3M6Ly9sb2NhbGhvc3Q6MzAwMScpO1xuXG4gIH0sIFtdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNvY2tldC5jdXJyZW50Lm9uKCdsZWZ0JywgZGF0YSA9PiBzZXREaXNjb25uZWN0KHRydWUpKVxuICAgIC8vIHNvY2tldC5jdXJyZW50Lm9uKCdnZXRNZXNzYWdlJywgZGF0YSA9PiB7XG4gICAgLy8gICBzZXRNc2coWy4uLm1zZywgZGF0YV0pXG4gICAgLy8gfSlcbiAgICBzb2NrZXQuY3VycmVudC5vbignZ2V0TWVzc2FnZScsIGRhdGEgPT4ge1xuICAgICAgc2V0Q2hhdChbLi4uY2hhdCwgZGF0YV0pXG4gICAgfSlcbiAgICBcbiAgfSwgW2NoYXRdKVxuXG4gIGZ1bmN0aW9uIHVzZXJIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc29ja2V0LmN1cnJlbnQuZW1pdCgnYWRkVXNlcicsIHVzZXJSZWYuY3VycmVudD8udmFsdWUpXG4gICAgc29ja2V0LmN1cnJlbnQub24oJ2dldFVzZXInLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEgPT09ICd1c2VyIGFscmVhZHkgQ3JlYXRlZCcpIHtcbiAgICAgICAgc2V0SW5wdXRBbGVydCh0cnVlKVxuICAgICAgICBzZXRJbnB1dFVJKGZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SW5wdXRBbGVydChmYWxzZSlcbiAgICAgICAgc2V0SW5wdXRVSSh0cnVlKVxuICAgICAgICBzZXRVc2VyKHVzZXJSZWYuY3VycmVudD8udmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiByZWNlaXZlckhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzb2NrZXQuY3VycmVudC5lbWl0KCdjaGVja1VzZXInLCByZWNlaXZlclJlZi5jdXJyZW50Py52YWx1ZSlcbiAgICBzb2NrZXQuY3VycmVudC5vbigndmFsaWRVc2VyJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhID09PSAndHJ1ZScpIHtcbiAgICAgICAgc2V0SW5wdXRBbGVydDIodHJ1ZSlcbiAgICAgICAgc2V0SW5wdXRVSTIoZmFsc2UpXG4gICAgICAgIHNldFJlY2VpdmVyKHJlY2VpdmVyUmVmLmN1cnJlbnQ/LnZhbHVlKVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJbnB1dFVJMih0cnVlKVxuICAgICAgICBzZXRJbnB1dEFsZXJ0MihmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGZ1bmN0aW9uIG1lc3NhZ2VIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc29ja2V0LmN1cnJlbnQuZW1pdCgnc2VuZE1lc3NhZ2UnLCB7XG4gICAgICB1c2VyTmFtZTogdXNlcixcbiAgICAgIHJlY2VpdmVyTmFtZTogcmVjZWl2ZXIsXG4gICAgICB0ZXh0TWVzc2FnZTogbWVzc2FnZVJlZi5jdXJyZW50LnZhbHVlXG4gICAgfSlcbiAgICAvLyBzb2NrZXQuY3VycmVudC5vbignZ2V0TWVzc2FnZScsIGRhdGEgPT4ge1xuICAgIC8vICAgc2V0TXNnKFsuLi5tc2csIGRhdGFdKVxuICAgIC8vIH0pXG4gICAgLy8gc2V0T3duTXNnKFsuLi5vd25Nc2csIG1lc3NhZ2VSZWYuY3VycmVudC52YWx1ZV0pXG4gICAgc2V0Q2hhdChbLi4uY2hhdCx7bWVzc2FnZTptZXNzYWdlUmVmLmN1cnJlbnQudmFsdWUsIHR5cGU6J21pbmUnfV0pXG4gICAgbWVzc2FnZVJlZi5jdXJyZW50LnZhbHVlID0gJydcblxuICAgIGNvbnNvbGUubG9nKGNoYXQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHB5LTIgYmctcHVycGxlLTYwMFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHttZXNzYWdlRGlzcGxheVxuICAgICAgICA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIHJvdW5kZWQtc20gZmxleC1jb2wgZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gdHJhY2tpbmctdGlnaHRlcic+eydZb3UgYXJlIGNoYXR0aW5nIGFzJyArIFwiIFwifSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC1wdXJwbGUtNjAwIGNhcGl0YWxpemUnPnt1c2VyfTwvc3Bhbj48L2gxPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gdHJhY2tpbmctdGlnaHRlcic+eydJbiBjb252ZXJzYXRpb24gd2l0aCcgKyBcIiBcIn0gPHNwYW4gY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIHRleHQtcHVycGxlLTYwMCBjYXBpdGFsaXplJz57cmVjZWl2ZXJ9PC9zcGFuPjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs2NTBweF0gbGc6aC1bNTAwcHhdIGJnLXdoaXRlIGZsZXgganVzdGlmeS1iZXR3ZWVuIG92ZXJmbG93LXNjcm9sbCc+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtNyByZWxhdGl2ZScgLz5cbiAgICAgICAgICAgICAgICB7Lyoge21zZz8ubWFwKChpdGVtLGluZGV4KSA9PiA8aDEga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdiZy1wdXJwbGUtNjAwIHRleHQtbGVmdCB0ZXh0LXdoaXRlIG1sLTEgcGwtMiB3LVsxNjBweF0gcm91bmRlZC1mdWxsIGgtOSBwdC0xIGZvbnQtbW9ubyB0ZXh0LXhsIG10LTEyJyA+e2l0ZW19PC9oMT4pfSAqL31cbiAgICAgICAgICAgICAgICB7Y2hhdD8ubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgICAgICAgaWYoaXRlbS50eXBlPT09J21pbmUnKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxoMSBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCB0ZXh0LXJpZ2h0IHByLTQgdy1tYXggcHgtMyByb3VuZGVkLWZ1bGwgbWItMiBoLTkgcHQtMSBmb250LW1vbm8gdGV4dC1ncmF5LTgwMCB0ZXh0LXhsIG1yLTIgbXQtMiBhYnNvbHV0ZSByaWdodC0wIHNwYWNlLXktMTJcIj57aXRlbT8ubWVzc2FnZX08L2gxPlxuICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDEgY2xhc3NOYW1lPVwiYmctcHVycGxlLTYwMCB0ZXh0LWxlZnQgdGV4dC13aGl0ZSBwbC0yIHctbWF4IHJvdW5kZWQtZnVsbCBoLTkgcHgtMyBmb250LW1vbm8gdGV4dC14bCBtdC0yIHB0LTEgXCIgPntpdGVtPy5tZXNzYWdlfTwvaDE+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICB7Lyoge293bk1zZz8ubWFwKChpdGVtLGluZGV4KSA9PiA8aDEga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS0zMDAgdGV4dC1yaWdodCBwci00IHctWzE2MHB4XSByb3VuZGVkLWZ1bGwgbWItMiBoLTkgcHQtMSBmb250LW1vbm8gdGV4dC1ncmF5LTgwMCB0ZXh0LXhsIG1yLTIgbXQtMTAnPntpdGVtfTwvaDE+KX0gICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7ZGlzY29ubmVjdCAmJiA8aDEgY2xhc3NOYW1lPSd0ZXh0LXJlZC04MDAgdW5kZXJsaW5lIHRleHQteHMgbXgtYXV0byBwdC00IGFic29sdXRlIGJvdHRvbS0yMCBsZWZ0LTI4IGxnOmxlZnQtWzYxNXB4XSc+VGhlIFVzZXIgbGVmdCB0aGUgY2hhdC48L2gxPn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgdy1bMzcwcHhdIGJnLXdoaXRlIHNoYWRvdy0yeGwnPlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17bWVzc2FnZUhhbmRsZXJ9IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGF1dG9Db21wbGV0ZT0nb2ZmJyBuYW1lPSdtZXNzYWdlJyByZWY9e21lc3NhZ2VSZWZ9IHJlcXVpcmVkIGNsYXNzTmFtZT0nYm9yZGVyLTIgYm9yZGVyLXB1cnBsZS02MDAgb3V0bGluZS1ub25lIGZvY3VzLXdpdGhpbjpvdXRsaW5lLW5vbmUgdy1bMjcwcHhdIGgtMTAnIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3ctWzEwMHB4XSBiZy1wdXJwbGUtNjAwIHRleHQtd2hpdGUgZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgdGV4dC14bCBib3JkZXIgYm9yZGVyLXdoaXRlJz5TZW5kPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgIDogKDxkaXYgY2xhc3NOYW1lPSdoLTY0IHctNjQgZmxleCBmbGV4LWNvbCBiZy13aGl0ZSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LTJ4bCByb3VuZGVkLXNtIHNwYWNlLXktMic+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHNwYWNlLXktMScgb25TdWJtaXQ9e3VzZXJIYW5kbGVyfT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSd1c2VybmFtZScgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlci1iIGJvcmRlci1ncmF5LTYwMCBmb2N1cy13aXRoaW46Ym9yZGVyLXB1cnBsZS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci1iLTIgdHJhbnNpdGlvbi1hbGwgaC04JyBwbGFjZWhvbGRlcj0nTmV3IFVzZXJuYW1lJyByZWY9e3VzZXJSZWZ9IC8+XG4gICAgICAgICAgICB7aW5wdXRBbGVydCAmJiA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gdGV4dC1zbSB0ZXh0LXJlZC01MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwJz5Vc2VybmFtZSBhbHJlYWR5IHRha2VuITwvaDE+fVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSB3LTU2IGgtNyByb3VuZGVkLXNtJz57aW5wdXRVSVxuICAgICAgICAgICAgICA/ICg8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtY2VudGVyIG1sLTI0IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17Mn0gZD1cIk05IDEybDIgMiA0LTRtNiAyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPilcbiAgICAgICAgICAgICAgOiBcIkVudGVyXCJ9PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZmxleC1jb2wgZmxleCBzcGFjZS15LTEnIG9uU3VibWl0PXtyZWNlaXZlckhhbmRsZXJ9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J3JlY2VpdmVyJyBhdXRvQ29tcGxldGU9XCJvZmZcIiBwbGFjZWhvbGRlcj0nRmluZCBieSBVc2VybmFtZSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlci1iIGJvcmRlci1ncmF5LTYwMCBmb2N1cy13aXRoaW46Ym9yZGVyLXB1cnBsZS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci1iLTIgdHJhbnNpdGlvbi1hbGwgaC04JyByZWY9e3JlY2VpdmVyUmVmfSAvPlxuICAgICAgICAgICAge2lucHV0VUkyICYmIDxoMSBjbGFzc05hbWU9J2ZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtcmVkLTUwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAnPlVzZXIgbm90IEZvdW5kITwvaDE+fVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BiZy1wdXJwbGUtNjAwIHRleHQtd2hpdGUgdy01NiBoLTcgcm91bmRlZC1zbSAgJHtpbnB1dEFsZXJ0MiAmJiAnYmctZ3JlZW4tNTAwJ31gfT57KGlucHV0QWxlcnQyID8gJ1VzZXIgbWF0Y2hlZCBzdWNjZXNzZnVsbHkhJyA6ICdTZWFyY2gnKX08L2J1dHRvbj5cblxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICB7aW5wdXRBbGVydDIgJiYgPGJ1dHRvbiBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgdGV4dC1wdXJwbGUtNzAwIGZvbnQtc2VtaWJvbGQgZm9udC1tb25vIGJnLWdyYXktMjAwIGFjdGl2ZTphbmltYXRlLXBpbmcgJyBvbkNsaWNrPXsoKSA9PiBzZXRNZXNzYWdlRGlzcGxheSh0cnVlKX0+XG4gICAgICAgICAgICBTdGFydCBtZXNzYWdpbmc8L2J1dHRvbj59XG4gICAgICAgIDwvZGl2Pil9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=