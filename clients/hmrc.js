const hmrc = {
    clientId: {
        production: "mQDXGO7gWdK7V28v82nVcEGuacY",
        integration: "mQDXGO7gWdK7V28v82nVcEGuacY",
        nonProduction: "hmrc",
    },
    isAvailableInWelsh: true,
    isAllowed: true,
    clientType: "service",
    isHmrc: true,
    isReportSuspiciousActivityEnabled: true,
    showInClientSearch: { production: false, nonProduction: false },
    translations: {
        en: {
            header: "A service run by HM Revenue and Customs (HMRC)",
            linkText: "Find the HMRC service you need",
            linkUrl: "https://www.gov.uk/government/organisations/hm-revenue-customs",
        },
        cy: {
            header: "Gwasanaeth a weithredir gan Gyllid a Thollau EF (CThEF)",
            linkText: "Dod o hyd i wasanaeth CThEF rydych ei angen",
            linkUrl: "https://www.gov.uk/government/organisations/hm-revenue-customs.cy",
        },
    },
};
export default hmrc;
