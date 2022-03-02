import "./citySearchBar.scss";
import {ReactComponent as MagnifyingGlassIcon} from '../../assets/magnifying_glass.svg';

export default function CitySearchBar({cityName, reloadWeather}) {
    function hideKeyboardOnEnter(e) {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    }

    return (
        <div className="citySearchBar">
            <form onSubmit={reloadWeather}>
                <div className="formComponents">
                    <input
                        onKeyUp={hideKeyboardOnEnter}
                        onChange={(e) => {cityName.current = e.target.value;}}
                        placeholder={cityName.current === "" ? "City" : cityName.current}
                        type="text"
                        id="cityNameInput"
                        autoFocus
                    />
                    <button type="submit">
                        <MagnifyingGlassIcon className="magnifyingGlassIcon"/>
                    </button>
                </div>
            </form>
        </div>
    );
}