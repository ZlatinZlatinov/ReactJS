import AddUserView from "./AdUserView";
import { useState } from 'react';


export default function AddUserBtn({createNewUser}) {
    const [state, setState] = useState(false);

    function openWindow() {
        setState(oldState => oldState = true);
    }

    function closeWindow() {
        setState(oldState => oldState = false);
    }

    return (
        <>
            <button className="btn-add btn" onClick={openWindow}>Add new user</button>
            {state && <AddUserView viewName={'Add User'} closeWindow={closeWindow} createNewUser={createNewUser}/>}
        </>
    )
}