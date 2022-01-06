import "./timeOfDayListItem.scss"

export default function TimeOfDayListItem({ time, active, setSelected }) {
    return (
        <li
            className={active ? "timeOfDayListItem active" : "timeOfDayListItem"}
            onClick={() => setSelected(time)}
        >
            {time}:00
        </li>
    );
}