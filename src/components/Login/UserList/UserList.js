//import styles from "./UserList.css";

import UserItem from "./Useritem";

const UserList = (props) => {
	return (
		<div>
			{props.items.map((u) => (
				<UserItem
					key={u.id}
					username={u.username}
					age={u.age}
				/>
			))}
		</div>
	);
};
export default UserList;
