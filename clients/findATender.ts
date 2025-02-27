import { Client } from "../interfaces/client.interface";

const findATender: Client = {
  clientId: {
    production: "L8SSq5Iz8DstkBgno0Hx5aujelE",
    integration: "L8SSq5Iz8DstkBgno0Hx5aujelE",
    nonProduction: "findATender",
  },
  isAvailableInWelsh: true,
  isAllowed: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header: "Find a tender",
      description:
        "Publish opportunities so that suppliers can search and apply for them.",
      linkText: "Go to your Find a tender account",
      linkUrl:
        "https://supplier-information.find-tender.service.gov.uk",
    },
    cy: {
      header: "Darganfyddwch dendr",
      description:
        "Cyhoeddi cyfleoedd fel y gall cyflenwyr chwilio a gwneud cais amdanynt.",
      linkText: "Ewch i'ch cyfrif Dod o hyd i dendr",
      linkUrl:
        "https://supplier-information.find-tender.service.gov.uk",
    },
  },
};

export default findATender;
