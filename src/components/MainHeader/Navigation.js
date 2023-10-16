import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContex from "../../store/auth-contex";

const Navigation = (props) => {
	const ctx = useContext(AuthContex);
	return (
		<nav className={classes.nav}>
			<ul>
				{ctx.isLoggedIn && (
					<li>
						<a href="/">Users</a>
					</li>
				)}
				{ctx.isLoggedIn && (
					<li>
						<a href="/">Admin</a>
					</li>
				)}
				{ctx.isLoggedIn && (
					<li>
						<button onClick={ctx.onLogout}>Logout</button>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navigation;
