'use client';
import MDEditor from "@uiw/react-md-editor";
import {useCallback, useEffect, useState} from "react";
import Article from "@/components/Article/client";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import {useDebouncedValue, useDidUpdate, useDisclosure} from '@mantine/hooks';
import Link from "next/link";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {FaTimes} from 'react-icons/fa';

type PageProps = { lng: string };

const createQueryString = (searchParams: URLSearchParams, name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
};

const EditPost = ({lng}: PageProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const defaultArticleTitle = decodeURIComponent(searchParams.get('name') || "");
    const [articleTitle, setArticleTitle] = useState<string>(defaultArticleTitle);
    const [debouncedArticleTitle] = useDebouncedValue(articleTitle, 200);
    const namespace = `article.${articleTitle}`;
    const [markdownContent, setMarkdownContent] = useState('');
    const [currOrigin, setCurrentOrigin] = useState('');
    const [postExist, postExistHandlers] = useDisclosure(false);
    const [canSubmit, canSubmitHandlers] = useDisclosure(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        setCurrentOrigin(window.location.origin);
    }, []);

    const deletePost = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        fetch(`${process.env.NEXT_PUBLIC_I18N_ENDPOINT}/${lng}/${namespace}`, {
            credentials: 'include',
            method: "DELETE",
            headers: myHeaders,
            redirect: "follow",
        })
            .then((response: any) => {
                if (!response.ok) {
                    response.text().then((text: string) => {
                        setErrorMessage("Failed to delete the post: " + text);
                    }).catch((error: any) => {
                        console.error(error);
                        setErrorMessage("Failed to delete the post");
                    });
                }
            })
            .catch((error: any) => {
                console.error(error);
            });
    };

    const submitPost = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestBody = {
            title: articleTitle,
            content: markdownContent
        };

        fetch(`${process.env.NEXT_PUBLIC_I18N_ENDPOINT}/${lng}/${namespace}`, {
            credentials: 'include',
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(requestBody),
            redirect: "follow",
        })
            .then((response: any) => {
                if (!response.ok) {
                    response.text().then((text: string) => {
                        setErrorMessage("Failed to submit the post: " + text);
                    }).catch((error: any) => {
                        console.error(error);
                        setErrorMessage("Failed to submit the post");
                    });
                }
            })
            .catch((error: any) => {
                console.error(error);
            });
    };

    const loadPost = useCallback(() => {
        fetch(`${process.env.NEXT_PUBLIC_I18N_ENDPOINT}/${lng}/${namespace}`, {cache: "no-cache"})
            .then(response => {
                if (!response.ok) {
                    postExistHandlers.close();
                    if (response.status == 404) {
                        return;
                    }

                    response.text().then((text: string) => {
                        setErrorMessage("Failed to load the post: " + text);
                    }).catch((error: any) => {
                        console.error(error);
                        setErrorMessage("Failed to load the post");
                    });
                    return;
                }

                response.json().then((data) => {
                    if (!data.content) {
                        console.error("No content found: ", data);
                        return;
                    }
                    setMarkdownContent(data.content);
                    postExistHandlers.open();
                });

            })
            .catch((error) => {
                console.log(error);
                postExistHandlers.close();
            })
            .finally(() => {
                const uri = pathname + '?' + createQueryString(searchParams, 'name', articleTitle);
                console.log("uri: ", uri);
                router.push(uri);
            });
    }, [lng, namespace, postExistHandlers, router, pathname, searchParams, articleTitle]);

    useEffect(() => {
        loadPost();
    }, [debouncedArticleTitle]);

    const updateCanSubmit = () => {
        if (debouncedArticleTitle && markdownContent) {
            canSubmitHandlers.open();
        } else {
            canSubmitHandlers.close();
        }
    };

    useDidUpdate(() => {
        updateCanSubmit();
    }, [debouncedArticleTitle, markdownContent]);

    const articleLink = `${currOrigin}/${lng}/article/${encodeURIComponent(articleTitle)}`;

    return (
        <div className="px-10 py-5 flex flex-col desktop:flex-row ">
            {errorMessage && (
                <div className="fixed top-5 right-5 bg-red-500 text-white p-3 rounded z-50 flex flex-row gap-2">
                    <button onClick={() => setErrorMessage(null)}>
                        <FaTimes className="h-5 w-5"/>
                    </button>
                    <p>{errorMessage}</p>
                </div>
            )}
            <div className="flex flex-col items-center desktop:w-[calc(50%-14rem)] flex-shrink-0">
                <span>Article URL: <Link href={articleLink}>{articleLink}</Link></span>
                <div className="flex flex-row items-center gap-2 justify-start w-full ">
                    <Button
                        isDisabled={!postExist}
                        color="danger" onClick={() => {
                        deletePost();
                        postExistHandlers.close();
                    }}>
                        Delete
                    </Button>
                    <Input type="text" label="Article Name" value={articleTitle} onValueChange={(newValue) => {
                        setArticleTitle(newValue);
                    }}/>
                    <Button
                        isDisabled={!canSubmit}
                        color="primary" onClick={() => {
                        submitPost();
                        postExistHandlers.open();
                        canSubmitHandlers.close();
                    }}>
                        Submit
                    </Button>
                </div>
                <MDEditor
                    extraCommands={[]}
                    className=" w-full"
                    height="100%"
                    preview="edit"
                    value={markdownContent}
                    onChange={(value) => setMarkdownContent(value || '')}
                />
            </div>
            <Article lng={lng} markdown={markdownContent}/>
        </div>
    );
};

export default EditPost;