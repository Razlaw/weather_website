import "./privacyStatement.scss";
import React from "react";
import {useNavigate} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export default function PrivacyStatement({showCookieBanner, removeCookie, setAreCookiesAccepted}) {
    const navigate = useNavigate();

    function removeAllCookies() {
        removeCookie("selectedCityName", {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
        removeCookie("lat", {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
        removeCookie("lon", {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
        removeCookie("areCookiesAccepted", {path: '/', secure: true, sameSite: "strict", maxAge: 31536000});
        setAreCookiesAccepted(false);
        window.location.reload(true);
    }

    return (
        <div className="privacyStatementContainer">
            <div className={"contentContainer " + (showCookieBanner && "showCookieBanner")}>
                <div className="removeCookiesButton" onClick={removeAllCookies}>
                    <h2>Lösche Cookies</h2>
                </div>
                <h1>Datenschutzerklärung</h1>
                <h2 id="m1870">Einleitung</h2>
                <p>
                    <strong>Zusammenfassung für Laien</strong><br/>
                    Diese Website leitet deine Suchanfrage weiter, um dir die Wettervorhersage darzustellen.
                    Zusätzlich wird die Möglichkeit geboten deine letzte Suchanfrage in den Cookies auf deinem Gerät zu
                    speichern.<br/>
                    Eine weitere Verarbeitung deiner Daten findet auf dieser Website selbst nicht statt.
                </p>
                <p>
                    Trotzdem solltest du dir die gesamte Datenschutzerklärung durchlesen, da auch beispielsweise deine
                    IP-Adresse vom Websitehoster Github Pages benutzt wird, um dir diese Website bereitzustellen.
                    Des Weiteren zählt auch deine E-Mail Adresse zu privaten Daten, solltest du dich entscheiden eine
                    E-Mail an die unten aufgeführte Adresse zu schicken.
                </p>
                <p>
                    Diese und weitere Details sind in der folgenden Datenschutzerklärung aufgeführt.
                </p>
                <p>
                    <strong>Details für Laien</strong><br/>

                    Diese Website leitet die von dir gesuchte Stadt und ihre Geokoordinaten an OpenWeather weiter.<br/>
                    Die Geokoordinaten werden benötigt, da es Städte mit gleichen Namen gibt.<br/>
                    OpenWeather antwortet mit der Wettervorhersage für diese Stadt.
                </p>
                <p>
                    Wenn du der Benutzung von Cookies zustimmt, wird deine letzte Suchanfrage auf deinem Gerät
                    gespeichert.<br/>
                    Das dient dazu dir die Wettervorhersage dieser Stadt beim nächsten Aufruf der Website direkt
                    wieder anzuzeigen - ohne dass du erneut danach suchen musst.<br/>
                    Diese Funktion ist besonders dann praktisch, wenn du die Website als Link auf dem Startbildschirm
                    deines Smartphones speicherst.
                </p>
                <p>
                    Die Cookies werden maximal ein Jahr lang gespeichert.<br/>
                    Solltest du die Cookies wieder löschen wollen, betätige einfach den Button oben auf dieser
                    Seite.
                </p>
                <p>Stand: 30. März 2022</p><h2>Inhaltsübersicht</h2>
                <ul className="index">
                    <li><HashLink smooth to="/privacy_statement#m1870">Einleitung</HashLink></li>
                    <li><HashLink smooth to="/privacy_statement#m3">Verantwortlicher</HashLink></li>
                    <li><HashLink smooth to="/privacy_statement#mOverview">Übersicht der Verarbeitungen</HashLink></li>
                    <li><HashLink smooth to="/privacy_statement#m13">Maßgebliche Rechtsgrundlagen</HashLink></li>
                    <li><HashLink smooth to="/privacy_statement#m27">Sicherheitsmaßnahmen</HashLink></li>
                    <li><HashLink smooth to="/privacy_statement#m25">Übermittlung von personenbezogenen Daten</HashLink></li>
                    <li><HashLink smooth to="/privacy_statement#m24">Datenverarbeitung in Drittländern</HashLink></li>
                    <li><HashLink smooth to="/privacy_statement#m12">Löschung von Daten</HashLink></li>
                    <li><HashLink smooth to="/privacy_statement#m134">Einsatz von Cookies</HashLink></li>
                    <li><HashLink smooth to="/privacy_statement#m225">Bereitstellung des Onlineangebotes und Webhosting</HashLink></li>
                    <li><HashLink smooth to="/privacy_statement#m182">Kontakt- und Anfragenverwaltung</HashLink></li>
                    <li><HashLink smooth to="/privacy_statement#m328">Plugins und eingebettete Funktionen sowie Inhalte</HashLink></li>
                    <li><HashLink smooth to="/privacy_statement#m15">Änderung und Aktualisierung der Datenschutzerklärung</HashLink></li>
                    <li><HashLink smooth to="/privacy_statement#m10">Rechte der betroffenen Personen</HashLink></li>
                    <li><HashLink smooth to="/privacy_statement#m42">Begriffsdefinitionen</HashLink></li>
                    <li><HashLink smooth to="/privacy_statement#m43">Vom Websiteinhaber angepasst</HashLink></li>
                </ul>
                <h2 id="m3">Verantwortlicher</h2><p>Jan Razlaw<br/>Römerstr. 367<br/>53117 Bonn</p>
                E-Mail-Adresse: <p>jan.razlaw [at] googlemail.com</p>
                Impressum:
                <p className="linkToSiteNotice" onClick={() => navigate("/site_notice")}>https://razlaw.github.io/weather_website/#/site_notice</p>
                <h2 id="mOverview">Übersicht der Verarbeitungen</h2><p>Die nachfolgende Übersicht fasst die Arten der
                verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen
                Personen.</p><h3>Arten der verarbeiteten Daten</h3>
                <ul>
                    <li>Bestandsdaten.</li>
                    <li>Kontaktdaten.</li>
                    <li>Inhaltsdaten.</li>
                    <li>Nutzungsdaten.</li>
                    <li>Meta-/Kommunikationsdaten.</li>
                </ul>
                <h3>Kategorien betroffener Personen</h3>
                <ul>
                    <li>Kommunikationspartner.</li>
                    <li>Nutzer.</li>
                </ul>
                <h3>Zwecke der Verarbeitung</h3>
                <ul>
                    <li>Kontaktanfragen und Kommunikation.</li>
                    <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                </ul>
                <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3><p>Im Folgenden erhalten Sie eine Übersicht der
                Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur
                Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn-
                oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein,
                teilen wir Ihnen diese in der Datenschutzerklärung mit.</p>
                <ul>
                    <li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b.
                        DSGVO)</strong> - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei
                        die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die
                        auf Anfrage der betroffenen Person erfolgen.
                    </li>
                    <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)</strong> - Die Verarbeitung
                        ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten
                        erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen
                        Person, die den Schutz personenbezogener Daten erfordern, überwiegen.
                    </li>
                </ul>
                <p>Zusätzlich zu den Datenschutzregelungen der Datenschutz-Grundverordnung gelten nationale Regelungen
                    zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch
                    personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
                    insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum
                    Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung
                    für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall
                    einschließlich Profiling. Des Weiteren regelt es die Datenverarbeitung für Zwecke des
                    Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick auf die Begründung, Durchführung
                    oder Beendigung von Beschäftigungsverhältnissen sowie die Einwilligung von Beschäftigten. Ferner
                    können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.</p>
                <h2 id="m27">Sicherheitsmaßnahmen</h2><p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
                Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der
                Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und
                des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und
                organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</p>
                <p>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit
                    von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie
                    betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer
                    Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von
                    Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten
                    gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der
                    Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des
                    Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.</p>
                <p>SSL-Verschlüsselung (https): Um Ihre via unserem Online-Angebot übermittelten Daten zu schützen,
                    nutzen wir eine SSL-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen an dem Präfix
                    https:// in der Adresszeile Ihres Browsers.</p>
                <h2 id="m25">Übermittlung von personenbezogenen Daten</h2><p>Im Rahmen unserer Verarbeitung von
                personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich
                selbstständige Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber offengelegt
                werden. Zu den Empfängern dieser Daten können z.B. mit IT-Aufgaben beauftragte Dienstleister oder
                Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen Fall
                beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw.
                Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.</p>
                <h2 id="m24">Datenverarbeitung in Drittländern</h2><p>Sofern wir Daten in einem Drittland (d.h.,
                außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die
                Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw. Übermittlung
                von Daten an andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit den
                gesetzlichen Vorgaben. </p>
                <p>Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder gesetzlich erforderlicher
                    Übermittlung verarbeiten oder lassen wir die Daten nur in Drittländern mit einem anerkannten
                    Datenschutzniveau, vertraglichen Verpflichtung durch sogenannte Standardschutzklauseln der
                    EU-Kommission, beim Vorliegen von Zertifizierungen oder verbindlicher internen
                    Datenschutzvorschriften verarbeiten (Art. 44 bis 49 DSGVO, Informationsseite der EU-Kommission: <a
                        href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
                        target="_blank"
                        rel="noreferrer">https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de</a>).
                </p>
                <h2 id="m12">Löschung von Daten</h2><p>Die von uns verarbeiteten Daten werden nach Maßgabe der
                gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden
                oder sonstige Erlaubnisse entfallen (z.B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist
                oder sie für den Zweck nicht erforderlich sind).</p>
                <p>Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke
                    erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten werden
                    gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder
                    steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung zur Geltendmachung,
                    Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen
                    oder juristischen Person erforderlich ist.</p>
                <p>Unsere Datenschutzhinweise können ferner weitere Angaben zu der Aufbewahrung und Löschung von Daten
                    beinhalten, die für die jeweiligen Verarbeitungen vorrangig gelten.</p>
                <h2 id="m134">Einsatz von Cookies</h2><p>Cookies sind kleine Textdateien, bzw. sonstige
                Speichervermerke, die Informationen auf Endgeräten speichern und Informationen aus den Endgeräten
                auslesen. Z.B. um den Login-Status in einem Nutzerkonto, einen Warenkorbinhalt in einem E-Shop, die
                aufgerufenen Inhalte oder verwendete Funktionen eines Onlineangebotes speichern. Cookies können ferner
                zu unterschiedlichen Zwecken eingesetzt werden, z.B. zu Zwecken der Funktionsfähigkeit, Sicherheit und
                Komfort von Onlineangeboten sowie der Erstellung von Analysen der Besucherströme. </p>
                <p><strong>Hinweise zur Einwilligung: </strong>Wir setzen Cookies im Einklang mit den gesetzlichen
                    Vorschriften ein. Daher holen wir von den Nutzern eine vorhergehende Einwilligung ein, außer wenn
                    diese gesetzlich nicht gefordert ist. Eine Einwilligung ist insbesondere nicht notwendig, wenn das
                    Speichern und das Auslesen der Informationen, also auch von Cookies, unbedingt erforderlich sind, um
                    dem den Nutzern einen von ihnen ausdrücklich gewünschten Telemediendienst (also unser Onlineangebot)
                    zur Verfügung zu stellen. Die widerrufliche Einwilligung wird gegenüber den Nutzern deutlich
                    kommuniziert und enthält die Informationen zu der jeweiligen Cookie-Nutzung.</p>
                <p><strong>Hinweise zu datenschutzrechtlichen Rechtsgrundlagen: </strong>Auf welcher
                    datenschutzrechtlichen Rechtsgrundlage wir die personenbezogenen Daten der Nutzer mit Hilfe von
                    Cookies verarbeiten, hängt davon ab, ob wir Nutzer um eine Einwilligung bitten. Falls die Nutzer
                    einwilligen, ist die Rechtsgrundlage der Verarbeitung Ihrer Daten die erklärte Einwilligung.
                    Andernfalls werden die mithilfe von Cookies verarbeiteten Daten auf Grundlage unserer berechtigten
                    Interessen (z.B. an einem betriebswirtschaftlichen Betrieb unseres Onlineangebotes und Verbesserung
                    seiner Nutzbarkeit) verarbeitet oder, wenn dies im Rahmen der Erfüllung unserer vertraglichen
                    Pflichten erfolgt, wenn der Einsatz von Cookies erforderlich ist, um unsere vertraglichen
                    Verpflichtungen zu erfüllen. Zu welchen Zwecken die Cookies von uns verarbeitet werden, darüber
                    klären wir im Laufe dieser Datenschutzerklärung oder im Rahmen von unseren Einwilligungs- und
                    Verarbeitungsprozessen auf.</p>
                <p><strong>Speicherdauer: </strong>Im Hinblick auf die Speicherdauer werden die folgenden Arten von
                    Cookies unterschieden:</p>
                <ul>
                    <li><strong>Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):</strong> Temporäre Cookies
                        werden spätestens gelöscht, nachdem ein Nutzer ein Online-Angebot verlassen und sein Endgerät
                        (z.B. Browser oder mobile Applikation) geschlossen hat.
                    </li>
                    <li><strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach dem Schließen des
                        Endgerätes gespeichert. So können beispielsweise der Login-Status gespeichert oder bevorzugte
                        Inhalte direkt angezeigt werden, wenn der Nutzer eine Website erneut besucht. Ebenso können die
                        mit Hilfe von Cookies erhobenen Daten der Nutzer zur Reichweitenmessung verwendet werden. Sofern
                        wir Nutzern keine expliziten Angaben zur Art und Speicherdauer von Cookies mitteilen (z. B. im
                        Rahmen der Einholung der Einwilligung), sollten Nutzer davon ausgehen, dass Cookies permanent
                        sind und die Speicherdauer bis zu zwei Jahre betragen kann.
                    </li>
                </ul>
                <p><strong>Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out): </strong>Nutzer können die von
                    ihnen abgegebenen Einwilligungen jederzeit Widerrufen und zudem einen Widerspruch gegen die
                    Verarbeitung entsprechend den gesetzlichen Vorgaben im Art. 21 DSGVO einlegen (weitere Hinweise zum
                    Widerspruch erfolgen im Rahmen dieser Datenschutzerklärung). Nutzer können Ihren Widerspruch auch
                    mittels der Einstellungen Ihres Browsers erklären.</p>
                <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
                <ul className="m-elements">
                    <li><strong>Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung: </strong>Wir setzen ein
                        Verfahren zum Cookie-Einwilligungs-Management ein, in dessen Rahmen die Einwilligungen der
                        Nutzer in den Einsatz von Cookies, bzw. der im Rahmen des
                        Cookie-Einwilligungs-Management-Verfahrens genannten Verarbeitungen und Anbieter eingeholt sowie
                        von den Nutzern verwaltet und widerrufen werden können. Hierbei wird die Einwilligungserklärung
                        gespeichert, um deren Abfrage nicht erneut wiederholen zu müssen und die Einwilligung
                        entsprechend der gesetzlichen Verpflichtung nachweisen zu können. Die Speicherung kann
                        serverseitig und/oder in einem Cookie (sogenanntes Opt-In-Cookie, bzw. mithilfe vergleichbarer
                        Technologien) erfolgen, um die Einwilligung einem Nutzer, bzw. dessen Gerät zuordnen zu können.
                        Vorbehaltlich individueller Angaben zu den Anbietern von Cookie-Management-Diensten, gelten die
                        folgenden Hinweise: Die Dauer der Speicherung der Einwilligung kann bis zu zwei Jahren betragen.
                        Hierbei wird ein pseudonymer Nutzer-Identifikator gebildet und mit dem Zeitpunkt der
                        Einwilligung, Angaben zur Reichweite der Einwilligung (z. B. welche Kategorien von Cookies
                        und/oder Diensteanbieter) sowie dem Browser, System und verwendeten Endgerät gespeichert.
                    </li>
                </ul>
                <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2><p>Um unser Onlineangebot sicher und
                effizient bereitstellen zu können, nehmen wir die Leistungen von einem oder mehreren
                Webhosting-Anbietern in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern) das
                Onlineangebot abgerufen werden kann. Zu diesen Zwecken können wir Infrastruktur- und
                Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste sowie
                Sicherheitsleistungen und technische Wartungsleistungen in Anspruch nehmen.</p>
                <p>Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten Daten können alle die Nutzer
                    unseres Onlineangebotes betreffenden Angaben gehören, die im Rahmen der Nutzung und der
                    Kommunikation anfallen. Hierzu gehören regelmäßig die IP-Adresse, die notwendig ist, um die Inhalte
                    von Onlineangeboten an Browser ausliefern zu können, und alle innerhalb unseres Onlineangebotes oder
                    von Webseiten getätigten Eingaben.</p>
                <ul className="m-elements">
                    <li><strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (z.B. Eingaben in Onlineformularen);
                        Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten);
                        Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
                    </li>
                    <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von
                        Onlinediensten).
                    </li>
                    <li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und
                        Nutzerfreundlichkeit.
                    </li>
                    <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
                    </li>
                </ul>
                <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
                <ul className="m-elements">
                    <li><strong>E-Mail-Versand und -Hosting: </strong>Die von uns in Anspruch genommenen
                        Webhosting-Leistungen umfassen ebenfalls den Versand, den Empfang sowie die Speicherung von
                        E-Mails. Zu diesen Zwecken werden die Adressen der Empfänger sowie Absender als auch weitere
                        Informationen betreffend den E-Mailversand (z.B. die beteiligten Provider) sowie die Inhalte der
                        jeweiligen E-Mails verarbeitet. Die vorgenannten Daten können ferner zu Zwecken der Erkennung
                        von SPAM verarbeitet werden. Wir bitten darum, zu beachten, dass E-Mails im Internet
                        grundsätzlich nicht verschlüsselt versendet werden. Im Regelfall werden E-Mails zwar auf dem
                        Transportweg verschlüsselt, aber (sofern kein sogenanntes Ende-zu-Ende-Verschlüsselungsverfahren
                        eingesetzt wird) nicht auf den Servern, von denen sie abgesendet und empfangen werden. Wir
                        können daher für den Übertragungsweg der E-Mails zwischen dem Absender und dem Empfang auf
                        unserem Server keine Verantwortung übernehmen.
                    </li>
                    <li><strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Wir selbst (bzw. unser
                        Webhostinganbieter) erheben Daten zu jedem Zugriff auf den Server (sogenannte Serverlogfiles).
                        Zu den Serverlogfiles können die Adresse und Name der abgerufenen Webseiten und Dateien, Datum
                        und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp
                        nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im
                        Regelfall IP-Adressen und der anfragende Provider gehören.

                        Die Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt werden, z.B., um eine
                        Überlastung der Server zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen,
                        sogenannten DDoS-Attacken) und zum anderen, um die Auslastung der Server und ihre Stabilität
                        sicherzustellen; <strong>Löschung von Daten:</strong> Logfile-Informationen werden für die Dauer
                        von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert. Daten, deren weitere
                        Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen
                        Vorfalls von der Löschung ausgenommen.
                    </li>
                    <li><strong>Content-Delivery-Network: </strong>Wir setzen ein "Content-Delivery-Network" (CDN) ein.
                        Ein CDN ist ein Dienst, mit dessen Hilfe Inhalte eines Onlineangebotes, insbesondere große
                        Mediendateien, wie Grafiken oder Programm-Skripte, mit Hilfe regional verteilter und über das
                        Internet verbundener Server schneller und sicherer ausgeliefert werden können.
                    </li>
                    <li><strong>Github Pages: </strong>Hosting Service von Github; <strong>Dienstanbieter: </strong>
                        GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA; <strong>Website: </strong>
                        <a href="https://github.com/" target="_blank" rel="noreferrer">https://github.com/</a>;
                        <strong> Datenschutzerklärung: </strong>
                        <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                           target="_blank"
                           rel="noreferrer">https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement</a>.
                    </li>
                </ul>
                <h2 id="m182">Kontakt- und Anfragenverwaltung</h2><p>Bei der Kontaktaufnahme mit uns (z.B. per
                Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und
                Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet soweit dies zur
                Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.</p>
                <p>Die Beantwortung der Kontaktanfragen sowie die Verwaltung von Kontakt- und Anfragedaten im Rahmen von
                    vertraglichen oder vorvertraglichen Beziehungen erfolgt zur Erfüllung unserer vertraglichen
                    Pflichten oder zur Beantwortung von (vor)vertraglichen Anfragen und im Übrigen auf Grundlage der
                    berechtigten Interessen an der Beantwortung der Anfragen und Pflege von Nutzer- bzw.
                    Geschäftsbeziehungen.</p>
                <ul className="m-elements">
                    <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen, Adressen); Kontaktdaten
                        (z.B. E-Mail, Telefonnummern); Inhaltsdaten (z.B. Eingaben in Onlineformularen).
                    </li>
                    <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
                    <li><strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation.</li>
                    <li><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1
                        S. 1 lit. b. DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
                    </li>
                </ul>
                <h2 id="m328">Plugins und eingebettete Funktionen sowie Inhalte</h2><p>Wir binden in unser Onlineangebot
                Funktions- und Inhaltselemente ein, die von den Servern ihrer jeweiligen Anbieter (nachfolgend
                bezeichnet als "Drittanbieter”) bezogen werden. Dabei kann es sich zum Beispiel um Grafiken, Videos oder
                Stadtpläne handeln (nachfolgend einheitlich bezeichnet als "Inhalte”).</p>
                <p>Die Einbindung setzt immer voraus, dass die Drittanbieter dieser Inhalte die IP-Adresse der Nutzer
                    verarbeiten, da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die
                    IP-Adresse ist damit für die Darstellung dieser Inhalte oder Funktionen erforderlich. Wir bemühen
                    uns, nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur
                    Auslieferung der Inhalte verwenden. Drittanbieter können ferner sogenannte Pixel-Tags (unsichtbare
                    Grafiken, auch als "Web Beacons" bezeichnet) für statistische oder Marketingzwecke verwenden. Durch
                    die "Pixel-Tags" können Informationen, wie der Besucherverkehr auf den Seiten dieser Webseite,
                    ausgewertet werden. Die pseudonymen Informationen können ferner in Cookies auf dem Gerät der Nutzer
                    gespeichert werden und unter anderem technische Informationen zum Browser und zum Betriebssystem, zu
                    verweisenden Webseiten, zur Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes
                    enthalten als auch mit solchen Informationen aus anderen Quellen verbunden werden.</p>
                <p><strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir die Nutzer um deren Einwilligung in den
                    Einsatz der Drittanbieter bitten, ist die Rechtsgrundlage der Verarbeitung von Daten die
                    Einwilligung. Ansonsten werden die Daten der Nutzer auf Grundlage unserer berechtigten Interessen
                    (d.h. Interesse an effizienten, wirtschaftlichen und empfängerfreundlichen Leistungen) verarbeitet.
                    In diesem Zusammenhang möchten wir Sie auch auf die Informationen zur Verwendung von Cookies in
                    dieser Datenschutzerklärung hinweisen.</p>
                <ul className="m-elements">
                    <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte Webseiten, Interesse an
                        Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
                    </li>
                    <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von
                        Onlinediensten).
                    </li>
                    <li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und
                        Nutzerfreundlichkeit.
                    </li>
                    <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
                    </li>
                </ul>
                <p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p>
                <ul className="m-elements">
                    <li><strong>OpenWeatherMap: </strong>Diese Website verwendet den OpenWeatherMap Wetter Dienst über
                        eine API. Um diese Dienste zu nutzen, ist es nötig Ihre IP Adresse zu speichern. Diese
                        Informationen werden in der Regel an einen Server von OpenWeatherMap in den USA, UK oder
                        Lettland übertragen und dort gespeichert. Der Anbieter dieser Seite und App hat keinen
                        Einfluss auf diese Datenübertragung.

                        Die Nutzung von OpenWeatherMap erfolgt im Interesse einer ansprechenden Darstellung dieser
                        Website und um dem Benutzer Wettervorhersagen bereitzustellen. Dies stellt ein berechtigtes
                        Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.;

                        <strong> Dienstanbieter:</strong> Openweather Limited, 4 Queens Road, Wimbledon, London, SW19
                        8YB, United Kingdom; <strong>Website: </strong>
                        <a href="https://openweathermap.org/" target="_blank"
                           rel="noreferrer">https://openweathermap.org/</a>;
                        <strong> Datenschutzerklärung: </strong>
                        <a href="https://openweather.co.uk/privacy-policy" target="_blank" rel="noreferrer">
                            https://openweather.co.uk/privacy-policy</a>.
                    </li>
                </ul>
                <h2 id="m15">Änderung und Aktualisierung der Datenschutzerklärung</h2><p>Wir bitten Sie, sich regelmäßig
                über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an,
                sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir
                informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung)
                oder eine sonstige individuelle Benachrichtigung erforderlich wird.</p>
                <p>Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und
                    Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern können
                    und bitten die Angaben vor Kontaktaufnahme zu prüfen.</p>
                <h2 id="m10">Rechte der betroffenen Personen</h2><p>Ihnen stehen als Betroffene nach der DSGVO
                verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:</p>
                <ul>
                    <li><strong>Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
                        Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen
                        Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies
                        gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden
                        personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht,
                        jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum
                        Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher
                        Direktwerbung in Verbindung steht.</strong></li>
                    <li><strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen
                        jederzeit zu widerrufen.
                    </li>
                    <li><strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob
                        betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere
                        Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
                    </li>
                    <li><strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das
                        Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie
                        betreffenden unrichtigen Daten zu verlangen.
                    </li>
                    <li><strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe
                        der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich
                        gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der
                        Verarbeitung der Daten zu verlangen.
                    </li>
                    <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die
                        Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten,
                        gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen
                        Verantwortlichen zu fordern.
                    </li>
                    <li><strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben unbeschadet eines anderweitigen
                        verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
                        Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres
                        Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die
                        Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
                    </li>
                </ul>
                Für uns zuständige Aufsichtsbehörde: <p>
                <a href="https://www.ldi.nrw.de/" target="_blank" rel="noreferrer">https://www.ldi.nrw.de/</a></p>
                <h2 id="m42">Begriffsdefinitionen</h2><p>In diesem Abschnitt erhalten Sie eine Übersicht über die in
                dieser Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe sind dem Gesetz entnommen
                und vor allem im Art. 4 DSGVO definiert. Die gesetzlichen Definitionen sind verbindlich. Die
                nachfolgenden Erläuterungen sollen dagegen vor allem dem Verständnis dienen. Die Begriffe sind
                alphabetisch sortiert.</p>
                <ul className="glossary">
                    <li><strong>Personenbezogene Daten:</strong> "Personenbezogene Daten“ sind alle Informationen, die
                        sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden "betroffene
                        Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder
                        indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer,
                        zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen
                        Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen,
                        psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person
                        sind.
                    </li>
                    <li><strong>Verantwortlicher:</strong> Als "Verantwortlicher“ wird die natürliche oder juristische
                        Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die
                        Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
                    </li>
                    <li><strong>Verarbeitung:</strong> "Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter
                        Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
                        personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten,
                        sei es das Erheben, das Auswerten, das Speichern, das Übermitteln oder das Löschen.
                    </li>
                </ul>
                <h2 id="m43">Vom Websiteinhaber angepasst</h2><p>Die folgenden Punkte wurden zu der generierten
                Datenschutzerklärung vom Websiteinhaber hinzugefügt.</p>
                <ul className="changesByWebsiteOwner">
                    <li><strong>Einleitung:</strong> Im Abschnitt Einleitung wurde eine Zusammenfassung für Laien
                        hinzugefügt, die einfach darstellen soll welche Daten der Nutzer auf dieser Website selbst
                        verarbeitet werden.
                    </li>
                    <li><strong>Github Pages:</strong> Im Abschnitt <HashLink smooth to="/privacy_statement#m225">
                        Bereitstellung des Onlineangebotes und Webhosting</HashLink> wurde der Punkt Github Pages hinzugefügt.
                    </li>
                    <li><strong>OpenWeather:</strong> Im Abschnitt <HashLink smooth to="/privacy_statement#m328">Plugins
                        und eingebettete Funktionen sowie Inhalte </HashLink>
                        wurde der Punkt OpenWeather hinzugefügt.
                    </li>
                </ul>
                <p className="seal"><a href="https://datenschutz-generator.de/"
                                       title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
                                       target="_blank" rel="noopener noreferrer nofollow"><img
                    src="https://datenschutz-generator.de/wp-content/plugins/ts-dsg/images/dsg-seal/dsg-seal-pp-de.png"
                    alt="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." width="250"
                    height="250"/></a></p>
            </div>
        </div>
    );
}