import styles from "./UserItem.module.css";

const UserItem = (props) => {
	return (
		<li className={styles.userparagraph}>
			{props.username} ({props.age} years old)
		</li>
	);
};
export default UserItem;
