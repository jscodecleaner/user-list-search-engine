import React, { useState } from 'react'
import styles from './UserInfo.module.css'

const UserInfo = (props) => {
  const user = props.user
  const number = props.userKey + 1
  const [showDetails, setShowDetails] = useState(false)
  const mailTo = 'mailto: ' + user.email
  const phoneNumber = 'tel:' + user.phone
  const websiteURL = 'https://google.com/search?q=' + user.website

  const checkUserDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div className={styles.UserInfoContainer} key={number}>
      <div className={styles.UserInfoContent} onClick={checkUserDetails}>
        <p className={styles.UserInfoNum}>{number}.</p>
        <p className={styles.UserInfoName}>{user.name}</p>
        <p className={styles.UserInfoUserName}>@{user.username}</p>
      </div>

      {showDetails && (
        <div className={styles.UserDetailsContent}>
          <div className={styles.UserDetailsInfo}>
            <p className={styles.UserDetailsSubTitle}>EMAIL:</p>
            <a href={mailTo} className={styles.UserDetailsData}>
              {user.email}
            </a>
          </div>
          <div className={styles.UserDetailsInfo}>
            <p className={styles.UserDetailsSubTitle}>PHONE:</p>
            <a href={phoneNumber} className={styles.UserDetailsData}>
              {user.phone}
            </a>
          </div>
          <div className={styles.UserDetailsInfo}>
            <p className={styles.UserDetailsSubTitle}>WEBSITE:</p>
            <a
              href={websiteURL}
              className={styles.UserDetailsData}
              target="_blank"
              rel="noreferrer"
            >
              {user.website}
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserInfo
