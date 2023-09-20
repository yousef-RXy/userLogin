//import styles from "./UserItem.css";

const UserItem = (props) => {
	return (
		<p>
			{props.username} ({props.age} years old)
		</p>
	);
};
export default UserItem;
