import {useTranslation} from "@/i18n";
import avatarImage from "@/public/Avatar 600x600.jpg";
import Image from "next/image";
import MyMarkdown from "@/components/Markdown";
import {LanguageFlags} from "@/components/LanguageFlags";
import {ReactNode} from "react";

type PageProps = { params: { lng: string } };

const SectionTitle = ({children}: { children: ReactNode }) => {
    return (
        <div className="break-after-avoid flex items-end pb-4 mb-8 border-b border-main-text ">
            <h2 className="break-inside-avoid text-section-title font-bold text-main-text">
                {children}
            </h2>
            <div className="relative ml-auto"></div>
        </div>
    );
}

const BasicInfoBar = async ({lng}: { lng: string }) => {
    const {t} = await useTranslation(lng, "resume");

    return (
        <div className="relative break-after-avoid break-inside-avoid mb-6">
            <div className="flex relative w-full min-h-[8rem] md:min-h-[10rem] bg-title-bar">
                <div
                    className="absolute bottom-0 w-40 h-40 left-1/2 -translate-x-1/2 translate-y-1/2 md:left-[3.75rem] md:translate-x-0">
                    <Image src={avatarImage} alt="" className="rounded-full border-4 border-white"/>
                </div>
            </div>
            <div
                className="mt-[76px] md:mt-3 md:pl-[16.25rem] md:pt-[.75rem] md:pr-[3.75rem] mb-5 flex flex-col md:flex-row justify-start md:justify-between w-full items-center md:items-end text-main-text md:top-0 md:absolute md:text-white">
                <div className="flex flex-col gap-y-0 items-center">
                    <h1 className="text-[2.25rem] font-bold text-center tracking-[0.0235rem] leading-normal">{t("name")}</h1>
                    <span className="text-lg font-bold text-center md:hidden">{t("jobTitle")}</span>
                </div>
                <div className="flex flex-col gap-y-2 items-center md:items-start">
                    <div className="flex gap-x-2 items-center">
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20" className="shrink-0 w-6 h-6">
                            <path
                                d="M14 12.5c-1.269 0-1.488-.047-2.256.213a5.454 5.454 0 01-3.488 0c-.769-.26-.984-.213-2.256-.213a4 4 0 00-4 4v.5c0 .553.447 1 1 1h14c.553 0 1-.447 1-1v-.5a4 4 0 00-4-4zm2.5 4h-13c0-.669.26-1.297.731-1.769A2.484 2.484 0 016 14c1.284 0 1.281-.034 1.775.131A6.923 6.923 0 0010 14.5c.756 0 1.506-.125 2.225-.369.494-.168.49-.131 1.775-.131 1.378 0 2.5 1.122 2.5 2.5zM10 12c2.762 0 5-2.238 5-5 0-2.763-2.238-5-5-5-2.763 0-5 2.237-5 5 0 2.762 2.237 5 5 5zm0-8.5c1.931 0 3.5 1.569 3.5 3.5s-1.569 3.5-3.5 3.5A3.502 3.502 0 016.5 7c0-1.931 1.569-3.5 3.5-3.5z"
                                fill="currentColor"></path>
                        </svg>
                        <div className="text-general font-normal">
                            {t("gender")}
                        </div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20" className="shrink-0 w-6 h-6">
                            <path
                                d="M15.637 3c-2.843 0-5.259 2.122-6.084 5.044C8.393 6.206 6.5 5 4.363 5H2v.75C2 9.747 4.866 13 8.387 13h.863v3.5c0 .275.225.5.5.5h.5c.275 0 .5-.225.5-.5V11h.863C15.134 11 18 7.747 18 3.75V3h-2.363zm-7.25 8.5c-2.478 0-4.534-2.181-4.846-5h.818c2.479 0 4.535 2.181 4.847 5h-.819zm3.226-2h-.82c.313-2.819 2.37-5 4.848-5h.818c-.312 2.819-2.368 5-4.846 5z"
                                fill="currentColor"></path>
                        </svg>
                        <div className="text-general font-normal">
                            {t("birthday")}
                        </div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20" className="shrink-0 w-6 h-6">
                            <path
                                d="M11 15a.999.999 0 11-2 0 .999.999 0 112 0zm1.5-1.875v-8.25a.376.376 0 00-.375-.375h-4.25a.376.376 0 00-.375.375v8.25c0 .206.169.375.375.375h4.25a.376.376 0 00.375-.375zM15 3.5v13a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 015 16.5v-13A1.5 1.5 0 016.5 2h7A1.5 1.5 0 0115 3.5zm-1.5 12.813V3.688a.188.188 0 00-.188-.188H6.689a.188.188 0 00-.188.188v12.624c0 .104.084.188.188.188h6.625a.188.188 0 00.187-.188z"
                                fill="currentColor"></path>
                        </svg>
                        <div className="text-general font-normal">
                            {t("phone")}
                        </div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20" className="shrink-0 w-6 h-6">
                            <path
                                d="M16.5 4h-13A1.5 1.5 0 002 5.5v9A1.5 1.5 0 003.5 16h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0016.5 4zm0 1.5v1.275c-.7.57-1.818 1.458-4.206 3.328-.526.414-1.569 1.409-2.294 1.397-.725.012-1.768-.983-2.294-1.397C5.318 8.233 4.2 7.346 3.5 6.775V5.5h13zm-13 9V8.7c.716.57 1.732 1.37 3.28 2.583.682.537 1.878 1.724 3.22 1.717 1.335.007 2.516-1.162 3.22-1.717A532.336 532.336 0 0016.5 8.7v5.8h-13z"
                                fill="currentColor"></path>
                        </svg>
                        <div className="text-general font-normal">
                            {t("emailContact")}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="hidden md:!flex flex-wrap gap-x-4 gap-y-2 items-center mt-4 ml-[16.25rem] print:ml-[12.5rem] min-h-[3rem] tablet:!flex print:max-w-md print:flex-wrap">
                <div
                    className="shrink-0 w-fit text-[1.5rem] font-medium leading-normal text-main-text">{t("jobTitle")}                </div>
            </div>
        </div>
    );
}


