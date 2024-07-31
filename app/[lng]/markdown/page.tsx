import Markdown from '@/components/Markdown';

type PageProps = { params: { lng: string } };
export default async function Page({params: {lng}}: PageProps) {
    // const {t} = await useTranslation(lng, "translation");
    const markdown = `A paragraph with *emphasis* and **strong importance**.

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

A paragraph with *emphasis* and **strong importance**. Here is a \`inline code\` snippet.

> This is a block quote with some text.

* Unordered list item 1
* Unordered list item 2
  * Nested unordered list item
  * Nested unordered list item

1. Ordered list item 1
2. Ordered list item 2
   1. Nested ordered list item
   2. Nested ordered list item

A task list:
- [ ] Task 1
- [x] Task 2

Here is a [link to React](https://reactjs.org).

Here is an image:
![React Logo](https://reactjs.org/logo-og.png)

A table:

| Heading 1 | Heading 2 |
|-----------|-----------|
| Cell 1    | Cell 2    |
| Cell 3    | Cell 4    |

A horizontal rule:

---

A code block:

\`\`\`

    function test() {
        console.log("notice the blank line before this function?");
    }
\`\`\`

Strikethrough text: ~~This was mistaken text~~
`
    return (
        <Markdown markdown={markdown}/>
    );
}
