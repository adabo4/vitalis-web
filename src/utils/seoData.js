export const getSEOData = (pathname) => {
    const seoData = {
        "/": {
            title: "Lekáreň Vitalis – Trnava | Poradenstvo, rezervácie, lieky a doplnky",
            description: "Lekáreň Vitalis v centre Trnavy. Profesionálne poradenstvo, rezervácie liekov, dermocentrum, zdravotné vyšetrenia a široký sortiment liekov a doplnkov stravy."
        },
        "/news": {
            title: "Aktuality a novinky | Lekáreň Vitalis Trnava",
            description: "Najnovšie aktuality, akcie a novinky z Lekárne Vitalis Trnava. Sledujte naše promo akcie a špeciálne ponuky na lieky a kozmetiku."
        },
        "/onas": {
            title: "O nás | Lekáreň Vitalis Trnava – vaša lekáreň v centre",
            description: "Spoznajte Lekáreň Vitalis v Trnave. Naša história, hodnoty a tím odborníkov, ktorí sa starajú o vaše zdravie s profesionálnym prístupom."
        },
        "/letak": {
            title: "Leták so zľavami | Lekáreň Vitalis Trnava",
            description: "Aktuálny leták s výhodnými cenami a zľavami na lieky, doplnky stravy a kozmetiku v Lekárni Vitalis Trnava."
        },
        "/gdpr": {
            title: "GDPR a ochrana osobných údajov | Lekáreň Vitalis Trnava",
            description: "Informácie o ochrane osobných údajov a GDPR v Lekárni Vitalis Trnava. Zásady spracovania a ochrany vašich osobných údajov."
        },
        "/dermocentrum": {
            title: "Dermocentrum | Starostlivosť o pleť – Avène, Vichy, Ducray | Lekáreň Vitalis Trnava",
            description: "Profesionálne dermocentrum s kozmetikou Avène, Vichy, Ducray a La Roche-Posay. Poradenstvo pre starostlivosť o pleť a diagnostika pleti."
        },
        "/poukazky": {
            title: "Darčekové poukážky | Lekáreň Vitalis Trnava",
            description: "Darčekové poukážky z Lekárne Vitalis Trnava. Ideálny darček pre vašich blízkych na lieky, kozmetiku a doplnky stravy."
        },
        "/kontakt": {
            title: "Kontakt | Lekáreň Vitalis Trnava – adresa, telefón, otváracie hodiny",
            description: "Kontaktné údaje Lekárne Vitalis Trnava: adresa Trhová 4, telefón, email, otváracie hodiny. Nájdete nás v centre Trnavy."
        },
        "/cookies": {
            title: "Cookies | Lekáreň Vitalis Trnava",
            description: "Informácie o používaní cookies na webovej stránke Lekárne Vitalis Trnava. Nastavenia súkromia a súborov cookies."
        },
        "/vysetrenie": {
            title: "Vyšetrenie zdravia | Lekáreň Vitalis Trnava – meranie tlaku, CRP, glukózy",
            description: "Zdravotné vyšetrenia v Lekárni Vitalis: meranie krvného tlaku, glukózy, CRP, cholesterolu. Profesionálne poradenstvo a diagnostika."
        },
        "/rezervacia": {
            title: "Rezervácie liekov a doplnkov | Lekáreň Vitalis Trnava",
            description: "Online rezervácia liekov a doplnkov stravy v Lekárni Vitalis Trnava. Rýchle a jednoduché objednávanie s možnosťou vyzdvihnutia."
        },
        "/rezervacny-formular": {
            title: "Rezervačný formulár | Lekáreň Vitalis Trnava",
            description: "Vyplňte rezervačný formulár pre lieky a doplnky v Lekárni Vitalis Trnava. Jednoduchý proces objednávania online."
        },
        "/vytvorenie-rezervacie": {
            title: "Potvrdenie rezervácie | Lekáreň Vitalis Trnava",
            description: "Vaša rezervácia bola úspešne vytvorená. Ďakujeme za dôveru v Lekáreň Vitalis Trnava."
        }
    };

    // Vráti SEO dáta pre danú cestu alebo default pre hlavnú stránku
    return seoData[pathname] || seoData["/"];
};