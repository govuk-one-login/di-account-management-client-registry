const govuk = {
    clientId: {
        production: "LcueBVCnGZw-YFdTZ4S07XbQx7I",
        integration: "CEr97IZfEPQFgBxq8QNcM8LFxw4",
        nonProduction: "gov-uk",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "account",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: true, nonProduction: true },
    translations: {
        en: {
            header: "GOV.UK email subscriptions",
            description: "See and manage the updates you get about GOV.UK pages you’re interested in.",
            linkText: "Go to your GOV.UK email subscriptions",
            linkUrl: {
                nonProduction: "https://www.integration.publishing.service.gov.uk/email/manage?from=your-services",
                integration: "https://www.staging.publishing.service.gov.uk/email/manage?from=your-services",
                production: "https://www.gov.uk/email/manage?from=your-services",
            },
        },
        cy: {
            header: "Tanysgrifiadau e-byst GOV.UK",
            description: "Gweld a rheoli’r diweddariadau rydych yn eu cael am dudalennau GOV.UK mae gennych ddiddordeb ynddynt.",
            linkText: "Ewch i’ch tanysgrifiadau e-byst GOV.UK",
            linkUrl: {
                nonProduction: "https://www.integration.publishing.service.gov.uk/email/manage?from=your-services",
                integration: "https://www.staging.publishing.service.gov.uk/email/manage?from=your-services",
                production: "https://www.gov.uk/email/manage?from=your-services",
            },
        },
    },
};
export default govuk;
