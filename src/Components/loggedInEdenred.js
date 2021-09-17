import DiscountTicketsGrid from "./discountTicketsGrid";

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

        <DiscountTicketsGrid />

    </div>
);


export default LoggedInEdenred;