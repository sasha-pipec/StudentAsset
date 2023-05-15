exports.id = 785;
exports.ids = [785];
exports.modules = {

/***/ 1345:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "EventItem_title__QgX_c",
	"description": "EventItem_description__GOdKr",
	"image": "EventItem_image__p55XZ",
	"hidden": "EventItem_hidden__PFzPW",
	"imageBackground": "EventItem_imageBackground__YbdGe",
	"item": "EventItem_item__HqUtz",
	"text": "EventItem_text__XfZ09",
	"like": "EventItem_like__vjRbe",
	"dislike": "EventItem_dislike__faWRu",
	"btnsWrapper": "EventItem_btnsWrapper__zYdoP",
	"total_likes": "EventItem_total_likes__nqCpy"
};


/***/ }),

/***/ 4785:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ EventItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EventItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1345);
/* harmony import */ var _EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2677);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_2__]);
_store_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const EventItem = ({ index , img , title , date , description , total_votes  })=>{
    let url = `http://api.connect.tgiek.ru${img}`;
    let rootCl = [
        (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().item)
    ];
    const [isVisible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    if (isVisible === false) {
        rootCl.push((_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().hidden));
        console.log("скрыл");
    }
    function clickHendler(data) {
        if (_store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].user.isAuthenticated */ .Z.user.isAuthenticated) {
            setVisible(false);
            _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].vote.likeEvent */ .Z.vote.likeEvent(index, data);
        } else {
            alert("войдите в аккаунт!");
        }
    }
    function pluralizeLikes(count) {
        const lastDigit = count % 10;
        const isException = count >= 11 && count <= 14;
        if (lastDigit === 1 && !isException) {
            return "лайк";
        } else if ([
            2,
            3,
            4
        ].includes(lastDigit) && !isException) {
            return "лайка";
        } else {
            return "лайков";
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isVisible ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: rootCl,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageBackground),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().total_likes),
                            children: [
                                total_votes,
                                " ",
                                pluralizeLikes(total_votes)
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: url,
                            alt: "",
                            className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().image)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().text),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),
                            children: description
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnsWrapper),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>clickHendler("like"),
                                    className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().like),
                                    children: "Лайк"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>clickHendler("dislike"),
                                    className: (_EventItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().dislike),
                                    children: "Дизлайк"
                                })
                            ]
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;