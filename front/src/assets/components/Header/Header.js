// Dépendances
import { useContext, useState, useEffect } from "react";
// Style
import "./style.css";
// Context
import { AppContext } from "../../../App";
// Pachage language
import languages from "../../languages/languages.json";

// Header du site
const Header = () => {
    // Variables d'état
    const [language, setLanguage] = useState([]);
    // Context
    const context = useContext(AppContext);
    
    // Récupération langages
    useEffect(() => {
        let languagesList = [];
        for (const element in languages)
            languagesList.push(element);

        setLanguage(languagesList);
    }, []);
    
    // Handler
    const languageSelection = e => {
        context.setLanguage(e.target.id.split('-')[1]);
    };

    return (
        <header className="App-header">
            <div className="bannerSidePart" />
            <h1>LM-Conciergerie</h1>
            <div className="bannerSidePart bannerRight">
                <div id="languageMenu">
                    <div>{context.getLanguage()}<span id="menuArrow">▼</span></div>
                    <ul name="languageMenu" id="selectLanguageMenu" onChange={languageSelection}>
                        {language.map((item, index) => 
                            <li key={index} id={`language-${item}`} onClick={languageSelection}>
                                <img id={`languagePic-${item}`} src={require(`../../media/images/flag-${item}.png`).default} />
                                <span id={`languageItem-${item}`}>{item}</span>
                            </li>)}
                    </ul>
                </div>
            </div>
        </header>
    )
};

export default Header;
