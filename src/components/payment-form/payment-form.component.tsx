import { useState, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js'

import { BUTTON_TYPES_CLASSES } from '../button/button.component';
import { FormContainer, PaymentFormContainer, PaymentButton, CardElementForm } from './payment-form.styles';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

const ifValidCard = (card: StripeCardElement | null): card is StripeCardElement => card !== null

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return
    }

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/payment', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: amount * 100 })
    }).then(res => res.json());

    const { paymentIntent: { client_secret } } = response;

    const cardDetails = elements.getElement(CardElement);

    if (!ifValidCard(cardDetails)) return

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        }
      }
    });

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert('Wrong credit card details')
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment successful')
      }
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2> Credit Card Payment: </h2>
        <CardElementForm />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPES_CLASSES.inverted}>
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm;