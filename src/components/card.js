import React from 'react'
import styles from '../styles/card.module.css'

export default function card() {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.top}>AT A GLANCE</div>
      <div className={styles.topamount}>₹ 3,596<span>.21</span></div>
      <div>Current Value</div>
      <div className={styles.add}>
        <div className={styles.amount}>₹ 3,500<span>.11</span></div>
        <div className={styles.amount}>₹ +96<span>.10</span></div>
      </div>
    </div>

    </div>
  )
}
