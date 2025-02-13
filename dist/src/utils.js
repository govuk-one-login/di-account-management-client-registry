const isEnvironmentObject = (value) => {
    return typeof value === "object" &&
        value !== null &&
        Object.prototype.hasOwnProperty.call(value, "production");
};
const getEnvironmentType = (environment) => {
    if (environment === 'production') {
        return 'production';
    }
    if (environment === 'integration') {
        return 'integration';
    }
    return 'nonProduction';
};
const getValueForEnvironment = (environment, value) => {
    if (!isEnvironmentObject(value)) {
        return value;
    }
    const env = getEnvironmentType(environment);
    if (env === 'integration') {
        return value.integration || value.production;
    }
    if (env === "production") {
        return value.production;
    }
    return value.nonProduction;
};
export { getEnvironmentType, getValueForEnvironment };
