import React from 'react';
import './toggleButton.css'; // Import the CSS file


export default function ToggleButton({ handleSave, handleToggle, cookieConsent, handleMapToggle, cookieConsentGoogleMap }) {

    // const [cookieConsent, setCookieConsent] = useState(false);
    // const [pendingConsent, setPendingConsent] = useState(false);

    // const handleToggle = () => {
    //     setCookieConsent(!cookieConsent);
    //     setPendingConsent(true);

    // };

    // const handleSave = () => {
    //     setLocalStorage("cookie_consent", cookieConsent);
    //     setPendingConsent(false); // Reset pending consent

    //     if (cookieConsent) {
    //         // Set the "consent" cookie when user grants consent
    //         // const expirationDate = new Date();
    //         // expirationDate.setTime(expirationDate.getTime() + 15000);
    //         // document.cookie = `consent=granted; expires=${expirationDate.toUTCString()}; path=/`;
    //         setCookie("consent", "granted", 30);
    //         const newValue = cookieConsent ? 'granted' : 'denied';
    //         window.gtag("consent", 'update', {
    //             'analytics_storage': newValue
    //         });


    //     } else {
    //         // Remove the "consent" cookie when user declines consent
    //         // document.cookie = "consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //         // const expirationDate = new Date();
    //         // expirationDate.setTime(expirationDate.getTime() + 15000);
    //         // document.cookie = `consent=denied; expires=${expirationDate.toUTCString()}; path=/`;
    //         setCookie("consent", "denied", 30);
    //         const newValue = cookieConsent ? 'granted' : 'denied';
    //         window.gtag("consent", 'update', {
    //             'analytics_storage': newValue
    //         });
    //         setLocalStorage("cookie_consent", cookieConsent);

    //     }

    // };

    // useEffect(() => {
    //     const storedCookieConsent = localStorage.getItem("cookie_consent");
    //     if (storedCookieConsent !== null) {
    //         setCookieConsent(storedCookieConsent === "true");
    //     }

    //     // Check if the consent cookie has expired
    //     const consentCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('consent='));
    //     if (!consentCookie) {
    //         // If consent cookie doesn't exist or has expired, set cookieConsent to null
    //         setCookieConsent(null);
    //     }
    // }, []);


    //console.log("cookie consent: " + cookieConsent)


    return (
        <>
            <div className='toggle-btn-container'>
                <label className="toggle-container">
                    <input
                        type="checkbox"
                        checked={cookieConsent}
                        onChange={handleToggle}

                    />
                    <span className={cookieConsent ? "toggle toggled" : "toggle"}></span>
                </label>
                {/* <button className='toggle-btn' onClick={handleSave}>Uložiť preferenciu <FaGreaterThan className='fa-icon' /></button> */}
            </div>
        </>
    );
}
