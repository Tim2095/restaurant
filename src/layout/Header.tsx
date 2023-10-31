import classes from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={`${classes.nav} container`}>
        <ul>
          <li><a className={classes.logo}>Quibeez</a></li>
        </ul>
        <ul>
          <li><NavLink className={classes.link} to='/'>Home</NavLink></li>
          <li><NavLink className={classes.link} to='about'>About</NavLink></li>
          <li><NavLink className={classes.link} to='contact'>Contact</NavLink></li>
          <li><NavLink className={classes['menu-link']} to='menu'>Menu</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header