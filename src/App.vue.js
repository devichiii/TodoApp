"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var HelloWorld_vue_1 = require("./components/HelloWorld.vue");
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['router-link-exact-active']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign(__assign({ alt: "Vue logo" }, { class: "logo" }), { src: "@/assets/logo.svg", width: "125", height: "125" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "wrapper" }));
/** @type {[typeof HelloWorld, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(HelloWorld_vue_1.default, new HelloWorld_vue_1.default({
    msg: "You did it!",
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        msg: "You did it!",
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
var __VLS_3 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
var __VLS_4 = __VLS_asFunctionalComponent(__VLS_3, new __VLS_3({
    to: "/",
}));
var __VLS_5 = __VLS_4.apply(void 0, __spreadArray([{
        to: "/",
    }], __VLS_functionalComponentArgsRest(__VLS_4), false));
__VLS_6.slots.default;
var __VLS_6;
var __VLS_7 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
var __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    to: "/about",
}));
var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([{
        to: "/about",
    }], __VLS_functionalComponentArgsRest(__VLS_8), false));
__VLS_10.slots.default;
var __VLS_10;
var __VLS_11 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, ]} */ ;
// @ts-ignore
var __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({}));
var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_12), false));
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['wrapper']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            RouterLink: vue_router_1.RouterLink,
            RouterView: vue_router_1.RouterView,
            HelloWorld: HelloWorld_vue_1.default,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
