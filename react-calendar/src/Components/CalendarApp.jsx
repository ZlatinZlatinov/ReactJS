import { useState } from "react";
import { daysOfWeek, monthsOfYear } from "../Constatns/calendar";

const CalendarApp = () => {
    const currentDate = new Date();

    const [currentMonth, setCurrMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrYear] = useState(currentDate.getFullYear());
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [showEventPopUp, setEventPopUp] = useState(false);

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 0).getDay();// not sure about this one, initially was 1

    // console.log(currentMonth, currentYear, daysInMonth, firstDayOfMonth);
    const previousMonth = () => {
        setCurrMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
        setCurrYear((prevYear) => (currentMonth === 0 ? prevYear - 1 : prevYear))
    }

    const nextMonth = () => {
        setCurrMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
        setCurrYear((prevYear) => (currentMonth === 11 ? prevYear + 1 : prevYear))
    }

    const handleDayClick = (day) => {
        const clickedDate = new Date(currentYear, currentMonth, day);
        const today = new Date();

        if (clickedDate >= today || isSameDay(clickedDate, today)) {
            setSelectedDate(clickedDate);
            setEventPopUp(true);
        }
    }

    const isSameDay = (date1, date2) => {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    }

    const handleHideEventPopUp = () => {
        setEventPopUp(false);
    }
    return (
        <div className="calendar-app">
            {/* Calendar */}
            <div className="calendar">
                {/* Heading */}
                <h1 className="heading">Calendar</h1>

                {/* Navigate-Date */}
                <div className="navigate-date">
                    <h2 className="month">{monthsOfYear[currentMonth]},</h2>
                    <h2 className="year">{currentYear}</h2>
                    <div className="buttons">
                        <i className="bx bx-chevron-left" onClick={previousMonth}></i>
                        <i className="bx bx-chevron-right" onClick={nextMonth}></i>
                    </div>
                </div>

                {/* Weekdays */}
                <div className="weekdays">
                    {daysOfWeek.map((weekDay) => <span key={weekDay.id}>{weekDay.name}</span>)}
                </div>

                {/* Days */}
                <div className="days">
                    {[...Array(firstDayOfMonth).keys()]
                        .map((_, index) => <span key={`empty-${index}`} />)}
                    {[...Array(daysInMonth).keys()]
                        .map((day) => (<span
                            key={day + 1}
                            className={day + 1 === currentDate.getDate() &&
                                currentMonth === currentDate.getMonth() &&
                                currentYear === currentDate.getFullYear() ? 'current-day' : ''}
                            onClick={() => handleDayClick(day + 1)}
                        >{day + 1}</span>))}

                </div>
            </div>

            {/* Events */}
            <div className="events">
                {/* Event PopUp */}
                {showEventPopUp && <div className="event-popup">
                    <div className="time-input">
                        <div className="event-popup-time">Time</div>
                        <input type="number" name="hours" min={0} max={24} className="hours" />
                        <input type="number" name="minutes" min={0} max={60} className="minutes" />
                    </div>

                    <textarea name="event-text" placeholder="Enter the event text... (Maximum 60 Characters)"></textarea>
                    <button className="event-popup-btn">Add Event</button>
                    <button className="close-event-popup-btn" onClick={handleHideEventPopUp}><i className="bx bx-x"></i></button>
                </div>}

                {/* Event */}
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
    );
}

export default CalendarApp;