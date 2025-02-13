"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const get_translations_1 = __importDefault(require("../src/get-translations"));
globals_1.jest.mock('../clients', () => ({
    __esModule: true,
    cyClient: {
        isAvailableInWelsh: true,
        translations: {
            en: {
                header: 'header en',
                linkText: 'link text en',
                linkUrl: 'link url en',
                description: 'description en'
            },
            cy: {
                header: 'header cy',
                linkText: 'link text cy',
                linkUrl: {
                    production: 'link url cy production',
                    nonProduction: 'link url cy non production'
                },
                description: 'description cy'
            }
        },
        clientId: 'welshClient',
        clientType: 'account',
        isAllowed: true,
        isHmrc: false,
        isReportSuspiciousActivityEnabled: false,
        showInClientSearch: true
    },
    enClient: {
        isAvailableInWelsh: false,
        translations: {
            en: {
                header: 'header en',
                linkText: 'link text en',
                linkUrl: 'link url en',
                description: 'description en'
            },
        },
        clientId: 'englishClient',
        clientType: 'account',
        isAllowed: true,
        isHmrc: false,
        isReportSuspiciousActivityEnabled: false,
        showInClientSearch: true
    }
}));
(0, globals_1.describe)('getTranslations', () => {
    (0, globals_1.test)('should return translations in english', () => __awaiter(void 0, void 0, void 0, function* () {
        const translations = (0, get_translations_1.default)('test', 'en');
        (0, globals_1.expect)(translations).toEqual({
            cyClient: {
                header: 'header en',
                link_text: 'link text en',
                link_href: 'link url en',
                description: 'description en'
            },
            enClient: {
                header: 'header en',
                link_text: 'link text en',
                link_href: 'link url en',
                description: 'description en'
            }
        });
    }));
    (0, globals_1.test)('should return transaltions in welsh', () => __awaiter(void 0, void 0, void 0, function* () {
        const translations = (0, get_translations_1.default)('test', 'cy');
        (0, globals_1.expect)(translations).toEqual({
            cyClient: {
                header: 'header cy',
                link_text: 'link text cy',
                link_href: 'link url cy non production',
                description: 'description cy'
            },
            enClient: {
                header: 'header en',
                link_text: 'link text en',
                link_href: 'link url en',
                description: 'description en'
            }
        });
    }));
    (0, globals_1.test)('should return correct environment varialbes', () => __awaiter(void 0, void 0, void 0, function* () {
        const translations = (0, get_translations_1.default)('production', 'cy');
        (0, globals_1.expect)(translations).toEqual({
            cyClient: {
                header: 'header cy',
                link_text: 'link text cy',
                link_href: 'link url cy production',
                description: 'description cy'
            },
            enClient: {
                header: 'header en',
                link_text: 'link text en',
                link_href: 'link url en',
                description: 'description en'
            }
        });
    }));
});
