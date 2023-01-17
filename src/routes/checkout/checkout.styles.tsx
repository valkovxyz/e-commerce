import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  
`

export const CheckoutHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid darkgrey;
  align-items: center;
  @media screen and (max-width: 800px) {
    margin: 10px;
    width: 90vw;
    justify-content: flex-start;
  }
`

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 18%;
  
  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 800px) {
    width: 22%;
    margin-bottom: 10px;
    
    &:last-child {
      width: 12%;
    }
  }
`

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`
