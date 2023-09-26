import React from "react";

import classes from "./ErrorModal.module.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { createPortal } from "react-dom";

const Backdrop = (props) => (
	<div
		className={classes.backdrop}
		onClick={props.onClick}
	/>
);
const ModalOverlay = (props) => (
	<Card className={classes.modal}>
		<header className={classes.header}>
			<h2>{props.title}</h2>
		</header>
		<div className={classes.content}>
			<p>{props.message}</p>
		</div>
		<footer className={classes.actions}>
			<Button onClick={props.onClick}>Okay</Button>
		</footer>
	</Card>
);

const ErrorModal = (props) => {
	return (
		<>
			{createPortal(
				<Backdrop onClick={props.onConfirm} />,
				document.getElementById("backdrop-root")
			)}
			{createPortal(
				<ModalOverlay
					title={props.title}
					onClick={props.onConfirm}
					message={props.message}
				/>,
				document.getElementById("modal-root")
			)}
		</>
	);
};

export default ErrorModal;
