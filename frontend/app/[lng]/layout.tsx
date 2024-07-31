import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ReactElement} from "react";
import {dir} from "i18next";
import {languages} from "@/i18n/settings";
import "./globals.css";

type RootLayoutProps = { children: ReactElement; params: { lng: string } };

export async function generateStaticParams() {
    return languages.map((lng) => ({lng}));
}

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                       params: {lng},

                                   }: Readonly<RootLayoutProps>) {
    return (
        <html lang={lng} dir={dir(lng)} className="h-full w-full">
        <body className={`${inter.className} h-full w-full`}>{children}</body>
        </html>
    );
}
