import classes from './Header.module.scss'

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={`${classes.nav} container`}>
        <ul>
          <li><a className={classes.logo}>Quibeez</a></li>
        </ul>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Menu</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header