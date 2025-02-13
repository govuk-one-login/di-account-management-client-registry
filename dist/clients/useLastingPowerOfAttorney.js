const useLastingPowerOfAttorney = {
    clientId: {
        production: "DduaLZl49t9hHADHyzJBmEwvbsw",
        integration: "DduaLZl49t9hHADHyzJBmEwvbsw",
        nonProduction: "useLastingPowerOfAttorney",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "account",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: true, nonProduction: true },
    translations: {
        en: {
            header: "Use a lasting power of attorney",
            description: "Share details of a lasting power of attorney",
            linkText: "Go to your lasting power of attorney dashboard",
            linkUrl: "https://use-lasting-power-of-attorney.service.gov.uk/lpa/dashboard",
        },
        cy: {
            header: "Defnyddio pwer atwrnai parhaus",
            description: "Rhannu manylion pwer atwrnai parhaus.",
            linkText: "Ewch i'ch dangosfwrdd pwer atwrnai parhaus",
            linkUrl: "https://use-lasting-power-of-attorney.service.gov.uk/lpa/dashboard",
        },
    },
};
export default useLastingPowerOfAttorney;
