import {useTranslation} from "@/i18n";
import {LanguageFlags} from "@/components/LanguageFlags";

const ChangeLanguageLink = async ({lng, className}: { lng: string, className?: string }) => {
    const {t} = await useTranslation(lng, "translation");

    return <div className={`mb-6 ${className}`}>
        {t("change-language")}
        <LanguageFlags lng={lng}>
            {(tag, index) => {
                return <span>
                    {index > 0 && t("change-language-or")}
                    {tag}
                    </span>
            }}
        </LanguageFlags>
    </div>
}
export default ChangeLanguageLink;