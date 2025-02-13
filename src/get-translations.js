import { getValueForEnvironment } from './utils';
import * as clients from '../clients';
const convertToTranslation = (translations, environment) => {
    return {
        header: translations.header,
        link_text: translations.linkText,
        link_href: getValueForEnvironment(environment, translations.linkUrl),
        description: translations.description || undefined
    };
};
const getTranslations = (environment, language) => {
    const translations = {};
    Object.keys(clients)
        .filter(key => key !== '__esModule') //this is required for the tests to work
        .forEach((client) => {
        const clientData = clients[client];
        const clientTranslations = clientData.isAvailableInWelsh && language === 'cy'
            ? clientData.translations.cy
            : clientData.translations.en;
        translations[client] = convertToTranslation(clientTranslations, environment);
    });
    return translations;
};
export default getTranslations;
