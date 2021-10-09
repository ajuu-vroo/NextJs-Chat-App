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
      children: "hello"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInNvY2tldCIsInVzZVJlZiIsInVzZXJSZWYiLCJyZWNlaXZlclJlZiIsIm1lc3NhZ2VSZWYiLCJ1c2VTdGF0ZSIsImlucHV0QWxlcnQiLCJzZXRJbnB1dEFsZXJ0IiwiaW5wdXRVSSIsInNldElucHV0VUkiLCJpbnB1dEFsZXJ0MiIsInNldElucHV0QWxlcnQyIiwiaW5wdXRVSTIiLCJzZXRJbnB1dFVJMiIsIm1lc3NhZ2VEaXNwbGF5Iiwic2V0TWVzc2FnZURpc3BsYXkiLCJ1c2VyIiwic2V0VXNlciIsInJlY2VpdmVyIiwic2V0UmVjZWl2ZXIiLCJkaXNjb25uZWN0Iiwic2V0RGlzY29ubmVjdCIsImNoYXQiLCJzZXRDaGF0IiwidXNlRWZmZWN0IiwiY3VycmVudCIsImlvIiwib24iLCJkYXRhIiwidXNlckhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwidmFsdWUiLCJyZWNlaXZlckhhbmRsZXIiLCJtZXNzYWdlSGFuZGxlciIsInVzZXJOYW1lIiwicmVjZWl2ZXJOYW1lIiwidGV4dE1lc3NhZ2UiLCJtZXNzYWdlIiwidHlwZSIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxNQUFNLEdBQUdDLDZDQUFNLEVBQXJCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRCw2Q0FBTSxFQUF0QjtBQUNBLE1BQU1FLFdBQVcsR0FBR0YsNkNBQU0sRUFBMUI7QUFDQSxNQUFNRyxVQUFVLEdBQUdILDZDQUFNLEVBQXpCOztBQUo2QixrQkFLT0ksK0NBQVEsQ0FBQyxLQUFELENBTGY7QUFBQSxNQUt0QkMsVUFMc0I7QUFBQSxNQUtWQyxhQUxVOztBQUFBLG1CQU1DRiwrQ0FBUSxDQUFDLEtBQUQsQ0FOVDtB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QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURDLGVBV0Q7QUFBTSxpQkFBUyxFQUFDLHlCQUFoQjtBQUEwQyxnQkFBUSxFQUFFMEIsZUFBcEQ7QUFBQSxnQ0FDRTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLGNBQUksRUFBQyxVQUF4QjtBQUFtQyxzQkFBWSxFQUFDLEtBQWhEO0FBQXNELHFCQUFXLEVBQUMsa0JBQWxFO0FBQ0UsbUJBQVMsRUFBQyxvSUFEWjtBQUNpSixhQUFHLEVBQUUvQjtBQUR0SjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBR0dTLFFBQVEsaUJBQUk7QUFBSSxtQkFBUyxFQUFDLDREQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhmLGVBSUU7QUFBUSxtQkFBUywwREFBbURGLFdBQVcsSUFBSSxjQUFsRSxDQUFqQjtBQUFBLG9CQUF1R0EsV0FBVyxHQUFHLDRCQUFILEdBQWtDO0FBQXBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEMsRUFrQkFBLFdBQVcsaUJBQUk7QUFBUSxpQkFBUyxFQUFDLHdGQUFsQjtBQUEyRyxlQUFPLEVBQUU7QUFBQSxpQkFBTUssaUJBQWlCLENBQUMsSUFBRCxDQUF2QjtBQUFBLFNBQXBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5DUCxlQXdESTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThERDs7R0F2SXVCaEIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yYmQzYjdhOTZjYmIwOWFiNGQ0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBzb2NrZXQgPSB1c2VSZWYoKTtcbiAgY29uc3QgdXNlclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCByZWNlaXZlclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBtZXNzYWdlUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtpbnB1dEFsZXJ0LCBzZXRJbnB1dEFsZXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0VUksIHNldElucHV0VUldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5wdXRBbGVydDIsIHNldElucHV0QWxlcnQyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0VUkyLCBzZXRJbnB1dFVJMl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZXNzYWdlRGlzcGxheSwgc2V0TWVzc2FnZURpc3BsYXldID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JlY2VpdmVyLCBzZXRSZWNlaXZlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkaXNjb25uZWN0LCBzZXREaXNjb25uZWN0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY2hhdCxzZXRDaGF0XSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNvY2tldC5jdXJyZW50ID0gaW8oJ3dzOi8vbG9jYWxob3N0OjMwMDEnKTtcblxuICB9LCBbXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBzb2NrZXQuY3VycmVudC5vbignbGVmdCcsIGRhdGEgPT4gc2V0RGlzY29ubmVjdCh0cnVlKSlcbiAgICBzb2NrZXQuY3VycmVudC5vbignZ2V0TWVzc2FnZScsIGRhdGEgPT4ge1xuICAgICAgc2V0Q2hhdChbLi4uY2hhdCwgZGF0YV0pXG4gICAgfSlcbiAgICBcbiAgfSwgW2NoYXRdKVxuXG4gIGZ1bmN0aW9uIHVzZXJIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc29ja2V0LmN1cnJlbnQuZW1pdCgnYWRkVXNlcicsIHVzZXJSZWYuY3VycmVudD8udmFsdWUpXG4gICAgc29ja2V0LmN1cnJlbnQub24oJ2dldFVzZXInLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEgPT09ICd1c2VyIGFscmVhZHkgQ3JlYXRlZCcpIHtcbiAgICAgICAgc2V0SW5wdXRBbGVydCh0cnVlKVxuICAgICAgICBzZXRJbnB1dFVJKGZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SW5wdXRBbGVydChmYWxzZSlcbiAgICAgICAgc2V0SW5wdXRVSSh0cnVlKVxuICAgICAgICBzZXRVc2VyKHVzZXJSZWYuY3VycmVudD8udmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiByZWNlaXZlckhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzb2NrZXQuY3VycmVudC5lbWl0KCdjaGVja1VzZXInLCByZWNlaXZlclJlZi5jdXJyZW50Py52YWx1ZSlcbiAgICBzb2NrZXQuY3VycmVudC5vbigndmFsaWRVc2VyJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhID09PSAndHJ1ZScpIHtcbiAgICAgICAgc2V0SW5wdXRBbGVydDIodHJ1ZSlcbiAgICAgICAgc2V0SW5wdXRVSTIoZmFsc2UpXG4gICAgICAgIHNldFJlY2VpdmVyKHJlY2VpdmVyUmVmLmN1cnJlbnQ/LnZhbHVlKVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJbnB1dFVJMih0cnVlKVxuICAgICAgICBzZXRJbnB1dEFsZXJ0MihmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGZ1bmN0aW9uIG1lc3NhZ2VIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc29ja2V0LmN1cnJlbnQuZW1pdCgnc2VuZE1lc3NhZ2UnLCB7XG4gICAgICB1c2VyTmFtZTogdXNlcixcbiAgICAgIHJlY2VpdmVyTmFtZTogcmVjZWl2ZXIsXG4gICAgICB0ZXh0TWVzc2FnZTogbWVzc2FnZVJlZi5jdXJyZW50LnZhbHVlXG4gICAgfSlcbiAgICAvLyBzb2NrZXQuY3VycmVudC5vbignZ2V0TWVzc2FnZScsIGRhdGEgPT4ge1xuICAgIC8vICAgc2V0TXNnKFsuLi5tc2csIGRhdGFdKVxuICAgIC8vIH0pXG4gICAgLy8gc2V0T3duTXNnKFsuLi5vd25Nc2csIG1lc3NhZ2VSZWYuY3VycmVudC52YWx1ZV0pXG4gICAgc2V0Q2hhdChbLi4uY2hhdCx7bWVzc2FnZTptZXNzYWdlUmVmLmN1cnJlbnQudmFsdWUsIHR5cGU6J21pbmUnfV0pXG4gICAgbWVzc2FnZVJlZi5jdXJyZW50LnZhbHVlID0gJydcblxuICAgIC8vIGNvbnNvbGUubG9nKGNoYXQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHB5LTIgYmctcHVycGxlLTYwMFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHttZXNzYWdlRGlzcGxheVxuICAgICAgICA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIHJvdW5kZWQtc20gZmxleC1jb2wgZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gdHJhY2tpbmctdGlnaHRlcic+eydZb3UgYXJlIGNoYXR0aW5nIGFzJyArIFwiIFwifSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC1wdXJwbGUtNjAwIGNhcGl0YWxpemUnPnt1c2VyfTwvc3Bhbj48L2gxPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gdHJhY2tpbmctdGlnaHRlcic+eydJbiBjb252ZXJzYXRpb24gd2l0aCcgKyBcIiBcIn0gPHNwYW4gY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIHRleHQtcHVycGxlLTYwMCBjYXBpdGFsaXplJz57cmVjZWl2ZXJ9PC9zcGFuPjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs2NTBweF0gbGc6aC1bNTAwcHhdIGJnLXdoaXRlIGZsZXgganVzdGlmeS1iZXR3ZWVuIG92ZXJmbG93LXNjcm9sbCc+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtNyByZWxhdGl2ZScgLz5cbiAgICAgICAgICAgICAgICB7Y2hhdD8ubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgICAgICAgaWYoaXRlbS50eXBlPT09J21pbmUnKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxoMSBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCB0ZXh0LXJpZ2h0IHByLTQgdy1bMTUwcHhdIHB4LTMgcm91bmRlZC0yeGwgbWItMiBwdC0xIGZvbnQtbW9ubyB0ZXh0LWdyYXktODAwIHRleHQteGwgbWwtNTIgbXQtMiByb3VuZGVkLWJyLW5vbmUgaC1hdXRvXCI+e2l0ZW0/Lm1lc3NhZ2V9PC9oMT5cbiAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGgxIGNsYXNzTmFtZT1cImJnLXB1cnBsZS02MDAgdGV4dC1sZWZ0IHRleHQtd2hpdGUgcGwtNCB3LVsxNTBweF0gcm91bmRlZC0yeGwgcHgtMyBmb250LW1vbm8gdGV4dC14bCBtdC0yIHB0LTEgbWwtMSByb3VuZGVkLWJsLW5vbmUgaC1hdXRvXCIgPntpdGVtPy5tZXNzYWdlfTwvaDE+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtkaXNjb25uZWN0ICYmIDxoMSBjbGFzc05hbWU9J3RleHQtcmVkLTgwMCB1bmRlcmxpbmUgdGV4dC14cyBteC1hdXRvIHB0LTQgYWJzb2x1dGUgYm90dG9tLTIwIGxlZnQtMjggbGc6bGVmdC1bNjE1cHhdJz5UaGUgVXNlciBsZWZ0IHRoZSBjaGF0LjwvaDE+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyB3LVszNzBweF0gYmctd2hpdGUgc2hhZG93LTJ4bCc+XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXttZXNzYWdlSGFuZGxlcn0gY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgYXV0b0NvbXBsZXRlPSdvZmYnIG5hbWU9J21lc3NhZ2UnIHJlZj17bWVzc2FnZVJlZn0gcmVxdWlyZWQgY2xhc3NOYW1lPSdib3JkZXItMiBib3JkZXItcHVycGxlLTYwMCBvdXRsaW5lLW5vbmUgZm9jdXMtd2l0aGluOm91dGxpbmUtbm9uZSB3LVsyNzBweF0gaC0xMCcgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndy1bMTAwcHhdIGJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBmb250LW1vbm8gZm9udC1zZW1pYm9sZCB0ZXh0LXhsIGJvcmRlciBib3JkZXItd2hpdGUnPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICAgOiAoPGRpdiBjbGFzc05hbWU9J2gtNjQgdy02NCBmbGV4IGZsZXgtY29sIGJnLXdoaXRlIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaGFkb3ctMnhsIHJvdW5kZWQtc20gc3BhY2UteS0yJz5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgc3BhY2UteS0xJyBvblN1Ym1pdD17dXNlckhhbmRsZXJ9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J3VzZXJuYW1lJyBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9J291dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyLWIgYm9yZGVyLWdyYXktNjAwIGZvY3VzLXdpdGhpbjpib3JkZXItcHVycGxlLTYwMCBmb2N1cy13aXRoaW46Ym9yZGVyLWItMiB0cmFuc2l0aW9uLWFsbCBoLTgnIHBsYWNlaG9sZGVyPSdOZXcgVXNlcm5hbWUnIHJlZj17dXNlclJlZn0gLz5cbiAgICAgICAgICAgIHtpbnB1dEFsZXJ0ICYmIDxoMSBjbGFzc05hbWU9J2ZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtcmVkLTUwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAnPlVzZXJuYW1lIGFscmVhZHkgdGFrZW4hPC9oMT59XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlIHctNTYgaC03IHJvdW5kZWQtc20nPntpbnB1dFVJXG4gICAgICAgICAgICAgID8gKDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1jZW50ZXIgbWwtMjQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTkgMTJsMiAyIDQtNG02IDJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+KVxuICAgICAgICAgICAgICA6IFwiRW50ZXJcIn08L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmbGV4LWNvbCBmbGV4IHNwYWNlLXktMScgb25TdWJtaXQ9e3JlY2VpdmVySGFuZGxlcn0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0ncmVjZWl2ZXInIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHBsYWNlaG9sZGVyPSdGaW5kIGJ5IFVzZXJuYW1lJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J291dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyLWIgYm9yZGVyLWdyYXktNjAwIGZvY3VzLXdpdGhpbjpib3JkZXItcHVycGxlLTYwMCBmb2N1cy13aXRoaW46Ym9yZGVyLWItMiB0cmFuc2l0aW9uLWFsbCBoLTgnIHJlZj17cmVjZWl2ZXJSZWZ9IC8+XG4gICAgICAgICAgICB7aW5wdXRVSTIgJiYgPGgxIGNsYXNzTmFtZT0nZm9udC1tb25vIHRleHQtc20gdGV4dC1yZWQtNTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCc+VXNlciBub3QgRm91bmQhPC9oMT59XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSB3LTU2IGgtNyByb3VuZGVkLXNtICAke2lucHV0QWxlcnQyICYmICdiZy1ncmVlbi01MDAnfWB9PnsoaW5wdXRBbGVydDIgPyAnVXNlciBtYXRjaGVkIHN1Y2Nlc3NmdWxseSEnIDogJ1NlYXJjaCcpfTwvYnV0dG9uPlxuXG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIHtpbnB1dEFsZXJ0MiAmJiA8YnV0dG9uIGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCB0ZXh0LXB1cnBsZS03MDAgZm9udC1zZW1pYm9sZCBmb250LW1vbm8gYmctZ3JheS0yMDAgYWN0aXZlOmFuaW1hdGUtcGluZyAnIG9uQ2xpY2s9eygpID0+IHNldE1lc3NhZ2VEaXNwbGF5KHRydWUpfT5cbiAgICAgICAgICAgIFN0YXJ0IG1lc3NhZ2luZzwvYnV0dG9uPn1cbiAgICAgICAgPC9kaXY+KX1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBoZWxsb1xuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==