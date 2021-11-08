//Dépendancances
import { useState, useEffect, useContext } from "react";
// Style
import "./style.css";
// Context
import { AppContext } from "../../../App";
// Images
import logo from "../../media/images/logo.png";

// Contenus
const language = {
    fr: {
        announcement: "Site en cours de construction",
        information: "Vous pouvez nous contacter au +33 6.XX.XX.XX.XX ou à l'addresse mail "
    },
    en: {
        announcement: "Website under construction",
        information: "You can contact us at +33 6.XX.XX.XX.XX or following mail address "
    }
}


// Corps du site
const Body = () => {
    // Variables d'état
    const [content, setContent] = useState(language.en);
    // Context
    const context = useContext(AppContext);

    useEffect(() => {
        if (language[context.getLanguage()])
            setContent(language[context.getLanguage()]);
    }, [context.getLanguage()]);

    return (
        <div id="contentContainer">
            <img id="mainLogo" src={logo} />
            <h2 id="managersName">Lucile & Mélanie</h2>
            <div id="subTitle">
                <h3>conciergerie & services</h3>
                <h3>gestion de biens immobiliers</h3>
            </div>
            <div id="announcementContainer">
                <div id="announcement">{content.announcement}</div>
                <p>{content.information}<a href="mailto:office@lm-conciergerie.com">office@lm-conciergerie.com</a></p>
            </div>
        </div>
    )
};

export default Body;
