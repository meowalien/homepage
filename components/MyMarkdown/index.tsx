import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import style from './markdown.module.css';

type PageProps = { markdown: string, className?: string };
export default function MyMarkdown({markdown, className}: PageProps) {
    return (
        <ReactMarkdown className={style.markdown + " " + className}
                  rehypePlugins={[rehypeHighlight, rehypeSlug]}
                  remarkPlugins={[remarkGfm , remarkToc]}
        >{markdown}</ReactMarkdown>
    );
}
