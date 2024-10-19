import { INITIAL_PLAYERS } from "../../data/data";
import SinglePlayer from "./SinglePlayer";

export default function Players({ activePlayer, onChangeName }) {

    return (<ol id="players" className="highlight-player">
        <SinglePlayer
            name={INITIAL_PLAYERS.X}
            symbol={'X'}
            isActive={activePlayer === 'X'}
            onChangeName={onChangeName} />

        <SinglePlayer
            name={INITIAL_PLAYERS.O}
            symbol={'O'}
            isActive={activePlayer === 'O'}
            onChangeName={onChangeName} />
    </ol>);
}