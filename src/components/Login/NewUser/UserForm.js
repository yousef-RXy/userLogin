import { useState, useRef } from "react";
import styles from "./UserForm.css";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const UserForm = (props) => {
	const enteredUsername = useRef();
	const enteredAge = useRef();
	const [error, setError] = useState();

	const formSubmitHandler = (event) => {
		event.preventDefault();
		const username = enteredUsername.current.value;
		const age = enteredAge.current.value;
		const user = {
			username: username,
			age: age,
			id: Math.random().toString(),
		};
		if (username.trim().length === 0 || age.trim().length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age (non-empty values).",
			});
			return;
		}
		if (+age < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age (> 0).",
			});
			return;
		}
		props.onSubmit(user);
		enteredUsername.current.value = "";
		enteredAge.current.value = "";
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<div className={styles.input}>
				<form
					onSubmit={formSubmitHandler}
					className="input"
				>
					<div>
						<label htmlFor="Username">Username</label>
						<input
							id="Username"
							ref={enteredUsername}
						/>
					</div>

					<div>
						<label htmlFor="Age">Age (Years)</label>
						<input
							id="Age"
							type="number"
							step={1}
							ref={enteredAge}
						/>
					</div>

					<Button type="submit">Add User</Button>
				</form>
			</div>
		</>
	);
};
export default UserForm;
