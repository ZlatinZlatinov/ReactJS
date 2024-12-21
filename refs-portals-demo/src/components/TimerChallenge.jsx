import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timerRef = useRef();
    const dialog = useRef();

    // const [isExpired, setIsExpired] = useState(false);
    // const [isStarted, setIsStarted] = useState(false); 

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0) {
        clearInterval(timerRef.current); 
        dialog.current.showModal();
    }
    
    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStartTimer() {
        // timerRef.current = setTimeout(() => {
        //     setIsExpired(true);
        //     setIsStarted(false);
        //     dialog.current.showModal();
        // }, targetTime * 1000);

        timerRef.current = setInterval(()=>{
            setTimeRemaining(oldTime => oldTime - 10);
        }, 10); //will be executed every 10sec

        setIsStarted(true);
        setIsExpired(false);
    }

    function handleStopTimer() {
        // clearTimeout(timerRef.current);
        clearInterval(timerRef.current)
        dialog.current.showModal();
        setIsStarted(false);
    }

    return (
        <>
            <ResultModal 
            targetTime={targetTime} 
            ref={dialog} 
            remainingTime={timeRemaining} 
            onReset={handleReset}
            />
            
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime != 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStopTimer : handleStartTimer}>
                        {timerIsActive ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}> {/*If timer is runnning, else no class*/}
                    {timerIsActive ? "Timer is runnning..." : "Timer inactive"}
                </p>
            </section>
        </>);
}