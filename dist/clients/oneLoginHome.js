"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const oneLoginHome = {
    clientId: {
        production: "KcKmx2g1GH6ersWFvzMi1bhehq4",
        integration: "Y8xi2wDAaRvWYlEkoExOUZbAPaYyBEhB",
        nonProduction: "EMGmY82k-92QSakDl_9keKDFmZY",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "service",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: false, nonProduction: false },
    translations: {
        en: {
            header: "Your GOV.UK One Login",
            description: "This includes ‘Security’ and ‘Your services’",
            linkText: "",
            linkUrl: {
                nonProduction: "https://home.staging.account.gov.uk",
                integration: "https://home.integration.account.gov.uk",
                production: "https://home.account.gov.uk",
            },
        },
        cy: {
            header: "Eich GOV.UK One Login",
            description: "Mae hyn yn cynnwys 'Diogelwch' a 'Eich gwasanaethau'",
            linkText: "",
            linkUrl: {
                nonProduction: "https://home.staging.account.gov.uk",
                integration: "https://home.integration.account.gov.uk",
                production: "https://home.account.gov.uk",
            },
        },
    },
};
exports.default = oneLoginHome;
