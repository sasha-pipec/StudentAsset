(() => {
var exports = {};
exports.id = 695;
exports.ids = [695];
exports.modules = {

/***/ 9942:
/***/ ((module) => {

// Exports
module.exports = {
	"weekend": "DatePicker_weekend__Qg_GQ",
	"weekday": "DatePicker_weekday__MH_sS",
	"date": "DatePicker_date__G5avr",
	"picker": "DatePicker_picker____SmY",
	"activePicker": "DatePicker_activePicker__kFUDc"
};


/***/ }),

/***/ 1429:
/***/ ((module) => {

// Exports
module.exports = {
	"navigation_bar": "PaginationPosts_navigation_bar__UxrMS",
	"navigation_arrow": "PaginationPosts_navigation_arrow__a4QvG",
	"navigation_btns": "PaginationPosts_navigation_btns__hRijf",
	"btn": "PaginationPosts_btn__kFM9O",
	"active": "PaginationPosts_active__oUiH6"
};


/***/ }),

/***/ 9300:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "PostItem_item__X5TZz",
	"date": "PostItem_date__CSVoe",
	"title": "PostItem_title__Mn13O",
	"bigItem": "PostItem_bigItem__nR2Zp",
	"bigItem_2": "PostItem_bigItem_2__khUHm",
	"imageBackground": "PostItem_imageBackground__eHzuP",
	"image": "PostItem_image__LjZJz"
};


/***/ }),

/***/ 7594:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "EventsPage_wrapper__LQ5qo",
	"title": "EventsPage_title__jIPjX",
	"calendar": "EventsPage_calendar__OV_WL",
	"disable": "EventsPage_disable__lWt1_",
	"active": "EventsPage_active__olpvr",
	"calendarMonth": "EventsPage_calendarMonth__7Nh_7",
	"calendarMonthLast": "EventsPage_calendarMonthLast__IsNkA",
	"swiper-slide": "EventsPage_swiper-slide__L0_hZ"
};


/***/ }),

/***/ 5144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrow_next.1ddb53ae.svg","height":16,"width":147,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 1601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrow_prev.11f86372.svg","height":16,"width":147,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 8290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DatePicker_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9942);
/* harmony import */ var _DatePicker_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DatePicker_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2677);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_2__]);
_store_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const DatePicker = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(({ disabled , id , date  })=>{
    const [picked, setPicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentPostList, setCurrentPostList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const month = date.toLocaleString("default", {
        month: "long"
    });
    const dayOfWeek = date.toLocaleDateString("default", {
        weekday: "short"
    });
    const dayIndex = date.getDay();
    const isWeekend = dayIndex === 0 || dayIndex === 6;
    const picker = (date)=>{
        if (picked === false) {
            setPicked(true);
            setCurrentPostList(_store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].posts.posts */ .Z.posts.posts);
            let post = _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].posts.datePosts.find */ .Z.posts.datePosts.find((post)=>{
                const postDate = new Date(post.date);
                const targetDate = new Date(date);
                return postDate.getDate() === targetDate.getDate();
            });
            let postsArr = [];
            postsArr.push(post);
            _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].posts.setPosts */ .Z.posts.setPosts(postsArr);
            console.log(postsArr);
            _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].PickedDate.setPickedId */ .Z.PickedDate.setPickedId(id);
        } else {
            setPicked(false);
            _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].posts.setPosts */ .Z.posts.setPosts(_store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].posts.currentPosts */ .Z.posts.currentPosts);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (_store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].PickedDate.pickedId */ .Z.PickedDate.pickedId === id) {
            setPicked(true);
        } else setPicked(false);
    }, [
        _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].PickedDate.pickedId */ .Z.PickedDate.pickedId
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: picked ? (_DatePicker_module_css__WEBPACK_IMPORTED_MODULE_4___default().activePicker) : (_DatePicker_module_css__WEBPACK_IMPORTED_MODULE_4___default().picker),
        disabled: !disabled,
        onClick: ()=>{
            picker(date);
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: isWeekend ? (_DatePicker_module_css__WEBPACK_IMPORTED_MODULE_4___default().weekend) : (_DatePicker_module_css__WEBPACK_IMPORTED_MODULE_4___default().weekday),
                children: dayOfWeek
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_DatePicker_module_css__WEBPACK_IMPORTED_MODULE_4___default().date),
                children: date.getDate()
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatePicker);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6856:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ PaginationPosts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PaginationPosts_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1429);
/* harmony import */ var _PaginationPosts_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PaginationPosts_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_arrow_prev_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1601);
/* harmony import */ var _assets_images_arrow_next_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5144);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2677);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_4__]);
_store_store__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const PaginationPosts = ()=>{
    const pageCount = _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].posts.pages.length */ .Z.posts.pages.length;
    const handleClick = (page)=>{
        _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].posts.getPosts */ .Z.posts.getPosts(page);
    };
    const handlePrevClick = ()=>{
        const page = _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].posts.CurrentPage */ .Z.posts.CurrentPage > 1 ? _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].posts.CurrentPage */ .Z.posts.CurrentPage - 1 : 1;
        _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].posts.getPosts */ .Z.posts.getPosts(page);
    };
    const handleNextClick = ()=>{
        const page = _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].posts.CurrentPage */ .Z.posts.CurrentPage < pageCount ? _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].posts.CurrentPage */ .Z.posts.CurrentPage + 1 : pageCount;
        _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].posts.getPosts */ .Z.posts.getPosts(page);
    };
    const pages = [];
    for(let i = 1; i <= pageCount; i++){
        //доделать компонент
        pages.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].posts.currentPage */ .Z.posts.currentPage === i ? (_PaginationPosts_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : (_PaginationPosts_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn),
            onClick: ()=>handleClick(i),
            children: i
        }, i));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_PaginationPosts_module_css__WEBPACK_IMPORTED_MODULE_5___default().navigation_bar),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: handlePrevClick,
                className: (_PaginationPosts_module_css__WEBPACK_IMPORTED_MODULE_5___default().navigation_arrow),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: _assets_images_arrow_prev_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                    alt: "prev"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_PaginationPosts_module_css__WEBPACK_IMPORTED_MODULE_5___default().navigation_btns),
                children: pages
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: handleNextClick,
                className: (_PaginationPosts_module_css__WEBPACK_IMPORTED_MODULE_5___default().navigation_arrow),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: _assets_images_arrow_next_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    alt: "next"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5373:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ PostItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostItem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9300);
