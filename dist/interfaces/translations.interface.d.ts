export interface Translation {
    header: string;
    description?: string;
    link_text: string;
    link_href: string;
}
export type TranslationsObject = Record<string, Translation>;
