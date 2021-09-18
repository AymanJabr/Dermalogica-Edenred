import DeliveryOptions from '../Components/AppComponents/deliveryOptions';
import ExpectedTime from '../Components/AppComponents/expectedTime'
import NextButton from '../Components/AppComponents/nextButton';
import PartnerPlatform from '../Components/AppComponents/partnerPlatform';
import Summary from '../Components/AppComponents/summary';
import YourOrder from '../Components/AppComponents/yourOrder';

const CheckoutMobile = () => (
    <div className="checkoutMobilePage">
        <h5 className="checkoutMobileHeader">Il tuo carello</h5>
        <ExpectedTime />
        <DeliveryOptions />
        <YourOrder />
        <PartnerPlatform />
        <Summary />
        <NextButton />

        

    </div>
);


export default CheckoutMobile;