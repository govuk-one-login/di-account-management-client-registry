const aas = {
    clientId: {
        production: "dVrdJ7aemrvR0YlX7lDRaXnz0mE",
        integration: "dVrdJ7aemrvR0YlX7lDRaXnz0mE",
        nonProduction: "aas",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "account",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: true, nonProduction: true },
    translations: {
        en: {
            header: "Apprenticeship assessment service (AAS)",
            description: "See or record your apprenticeship assessments.",
            linkText: "Go to your apprenticeship assessments account",
            linkUrl: "https://assessors.apprenticeships.education.gov.uk/account/signin",
        },
        cy: {
            header: "Gwasanaeth asesu prentisiaeth (AAS)",
            description: "Gweld neu gofnodi eich asesiadau prentisiaeth.",
            linkText: "Ewch i'ch cyfrif asesiadau prentisiaeth",
            linkUrl: "https://assessors.apprenticeships.education.gov.uk/account/signin",
        },
    },
};
export default aas;
