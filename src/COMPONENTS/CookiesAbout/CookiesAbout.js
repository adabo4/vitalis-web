import React from 'react'
import "./cookiesAbout.css"
import { FaGreaterThan } from "react-icons/fa"
import './toggleButton.css';
import { useEffect, useState } from 'react';
import { setLocalStorage } from '../../lib/storageHelper';
import setCookie from "../../lib/cookieHelper"
import Footer from '../FOOTER/Footer'
import { Link } from 'react-router-dom'
import titleUnderline from '../img/title-underline.png'
import { LiaCookieSolid } from "react-icons/lia";

export default function CookiesAbout({ setShowBanner }) {
    const [cookieConsent, setCookieConsent] = useState(false);
    const [pendingConsent, setPendingConsent] = useState(false);

    const handleToggle = () => {
        setCookieConsent(!cookieConsent);
        setPendingConsent(true);
    };

    const handleSave = () => {
        setLocalStorage("cookie_consent", cookieConsent);
        setPendingConsent(!pendingConsent);
        if (cookieConsent) {
            setCookie("consent", "granted", 30);
            const newValue = cookieConsent ? 'granted' : 'denied';
            window.gtag("consent", 'update', {
                'analytics_storage': newValue
            });
        } else {
            setCookie("consent", "denied", 30);
            const newValue = cookieConsent ? 'granted' : 'denied';
            window.gtag("consent", 'update', {
                'analytics_storage': newValue
            });
            setLocalStorage("cookie_consent", cookieConsent);
        }
        setShowBanner(false);
    };

    useEffect(() => {
        const storedCookieConsent = localStorage.getItem("cookie_consent");
        if (storedCookieConsent !== null) {
            setCookieConsent(storedCookieConsent === "true");
        }

        const consentCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('consent='));
        if (!consentCookie) {
            setCookieConsent(null);
        }
    }, []);

    return (
        <>
            <div className='cookies-about-container' id='cookies'>
                <div className='cookies-box'>
                    <div className='cookies-box-text'>
                        <h4>Štatistické cookies</h4>
                        <p>Štatistické cookies uchovávajú anonymné dáta, ktoré nám pomáhajú lepšie pochopiť návštevnosť našej stránky.</p>
                    </div>
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
                    {/* <ToggleButton cookieConsent={cookieConsent} handleSave={handleSave} handleToggle={handleToggle}></ToggleButton> */}
                </div>
                <button className='toggle-btn' onClick={handleSave}>Uložiť preferenciu <FaGreaterThan className='fa-icon' /></button>
            </div>

            <div className="cookies-info">
                <div className='cookies-info-top'>
                    <h2 className='cookies-headline'>Informácie o spracúvaní súborov cookies</h2>
                    <img className='title-underline' src={titleUnderline} alt="Title Underline" />

                    <p>V zmysle Nariadenia Európskeho parlamentu a Rady (EÚ) 2016/679 z 27. apríla 2016 o ochrane fyzických osôb pri spracúvaní osobných údajov, ktorým sa zrušuje smernica 95/46/ES (ďalej len „všeobecné nariadenie o ochrane údajov") a zákona č. 18/2018 Z. z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov (ďalej len „zákon o ochrane osobných údajov") uvádzame, že naša webová stránka https://www.lekarenvitalis.sk/ používa technológiu cookies.</p>
                </div>

                <div className="cookies-info-center">
                    <div className="cookies-info-left">
                        <div className="coo">
                            <h2 className='cookies-sub-headline'>Čo je to Cookie?</h2>
                            <LiaCookieSolid className='cookie-icon' />
                        </div>
                        <p>Cookie je krátky textový súbor, ktorý sa po navštívení našej webovej stránky uloží na pevný disk počítača alebo na iné zariadenie. Webovým stránkam umožňuje napríklad zapamätať si informácie o vašej návšteve, preferovaný jazyk a ďalšie nastavenia.</p>
                        <LiaCookieSolid className='cookie-icon-right' />
                        <h2 className='cookies-sub-headline'>Naša webová stránka využíva nasledovné cookies:</h2>
                        <p>Analytické cookies, ktoré slúžia pre anonymný zber dát zákazníckeho správania na webe www.lekarenvitalis.sk spoločnosti LEKAMED spol. s.r.o. a neobsahujú osobné údaje. Tieto cookies sú zbierané až po udelení súhlasu zo strany užívateľa webovej stránky spoločnosti LEKAMED spol. s.r.o.</p>

                    </div>

                    <div className="cookies-info-right">

                        <h3>1. Identifikačné a kontaktné údaje prevádzkovateľa</h3>
                        <p>Prevádzkovateľom osobných údajov je LEKAMED, spol. s.r.o.,
                            so sídlom Trhová 4, 91701 Trnava, IČO: 36 737 607, zapísaná v Obchodnom registri Okresného
                            súdu Trnava oddiel: Sro, vložka č.: 19615/T,(ďalej len "prevádzkovateľ"), ktorý spracúva osobné údaje za podmienok uvedených nižšie.</p>

                        <h3>2. Účel spracúvania osobných údajov, na ktorý sú osobné údaje určené:</h3>

                        <p>Prevádzkovateľ používa na tejto webovej stránke súbory cookies za účelom prispôsobenia zobrazenia webovej stránky a merania návštevnosti webovej stránky.
                            Tieto súbory cookie môžu sledovať ako dlho trávite na stránke a stránky, ktoré navštívite, aby sme mohli aj naďalej produkovať zaujímavý obsah.</p>

                        <h3>3. Identifikácia príjemcu</h3>
                        <p>Príjemcovia, ktorí spracúvajú údaje získané prostredníctvom cookies využívaných na web stránke www.lekarenvitalis.sk sú:</p>
                        <p>- Google Ireland Limited Gordon House, Barrow Street, Dublin 4, Ireland</p>
                    </div>
                </div>
            </div>

            <h3 style={{ textAlign: "center" }}>Druhy spracúvaných cookies</h3>
            <div className='table-container'>
                <table className='cookie-table'>
                    <thead>
                        <tr>
                            <td>Názov</td>
                            <td>Typ</td>
                            <td>Účel</td>
                            <td>Exspirácia</td>
                            <td>Adresa</td>
                            <td>Odkaz</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Google Analytics</td>
                            <td>Štatistické</td>
                            <td>Získavanie anonymizovaných štatistických údajov o používaní webovej stránky.</td>
                            <td>1 mesiac</td>
                            <td>Google Ireland Limited Gordon House, Barrow Street, Dublin 4, Ireland</td>
                            <td><Link to="https://support.google.com/analytics/topic/2919631?hl=sk&ref_topic=1008008&sjid=9083871933793431562-EU">Bližšie informácie o ochrane súkromia nájdete na stránkach Google Analytics.</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}
