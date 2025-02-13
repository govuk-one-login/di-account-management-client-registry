"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CMAD = {
    clientId: {
        production: "Q2tqV5C1nGXFVMUcnpqbOUTrZuw",
        integration: "Q2tqV5C1nGXFVMUcnpqbOUTrZuw",
        nonProduction: "CMAD",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "account",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: true, nonProduction: true },
    translations: {
        en: {
            header: "Confirm my apprenticeship details (CMAD)",
            description: "Check and confirm your apprenticeship details.",
            linkText: "Go to your account to confirm your apprenticeship",
            linkUrl: "https://confirm.my.apprenticeships.education.gov.uk/",
        },
        cy: {
            header: "Cadarnhau manylion fy mhrentisiaethau (CMAD)",
            description: "Gwirio a chadarnhau eich manylion prentisiaeth.",
            linkText: "Ewch i'ch cyfrif i gadarnhau eich prentisiaeth",
            linkUrl: "https://confirm.my.apprenticeships.education.gov.uk/",
        },
    },
};
exports.default = CMAD;
