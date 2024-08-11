import {ReactNode} from "react";
import ChangeLanguageLink from "@/components/ChangeLanguageLink";

export type PageProps = { params: { lng: string } };

const PageContainer = async ({children, params: {lng}}: { children?: ReactNode } & PageProps) => {
    return (
        <>
            <main
                className="page:mt-6 mt-0 print:mt-6 mb-8 w-full max-w-[980px] border-0 page:border-[1px] border-middle-gray bg-white print:border-0">
                {children}
            </main>
            <ChangeLanguageLink lng={lng} className="print:hidden"/>
        </>
    )
}

export default PageContainer;