/* harmony import */ var _PostItem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PostItem_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2677);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_2__]);
_store_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const PostItem = ({ index , img , title , date , to  })=>{
    let url = `http://api.connect.tgiek.ru${img}`;
    let rootCl = [
        (_PostItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().item)
    ];
    if (index === 5) {
        rootCl = [
            (_PostItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigItem)
        ];
    }
    if (index === 10) {
        rootCl = [
            (_PostItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigItem_2)
        ];
    }
    const image = {
        backgroundImage: `url(${url})`,
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "transform 0.2s ease-in-out"
    };
    return(// to={`/posts/${to}`}
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/",
        className: rootCl.join(" "),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_PostItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageBackground),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_PostItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),
                    style: image
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_PostItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().date),
                children: _store_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].posts.datePost */ .Z.posts.datePost(date)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_PostItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
                children: title
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5827:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ PostList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostItem_PostItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5373);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PaginationPosts_PaginationPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6856);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2677);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PostItem_PostItem__WEBPACK_IMPORTED_MODULE_2__, _PaginationPosts_PaginationPosts__WEBPACK_IMPORTED_MODULE_4__, _store_store__WEBPACK_IMPORTED_MODULE_5__]);
([_PostItem_PostItem__WEBPACK_IMPORTED_MODULE_2__, _PaginationPosts_PaginationPosts__WEBPACK_IMPORTED_MODULE_4__, _store_store__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const PostList = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(()=>{
    let page = 1;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _store_store__WEBPACK_IMPORTED_MODULE_5__/* ["default"].posts.getPosts */ .Z.posts.getPosts(page);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "postlist",
                children: _store_store__WEBPACK_IMPORTED_MODULE_5__/* ["default"].posts.posts.map */ .Z.posts.posts.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PostItem_PostItem__WEBPACK_IMPORTED_MODULE_2__/* .PostItem */ .Y, {
                        index: index + 1,
                        to: post.id,
                        img: post.image,
                        title: post.title,
                        date: post.date
                    }, index + 1))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PaginationPosts_PaginationPosts__WEBPACK_IMPORTED_MODULE_4__/* .PaginationPosts */ .G, {})
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9014:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PostsList_PostList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5827);
/* harmony import */ var _EventsPage_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7594);
/* harmony import */ var _EventsPage_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_EventsPage_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2677);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3877);
/* harmony import */ var _components_DatePicker_DatePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8290);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PostsList_PostList__WEBPACK_IMPORTED_MODULE_2__, _store_store__WEBPACK_IMPORTED_MODULE_4__, swiper_react__WEBPACK_IMPORTED_MODULE_5__, swiper__WEBPACK_IMPORTED_MODULE_6__, _components_DatePicker_DatePicker__WEBPACK_IMPORTED_MODULE_7__, _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__]);
([_components_PostsList_PostList__WEBPACK_IMPORTED_MODULE_2__, _store_store__WEBPACK_IMPORTED_MODULE_4__, swiper_react__WEBPACK_IMPORTED_MODULE_5__, swiper__WEBPACK_IMPORTED_MODULE_6__, _components_DatePicker_DatePicker__WEBPACK_IMPORTED_MODULE_7__, _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const EventsPage = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(()=>{
    const [calendar, setCalendar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    async function createCalendarArray() {
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
        const totalMonths = 3;
        const calendarArray = [];
        console.log(currentMonth);
        for(let i = 0; i < totalMonths; i++){
            const month = new Date(currentYear, currentMonth + i);
            const monthYear = month.toLocaleString("default", {
                month: "long",
                year: "numeric"
            });
            const totalDays = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
            const monthArray = [];
            for(let j = 1; j <= totalDays; j++){
                const date = new Date(month.getFullYear(), month.getMonth(), j);
                const isCurrentDay = date.toDateString() === today.toDateString();
                monthArray.push({
                    date,
                    isCurrentDay
                });
            }
            calendarArray.push({
                month: monthYear,
                days: monthArray
            });
        }
        setCalendar(calendarArray);
        return calendarArray;
    }
    const CreateCalendar = async ()=>{
        await _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].posts.getPostDate */ .Z.posts.getPostDate();
        createCalendarArray();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        CreateCalendar();
        _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].posts.singlePostIsLiked */ .Z.posts.singlePostIsLiked = "";
    }, []);
    console.log(calendar);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_EventsPage_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_EventsPage_module_css__WEBPACK_IMPORTED_MODULE_9___default().title),
                    children: "БЛИЖАЙШИЕ СОБЫТИЯ"
                })
            }),
            calendar.length !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
                    spaceBetween: 10,
                    slidesPerView: "auto",
                    height: 100,
                    modules: [
                        swiper__WEBPACK_IMPORTED_MODULE_6__.Navigation
                    ],
                    navigation: true,
                    children: calendar.map((month, monthIndex)=>month.days.map((day, dayIndex)=>{
                            const findEvent = _store_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].posts.datePosts.find */ .Z.posts.datePosts.find((elem)=>{
                                let elemDate = new Date(elem.date);
                                if (elemDate.getDate() === day.date.getDate() && elemDate.getMonth() === day.date.getMonth()) {
                                    console.log(elem.date, new Date(elem.date));
                                    console.log(day.date, day.date.getDate());
                                    return true;
                                }
                                return false;
                            });
                            console.log(findEvent);
                            // console.log(dayIndex);
                            if (month.days.length === dayIndex - 1) {
                                console.log(dayIndex - 1, day);
                            }
                            if (dayIndex === 0) {
                                console.log("daddadad", day.date.toLocaleString("default", {
                                    month: "long"
                                }), day);
                            }
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                                style: month.days.length === dayIndex + 1 ? findEvent ? {
                                    height: "86px",
                                    minWidth: "100px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px"
                                } : {
                                    height: "86px",
                                    minWidth: "100px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    opacity: 0.6
                                } : findEvent ? {
                                    height: "86px",
                                    maxWidth: "31px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px"
                                } : {
                                    height: "86px",
                                    maxWidth: "31px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    opacity: 0.6
                                },
                                className: findEvent ? (_EventsPage_module_css__WEBPACK_IMPORTED_MODULE_9___default().active) : (_EventsPage_module_css__WEBPACK_IMPORTED_MODULE_9___default().disable),
                                children: [
                                    dayIndex === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_EventsPage_module_css__WEBPACK_IMPORTED_MODULE_9___default().calendarMonth),
                                        children: day.date.toLocaleString("default", {
                                            month: "long"
                                        })
                                    }) : "",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DatePicker_DatePicker__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        disabled: findEvent,
                                        id: day.date,
                                        date: day.date
                                    })
                                ]
                            }, `${monthIndex}-${dayIndex}`);
                        }))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostsList_PostList__WEBPACK_IMPORTED_MODULE_2__/* .PostList */ .p, {})
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

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
var __webpack_exports__ = __webpack_require__.X(0, [893,636,61,53,740], () => (__webpack_exec__(9014)));
module.exports = __webpack_exports__;

})();