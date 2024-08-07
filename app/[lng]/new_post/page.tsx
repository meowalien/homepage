import {useTranslation} from "@/i18n";
import PageContainer from "@/components/PageContainer";
import MyMarkdown from "@/components/Markdown";

type PageProps = { params: { lng: string } };


const FormatedMarkdown = ({markdown}: { markdown: string }) => {
    return (
        <MyMarkdown
            className="text-darkest-gray flex flex-col leading-1 [&_li]:list-disc [&_ul]:pl-6 [&_h3]:font-bold [&_ul]:mb-4 [&_p]:mb-4 leading-normal print:text-sm"
            markdown={markdown}/>
    );
}

export async function generateMetadata({params: {lng}}: PageProps) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = await useTranslation(lng, "new_post");
    return {
        title: t("title"),
    };
}

export default async function Page({params: {lng}}: PageProps) {
    const {t} = await useTranslation(lng, "new_post");
    return (
        <PageContainer params={{lng}}>
            <FormatedMarkdown markdown={t("content")}/>
        </PageContainer>
    );
}
