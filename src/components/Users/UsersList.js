import React from 'react'
import User from './User';
import Card from '../UI/Card';
import "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card>
      {props.users.map(user => {
        return (
          <User {...user}/>
        )
      })}
    </Card>
  )
}

export default UsersList
