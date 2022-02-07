import "./dataListItem.scss"

export default function DataListItem({data, time, active, sunrise, sunset}) {
    let className = "dataListItem";
    className = active ? className + " active" : className;
    className = time < sunrise || time > sunset ? className + " night" : className + " day" ;
    className = time === sunrise || time === sunset ? className + " twilight" : className;

    return (
        <li
            className={className}
        >
            <span>
                {data}
            </span>
        </li>
    );
}