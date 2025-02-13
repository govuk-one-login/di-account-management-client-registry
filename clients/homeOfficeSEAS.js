const homeOfficeSEAS = {
    clientId: {
        production: "PVTFrS4kgHYHFDqEb5IFanlIfcM",
        integration: "PVTFrS4kgHYHFDqEb5IFanlIfcM",
        nonProduction: "homeOfficeSEAS",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "account",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: false, nonProduction: false },
    translations: {
        en: {
            header: "Request a standard or enhanced DBS check",
            description: "Apply for standard and enhanced DBS checks.",
            linkText: "Go to your standard and enhanced DBS checks account",
            linkUrl: "https://www.request-standard-enchanced-dbs-check.gov.uk/",
        },
        cy: {
            header: "Gofyn am wiriad DBS safonol neu uwch",
            description: "Gwneud cais am wiriadau DBS safonol ac uwch.",
            linkText: "Ewch i'ch cyfrif gwirio DBS safonol ac uwch",
            linkUrl: "https://www.request-standard-enchanced-dbs-check.gov.uk/",
        },
    },
};
export default homeOfficeSEAS;
