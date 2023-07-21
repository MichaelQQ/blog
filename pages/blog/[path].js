import Head from "next/head";
import fs from "fs";
import path from "path";
import Script from "next/script";
import HtmlToReact from "html-to-react";

import { read } from "to-vfile";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

import styles from "../../styles/post-card.module.css";
import Comment from "../../components/comments";
import BuyMeACoffee from "../../components/bmc";
import readPostFile from "../../utils/file-pattern";

const Post = ({ id, title, datetime, summary, content, path }) => {
  const htmlToReactParser = new HtmlToReact.Parser();
  const reactElement = htmlToReactParser.parse(content);
  return (
    <>
      <Head>
        <meta name="description" content={JSON.stringify(summary)} />
        <meta
          name="og:url"
          content={`https://MichaelQQ.com/blog/${encodeURI(path)}`}
        />
        <meta name="og:type" content="article" />
        <meta name="og:title" content={`${title} | MichaelQQ.com`} />
        <meta name="og:description" content={JSON.stringify(summary)} />
        <meta
          name="og:image"
          content="https://MichaelQQ.com/favicon.ico?v=1.3"
        />
        <title>{`${title} | MichaelQQ.com`}</title>
      </Head>
      <Script
        src="https://michaelqq-com.disqus.com/embed.js"
        data-timestamp={+new Date()}
      />
      <div className={styles["post"]}>
        <h1>{title}</h1>
        <p>{new Date(datetime).toLocaleString()}</p>
        <div className="markdown-body">{reactElement}</div>
      </div>
      <BuyMeACoffee />
      <Comment id={id} />
    </>
  );
};

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  return {
    paths: filenames.map((filename) => {
      const post = readPostFile(postsDirectory, filename);
      return { params: { path: post.path } };
    }),
    fallback: false,
    // fallback: true or false // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const fileName = filenames.filter((name) => {
    return name.startsWith(context.params.path);
  })[0];
  const post = readPostFile(postsDirectory, fileName);
  // Generally you would parse/transform the contents
  // For example you can transform markdown to HTML here
  //
  //!!! It’s recommended to sanitize your HTML any time you do not completely trust authors or the plugins being used.
  // https://github.com/rehypejs/rehype-sanitize
  const filePath = path.join(postsDirectory, fileName);
  const vFile = await read(filePath);
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeHighlight, { ignoreMissing: true, subset: false })
    .use(rehypeSanitize, {
      ...defaultSchema,
      attributes: {
        ...defaultSchema.attributes,
        span: [
          ...(defaultSchema.attributes.span || []),
          // List of all allowed tokens:
          [
            "className",
            "hljs-addition",
            "hljs-attr",
            "hljs-attribute",
            "hljs-built_in",
            "hljs-bullet",
            "hljs-char",
            "hljs-code",
            "hljs-comment",
            "hljs-deletion",
            "hljs-doctag",
            "hljs-emphasis",
            "hljs-formula",
            "hljs-keyword",
            "hljs-link",
            "hljs-literal",
            "hljs-meta",
            "hljs-name",
            "hljs-number",
            "hljs-operator",
            "hljs-params",
            "hljs-property",
            "hljs-punctuation",
            "hljs-quote",
            "hljs-regexp",
            "hljs-section",
            "hljs-selector-attr",
            "hljs-selector-class",
            "hljs-selector-id",
            "hljs-selector-pseudo",
            "hljs-selector-tag",
            "hljs-string",
            "hljs-strong",
            "hljs-subst",
            "hljs-symbol",
            "hljs-tag",
            "hljs-template-tag",
            "hljs-template-variable",
            "hljs-title",
            "hljs-type",
            "hljs-variable",
          ],
        ],
      },
    })
    .use(rehypeStringify)
    .process(vFile);

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      ...post,
      content: String(result),
    },
  };
}

export default Post;
