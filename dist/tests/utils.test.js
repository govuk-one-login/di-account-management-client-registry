"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const utils_1 = require("../src/utils");
(0, globals_1.describe)('getEnvironmentType', () => {
    (0, globals_1.test)('returns "production" for production environment', () => {
        (0, globals_1.expect)((0, utils_1.getEnvironmentType)('production')).toBe('production');
    });
    (0, globals_1.test)('returns "integration" for integration environment', () => {
        (0, globals_1.expect)((0, utils_1.getEnvironmentType)('integration')).toBe('integration');
    });
    (0, globals_1.test)('returns "nonProduction" for any other environment', () => {
        (0, globals_1.expect)((0, utils_1.getEnvironmentType)('development')).toBe('nonProduction');
        (0, globals_1.expect)((0, utils_1.getEnvironmentType)('staging')).toBe('nonProduction');
        (0, globals_1.expect)((0, utils_1.getEnvironmentType)('')).toBe('nonProduction');
    });
});
(0, globals_1.describe)('getValueForEnvironment', () => {
    (0, globals_1.test)('returns direct value if not an environment object', () => {
        (0, globals_1.expect)((0, utils_1.getValueForEnvironment)('production', 'test-value')).toBe('test-value');
        (0, globals_1.expect)((0, utils_1.getValueForEnvironment)('integration', 123)).toBe(123);
    });
    (0, globals_1.test)('returns production value for production environment', () => {
        const value = {
            production: 'prod',
            nonProduction: 'non-prod',
            integration: 'int'
        };
        (0, globals_1.expect)((0, utils_1.getValueForEnvironment)('production', value)).toBe('prod');
    });
    (0, globals_1.test)('returns integration value for integration environment', () => {
        const value = {
            production: 'prod',
            nonProduction: 'non-prod',
            integration: 'int'
        };
        (0, globals_1.expect)((0, utils_1.getValueForEnvironment)('integration', value)).toBe('int');
    });
    (0, globals_1.test)('returns production value for integration when integration value is missing', () => {
        const value = {
            production: 'prod',
            nonProduction: 'non-prod'
        };
        (0, globals_1.expect)((0, utils_1.getValueForEnvironment)('integration', value)).toBe('prod');
    });
    (0, globals_1.test)('returns nonProduction value for other environments', () => {
        const value = {
            production: 'prod',
            nonProduction: 'non-prod',
            integration: 'int'
        };
        (0, globals_1.expect)((0, utils_1.getValueForEnvironment)('development', value)).toBe('non-prod');
        (0, globals_1.expect)((0, utils_1.getValueForEnvironment)('staging', value)).toBe('non-prod');
        (0, globals_1.expect)((0, utils_1.getValueForEnvironment)('', value)).toBe('non-prod');
    });
});
