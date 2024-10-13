import { useState } from "react";
import SinglePlayer from "./SinglePlayer";

export default function Players({ activePlayer, onChangeName }) {


    return (<ol id="players" className="highlight-player">
        <SinglePlayer
            name={'Player1'}
            symbol={'X'}
            isActive={activePlayer === 'X'}
            onChangeName={onChangeName} />

        <SinglePlayer
            name={'Player2'}
            symbol={'O'}
            isActive={activePlayer === 'O'}
            onChangeName={onChangeName} />
    </ol>);
}