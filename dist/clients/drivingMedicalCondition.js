"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drivingMedicalCondition = {
    clientId: {
        production: "iJNgycwBNEWGQvkuiLxOdVmVzG9",
        integration: "iJNgycwBNEWGQvkuiLxOdVmVzG9",
        nonProduction: "drivingMedicalCondition",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "service",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: true, nonProduction: true },
    translations: {
        en: {
            header: "Driving with a medical condition",
            linkText: "Driving with a medical condition",
            linkUrl: "https://www.gov.uk/browse/driving/disability-health-condition",
        },
        cy: {
            header: "Gyrru gyda chyflwr iechyd",
            linkText: "Gyrru gyda chyflwr iechyd",
            linkUrl: "https://www.gov.uk/browse/driving/disability-health-condition",
        },
    },
};
exports.default = drivingMedicalCondition;
