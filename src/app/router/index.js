"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var HomePage_vue_1 = require("@pages/home-page/HomePage.vue");
var routes = [
    {
        path: '/',
        component: function () { return Promise.resolve().then(function () { return require('@app/layouts/MainLayout.vue'); }); },
        children: [
            { path: '', name: 'home', component: HomePage_vue_1.default }
        ]
    }
];
exports.default = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(import.meta.env.BASE_URL),
    routes: routes
});
