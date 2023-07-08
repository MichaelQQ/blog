import Link from "next/link";
import styles from "../styles/post-card.module.css";

const PostCard = ({ id, title, datetime, summary, path }) => (
  <div className={styles["post"]}>
    <Link href={`/blog/${path}`} style={{ textDecoration: "none" }}>
      <h1 style={{ color: "black" }}>{title}</h1>
    </Link>
    <p>{new Date(datetime).toLocaleString()}</p>
    <p>{summary}</p>
    <div className={styles["link"]}>
      <Link href={`/blog/${path}`}><div className={styles["post-button"]}>read more</div></Link>
    </div>
  </div>
);

export default PostCard;
