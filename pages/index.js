import SocialNetworkButton from '../components/social-network-buttons'
import styles from "../styles/abouts.module.css";

export default function Home() {
  return (
        <main className={styles["about"]}>
          <div className={styles["profile"]}>
            <div className={styles["profile-image"]}></div>
            <div className={styles["profile-data"]}>
              <div className={styles["profile-title"]}>Ming-Sian Tu</div>
              <div className={styles["profile-intro"]}>
                <p>
                  Hi, I'm a Javascript developer. I'm enthusiastic about
                  JavaScript, NodeJS and functional programming.
                </p>
              </div>
              <div className={styles["profile-social"]}>
                <SocialNetworkButton />
              </div>
            </div>
          </div>
        </main>
  );
}
