import "./citySearchBar.scss";

import {useNavigate} from "react-router-dom";

import {ReactComponent as MagnifyingGlassIcon} from '../../assets/magnifying_glass.svg';
import {ReactComponent as FavouriteListIcon} from '../../assets/favourite_list_icon.svg';

export default function CitySearchBar({cityName, updateCityName, setShowCookieBanner, areCookiesAccepted}) {
    const navigate = useNavigate();

    function hideKeyboardOnEnter(e) {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    }

    function navigateToCitySelection(e) {
        e.preventDefault();
        setShowCookieBanner(false);
        navigate("/city_selection/cityname=" + cityName);
    }

    function navigateToFavouriteList(e) {
        e.preventDefault();
        setShowCookieBanner(false);
        navigate("/favourites");
    }

    return (
        <div className="citySearchBar">
            <form onSubmit={navigateToCitySelection}>
                <div className="formComponents">
                    <input
                        onKeyUp={hideKeyboardOnEnter}
                        onChange={(e) => {
                            updateCityName(e.target.value)
                        }}
                        placeholder={"Stadt"}
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
            <div
                className={"favouriteListIconContainer " + (areCookiesAccepted && "areCookiesAccepted")}
                onClick={navigateToFavouriteList}
            >
                <FavouriteListIcon className="favouriteListIcon"/>
            </div>
        </div>
    );
}