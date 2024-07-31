import Link from "next/link";
import {useTranslation} from "@/i18n";
import { LanguageFlags } from "../../../components/LanguageFlags";


type PageProps = { params: { lng: string } };
export default async function Page({params: {lng}}: PageProps) {
    const {t} = await useTranslation(lng, "second-page");

    return (
        <>
            <h1 className="text-amber-500">{t("title")}</h1>
            <Link href={`/${lng}`}>{t("back-to-home")}</Link>
                  <LanguageFlags lng={lng} />
        </>
    );
}