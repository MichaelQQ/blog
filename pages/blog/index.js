import fs from "fs";
import path from "path";
import Head from "next/head";
import styles from "../../styles/post-list.module.css";
import readPostFile from "../../utils/file-pattern";
import PostCard from "../../components/post-card";

const PostList = ({ posts }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Blog | MichaelQQ.com" />
        <meta name="og:type" content="article" />
        <meta name="og:description" content="Blog|MichaelQQ.com" />
        <meta name="og:url" content={`https://MichaelQQ.com/blog/`} />
        <meta name="og:title" content={`Blog | MichaelQQ.com`} />
        <meta name="og:image" content="https://MichaelQQ.com/favicon.ico?v=1.3" />
        <title>{`Blog | MichaelQQ.com`}</title>
      </Head>
      <div className={styles["post-list"]}>
        {posts.map((post, index) => (
          <PostCard {...post} key={index} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) =>
    readPostFile(postsDirectory, filename)
  );

  return {
    props: {
      posts: posts.sort((a, b) => b.id - a.id),
    },
  };
}

export default PostList;
