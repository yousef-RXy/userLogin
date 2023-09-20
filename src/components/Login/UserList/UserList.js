import styles from "./UserList.module.css";

import UserItem from "./Useritem";

const UserList = (props) => {
	return (
		<ul className={styles.user}>
			{props.items.map((u) => (
				<UserItem
					key={u.id}
					username={u.username}
					age={u.age}
				/>
			))}
		</ul>
	);
};
export default UserList;
