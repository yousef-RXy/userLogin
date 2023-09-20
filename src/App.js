import React, { useState } from "react";
import UserForm from "./components/Login/NewUser/UserForm";
import UserList from "./components/Login/UserList/UserList";

function App() {
	const [users, setUsers] = useState([
		{ username: "yousef", age: "14", id: "s1" },
	]);

	const newUserHandle = (newUser) => {
		setUsers((prevUsers) => {
			return [newUser, ...prevUsers];
		});
		console.log(users);
	};

	return (
		<div>
			<UserForm onSubmit={newUserHandle} />
			<UserList items={users} />
		</div>
	);
}

export default App;
