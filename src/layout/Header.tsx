import classes from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setNavOpen((prev) => !prev);
    console.log('Hey')
  };

  const smoothScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={classes.header}>
      <nav className={`${classes.nav} container`}>
        <ul>
          <li>
            <NavLink to="/" className={classes.logo}>
              Quibeez
            </NavLink>
          </li>
        </ul>
        <ul
          className={`${classes["nav-link"]} ${
            navOpen ? classes["nav-open"] : ""
          }`}
        >
          <li>
            <NavLink className={classes.link} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <a
              href="#about"
              className={classes.link}
              onClick={() => smoothScrollToSection("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={classes.link}
              onClick={() => smoothScrollToSection("contact")}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className={classes["menu-link"]}
              onClick={() => smoothScrollToSection("menu")}
            >
              Menu
            </a>
          </li>
        </ul>
        <ul className={classes["mobile-nav"]}>
          <li className={classes["mobile"]}>
            <button onClick={handleNav}>
              {!navOpen ? (
                <FaBars className={classes["btn-menu-open"]} />
              ) : (
                <IoMdClose className={classes["btn-menu-close"]} />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
