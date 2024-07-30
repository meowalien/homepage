import {useTranslation} from "@/i18n";
import {FooterBase} from "./FooterBase";
import {headers} from "next/headers";

type FooterProps = { lng: string };
export const Footer = async ({lng}: FooterProps) => {
    const {t} = await useTranslation(lng, "footer");
    const headerList = headers();
    const pathname = headerList.get("x-current-path");
    if (pathname === null) {
        throw new Error("x-current-path header is missing");
    }
    return <FooterBase t={t} lng={lng} pathname={pathname}/>;
};