import { expect, test, describe } from '@jest/globals';
import { getEnvironmentType, getValueForEnvironment } from '../src/utils';
describe('getEnvironmentType', () => {
    test('returns "production" for production environment', () => {
        expect(getEnvironmentType('production')).toBe('production');
    });
    test('returns "integration" for integration environment', () => {
        expect(getEnvironmentType('integration')).toBe('integration');
    });
    test('returns "nonProduction" for any other environment', () => {
        expect(getEnvironmentType('development')).toBe('nonProduction');
        expect(getEnvironmentType('staging')).toBe('nonProduction');
        expect(getEnvironmentType('')).toBe('nonProduction');
    });
});
describe('getValueForEnvironment', () => {
    test('returns direct value if not an environment object', () => {
        expect(getValueForEnvironment('production', 'test-value')).toBe('test-value');
        expect(getValueForEnvironment('integration', 123)).toBe(123);
    });
    test('returns production value for production environment', () => {
        const value = {
            production: 'prod',
            nonProduction: 'non-prod',
            integration: 'int'
        };
        expect(getValueForEnvironment('production', value)).toBe('prod');
    });
    test('returns integration value for integration environment', () => {
        const value = {
            production: 'prod',
            nonProduction: 'non-prod',
            integration: 'int'
        };
        expect(getValueForEnvironment('integration', value)).toBe('int');
    });
    test('returns production value for integration when integration value is missing', () => {
        const value = {
            production: 'prod',
            nonProduction: 'non-prod'
        };
        expect(getValueForEnvironment('integration', value)).toBe('prod');
    });
    test('returns nonProduction value for other environments', () => {
        const value = {
            production: 'prod',
            nonProduction: 'non-prod',
            integration: 'int'
        };
        expect(getValueForEnvironment('development', value)).toBe('non-prod');
        expect(getValueForEnvironment('staging', value)).toBe('non-prod');
        expect(getValueForEnvironment('', value)).toBe('non-prod');
    });
});
