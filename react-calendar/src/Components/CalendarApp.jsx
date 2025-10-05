
const CalendarApp = () => {
    return (
        <div className="calendar-app">
            {/* Calendar */}
            <div className="calendar">
                {/* Heading */}
                <h1 className="heading">Calendar</h1>
                
                {/* Navigate-Date */}
                <div className="navigate-date">
                    <h2 className="month">May</h2>
                    <h2 className="year">2025</h2>
                    <div className="buttons">
                        <i className="bx bx-chevron-left"></i>
                        <i className="bx bx-chevron-right"></i>
                    </div>
                </div>

                {/* Weekdays */}
                <div className="weekdays">
                    <span>Sun</span>
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                </div>

                {/* Days */}
                <div className="days">
                    <span>1</span>
                    <span>1</span>
                    <span>1</span>
                    <span>1</span>
                    <span>1</span>
                    <span>1</span>
                </div>

                {/* Events */}
                <div className="events">
                    <div className="event-popup">
                        <div className="time-input">
                            <div className="event-popup-time">Time</div>
                            <input type="number" name="hours" min={0} max={24} className="hours" />
                            <input type="number" name="minutes" min={0} max={60} className="minutes" />
                        </div>

                        <textarea name="event-text" placeholder="Enter the event text... (Maximum 60 Characters)"></textarea>
                        <button className="event-popup-btn">Add Event</button>
                        <button className="close-event-popup-btn"><i className="bx bx-x"></i></button>
                    </div>

                    <div className="event">
                        <div className="event-day-wrapper">
                            <div className="event-date">May 15, 2025</div>
                            <div className="event-time">10:10</div>
                        </div>
                        <div className="event-text">
                            Meeting with the BOSS
                        </div>
                        <div className="event-buttons">
                            <i className="bx bxs-edit-alt"></i>
                            <i className="bx bxs-message-alt-x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalendarApp;