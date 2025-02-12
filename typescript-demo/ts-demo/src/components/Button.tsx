import { BtnProps } from "../types/btnProps";

export default function Button({ bgColour, name, text }: BtnProps) {

    function logBtnColor(n: string) {
        console.log(`I'm ${n} button!`);
    }

    return <button
        className={bgColour + " rounded-md text-xl p-2 mx-2"}
        onClick={() => { logBtnColor(name) }}
    >{text}</button>
}