import { useState } from "react";
import SinglePlayer from "./SinglePlayer";

export default function Players({activePlayer}) { 
    

    return (<ol id="players" className="highlight-player">
        <SinglePlayer name={'Player1'} symbol={'X'} isActive={activePlayer === 'X'} />
        <SinglePlayer name={'Player2'} symbol={'O'} isActive={activePlayer === 'O'} />
    </ol>);
}