import Link from "next/link";
import {Trans} from "react-i18next/TransWithoutContext";
import {languages} from "@/i18n/settings";
import {TFunction} from "i18next";
import Flag from 'react-world-flags';


const getFlagCode = (lng: string) => {
    const languageCountryMap: { [key: string]: string } = {
        'en': 'US',
        'zh-Hant': 'TW',
    };

    return languageCountryMap[lng] || '';
};

type FooterBaseProps = {
    t: ((key: string) => string) & TFunction<"translation", undefined>;
    lng: string;
    pathname: string;
};
export const FooterBase = ({ lng, pathname}: FooterBaseProps) => {
    // remove every thing before the second slash, if second slash is not present then return empty string
    const path = pathname?.split("/").slice(2).join("/") || "";

    return (
        <span style={{marginTop: 50}}>
            {/*<Trans i18nKey="languageSwitcher" t={t} values={{lng}}>*/}
                Switch from <Flag code={getFlagCode(lng)} className="w-10 inline"/> to:
            {/*</Trans>*/}
            {languages
                // .filter((l) => lng !== l)
                .map((l, index) => {
                    return (
                        <span key={l}>
              {index > 0 && " and "}
                            <Link href={`/${l}/${path}`}>
                                {/*{`/${l}/${path}`}*/}
                                <Flag code={getFlagCode(l)} className="w-10 inline"/>
                            </Link>
            </span>
                    );
                })}
        </span>
    );
};