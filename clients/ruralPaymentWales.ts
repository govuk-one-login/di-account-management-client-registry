import { Client } from "../interfaces/client.interface";

const ruralPaymentWales: Client = {
  clientId: {
    production: "SdpFRM0HdX38FfdbgRX8qzTl8sm",
    integration: "SdpFRM0HdX38FfdbgRX8qzTl8sm",
    nonProduction: "ruralPaymentWales",
  },
  isAvailableInWelsh: true,
  isAllowed: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Rural Payment Wales",
      description: "Apply for a Rural Payment Wales grant or payment.",
      linkText: "Go to your Rural Payment Wales account",
      linkUrl: "https://rpwonline.gov.wales",
    },
    cy: {
      header: "Taliadau Gwledig Cymru",
      description: "Gwneud cais am grant neu daliad Taliadau Gwledig Cymru.",
      linkText: "Ewch i'ch cyfrif Taliad Gwledig Cymru",
      linkUrl: "https://rpwonline.gov.wales",
    },
  },
};

export default ruralPaymentWales;
