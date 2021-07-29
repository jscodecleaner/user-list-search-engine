import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Users.module.css'
import UserInfo from '../components/User/UserInfo'

const Users = () => {
  const [users, setUsers] = useState({})
  const [searchUsers, setSearchUsers] = useState({})
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data)
      setSearchUsers(response.data)
    })
  }, [])

  useEffect(() => {
    let tempUsers = []
    if (searchText) {
      tempUsers = users.filter((user) => {
        return (
          user.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
          user.email.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        )
      })
      setSearchUsers(tempUsers)
    } else {
      setSearchUsers(users)
    }
  }, [searchText, users])

  const showUsersInfo = (user, key) => {
    return <UserInfo user={user} userKey={key} key={key} />
  }

  const onChangeInput = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <div className={styles.Container}>
      <div className={styles.MainContent}>
        <div className={styles.TitleContent}>
          <h2>User List</h2>
        </div>
        <div className={styles.SearchContent}>
          <input
            name="search"
            type="text"
            value={searchText}
            placeholder="Search by user name or email..."
            onChange={onChangeInput}
          ></input>
        </div>
        <div className={styles.UserContent}>
          {users &&
            Array.from(searchUsers).map((user, key) =>
              showUsersInfo(user, key)
            )}
        </div>
      </div>
    </div>
  )
}

export default Users
