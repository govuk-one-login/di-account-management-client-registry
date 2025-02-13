import { expect, test, describe, jest } from '@jest/globals';
import getTranslations from '../src/get-translations';
jest.mock('../clients', () => ({
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
describe('getTranslations', () => {
    test('should return translations in english', async () => {
        const translations = getTranslations('test', 'en');
        expect(translations).toEqual({
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
    });
    test('should return transaltions in welsh', async () => {
        const translations = getTranslations('test', 'cy');
        expect(translations).toEqual({
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
    });
    test('should return correct environment varialbes', async () => {
        const translations = getTranslations('production', 'cy');
        expect(translations).toEqual({
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
    });
});
