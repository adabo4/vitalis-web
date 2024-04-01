import React, { useState, useEffect } from 'react';
import './cookieBanner.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import { setLocalStorage, getLocalStorage } from '../../lib/storageHelper';
import setCookie from '../../lib/cookieHelper';
import { HashLink } from 'react-router-hash-link';
import { FaGreaterThan } from "react-icons/fa"

const CookieBanner = ({ showBanner, setShowBanner }) => {
    const [cookieConsent, setCookieConsent] = useState(null);

    //const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null);

        if (storedCookieConsent !== null) {
            setCookieConsent(storedCookieConsent);
        }



        const consentExpiration = getCookieExpiration("consent");


        if ((!cookieConsent && consentExpiration !== null && new Date(consentExpiration) < new Date())) {
            setShowBanner(true);
        }
    }, []);

    useEffect(() => {
        const consentExpiration = getCookieExpiration("consent");
        if (consentExpiration === null) {
            setCookieConsent(null);
            setShowBanner(true);
        }
    }, [cookieConsent]);



    const handleConsentChange = (consentStatus) => {
        const newValue = consentStatus ? 'granted' : 'denied';
        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });
        setLocalStorage("cookie_consent", consentStatus);

        setCookieConsent(consentStatus);

        if (!consentStatus) {
            setCookie("consent", "denied", 30);

        } else {
            setCookie("consent", "granted", 30);

        }

        setShowBanner(false);
    };

    const getCookieExpiration = (name) => {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    };

    if (showBanner || cookieConsent === null) {
        return (
            <div className="cookie-banner">
                <div className="cookie-banner-text">
                    <div className="cookie-banner-text">
                        <p>Pre lepší online zážitok používame súbory "cookies". Vďaka nim presnejšie analyzujeme návštevnosť a prispôsobujeme používateľské nastavenia. Súhlasíte so spracovaním súvisiacich osobných údajov?</p>
                        <p><HashLink to="/cookies#cookies" spy={true} smooth={true} offset={50} duration={500} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}> Vlastné nastavenie <span>cookies</span></HashLink></p>
                    </div>
                </div>
                <div className="cookie-banner-buttons">
                    <button className="decline-btn" onClick={() => handleConsentChange(false)}>Zakázať</button>
                    <button className="accept-btn" onClick={() => handleConsentChange(true)}>Povoliť</button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default CookieBanner;
