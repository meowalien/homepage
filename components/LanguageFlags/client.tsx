"use client";

import { Base} from "./base";
import {usePathname} from "next/navigation";
import {ReactNode} from "react";


type LanguageFlagsProps = {
    lng: string;
    children?: (tag: ReactNode, index:number) => ReactNode;
};
export const LanguageFlags = ({lng, children}: LanguageFlagsProps) => {
    const pathname = usePathname()

    // const {t} = useTranslation(lng, "footer");
    return children ? <Base lng={lng} pathname={pathname}>
        {children}
    </Base> : <Base lng={lng} pathname={pathname}/>;
};