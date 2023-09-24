import { useState } from "react";
import styles from "./UserForm.css";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const UserForm = (props) => {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");
	const [error, setError] = useState();

	const formSubmitHandler = (event) => {
		event.preventDefault();
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
		setUsername("");
		setAge("");
	};

	const usernameChangeHandler = (event) => {
		setUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setAge(event.target.value);
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
							onChange={usernameChangeHandler}
							value={username}
						/>
					</div>

					<div>
						<label htmlFor="Age">Age (Years)</label>
						<input
							id="Age"
							type="number"
							step={1}
							onChange={ageChangeHandler}
							value={age}
						/>
					</div>

					<Button type="submit">Add User</Button>
				</form>
			</div>
		</>
	);
};
export default UserForm;
