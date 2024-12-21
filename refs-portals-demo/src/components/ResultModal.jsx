export default function ResultModal({ remainingTime, targetTime, ref, onReset }) {
    const userLost = remainingTime <= 0;
    const seconds = (remainingTime / 1000).toFixed(2);

    return (<dialog className="result-modal" onClose={onReset} ref={ref}>
        <h2>You {userLost ? 'lost' : 'won'}!</h2>
        <p>The target time was <strong>{targetTime}</strong> seconds.</p>
        <p>You {userLost ? 'have' : 'stopped the timer with'} <strong>{seconds}</strong> seconds left.</p>

        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>);
}