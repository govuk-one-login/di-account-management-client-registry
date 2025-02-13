const faa = {
    clientId: {
        production: "CCdLjqwGtpAA1Td2CrNHT1yFbqa",
        integration: "CCdLjqwGtpAA1Td2CrNHT1yFbqa",
        nonProduction: "faa",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "account",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: true, nonProduction: true },
    translations: {
        en: {
            header: "Find an apprenticeship",
            description: "Search and apply for apprenticeships in England.",
            linkText: "Go to your account to search for an apprenticeship",
            linkUrl: "https://www.findapprenticeship.service.gov.uk/apprenticeshipsearch",
        },
        cy: {
            header: "Dod o Hyd i Brentisiaeth",
            description: "Chwilio a gwneud cais am brentisiaethau yn Lloegr.",
            linkText: "Ewch i'ch cyfrif i chwilio am brentisiaeth",
            linkUrl: "https://www.findapprenticeship.service.gov.uk/apprenticeshipsearch",
        },
    },
};
export default faa;
