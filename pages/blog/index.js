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
        <meta name="og:url" content={`https://MichaelQQ.com/blog/`} />
        <meta name="og:title" content={`MichaelQQ.com`} />
        <meta name="og:image" content="https://MichaelQQ.com/favicon.ico?v=1.3" />
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
