const apprenticeshipsService = {
    clientId: {
        production: "x3F_Iu0LgqJpegY5ni0QSB0uezw",
        integration: "x3F_Iu0LgqJpegY5ni0QSB0uezw",
        nonProduction: "apprenticeshipsService",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "account",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: true, nonProduction: true },
    translations: {
        en: {
            header: "Manage apprenticeships",
            description: "Manage your apprentices, training providers, recruitment and funding.",
            linkText: "Go to your apprenticeship service account",
            linkUrl: "https://accounts.manage-apprenticeships.service.gov.uk/service",
        },
        cy: {
            header: "Rheoli prentisiaethau",
            description: "Rheoli eich prentisiaid, darparwyr hyfforddiant, recriwtio a chyllid.",
            linkText: "Ewch i'ch cyfrif gwasanaeth prentisiaeth",
            linkUrl: "https://accounts.manage-apprenticeships.service.gov.uk/service",
        },
    },
};
export default apprenticeshipsService;
