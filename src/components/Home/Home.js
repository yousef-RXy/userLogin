import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import Button from "../UI/Button/Button";
import AuthContex from "../../store/auth-contex";

const Home = (props) => {
	const ctx = useContext(AuthContex);
	return (
		<Card className={classes.home}>
			<h1>Welcome back!</h1>
			<Button onClick={ctx.onLogout}>Logout</Button>
		</Card>
	);
};

export default Home;
