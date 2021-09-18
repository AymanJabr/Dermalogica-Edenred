const DeliveryOptions = () => (
    <div className="deliveryOptionsAppContainer">
        Opizioni di consegna
        <div className="deliveryOptionsAppButtonsContainer">
            <div className="deliveryOptionButton deliveryOptionButtonDoor">
                <img className="deliveryOptionButtonSVG deliveryOptionButtonDoorSVG" src=
                    "/door.svg"
                    width="20" height="16" />
                
                <div className="deliveryOptionButtonDoorText">Lascia alla porta</div>
            </div>

            <div className="deliveryOptionButton deliveryOptionButtonPerson">
                <img className="deliveryOptionButtonSVG deliveryOptionButtonPersonSVG" src=
                    "/person.svg"
                    width="20" height="16" />

                <div className="deliveryOptionButtonPersonText">Incontra alla porta</div>
            </div>

        </div>

    </div>
);


export default DeliveryOptions;