"use client";

import {FooterBase} from "./FooterBase";
import {useTranslation} from "@/i18n/client";
import {usePathname} from "next/navigation";

type FooterProps = { lng: string };
export const Footer = ({lng}: FooterProps) => {
    const pathname = usePathname()

    const {t} = useTranslation(lng, "footer");
    return <FooterBase t={t} lng={lng} pathname={pathname}/>;
};