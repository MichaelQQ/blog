import Link from "next/link";
import styles from "../styles/PostCard.module.css";

// import HashtagMarkdown from '../../components/hashtag-markdown'

const PostCard = ({ id, title, datetime, summary }) => (
  <div className={styles["post"]}>
    <Link href={`/blog/${id}`} style={{ textDecoration: "none" }}>
      <h1 style={{ color: "black" }}>{title}</h1>
    </Link>
    <p>{new Date(datetime).toLocaleString()}</p>
    {/* <HashtagMarkdown
      source={summary} 
      className={styles["markdown-body"
    /> */}
    <p>{summary}</p>
    <div className={styles["link"]}>
      <Link href={`/blog/${id}`}><div className={styles["post-button"]}>read more</div></Link>
    </div>
  </div>
);

export default PostCard;
