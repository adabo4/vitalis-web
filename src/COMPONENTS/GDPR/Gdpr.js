import "./Gdpr.css";
import titleUnderline from '../img/title-underline.png'
import Footer from '../FOOTER/Footer';
import { Link } from 'react-router-dom';

export default function Gdpr() {
    return (
        <>
            <section>
                <div className="container-gdpr">
                    <div id='gdpr'>
                        <h2>Podmienky spracúvania osobných údajov www.lekarenvitalis.sk</h2>
                        <img className='title-underline' src={titleUnderline} alt="Title Underline" />
                        <div class="color-overlay"></div>
                        <div>
                            <ol className='points'>
                                <li>
                                    <h3>Spracúvanie osobných údajov na www.lekarenvitalis.sk</h3>
                                    <p>

                                        Prostredníctvom webovej stránky www.lekarenvitalis.sk (ďalej len „webová stránka“) dochádza
                                        k
                                        spracúvaniu osobných údajov návštevníka webovej stránky nasledovne:
                                    </p>
                                    <ul>
                                        <li><strong>Spracúvanie osobných údajov v prípade použitia kontaktného formulára:</strong>
                                            <p> Prevádzkovateľ webovej stránky plne rešpektuje právo návštevníkov webovej stránky na
                                                ochranu
                                                osobných údajov, ktoré sa ich týkajú a prostredníctvom tohto dokumentu poskytuje
                                                návštevníkovi
                                                webovej stránky ako dotknutej osobe informácie o spracúvaní osobných údajov podľa
                                                čl. 13
                                                Nariadenia Európskeho parlamentu a Rady (EÚ) 2016/679 o ochrane fyzických osôb pri
                                                spracúvaní
                                                osobných údajov a o voľnom pohybe takýchto údajov (ďalej len „GDPR“).
                                                Tieto Podmienky spracúvania osobných údajov sa vzťahujú výlučne na osobné údaje
                                                dotknutej osoby,
                                                ktoré boli získané prostredníctvom webovej stránky.
                                            </p>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <h3>Prevádzkovateľ</h3>
                                    <p>Osobné údaje získané prostredníctvom webovej stránky sú spracúvané obchodnou spoločnosťou
                                        <strong> LEKAMED, spol. s.r.o.,
                                            so sídlom Trhová 4, 91701 Trnava, IČO: 36 737 607, zapísaná v Obchodnom registri Okresného
                                            súdu Trnava
                                            oddiel: Sro, vložka č.: 19615/T, </strong> ktorá má pri spracúvaní osobných údajov
                                        postavenie prevádzkovateľa
                                        (ďalej len „prevádzkovateľ“).
                                    </p>
                                    <p>Kontaktné údaje prevádzkovateľa:</p>
                                    <ul>
                                        <li>e-mail: vitalis@of.sk</li>
                                        <li>telefón: 033/593 60 43</li>
                                    </ul>
                                </li>


                                <li>
                                    <h3>Príjemcovia osobných údajov</h3>
                                    <p>Osobné údaje dotknutej osoby, ktoré prevádzkovateľ získava prostredníctvom webovej stránky,
                                        sú
                                        poskytované nasledovným príjemcom:</p>
                                    <ul>
                                        <li>
                                            <strong>EMAILJS PTE. LTD.,</strong> 139 CECIL STREE, #03-10 YSY BUILDING, SINGAPORE
                                            (069539), <strong>ako poskytovateľovi služieb aplikácie EmailJS (www.emailjs.com), ktoré
                                                môžu byť zo strany prevádzkovateľa využívané pri uskutočňovaní činnosti súvisiacej s
                                                odoslaním kontaktného formulára dotknutou osobou.</strong>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <h3>Prenos osobných údajov</h3>
                                    <p>Prevádzkovateľ využíva softvérové riešenie poskytovateľa služieb na e-mailovanie, konkrétne
                                        www.emailjs.com, na účely spracovania osobných údajov získaných prostredníctvom kontaktného
                                        formulára na webovej stránke. Poskytnuté osobné údaje, ako sú meno a e-mailová adresa, budú
                                        spracovávané za účelom zabezpečenia doručenia správnej odpovede alebo informácií na uvedený
                                        e-mailový kontakt lekarenvitalis@gmail.com.
                                    </p>
                                    <p>
                                        Prevádzkovateľ, s výnimkou vyššie uvedenej situácie, nerealizuje prenos osobných údajov do
                                        tretích krajín alebo medzinárodným organizáciám.
                                    </p>
                                </li>

                                <li>
                                    <h3>Práva dotknutej osoby</h3>

                                    <p>Dotknutá osoba má v súvislosti so spracúvaním svojich osobných údajov nasledovné práva,
                                        ktorých
                                        uplatnenie môže realizovať zaslaním žiadosti na e-mailovú adresu prevádzkovateľa alebo
                                        adresu
                                        sídla jeho spoločnosti, ktoré sú uvedené v týchto Podmienkach spracúvania osobných údajov, a
                                        to
                                        za podmienok vymedzených v GDPR:</p>
                                    <ul>
                                        <li><strong>Právo na prístup k vlastným osobným údajom podľa článku 15 GDPR.</strong></li>
                                        <li><strong>Právo na opravu osobných údajov podľa článku 16 GDPR (alebo obmedzenie
                                            spracovania
                                            podľa článku 18 GDPR).
                                        </strong></li>
                                        <li><strong>Právo na vymazanie podľa článku 17 GDPR.</strong></li>
                                        <li><strong>Právo na prenosnosť údajov podľa článku 20 GDPR.</strong></li>
                                        <li><strong>Právo vzniesť námietku voči spracovaniu podľa článku 21 GDPR.</strong></li>
                                        <li><strong>Právo odvolať súhlas so spracovaním osobných údajov.</strong></li>
                                    </ul>
                                    <p>
                                        Subjekt údajov má ďalej právo podať sťažnosť Úradu pre ochranu osobných údajov v prípade, že
                                        má
                                        podozrenie, že bolo porušené jeho právo na ochranu údajov.
                                    </p>
                                </li>

                                <li>
                                    <h3>Poskytovanie osobných údajov</h3>
                                    <p>Prevádzkovateľ informuje dotknutú osobu, že poskytovanie jej osobných údajov, ku ktorých
                                        získavaniu dochádza prostredníctvom webovej stránky, nie je zákonnou ani zmluvnou
                                        požiadavkou.
                                        Neposkytnutie osobných údajov nemá pre dotknutú osobu žiadne negatívne následky.
                                        Neposkytnutie
                                        osobných údajov môže mať za následok obmedzenie využívania niektorých doplnkových služieb
                                        prevádzkovateľa.</p>
                                </li>

                                <li>
                                    <h3>Kontaktný formulár a spracúvanie osobných údajov</h3>
                                    <ul>
                                        <li>Účel spracúvania osobných údajov
                                            <p>V prípade, ak dochádza k získavaniu osobných údajov dotknutej osoby prostredníctvom
                                                kontaktného formulára umiestneného na webovej stránke, osobné údaje v rozsahu meno,
                                                e-mail, prípadne v rozsahu osobných údajov zadaných do textu správy doručovanej
                                                prostredníctvom kontaktného formulára sú spracúvané na účely kontaktovania
                                                prevádzkovateľa a zabezpečenia vzájomnej komunikácie medzi dotknutou osobou a
                                                prevádzkovateľom v súvislosti s akýmikoľvek produktmi a službami prevádzkovateľa
                                                a/alebo v súvislosti s vybavovaním podnetov a poskytovaním potrebných informácií
                                                dotknutej osobe.
                                            </p>
                                        </li>
                                        <li>Právny základ spracúvania
                                            <p>Osobné údaje návštevníka webovej stránky, ktorého osobného údaje boli získané
                                                prostredníctvom kontaktného formulára sú spracúvané na základe oprávneného záujmu
                                                prevádzkovateľa (čl. 6 ods. 1 písm. f) GDPR). Prevádzkovateľ pred vykonávaním
                                                spracúvania osobných údajov na tomto právnom základe dôsledne preskúmal, či výkon
                                                takejto spracovateľskej operácie nepredstavuje neprimeraný zásah do práv a slobôd
                                                dotknutej osoby, a za týmto účelom uskutočnil test proporcionality.</p>
                                            <p>Oprávnený záujem prevádzkovateľa je daný snahou prevádzkovateľa zaistiť vybavovanie
                                                podnetov dotknutej osoby a/alebo poskytovanie iných informácií o prevádzkovateľom
                                                poskytovaných službách.</p>
                                        </li>
                                        <li>Doba uchovávania osobných údajov
                                            <p>Osobné údaje dotknutej osoby získané prostredníctvom kontaktného formulára sú
                                                spracúvané po dobu 1 roka odo dňa získania osobných údajov dotknutej osoby.</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Podmienky zabezpečenia osobných údajov</h3>
                                    <p>Prevádzkovateľ vyhlasuje, že prijal všetky vhodné technické a organizačné opatrenia na
                                        zabezpečenie osobných údajov.
                                        Prevádzkovateľ vyhlasuje, že k osobným údajom majú prístup iba osoby, ktoré sú ním poverené.
                                    </p>
                                </li>

                                <li>
                                    <h3>Záverečné ustanovenia</h3>
                                    <p>S týmito podmienkami súhlasíte zaškrtnutím súhlasu prostredníctvom kontaktného formulára.
                                        Zaškrtnutím súhlasu potvrdzujete, že ste sa oboznámil(a) s podmienkami ochrany osobných
                                        údajov a
                                        že ich plne akceptujete.
                                        Prevádzkovateľ má právo tieto podmienky zmeniť. Novú verziu podmienok ochrany osobných
                                        údajov
                                        zverejní na svojej internetovej stránke.
                                    </p>
                                </li>

                                <li>
                                    <h3>Nastavenia cookies</h3>
                                    <p><Link to="/cookies">Prečítajte si viac o využívaní súborov cookie</Link></p>
                                </li>

                            </ol>
                            <p>V Trnave, dňa 01.01.2023.</p>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
