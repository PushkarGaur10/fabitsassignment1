import React from 'react'
import menu from '../Assets/logo/menu.svg';
import logo from '../Assets/logo/image.svg'
import notification from '../Assets/logo/notifications.png'
import userprofile from '../Assets/logo/userprofile.png'
import styles from '../styles/Navbar.module.css'

export default function navbar() {
  return (
    <div className={styles.container}>
    <div className={styles.left}>
      <img className={styles.menu} src={menu} alt='logo'></img>
      <img className={styles.logo} src={logo} alt='logo'></img>
    </div>
    <div className={styles.right}>
      <img className={styles.notification} src={notification} alt='logo'></img>
      <img className={styles.user} src={userprofile} alt='logo'></img>
    </div>
    </div>
  )
}
