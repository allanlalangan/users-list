import React from 'react';
import Card from "./Card"
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        
      </Card>
    </>
  )

}

export default ErrorModal;