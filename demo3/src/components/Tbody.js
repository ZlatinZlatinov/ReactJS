import UserRow from "./UserRow";

export default function Tbody({users}) {
    return (<tbody>
        {/* <!-- Table row component --> */}
        {users.map(user => <UserRow key={user._id} user={user}/>)}
    </tbody>);
}