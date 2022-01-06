import "./citySearchBar.scss";
import {ReactComponent as MagnifyingGlassIcon} from '../../assets/magnifying_glass.svg';

export default function CitySearchBar({cityName, updateCityName, reloadWeather}) {
    return (
        <div className="citySearchBar">
            <form onSubmit={reloadWeather}>
                <div className="formComponents">
                    <input
                        onChange={(e) => updateCityName(e.target.value)}
                        placeholder={cityName === "" ? "City" : cityName}
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