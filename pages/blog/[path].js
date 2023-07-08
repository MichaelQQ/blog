import Head from "next/head";
import fs from "fs";
import path from "path";
import {remark} from 'remark';
import remarkHtml from 'remark-html'
import Script from "next/script";
import HtmlToReact from "html-to-react";
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
        <meta name="og:url" content={`https://MichaelQQ.com/blog/${encodeURI(path)}`} />
        <meta name="og:type" content="article" />
        <meta name="og:title" content={`${title} | MichaelQQ.com`} />
        <meta name="og:description" content={JSON.stringify(summary)} />
        <meta name="og:image" content="https://MichaelQQ.com/favicon.ico?v=1.3" />
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
      const post = readPostFile(postsDirectory, filename)
      return { params: { path: post.path} };
    }),
    fallback: false,
    // fallback: true or false // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const fileName = filenames.filter((name) => {
    return name.startsWith(context.params.path)
  })[0];
  const post = readPostFile(postsDirectory, fileName)
  // Generally you would parse/transform the contents
  // For example you can transform markdown to HTML here
  // 
  //!!! It’s recommended to sanitize your HTML any time you do not completely trust authors or the plugins being used.
  // https://github.com/rehypejs/rehype-sanitize 
  const filePath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const result = await remark().use(remarkHtml, { sanitize: false }).process(fileContents);

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      ...post,
      content: result.toString(),
    },
  };
}

export default Post;
