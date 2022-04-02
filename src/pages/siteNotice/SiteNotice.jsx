import "./siteNotice.scss";

import React from "react";

export default function SiteNotice({showCookieBanner}) {
    return (
        <div className="siteNoticeContainer">
            <div className={"contentContainer " + (showCookieBanner && "showCookieBanner")}>
                <h1>Impressum</h1>
                <h2 id="m46">Diensteanbieter</h2>
                <p>Jan Razlaw</p>
                <p>Römerstr. 367</p>
                <p>53117 Bonn</p>
                <h2 id="m56">Kontaktmöglichkeiten</h2>E-Mail-Adresse: <p>jan.razlaw [at] googlemail.com</p>
                <h2 id="m65">Haftungs- und Schutzrechtshinweise</h2><p><strong>Haftungsausschluss: </strong>Die Inhalte
                dieses
                Onlineangebotes wurden sorgfältig und nach unserem aktuellen Kenntnisstand erstellt, dienen jedoch nur
                der
                Information und entfalten keine rechtlich bindende Wirkung, sofern es sich nicht um gesetzlich
                verpflichtende Informationen (z.B. das Impressum, die Datenschutzerklärung, AGB oder verpflichtende
                Belehrungen von Verbrauchern) handelt. Wir behalten uns vor, die Inhalte vollständig oder teilweise zu
                ändern oder zu löschen, soweit vertragliche Verpflichtungen unberührt bleiben. Alle Angebote sind
                freibleibend und unverbindlich. </p>
                <p><strong>Links auf fremde Webseiten: </strong>Die Inhalte fremder Webseiten, auf die wir direkt oder
                    indirekt verweisen,
                    liegen außerhalb unseres Verantwortungsbereiches und wir machen sie uns nicht zu Eigen. Für alle
                    Inhalte
                    und Nachteile, die aus der Nutzung der in den verlinkten Webseiten aufrufbaren Informationen
                    entstehen,
                    übernehmen wir keine Verantwortung.</p>
                <p><strong>Urheberrechte und Markenrechte: </strong>Alle auf dieser Website dargestellten Inhalte, wie
                    Texte, Fotografien,
                    Grafiken, Marken und Warenzeichen sind durch die jeweiligen Schutzrechte (Urheberrechte,
                    Markenrechte)
                    geschützt. Die Verwendung, Vervielfältigung usw. unterliegen unseren Rechten oder den Rechten der
                    jeweiligen Urheber bzw. Rechteinhaber.</p>
                <p><strong>Hinweise auf Rechtsverstöße: </strong>Sollten Sie innerhalb unseres Internetauftritts
                    Rechtsverstöße bemerken,
                    bitten wir Sie uns auf diese hinzuweisen. Wir werden rechtswidrige Inhalte und Links nach
                    Kenntnisnahme
                    unverzüglich entfernen.</p>
                <p className="seal"><a href="https://datenschutz-generator.de/"
                                       title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
                                       target="_blank" rel="noopener noreferrer nofollow">Erstellt mit kostenlosem
                    Datenschutz-Generator.de von Dr. Thomas Schwenke</a></p>
            </div>
        </div>
    );
}