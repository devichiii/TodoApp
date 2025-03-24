"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoApi = void 0;
var axios_1 = require("axios");
var api = axios_1.default.create({
    baseURL: 'http://localhost:5000'
});
exports.todoApi = {
    getAll: function () { return api.get('/todos'); },
    create: function (text) { return api.post('/todos', { text: text }); },
    toggle: function (id, completed) {
        return api.patch("/todos/".concat(id), { completed: completed });
    },
    delete: function (id) { return api.delete("/todos/".concat(id)); }
};
