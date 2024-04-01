import React from 'react';
import CookieConsent from 'react-cookie-consent';

const ConsentBanner = ({ onAccept, onDecline }) => {
    return (
        <CookieConsent
            location="bottom"
            cookieName="Google Analytics"
            buttonText="I Agree"
            declineButtonText="Decline"
            enableDeclineButton
            onAccept={onAccept}
            onDecline={onDecline}
            hideOnAccept={false}
        >
            This website uses cookies to enhance the user experience and for analytics purposes.
        </CookieConsent>
    );
};

export default ConsentBanner;
