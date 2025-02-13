const welshFisheriesPermit = {
    clientId: {
        production: "tPCCSyoMaFNbLTt0gEW609h15Uc",
        integration: "tPCCSyoMaFNbLTt0gEW609h15Uc",
        nonProduction: "welshFisheriesPermit",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "account",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: true, nonProduction: true },
    translations: {
        en: {
            header: "Manage fishing permits and catch returns in Wales",
            description: "Apply for a fishing permit and submit your catch returns in Wales.",
            linkText: "Go to your fishing permits and catch returns account",
            linkUrl: "https://fishingpermitsandcatches.service.gov.wales",
        },
        cy: {
            header: "Rheoli trwyddedau pysgota a datganiadau dalfeydd yng Nghymru",
            description: "Gwneud cais am drwydded bysgota a chyflwyno eich datganiadau dalfeydd yng Nghymru.",
            linkText: "Ewch i’ch cyfrif trwyddedau pysgota a datganiadau dalfeydd",
            linkUrl: "https://fishingpermitsandcatches.service.gov.wales",
        },
    },
};
export default welshFisheriesPermit;
