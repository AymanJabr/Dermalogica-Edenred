const YourOrder = () => (
    <div className="yourOrderAppContainer">
        <div className="yourOrderAppHeadersContainer">
            <div className="yourOrderAppHeaderText">
                Il tuo ordine
            </div>

            <div className="yourOrderAppHeaderMenuButton">
                Visualizza il menù
            </div>
        </div>



        <div className="yourOrderAppBodyItemContainer">
            <div className="yourOrderAppItemCounter">
                1
            </div>

            <div className="yourOrderAppItemDescriptionContainer">
                <h4 className="yourOrderAppItemDescriptionMainHeader">
                    Menù Chicken Mix
                </h4>

                <p className="yourOrderAppItemDescriptionMinorHeader">
                    Tè alla Pesca 33ci
                </p>

            </div>

            <div className="yourOrderAppItemPrice">
                6,00 €
            </div>

        </div>

    </div>
);


export default YourOrder;