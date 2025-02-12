export default function Button(props: {
    text: string,
    bgColour: string
}) {
    const colour: string = props.bgColour;
    const text: string = props.text;

    return <button className={colour}>{text}</button>
}