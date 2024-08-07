import {useTranslation} from "@/i18n";
import MyMarkdown from "@/components/Markdown";
import PageContainer from "@/components/PageContainer";
import {redirect} from 'next/navigation'

type PageProps = { params: { lng: string, article_id: string } };


const FormatedMarkdown = ({markdown}: { markdown: string }) => {
    return (
        <MyMarkdown
            className="text-darkest-gray flex flex-col leading-1 [&_li]:list-disc [&_ul]:pl-6 [&_h3]:font-bold [&_ul]:mb-4 [&_p]:mb-4 leading-normal print:text-sm"
            markdown={markdown}/>
    );
}

export async function generateMetadata({params: {lng, article_id}}: PageProps) {
    const namespace = `article.${article_id}`;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t, i18n} = await useTranslation(lng, namespace);
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

    return (
        <PageContainer params={{lng}}>
            <FormatedMarkdown markdown={t("content")}/>
        </PageContainer>
    );
}
