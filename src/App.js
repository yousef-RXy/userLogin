import React, { useState } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import UserList from "./components/UserList/UserList";

function App() {
	const [users, setUsers] = useState([
		{ userName: "yousef", passWord: "123", id: "s1" },
	]);
	return (
		<div>
			<LoginForm onSend={setUsers} />
			<UserList users={users} />
		</div>
	);
}

export default App;
