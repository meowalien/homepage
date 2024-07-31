import {LanguageFlagsBase} from "./LanguageFlagsBase";
import {headers} from "next/headers";
import {ReactNode} from "react";

type LanguageFlagsProps = {
    lng: string;
    children?: (tag: ReactNode, index:number) => ReactNode;
};
export const LanguageFlags = async ({lng, children}: LanguageFlagsProps) => {
    // const {t} = await useTranslation(lng, "footer");
    const headerList = headers();
    const pathname = headerList.get("x-current-path");
    if (pathname === null) {
        throw new Error("x-current-path header is missing");
    }
    return children?<LanguageFlagsBase lng={lng} pathname={pathname}>
        {children}
    </LanguageFlagsBase>:<LanguageFlagsBase lng={lng} pathname={pathname}/>;
};