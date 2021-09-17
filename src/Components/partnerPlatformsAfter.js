import AutomaticTicketSelection from "./automaticTicketSelection";
import ErrorNotification from "./errorNotification";
import LoggedInEdenred from "./loggedInEdenred";

const PartnerPlatformsAfter = () => (
    <div className="partnerPlatforms">

        <h1 className="partnerPlatformsHeaderText">Piattaforma Partner</h1>
        
        <LoggedInEdenred />

        <ErrorNotification />
        <AutomaticTicketSelection />

    </div>
);


export default PartnerPlatformsAfter;