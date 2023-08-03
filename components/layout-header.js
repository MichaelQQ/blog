import Navbar from './layout-navbar'
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from "next/image";
import styles from "../styles/layout-header.module.css";
import cover from '../public/images/cover.jpeg'
import aboutCover from '../public/images/about-cover.jpg'

const coverImages = {
  "/blog/[path]": cover,
  "/blog": cover,
  default: aboutCover,
};

const Header = () => {
  const router = useRouter();


  return (
    <header className={styles["header"]}>
      <Image
        alt="Cover image"
        // Importing an image will
        // automatically set the width and height
        src={coverImages[router.pathname] || coverImages["default"]}
        // sizes="100vw"
        // Make the image display full width
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '700px'
        }}
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
