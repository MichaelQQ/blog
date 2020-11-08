import Navbar from './navbar'
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from "next/image";
import styles from "../styles/Header.module.css";

const coverImages = {
  "/portfolio": `${process.env.BASE_PATH}/images/portfolio-cover-low.jpg`,
  "/blog": `${process.env.BASE_PATH}/images/cover-low.jpeg`,
  default: `${process.env.BASE_PATH}/images/about-cover-low.jpg`,
};

const Header = () => {
  const router = useRouter();
  return (
    <header className={styles["header"]}>
      <Image
        className={styles["header-image"]}
        width={1280}
        height={853}
        src={coverImages[router.pathname] || coverImages["default"]}
      />
      <div className={styles["header-content"]}>
        <div className={styles["header-bar"]}>
          <Link href="/" ><h1>MichaelQQ.com</h1></Link>
          <Navbar pathName={router.pathname} />
        </div>
      </div>
    </header>
  );
};

// export default Header
export default Header;
