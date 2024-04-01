import { useEffect } from 'react';
import { pageview } from '../../lib/gtagHelper';
import { useLocation } from 'react-router-dom';
const GoogleAnalytics = ({ GA_MEASUREMENT_ID }) => {

    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        script1.async = true;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('consent', 'default', {
          'analytics_storage': 'denied'
      });

      gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
      });
    `;
        document.head.appendChild(script2);

        return () => {
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, [GA_MEASUREMENT_ID]);

    const location = useLocation(); // Get the current location

    useEffect(() => {
        const url = location.pathname + location.search; // Construct the complete URL

        pageview(GA_MEASUREMENT_ID, url); // Report the page view to Google Analytics

    }, [location, GA_MEASUREMENT_ID]); // Execute the effect whenever location or GA_MEASUREMENT_ID changes


    return null;
};

export default GoogleAnalytics;
