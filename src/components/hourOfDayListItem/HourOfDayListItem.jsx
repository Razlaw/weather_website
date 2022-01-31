import "./hourOfDayListItem.scss"

export default function HourOfDayListItem({time, active, sunrise, sunset}) {
    let className = "hourOfDayListItem";
    className = active ? className + " active" : className;
    className = time < sunrise || time > sunset ? className + " night" : className + " day" ;
    className = time === sunrise || time === sunset ? className + " twilight" : className;

    return (
        <li
            className={className}
        >
            {time}:00
        </li>
    );
}