import { expect, test, describe } from '@jest/globals'
import getTranslations from '../src/get-translations';

describe('getTranslations', () => {
    test('getTranslations returns true', () => {
        expect(getTranslations()).toBe(true);
    });
});