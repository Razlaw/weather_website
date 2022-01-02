import "./citySelection.scss";

export default function CitySelection({cityName, updateCityName, reloadWeather}) {
    return (
        <div className="wrapper">
            <form onSubmit={reloadWeather}>
                <input
                    onChange={(e) => updateCityName(e.target.value)}
                    placeholder={cityName === "" ? "City" : cityName}
                    type="text"
                    id="cityNameInput"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}