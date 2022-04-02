import "./hourOfDayListItem.scss"

export default function HourOfDayListItem({time, active, sunrise, sunset, firstVisit}) {
    let className = "hourOfDayListItem";
    className = active ? className + " active" : className;
    className = firstVisit ? className + " firstVisit" : className;
    className = time < sunrise || time > sunset ? className + " night" : className + " day" ;
    className = time === sunrise || time === sunset ? className + " twilight" : className;

    return (
        <li
            className={className}
        >
            <span>
                {time}:00
            </span>
        </li>
    );
}