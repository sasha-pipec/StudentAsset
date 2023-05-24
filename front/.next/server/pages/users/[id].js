(() => {
var exports = {};
exports.id = 108;
exports.ids = [108];
exports.modules = {

/***/ 5406:
/***/ ((module) => {

// Exports
module.exports = {
	"user": "user_user__I_UEW"
};


/***/ }),

/***/ 9948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ User),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./styles/user.module.css
var user_module = __webpack_require__(5406);
var user_module_default = /*#__PURE__*/__webpack_require__.n(user_module);
// EXTERNAL MODULE: ./components/MainContainer.js
var MainContainer = __webpack_require__(3369);
;// CONCATENATED MODULE: ./pages/users/[id].js




function User({ user  }) {
    const { query  } = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ jsx_runtime.jsx(MainContainer/* default */.Z, {
        keywords: user.name,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (user_module_default()).user,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                    children: [
                        "Пользователь c id ",
                        query.id
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        "Имя пользователя - ",
                        user.name
                    ]
                })
            ]
        })
    });
}
async function getServerSideProps({ params  }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
        props: {
            user
        }
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,369], () => (__webpack_exec__(9948)));
module.exports = __webpack_exports__;

})();