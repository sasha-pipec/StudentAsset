(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
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
	"bigItem": "Slider_bigItem__o52z_",
	"bigItem_2": "Slider_bigItem_2__6zkDc",
	"imageBackground": "Slider_imageBackground__czAQr",
	"image": "Slider_image__j3PTs"
};


/***/ }),

/***/ 1494:
/***/ ((module) => {

// Exports
module.exports = {
	"accordionContent": "MainPage_accordionContent__hTbVJ",
	"accordionContentShow": "MainPage_accordionContentShow__ows1U",
	"wrapper": "MainPage_wrapper__CiP4i",
	"titleWrapper": "MainPage_titleWrapper__Q1lI_",
	"title": "MainPage_title__alVcg",
	"titleText": "MainPage_titleText__ubAyp",
	"slider": "MainPage_slider__XHLeP",
	"answersWrapper": "MainPage_answersWrapper__Y7ZIK",
	"answers": "MainPage_answers__HItU4",
	"answersTitle": "MainPage_answersTitle__65Gxc",
	"iconMinus": "MainPage_iconMinus__L68mr",
	"iconPlus": "MainPage_iconPlus__212Wl",
	"accordion": "MainPage_accordion__OexEm",
	"accordionHeader": "MainPage_accordionHeader__5zuY4",
	"accordionItem": "MainPage_accordionItem__O6wAP",
	"random": "MainPage_random__N_MPY"
};


/***/ }),

/***/ 5577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Minus.8aaf6553.svg","height":2,"width":20,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 1226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Plus.173826c7.svg","height":20,"width":20,"blurWidth":0,"blurHeight":0});

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

/***/ 5901:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _components_EventItem_EventItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4785);
/* harmony import */ var _components_SliderPost_SliderDrag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1442);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1494);
/* harmony import */ var _styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_Plus_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1226);
/* harmony import */ var _assets_images_Minus_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5577);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2677);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, _components_EventItem_EventItem__WEBPACK_IMPORTED_MODULE_4__, _components_SliderPost_SliderDrag__WEBPACK_IMPORTED_MODULE_5__, _store_store__WEBPACK_IMPORTED_MODULE_9__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, _components_EventItem_EventItem__WEBPACK_IMPORTED_MODULE_4__, _components_SliderPost_SliderDrag__WEBPACK_IMPORTED_MODULE_5__, _store_store__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Home() {
    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        _store_store__WEBPACK_IMPORTED_MODULE_9__/* ["default"].vote.getEvents */ .Z.vote.getEvents(1);
    }, []);
    const handleClick = (index)=>{
        setActiveIndex(index === activeIndex ? null : index);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Коннект"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "language",
                        content: "ru"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "Коннект, connect, Connecting, connect.tgiek.ru, события в колледже, голосование, студенты, колледж, кампус, образование, развлечения, активности, участие, студенческая жизнь, голосование за события, студенческий совет, студенческие мероприятия"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "connect.tgiek.ru"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().wrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().titleWrapper),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().titleText),
                                children: "объединяем студентов"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().slider),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "предстоящие события"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SliderPost_SliderDrag__WEBPACK_IMPORTED_MODULE_5__/* .SliderDrag */ .B, {
                                count: 3
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().answersWrapper),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().answers),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().answersTitle),
                                    children: "Ответы на популярные вопросы"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().accordion),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().accordionItem),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().accordionHeader),
                                                    onClick: ()=>handleClick(1),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "что такое коннект?"
                                                        }),
                                                        1 === activeIndex ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: _assets_images_Minus_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                                            alt: ""
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: _assets_images_Plus_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                                            alt: ""
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: 1 === activeIndex ? (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().accordionContentShow) : (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().accordionContent),
                                                    children: "это платформа, позволяющая студентам проводить время вместе. благодаря возможности предлагать и голосовать за события вы можете повлиять на внеучебную деятельсность множества студентов"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().accordionItem),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().accordionHeader),
                                                    onClick: ()=>handleClick(2),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "что такое коннект?"
                                                        }),
                                                        2 === activeIndex ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: _assets_images_Minus_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                                            alt: ""
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: _assets_images_Plus_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                                            alt: ""
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: 2 === activeIndex ? (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().accordionContentShow) : (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().accordionContent),
                                                    children: "это платформа, позволяющая студентам проводить время вместе. благодаря возможности предлагать и голосовать за события вы можете повлиять на внеучебную деятельсность множества студентов"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().accordionItem),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().accordionHeader),
                                                    onClick: ()=>handleClick(3),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "что такое коннект?"
                                                        }),
                                                        3 === activeIndex ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: _assets_images_Minus_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                                            alt: ""
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: _assets_images_Plus_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                                            alt: ""
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: 3 === activeIndex ? (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().accordionContentShow) : (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().accordionContent),
                                                    children: "это платформа, позволяющая студентам проводить время вместе. благодаря возможности предлагать и голосовать за события вы можете повлиять на внеучебную деятельсность множества студентов"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().random),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "голосование"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                navigation: true,
                                spaceBetween: 30,
                                height: 420,
                                slidesPerView: 1,
                                className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().swiper),
                                children: _store_store__WEBPACK_IMPORTED_MODULE_9__/* ["default"].vote.VotePosts.map */ .Z.vote.VotePosts.map((el, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                        className: (_styles_pages_MainPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().swiperSlide),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_EventItem_EventItem__WEBPACK_IMPORTED_MODULE_4__/* .EventItem */ .c, {
                                            index: el.id,
                                            img: el.image,
                                            title: el.title,
                                            date: el.date,
                                            description: el.description,
                                            total_votes: el.total_votes
                                        }, index)
                                    }, el.id);
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 6211:
/***/ ((module) => {

"use strict";
module.exports = require("mobx");

/***/ }),

/***/ 5944:
/***/ ((module) => {

"use strict";
module.exports = require("mobx-react-lite");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,61,53,785], () => (__webpack_exec__(5901)));
module.exports = __webpack_exports__;

})();