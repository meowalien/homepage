'use client';
import {ReactNode} from "react";
import ChangeLanguageLink from "@/components/ChangeLanguageLink/client";

export type PageProps = { params: { lng: string } };

const PageContainer = ({children, params: {lng}}: { children?: ReactNode } & PageProps) => {
    return (
        // <div className="bg-main-page-background w-full flex flex-col items-center">

        <>
            <div
                className="page:mt-6 mt-0 print:mt-6 mb-8 w-full max-w-[980px] border-0 page:border-[1px] border-middle-gray bg-white print:border-0">
                {children}
            </div>
            <ChangeLanguageLink lng={lng} className="print:hidden"/>
        </>
        // </div>
    )
}

export default PageContainer;