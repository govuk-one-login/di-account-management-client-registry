"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const clients = __importStar(require("../clients"));
const convertToTranslation = (translations, environment) => {
    return {
        header: translations.header,
        link_text: translations.linkText,
        link_href: (0, utils_1.getValueForEnvironment)(environment, translations.linkUrl),
        description: translations.description || undefined
    };
};
const getTranslations = (environment, language) => {
    const translations = {};
    Object.keys(clients)
        .filter(key => key !== '__esModule') //this is required for the tests to work
        .forEach((client) => {
        const clientData = clients[client];
        const clientTranslations = clientData.isAvailableInWelsh && language === 'cy'
            ? clientData.translations.cy
            : clientData.translations.en;
        translations[client] = convertToTranslation(clientTranslations, environment);
    });
    return translations;
};
exports.default = getTranslations;
