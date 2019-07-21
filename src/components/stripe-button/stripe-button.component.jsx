import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ( {price} ) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_LLj27VaDyibjD7ViEUI8j5ka007nx0LAhR';
	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}

	return(
		<StripeCheckout 
			label='Pay Now'
			name="crwn Clothing Ltd."
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;