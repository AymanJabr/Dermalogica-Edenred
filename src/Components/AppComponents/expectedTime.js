const ExpectedTime = () => (
    <div class="expectedTime expectedTimeApp">
        <div className="expectedTimeAppDelivery">
            <img className="expectedTimeDeliverySVG" src=
                "/delivery.svg"
                width="24" height="18" />
            
            Consegna


        </div>

        <button class="expectedTimeDropdownButton">
            <div className="expectedTimeOuterElementsContainer">
                <div className="expectedTimeInnerElementsContainer">
                    <img className="expectedTimeClockSVG" src=
                        "/wall-clock.svg"
                        width="24" height="18" />
                    <div className="expectedTimeInnerTextsContainer">
                        <p className="expectedTimeInnerText">Il prima possible</p>
                        <p className="expectedTimeInnerTextTime">20 - 30 min</p>
                    </div>
                </div>

            </div>
        </button>

        <div class="expectedTimeContent">
            <a href="#">
                <p>Il prima possible</p>
                <p>20 - 30 min</p>
            </a>
            <a href="#">
                <p>30 - 40 min</p>
            </a>
            <a href="#">
                <p>40 - 60 min</p>
            </a>
        </div>
    </div >
);


export default ExpectedTime;