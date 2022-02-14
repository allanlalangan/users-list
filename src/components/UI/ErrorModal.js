import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onConfirm}/>
}

const ModalWindow = (props) => {
	return (
		<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<section className={classes.content}>
					<p>{props.message}</p>
				</section>
				<footer className={classes.actions}>
					<Button onClick={props.onConfirm}>Okay</Button>
				</footer>
		</Card>
	)
}

const ErrorModal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalWindow title={props.title} message={props.title} onConfirm={props.onConfirm} />,
				document.getElementById('modal-window-root')
			)}
		</>
	)
}

export default ErrorModal
