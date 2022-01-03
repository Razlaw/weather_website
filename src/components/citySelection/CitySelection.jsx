import "./citySelection.scss";
import { ReactComponent as MagGlass } from '../../assets/magnifying_glass.svg';

export default function CitySelection({cityName, updateCityName, reloadWeather}) {
    return (
        <div className="wrapper">
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
                        <MagGlass className="mag_glass"/>
                    </button>
                </div>
            </form>
        </div>
    );
}