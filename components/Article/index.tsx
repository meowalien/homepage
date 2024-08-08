import GrayBackground from "@/components/GrayBackground";
import PageContainer from "@/components/PageContainer";
import MyMarkdown from "@/components/MyMarkdown";


type PageProps = { lng: string, markdown: string  };

export default function Article({lng, markdown}: PageProps){
        return (
        <GrayBackground>
            <PageContainer params={{lng}}>
                <MyMarkdown markdown={markdown}  className="p-10"/>
            </PageContainer>
        </GrayBackground>
    );
}