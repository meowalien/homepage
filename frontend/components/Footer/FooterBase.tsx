import Link from "next/link";
import {Trans} from "react-i18next/TransWithoutContext";
import {languages} from "@/i18n/settings";
import {TFunction} from "i18next";

type FooterBaseProps = {
    t: ((key: string) => string) & TFunction<"translation", undefined>;
    lng: string;
    pathname: string;
};
export const FooterBase = ({t, lng, pathname}: FooterBaseProps) => {
    // remove every thing before the second slash, if second slash is not present then return empty string
    const path = pathname?.split("/").slice(2).join("/") || "";

    return (
        <footer style={{marginTop: 50}}>
            <Trans i18nKey="languageSwitcher" t={t} values={{lng}}>
                Switch from <strong>{lng}</strong> to:
            </Trans>
            {languages
                .filter((l) => lng !== l)
                .map((l, index) => {
                    return (
                        <span key={l}>
              {index > 0 && " or "}
                            <Link href={`/${l}/${path}`}>{`/${l}/${path}`}</Link>
            </span>
                    );
                })}
        </footer>
    );
};