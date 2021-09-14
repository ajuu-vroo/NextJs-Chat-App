(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Projects-WD\\Next.js\\WEB chat-app\\client\\pages\\index.js";


 // import Link from 'next/link';

function Home() {
  const socket = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  const userRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  const receiverRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  const messageRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  const {
    0: inputAlert,
    1: setInputAlert
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: inputUI,
    1: setInputUI
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: inputAlert2,
    1: setInputAlert2
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: inputUI2,
    1: setInputUI2
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: messageDisplay,
    1: setMessageDisplay
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: receiver,
    1: setReceiver
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: disconnect,
    1: setDisconnect
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: chat,
    1: setChat
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)('ws://localhost:3001');
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    socket.current.on('left', data => setDisconnect(true));
    socket.current.on('getMessage', data => {
      setChat([...chat, data]);
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

    setChat([...chat, {
      message: messageRef.current.value,
      type: 'mine'
    }]);
    messageRef.current.value = '';
    console.log(chat);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col items-center justify-center min-h-screen py-2 bg-purple-600",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
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
          }, this), chat === null || chat === void 0 ? void 0 : chat.map(item => {
            if (item.type === 'mine') {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "bg-gray-300 text-right pr-4 w-[150px] px-3 rounded-full mb-2 h-9 pt-1 font-mono text-gray-800 text-xl ml-52 mt-2 rounded-br-none",
                children: item === null || item === void 0 ? void 0 : item.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 28
              }, this);
            } else {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "bg-purple-600 text-left text-white pl-4 w-[150px] rounded-full h-9 px-3 font-mono text-xl mt-2 pt-1 ml-1 rounded-bl-none",
                children: item === null || item === void 0 ? void 0 : item.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 28
              }, this);
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
          className: `bg-purple-600 text-white w-56 h-7 rounded-sm  ${inputAlert2 && 'bg-green-500'}`,
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
        onClick: () => setMessageDisplay(true),
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

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvY2tldC5pby1jbGllbnRcIiJdLCJuYW1lcyI6WyJIb21lIiwic29ja2V0IiwidXNlUmVmIiwidXNlclJlZiIsInJlY2VpdmVyUmVmIiwibWVzc2FnZVJlZiIsImlucHV0QWxlcnQiLCJzZXRJbnB1dEFsZXJ0IiwidXNlU3RhdGUiLCJpbnB1dFVJIiwic2V0SW5wdXRVSSIsImlucHV0QWxlcnQyIiwic2V0SW5wdXRBbGVydDIiLCJpbnB1dFVJMiIsInNldElucHV0VUkyIiwibWVzc2FnZURpc3BsYXkiLCJzZXRNZXNzYWdlRGlzcGxheSIsInVzZXIiLCJzZXRVc2VyIiwicmVjZWl2ZXIiLCJzZXRSZWNlaXZlciIsImRpc2Nvbm5lY3QiLCJzZXREaXNjb25uZWN0IiwiY2hhdCIsInNldENoYXQiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiaW8iLCJvbiIsImRhdGEiLCJ1c2VySGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtaXQiLCJ2YWx1ZSIsInJlY2VpdmVySGFuZGxlciIsIm1lc3NhZ2VIYW5kbGVyIiwidXNlck5hbWUiLCJyZWNlaXZlck5hbWUiLCJ0ZXh0TWVzc2FnZSIsIm1lc3NhZ2UiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLFFBQU1DLE1BQU0sR0FBR0MsNkNBQU0sRUFBckI7QUFDQSxRQUFNQyxPQUFPLEdBQUdELDZDQUFNLEVBQXRCO0FBQ0EsUUFBTUUsV0FB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O0FBQUE7QUFBQTtBQUFBLFlBbkNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkRELEM7Ozs7Ozs7Ozs7O0FDeklELHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBzb2NrZXQgPSB1c2VSZWYoKTtcbiAgY29uc3QgdXNlclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCByZWNlaXZlclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBtZXNzYWdlUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtpbnB1dEFsZXJ0LCBzZXRJbnB1dEFsZXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0VUksIHNldElucHV0VUldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5wdXRBbGVydDIsIHNldElucHV0QWxlcnQyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0VUkyLCBzZXRJbnB1dFVJMl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZXNzYWdlRGlzcGxheSwgc2V0TWVzc2FnZURpc3BsYXldID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JlY2VpdmVyLCBzZXRSZWNlaXZlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkaXNjb25uZWN0LCBzZXREaXNjb25uZWN0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY2hhdCxzZXRDaGF0XSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNvY2tldC5jdXJyZW50ID0gaW8oJ3dzOi8vbG9jYWxob3N0OjMwMDEnKTtcblxuICB9LCBbXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQuY3VycmVudC5vbignbGVmdCcsIGRhdGEgPT4gc2V0RGlzY29ubmVjdCh0cnVlKSlcbiAgICBzb2NrZXQuY3VycmVudC5vbignZ2V0TWVzc2FnZScsIGRhdGEgPT4ge1xuICAgICAgc2V0Q2hhdChbLi4uY2hhdCwgZGF0YV0pXG4gICAgfSlcbiAgICBcbiAgfSwgW2NoYXRdKVxuXG4gIGZ1bmN0aW9uIHVzZXJIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc29ja2V0LmN1cnJlbnQuZW1pdCgnYWRkVXNlcicsIHVzZXJSZWYuY3VycmVudD8udmFsdWUpXG4gICAgc29ja2V0LmN1cnJlbnQub24oJ2dldFVzZXInLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEgPT09ICd1c2VyIGFscmVhZHkgQ3JlYXRlZCcpIHtcbiAgICAgICAgc2V0SW5wdXRBbGVydCh0cnVlKVxuICAgICAgICBzZXRJbnB1dFVJKGZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SW5wdXRBbGVydChmYWxzZSlcbiAgICAgICAgc2V0SW5wdXRVSSh0cnVlKVxuICAgICAgICBzZXRVc2VyKHVzZXJSZWYuY3VycmVudD8udmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiByZWNlaXZlckhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzb2NrZXQuY3VycmVudC5lbWl0KCdjaGVja1VzZXInLCByZWNlaXZlclJlZi5jdXJyZW50Py52YWx1ZSlcbiAgICBzb2NrZXQuY3VycmVudC5vbigndmFsaWRVc2VyJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhID09PSAndHJ1ZScpIHtcbiAgICAgICAgc2V0SW5wdXRBbGVydDIodHJ1ZSlcbiAgICAgICAgc2V0SW5wdXRVSTIoZmFsc2UpXG4gICAgICAgIHNldFJlY2VpdmVyKHJlY2VpdmVyUmVmLmN1cnJlbnQ/LnZhbHVlKVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJbnB1dFVJMih0cnVlKVxuICAgICAgICBzZXRJbnB1dEFsZXJ0MihmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGZ1bmN0aW9uIG1lc3NhZ2VIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc29ja2V0LmN1cnJlbnQuZW1pdCgnc2VuZE1lc3NhZ2UnLCB7XG4gICAgICB1c2VyTmFtZTogdXNlcixcbiAgICAgIHJlY2VpdmVyTmFtZTogcmVjZWl2ZXIsXG4gICAgICB0ZXh0TWVzc2FnZTogbWVzc2FnZVJlZi5jdXJyZW50LnZhbHVlXG4gICAgfSlcbiAgICAvLyBzb2NrZXQuY3VycmVudC5vbignZ2V0TWVzc2FnZScsIGRhdGEgPT4ge1xuICAgIC8vICAgc2V0TXNnKFsuLi5tc2csIGRhdGFdKVxuICAgIC8vIH0pXG4gICAgLy8gc2V0T3duTXNnKFsuLi5vd25Nc2csIG1lc3NhZ2VSZWYuY3VycmVudC52YWx1ZV0pXG4gICAgc2V0Q2hhdChbLi4uY2hhdCx7bWVzc2FnZTptZXNzYWdlUmVmLmN1cnJlbnQudmFsdWUsIHR5cGU6J21pbmUnfV0pXG4gICAgbWVzc2FnZVJlZi5jdXJyZW50LnZhbHVlID0gJydcblxuICAgIGNvbnNvbGUubG9nKGNoYXQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHB5LTIgYmctcHVycGxlLTYwMFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHttZXNzYWdlRGlzcGxheVxuICAgICAgICA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIHJvdW5kZWQtc20gZmxleC1jb2wgZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gdHJhY2tpbmctdGlnaHRlcic+eydZb3UgYXJlIGNoYXR0aW5nIGFzJyArIFwiIFwifSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC1wdXJwbGUtNjAwIGNhcGl0YWxpemUnPnt1c2VyfTwvc3Bhbj48L2gxPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gdHJhY2tpbmctdGlnaHRlcic+eydJbiBjb252ZXJzYXRpb24gd2l0aCcgKyBcIiBcIn0gPHNwYW4gY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIHRleHQtcHVycGxlLTYwMCBjYXBpdGFsaXplJz57cmVjZWl2ZXJ9PC9zcGFuPjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLVs2NTBweF0gbGc6aC1bNTAwcHhdIGJnLXdoaXRlIGZsZXgganVzdGlmeS1iZXR3ZWVuIG92ZXJmbG93LXNjcm9sbCc+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtNyByZWxhdGl2ZScgLz5cbiAgICAgICAgICAgICAgICB7Y2hhdD8ubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgICAgICAgaWYoaXRlbS50eXBlPT09J21pbmUnKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxoMSBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCB0ZXh0LXJpZ2h0IHByLTQgdy1bMTUwcHhdIHB4LTMgcm91bmRlZC1mdWxsIG1iLTIgaC05IHB0LTEgZm9udC1tb25vIHRleHQtZ3JheS04MDAgdGV4dC14bCBtbC01MiBtdC0yIHJvdW5kZWQtYnItbm9uZVwiPntpdGVtPy5tZXNzYWdlfTwvaDE+XG4gICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxoMSBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNjAwIHRleHQtbGVmdCB0ZXh0LXdoaXRlIHBsLTQgdy1bMTUwcHhdIHJvdW5kZWQtZnVsbCBoLTkgcHgtMyBmb250LW1vbm8gdGV4dC14bCBtdC0yIHB0LTEgbWwtMSByb3VuZGVkLWJsLW5vbmVcIiA+e2l0ZW0/Lm1lc3NhZ2V9PC9oMT5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2Rpc2Nvbm5lY3QgJiYgPGgxIGNsYXNzTmFtZT0ndGV4dC1yZWQtODAwIHVuZGVybGluZSB0ZXh0LXhzIG14LWF1dG8gcHQtNCBhYnNvbHV0ZSBib3R0b20tMjAgbGVmdC0yOCBsZzpsZWZ0LVs2MTVweF0nPlRoZSBVc2VyIGxlZnQgdGhlIGNoYXQuPC9oMT59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHctWzM3MHB4XSBiZy13aGl0ZSBzaGFkb3ctMnhsJz5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e21lc3NhZ2VIYW5kbGVyfSBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBhdXRvQ29tcGxldGU9J29mZicgbmFtZT0nbWVzc2FnZScgcmVmPXttZXNzYWdlUmVmfSByZXF1aXJlZCBjbGFzc05hbWU9J2JvcmRlci0yIGJvcmRlci1wdXJwbGUtNjAwIG91dGxpbmUtbm9uZSBmb2N1cy13aXRoaW46b3V0bGluZS1ub25lIHctWzI3MHB4XSBoLTEwJyAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3LVsxMDBweF0gYmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtbW9ubyBmb250LXNlbWlib2xkIHRleHQteGwgYm9yZGVyIGJvcmRlci13aGl0ZSc+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICA6ICg8ZGl2IGNsYXNzTmFtZT0naC02NCB3LTY0IGZsZXggZmxleC1jb2wgYmctd2hpdGUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy0yeGwgcm91bmRlZC1zbSBzcGFjZS15LTInPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBzcGFjZS15LTEnIG9uU3VibWl0PXt1c2VySGFuZGxlcn0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0ndXNlcm5hbWUnIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXItYiBib3JkZXItZ3JheS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci1wdXJwbGUtNjAwIGZvY3VzLXdpdGhpbjpib3JkZXItYi0yIHRyYW5zaXRpb24tYWxsIGgtOCcgcGxhY2Vob2xkZXI9J05ldyBVc2VybmFtZScgcmVmPXt1c2VyUmVmfSAvPlxuICAgICAgICAgICAge2lucHV0QWxlcnQgJiYgPGgxIGNsYXNzTmFtZT0nZm9udC1tb25vIHRleHQtc20gdGV4dC1yZWQtNTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCc+VXNlcm5hbWUgYWxyZWFkeSB0YWtlbiE8L2gxPn1cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1wdXJwbGUtNjAwIHRleHQtd2hpdGUgdy01NiBoLTcgcm91bmRlZC1zbSc+e2lucHV0VUlcbiAgICAgICAgICAgICAgPyAoPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LWNlbnRlciBtbC0yNCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNOSAxMmwyIDIgNC00bTYgMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz4pXG4gICAgICAgICAgICAgIDogXCJFbnRlclwifTwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2ZsZXgtY29sIGZsZXggc3BhY2UteS0xJyBvblN1Ym1pdD17cmVjZWl2ZXJIYW5kbGVyfT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdyZWNlaXZlcicgYXV0b0NvbXBsZXRlPVwib2ZmXCIgcGxhY2Vob2xkZXI9J0ZpbmQgYnkgVXNlcm5hbWUnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXItYiBib3JkZXItZ3JheS02MDAgZm9jdXMtd2l0aGluOmJvcmRlci1wdXJwbGUtNjAwIGZvY3VzLXdpdGhpbjpib3JkZXItYi0yIHRyYW5zaXRpb24tYWxsIGgtOCcgcmVmPXtyZWNlaXZlclJlZn0gLz5cbiAgICAgICAgICAgIHtpbnB1dFVJMiAmJiA8aDEgY2xhc3NOYW1lPSdmb250LW1vbm8gdGV4dC1zbSB0ZXh0LXJlZC01MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwJz5Vc2VyIG5vdCBGb3VuZCE8L2gxPn1cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlIHctNTYgaC03IHJvdW5kZWQtc20gICR7aW5wdXRBbGVydDIgJiYgJ2JnLWdyZWVuLTUwMCd9YH0+eyhpbnB1dEFsZXJ0MiA/ICdVc2VyIG1hdGNoZWQgc3VjY2Vzc2Z1bGx5IScgOiAnU2VhcmNoJyl9PC9idXR0b24+XG5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAge2lucHV0QWxlcnQyICYmIDxidXR0b24gY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIHRleHQtcHVycGxlLTcwMCBmb250LXNlbWlib2xkIGZvbnQtbW9ubyBiZy1ncmF5LTIwMCBhY3RpdmU6YW5pbWF0ZS1waW5nICcgb25DbGljaz17KCkgPT4gc2V0TWVzc2FnZURpc3BsYXkodHJ1ZSl9PlxuICAgICAgICAgICAgU3RhcnQgbWVzc2FnaW5nPC9idXR0b24+fVxuICAgICAgICA8L2Rpdj4pfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=