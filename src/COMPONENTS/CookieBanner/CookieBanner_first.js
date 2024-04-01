import React, { useState, useEffect } from 'react';
import './cookieBanner.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import { setLocalStorage, getLocalStorage } from '../../lib/storageHelper';
import setCookie
    from '../../lib/cookieHelper';

export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState(null);
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null);
        if (storedCookieConsent !== null) {
            setCookieConsent(storedCookieConsent);
        }

        const consentExpiration = getCookieExpiration("consent");
        if (!cookieConsent && consentExpiration !== null && new Date(consentExpiration) < new Date()) {
            setShowBanner(true);
        }
    }, []);

    useEffect(() => {
        const consentExpiration = getCookieExpiration("consent");
        if (consentExpiration === null) {
            setCookieConsent(null); // Reset cookieConsent when consent cookie expires
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
            // If consent is declined, create a "consent" cookie with value "denied" and expiration 3 seconds
            setCookie("consent", "denied", 30);
        } else {
            // Set the "consent" cookie when user grants consent
            setCookie("consent", "granted", 30);
            document.getElementById('map').style.display = 'block';
            document.querySelector(".iframe-overlay").style.display = "none";
        }

        setShowBanner(false);
        setLocalStorage("cookie_consent", consentStatus);
    };

    const getCookieExpiration = (name) => {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    };

    if (showBanner || cookieConsent === null) {
        return (
            <div className="cookie-banner">
                <div className="cookie-banner-text">
                    <Link to="/cookies">
                        <p>Používame <span className="font-bold text-sky-400">cookies</span> na analýzu návštevnosti. </p>
                    </Link>
                </div>
                <div className="cookie-banner-buttons">
                    <button className="decline-btn" onClick={() => handleConsentChange(false)}>Decline</button>
                    <button className="accept-btn" onClick={() => handleConsentChange(true)}>Allow Cookies</button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}
