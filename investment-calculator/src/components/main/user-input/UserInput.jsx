import { inputGroupItems } from "../../../util/data";
import InputElement from "./InputElement";


export default function UserInput({ appState, onInputUpdate }) {
    return (
        <section id="user-input">
            <div className="input-group">
                {inputGroupItems
                    .map((item) => <InputElement
                        key={item.id}
                        item={item}
                        appState={appState}
                        onInputUpdate={onInputUpdate}
                    />)}
            </div>
        </section>
    );
}