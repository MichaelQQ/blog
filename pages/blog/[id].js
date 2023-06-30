import Head from "next/head";
import fs from "fs";
import path from "path";
import remark from "remark";
import html from "remark-html";
import Script from "next/script";
import styles from "../../styles/post-card.module.css";
import Comment from "../../components/comments";
import HtmlToReact from "html-to-react";

const Post = ({ id, title, datetime, summary, content }) => {
  const htmlToReactParser = new HtmlToReact.Parser();
  const reactElement = htmlToReactParser.parse(content);
  return (
    <>
      <Head>
        <meta name="description" content={JSON.stringify(summary)} />
        <meta name="og:url" content={`https://MichaelQQ.com/blog/${id}`} />
        <meta name="og:type" content="article" />
        <meta name="og:title" content={`MichaelQQ.com - ${title}`} />
        <meta name="og:description" content={JSON.stringify(summary)} />
        <meta
          name="og:image"
          content="https://MichaelQQ.com/favicon.ico?v=1.3"
        />
        <title>{`MichaelQQ.com - ${title}`}</title>
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
      <Comment id={id} />
    </>
  );
};

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  return {
    paths: filenames.map((filename) => {
      const [, id, ,] = /^(\d+)-(.+)\[(.+)\].md$/.exec(filename);
      return { params: { id } };
    }),
    fallback: false,
    // fallback: true or false // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const fileName = filenames.filter((name) =>
    name.startsWith(context.params.id)
  )[0];

  const filePath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const [, id, title, datetime] = /^(\d+)-(.+)\[(.+)\].md$/.exec(fileName);
  // Generally you would parse/transform the contents
  // For example you can transform markdown to HTML here
  const result = await remark().use(html).process(fileContents);

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      id,
      title,
      datetime,
      summary: fileContents.slice(0, 100),
      content: result.toString(),
    },
  };
}

export default Post;
