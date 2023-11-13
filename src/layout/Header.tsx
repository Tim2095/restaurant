import classes from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
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
            <NavLink to='/' className={classes.logo}>Quibeez</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink className={classes.link} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <a href="#about"
              className={classes.link}
              onClick={() => smoothScrollToSection("about")}
            >
              About
            </a>
          </li>

          <li>
            <a href="#contact"
              className={classes.link}
              onClick={() => smoothScrollToSection("contact")}
            >
              Contact
            </a>
          </li>
          <li>
            <a href="#menu"
              className={classes["menu-link"]}
              onClick={() => smoothScrollToSection("menu")}
            >
              Menu
            </a>
          </li>
          <li>
            <FaBars className={classes["mobile-menu"]} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
