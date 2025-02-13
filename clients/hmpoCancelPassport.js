const hmpoCancelPassport = {
    clientId: {
        production: "l6GFmD8ndn7afVcm6SqAHlM8IVM",
        integration: "l6GFmD8ndn7afVcm6SqAHlM8IVM",
        nonProduction: "hmpoCancelPassport",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "account",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: true, nonProduction: true },
    translations: {
        en: {
            header: "Cancel a lost or stolen passport",
            description: "Report a passport as lost or stolen or apply for a replacement.",
            linkText: "Go to your cancel a lost or stolen passport account",
            linkUrl: "https://www.loststolenpassport.service.gov.uk/lost-stolen/passport-holder",
        },
        cy: {
            header: "Canslo pasbort sydd wedi cael ei golli neu ei ddwyn",
            description: "Rhoi gwybod am basbort sydd wedi cael ei golli neu wedi'i ddwyn neu wneud cais am basbort newydd.",
            linkText: "Ewch i'ch cyfrif canslo eich pasbort sydd wedi cael ei golli neu ei ddwyn",
            linkUrl: "https://www.loststolenpassport.service.gov.uk/lost-stolen/passport-holder",
        },
    },
};
export default hmpoCancelPassport;
