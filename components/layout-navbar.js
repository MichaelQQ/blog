import React from "react";
import Link from "next/link";
import styles from "../styles/layout-navbar.module.css";

const navLabels = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/blog",
    name: "Blog",
  },
];

const Navbar = ({ pathName }) => {
  const [toggle, setToggle] = React.useState(false);

  const toggleMenu = () => setToggle(!toggle);

  return (
    <div className={styles["navbar"]}>
      <nav className={styles["normal-nav"]}>
        {navLabels.map((label, index) => (
          <Link href={label.path} key={index}>
              <li
              // className={pathName.startsWith(`${label.path}`) ? "active" : ""}
              >
                {label.name}
              </li>
          </Link>
        ))}
      </nav>

      <nav className={styles["mobile-nav"]}>
        <div className={styles["menu-icon"]} onClick={toggleMenu}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>

        {toggle && (
          <div className={styles["nav-list"]}>
            {navLabels.map((label, index) => (
              <div
                key={index}
                className={styles["list-item"]}
                onClick={toggleMenu}
              >
                <Link href={label.path}>
                  <li>{label.name}</li>
                </Link>
              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
