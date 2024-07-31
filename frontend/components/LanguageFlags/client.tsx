"use client";

import {FooterBaseProps, LanguageFlagsBase} from "./LanguageFlagsBase";
import {usePathname} from "next/navigation";
import {ReactNode} from "react";


type LanguageFlagsProps = {
    lng: string;
    children?: (tag: ReactNode, index:number) => ReactNode;
};
export const LanguageFlags = ({lng, children}: LanguageFlagsProps) => {
    const pathname = usePathname()

    // const {t} = useTranslation(lng, "footer");
    return children ? <LanguageFlagsBase lng={lng} pathname={pathname}>
        {children}
    </LanguageFlagsBase> : <LanguageFlagsBase lng={lng} pathname={pathname}/>;
};