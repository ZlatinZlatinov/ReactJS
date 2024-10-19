import { useState } from "react";

export default function SinglePlayer({ name, symbol, isActive, onChangeName }) {
    const [isEditing, setIsediting] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    return (<li className={isActive ? 'active' : undefined}>
        <span className="player">
            {isEditing ?
                <input type="text"
                    value={playerName}
                    required
                    onChange={(e) => setPlayerName(e.target.value)}
                /> : <span className="player-name">
                    {playerName}
                </span>}

            <span className="player-symbol">{symbol}</span>
        </span>

        <button
            onClick={() => {
                setIsediting((old) => !old);
                if (isEditing) onChangeName(symbol, playerName);
            }}>
            {isEditing ? 'Save' : 'Edit'}
        </button>
    </li>);
}