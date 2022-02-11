import React from 'react'
import UserItem from './UserItem';
import Card from '../UI/Card';
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <ul className={classes.usersList}>
      {props.users.map(user => {
        return (
          <UserItem key={user.id} {...user}/>
        )
      })}
    </ul>
  )
}

export default UsersList
