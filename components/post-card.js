import Link from "next/link";
import styles from "../styles/post-card.module.css";

const PostCard = ({ id, title, datetime, summary }) => (
  <div className={styles["post"]}>
    <Link href={`/blog/${id}`} style={{ textDecoration: "none" }}>
      <a><h1 style={{ color: "black" }}>{title}</h1></a>
    </Link>
    <p>{new Date(datetime).toLocaleString()}</p>
    <p>{summary}</p>
    <div className={styles["link"]}>
      <Link href={`/blog/${id}`}><div className={styles["post-button"]}>read more</div></Link>
    </div>
  </div>
);

export default PostCard;
