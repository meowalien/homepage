'use client';
import {useTranslation} from "@/i18n/client";
import {LanguageFlags} from "@/components/LanguageFlags/client";

const ChangeLanguageLink = ({lng, className}: { lng: string, className?: string }) => {
    // console.log("useTranslation: ",useTranslation)
    const {t} = useTranslation(lng, "translation");

    return <div className={`mb-6 ${className}`}>
        {t("change-language")}
        <LanguageFlags lng={lng}>
            {(tag, index) => {
                return <span key={index}>
                    {index > 0 && t("change-language-or")}
                    {tag}
                    </span>
            }}
        </LanguageFlags>
    </div>
}
export default ChangeLanguageLink;