import Link from "next/link";
import {useTranslation} from "@/i18n";
import {Footer} from "@/components/Footer";

type PageProps = { params: { lng: string } };
export default async function Page({params: {lng}}: PageProps) {
    const {t} = await useTranslation(lng, "translation");

    return (
        <>
            <h1 className="text-amber-500">{t("title")}</h1>
            <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
            <br/>
            <Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
            <Footer lng={lng}/>
        </>
    );
}
