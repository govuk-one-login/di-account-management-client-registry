"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findAndApplyForAGrant = {
    clientId: {
        production: "tya4DoMpw_B7FK5YvuMAj3asc0A",
        integration: "tya4DoMpw_B7FK5YvuMAj3asc0A",
        nonProduction: "findAndApplyForAGrant",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "account",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: true, nonProduction: true },
    translations: {
        en: {
            header: "Find and apply for a grant",
            description: "Search and apply for government grant funding.",
            linkText: "Go to your grants account",
            linkUrl: "https://find-government-grants.service.cabinetoffice.gov.uk/apply/applicant",
        },
        cy: {
            header: "Darganfod a gwneud cais am grant",
            description: "Chwilio a gwneud cais am gyllid grant gan y llywodraeth.",
            linkText: "Ewch i'ch cyfrif grantiau",
            linkUrl: "https://find-government-grants.service.cabinetoffice.gov.uk/apply/applicant",
        },
    },
};
exports.default = findAndApplyForAGrant;
