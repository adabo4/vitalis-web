// modalData.js
export const modalData = {
    error: {
        title: "OOPS",
        content: (
            <p>
                Odoslanie formuláru zlyhalo. Na odstránení chyby intenzívne pracujeme.
                Medzitým sa môžete objednať na vyšetrenie telefonicky na čísle:
                <a href="tel:033/ 593 60 43"> 033/ 593 60 43</a> alebo mailom na <a href="mailto:vitalis@of.sk">vitalis@of.sk</a>
            </p>
        )
    },
    success: {
        title: "Ďakujeme za rezerváciu.",
        content: (
            <p>
                Odoslanie formuláru prebehlo úspešne. Počkajte prosím na potvrdzujúci email.
            </p>
        )
    },
    checkbox: {
        title: "OOPS",
        content: (
            <p>
                Na úspešné odoslanie, zaškrtnite prosím súhlas s podmienkami ochrany osobných údajov.
            </p>
        )
    }
};
