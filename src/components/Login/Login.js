import React, {
	useContext,
	useEffect,
	useReducer,
	useRef,
	useState,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContex from "../../store/auth-contex";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.includes("@") };
	}
	return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.trim().length > 7 };
	}
	return { value: "", isValid: false };
};

const Login = (props) => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const ctx = useContext(AuthContex);
	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: null,
	});

	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: null,
	});

	const [formIsValid, setFormIsValid] = useState(false);

	useEffect(() => {
		const identifire = setTimeout(() => {
			setFormIsValid(emailState.isValid && passwordState.isValid);
		}, 500);

		return () => {
			clearTimeout(identifire);
		};
	}, [emailState.isValid, passwordState.isValid]);

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: "USER_INPUT", val: event.target.value });
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({ type: "USER_INPUT", val: event.target.value });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid) {
			ctx.onLogin(emailState.value, passwordState.value);
		} else if (!emailState.isValid) {
			emailRef.current.focus();
		} else {
			passwordRef.current.focus();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailRef}
					label="E-Mail"
					id="email"
					type="email"
					value={emailState.value}
					isValid={emailState.isValid}
					onChange={emailChangeHandler}
				/>
				<Input
					ref={passwordRef}
					label="Password"
					id="password"
					type="password"
					value={passwordState.value}
					isValid={passwordState.isValid}
					onChange={passwordChangeHandler}
				/>
				<div className={classes.actions}>
					<Button
						type="submit"
						className={classes.btn}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
