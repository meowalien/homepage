import {useTranslation} from "@/i18n";
import EditPost from "@/components/EditPost";
import { Suspense } from 'react'


type PageProps = { params: { lng: string } };


export async function generateMetadata({params: {lng}}: PageProps) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = await useTranslation(lng, "new_post");
    return {
        title: t("title"),
    };
}

export default async function Page({params: {lng}}: PageProps) {
    return (
        <Suspense>
            <EditPost lng={lng}/>
        </Suspense>
    );
}
