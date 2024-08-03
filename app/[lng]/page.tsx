import {useTranslation} from "@/i18n";
import avatarImage from "@/public/Avatar 600x600.jpg";
import Image from "next/image";
import MyMarkdown from "@/components/Markdown";
import {LanguageFlags} from "@/components/LanguageFlags";
import {ReactNode} from "react";
import GithubCorner from "@/components/GitHubCorner";

const projectURL = "https://github.com/meowalien/homepage"

type PageProps = { params: { lng: string } };

const SectionTitle = ({children}: { children: ReactNode }) => {
    return (
        <div className="break-after-avoid break-inside-avoid flex items-end pb-4 mb-8 border-b border-main-text ">
            <h2 className="text-section-title font-bold text-main-text">
                {children}
            </h2>
            <div className="relative ml-auto"></div>
        </div>
    );
}

const BasicInfo = async ({lng}: { lng: string }) => {
    const {t} = await useTranslation(lng, "resume");

    return (<div className="flex flex-col gap-y-2 items-center md:items-start print:items-start print:text-sm">
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
                        d="M16.5 4h-13A1.5 1.5 0 002 5.5v9A1.5 1.5 0 003.5 16h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0016.5 4zm0 1.5v1.275c-.7.57-1.818 1.458-4.206 3.328-.526.414-1.569 1.409-2.294 1.397-.725.012-1.768-.983-2.294-1.397C5.318 8.233 4.2 7.346 3.5 6.775V5.5h13zm-13 9V8.7c.716.57 1.732 1.37 3.28 2.583.682.537 1.878 1.724 3.22 1.717 1.335.007 2.516-1.162 3.22-1.717A532.336 532.336 0 0016.5 8.7v5.8h-13z"
                        fill="currentColor"></path>
                </svg>
                <div className="text-general font-normal">
                    {t("emailContact")}
                </div>
            </div>
            <div className="flex gap-x-2 items-center">
                <svg className="shrink-0 w-6 h-6"
                     fill="none" width="20" height="20"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 296.528 296.528">
                    <g>
                        <path fill="currentColor" d="M295.838,115.347l0.003-0.001l-0.092-0.76c-0.001-0.013-0.002-0.023-0.004-0.036c-0.001-0.011-0.002-0.021-0.004-0.032
                                    l-0.344-2.858c-0.069-0.574-0.148-1.228-0.238-1.974l-0.072-0.594l-0.147,0.018c-3.617-20.571-13.553-40.093-28.942-56.762
                                    c-15.317-16.589-35.217-29.687-57.548-37.878c-19.133-7.018-39.434-10.577-60.337-10.577c-28.22,0-55.627,6.637-79.257,19.193
                                    C23.289,47.297-3.585,91.799,0.387,136.461c2.056,23.111,11.11,45.11,26.184,63.621c14.188,17.423,33.381,31.483,55.503,40.66
                                    c13.602,5.642,27.051,8.301,41.291,11.116l1.667,0.33c3.921,0.776,4.975,1.842,5.247,2.264c0.503,0.784,0.24,2.329,0.038,3.18
                                    c-0.186,0.785-0.378,1.568-0.57,2.352c-1.529,6.235-3.11,12.683-1.868,19.792c1.428,8.172,6.531,12.859,14.001,12.86
                                    c0.001,0,0.001,0,0.002,0c8.035,0,17.18-5.39,23.231-8.956l0.808-0.475c14.436-8.478,28.036-18.041,38.271-25.425
                                    c22.397-16.159,47.783-34.475,66.815-58.17C290.172,175.745,299.2,145.078,295.838,115.347z M92.343,160.561H66.761
                                    c-3.866,0-7-3.134-7-7V99.865c0-3.866,3.134-7,7-7c3.866,0,7,3.134,7,7v46.696h18.581c3.866,0,7,3.134,7,7
                                    C99.343,157.427,96.209,160.561,92.343,160.561z M119.03,153.371c0,3.866-3.134,7-7,7c-3.866,0-7-3.134-7-7V99.675
                                    c0-3.866,3.134-7,7-7c3.866,0,7,3.134,7,7V153.371z M182.304,153.371c0,3.033-1.953,5.721-4.838,6.658
                                    c-0.712,0.231-1.441,0.343-2.161,0.343c-2.199,0-4.323-1.039-5.666-2.888l-25.207-34.717v30.605c0,3.866-3.134,7-7,7
                                    c-3.866,0-7-3.134-7-7v-52.16c0-3.033,1.953-5.721,4.838-6.658c2.886-0.936,6.045,0.09,7.827,2.545l25.207,34.717V99.675
                                    c0-3.866,3.134-7,7-7c3.866,0,7,3.134,7,7V153.371z M233.311,159.269h-34.645c-3.866,0-7-3.134-7-7v-26.847V98.573
                                    c0-3.866,3.134-7,7-7h33.57c3.866,0,7,3.134,7,7s-3.134,7-7,7h-26.57v12.849h21.562c3.866,0,7,3.134,7,7c0,3.866-3.134,7-7,7
                                    h-21.562v12.847h27.645c3.866,0,7,3.134,7,7S237.177,159.269,233.311,159.269z"/>
                    </g>
                </svg>
                <div className="text-general font-normal">
                    <a href={t("lineID-link")}>{t("lineID")}</a>
                    {/*<QRCode value={t("lineID-link")} className="h-8 w-8 hidden print:block" />*/}
                    {/*{t("lineID-link")}*/}
                </div>
            </div>
            <div className="gap-x-2 flex-row items-start justify-start hidden print:flex">
                <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor"
                          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    />
                </svg>
                <div>
                    {/*<QRCode value={projectURL} className="h-8 w-8" />*/}
                    {projectURL}
                </div>
            </div>
        </div>
    )
}

