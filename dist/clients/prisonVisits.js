"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisonVisits = {
    clientId: {
        production: "XbPzF-ccO0utCxlifxSyA4Ng0API2XTCQQ",
        integration: "XbPzF-ccO0utCxlifxSyA4Ng0API2XTCQQ",
        nonProduction: "prisonVisits",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "account",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: false, nonProduction: false },
    translations: {
        en: {
            header: "Visit someone in prison",
            description: "Make a booking to visit someone in prison.",
            linkText: "Go to your visit someone in prison account",
            linkUrl: "https://prison-visits.service.justice.gov.uk/",
        },
        cy: {
            header: "Ymweld â rhywun yn y carchar",
            description: "Trefnu i ymweld â rhywun yn y carchar.",
            linkText: "Ewch i'ch cyfrif ymweld â rhywun yn y carchar",
            linkUrl: "https://prison-visits.service.justice.gov.uk/",
        },
    },
};
exports.default = prisonVisits;
