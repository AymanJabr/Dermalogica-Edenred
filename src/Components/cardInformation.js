const CardInformation = () => (
    <div class="expectedTime">
        <button class="expectedTimeDropdownButton">
            <div className="expectedTimeOuterElementsContainer">
                <div className="expectedTimeInnerElementsContainer">
                    <img className="expectedTimeClockSVG" src=
                        "/visa-card.svg"
                        width="30" height="24" />
                    <div className="expectedTimeInnerTextsContainer">
                        <p className="expectedTimeInnerText">Carta che termina con 4119</p>
                    </div>
                </div>

                <img className="expectedTimeDownArrowSVG" src=
                    "/down-arrow.svg"
                    width="19" height="13" />
            </div>
        </button>

        <div class="expectedTimeContent">
            <a href="#">
                <p>**** **** **** 4119</p>
            </a>
        </div>
    </div >
);


export default CardInformation;