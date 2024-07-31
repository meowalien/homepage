import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import styles from './markdown.module.css';

type PageProps = { markdown: string ,className?: string};
export default async function MyMarkdown({markdown,className}: PageProps) {
    return (
        <Markdown className={className} remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    );
}
