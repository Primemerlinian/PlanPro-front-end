// import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/branding/PlanProHorizontal.png'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/login">Log In</NavLink></li>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to="/profile">Profile</NavLink></li>
      <li><NavLink to="/quotes">Inspirational Quotes</NavLink></li>
      <li><NavLink to="/change-password">Change Password</NavLink></li>
      <li><NavLink to="" onClick={handleLogout}>Log Out</NavLink></li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      <NavLink to={'/'}><img src={Logo} alt="logo" /></NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
