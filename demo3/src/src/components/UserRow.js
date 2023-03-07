import TdActions from "./TdActions";

export default function UserRow() {
    return (<tr>
        <td>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                alt="Peter's profile" className="image" />
        </td>
        <td>Peter</td>
        <td>Johnson</td>
        <td>peter@abv.bg</td>
        <td>0812345678</td>
        <td>June 28, 2022</td>

        <TdActions />
    </tr>);
}