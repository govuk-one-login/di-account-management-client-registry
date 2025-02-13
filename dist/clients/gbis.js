const gbis = {
    clientId: {
        production: "FakIq5aYsHQ02dBOc6XwyA1wRRs",
        integration: "FakIq5aYsHQ02dBOc6XwyA1wRRs",
        nonProduction: "gbis",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "account",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: false, nonProduction: false },
    translations: {
        en: {
            header: "Great British Insulation Scheme (GBIS)",
            description: "Send your completed customer energy efficiency measures to Ofgem for review.",
            linkText: "Go to your GBIS dashboard",
            linkUrl: "https://gbinsulationscheme.ofgem.gov.uk/",
        },
        cy: {
            header: "Cynllun Inswleiddio Prydain Fawr (GBIS)",
            description: "Anfonwch eich mesurau effeithlonrwydd ynni cwsmeriaid wedi'u cwblhau i Ofgem i'w hadolygu.",
            linkText: "Ewch i'ch dangosfwrdd GBIS",
            linkUrl: "https://gbinsulationscheme.ofgem.gov.uk/",
        },
    },
};
export default gbis;
