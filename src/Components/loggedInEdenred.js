const LoggedInEdenred = () => (
    <div className="partnerPlatforms">

        <div className="loggedInBannerContainer">
            <div className="loggedInEdenred loggedInEdenredAfter">
                <p className="edenredButtonText">Ticket <br /> Compliments </p>
                <img src="/edenred-logo.png" className="edenredButtonLogo" />
            </div>
            <div className="loggedInExitContainer">
                <div className="loggedInHeader">Accesso a Edenred Effutuato</div>
                <a className="loggedInExitButton" href="#">ESCI</a>
            </div>
        </div>

        <div className="discountTicketsGrid">

            <div className="discountTicketsHeaders header1">BUONO</div>
            <div className="discountTicketsHeaders header2">QUANTITÀ</div>
            <div className="discountTicketsHeaders header3">TOTALE</div>

            <div className="discountTicketsSeparator separator1"></div>
            <div className="discountTicketsSeparator separator2"></div>
            <div className="discountTicketsSeparator separator3"></div>

            <div className="discountTicketsCounterContainer container1">
                <button className="discountTicketsCounterButtonActive">-</button>
                <div className="discountTicketsTextType2">2</div>
                <button className="discountTicketsCounterButtonInactive">+</button>

            </div>

            <div className="discountTicketsCounterContainer container2">
                <button className="discountTicketsCounterButtonActive">-</button>
                <div className="discountTicketsTextType2">1</div>
                <button className="discountTicketsCounterButtonActive">+</button>

            </div>

            <div className="discountTicketsTextType1 num1">€5</div>
            <div className="discountTicketsTextType2 num2">€10</div>
            <div className="discountTicketsTextType1 num3">€10</div>
            <div className="discountTicketsTextType2 num4">€10</div>
            <div className="discountTicketsTextType2 num5">€20</div>
            <div className="discountTicketsTextType2 total">Total</div>

        </div>

    </div>
);


export default LoggedInEdenred;