'use client';
import MDEditor from "@uiw/react-md-editor";
import {useCallback, useEffect, useState} from "react";
import Article from "@/components/Article/client";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import {useDebouncedValue, useDidUpdate, useDisclosure} from '@mantine/hooks';
import Link from "next/link";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

type PageProps = { lng: string };


const EditPost = ({lng}: PageProps) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const [articleName, setArticleName] = useState<string>(searchParams.get('articleName') || "")
    const [debouncedArticleName] = useDebouncedValue(articleName, 500);

    const namespace = `article.${articleName}`
    const [markdownContent, setMarkdownContent] = useState('');
    const [currOrigin, setCurrentOrigin] = useState('');
    useEffect(() => {
        setCurrentOrigin(window.location.origin)
    }, [])
    const [postExist, postExistHandlers] = useDisclosure(false);
    const [canSubmit, canSubmitHandlers] = useDisclosure(false);


    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const deletePost = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        fetch(`${process.env.NEXT_PUBLIC_I18N_ENDPOINT}/${lng}/${namespace}`,
            {
                credentials: 'include',
                method: "DELETE",
                headers: myHeaders,
                // body: JSON.stringify(requestBody),
                redirect: "follow",
            })
            .then((response: any) => response.text())
            .then((result: any) => console.log(result))
            .catch((error: any) => console.error(error));
    }

    const submitPost = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestBody = {
            title: articleName,
            content: markdownContent
        }

        fetch(`${process.env.NEXT_PUBLIC_I18N_ENDPOINT}/${lng}/${namespace}`,
            {
                credentials: 'include',
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(requestBody),
                redirect: "follow",
            })
            .then((response: any) => response.text())
            .then((result: any) => console.log(result))
            .catch((error: any) => console.error(error));
    }
    const loadPost =useCallback( () => {
        console.log("loadPost")
        fetch(`${process.env.NEXT_PUBLIC_I18N_ENDPOINT}/${lng}/${namespace}`, {cache: "no-cache"}).then(response => {
            if (response.status == 200) {
                response.json().then((data) => {
                    if (!data.content) {
                        console.error("No content found: ", data)
                        return
                    }
                    setMarkdownContent(data.content)
                    postExistHandlers.open()
                })
            }
            if (response.status == 404) {
                // setMarkdownContent('')
                postExistHandlers.close()
            }
        }).catch((error) => {
            console.log(error)
            postExistHandlers.close()
        }).finally(() => {
            router.push(pathname + '?' + createQueryString('articleName', articleName))
        })
    } , [lng, namespace, postExistHandlers, router, pathname, createQueryString, articleName])

    useEffect(() => {
        loadPost()
    }, [debouncedArticleName ])

    const updateCanSubmit = () => {
        if (debouncedArticleName && markdownContent) {
            canSubmitHandlers.open()
        } else {
            canSubmitHandlers.close()
        }
    }

    useDidUpdate(() => {
        // console.log("debouncedArticleName: ",debouncedArticleName)
        // console.log("markdownContent: ", canSubmit)
        // if (debouncedArticleName && markdownContent) {
        //     console.log("canSubmitHandlers.open()")
        //     canSubmitHandlers.open()
        //     console.log("markdownContent: ", canSubmit)
        // }
        // canSubmitHandlers.close()
        updateCanSubmit()
    }, [debouncedArticleName, markdownContent])

    const articleLink = `${currOrigin}/${lng}/article/${articleName}`

    return (
        <div className="px-10 py-5 flex flex-col desktop:flex-row ">
            <div className="flex flex-col items-center desktop:w-[calc(50%-14rem)] flex-shrink-0">
                <span>Article URL: <Link href={articleLink}>{articleLink}</Link></span>
                <div className="flex flex-row items-center gap-2 justify-start w-full ">
                    <Button
                        isDisabled={!postExist}
                        color="danger" onClick={() => {
                        deletePost()
                        postExistHandlers.close()
                    }}>
                        Delete
                    </Button>
                    <Input type="text" label="Article Name" value={articleName} onValueChange={(newValue) => {
                        setArticleName(newValue)
                    }}/>
                    <Button
                        isDisabled={!canSubmit}
                        color="primary" onClick={() => {
                        submitPost()
                        postExistHandlers.open()
                        canSubmitHandlers.close()
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

    )
}

export default EditPost;