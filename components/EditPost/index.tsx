'use client';
import MDEditor from "@uiw/react-md-editor";
import {useCallback, useEffect, useState} from "react";
import Article from "@/components/Article/client";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import {useDebouncedValue, useDisclosure} from '@mantine/hooks';
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
            }).finally(() => {
            updateList();
            postExistHandlers.close();
            canSubmitHandlers.open();
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
            }).finally(() => {
            updateList();
            postExistHandlers.open();
            canSubmitHandlers.close();
        })
    };

    const getURL = useCallback((name: string) => {
        return pathname + '?' + createQueryString(searchParams, 'name', name)
    }, [pathname, searchParams]);

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
                    canSubmitHandlers.close();
                });
            })
            .catch((error) => {
                console.log(error);
                postExistHandlers.close();
            })
            .finally(() => {
                const uri = getURL(articleTitle);
                // console.log("uri: ", uri);
                router.push(uri);
            });
    }, [lng, namespace, postExistHandlers, canSubmitHandlers, getURL, articleTitle, router]);

    useEffect(() => {
        loadPost();
    }, [debouncedArticleTitle]);

    const updateCanSubmit = useCallback(() => {
        if (debouncedArticleTitle && markdownContent) {
            canSubmitHandlers.open();
        } else {
            canSubmitHandlers.close();
        }
    }, [canSubmitHandlers, debouncedArticleTitle, markdownContent]);


    const articleLink = `/${lng}/article/${encodeURIComponent(articleTitle)}`;
    const [items, setItems] = useState<string[]>([]);

    const updateList = useCallback(() => {
        console.log("updateList")
        fetch(`${process.env.NEXT_PUBLIC_I18N_ENDPOINT}/list/${lng}/article`)
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error("Error fetching items:", error));
    }, [lng]);

    useEffect(() => {
        updateList();
    }, [updateList]);

    return (
        <div className="px-10 py-5 flex flex-col desktop:flex-row h-full">
            {errorMessage && (
                <div className="fixed top-5 right-5 bg-red-500 text-white p-3 rounded z-50 flex flex-row gap-2">
                    <button onClick={() => setErrorMessage(null)}>
                        <FaTimes className="h-5 w-5"/>
                    </button>
                    <p>{errorMessage}</p>
                </div>
            )}

            <div className="flex flex-col desktop:flex-row desktop:w-[calc(50%-12rem)] flex-shrink-0">
                <ul className="min-w-[20rem] flex flex-col gap-1 overflow-x-scroll h-full mb-3 desktop:mb-0 ">
                    {items.map((item, index) => (
                        <li key={index}>
                            <Button
                                className="w-full bg-purple-200"
                                onClick={() => {
                                    setArticleTitle(item)
                                }}>
                                {item}
                            </Button>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col items-center">

                    <div className="flex flex-row items-center gap-2 justify-start w-full ">
                        <Button
                            isDisabled={!postExist}
                            color="danger" onClick={() => {
                            deletePost();
                        }}>
                            Delete
                        </Button>
                        <Button
                            color="secondary"
                            onClick={() => {
                                navigator.clipboard.writeText(articleLink);
                            }}>Copy URL</Button>
                        <Input type="text" label="Article Name" value={articleTitle} onValueChange={(newValue) => {
                            setArticleTitle(newValue);
                            updateCanSubmit();
                        }}/>
                        <Button
                            isDisabled={!canSubmit}
                            color="primary" onClick={() => {
                            submitPost();

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
                        onChange={(value) => {
                            setMarkdownContent(value || '')
                            updateCanSubmit()
                        }}
                    />
                </div>
            </div>
            <Article lng={lng} markdown={markdownContent}/>
        </div>
    );
};

export default EditPost;