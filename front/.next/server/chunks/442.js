exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 3200:
/***/ ((module) => {

// Exports
module.exports = {
	"slider": "Slider_slider__CETf2",
	"swiper": "Slider_swiper__NrSu_",
	"swiperSlide": "Slider_swiperSlide__cOKGz",
	"item": "Slider_item__X_3xW",
	"date": "Slider_date__6ajVn",
	"title": "Slider_title__6gTBn",
	"imageBackground": "Slider_imageBackground__czAQr",
	"image": "Slider_image__j3PTs"
};


/***/ }),

/***/ 1442:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ SliderDrag)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SliderItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5245);
/* harmony import */ var _store_PostsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4254);
/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3200);
/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2677);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SliderItem__WEBPACK_IMPORTED_MODULE_2__, _store_PostsStore__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_5__, _store_store__WEBPACK_IMPORTED_MODULE_7__]);
([_SliderItem__WEBPACK_IMPORTED_MODULE_2__, _store_PostsStore__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_5__, _store_store__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const SliderDrag = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__.observer)(({ count  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _store_store__WEBPACK_IMPORTED_MODULE_7__/* ["default"].posts.getPostSlider */ .Z.posts.getPostSlider();
    }, []);
    console.log(_store_store__WEBPACK_IMPORTED_MODULE_7__/* ["default"].posts.postSlider */ .Z.posts.postSlider);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
            navigation: true,
            spaceBetween: 30,
            height: 420,
            slidesPerView: count,
            className: (_Slider_module_css__WEBPACK_IMPORTED_MODULE_8___default().swiper),
            children: _store_store__WEBPACK_IMPORTED_MODULE_7__/* ["default"].posts.postSlider.map */ .Z.posts.postSlider.map((el)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                    className: (_Slider_module_css__WEBPACK_IMPORTED_MODULE_8___default().swiperSlide),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SliderItem__WEBPACK_IMPORTED_MODULE_2__/* .SliderItem */ .w, {
                        img: el.image,
                        title: el.title,
                        date: el.date,
                        to: el.id
                    })
                }, el.id);
            })
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5245:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ SliderItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3200);
/* harmony import */ var _Slider_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2677);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_2__]);
_store_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SliderItem = ({ img , title , date , to  })=>{
    let url = `http://api.connect.tgiek.ru${img}`;
    const image = {
        backgroundImage: `url(${url})`,
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "transform 0.2s ease-in-out"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/",
        onClick: ()=>{
            window.scrollTo(0, 0);
        },
        className: (_Slider_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Slider_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageBackground),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Slider_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),
                    style: image
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_Slider_module_css__WEBPACK_IMPORTED_MODULE_4___default().date),
                children: _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].posts.datePost */ .Z.posts.datePost(date)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_Slider_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
                children: title
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8722:
/***/ (() => {



/***/ })

};
;