import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submited, setSubmited] = useState(false);
  const playerNameInputRef = useRef();//By using ref, you create a refference to that reac component 
  //In this exapmle we have refference to the input element and its methods and properties
  //Whenever ref is changed, a component does not rerender. When you change the state, a component is re-rendered

  function handleBtnClick(e) {
    setSubmited((old) => !old);
    setPlayerName(playerNameInputRef.current.value);
    playerNameInputRef.current.value = '';//Not a best practice, but it works
  }// handle inputs with useRef

  return (
    <section id="player">
      <h2>Welcome, {submited ? playerName : "unknown"}!</h2>
      <p>
        <input type="text" ref={playerNameInputRef} />
        <button onClick={handleBtnClick}>Set Name</button>
      </p>
    </section>
  );
}
