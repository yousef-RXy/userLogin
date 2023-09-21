import React, { useState } from "react";
import UserForm from "./components/Login/NewUser/UserForm";
import UserList from "./components/Login/UserList/UserList";
import "./app.css";

function App() {
	const [users, setUsers] = useState([]);

	const newUserHandle = (newUser) => {
		setUsers((prevUsers) => {
			return [newUser, ...prevUsers];
		});
	};

	return (
		<div className="test">
			<div>
				<UserForm onSubmit={newUserHandle} />
			</div>

			{users.length > 0 && (
				<div>
					<UserList items={users} />
				</div>
			)}
		</div>
	);
}

export default App;
