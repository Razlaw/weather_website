import "./hourOfDayListItem.scss"

export default function HourOfDayListItem({time, active, setSelected}) {
    return (
        <li
            className={active ? "hourOfDayListItem active" : "hourOfDayListItem"}
            onClick={() => setSelected(time)}
        >
            {time}:00
        </li>
    );
}