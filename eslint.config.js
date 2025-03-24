"use strict";
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
var eslint_plugin_vue_1 = require("eslint-plugin-vue");
var eslint_config_typescript_1 = require("@vue/eslint-config-typescript");
var eslint_plugin_oxlint_1 = require("eslint-plugin-oxlint");
var skip_formatting_1 = require("@vue/eslint-config-prettier/skip-formatting");
// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup
exports.default = eslint_config_typescript_1.defineConfigWithVueTs.apply(void 0, __spreadArray(__spreadArray([{
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}'],
    },
    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    },
    eslint_plugin_vue_1.default.configs['flat/essential'],
    eslint_config_typescript_1.vueTsConfigs.recommended], eslint_plugin_oxlint_1.default.configs['flat/recommended'], false), [skip_formatting_1.default], false));
