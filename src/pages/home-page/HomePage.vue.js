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
var vue_1 = require("vue");
var useTodoStore_1 = require("@features/todo/model/useTodoStore");
var store = (0, useTodoStore_1.useTodoStore)();
(0, vue_1.onMounted)(function () {
    store.fetchTodos();
});
var TodoForm_vue_1 = require("@features/todo/ui/TodoForm.vue");
var TodoList_vue_1 = require("@features/todo/ui/TodoList.vue");
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "home-page" }));
/** @type {[typeof TodoForm, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(TodoForm_vue_1.default, new TodoForm_vue_1.default({}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
/** @type {[typeof TodoList, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(TodoList_vue_1.default, new TodoList_vue_1.default({}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_3), false));
/** @type {__VLS_StyleScopedClasses['home-page']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            TodoForm: TodoForm_vue_1.default,
            TodoList: TodoList_vue_1.default,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
