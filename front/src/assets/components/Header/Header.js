// Dépendances
import { useContext } from "react";
// Style
import "./style.css";
// Context
import { AppContext } from "../../../App";

// Header du site
const Header = () => {
    // Context
    const context = useContext(AppContext);

    // Handler
    const languageSelection = e => {
        context.setLanguage(e.target.value);
    };

    return (
        <header className="App-header">
            <div className="bannerSidePart" />
            <h1>LM-Conciergerie</h1>
            <div className="bannerSidePart bannerRight">
                <div id="languageMenu">
                    <select name="languageMenu" id="selectLanguageMenu" onChange={languageSelection}>
                        <option>fr</option>
                        <option>en</option>
                    </select>
                </div>
            </div>
        </header>
    )
};

export default Header;
