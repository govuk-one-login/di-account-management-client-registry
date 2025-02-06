import { Client } from "../interfaces/client.interface";

const companyHouseAccounts: Client = {
  clientId: {
    production: "Hp9xO0Wda9EcI_2IO8OGeYJyrT0",
    integration: "VdmfAXiINT9wpUsGO_vVnPEbsAE",
    nonProduction: "companyHouseAccounts",
  },
  isAvailableInWelsh: true,
  isAllowed: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header: "Find and update company information",
      description:
        "View and update your company information, for example, filing history and registered office address.",
      linkText: "Go to Companies House",
      linkUrl: "https://find-and-update.company-information.service.gov.uk/",
    },
    cy: {
      header: "Dod o hyd i a diweddaru gwybodaeth cwmni",
      description:
        "Gweld a diweddaru gwybodaeth eich cwmni, er enghraifft, hanes ffeilio a chyfeiriad swyddfa gofrestredig.",
      linkText: "Ewch i Dŷ'r Cwmnïau",
      linkUrl: "https://find-and-update.company-information.service.gov.uk/",
    },
  },
};

export default companyHouseAccounts;
