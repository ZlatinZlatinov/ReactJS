import { useState } from "react";
import { getUserById } from "../service/userService";
import TdActions from "./TdActions";
import UserDetails from "./userDetails";

function formatDate(input) {
    const date = new Date(input);

    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function UserRow({ user }) {
    const [isClicked, changeClick] = useState(false);
    const [isEdited, changeEdit] = useState(false);
    const [updatedUser, changeUser] = useState(null);

    async function showUserInfo() {
        const us = await getUserById(user._id);
        changeUser(u => u = us);

        changeClick(click => click = true);
    }

    function closeUserInfo() {
        changeClick(click => click = false);
    }

    async function showEditVew() {
        changeEdit(e => e = true);
    } 

    function closeWindow(){
        changeEdit(e => e = false);
    }

    return (
        <>
            <tr>
                <td>
                    <img src={user.imageUrl}
                        alt={user.firstName} className="image" />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{formatDate(user.createdAt)}</td>

                <TdActions showUserInfo={showUserInfo} isEdited={isEdited} showEditVew={showEditVew} closeWindow={closeWindow} />
            </tr>
            {isClicked && <UserDetails user={updatedUser} closeUserInfo={closeUserInfo} />}
        </>
    );
}