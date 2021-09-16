const YourOrder = () => (
    <div className="yourOrder">
        <div className="yourOrderSummary">
            <div className="yourOrderSummaryTextContainer">
                <h3 className="yourOrderSummaryMainText">Il tuo ordine </h3>
                <span className="yourOrderSummaryMinorText">2 prodotti</span>
            </div>
            <img src="/food-basket.svg" className="yourOrderSummaryImage"
            width="100" height="60" />
        </div>

        <div className="yourOrderItemContainer">
            <p className="yourOrderItemText>1x</p>
            <p className="yourOrderItemText>Gyoza Con Gamberi 220G Vici</p>
            <p>€4,40</p>
        </div>

        <div className="yourOrderItemContainerSecond yourOrderItemContainer">
            <p className="yourOrderItemText">1x</p>
            <p className="yourOrderItemText">Gyoza Con Gamberi 220G Vici</p>
            <p>€4,40</p>
        </div>

        <a href="#" className="yourOrderAllergiesButton">Aggiungi Allergie</a>

        <div className="yourOrderItemContainer yourOrderItemContainerSecond">
            <p className="yourOrderItemText">Prodotto</p>
            <p>€4,40</p>
        </div>

        <div className="yourOrderItemContainer yourOrderItemContainerSecond">
            <p className="yourOrderItemText">Consegna</p>
            <p>€4,40</p>
        </div>

        <div className="yourOrderItemContainer yourOrderItemContainerSecond">
            <p className="yourOrderItemText">Sovrapprezzo per gli ordini sotto €15 in questo negozio. </p>
            <p>€4,40</p>
        </div>

        <p className="yourOrderContactlessNotification">Consegna senza contatto: quando possibile, i corrieri lasceranno l'ordine davanti alla tua porta. Seleziona la carta di credito per questa opzione.</p>
        
        
        

    </div>
);


export default YourOrder;