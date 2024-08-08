import GrayBackground from "@/components/GrayBackground";
import PageContainer from "@/components/PageContainer/client";
import MyMarkdown from "@/components/MyMarkdown";


type PageProps = { lng: string, markdown: string , className?: string };

export default function Article({lng, markdown,className}: PageProps){
        return (
        <GrayBackground className={className}>
            <PageContainer params={{lng}}>
                <MyMarkdown markdown={markdown}  className="p-10"/>
            </PageContainer>
        </GrayBackground>
    );
}