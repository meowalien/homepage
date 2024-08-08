import {useTranslation} from "@/i18n";
import PageContainer from "@/components/PageContainer";
import {redirect} from 'next/navigation'
import MyMarkdown from "@/components/MyMarkdown";
import GrayBackground from "@/components/GrayBackground";
import Article from "@/components/Article";

type PageProps = { params: { lng: string, article_id: string } };


export async function generateMetadata({params: {lng, article_id}}: PageProps) {
    const namespace = `article.${article_id}`;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t, i18n} = await useTranslation(lng, namespace);
    // console.log("`${namespace}:title`: ",`${namespace}:title`)
    if (!i18n.exists(`${namespace}:title`)) {
        redirect('/404')
    }
    return {
        title: t("title"),
    };
}

export default async function Page({params: {lng, article_id}}: PageProps) {
    const namespace = `article.${article_id}`;

    const {t, i18n} = await useTranslation(lng, namespace);
    // console.log("name: ",`${namespace}:content`)
    // console.log("exist: ",i18n.exists(`${namespace}:content`))
    return (
        <Article lng={lng} markdown={t("content")}/>
    );
}
