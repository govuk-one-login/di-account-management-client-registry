const checkFamilyEligibility = {
    clientId: {
        production: "CKHfr_Kz84LYFnsP7m6YJBXqBzw",
        integration: "CKHfr_Kz84LYFnsP7m6YJBXqBzw",
        nonProduction: "checkFamilyEligibility",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "service",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: false, nonProduction: false },
    translations: {
        en: {
            header: "Check a family’s eligibility for free school meals",
            linkText: "Check a family’s eligibility for free school meals",
            linkUrl: "https://check-free-school-meals.education.gov.uk/",
        },
        cy: {
            header: "Gwiriwch gymhwysedd teulu i gael prydau ysgol am ddim",
            linkText: "Gwiriwch gymhwysedd teulu i gael prydau ysgol am ddim",
            linkUrl: "https://check-free-school-meals.education.gov.uk/",
        },
    },
};
export default checkFamilyEligibility;
