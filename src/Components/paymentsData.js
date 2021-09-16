import CardInformation from "./cardInformation";

const PaymentsData = () => (
    <div className="paymentsData">
        <h1>Dati di pagamento</h1>
        <CardInformation />
        <label className="paymentReceiptOptionText" for="receipt"><input className="paymentReceiptOption" type="checkbox" name="receipt" value="false" /> Vorrei ricevera una fattura</label>

    </div>
);


export default PaymentsData;