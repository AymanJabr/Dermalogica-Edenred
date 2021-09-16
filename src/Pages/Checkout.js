import ExpectedTime from "../Components/expectedTime";
import PartnerPlatforms from "../Components/partnerPlatforms";
import PartnerPlatformsAfter from "../Components/partnerPlatformsAfter";
import PaymentsData from "../Components/paymentsData";
import PromotionalCodes from "../Components/promotionalCodes";
import YourOrder from "../Components/yourOrder";


const Checkout = () => (
    <div className="checkoutPage">

        <div className="checkoutPageLeftContainer">
            <ExpectedTime />
            <PartnerPlatforms />
            <PartnerPlatformsAfter />
            <PaymentsData />
            <PromotionalCodes />
        </div>

        <YourOrder />
    </div>
);


export default Checkout;