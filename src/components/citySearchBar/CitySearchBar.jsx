import "./citySearchBar.scss";
import {ReactComponent as MagnifyingGlassIcon} from '../../assets/magnifying_glass.svg';

export default function CitySearchBar({cityName, updateCityName, updateWeather}) {
    function hideKeyboardOnEnter(e) {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    }

    return (
        <div className="citySearchBar">
            <form onSubmit={updateWeather}>
                <div className="formComponents">
                    <input
                        onKeyUp={hideKeyboardOnEnter}
                        onChange={(e) => {updateCityName(e.target.value)}}
                        placeholder={"City"}
                        value={cityName}
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