import React from 'react';
import Card from "./Card"
import Button from './Button';
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <section>
          <p>{props.message}</p>
        </section>
        <footer>
          <Button>Okay</Button>
        </footer>
      </Card>
    </>
  )

}

export default ErrorModal;