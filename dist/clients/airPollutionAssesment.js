"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const airPollutionAssesment = {
    clientId: {
        production: "glcH6E9VxtnCAPPwBt550zDh22Q",
        integration: "glcH6E9VxtnCAPPwBt550zDh22Q",
        nonProduction: "airPollutionAssesment",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "account",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: true, nonProduction: true },
    translations: {
        en: {
            header: "Air pollution assessment service",
            description: "Upload environmental risk assessment results to use for in-combination assessments.",
            linkText: "Go to your Air pollution assessment service account",
            linkUrl: {
                nonProduction: "https://register-dev.aerius.uk",
                integration: "https://get-an-air-pollution-assessment-archive.service.gov.uk",
                production: "https://get-an-air-pollution-assessment-archive.service.gov.uk",
            },
        },
        cy: {
            header: "Gwasanaeth asesu llygredd aer",
            description: "Llwytho canlyniadau asesu risg amgylcheddol i'w defnyddio ar gyfer asesiadau cyfunol.",
            linkText: "Ewch i'ch Cyfrif gwasanaeth asesu llygredd aer",
            linkUrl: {
                nonProduction: "https://register-dev.aerius.uk",
                integration: "https://get-an-air-pollution-assessment-archive.service.gov.uk",
                production: "https://get-an-air-pollution-assessment-archive.service.gov.uk",
            },
        },
    },
};
exports.default = airPollutionAssesment;
