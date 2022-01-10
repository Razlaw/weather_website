import "./hourOfDayListItem.scss"

export default function HourOfDayListItem({time, active}) {
    return (
        <li
            className={active ? "hourOfDayListItem active" : "hourOfDayListItem"}
        >
            {time}:00
        </li>
    );
}