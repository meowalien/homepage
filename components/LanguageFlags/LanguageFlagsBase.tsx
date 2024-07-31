import {languages} from "@/i18n/settings";
import Flag from 'react-world-flags';
import {ReactNode} from "react";
import Link from "next/link";


const getFlagCode = (lng: string) => {
    const languageCountryMap: { [key: string]: string } = {
        'en': 'US',
        'zh-Hant': 'TW',
    };

    return languageCountryMap[lng] || '';
};

export type FooterBaseProps = {
    lng: string;
    pathname: string;
    children?: (tag: ReactNode, index:number) => ReactNode;
};
export const LanguageFlagsBase = ({lng, pathname, children}: FooterBaseProps) => {
    // remove every thing before the second slash, if second slash is not present then return empty string
    const path = pathname?.split("/").slice(2).join("/") || "";
    return (
        languages
                .filter((l) => lng !== l)
                .map((l, index) => {
                    const flag = <Link key={index} href={`/${l}/${path}`}><Flag code={getFlagCode(l)} className="w-10 inline"/></Link>
                    return children ? children(flag,index) : flag
                })
    );
};