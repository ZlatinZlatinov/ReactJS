export default function InputElement({ item, appState, onInputUpdate }) {

    return (
        <div>
            <label htmlFor={item.name}>{item.labelName}</label>
            <input
                type="number"
                name={item.name}
                id={item.name}
                value={appState[item.name]}
                onChange={onInputUpdate} />
        </div>
    );
}