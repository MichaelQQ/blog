import fs from "fs";
import path from "path";
import styles from "../../styles/PostList.module.css";

import PostCard from "../../components/PostCard";

const PostList = ({ posts }) => {
  return (
    <div className={styles["post-list"]}>
      {posts.map((post, index) => (
        <PostCard {...post} key={index} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const [, id, title, datetime] = /^(\d+)-(.+)\[(.+)\].md$/.exec(filename);
    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
      id,
      title,
      datetime,
      summary: fileContents.slice(0, 100),
      content: fileContents,
    };
  });
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: posts.sort((a, b) => b.id - a.id),
    },
  };
}

export default PostList;
