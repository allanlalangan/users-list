import React from 'react';
import Card from '../UI/Card';
import classes from './UserItem.module.css';

const UserItem = (props) => {
  return (
    <li className={classes.li}>
      <Card className={classes.user}>
        <p>{props.username}</p>
        <p>{props.age}</p>
      </Card>
    </li>
  )
}

export default UserItem