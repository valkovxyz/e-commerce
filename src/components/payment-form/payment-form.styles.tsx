import styled from 'styled-components';
import Button from '../button/button.component';
import { CardElement } from "@stripe/react-stripe-js";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  @media screen and (max-width: 800px) {
    margin: auto;
    width: 60vw;
    justify-content: center;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  @media screen and (max-width: 800px) {
    margin: 10px;
    width: 90vw;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const PaymentButton = styled(Button)`
  margin-top: 20px;
  margin-left: auto;
  @media screen and (max-width: 800px) {
    margin: 30px auto;
  }
`

export const CardElementForm = styled(CardElement)`
  @media screen and (max-width: 800px) {
    width: 300px;
  }
`