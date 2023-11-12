import classes from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const smoothScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={classes.header}>
      <nav className={`${classes.nav} container`}>
        <ul>
          <li><a className={classes.logo}>Quibeez</a></li>
        </ul>
        <ul>
          <li><NavLink className={classes.link} to='/'>Home</NavLink></li>
          <li><a className={classes.link} onClick={() => smoothScrollToSection('about')}>About</a></li>
          <li><NavLink className={classes.link} to='contact'>Contact</NavLink></li>
          <li><a className={classes['menu-link']} onClick={() => smoothScrollToSection('menu')}>Menu</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header