const BasicInfoBar = async ({lng}: { lng: string }) => {
    const {t} = await useTranslation(lng, "resume");

    return (
        <div className="print:mt-8 relative break-inside-avoid break-after-avoid mb-6 print:flex print:flex-row print:justify-between print:items-center print:px-[3.75rem]">
            <div className="flex print:flex-col print:items-center relative w-full print:w-auto min-h-[8rem] md:min-h-[10rem] bg-title-bar print:bg-transparent ">
                <GithubCorner url={projectURL} className=" print:hidden  z-10"/>
                <div
                    className="absolute print:relative print:flex bottom-0 print:bottom-auto w-40 h-40 print:left-auto left-1/2 -translate-x-1/2 print:-translate-x-0 translate-y-1/2 print:translate-y-0 md:left-[3.75rem] md:translate-x-0 ">
                    <Image src={avatarImage} alt="" className="rounded-full border-white"/>
                </div>
                <div className="hidden print:flex flex-col gap-y-0 items-center ">
                    <h1 className="text-[2.25rem] font-bold text-center tracking-[0.0235rem] leading-normal">{t("name")}</h1>
                    <div
                        className="text-lg font-bold text-center md:hidden print:block print:text-nowrap">{t("jobTitle")}</div>
                </div>
            </div>
            <div
                className="mt-[76px] print:mt-auto mb-5 print:mb-auto flex flex-col print:flex-row justify-start print:justify-center w-full print:w-auto items-center text-main-text md:mt-3 md:pl-[16.25rem] md:pt-[.75rem] md:pr-[3.75rem] print:pr-0 md:flex-row md:justify-between md:items-end md:top-0 md:absolute md:text-white  print:pl-0 print:pt-0    ">
                <div className="flex flex-col gap-y-0 items-center print:items-start print:hidden">
                    <h1 className="text-[2.25rem] font-bold text-center tracking-[0.0235rem] leading-normal">{t("name")}</h1>
                    <div
                        className="text-lg font-bold text-center md:hidden print:block print:text-nowrap">{t("jobTitle")}</div>
                </div>
                <BasicInfo lng={lng}/>
            </div>
            <div
                className="hidden md:!flex  flex-wrap gap-x-4 gap-y-2 items-center mt-4 ml-[16.25rem] min-h-[3rem] tablet:!flex print:hidden">
                <div className="shrink-0 w-fit text-[1.5rem] font-medium leading-normal text-main-text">
                    {t("jobTitle")}
                </div>
            </div>
        </div>
    );
}


const Pole = () => {
    return (
        <div className="relative mt-3 print:hidden">
            <div className="w-3 h-3 bg-white rounded-full border border-main-text"></div>
            <div className="absolute top-3 left-1/2 w-px !bg-main-text h-[calc(100%_+_32px)]"></div>
        </div>
    );
}

const FormatedMarkdown = ({markdown}: { markdown: string }) => {
    return (
        <MyMarkdown
            className="text-darkest-gray flex flex-col leading-1 [&_li]:list-disc [&_ul]:pl-6 [&_h3]:font-bold [&_ul]:mb-4 [&_p]:mb-4 leading-normal print:text-sm"
            markdown={markdown}/>
    );
}

const ChangeLanguageLink = async ({lng, className}: { lng: string, className?: string }) => {
    const {t} = await useTranslation(lng, "translation");

    return <div className={`mb-6 ${className}`}>
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
            {/*<GithubCorner url={projectURL} className="hidden md:block print:hidden z-10"/>*/}
            <div
                className="page:mt-6 mt-0 print:mt-6 mb-8 w-full max-w-[980px] border-0 page:border-[1px] border-middle-gray bg-white print:border-0">
                <BasicInfoBar lng={lng}/>
                <div className="flex flex-col gap-10 px-5 md:px-10 print:px-10">
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
                                        <div
                                            className="flex flex-wrap gap-x-4 gap-y-2 items-center mb-2 md:mb-3 print:mb-3">
                                            <div className="text-highlight font-bold">{skill.name}</div>
                                            <div className="text-emphasize"
                                                 data-cy="skill-proficiency">{skill.level}</div>
                                        </div>
                                        <div className="flex flex-wrap gap-x-2 gap-y-1 mb-2 md:mb-3 print:mb-3">
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
                                    return <div key={index} className=" flex flex-col flex-wrap">
                                        <div className="flex flex-col gap-2 md:gap-3 print:gap-3">
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
            <ChangeLanguageLink lng={lng} className="print:hidden"/>
        </div>
    );
}
