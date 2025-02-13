const dwpBenefitOwed = {
    clientId: {
        production: "kvGpTatgWm3YqXHbG41eOdDf91k",
        integration: "iOf3hyG7eymusbSUS6LgFeQ7AtU",
        nonProduction: "dwpBenefitOwed",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "account",
    isHmrc: false,
    isReportSuspiciousActivityEnabled: false,
    showInClientSearch: { production: true, nonProduction: true },
    translations: {
        en: {
            header: "Repay and manage benefit money you owe",
            description: "Repay any money you owe to the Department for Work and Pensions (DWP).",
            linkText: "Go to your Repay and manage benefit money you owe account",
            linkUrl: {
                nonProduction: "https://www.repay-manage-benefit-owed.service.gov.uk/oidv-sign-in",
                integration: "http://localhost:8000/landing?source=your-services",
                production: "https://www.repay-manage-benefit-owed.service.gov.uk/oidv-sign-in",
            },
        },
        cy: {
            header: "Ad-dalu a rheoli arian budd-dal sy'n ddyledus gennych",
            description: "Ad-dalu unrhyw arian sy'n ddyledus gennych i'r Adran Gwaith a Phensiynau (DWP).",
            linkText: "Ewch i Ad-dalu a rheoli arian budd-dal sy’n ddyledus gennych",
            linkUrl: {
                nonProduction: "https://www.repay-manage-benefit-owed.service.gov.uk/oidv-sign-in",
                integration: "http://localhost:8000/landing?source=your-services",
                production: "https://www.repay-manage-benefit-owed.service.gov.uk/oidv-sign-in",
            },
        },
    },
};
export default dwpBenefitOwed;
