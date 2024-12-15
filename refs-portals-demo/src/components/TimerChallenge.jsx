import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
    const timerRef = useRef();

    const [isExpired, setIsExpired] = useState(false);
    const [isStarted, setIsStarted] = useState(false);

    function handleStartTimer() {
        timerRef.current = setTimeout(() => {
            setIsExpired(true);
            setIsStarted(false);
        }, targetTime * 1000);

        setIsStarted(true);
        setIsExpired(false);
    }

    function handleStopTimer() {
        clearTimeout(timerRef.current);
        setIsStarted(false);
    }

    return (<section className="challenge">
        <h2>{title}</h2>
        {isExpired && <p>You lost!</p>}
        <p className="challenge-time">
            {targetTime} second{targetTime != 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={isStarted ? handleStopTimer : handleStartTimer}>
                {isStarted ? "Stop" : "Start"} Challenge
            </button>
        </p>
        <p className={isStarted ? "active" : undefined}> {/*If timer is runnning, else no class*/}
            {isStarted ? "Timer is runnning..." : "Timer inactive"}
        </p>
    </section>);
}