const Pole = () => {
    return (
        <div className="relative mt-3">
            <div className="w-3 h-3 bg-white rounded-full border border-main-text"></div>
            <div
                className="absolute top-3 left-1/2 w-px !bg-main-text h-[calc(100%_+_32px)]"></div>
        </div>
    );
}

const FormatedMarkdown = ({markdown}: { markdown: string }) => {
    return (
        <MyMarkdown
            className="text-darkest-gray flex flex-col leading-1 [&_li]:list-disc [&_ul]:pl-6 [&_h3]:font-bold [&_ul]:mb-4 [&_p]:mb-4 leading-normal"
            markdown={markdown}/>
    );
}

const ChangeLanguageLink = async ({lng}: { lng: string }) => {
    const {t} = await useTranslation(lng, "translation");

    return <div className="mb-6">
        {t("change-language")}
        <LanguageFlags lng={lng}>
            {(tag, index) => {
                return <span>
                    {index > 0 && t("change-language-or")}
                    {tag}
                    </span>
            }}
        </LanguageFlags>
    </div>
}

export default async function Page({params: {lng}}: PageProps) {
    const {t} = await useTranslation(lng, "resume");

    return (
        <div className="bg-main-page-background w-full flex flex-col items-center">
            <div className="md:mt-6 mb-8 w-full max-w-[980px] border-[1px] border-outline-gray bg-white">
                <BasicInfoBar lng={lng}/>
                <div className="flex flex-col gap-10 px-5 md:px-10">
                    <section className="px-5 py-4 flex-grow break-inside-avoid">
                        <SectionTitle>{t("summary")}</SectionTitle>
                        <FormatedMarkdown markdown={t("summary_content")}/>
                    </section>
                    <section className=" flex-grow overflow-hidden">
                        <SectionTitle>{t("job_history-title")}</SectionTitle>
                        <div className="flex flex-col gap-8">
                            {
                                // @ts-ignore
                                t("job_history", {returnObjects: true}).map((job, index) => {
                                    return <section className="flex" key={index}>
                                        <div
                                            className="hidden md:block text-right shrink-0 mt-1.5 mr-4 text-middle-grey-2 w-[180px]">
                                            {job.time}
                                        </div>
                                        <Pole/>
                                        <div className="grow ml-6">
                                            <div
                                                className="md:hidden shrink-0 mt-1.5 mr-4  text-middle-grey-2">
                                                {job.time}
                                            </div>
                                            <div
                                                className="flex flex-col md:flex-row flex-wrap gap-y-0.5 justify-between items-start mb-3 font-bold text-main-text">
                                                <div className="text-highlight" data-cy="experience-title">
                                                    {job.job_title}
                                                </div>
                                                <div>
                                                    {job.company}
                                                </div>
                                            </div>
                                            <FormatedMarkdown markdown={job.content}/>
                                        </div>
                                    </section>
                                })
                            }
                        </div>
                    </section>
                    <section className="px-5 py-4 flex-grow">
                        <SectionTitle>{t("skills-title")}</SectionTitle>
                        <div className="grid grid-cols-1 gap-6">
                            {
                                // @ts-ignore
                                t("skills", {returnObjects: true}).map((skill, index) => {
                                    return <div key={index} className="flex flex-col flex-wrap">
                                        <div className="flex flex-wrap gap-x-4 gap-y-2 items-center mb-2 md:mb-3">
                                            <div className="text-highlight font-bold">{skill.name}</div>
                                            <div className="text-emphasize"
                                                 data-cy="skill-proficiency">{skill.level}</div>
                                        </div>
                                        <div className="flex flex-wrap gap-x-2 gap-y-1 mb-2 md:mb-3">
                                            {
                                                // @ts-ignore
                                                skill.skills.map((tag, index) => {
                                                    return <div
                                                        key={index}
                                                        className="inline-flex items-center whitespace-nowrap rounded-sm cursor-pointer text-darkest-gray bg-accent-fuzzy-color py-px px-2 text-sub font-normal"
                                                    >{tag}
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </section>
                    <section className="px-5 py-4 flex-grow">
                        <SectionTitle>{t("languages-title")}</SectionTitle>
                        <div className="grid gap-9 grid-cols-2">
                            {
                                // @ts-ignore
                                t("languages", {returnObjects: true}).map((languages, index) => {
                                    return <div key={index} className="break-inside-avoid flex flex-col flex-wrap">
                                        <div className="flex flex-col gap-2 md:gap-3">
                                            <div className="flex flex-wrap gap-x-3 items-center">
                                                <div className="text-highlight font-bold"
                                                     data-cy="language-name">{languages.name}
                                                </div>
                                                <div className="text-emphasize" data-cy="language-degree">
                                                    {languages.level}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </section>
                </div>
            </div>
            <ChangeLanguageLink lng={lng}/>
        </div>
    );
}
