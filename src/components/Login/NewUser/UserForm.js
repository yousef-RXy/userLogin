import { useState } from "react";
import Button from "../../UI/Button/Button";
//import styles from "./UserForm.css";

const UserForm = (props) => {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");

	const formSubmitHandler = (event) => {
		event.preventDefault();
		const user = {
			username: username,
			age: age,
			id: Math.random().toString(),
		};
		props.onSubmit(user);
	};

	const usernameChangeHandler = (event) => {
		setUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setAge(event.target.value);
	};

	return (
		<div>
			<form onSubmit={formSubmitHandler}>
				<div>
					<label>Username</label>
					<input onChange={usernameChangeHandler} />
				</div>

				<div>
					<label>Age</label>
					<input
						type="number"
						onChange={ageChangeHandler}
					/>
				</div>

				<Button type="submit">Add User</Button>
			</form>
		</div>
	);
};
export default UserForm;
